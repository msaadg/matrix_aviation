'use client'
import { useState, useEffect } from "react";
import { Search, Filter, ArrowRight, Package } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/app/components/ui/hero-section";
import SectionHeader from "@/app/components/ui/section-header";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import { getProductsWithCategories } from "@/app/lib/sanity-service";
import { filterProducts, getImageUrl } from "@/app/lib/product-utils";
import { Product, ProductCategory } from "@/app/lib/types";
import { getPrimaryPhone, getPrimaryEmail, getPhoneLink, getEmailLink } from "@/app/lib/contact-utils";
import { useContact } from "@/app/context/ContactContext";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const { contact } = useContact();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsWithCategories();
        setProducts(data.products);
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = filterProducts([product], searchTerm).length > 0;
    const matchesCategory = selectedCategory === "all" || product.category?.slug?.current === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const primaryPhone = getPrimaryPhone(contact);
  const primaryEmail = getPrimaryEmail(contact);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
        {/* Hero Section */}
        <HeroSection
          title="Our Innovative Products"
          subtitle="Quality Solutions for Aviation Fueling"
          description="Discover our comprehensive range of aviation fueling equipment designed for safety, efficiency, and reliability."
          backgroundImage="/turbine.jpg"
        />

        {/* Search and Filter Section */}
        <section id="next-section" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search field */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            {/* Categories dropdown */}
            <div className="relative min-w-[200px]">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-12 px-4 pr-8 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
            <option 
              key={category._id} 
              value={category.slug?.current || ""}
            >
              {category.title}
            </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
            </div>
          </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Product Catalog"
              title="Professional Aviation Solutions"
              description={`Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {filteredProducts.map((product) => (
                <Card key={product._id} className="card-hover group">
                  <CardContent className="p-0">
                    <div className="aspect-video overflow-hidden rounded-t-lg bg-white">
                      <img
                        src={getImageUrl(product.mainImage, 400, 300)}
                        alt={product.mainImage?.alt || product.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Package className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-matrix-gray">{product.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {product.shortDescription}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {product.features?.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link
                        href={`/products/${product.slug?.current}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-matrix-gray mb-2">No products found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Sidebar */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold text-matrix-gray mb-4">Need Custom Solutions?</h3>
              <p className="text-muted-foreground mb-6">
                Our experts can help you find the perfect products for your specific requirements.
              </p>
              
              <div className="space-y-4">
                {primaryPhone && (
                  <Button size="lg" className="w-full">
                    <a href={getPhoneLink(primaryPhone)}>
                      Call: {primaryPhone.number}
                    </a>
                  </Button>
                )}
                
                {primaryEmail && (
                  <Button variant="outline" size="lg" className="w-full">
                    <a href={getEmailLink(primaryEmail)}>
                      Email: {primaryEmail.email}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Products;