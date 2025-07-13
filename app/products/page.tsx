'use client'
import { useState } from "react";
import { Search, Filter, ArrowRight, Wrench, Gauge, Shield, Zap } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "nozzles", name: "Fuelling Nozzles" },
    { id: "couplers", name: "Hydrant Couplers" },
    { id: "testing", name: "Quality Control" },
    { id: "bonding", name: "Static Bonding" }
  ];

  const products = [
    {
      id: 1,
      name: "Pressure Fuelling Nozzles",
      category: "nozzles",
      description: "Engineered for safety and efficiency, our field-proven nozzle designs meet the most demanding requirements.",
      features: ["Modular design", "Easy maintenance", "Safety certified"],
      image: "/turbine.png",
      icon: Wrench
    },
    {
      id: 2,
      name: "Hydrant Intake Couplers",
      category: "couplers",
      description: "Modular, durable construction for reliable fuel distribution systems across all aviation applications.",
      features: ["Corrosion resistant", "High flow rates", "Quick connect"],
      image: "/pipes.png",
      icon: Zap
    },
    {
      id: 3,
      name: "Quality Control & Testing",
      category: "testing",
      description: "Comprehensive testing equipment to ensure fuel quality and system integrity in all operations.",
      features: ["Precision testing", "Digital monitoring", "Compliance ready"],
      image: "/machinery.png",
      icon: Gauge
    },
    {
      id: 4,
      name: "Static Bonding Equipment",
      category: "bonding",
      description: "Advanced static bonding solutions for safe fuel handling and transfer operations.",
      features: ["Safety compliance", "Automatic operation", "Durable construction"],
      image: "/plane.png",
      icon: Shield
    },
    {
      id: 5,
      name: "Fuel Hose Systems",
      category: "nozzles",
      description: "High-quality fuel hose systems designed for durability and reliability in aviation environments.",
      features: ["Flexible design", "Temperature resistant", "Long service life"],
      image: "/pipes.png",
      icon: Wrench
    },
    {
      id: 6,
      name: "Monitoring Systems",
      category: "testing",
      description: "Advanced monitoring systems for real-time fuel quality and system performance tracking.",
      features: ["Real-time data", "Remote monitoring", "Alert systems"],
      image: "/facility.png",
      icon: Gauge
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header />
      <div>
        {/* Hero Section */}
        <HeroSection
          title="Our Innovative Products"
          subtitle="Quality Solutions for Aviation Fueling"
          description="Discover our comprehensive range of aviation fueling equipment designed for safety, efficiency, and reliability."
          backgroundImage="/turbine.png"
        />

        {/* Search and Filter Section */}
        <section id="next-section" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-white"
                        : "bg-white text-matrix-gray hover:bg-primary/10"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Product Catalog"
              title="Professional Aviation Solutions"
              description={`Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="card-hover group">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <product.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-matrix-gray">{product.name}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-matrix-gray mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Sidebar */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-matrix-gray mb-4">Need Custom Solutions?</h3>
              <p className="text-muted-foreground mb-6">
                Our experts can help you find the perfect products for your specific requirements.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  <a href="tel:+441932269869">
                    Call: +44 (0) 1932 269869
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full">
                  <a href="mailto:sales@matrixaviation.com">
                    Email: sales@matrixaviation.com
                  </a>
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

export default Products;