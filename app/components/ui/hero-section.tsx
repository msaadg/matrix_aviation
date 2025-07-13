import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaAction?: () => void;
  showScrollIndicator?: boolean;
  overlayOpacity?: number;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = "Discover More",
  ctaAction,
  showScrollIndicator = true,
  overlayOpacity = 0.6,
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div
          className="absolute inset-0 bg-black transition-opacity duration-1000"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {subtitle && (
            <p className="text-primary text-lg font-medium tracking-wide uppercase">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight text-shadow">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-shadow-sm">
              {description}
            </p>
          )}
          
          {ctaText && (
            <div className="pt-8">
              <Button
                onClick={ctaAction || scrollToNextSection}
                size="lg"
                className="btn-hero group"
              >
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300 animate-float"
          >
            <span className="text-sm uppercase tracking-wide">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;