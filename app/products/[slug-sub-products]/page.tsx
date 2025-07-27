'use client'
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { Search, ArrowRight, Package, Download } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { DownloadButton } from "@/app/components/ui/download-button";
import { Input } from "@/app/components/ui/input";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import { getProductBySlug } from "@/app/lib/sanity-service";
import { 
  generateProductBreadcrumb, 
  getImageUrl, 
  getFileUrl, 
  hasDatasheet,
  getDatasheetFilename 
} from "@/app/lib/product-utils";
import { Product, SubProduct } from "@/app/lib/types";

const SubProductsPage = () => {
  const { 'slug-sub-products': productSlug } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState<Product | null>(null);
  const [subProducts, setSubProducts] = useState<SubProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!productSlug || typeof productSlug !== 'string') return;
      
      try {
        const data = await getProductBySlug(productSlug);
        if (data) {
          setProduct(data.product);
          setSubProducts(data.subProducts);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productSlug]);

  const filteredSubProducts = subProducts.filter(subProduct =>
    subProduct.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subProduct.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subProduct.modelNumber?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading sub products...</p>
        </div>
      </div>
    );
  }

  if (!product) {
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

  const breadcrumbs = generateProductBreadcrumb(product);

  return (
    <div>
      <Header variant="dark" />
      <div className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title={product.title}
          subtitle={product.subtitle || "Quality Aviation Solutions"}
          description={product.description || "Discover our comprehensive range of specialized aviation equipment designed for safety, efficiency, and reliability."}
          backgroundImage={getImageUrl(product.mainImage, 1920, 1080) || "/turbine.png"}
        />

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

        {/* Search Section */}
        {subProducts.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center justify-between">
                <SectionHeader
                  subtitle="Product Range"
                  title={`${product.title} Sub Products`}
                  description={`Explore our range of ${subProducts.length} specialized products`}
                />
                
                <div className="relative w-full max-w-md mt-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search sub products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {subProducts.length === 0 ? (
              <div className="text-center py-16">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-matrix-gray mb-2">No Sub Products Available</h3>
                <p className="text-muted-foreground mb-6">
                  This product category doesn&apos;t have specific sub products yet.
                </p>
                <Link href="/products" className="text-primary hover:text-primary/80">
                  Browse All Products
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSubProducts.map((subProduct) => (
                  <Card key={subProduct._id} className="card-hover group">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={getImageUrl(subProduct.mainImage, 400, 300)}
                          alt={subProduct.mainImage?.alt || subProduct.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-matrix-gray mb-2">
                              {subProduct.title}
                            </h3>
                            {subProduct.modelNumber && (
                              <div className="text-sm text-primary font-semibold">
                                Model: {subProduct.modelNumber}
                              </div>
                            )}
                          </div>
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center ml-4">
                            <Package className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {subProduct.shortDescription}
                        </p>
                        
                        {/* Features */}
                        {subProduct.features && subProduct.features.length > 0 && (
                          <div className="space-y-2 mb-6">
                            {subProduct.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/products/${product.slug?.current}/${subProduct.slug?.current}`}
                            className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                          >
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                          
                          {hasDatasheet(subProduct) && (
                            <DownloadButton 
                              url={getFileUrl(subProduct.datasheet, getDatasheetFilename(subProduct)) || '#'}
                              filename={getDatasheetFilename(subProduct)}
                              variant="ghost"
                              size="sm"
                              className="text-muted-foreground hover:text-primary p-2"
                            >
                              <Download className="w-4 h-4" />
                            </DownloadButton>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredSubProducts.length === 0 && subProducts.length > 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-matrix-gray mb-2">No Results Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-matrix-gray mb-4">Need Custom Solutions?</h3>
              <p className="text-muted-foreground mb-6">
                Our experts can help you find the perfect products for your specific requirements.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full" asChild>
                  <a href="tel:+441932269869">Call: +44 (0) 1932 269869</a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="mailto:sales@matrixaviation.com">Email: sales@matrixaviation.com</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SubProductsPage;
