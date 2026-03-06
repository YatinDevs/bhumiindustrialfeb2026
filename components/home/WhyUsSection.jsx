// components/home/WhyUsSection.jsx
"use client";
import Link from "next/link";
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  Phone,
  CheckCircle,
  Star
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "FI-ACC Accredited",
    desc: "Officially recognized Financial Intermediary Accredited Consultant — rare designation in industrial finance.",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
  },
  {
    icon: Users,
    title: "Direct Expert Access",
    desc: "You speak with Milind P. Rajhans directly — not juniors. 27 years of experience on every call.",
    color: "text-[#003366]",
    bg: "bg-[#003366]/10",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most MIDC NOCs in 30-45 days. MSME Udyam registration in 24 hours. We move fast.",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
  },
  {
    icon: Shield,
    title: "100% Compliance",
    desc: "All work done with full regulatory compliance. Zero shortcuts, zero risk to your project.",
    color: "text-[#003366]",
    bg: "bg-[#003366]/10",
  },
  {
    icon: Zap,
    title: "One-Stop Solution",
    desc: "MIDC approvals, project finance, MSME registration, and legal compliance — all in one place.",
    color: "text-[#f97316]",
    bg: "bg-[#f97316]/10",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "4000+ projects. 500+ term loans. ₹2000Cr+ finance arranged. Our results speak for themselves.",
    color: "text-[#003366]",
    bg: "bg-[#003366]/10",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fff7ed] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-14">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            Nashik's Most Trusted{" "}
            <span className="text-[#f97316] block sm:inline">Industrial Consultant</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Since 1999, we've built our reputation on results — not promises.
          </p>
        </div>
        
        {/* Reasons Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-10 lg:mb-12">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="group flex gap-3 sm:gap-4 lg:gap-5 p-4 sm:p-5 lg:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md lg:shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#f97316]/20"
              >
                <div
                  className={`${r.bg} w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-5 h-5 sm:w-5.5 sm:h-5.5 lg:w-6 lg:h-6 ${r.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
                    {r.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons - Always Side by Side */}
        <div className="flex flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center">
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-[#f97316] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-lg group text-xs sm:text-sm lg:text-base whitespace-nowrap"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">Free Consultation</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden xs:block" />
          </Link>
          
          {/* Secondary CTA */}
          <Link
            href="/about#team"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-[#003366] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#002244] transition-all transform hover:scale-105 shadow-lg group text-xs sm:text-sm lg:text-base whitespace-nowrap"
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="truncate max-w-[100px] xs:max-w-[140px] sm:max-w-none">Meet Our Team</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden xs:block" />
          </Link>
        </div>

        {/* Trust Badges - Responsive grid on mobile */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f97316] flex-shrink-0" />
            <span className="truncate">27+ Years</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f97316] flex-shrink-0" />
            <span className="truncate">FI-ACC Accredited</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f97316] flex-shrink-0" />
            <span className="truncate">4000+ Projects</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600">
            <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f97316] flex-shrink-0" />
            <span className="truncate">₹2000Cr+ Finance</span>
          </div>
        </div>

        {/* Optional: Add a subtle highlight for key differentiator */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#f97316] bg-[#fff7ed] px-3 sm:px-4 py-2 rounded-full">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Direct access to Founder Milind P. Rajhans on every project</span>
          </p>
        </div>
      </div>

      {/* Custom responsive styles */}
      <style jsx global>{`
        @media (min-width: 380px) {
          .xs\\:max-w-\[140px\] {
            max-width: 140px;
          }
          .xs\\:max-w-\[160px\] {
            max-width: 160px;
          }
          .xs\\:block {
            display: block;
          }
        }
        
        @media (min-width: 480px) {
          .xs\\:max-w-\[140px\] {
            max-width: none;
          }
          .xs\\:max-w-\[160px\] {
            max-width: none;
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (min-width: 640px) {
          .sm\\:line-clamp-none {
            -webkit-line-clamp: unset;
            display: block;
          }
        }
        
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}