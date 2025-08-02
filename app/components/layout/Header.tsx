'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { getPrimaryPhone, getPhoneLink } from "@/app/lib/contact-utils";
import { useContact } from "@/app/context/ContactContext";

interface HeaderProps {
  variant?: 'default' | 'dark';
}

const Header = ({ variant = 'default' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { contact } = useContact();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/brands" },
  ];

  const companyDropdown = [
    { name: "Company Profile", href: "/company" },
    { name: "Conditions of Sale", href: "/conditions-of-sale" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const isActive = (path: string) => pathname === path;
  const isCompanyActive = companyDropdown.some(item => isActive(item.href));
  const primaryPhone = getPrimaryPhone(contact);

  // Helper function to get text color based on variant and scroll state
  const getTextColor = (isActive: boolean) => {
    if (isActive) return "text-primary";
    
    if (variant === 'dark') {
      return "text-black"; // Always black for dark variant
    }
    
    // Default variant behavior
    return isScrolled ? "text-matrix-gray" : "text-white";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Matrix Aviation"
              className="h-6 sm:h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${getTextColor(isActive(item.href))} after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 ${
                  isActive(item.href)
                    ? "after:w-full after:scale-x-100"
                    : "after:w-full after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center space-x-1 relative text-sm font-medium transition-colors duration-300 hover:text-primary ${getTextColor(isCompanyActive)} after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 ${
                    isCompanyActive
                      ? "after:w-full after:scale-x-100"
                      : "after:w-full after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                {companyDropdown.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-sm text-matrix-gray hover:bg-muted hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              href="/contact"
              className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${getTextColor(isActive("/contact"))} after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 ${
                isActive("/contact")
                  ? "after:w-full after:scale-x-100"
                  : "after:w-full after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {primaryPhone && (
              <a
                href={getPhoneLink(primaryPhone)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  variant === 'dark' 
                    ? "text-black" 
                    : isScrolled 
                      ? "text-matrix-gray" 
                      : "text-white"
                }`}
              >
                {primaryPhone.number}
              </a>
            )}
            <Link href="/contact">
              <Button
                variant="outline"
                className={`border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 ${
                  variant === 'default' && !isScrolled && "bg-primary text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
                }`}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              variant === 'dark' 
                ? "text-black hover:bg-black/10" 
                : isScrolled 
                  ? "text-matrix-gray hover:bg-gray-100" 
                  : "text-white hover:bg-white/10"
            } ${isMobileMenuOpen ? 'bg-white/10' : ''}`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
              }`} />
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-xs z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t z-50 animate-slide-down">
            <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
              <nav className="p-6 space-y-2">
                {/* Main Navigation Items */}
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 animate-fade-in ${
                      isActive(item.href)
                        ? "bg-primary text-white shadow-lg"
                        : "text-matrix-gray hover:bg-gray-50 hover:text-primary"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Company Section */}
                <div className="pt-2 animate-fade-in" style={{ animationDelay: `${navigation.length * 50}ms` }}>
                  <div className="mb-3">
                    <div className="flex items-center px-4 py-2 text-sm font-semibold text-matrix-gray/70 uppercase tracking-wider">
                      Company
                    </div>
                  </div>
                  <div className="space-y-1">
                    {companyDropdown.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-6 py-3 text-base font-medium rounded-xl transition-all duration-300 animate-fade-in ${
                          isActive(item.href)
                            ? "bg-primary text-white shadow-lg"
                            : "text-matrix-gray hover:bg-gray-50 hover:text-primary"
                        }`}
                        style={{ animationDelay: `${(navigation.length + 1 + index) * 50}ms` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Contact Link */}
                <div className="pt-2 animate-fade-in" style={{ animationDelay: `${(navigation.length + companyDropdown.length + 1) * 50}ms` }}>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 ${
                      isActive("/contact")
                        ? "bg-primary text-white shadow-lg"
                        : "text-matrix-gray hover:bg-gray-50 hover:text-primary"
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
                
                {/* Contact Information */}
                {primaryPhone && (
                  <div className="pt-6 mt-6 border-t border-gray-100 animate-fade-in" style={{ animationDelay: `${(navigation.length + companyDropdown.length + 2) * 50}ms` }}>
                    <div className="px-4">
                      <div className="text-sm font-semibold text-matrix-gray/70 mb-3">
                        Call Us
                      </div>
                      <a
                        href={getPhoneLink(primaryPhone)}
                        className="flex items-center px-4 py-3 text-base font-semibold text-primary bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {primaryPhone.number}
                      </a>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;