"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { getConditionsOfSale } from "@/app/lib/sanity-service";
import { ConditionsOfSale } from "@/app/lib/types";
import { urlFor } from "@/sanity/lib/image";

const ConditionsOfSalePage = () => {
  const [conditionsData, setConditionsData] = useState<ConditionsOfSale | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConditionsData = async () => {
      try {
        const data = await getConditionsOfSale();
        setConditionsData(data);
      } catch (error) {
        console.error('Error fetching conditions of sale data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchConditionsData();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-matrix-gray">Loading conditions of sale...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <HeroSection
          title={conditionsData?.title || "Conditions of Sale"}
          subtitle={conditionsData?.subtitle || "Terms of Purchase"}
          description={conditionsData?.description || "These terms govern all transactions with Matrix Aviation."}
          backgroundImage={
            conditionsData?.backgroundImage 
              ? urlFor(conditionsData.backgroundImage).width(1920).height(900).url()
              : "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=900&fit=crop"
          }
          overlayOpacity={0.7}
          showScrollIndicator={false}
        />

        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title={conditionsData?.sectionTitle || "Terms & Conditions"}
              subtitle={conditionsData?.sectionSubtitle || "Legal terms governing your purchases"}
            />

            <div className="max-w-4xl mx-auto mt-8">
              <div className="lg:col-span-3">
                <div className="space-y-8">
                  {conditionsData?.terms?.map((term) => (
                    <div key={term.number}>
                      <h3 className="text-2xl font-bold text-primary mb-4">
                        {term.number}. {term.title}
                      </h3>
                      <p className="text-matrix-gray leading-relaxed mb-4">
                        {term.content}
                      </p>
                    </div>
                  )) || (
                    // Fallback content if no data from Sanity
                    <>
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-4">
                          1. General Terms
                        </h3>
                        <p className="text-matrix-gray leading-relaxed mb-4">
                          These conditions apply to all sales of goods and services by Matrix Aviation. 
                          By placing an order, you accept these terms in full.
                        </p>
                      </div>
                      {/* Add other fallback terms here if needed */}
                    </>
                  )}
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

export default ConditionsOfSalePage;