'use client'
import { ArrowRight, Shield, Zap, Globe, Users, Award, TrendingUp } from "lucide-react";
import Link from 'next/link';
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const Home = () => {

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Engineered with the highest safety standards for aviation fuel handling and distribution.",
      image: "/turbine.png"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology solutions that define the future of aviation fueling systems.",
      image: "/pipes.png"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving major oil companies, airports, and manufacturers worldwide with reliable solutions.",
      image: "/warehouse_facility.png"
    }
  ];

  return (
    <div>
      <Header />
      <div className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection
          title="Welcome to Matrix Aviation"
          subtitle="Innovative Solutions in Aviation Fueling"
          description="At Matrix Aviation, we deliver state-of-the-art fueling systems with a commitment to safety, quality, and environmental stewardship, ensuring the future of aviation."
          backgroundImage="/plane.png"
          ctaText="Discover More"
        />

        {/* About Section */}
        <section
          id="next-section"
          data-section="about"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="About Matrix Aviation"
              title="Specialists in Aviation Fueling"
              description="Founded with a vision to revolutionize aviation fueling, Matrix Aviation combines over a decade of expertise with cutting-edge technology."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className={`card-hover transition-all duration-700 opacity-100 translate-y-0`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-matrix-gray">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview */}
        <section
          data-section="products"
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Our Products"
              title="Quality Solutions for Aviation Fueling"
              description="Explore our range of durable, innovative fueling solutions designed for safety and efficiency."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-matrix-gray mb-3">Pressure Fuelling Nozzles</h3>
                  <p className="text-muted-foreground mb-4">
                    Engineered for safety and efficiency, our field-proven nozzle designs meet the most demanding requirements.
                  </p>
                  <Link href={"/products"} className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-matrix-gray mb-3">Hydrant Intake Couplers</h3>
                  <p className="text-muted-foreground mb-4">
                    Modular, durable construction for reliable fuel distribution systems across all aviation applications.
                  </p>
                  <Link href={"/products"} className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-matrix-gray mb-3">Quality Control & Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive testing equipment to ensure fuel quality and system integrity in all operations.
                  </p>
                  <Link href={"/products"} className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href={"/products"}>
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          data-section="contact"
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="Get in Touch"
                  title="Ready to Transform Your Aviation Operations?"
                  description="Contact our team of experts to discuss your specific requirements and discover how Matrix Aviation can enhance your fueling operations."
                  centered={false}
                />

                <div className="space-y-6 mt-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-matrix-gray">Expert Consultation</div>
                      <div className="text-muted-foreground">Personalized solutions for your needs</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-matrix-gray">Quality Assurance</div>
                      <div className="text-muted-foreground">Certified and tested solutions</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-matrix-gray">Global Support</div>
                      <div className="text-muted-foreground">Worldwide service and maintenance</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button size="lg" className="flex-1">
                    <a href="tel:+441932269869" className="flex items-center">
                      Call Now: +44 (0) 1932 269869
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <a href="mailto:sales@matrixaviation.com">
                      Email Us
                    </a>
                  </Button>
                </div>
              </div>

              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/facility.png"
                  alt="Matrix Aviation Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;