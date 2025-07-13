"use client";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

const ConditionsOfSale = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <HeroSection
          title="Conditions of Sale"
          subtitle="Terms of Purchase"
          description="These terms govern all transactions with Matrix Aviation."
          backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=900&fit=crop"
          overlayOpacity={0.7}
          showScrollIndicator={false}
        />

        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Terms & Conditions"
              subtitle="Legal terms governing your purchases"
            />

            <div className="max-w-4xl mx-auto mt-8">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        1. General Terms
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        These conditions apply to all sales of goods and services by Matrix Aviation. 
                        By placing an order, you accept these terms in full.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        2. Quotations and Orders
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        All quotations are valid for 30 days unless otherwise stated. Orders are 
                        accepted subject to availability and our written acknowledgment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        3. Pricing and Payment
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        Prices are quoted in GBP and exclude VAT unless stated otherwise. Payment 
                        terms are net 30 days from invoice date unless agreed otherwise.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        4. Specifications
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        Goods will conform to specifications agreed at time of order. Minor variations 
                        may occur due to manufacturing processes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        5. Delivery
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        Delivery dates are estimates and not guaranteed. Buyer is responsible for 
                        offloading at delivery point. Risk passes to buyer upon delivery.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        6. Returns and Warranty
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        Returns require prior authorization. Warranty terms vary by product and 
                        are specified in individual product documentation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        7. Limitation of Liability
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        Our liability is limited to the purchase price of goods. We exclude 
                        liability for consequential or indirect losses.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        8. Force Majeure
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        We are not liable for delays caused by circumstances beyond our reasonable 
                        control, including but not limited to acts of nature, war, or government action.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        9. Governing Law
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        These terms are governed by English law and subject to the exclusive 
                        jurisdiction of the English courts.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        10. Amendments
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        These terms may only be amended in writing and signed by both parties. 
                        Any conflicting terms in purchase orders are expressly rejected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-muted rounded-lg p-6">
                    <h4 className="text-xl font-bold text-matrix-gray mb-4">
                      Delivery Schedule
                    </h4>
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500">Delivery Timeline</span>
                    </div>
                    <p className="text-sm text-matrix-gray leading-relaxed">
                      Typical delivery schedules for standard products and custom orders.
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

export default ConditionsOfSale;