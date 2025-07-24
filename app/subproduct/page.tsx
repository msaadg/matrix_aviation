'use client'
import { useState } from "react";
import { Search, Filter, ArrowRight, Settings, Wrench, Gauge, Shield, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";

const SubProducts = () => {
  const searchParams = useSearchParams();
  const productId = searchParams?.get('product') || '1';
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productNames = {
    '1': 'Pressure Fuelling Nozzles',
    '2': 'Hydrant Intake Couplers',
    '3': 'Quality Control & Testing',
    '4': 'Static Bonding Equipment',
    '5': 'Fuel Hose Systems',
    '6': 'Monitoring Systems'
  };

  const categories = [
    { id: "all", name: "All Variants" },
    { id: "standard", name: "Standard" },
    { id: "heavy-duty", name: "Heavy Duty" },
    { id: "specialized", name: "Specialized" },
    { id: "custom", name: "Custom Solutions" }
  ];

  // Sub-products data based on the main product
  const subProducts = {
    '1': [ // Pressure Fuelling Nozzles
      {
        id: 'pn-001',
        name: "Standard Pressure Nozzle",
        category: "standard",
        description: "General-purpose pressure fuelling nozzle suitable for most commercial aircraft applications.",
        specifications: ["Flow Rate: 600 GPM", "Pressure: 50 PSI", "Material: Aluminum Alloy"],
        features: ["Lightweight design", "Easy maintenance", "Safety certified", "Corrosion resistant"],
        price: "Contact for pricing",
        image: "/turbine.png",
        icon: Wrench,
        inStock: true
      },
      {
        id: 'pn-002', 
        name: "Heavy-Duty Pressure Nozzle",
        category: "heavy-duty",
        description: "High-capacity nozzle designed for rapid fuelling of large commercial and military aircraft.",
        specifications: ["Flow Rate: 1200 GPM", "Pressure: 75 PSI", "Material: Stainless Steel"],
        features: ["High flow capacity", "Reinforced construction", "Military grade", "Extended durability"],
        price: "Contact for pricing",
        image: "/turbine.png",
        icon: Settings,
        inStock: true
      },
      {
        id: 'pn-003',
        name: "Specialized Aviation Nozzle",
        category: "specialized", 
        description: "Precision nozzle for specialized aircraft and unique fuelling requirements.",
        specifications: ["Flow Rate: 400 GPM", "Pressure: 60 PSI", "Material: Titanium Alloy"],
        features: ["Precision engineering", "Custom configurations", "Specialized applications", "Premium materials"],
        price: "Contact for pricing",
        image: "/turbine.png",
        icon: Gauge,
        inStock: false
      }
    ],
    '2': [ // Hydrant Intake Couplers
      {
        id: 'hc-001',
        name: "Standard Hydrant Coupler",
        category: "standard",
        description: "Reliable hydrant intake coupler for standard fuel distribution systems.",
        specifications: ["Size: 4 inch", "Material: Aluminum", "Connection: API Standard"],
        features: ["Quick connect", "Leak-proof seal", "Standard compatibility", "Easy installation"],
        price: "Contact for pricing", 
        image: "/pipes.png",
        icon: Zap,
        inStock: true
      },
      {
        id: 'hc-002',
        name: "Heavy-Duty Hydrant Coupler",
        category: "heavy-duty",
        description: "High-capacity coupler for heavy-duty fuel distribution applications.",
        specifications: ["Size: 6 inch", "Material: Stainless Steel", "Connection: Custom Flange"],
        features: ["High capacity", "Reinforced design", "Extended life", "Corrosion resistant"],
        price: "Contact for pricing",
        image: "/pipes.png", 
        icon: Shield,
        inStock: true
      }
    ],
    '3': [ // Quality Control & Testing
      {
        id: 'qc-001',
        name: "Digital Fuel Tester",
        category: "standard",
        description: "Advanced digital testing equipment for comprehensive fuel quality analysis.",
        specifications: ["Display: LCD", "Tests: 15 Parameters", "Accuracy: ±0.1%"],
        features: ["Digital readout", "Multiple tests", "Data logging", "Portable design"],
        price: "Contact for pricing",
        image: "/machinery.png",
        icon: Gauge,
        inStock: true
      },
      {
        id: 'qc-002',
        name: "Automated Testing System",
        category: "specialized",
        description: "Fully automated fuel quality testing system for high-volume operations.",
        specifications: ["Capacity: 100 samples/hour", "Automation: Full", "Interface: Touch Screen"],
        features: ["Fully automated", "High throughput", "Advanced analytics", "Remote monitoring"],
        price: "Contact for pricing",
        image: "/machinery.png",
        icon: Settings,
        inStock: false
      }
    ],
    '4': [ // Static Bonding Equipment
      {
        id: 'sb-001',
        name: "Standard Bonding Unit",
        category: "standard", 
        description: "Essential static bonding equipment for safe fuel transfer operations.",
        specifications: ["Voltage: 12V", "Cable Length: 25ft", "Resistance: <10 Ohm"],
        features: ["Safety compliance", "Visual indicators", "Automatic operation", "Portable design"],
        price: "Contact for pricing",
        image: "/plane.png",
        icon: Shield,
        inStock: true
      }
    ],
    '5': [ // Fuel Hose Systems
      {
        id: 'fh-001',
        name: "Standard Fuel Hose",
        category: "standard",
        description: "High-quality fuel hose designed for aviation fuel transfer applications.",
        specifications: ["Length: 50ft", "Diameter: 4 inch", "Material: Synthetic Rubber"],
        features: ["Flexible design", "Temperature resistant", "Chemical resistant", "Long service life"],
        price: "Contact for pricing",
        image: "/pipes.png",
        icon: Wrench,
        inStock: true
      }
    ],
    '6': [ // Monitoring Systems
      {
        id: 'ms-001',
        name: "Real-Time Monitor",
        category: "standard",
        description: "Advanced monitoring system for real-time fuel quality and system performance.",
        specifications: ["Sensors: 8 Channel", "Display: Touch Screen", "Connectivity: WiFi/Ethernet"],
        features: ["Real-time data", "Remote access", "Alert system", "Data analytics"],
        price: "Contact for pricing",
        image: "/facility.png",
        icon: Gauge,
        inStock: true
      }
    ]
  };

  const currentSubProducts = subProducts[productId as keyof typeof subProducts] || [];
  const currentProductName = productNames[productId as keyof typeof productNames] || 'Products';

  const filteredSubProducts = currentSubProducts.filter(subProduct => {
    const matchesSearch = subProduct.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subProduct.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || subProduct.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Header variant="dark" />
      <div>
        {/* Hero Section */}
        <HeroSection
          title={`${currentProductName} Variants`}
          subtitle="Specialized Solutions"
          description={`Explore our comprehensive range of ${currentProductName.toLowerCase()} designed for specific applications and requirements.`}
          backgroundImage="/turbine.png"
        />

        {/* Breadcrumb Navigation */}
        <section className="py-6 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-primary hover:text-primary/80">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/products" className="text-primary hover:text-primary/80">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-matrix-gray font-medium">{currentProductName} Variants</span>
            </nav>
            
            {/* Quick stats */}
            <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
              <span>{currentSubProducts.length} total variants</span>
              <span>{filteredSubProducts.length} showing</span>
              <span>{currentSubProducts.filter(p => p.inStock).length} in stock</span>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder={`Search ${currentProductName.toLowerCase()} variants...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-matrix-gray"
                  >
                    ×
                  </button>
                )}
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 h-12 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white shadow-lg scale-105"
                        : "bg-white text-matrix-gray hover:bg-primary/10 border border-gray-200"
                    }`}
                  >
                    {category.name}
                    {selectedCategory === category.id && (
                      <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded">
                        {filteredSubProducts.length}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Product Variants"
              title="Choose Your Perfect Solution"
              description={`Showing ${filteredSubProducts.length} ${filteredSubProducts.length === 1 ? 'variant' : 'variants'} of ${currentProductName}`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {filteredSubProducts.map((subProduct) => (
                <Card key={subProduct.id} className="card-hover group border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg relative">
                      <img
                        src={subProduct.image}
                        alt={subProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute top-4 right-4">
                        {subProduct.inStock ? (
                          <Badge className="bg-green-500 text-white shadow-lg">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            In Stock
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800 shadow-lg">
                            Contact for Availability
                          </Badge>
                        )}
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90 text-matrix-gray capitalize">
                          {subProduct.category.replace('-', ' ')}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <subProduct.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-matrix-gray group-hover:text-primary transition-colors">
                              {subProduct.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {subProduct.description}
                      </p>

                      {/* Specifications */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-matrix-gray mb-2 text-sm uppercase tracking-wide">Specifications:</h4>
                        <div className="space-y-1">
                          {subProduct.specifications.slice(0, 2).map((spec, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{spec}</span>
                            </div>
                          ))}
                          {subProduct.specifications.length > 2 && (
                            <div className="text-xs text-primary">+{subProduct.specifications.length - 2} more specs</div>
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-matrix-gray mb-2 text-sm uppercase tracking-wide">Key Features:</h4>
                        <div className="space-y-1">
                          {subProduct.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm">
                          <span className="font-semibold text-matrix-gray">{subProduct.price}</span>
                        </div>
                        
                        <Link
                          href={`/products/${productId}/${subProduct.id}`}
                          className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 font-medium text-sm group transition-all"
                        >
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredSubProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <Filter className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-matrix-gray mb-3">No variants found</h3>
                  <p className="text-muted-foreground mb-8">
                    {searchTerm 
                      ? `No variants match "${searchTerm}" in the ${selectedCategory === 'all' ? 'selected' : selectedCategory} category.`
                      : `No variants available in the ${selectedCategory} category.`
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="inline-flex items-center"
                    >
                      Clear Filters
                    </Button>
                    <Link href="/products" className="inline-flex items-center">
                      <Button className="inline-flex items-center">
                        <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                        Browse All Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-matrix-gray mb-4">Need Technical Support?</h3>
              <p className="text-muted-foreground mb-6">
                Our technical experts can help you select the right variant for your specific application.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="w-full">
                  <a href="tel:+441932269869">
                    Call: +44 (0) 1932 269869
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full">
                  <a href="mailto:technical@matrixaviation.com">
                    Email: technical@matrixaviation.com
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

export default SubProducts;
