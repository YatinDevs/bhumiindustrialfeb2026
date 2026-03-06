"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  LandPlot,
  ScrollText,
  FileCheck,
  FileText,
  Handshake,
  Factory,
  TrendingUp,
  Calculator,
  Briefcase,
  PiggyBank,
  Shield,
  Droplets,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ServicesSection = () => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = 2; // Industrial and Financial

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const industrialServices = [
    {
      title: "Industrial Project Planning",
      href: "/industrial/industrial-project-planning",
      icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Complete project planning from concept to execution",
    },
    {
      title: "Bank Auction Deals",
      href: "/industrial/bank-auction-deals-sarfaesi",
      icon: <LandPlot className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "SARFAESI Act bank auction deals and bidding strategy",
    },
    {
      title: "DRT/NCLT Deals",
      href: "/industrial/drt-nclt-deals",
      icon: <ScrollText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Debt recovery tribunal and insolvency resolution",
    },
    {
      title: "MIDC Transfer Process",
      href: "/industrial/midc-transfer-process",
      icon: <Handshake className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Complete MIDC plot transfer and name change",
    },
    {
      title: "MIDC Water Connection",
      href: "/industrial/midc-water-mseb-connection",
      icon: <Droplets className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Water and electricity connection approvals",
    },
    {
      title: "Project Reports",
      href: "/industrial/midc-project-report",
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "DPR preparation for MIDC approvals",
    },
    {
      title: "DIC/WMDC NOC",
      href: "/industrial/dic-wmdc-noc",
      icon: <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "NOC from DIC and WMDC for industrial units",
    },
    {
      title: "Industrial Expansion",
      href: "/industrial/industrial-expansion-advisory",
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Strategic advisory for business expansion",
    },
    {
      title: "All MIDC Work",
      href: "/industrial/all-midc-work",
      icon: <Factory className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Complete MIDC-related consultancy services",
    },
  ];

  const financialServices = [
    {
      title: "Term Loans",
      href: "/financial/term-loans",
      icon: <PiggyBank className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Industrial term loans and project financing",
    },
    {
      title: "MSME Udyam Registration",
      href: "/financial/msme-udyam-registration",
      icon: <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Free Udyam registration with MSME benefits",
    },
    {
      title: "CMA/DPR Reports",
      href: "/financial/cma-cra-dpr-report",
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Complete bank loan documentation",
    },
    {
      title: "Working Capital",
      href: "/financial/cash-credit-working-capital",
      icon: <Calculator className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Cash credit and working capital loans",
    },
    {
      title: "Subsidy Compliance",
      href: "/financial/subsidy-compliance",
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Government subsidy and compliance support",
    },
    {
      title: "Due Diligence",
      href: "/financial/due-diligence-merger-acquisition",
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "M&A due diligence and financial advisory",
    },
    {
      title: "Cost Reduction",
      href: "/financial/cost-reduction-techniques",
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Business cost optimization strategies",
    },
    {
      title: "Start Up Project",
      href: "/financial/start-up-project",
      icon: <RocketIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "End-to-end startup financial planning",
    },
    {
      title: "Balance Sheet Analysis",
      href: "/financial/balance-sheet-analysis",
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      description: "Professional balance sheet evaluation",
    },
  ];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    
    if (touchStart - touchEnd > 75) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent block sm:inline">
              Industrial & Financial
            </span>{" "}
            Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            From MIDC approvals to project finance - we handle it all under one
            roof
          </p>
        </div>

        {/* Mobile Swipe Indicator */}
        {isMobile && (
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={(e) => goToSlide(0, e)}
              className="group"
              aria-label="Show Industrial Services"
            >
              <div
                className={`
                  transition-all duration-300 rounded-full
                  ${currentSlide === 0 
                    ? 'w-8 h-2 bg-[#f97316]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            </button>
            <button
              onClick={(e) => goToSlide(1, e)}
              className="group"
              aria-label="Show Financial Services"
            >
              <div
                className={`
                  transition-all duration-300 rounded-full
                  ${currentSlide === 1 
                    ? 'w-8 h-2 bg-[#f97316]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }
                `}
              />
            </button>
          </div>
        )}

        {/* Services Container with Mobile Swipe */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >          
          {/* Services Slider for Mobile */}
          <div 
            className={`flex transition-transform duration-300 ease-out ${
              isMobile ? 'gap-0' : 'flex-col'
            }`}
            style={{
              transform: isMobile ? `translateX(-${currentSlide * 100}%)` : 'none',
              width: isMobile ? `${totalSlides * 100}%` : 'auto',
            }}
          >
            {/* Industrial Services */}
            <div className={`${isMobile ? 'w-full flex-shrink-0' : 'w-full'}`}>
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                    Industrial Services{" "}
                    <span className="text-[#f97316] text-sm sm:text-base lg:text-lg ml-1">
                      ({industrialServices.length})
                    </span>
                  </h3>
                  {!isMobile && (
                    <Link
                      href="/industrial"
                      className="text-[#f97316] hover:text-[#ea580c] text-sm sm:text-base font-semibold flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  {(isMobile ? industrialServices.slice(0, 3) : industrialServices.slice(0, 6)).map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
                </div>

                
              </div>
            </div>

            {/* Financial Services */}
            <div className={`${isMobile ? 'w-full flex-shrink-0' : 'w-full'}`}>
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                    Financial Services{" "}
                    <span className="text-[#f97316] text-sm sm:text-base lg:text-lg ml-1">
                      ({financialServices.length})
                    </span>
                  </h3>
                  {!isMobile && (
                    <Link
                      href="/financial"
                      className="text-[#f97316] hover:text-[#ea580c] text-sm sm:text-base font-semibold flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                  {(isMobile ? financialServices.slice(0, 3) : financialServices.slice(0, 6)).map((service, index) => (
                    <ServiceCard key={index} service={service} />
                  ))}
                </div>

                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Buttons - ALWAYS SIDE BY SIDE on ALL screens */}
        <div className="flex flex-row flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center mt-8 sm:mt-10 lg:mt-12">
  <Link
    href="/industrial"
    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 bg-[#f97316] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-lg group text-xs sm:text-sm lg:text-base whitespace-nowrap"
  >
    <Building2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
    <span>Industrial Services</span>
  </Link>
  <Link
    href="/financial"
    className="inline-flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 lg:py-4 bg-[#003366] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#002244] transition-all transform hover:scale-105 shadow-lg group text-xs sm:text-sm lg:text-base whitespace-nowrap"
  >
    <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
    <span>Financial Services</span>
  </Link>
</div>

        {/* Total Services Note */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
          Explore all {industrialServices.length + financialServices.length}+ services we offer across Maharashtra
        </p>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => (
  <Link
    href={service.href}
    className="group p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-white to-[#fff7ed] rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm sm:shadow-md lg:shadow-lg hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30"
  >
    <div className="text-[#f97316] mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
      {service.icon}
    </div>
    <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold mb-1 sm:mb-2 group-hover:text-[#f97316] transition-colors line-clamp-2">
      {service.title}
    </h4>
    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 line-clamp-2">
      {service.description}
    </p>
    <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[#f97316] text-xs sm:text-sm font-semibold">
      Learn More <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
    </span>
  </Link>
);

// Rocket Icon Component
const RocketIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export default ServicesSection;