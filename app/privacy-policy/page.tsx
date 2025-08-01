"use client"
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Shield, Lock, Eye } from "lucide-react";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <HeroSection
          title="Privacy Policy"
          subtitle="Your Data, Our Commitment"
          description="This policy outlines how Matrix Aviation processes your personal information collected via forms, orders, or inquiries."
          backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=800&fit=crop"
          overlayOpacity={0.6}
          showScrollIndicator={false}
        />

        <section id="next-section" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Data Protection"
              subtitle="How we collect, use, and protect your information"
            />

            <div className="max-w-6xl mx-auto pt-4">
              <div className="grid lg:grid-cols-5 gap-12 mt-8">
                <div className="lg:col-span-3">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        Data We Collect
                      </h3>
                      <div className="space-y-4 text-matrix-gray leading-relaxed">
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Identity Information:</h4>
                          <p>Name, title, company name, job role</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Contact Information:</h4>
                          <p>Email address, phone number, postal address</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2">Technical Information:</h4>
                          <p>IP address, browser type, device information</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        How We Collect Data
                      </h3>
                      <ul className="space-y-3 text-matrix-gray leading-relaxed">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Website contact forms and inquiry submissions
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Product orders and quotation requests
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Email communications and phone conversations
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Trade shows and business meetings
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        Data Usage
                      </h3>
                      <ul className="space-y-3 text-matrix-gray leading-relaxed">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          With your consent for marketing communications
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          For fulfilling contracts and processing orders
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          To comply with legal obligations
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          For legitimate business interests
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-4">
                        Your Rights
                      </h3>
                      <ul className="space-y-3 text-matrix-gray leading-relaxed">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Right to access your personal data
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Right to rectification of inaccurate data
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Right to erasure (&quot;right to be forgotten&quot;)
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Right to data portability
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="space-y-8">
                    <div className="bg-muted rounded-lg p-6">
                      <h4 className="text-xl font-bold text-matrix-gray mb-4 flex items-center">
                        <Lock className="w-5 h-5 text-green-600 mr-2" />
                        Data Flow Process
                      </h4>
                      <ul className="space-y-2 text-sm text-matrix-gray">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">1.</span>
                          Collection via secure web forms and encrypted communications
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">2.</span>
                          Processing in our data center with access controls
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">3.</span>
                          Storage in encrypted databases with regular backups
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">4.</span>
                          Deletion upon request or when no longer necessary
                        </li>
                      </ul>
                    </div>

                    <div className="bg-muted rounded-lg p-6">
                      <h4 className="text-xl font-bold text-matrix-gray mb-4 flex items-center">
                        <Shield className="w-5 h-5 text-green-600 mr-2" />
                        Security Measures
                      </h4>
                      <ul className="space-y-2 text-sm text-matrix-gray">
                        <li className="flex items-center">
                          <Lock className="w-4 h-4 text-green-600 mr-2" />
                          SSL encryption for all data transmission
                        </li>
                        <li className="flex items-center">
                          <Eye className="w-4 h-4 text-green-600 mr-2" />
                          Regular security audits and monitoring
                        </li>
                        <li className="flex items-center">
                          <Shield className="w-4 h-4 text-green-600 mr-2" />
                          Secure servers with advanced threat detection
                        </li>
                      </ul>
                    </div>
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

export default PrivacyPolicy;