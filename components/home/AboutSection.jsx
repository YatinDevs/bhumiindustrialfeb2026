"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  ThumbsUp,
  ChevronRight,
  Phone,
} from "lucide-react";
import { founderImage } from "../../assets"; // Adjust path as needed

const AboutSection = () => {
  const stats = [
    {
      icon: <Calendar className="w-5 h-5" />,
      value: "27+",
      label: "Years of Excellence",
    },
    {
      icon: <Users className="w-5 h-5" />,
      value: "4000+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="w-5 h-5" />,
      value: "3500+",
      label: "Happy Clients",
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      value: "100%",
      label: "Client Satisfaction",
    },
  ];

  const milestones = [
    { year: "1999", text: "Started as FI-ACC Project Finance Consultant" },
    { year: "2005", text: "Expanded to MIDC consultancy services" },
    { year: "2010", text: "Started Financial Advisory vertical" },
    { year: "2015", text: "Established Bhumi Industrial Consultant by Milind P. Rajhans" },
    { year: "2026", text: "Serving 3500+ clients across Maharashtra" },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#fff7ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 py-1.5 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs font-semibold mb-3">
            About Bhumi Industrial
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Your Trusted Partner in{" "}
            <span className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent">
              Industrial Growth
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Led by{" "}
            <span className="font-bold text-[#ea580c]">Milind P. Rajhans</span>,
            we've been the backbone of industrial development in Nashik, Pune &
            Chakan since 1999.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column - Image and Stats */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Founder Image - Optimized for mobile */}
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl lg:shadow-2xl">
              <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] lg:h-[400px] w-full">
                <Image
                  src={founderImage}
                  alt="Milind P. Rajhans - Founder"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 800px"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 lg:bottom-6 lg:left-6 text-white">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold">Milind P. Rajhans</h3>
                <p className="text-xs sm:text-sm lg:text-base text-white/90">
                  Founder & Lead Consultant | FI-ACC
                </p>
              </div>
            </div>

            {/* Stats Grid - Responsive columns */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm sm:shadow-md hover:shadow-lg transition-all text-center"
                >
                  <div className="text-[#f97316] mb-1 sm:mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-8 mt-2 lg:mt-0">
            <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900">
              Complete Industrial Solutions Under One Roof
            </h3>

            {/* Features - Stacked on mobile */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 bg-white/50 p-3 sm:p-4 lg:p-0 lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#f97316]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base lg:text-xl font-semibold mb-0.5 sm:mb-1">
                    FI-ACC Accredited
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Recognized financial and industrial consulting expertise
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 bg-white/50 p-3 sm:p-4 lg:p-0 lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#f97316]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#f97316]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base lg:text-xl font-semibold mb-0.5 sm:mb-1">
                    Strategic Locations
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Serving Ambad MIDC, Satpur MIDC, Dindori MIDC, Sinnar MIDC, Pune & Chakan
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline/Milestones - Optimized for mobile */}
            <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm sm:shadow-md lg:shadow-lg">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4">
                Our Journey
              </h4>
              
              {/* Mobile: Vertical list with better spacing */}
              <div className="space-y-2 sm:space-y-2.5 lg:hidden">
                {milestones.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 py-1.5 border-b border-[#fff7ed] last:border-0"
                  >
                    <span className="font-bold text-[#f97316] text-xs sm:text-sm min-w-[50px]">
                      {item.year}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-700 flex-1">
                      {item.text}
                    </span>
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#f97316]/50 flex-shrink-0" />
                  </div>
                ))}
              </div>

              {/* Desktop: Vertical timeline with arrows */}
              <div className="hidden lg:block space-y-3">
                {milestones.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="font-bold text-[#f97316] min-w-[60px]">
                      {item.year}
                    </span>
                    <span className="text-gray-700 text-sm flex-1">{item.text}</span>
                    {index < milestones.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#f97316]/50 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons - Always side by side on all screen sizes */}
            <div className="flex flex-row flex-wrap gap-2 sm:gap-3 pt-2">
              {/* Primary CTA */}
              <Link
                href="/about"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all group text-xs sm:text-sm lg:text-base whitespace-nowrap"
              >
                <span className="truncate max-w-[100px] xs:max-w-[120px] sm:max-w-none">Learn More</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
              
              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 lg:px-8 py-2.5 sm:py-3 lg:py-4 border-2 border-[#f97316] text-[#f97316] rounded-lg sm:rounded-xl font-semibold hover:bg-[#fff7ed] hover:scale-[1.02] active:scale-[0.98] transition-all group text-xs sm:text-sm lg:text-base whitespace-nowrap"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate max-w-[80px] xs:max-w-[100px] sm:max-w-none">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom responsive styles */}
      <style jsx global>{`
        @media (min-width: 380px) {
          .xs\\:max-w-\[100px\] {
            max-width: 100px;
          }
          .xs\\:max-w-\[120px\] {
            max-width: 120px;
          }
        }
        
        @media (min-width: 480px) {
          .xs\\:max-w-\[100px\] {
            max-width: none;
          }
          .xs\\:max-w-\[120px\] {
            max-width: none;
          }
        }
        
        @media (max-width: 380px) {
          .stat-card {
            padding: 0.5rem;
          }
          
          .stat-value {
            font-size: 0.875rem;
          }
          
          .stat-label {
            font-size: 0.625rem;
          }
        }
        
        /* Smooth transitions */
        .transition-all {
          transition: all 0.2s ease-in-out;
        }
        
        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
          }
          
          .stat-card {
            min-height: 80px;
          }
        }
        
        /* Truncate text with ellipsis */
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;