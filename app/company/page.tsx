'use client'
import { useEffect, useState } from "react";
import { Users, Target, Award, Globe, TrendingUp, Shield } from "lucide-react";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { getCompanyInfo } from "@/app/lib/sanity-service";
import { Company } from "@/app/lib/types";
import { urlFor } from "@/sanity/lib/image";

const CompanyPage = () => {
  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const data = await getCompanyInfo();
        setCompanyData(data);
      } catch (error) {
        console.error('Error fetching company data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

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
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-matrix-gray">Loading company information...</p>
          </div>
        </div>
      ) : (
      <div>
        {/* Hero Section */}
        <HeroSection
          title={companyData?.title || "About Matrix Aviation"}
          subtitle="Specialists in Aviation Fueling"
          description={companyData?.heroDescription || "Established in 2016, Matrix Aviation supplies ground fueling and jet fuel testing equipment, serving leading oil companies, refineries, and airports."}
          backgroundImage="/warehouse_facility.png"
          showScrollIndicator={true}
        />

        {/* Company Story Section */}
        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle={companyData?.storySubtitle || "Our Story"}
                  title={companyData?.storyTitle || "Innovation Driven by Experience"}
                  description={companyData?.storyDescription || "Matrix Aviation delivers innovative fueling solutions tailored for the modern aviation industry. With a strong focus on safety, reliability, and technical excellence, we serve major oil companies, international airports, and aviation manufacturers across Pakistan."}
                  centered={false}
                />
                
                <div className="space-y-6 mt-8">
                  <p className="text-muted-foreground leading-relaxed">
                    {companyData?.additionalDescription || "Specializing in quality control systems, static bonding, and ground fueling equipment, our experienced team ensures every product meets the highest standards of performance and safety."}
                  </p>
                </div>
              </div>
              
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={companyData?.facilityImage ? urlFor(companyData.facilityImage).width(800).height(800).url() : "facility.png"}
                  alt={companyData?.facilityImage?.alt || "Matrix Aviation Facility"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
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
      )}
    <Footer />  
    </div>
  );
};

export default CompanyPage;