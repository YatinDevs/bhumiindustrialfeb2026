// components/home/HeroSection.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Building2,
  FileText,
  Users,
  Handshake,
  Calculator,
  ScrollText,
} from "lucide-react";
import axiosInstance from "@/services/api";

// Icon mapping
const iconMap = {
  Handshake: Handshake,
  Building2: Building2,
  Calculator: Calculator,
  ScrollText: ScrollText,
  FileText: FileText,
  Users: Users,
  Phone: Phone,
  ArrowRight: ArrowRight,
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const response = await axiosInstance.get('/hero-slides');
      if (response.data.success) {
        setSlides(response.data.data);
      } else {
        // Fallback to default slides if API fails
        setSlides(getDefaultSlides());
      }
    } catch (error) {
      console.error('Error fetching hero slides:', error);
      setSlides(getDefaultSlides());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultSlides = () => [
    {
      id: 1,
      title: "Merger & Acquisition Advisory",
      subtitle: "Due Diligence | M&A Deals | Business Valuation",
      description:
        "Complete M&A advisory services for industrial units. Due diligence, business valuation, deal structuring, and post-merger integration. Nashik's trusted M&A consultants.",
      cta: {
        primary: {
          text: "Explore M&A Services",
          link: "/financial/due-diligence-merger-acquisition",
          icon: "Handshake",
        },
        secondary: {
          text: "Talk to Expert",
          link: "/contact",
          icon: "Phone",
        },
      },
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&q=80",
      mobileImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&q=80",
    },
    {
      id: 2,
      title: "Industrial Consulting Experts",
      subtitle: "MIDC Services | Project Finance | MSME Udyam",
      description:
        "27+ years of excellence in industrial project planning, MIDC approvals, and financial consulting across Nashik, Pune & Chakan.",
      cta: {
        primary: {
          text: "Explore Services",
          link: "/industrial",
          icon: "Building2",
        },
        secondary: {
          text: "Free Consultation",
          link: "/contact",
          icon: "Phone",
        },
      },
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&auto=format&q=80",
      mobileImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format&q=80",
    },
    {
      id: 3,
      title: "CMA Data & DPR Reports",
      subtitle: "Credit Monitoring Arrangement | Detailed Project Reports",
      description:
        "Professional CMA data and DPR report preparation for bank loans. 95%+ bank approval rate with our expertly crafted financial documents. Trusted by 3500+ industrial clients.",
      cta: {
        primary: {
          text: "CMA/DPR Services",
          link: "/financial/cma-cra-dpr-report",
          icon: "Calculator",
        },
        secondary: {
          text: "Talk to Expert",
          link: "/contact",
          icon: "Phone",
        },
      },
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&q=80",
      mobileImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&q=80",
    },
  ];

  useEffect(() => {
    if (slides.length === 0) return;

    // Preload critical images
    const preloadImages = () => {
      slides.forEach((slide, index) => {
        if (index < 2) {
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = window.innerWidth < 768 && slide.mobileImage ? slide.mobileImage : slide.image;
          link.fetchPriority = index === 0 ? "high" : "auto";
          document.head.appendChild(link);
        }
      });
    };
    preloadImages();

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleImageLoad = (slideId) => {
    setImagesLoaded((prev) => ({ ...prev, [slideId]: true }));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
  };

  if (loading) {
    return (
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-[#f97316] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-sm sm:text-base">Loading...</p>
        </div>
      </section>
    );
  }

  if (!slides.length) return null;

  return (
    <>
      {/* Preload LCP image with highest priority */}
      {slides[0] && (
        <>
          <link
            rel="preload"
            as="image"
            href={slides[0].image}
            media="(min-width: 768px)"
            fetchPriority="high"
          />
          {slides[0]?.mobileImage && (
            <link
              rel="preload"
              as="image"
              href={slides[0].mobileImage}
              media="(max-width: 767px)"
              fetchPriority="high"
            />
          )}
        </>
      )}

      <section 
        className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden bg-gray-900"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Fixed container with will-change for performance */}
        <div className="absolute inset-0" style={{ willChange: "transform" }}>
          {slides.map((slide, index) => {
            const PrimaryIcon = iconMap[slide.cta.primary.icon] || Handshake;
            const SecondaryIcon = iconMap[slide.cta.secondary.icon] || Phone;
            
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                style={{
                  willChange: "opacity",
                  contentVisibility: index === currentSlide ? "auto" : "hidden",
                }}
                aria-hidden={index !== currentSlide}
              >
                {/* Image with responsive sources */}
                <div className="absolute inset-0">
                  <picture>
                    <source
                      media="(max-width: 767px)"
                      srcSet={slide.mobileImage || slide.image}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={slide.image}
                    />
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index < 2}
                      fetchPriority={
                        index === 0 ? "high" : index === 1 ? "high" : "auto"
                      }
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 100vw"
                      quality={85}
                      onLoad={() => handleImageLoad(slide.id)}
                      style={{
                        objectPosition: 'center',
                      }}
                    />
                  </picture>
                  
                  {/* Overlay layers - adjusted for mobile */}
                  <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:from-black/10" />
                </div>

                {/* Content - Responsive padding and sizing */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
                  <div className="w-full max-w-2xl lg:max-w-3xl text-white">
                    {/* Subtitle - Smaller on mobile */}
                    <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                      {slide.subtitle}
                    </span>
                    
                    {/* Title - Responsive sizing */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight text-white drop-shadow-lg">
                      {slide.title}
                    </h1>
                    
                    {/* Description - Hide on very small screens, show truncated on mobile */}
                    <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/95 max-w-2xl drop-shadow-md">
                      {slide.description}
                    </p>
                    <p className="block sm:hidden text-sm mb-4 text-white/95 line-clamp-2 drop-shadow-md">
                      {slide.description}
                    </p>

                    {/* CTA Buttons - Always in a row on all screen sizes */}
                    <div className="flex flex-row flex-wrap gap-2 sm:gap-4">
                      <Link
                        href={slide.cta.primary.link}
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-4 bg-white text-[#ea580c] rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#fff7ed] hover:scale-105 transition-all shadow-xl group text-xs sm:text-base whitespace-nowrap"
                        prefetch={index === 0}
                      >
                        <PrimaryIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="truncate max-w-[120px] sm:max-w-none">{slide.cta.primary.text}</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden xs:block" />
                      </Link>
                      <Link
                        href={slide.cta.secondary.link}
                        className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-4 border-2 border-white text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm text-xs sm:text-base whitespace-nowrap"
                        prefetch={index === 0}
                      >
                        <SecondaryIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="truncate max-w-[100px] sm:max-w-none">{slide.cta.secondary.text}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows - Hide on mobile, show on tablet+ */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Slide Indicators - FIXED VERSION */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            >
              <div
                className={`
                  transition-all duration-300 rounded-full
                  ${index === currentSlide 
                    ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-white' 
                    : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/50 hover:bg-white/70'
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* Optional: Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </section>

      {/* Custom CSS for line clamp only - removed indicator styles */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        @media (min-width: 380px) {
          .truncate.max-w-\[100px\] {
            max-width: 120px;
          }
          .truncate.max-w-\[120px\] {
            max-width: 140px;
          }
        }
        
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
          .truncate.max-w-\[100px\] {
            max-width: none;
          }
          .truncate.max-w-\[120px\] {
            max-width: none;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;