'use client'
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { 
  formatAddressMultiline, 
  getPrimaryPhone, 
  getPrimaryEmail, 
  getPhoneLink, 
  getEmailLink, 
  getSocialLinks 
} from "@/app/lib/contact-utils";
import { useContact } from "@/app/context/ContactContext";

const Footer = () => {
  const { contact } = useContact();

  const primaryPhone = getPrimaryPhone(contact);
  const primaryEmail = getPrimaryEmail(contact);
  const socialLinks = getSocialLinks(contact);

  return (
    <footer className="bg-matrix-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/logo.png"
              alt="Matrix Aviation"
              className="h-10 w-auto"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Matrix Aviation provides specialized equipment for aviation fuel storage, 
              distribution, and dispensing, serving major oil companies, airports, 
              and manufacturers globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/company"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <a
                  href="/brands"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
            <div className="space-y-3">
              {contact && contact.address && (
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div 
                    className="text-gray-300 text-sm"
                    dangerouslySetInnerHTML={{ __html: formatAddressMultiline(contact) }}
                  />
                </div>
              )}
              {primaryPhone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={getPhoneLink(primaryPhone)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {primaryPhone.number}
                  </a>
                </div>
              )}
              {primaryEmail && (
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href={getEmailLink(primaryEmail)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {primaryEmail.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.linkedin}
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.facebook}
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.instagram}
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.youtube}
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">
                Stay updated with our latest innovations and industry insights.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Matrix Aviation. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;