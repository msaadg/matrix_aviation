'use client'
import { Leaf, Recycle, Globe, Award, TrendingDown, CheckCircle } from "lucide-react";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const Sustainability = () => {
  const commitments = [
    {
      icon: Recycle,
      title: "Reduce and Reuse",
      description: "Developing repairable fueling systems to reduce waste and extend product lifecycles.",
      metric: "85% reduction in waste"
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "ElaFLEX products for environmental protection with climate-conscious design.",
      metric: "Carbon neutral by 2030"
    },
    {
      icon: TrendingDown,
      title: "Lowest Carbon Footprint",
      description: "Industry-leading low carbon footprint through optimized manufacturing processes.",
      metric: "40% lower emissions"
    },
    {
      icon: Award,
      title: "Signs of Quality",
      description: "Long service lives and full repairability ensuring sustainable operations.",
      metric: "20+ year lifespan"
    }
  ];

  const initiatives = [
    "Optimizing processes to protect natural resources",
    "Implementing circular economy principles",
    "Reducing energy consumption in manufacturing",
    "Developing eco-friendly material alternatives",
    "Supporting renewable energy integration",
    "Minimizing packaging and transportation impact"
  ];

  return (
    <div>
      <Header />
      <div>
        {/* Hero Section */}
        <HeroSection
          title="Doing Business With a Sustainable Mindset"
          subtitle="Our Commitment to a Greener Future"
          description="With over 100 years of family-driven innovation, Matrix Aviation is dedicated to products with long service lives, full repairability, and the industry's lowest carbon footprint."
          backgroundImage="/sustainability.png"
          overlayOpacity={0.5}
        />

        {/* Environmental Commitments */}
        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Environmental Stewardship"
              title="Our Sustainability Promise"
              description="We believe that environmental responsibility and business excellence go hand in hand."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {commitments.map((commitment) => (
                <Card key={commitment.title} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-matrix-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <commitment.icon className="w-8 h-8 text-matrix-green" />
                    </div>
                    <h3 className="text-xl font-bold text-matrix-gray mb-4">{commitment.title}</h3>
                    <p className="text-muted-foreground mb-4">{commitment.description}</p>
                    <div className="text-2xl font-bold text-matrix-green">{commitment.metric}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  subtitle="Sustainable Practices"
                  title="Leading by Example"
                  description="Our comprehensive approach to sustainability covers every aspect of our operations."
                  centered={false}
                />

                <div className="space-y-4 mt-8">
                  {initiatives.map((initiative, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-matrix-green mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{initiative}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button size="lg" className="bg-matrix-green hover:bg-matrix-green/90">
                    Download Sustainability Report
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src="/sustainability.png"
                    alt="Sustainability Cycle"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-matrix-green text-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold mb-2">100+</div>
                      <div className="text-sm">Years of Innovation</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-matrix-gray text-white">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold mb-2">Zero</div>
                      <div className="text-sm">Waste to Landfill</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ElaFLEX Partnership */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="/sustainability.png"
                  alt="ElaFLEX Environmental Protection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <SectionHeader
                  subtitle="Partner Spotlight"
                  title="ElaFLEX: Climate Protection Excellence"
                  description="Our partnership with ElaFLEX demonstrates our commitment to environmental protection through innovative product design."
                  centered={false}
                />

                <div className="space-y-6 mt-8">
                  <div className="p-6 bg-matrix-green/5 rounded-lg border-l-4 border-matrix-green">
                    <h4 className="font-semibold text-matrix-gray mb-2">Healthy and Wholesome</h4>
                    <p className="text-muted-foreground">Products designed with environmental and human health as primary considerations.</p>
                  </div>

                  <div className="p-6 bg-matrix-green/5 rounded-lg border-l-4 border-matrix-green">
                    <h4 className="font-semibold text-matrix-gray mb-2">Climate Protection</h4>
                    <p className="text-muted-foreground">Advanced materials and processes that actively contribute to climate protection goals.</p>
                  </div>

                  <div className="p-6 bg-matrix-green/5 rounded-lg border-l-4 border-matrix-green">
                    <h4 className="font-semibold text-matrix-gray mb-2">Circular Economy</h4>
                    <p className="text-muted-foreground">Full lifecycle consideration from design through end-of-life recycling and reuse.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-20 bg-matrix-gray text-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Future Vision"
              title="Our 2030 Commitments"
              description="Ambitious goals that will define the next decade of sustainable innovation."
              variant="light"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="p-8">
                  <Globe className="w-16 h-16 text-matrix-green mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Carbon Neutral</h3>
                  <p className="text-white/80">Achieve carbon neutrality across all operations and supply chains by 2030.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="p-8">
                  <Recycle className="w-16 h-16 text-matrix-green mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">100% Circular</h3>
                  <p className="text-white/80">Implement fully circular design principles in all new product developments.</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="p-8">
                  <Leaf className="w-16 h-16 text-matrix-green mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Nature Positive</h3>
                  <p className="text-white/80">Contribute positively to biodiversity and ecosystem restoration efforts.</p>
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

export default Sustainability;