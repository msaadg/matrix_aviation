'use client'
import { useEffect, useState } from 'react'
import { Star, ArrowRight, Shield, Award, Globe } from "lucide-react";
import Link from 'next/link';
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { Brand } from "@/app/lib/types";
import { getBrands } from "@/app/lib/sanity-service";
import { getImageUrl } from "@/app/lib/product-utils";
import { getPrimaryPhone, getPrimaryEmail, getPhoneLink, getEmailLink } from "@/app/lib/contact-utils";
import { useContact } from "@/app/context/ContactContext";

const Brands = () => {
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const { contact } = useContact();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const brandsData = await getBrands()
        setBrands(brandsData)
      } catch (error) {
        console.error('Error fetching brands:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

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

  const primaryPhone = getPrimaryPhone(contact);
  const primaryEmail = getPrimaryEmail(contact);

  return (
    <div>
      <Header />
      <div>
        {/* Hero Section */}
        <HeroSection
          title="Trusted Brands & Products"
          subtitle="Quality You Can Rely On"
          description="Matrix Aviation partners with globally respected manufacturers to deliver premium aviation fueling solutions that meet the highest industry standards."
          backgroundImage="/plane.jpg"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {loading ? (
                Array.from({ length: 9 }).map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-6">
                          <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                          <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                          <div className="space-y-2 mb-4">
                            <div className="h-3 bg-gray-200 rounded w-full"></div>
                            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                          <div className="h-4 bg-gray-200 rounded w-24"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : brands.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No brands available at the moment.</p>
                </div>
              ) : (
                brands.map((brand) => (
                  <Card key={brand._id} className="card-hover">
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <div className="h-48 overflow-hidden">
                          {brand.logo ? (
                            <img
                              src={getImageUrl(brand.logo)}
                              alt={brand.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                              <span className="text-primary font-bold text-3xl">
                                {brand.title.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <div className="mb-4">
                            {brand.associatedProduct?.category && (
                              <div className="text-sm text-primary font-semibold mb-1">
                                {brand.associatedProduct.category.title}
                              </div>
                            )}
                            <h3 className="text-xl font-bold text-matrix-gray mb-3">{brand.title}</h3>
                            
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                              {brand.shortDescription}
                            </p>
                          </div>
                          
                          {brand.associatedProduct && (
                            <Link
                              href={`/products/${brand.associatedProduct.slug.current}`}
                              className="inline-flex items-center text-primary hover:text-primary/80 font-medium group text-sm"
                            >
                              View Products
                              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
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
                  src="/navy-carter.jpg"
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
              {primaryPhone && (
                <Button size="lg" className="flex-1 bg-white text-matrix-gray hover:bg-white/90">
                  <a href={getPhoneLink(primaryPhone)}>
                    {primaryPhone.number}
                  </a>
                </Button>
              )}
              
              {primaryEmail && (
                <Button variant="outline" size="lg" className="flex-1 border-white text-matrix-gray hover:bg-white/90 hover:text-matrix-gray">
                  <a href={getEmailLink(primaryEmail)}>
                    Contact Us
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Brands;