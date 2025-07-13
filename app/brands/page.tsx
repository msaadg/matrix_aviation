'use client'
import { CheckCircle, Star, ArrowRight, Shield, Award, Globe } from "lucide-react";
import Link from 'next/link';
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const Brands = () => {
  const brands = [
    {
      name: "Eaton's Carter®",
      category: "Refueling Systems",
      description: "Advanced refueling systems designed for safety, efficiency, and reliability in demanding aviation environments.",
      features: ["Safety certified", "Proven reliability", "Global support"],
      image: "/turbine.png",
      specialties: ["Pressure fueling nozzles", "Aircraft refueling equipment", "Safety systems"]
    },
    {
      name: "MicroBMonitor2®",
      category: "Monitoring Solutions",
      description: "Cutting-edge monitoring technology for real-time fuel quality assessment and system performance tracking.",
      features: ["Real-time monitoring", "Digital interface", "Compliance ready"],
      image: "/facility.png",
      specialties: ["Fuel quality testing", "Contamination detection", "Digital monitoring"]
    },
    {
      name: "ElaFLEX",
      category: "Environmental Solutions",
      description: "Industry-leading environmental protection solutions with climate-conscious design and sustainable manufacturing.",
      features: ["Eco-friendly design", "Climate protection", "Sustainable materials"],
      image: "/sustainability.png",
      specialties: ["Environmental protection", "Sustainable design", "Climate solutions"]
    },
    {
      name: "Aljac",
      category: "Industrial Systems",
      description: "Comprehensive industrial automation and control systems for aviation fuel handling and distribution.",
      features: ["Automation systems", "Industrial grade", "Custom solutions"],
      image: "/warehouse_facility.png",
      specialties: ["Automation systems", "Fuel distribution", "Industrial controls"]
    },
    {
      name: "Matrix Precision",
      category: "Testing Equipment",
      description: "Precision testing and quality control equipment ensuring the highest standards in aviation fuel systems.",
      features: ["Precision testing", "Quality assurance", "Technical support"],
      image: "/machinery.png",
      specialties: ["Quality control", "Precision testing", "Calibration services"]
    },
    {
      name: "AeroFlex Systems",
      category: "Flexible Solutions",
      description: "Flexible hose and coupling systems designed for demanding aviation fuel handling applications.",
      features: ["Flexible design", "Durable construction", "Easy installation"],
      image: "/pipes.png",
      specialties: ["Fuel hoses", "Coupling systems", "Flexible connections"]
    }
  ];

  const partnerships = [
    {
      icon: Shield,
      title: "Safety Standards",
      description: "All partner brands meet or exceed international aviation safety standards."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure consistent performance and reliability."
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Worldwide service and support network for all partner brand products."
    }
  ];

  return (
    <div>
      <Header />
      <div>
        {/* Hero Section */}
        <HeroSection
          title="Trusted Brands & Products"
          subtitle="Quality You Can Rely On"
          description="Matrix Aviation partners with globally respected manufacturers to deliver premium aviation fueling solutions that meet the highest industry standards."
          backgroundImage="/plane.png"
        />

        {/* Partnership Values */}
        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Our Partnerships"
              title="Excellence Through Collaboration"
              description="We carefully select partners who share our commitment to innovation, safety, and quality."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {partnerships.map((partnership) => (
                <Card key={partnership.title} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <partnership.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-matrix-gray mb-4">{partnership.title}</h3>
                    <p className="text-muted-foreground">{partnership.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Featured Brands"
              title="Industry-Leading Partners"
              description="Discover our portfolio of trusted brand partners and their specialized solutions."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {brands.map((brand) => (
                <Card key={brand.name} className="card-hover">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="aspect-square md:aspect-auto overflow-hidden">
                        <img
                          src={brand.image}
                          alt={brand.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <div className="mb-4">
                            <div className="text-sm text-primary font-semibold mb-1">{brand.category}</div>
                            <h3 className="text-2xl font-bold text-matrix-gray">{brand.name}</h3>
                          </div>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {brand.description}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            {brand.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-matrix-gray mb-2">Specialties:</h4>
                            <div className="flex flex-wrap gap-2">
                              {brand.specialties.map((specialty, specialtyIndex) => (
                                <span
                                  key={specialtyIndex}
                                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                >
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <Link
                          href="/products"
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                        >
                          View Products
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="Quality Assurance"
                  title="Rigorous Standards"
                  description="Every brand partner undergoes comprehensive evaluation to ensure they meet our exacting standards for quality, safety, and performance."
                  centered={false}
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-matrix-gray mb-2">Certification Standards</h4>
                      <p className="text-muted-foreground">All products meet international aviation and safety certifications.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-matrix-gray mb-2">Performance Testing</h4>
                      <p className="text-muted-foreground">Comprehensive testing ensures reliability in demanding environments.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-matrix-gray mb-2">Global Compliance</h4>
                      <p className="text-muted-foreground">Products comply with international regulations and standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/facility.png"
                  alt="Quality Testing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-matrix-gray text-white">
          <div className="container mx-auto px-4 text-center">
            <SectionHeader
              subtitle="Get Started"
              title="Find the Right Brand for Your Needs"
              description="Our experts can help you select the best brand partners and products for your specific requirements."
              variant="light"
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-md mx-auto">
              <Button size="lg" className="flex-1 bg-white text-matrix-gray hover:bg-white/90">
                <a href="tel:+441932269869">
                  +44 (0) 1932 269869
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="flex-1 border-white text-matrix-gray hover:bg-white/90 hover:text-matrix-gray">
                <a href="mailto:sales@matrixaviation.com">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;