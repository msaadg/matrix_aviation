'use client'
import { useState } from "react";
import { useParams } from 'next/navigation';
import Link from "next/link";
import { CheckCircle, Download, Phone, Mail, Wrench } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app this would come from API
  const products = {
    "1": {
      name: "Pressure Fuelling Nozzles",
      category: "Fuelling Nozzles",
      description: "Engineered for safety and efficiency, our field-proven nozzle designs meet the most demanding requirements in aviation fuel handling.",
      longDescription: "Our Pressure Fuelling Nozzles represent the pinnacle of aviation fuel handling technology. Designed with over a decade of engineering expertise, these nozzles combine safety, reliability, and efficiency in a robust package that performs consistently in the most demanding environments. Each nozzle undergoes rigorous testing and quality control to ensure compliance with international aviation standards.",
      images: [
        "/turbine.png",
        "/pipes.png",
        "/machinery.png"
      ],
      features: [
        "Modular design for easy maintenance",
        "Safety certified to international standards",
        "Corrosion-resistant materials",
        "Quick-connect capabilities",
        "High-flow performance",
        "Temperature resistant operation"
      ],
      specifications: {
        "Flow Rate": "Up to 600 gallons per minute",
        "Operating Pressure": "50-300 PSI",
        "Temperature Range": "-40°F to +200°F",
        "Materials": "Stainless steel, aluminum alloy",
        "Certifications": "FAA, EASA, ICAO compliant",
        "Weight": "15-25 lbs depending on configuration"
      },
      applications: [
        "Commercial aircraft refueling",
        "Military aviation operations",
        "Airport fuel systems",
        "Fixed-base operator (FBO) services",
        "Aircraft maintenance facilities"
      ],
      icon: Wrench
    }
  };

  const product = products[id as keyof typeof products];

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

  return (
    <div>
      <Header variant="dark" />
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-matrix-gray">{product.name}</span>
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
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-primary font-semibold mb-2">{product.category}</div>
                  <h1 className="text-4xl font-bold text-matrix-gray mb-4">{product.name}</h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-matrix-gray">Key Features:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" className="flex-1">
                    <Phone className="mr-2 w-5 h-5" />
                    Call for Quote
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Mail className="mr-2 w-5 h-5" />
                    Request Info
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 w-5 h-5" />
                    Datasheet
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                        selectedImage === index ? "border-primary" : "border-gray-200"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-matrix-gray text-center mb-12">Related Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="card-hover">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4"></div>
                    <h3 className="text-lg font-semibold text-matrix-gray mb-2">Related Product {item}</h3>
                    <p className="text-muted-foreground mb-4">Brief description of the related product.</p>
                    <Link href={`/products/${item + 1}`} className="text-primary hover:text-primary/80 font-medium">
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;