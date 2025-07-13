'use client'
import { Users, Target, Award, Globe, TrendingUp, Shield } from "lucide-react";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const Company = () => {
  const milestones = [
    { year: "2010", title: "Company Founded", description: "Matrix Aviation established with a vision to revolutionize aviation fueling solutions." },
    { year: "2015", title: "Global Expansion", description: "Extended operations to serve international airports and oil companies worldwide." },
    { year: "2020", title: "Innovation Focus", description: "Launched advanced product lines with enhanced safety and efficiency features." },
    { year: "2024", title: "Sustainability Leadership", description: "Leading the industry in environmentally responsible fueling solutions." }
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every product and service is designed with safety as the paramount consideration."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising commitment to quality in every aspect of our operations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with consistent quality and reliable support."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously pushing boundaries to deliver cutting-edge solutions."
    }
  ];

  return (
    <div>
      <Header />
      <div>
        {/* Hero Section */}
        <HeroSection
          title="About Matrix Aviation"
          subtitle="Specialists in Aviation Fueling"
          description="Founded in 2010, Matrix Aviation provides specialized equipment for aviation fuel storage, distribution, and dispensing, serving major oil companies, airports, and manufacturers globally."
          backgroundImage="/warehouse_facility.png"
          showScrollIndicator={true}
        />

        {/* Company Story Section */}
        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="Our Story"
                  title="Innovation Driven by Experience"
                  description="Matrix Aviation was formed to innovate fueling solutions for the modern aviation industry. We combine deep technical expertise with a commitment to safety and reliability."
                  centered={false}
                />
                
                <div className="space-y-6 mt-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Since our founding, we have established ourselves as a trusted partner to major UK oil companies, 
                    international airports, and aviation manufacturers. Our focus on quality control systems, 
                    static bonding equipment, and specialized fueling solutions has made us an industry leader.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Our team of experts brings decades of combined experience in aviation fuel handling, 
                    ensuring that every product meets the highest standards of safety and performance.
                  </p>
                </div>
              </div>
              
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="facility.png"
                  alt="Matrix Aviation Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Our Journey"
              title="Key Milestones"
              description="A timeline of growth, innovation, and achievement in aviation fueling solutions."
            />

            <div className="relative mt-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-matrix-gray mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Our Values"
              title="What Drives Us"
              description="Our core values guide every decision and shape our commitment to excellence."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {values.map((value) => (
                <Card key={value.title} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-matrix-gray mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-matrix-gray text-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Leadership"
              title="Expert Team"
              description="Our leadership team brings decades of combined experience in aviation fueling and industrial automation."
              variant="light"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Technical Excellence</h3>
                  <p className="text-white/80">Our team consists of highly qualified engineers and technical specialists with extensive aviation industry experience.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Target className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Strategic Vision</h3>
                  <p className="text-white/80">Forward-thinking leadership that anticipates industry trends and drives innovation in aviation fueling solutions.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
                  <p className="text-white/80">International experience serving diverse markets and understanding global aviation industry requirements.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    <Footer />  
    </div>
  );
};

export default Company;