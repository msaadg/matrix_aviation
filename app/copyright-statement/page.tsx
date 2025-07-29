"use client"
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const CopyrightStatement = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <HeroSection
          title="Copyright Statement"
          subtitle="Usage Guidelines for Matrix Aviation Materials"
          description="Unless explicitly permitted, commercial or personal use of any catalog content is prohibited without prior written consent from Matrix Aviation."
          backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=800&fit=crop"
          overlayOpacity={0.5}
          showScrollIndicator={false}
        />

        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Copyright Information"
              subtitle="Important legal information regarding our materials"
            />

            <div className="max-w-4xl mx-auto mt-8">
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        Permission Requirements
                      </h3>
                      <ul className="space-y-3 text-matrix-gray leading-relaxed">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Seek permission by contacting Unit 1A, Watchmoor Point, Camberley, Surrey GU15 3AD, UK
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Call +44 (0) 1932 269869 for immediate assistance
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Email sales@matrixpakistan.com with your request details
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          All catalog content is protected under UK copyright law
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Written consent must be obtained before any reproduction
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        Permitted Uses
                      </h3>
                      <ul className="space-y-3 text-matrix-gray leading-relaxed">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Personal reference for legitimate business purposes
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Educational use with proper attribution
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Fair use excerpts for reviews or analysis
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        Prohibited Uses
                      </h3>
                      <ul className="space-y-3 text-matrix-gray leading-relaxed">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Commercial reproduction without written consent
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Distribution of catalog materials to third parties
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Modification of original content or branding
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-muted rounded-lg p-6">
                    <h4 className="text-xl font-bold text-matrix-gray mb-4">
                      Sample Catalog
                    </h4>
                    <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Catalog Sample Image</span>
                    </div>
                    <p className="text-sm text-matrix-gray leading-relaxed">
                      Example of protected catalog content that requires permission for use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CopyrightStatement;