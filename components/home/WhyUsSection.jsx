// components/home/WhyUsSection.jsx
"use client";
import Link from "next/link";
import { Shield, Clock, Award, Users, Zap, TrendingUp, ArrowRight, Phone } from "lucide-react";

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
    desc: "You speak with Milind Rajhans directly — not juniors. 26 years of experience on every call.",
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
    desc: "1000+ projects. 500+ term loans. ₹500Cr+ finance arranged. Our results speak for themselves.",
    color: "text-[#003366]",
    bg: "bg-[#003366]/10",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fff7ed] to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nashik's Most Trusted{" "}
            <span className="text-[#f97316]">Industrial Consultant</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Since 1999, we've built our reputation on results — not promises.
          </p>
        </div>
        
        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group flex gap-5 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-[#f97316]/20"
            >
              <div
                className={`${r.bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
              >
                <r.icon className={`w-6 h-6 ${r.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-xl group w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Get Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about#team"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#003366] text-white rounded-xl font-bold hover:bg-[#002244] transition-all transform hover:scale-105 shadow-xl group w-full sm:w-auto"
          >
            <Users className="w-5 h-5" />
            Meet Our Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-[#f97316]" />
            <span>26+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Award className="w-4 h-4 text-[#f97316]" />
            <span>FI-ACC Accredited</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-[#f97316]" />
            <span>1000+ Projects</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4 text-[#f97316]" />
            <span>₹500Cr+ Finance</span>
          </div>
        </div>
      </div>
    </section>
  );
}