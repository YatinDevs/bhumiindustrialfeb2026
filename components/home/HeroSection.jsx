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
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  const slides = [
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
          icon: <Handshake className="w-5 h-5" />,
        },
        secondary: {
          text: "Talk to M&A Expert",
          link: "/contact",
          icon: <Phone className="w-5 h-5" />,
        },
      },
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&q=80",
      bgColor: "from-purple-900/40 to-[#f97316]/30", // Reduced opacity from 90 to 40
    },
    {
      id: 2,
      title: "Industrial Consulting Experts",
      subtitle: "MIDC Services | Project Finance | MSME Udyam",
      description:
        "26+ years of excellence in industrial project planning, MIDC approvals, and financial consulting across Nashik, Pune & Chakan.",
      cta: {
        primary: {
          text: "Explore Industrial Services",
          link: "/industrial",
          icon: <Building2 className="w-5 h-5" />,
        },
        secondary: {
          text: "Free Consultation",
          link: "/contact",
          icon: <Phone className="w-5 h-5" />,
        },
      },
      image:
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&auto=format&q=80",
      bgColor: "from-blue-900/40 to-[#f97316]/30", // Reduced opacity from 90 to 40
    },
    {
      id: 3,
      title: "Financial Solutions That Work",
      subtitle: "Term Loans | DPR/CMA Reports | Working Capital",
      description:
        "Comprehensive financial services including term loans, project finance, MSME Udyam registration, and subsidy compliance.",
      cta: {
        primary: {
          text: "View Financial Services",
          link: "/financial",
          icon: <FileText className="w-5 h-5" />,
        },
        secondary: {
          text: "Talk to Expert",
          link: "/contact",
          icon: <Phone className="w-5 h-5" />,
        },
      },
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&q=80",
      bgColor: "from-[#f97316]/30 to-blue-900/40", // Reduced opacity
    },
    {
      id: 4,
      title: "Your Trusted Partner Since 1999",
      subtitle: "Milind Rajhans - FI-ACC | 26+ Years Experience",
      description:
        "Led by Milind Rajhans, we've successfully handled 1000+ MIDC projects and financial consultations for industrial clients.",
      cta: {
        primary: {
          text: "Know Our Story",
          link: "/about",
          icon: <Users className="w-5 h-5" />,
        },
        secondary: {
          text: "Contact Us",
          link: "/contact",
          icon: <Phone className="w-5 h-5" />,
        },
      },
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&q=80",
      bgColor: "from-gray-900/40 to-[#f97316]/30", // Reduced opacity from 90 to 40
    },
  ];

  useEffect(() => {
    // Preload critical images
    const preloadImages = () => {
      slides.forEach((slide, index) => {
        if (index < 2) {
          // Preload first two slides
          const link = document.createElement("link");
          link.rel = "preload";
          link.as = "image";
          link.href = slide.image;
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

  return (
    <>
      {/* Preload LCP image with highest priority */}
      <link
        rel="preload"
        as="image"
        href={slides[0].image}
        fetchPriority="high"
      />

      <section className="relative h-[600px] lg:h-[700px] overflow-hidden bg-gray-900">
        {/* Fixed container with will-change for performance */}
        <div className="absolute inset-0" style={{ willChange: "transform" }}>
          {slides.map((slide, index) => (
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
              {/* Image with subtle overlay for better text readability */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index < 2}
                  fetchPriority={
                    index === 0 ? "high" : index === 1 ? "high" : "auto"
                  }
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  quality={90} // Increased quality from 85 to 90
                  onLoad={() => handleImageLoad(slide.id)}
                  style={{
                    aspectRatio: "16/9",
                  }}
                />
                
                {/* Multiple overlay layers for better control */}
                
                {/* 1. Very subtle dark overlay for text contrast - much lighter now */}
                <div className="absolute inset-0 bg-black/20" /> {/* Reduced from black/50 to black/20 */}
                
                {/* 2. Gradient overlay with much lower opacity */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`}
                  style={{ willChange: "opacity" }}
                />
                
                {/* 3. Very light vignette effect for focus */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
                <div className="max-w-3xl text-white">
                  <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
                    {slide.subtitle}
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg lg:text-xl mb-8 text-white/95 max-w-2xl drop-shadow-md">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.cta.primary.link}
                      className="flex items-center gap-2 px-8 py-4 bg-white text-[#ea580c] rounded-xl font-bold hover:bg-[#fff7ed] hover:scale-105 transition-all shadow-xl group"
                      prefetch={index === 0}
                    >
                      {slide.cta.primary.icon}
                      {slide.cta.primary.text}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={slide.cta.secondary.link}
                      className="flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-sm"
                      prefetch={index === 0}
                    >
                      {slide.cta.secondary.icon}
                      {slide.cta.secondary.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - made slightly more visible but still subtle */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="relative transition-all duration-300"
              style={{
                height: "8px",
                width: "8px",
                borderRadius: "9999px",
              }}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : "false"}
            >
              <span
                className="absolute inset-0 rounded-full transition-transform duration-300"
                style={{
                  backgroundColor:
                    index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
                  transform: index === currentSlide ? "scaleX(1)" : "scaleX(1)",
                  transformOrigin: "left",
                  willChange: "transform",
                }}
              />
            </button>
          ))}
        </div>

        {/* Optional: Very subtle pattern overlay for texture (only visible on close inspection) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-5" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}
        />
      </section>
    </>
  );
};

export default HeroSection;