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

// Financial Services Clients (companies we've done financial work for)
const financialClients = [
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

// Industry & MIDC Clients (companies we've done industrial/MIDC work for)
const industrialClients = [
  { id: 1, name: "Sandal", logo: sandal, alt: "Sandal" },
  { id: 2, name: "Precision Auto Industris PVT. LTD", logo: precision, alt: "Precision Auto Industris PVT. LTD" },
  { id: 3, name: "Modal Cables India", logo: midc, alt: "Modal Cables India" },
  { id: 4, name: "Slidewell-Meillur Tech-Pvt Ltd.", logo: slidewell, alt: "Slidewell-Meillur Tech-Pvt Ltd." },
  { id: 5, name: "Zoom Technologies", logo: zoom_technologies, alt: "Zoom Technologies" },
  { id: 6, name: "Inorbit", logo: inorbit, alt: "Inorbit" },
  { id: 7, name: "Industry", logo: industry1, alt: "Industry" },
  { id: 8, name: "PTEC", logo: ptec, alt: "PTEC" },
  { id: 9, name: "Star Springs Co.", logo: starsprings, alt: "Star Springs Co." },
  { id: 10, name: "EMIC", logo: emic, alt: "EMIC" },
  { id: 11, name: "Mariott", logo: mariott, alt: "Mariott" },
  { id: 12, name: "Bhavik", logo: bhavik, alt: "Bhavik" },
  { id: 13, name: "Hindustan Petroleum", logo: hp, alt: "Hindustan Petroleum" },
  { id: 14, name: "MIDC", logo: midc, alt: "MIDC" },
  { id: 15, name: "Phoenix Industries", logo: phoenix, alt: "Phoenix Industries" },
  { id: 16, name: "BKG", logo: bkg, alt: "BKG" },
  { id: 17, name: "Bharat Petroleum", logo: bharatpetro, alt: "Bharat Petroleum" },
  { id: 18, name: "Industry", logo: industry2, alt: "Industry" },
  { id: 19, name: "Signature International Foods", logo: signature, alt: "Signature International Foods" },
  { id: 20, name: "Tastel - The Food Connoisseurs", logo: tastel, alt: "Tastel - The Food Connoisseurs" },
  { id: 21, name: "CURE Pharmaceutical", logo: cure, alt: "CURE Pharmaceutical" },
  { id: 22, name: "DIN Engineering Services", logo: din, alt: "DIN Engineering Services" },
  { id: 23, name: "Dabur", logo: dabur, alt: "Dabur" },
  { id: 24, name: "Quality Plastofilms", logo: quality, alt: "Quality Plastofilms" },
  { id: 25, name: "Fabweld Engineers", logo: fabweld, alt: "Fabweld Engineers" },
  { id: 26, name: "Vinam Industries", logo: vinam, alt: "Vinam Industries" },
  { id: 27, name: "Omkar Industries", logo: omkar, alt: "Omkar Industries" },
  { id: 28, name: "Zigma", logo: zigma, alt: "Zigma" },
  { id: 29, name: "Ambika", logo: ambika, alt: "Ambika" },
  { id: 30, name: "Prasad Solutions", logo: prasad, alt: "Prasad Solutions" },
];

// Duplicate arrays for seamless infinite scroll
const financialSlides = [...financialClients, ...financialClients, ...financialClients];
const industrialSlides = [...industrialClients, ...industrialClients, ...industrialClients];

// Infinite Slider Component with CSS animation
function InfiniteSlider({ partners, speed = 30, direction = "left" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fff7ed] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fff7ed] to-transparent z-10"></div>
        <div className="flex gap-8 items-center py-4">
          {partners.slice(0, 6).map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain max-h-16 w-auto"
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
      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fff7ed] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fff7ed] to-transparent z-10"></div>
      
      {/* Slider Container with CSS Animation */}
      <div 
        className={`flex gap-8 items-center py-4 ${direction === "left" ? "animate-slide-left" : "animate-slide-right"}`}
        style={{ 
          width: `${partners.length * 200}px`,
          animationDuration: `${speed}s`
        }}
      >
        {partners.map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 group"
          >
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={120}
              height={60}
              className="object-contain max-h-16 w-auto group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
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
      <section className="py-20 bg-gradient-to-b from-[#fff7ed] to-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Membership Logos */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Our Associations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proud Members of Leading Industry Bodies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Recognized and accredited by premier organizations across Maharashtra
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {membershipLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col items-center"
                >
                  <div className="h-28 w-full flex items-center justify-center mb-4">
                    <Image
                      src={logo.logo}
                      alt={logo.alt}
                      width={160}
                      height={80}
                      className="object-contain max-h-24 w-auto"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simplified placeholders for sliders during SSR */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Financial Services Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Leading Automotive & Manufacturing Companies
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've provided financial consulting, term loans, and working capital solutions to these industry leaders
              </p>
            </div>
            <div className="bg-white/50 rounded-3xl p-8 shadow-inner">
              <div className="flex gap-8 items-center py-4 overflow-x-auto">
                {financialClients.slice(0, 5).map((client) => (
                  <div
                    key={client.id}
                    className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4"
                  >
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={120}
                      height={60}
                      className="object-contain max-h-16 w-auto"
                      priority
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Industrial & MIDC Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Partners in Industrial Growth Across Maharashtra
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've facilitated MIDC approvals, plot transfers, and project planning for these esteemed clients
              </p>
            </div>
            <div className="bg-white/50 rounded-3xl p-8 shadow-inner">
              <div className="flex gap-8 items-center py-4 overflow-x-auto">
                {industrialClients.slice(0, 5).map((client) => (
                  <div
                    key={client.id}
                    className="flex-shrink-0 w-40 h-24 bg-white rounded-xl shadow-sm flex items-center justify-center p-4"
                  >
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={120}
                      height={60}
                      className="object-contain max-h-16 w-auto"
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
    <section className="py-20 bg-gradient-to-b from-[#fff7ed] to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Membership Logos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
              Our Associations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proud Members of Leading Industry Bodies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized and accredited by premier organizations across Maharashtra
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {membershipLogos.map((logo) => (
              <div
                key={logo.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f97316]/20 flex flex-col items-center"
              >
                <div className="h-28 w-full flex items-center justify-center mb-4">
                  <Image
                    src={logo.logo}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="object-contain max-h-24 w-auto group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Financial Services Clients Slider */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
              Financial Services Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Automotive & Manufacturing Companies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've provided financial consulting, term loans, and working capital solutions to these industry leaders
            </p>
          </div>

          <div className="bg-white/50 rounded-3xl p-8 shadow-inner">
            <InfiniteSlider partners={financialSlides} speed={40} direction="left" />
          </div>
        </div>

        {/* Section 3: Industrial & MIDC Clients Slider */}
        <div>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
              Industrial & MIDC Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partners in Industrial Growth Across Maharashtra
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've facilitated MIDC approvals, plot transfers, and project planning for these esteemed clients
            </p>
          </div>

          <div className="bg-white/50 rounded-3xl p-8 shadow-inner">
            <InfiniteSlider partners={industrialSlides} speed={35} direction="right" />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>1000+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>27+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}