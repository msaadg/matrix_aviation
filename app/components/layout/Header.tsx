'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

interface HeaderProps {
  variant?: 'default' | 'dark';
}

const Header = ({ variant = 'default' }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: "Sustainability", href: "/sustainability" },
    { name: "Conditions of Sale", href: "/conditions-of-sale" },
    { name: "Copyright Statement", href: "/copyright-statement" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const isActive = (path: string) => pathname === path;
  const isCompanyActive = companyDropdown.some(item => isActive(item.href));

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
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Matrix Aviation"
              className="h-8 lg:h-10 w-auto"
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
            <a
              href="tel:+441932269869"
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                variant === 'dark' 
                  ? "text-black" 
                  : isScrolled 
                    ? "text-matrix-gray" 
                    : "text-white"
              }`}
            >
              +44 (0) 1932 269869
            </a>
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
            className={`lg:hidden p-2 transition-colors duration-300 ${
              variant === 'dark' 
                ? "text-black" 
                : isScrolled 
                  ? "text-matrix-gray" 
                  : "text-white"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col space-y-1 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-300 ${
                    isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-matrix-gray hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Company Dropdown in Mobile */}
              <div className="space-y-1">
                <div className="px-4 py-2 text-sm font-medium text-matrix-gray border-b">
                  Company
                </div>
                {companyDropdown.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-8 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                      isActive(item.href)
                        ? "bg-primary text-white"
                        : "text-matrix-gray hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isActive("/contact")
                    ? "bg-primary text-white"
                    : "text-matrix-gray hover:bg-muted"
                }`}
              >
                Contact Us
              </Link>
              
              <div className="pt-4 border-t mt-4">
                <a
                  href="tel:+441932269869"
                  className="block px-4 py-2 text-sm text-matrix-gray"
                >
                  +44 (0) 1932 269869
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;