// components/PartnersShowcase.jsx
"use client";

import { 
  ambika, bajaj, bharatpetro, bhavik, bkg, cure, dabur, din, emic, fabweld, ford, hero, honda, hp, hyundai, 
  industry1, industry2, inorbit, lubnashik, lubpune, maccia, mahindra, mariott, midc, msme, omkar, phoenix, 
  prasad, precision, ptec, quality, sandal, signature, slidewell, starsprings, suzuki, tastel, tata, tvs, 
  vinam, yamaha, zigma, zoom_technologies 
} from "@/assets";
import Image from "next/image";
import { useState, useEffect } from "react";

// Membership/Association Logos
const membershipLogos = [
  { id: 1, name: "LUB Nashik", logo: lubnashik, alt: "LUB Nashik" },
  { id: 2, name: "LUB Pune", logo: lubpune, alt: "LUB Pune" },
  { id: 3, name: "MSME", logo: msme, alt: "MSME" },
  { id: 4, name: "MACCIA", logo: maccia, alt: "MACCIA" },
];

// Automotive Brands (whose dealers we provide financial services to)
const automotiveBrands = [
  { id: 1, name: "Suzuki", logo: suzuki, alt: "Suzuki" },
  { id: 2, name: "Mahindra", logo: mahindra, alt: "Mahindra" },
  { id: 3, name: "Bajaj", logo: bajaj, alt: "Bajaj" },
  { id: 4, name: "Honda", logo: honda, alt: "Honda" },
  { id: 5, name: "Hyundai", logo: hyundai, alt: "Hyundai" },
  { id: 6, name: "Yamaha", logo: yamaha, alt: "Yamaha" },
  { id: 7, name: "Hero", logo: hero, alt: "Hero" },
  { id: 8, name: "TVS", logo: tvs, alt: "TVS" },
  { id: 9, name: "TATA", logo: tata, alt: "TATA" },
  { id: 10, name: "FORD", logo: ford, alt: "FORD" },
];

// Industrial & MIDC Clients
const industrialClients = [
  { id: 1, name: "Sandal", logo: sandal, alt: "Sandal" },
  { id: 2, name: "Precision Auto", logo: precision, alt: "Precision Auto" },
  { id: 3, name: "Modal Cables", logo: midc, alt: "Modal Cables" },
  { id: 4, name: "Slidewell", logo: slidewell, alt: "Slidewell" },
  { id: 5, name: "Zoom Tech", logo: zoom_technologies, alt: "Zoom Tech" },
  { id: 6, name: "Inorbit", logo: inorbit, alt: "Inorbit" },
  { id: 7, name: "PTEC", logo: ptec, alt: "PTEC" },
  { id: 8, name: "Star Springs", logo: starsprings, alt: "Star Springs" },
  { id: 9, name: "EMIC", logo: emic, alt: "EMIC" },
  { id: 10, name: "Mariott", logo: mariott, alt: "Mariott" },
  { id: 11, name: "Bhavik", logo: bhavik, alt: "Bhavik" },
  { id: 12, name: "HP", logo: hp, alt: "HP" },
  { id: 13, name: "MIDC", logo: midc, alt: "MIDC" },
  { id: 14, name: "Phoenix", logo: phoenix, alt: "Phoenix" },
  { id: 15, name: "BKG", logo: bkg, alt: "BKG" },
  { id: 16, name: "Bharat Petro", logo: bharatpetro, alt: "Bharat Petro" },
  { id: 17, name: "Signature", logo: signature, alt: "Signature" },
  { id: 18, name: "Tastel", logo: tastel, alt: "Tastel" },
  { id: 19, name: "CURE", logo: cure, alt: "CURE" },
  { id: 20, name: "DIN Engg", logo: din, alt: "DIN Engg" },
  { id: 21, name: "Dabur", logo: dabur, alt: "Dabur" },
  { id: 22, name: "Quality", logo: quality, alt: "Quality" },
  { id: 23, name: "Fabweld", logo: fabweld, alt: "Fabweld" },
  { id: 24, name: "Vinam", logo: vinam, alt: "Vinam" },
  { id: 25, name: "Omkar", logo: omkar, alt: "Omkar" },
  { id: 26, name: "Zigma", logo: zigma, alt: "Zigma" },
  { id: 27, name: "Ambika", logo: ambika, alt: "Ambika" },
  { id: 28, name: "Prasad", logo: prasad, alt: "Prasad" },
];

// Duplicate arrays for seamless infinite scroll
const automotiveSlides = [...automotiveBrands, ...automotiveBrands];
const industrialSlides = [...industrialClients, ...industrialClients];

// Infinite Slider Component with CSS animation
function InfiniteSlider({ partners, speed = 30, direction = "left" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-[#fff7ed] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-[#fff7ed] to-transparent z-10"></div>
        <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center py-3 sm:py-4">
          {partners.slice(0, 4).map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-24 sm:w-32 lg:w-40 h-16 sm:h-20 lg:h-24 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center p-2 sm:p-3 lg:p-4"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={100}
                height={50}
                className="object-contain max-h-10 sm:max-h-12 lg:max-h-16 w-auto"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Overlays for smooth edges - responsive width */}
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-r from-[#fff7ed] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 lg:w-20 bg-gradient-to-l from-[#fff7ed] to-transparent z-10"></div>
      
      {/* Slider Container with CSS Animation */}
      <div 
        className={`flex gap-4 sm:gap-6 lg:gap-8 items-center py-3 sm:py-4 ${direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}
        style={{ 
          width: `${partners.length * (window.innerWidth < 640 ? 120 : window.innerWidth < 1024 ? 160 : 200)}px`,
          animationDuration: `${speed}s`
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex-shrink-0 w-24 sm:w-32 lg:w-40 h-16 sm:h-20 lg:h-24 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-2 sm:p-3 lg:p-4 group"
          >
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={100}
              height={50}
              className="object-contain max-h-10 sm:max-h-12 lg:max-h-16 w-auto group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-slide-left {
          animation: slide-left linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right linear infinite;
        }
        
        .animate-slide-left:hover,
        .animate-slide-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default function PartnersShowcase() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR, render a simplified version without animations
  if (!mounted) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fff7ed] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Membership Logos */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Our Associations
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Proud Members of Leading Industry Bodies
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Recognized and accredited by premier organizations across Maharashtra
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {membershipLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-lg transition-all border border-gray-100 flex flex-col items-center"
                >
                  <div className="h-16 sm:h-20 lg:h-24 w-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                    <Image
                      src={logo.logo}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="object-contain max-h-12 sm:max-h-16 lg:max-h-20 w-auto"
                      priority
                    />
                  </div>
                  <p className="text-center text-xs sm:text-sm lg:text-base font-semibold text-gray-800">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Simplified placeholders for sliders during SSR */}
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Dealer Finance Services
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Financial Solutions for Automotive Dealers
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                We provide term loans, working capital, and financial consulting to dealers of these leading automotive brands
              </p>
            </div>
            <div className="bg-white/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-inner">
              <div className="flex gap-3 sm:gap-4 lg:gap-6 items-center py-2 sm:py-3 overflow-x-auto pb-2">
                {automotiveBrands.slice(0, 4).map((brand) => (
                  <div
                    key={brand.id}
                    className="flex-shrink-0 w-20 sm:w-24 lg:w-28 h-14 sm:h-16 lg:h-20 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center p-2"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.alt}
                      width={80}
                      height={40}
                      className="object-contain max-h-8 sm:max-h-10 lg:max-h-12 w-auto"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Industrial & MIDC Clients
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                Partners in Industrial Growth Across Maharashtra
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
                We've facilitated MIDC approvals, plot transfers, and project planning for these esteemed clients
              </p>
            </div>
            <div className="bg-white/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-inner">
              <div className="flex gap-3 sm:gap-4 lg:gap-6 items-center py-2 sm:py-3 overflow-x-auto pb-2">
                {industrialClients.slice(0, 4).map((client) => (
                  <div
                    key={client.id}
                    className="flex-shrink-0 w-20 sm:w-24 lg:w-28 h-14 sm:h-16 lg:h-20 bg-white rounded-lg sm:rounded-xl shadow-sm flex items-center justify-center p-2"
                  >
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={80}
                      height={40}
                      className="object-contain max-h-8 sm:max-h-10 lg:max-h-12 w-auto"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fff7ed] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Membership Logos */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Our Associations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
              Proud Members of Leading Industry Bodies
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Recognized and accredited by premier organizations across Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {membershipLogos.map((logo) => (
              <div
                key={logo.id}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f97316]/20 flex flex-col items-center"
              >
                <div className="h-16 sm:h-20 lg:h-24 w-full flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                  <Image
                    src={logo.logo}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 sm:max-h-16 lg:max-h-20 w-auto group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                {/* <p className="text-center text-xs sm:text-sm lg:text-base font-semibold text-gray-800 group-hover:text-[#f97316] transition-colors">
                  {logo.name}
                </p> */}
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Automotive Dealer Finance Services Slider */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Dealer Finance Services
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Financial Solutions for Automotive Dealers
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              We provide term loans, working capital, and financial consulting to dealers of these leading automotive brands
            </p>
          </div>

          <div className="bg-white/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-inner">
            <InfiniteSlider partners={automotiveSlides} speed={30} direction="left" />
          </div>
        </div>

        {/* Section 3: Industrial & MIDC Clients Slider */}
        <div>
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Industrial & MIDC Clients
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Partners in Industrial Growth Across Maharashtra
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              We've facilitated MIDC approvals, plot transfers, and project planning for these esteemed clients
            </p>
          </div>

          <div className="bg-white/50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-inner">
            <InfiniteSlider partners={industrialSlides} speed={25} direction="right" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>4000+ Projects</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>27+ Years</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>500+ Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}