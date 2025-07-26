'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import Link from "next/link";
import { CheckCircle, Download, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import { getSubProductBySlug } from "@/app/lib/sanity-service";
import { 
  generateSubProductBreadcrumb, 
  getImageUrl, 
  getFileUrl, 
  hasDatasheet,
  formatSpecifications 
} from "@/app/lib/product-utils";
import { SubProduct } from "@/app/lib/types";

const ProductDetail = () => {
  const { 
    'slug-sub-product': subProductSlug 
  } = useParams();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [subProduct, setSubProduct] = useState<SubProduct | null>(null);
  const [relatedSubProducts, setRelatedSubProducts] = useState<SubProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!subProductSlug || typeof subProductSlug !== 'string') return;
      
      try {
        const data = await getSubProductBySlug(subProductSlug);
        if (data) {
          setSubProduct(data.subProduct);
          setRelatedSubProducts(data.relatedSubProducts);
        }
      } catch (error) {
        console.error('Error fetching sub product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [subProductSlug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!subProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-matrix-gray mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:text-primary/80">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbs = generateSubProductBreadcrumb(subProduct);
  const gallery = subProduct.gallery || [];
  const allImages = [subProduct.mainImage, ...gallery];
  const specifications = formatSpecifications(subProduct.specifications);

  return (
    <div>
      <Header variant="dark" />
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-2">
                {index > 0 && <span>/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-matrix-gray">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Product Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={getImageUrl(allImages[selectedImage], 600, 600)}
                    alt={allImages[selectedImage]?.alt || subProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image Thumbnails */}
                {allImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                          selectedImage === index ? "border-primary" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={getImageUrl(image, 150, 150)}
                          alt={`${subProduct.title} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-primary font-semibold mb-2">
                    {subProduct.parentProduct?.category?.title}
                  </div>
                  <h1 className="text-4xl font-bold text-matrix-gray mb-4">
                    {subProduct.title}
                  </h1>
                  {subProduct.modelNumber && (
                    <div className="text-lg text-muted-foreground mb-4">
                      Model: <span className="font-semibold">{subProduct.modelNumber}</span>
                    </div>
                  )}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {subProduct.shortDescription}
                  </p>
                </div>

                {/* Key Features */}
                {subProduct.features && subProduct.features.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-matrix-gray">Key Features:</h3>
                    <div className="space-y-2">
                      {subProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="flex-1" asChild>
                    <a href="tel:+441932269869">
                      <Phone className="mr-2 w-5 h-5" />
                      Call for Quote
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1" asChild>
                    <a href="mailto:sales@matrixaviation.com">
                      <Mail className="mr-2 w-5 h-5" />
                      Request Info
                    </a>
                  </Button>
                  {hasDatasheet(subProduct) && (
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                    >
                      <a 
                        href={getFileUrl(subProduct.datasheet) || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 w-5 h-5" />
                        Datasheet
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        {subProduct.longDescription && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-matrix-gray mb-8">Product Details</h2>
                <div className="prose prose-lg max-w-none">
                  {/* Render portable text content here if you have a renderer */}
                  <p className="text-muted-foreground leading-relaxed">
                    {/* For now, we'll show a placeholder. You'd normally render the portable text here */}
                    Detailed product information is available. Contact us for complete specifications.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Technical Specifications */}
        {specifications.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-matrix-gray mb-8">Technical Specifications</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                        <span className="font-medium text-matrix-gray">{spec.label}:</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedSubProducts.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-matrix-gray text-center mb-12">Related Products</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedSubProducts.slice(0, 3).map((relatedProduct) => (
                  <Card key={relatedProduct._id} className="card-hover">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={getImageUrl(relatedProduct.mainImage, 300, 200)}
                          alt={relatedProduct.mainImage?.alt || relatedProduct.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-matrix-gray mb-2">
                        {relatedProduct.title}
                      </h3>
                      {relatedProduct.modelNumber && (
                        <div className="text-sm text-primary font-semibold mb-2">
                          Model: {relatedProduct.modelNumber}
                        </div>
                      )}
                      <p className="text-muted-foreground mb-4">
                        {relatedProduct.shortDescription}
                      </p>
                      <Link 
                        href={`/products/${relatedProduct.parentProduct?.slug?.current}/${relatedProduct.slug?.current}`} 
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;