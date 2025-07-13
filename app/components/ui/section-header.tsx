import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  variant?: 'default' | 'light';
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  className = "",
  variant = 'default',
}: SectionHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <p
          className={`text-primary text-sm font-semibold uppercase tracking-wide transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {subtitle}
        </p>
      )}
      
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-700 delay-200 ${
          variant === 'light' ? 'text-white' : 'text-matrix-gray'
        } ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {title}
      </h2>
      
      {description && (
        <p
          className={`text-lg max-w-3xl transition-all duration-700 delay-300 ${
            variant === 'light' ? 'text-white/90' : 'text-muted-foreground'
          } ${
            centered ? "mx-auto" : ""
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;