"use client"
import { useState } from "react";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/app/hooks/use-toast";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { 
  getPrimaryPhone, 
  getPrimaryEmail, 
  getPhoneByLabel,
  getPhoneLink, 
  getEmailLink 
} from "@/app/lib/contact-utils";
import { useContact } from "@/app/context/ContactContext";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { contact } = useContact();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const primaryPhone = getPrimaryPhone(contact);
  const primaryEmail = getPrimaryEmail(contact);
  const telPhone = getPhoneByLabel(contact, 'tel');
  const mobilePhone = getPhoneByLabel(contact, 'mobile');

  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <HeroSection
          title="How Can We Assist?"
          subtitle="Get in Touch with Matrix Aviation"
          description="We provide top-tier fueling products and support—contact us via phone, email, or form."
          backgroundImage="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1920&h=800&fit=crop"
          overlayOpacity={0.5}
          showScrollIndicator={false}
        />

        <section id="next-section" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Contact Information"
              subtitle="Multiple ways to reach our team"
            />

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                <div className="mt-2 lg:col-span-3">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-matrix-gray mb-6">
                        Get in Touch
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {contact && contact.address && (
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center text-primary">
                                <MapPin className="w-5 h-5 mr-2" />
                                Address
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <address className="not-italic text-matrix-gray">
                                {contact.address.street}<br />
                                {contact.address.city}, {contact.address.state}<br />
                                Post code: {contact.address.postalCode} {contact.address.country}
                              </address>
                            </CardContent>
                          </Card>
                        )}

                        {(telPhone || primaryPhone) && (
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center text-primary">
                                <Phone className="w-5 h-5 mr-2" />
                                Phone
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-2">
                                {telPhone && (
                                  <a 
                                    href={getPhoneLink(telPhone)}
                                    className="block text-matrix-gray hover:text-primary transition-colors"
                                  >
                                    Tel: {telPhone.number}
                                  </a>
                                )}
                                {mobilePhone && (
                                  <a 
                                    href={getPhoneLink(mobilePhone)}
                                    className="block text-matrix-gray hover:text-primary transition-colors"
                                  >
                                    Mobile/WhatsApp: {mobilePhone.number}
                                  </a>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        )}

                        {primaryEmail && (
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center text-primary">
                                <Mail className="w-5 h-5 mr-2" />
                                Email
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <a 
                                href={getEmailLink(primaryEmail)}
                                className="text-matrix-gray hover:text-primary transition-colors"
                              >
                                {primaryEmail.email}
                              </a>
                            </CardContent>
                          </Card>
                        )}

                        {contact && contact.businessHours && (
                          <Card>
                            <CardHeader>
                              <CardTitle className="flex items-center text-primary">
                                <Clock className="w-5 h-5 mr-2" />
                                Hours
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-matrix-gray">
                                {contact.businessHours || "Monday - Friday: 8:00 AM - 5:00 PM"}
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </div>                    <div className="bg-muted rounded-lg p-6">
                      <h4 className="text-xl font-bold text-matrix-gray mb-4">
                        Office Location
                      </h4>
                      <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <img
                          src="/refueling.jpg"
                          alt="Matrix Aviation Facility"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-matrix-gray leading-relaxed">
                        Our modern facility houses our sales team and technical support staff 
                        ready to assist with your aviation fueling needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-primary">Send us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
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

export default ContactPage;