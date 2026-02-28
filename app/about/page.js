// app/about/page.jsx — ABOUT PAGE
// ✅ Server Component (SSG)
// ✅ generateMetadata via buildMetadata
// ✅ SeoWrapper injects JSON-LD

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
  Briefcase,
  Target,
  Phone,
  CheckCircle,
  Building2,
} from "lucide-react";
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import { founderImage } from "@/assets";


export const metadata = buildMetadata("about");
export const dynamic = "force-static";

const stats = [
  {
    icon: Calendar,
    value: "26+",
    label: "Years of Excellence",
    color: "text-[#f97316]",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Projects Completed",
    color: "text-[#f97316]",
  },
  {
    icon: Star,
    value: "500+",
    label: "Happy Clients",
    color: "text-[#f97316]",
  },
  {
    icon: ThumbsUp,
    value: "100%",
    label: "Client Satisfaction",
    color: "text-[#f97316]",
  },
];

const milestones = [
  {
    year: "1999",
    event: "Bhumi Industrial Founded by Milind Rajhans",
    icon: Target,
  },
  {
    year: "2005",
    event: "Expanded to full MIDC consultancy services",
    icon: Building2,
  },
  {
    year: "2010",
    event: "Financial Advisory vertical launched",
    icon: Briefcase,
  },
  { year: "2015", event: "FI-ACC accreditation received", icon: Award },
  {
    year: "2020",
    event: "Expanded services to Pune & Chakan MIDC",
    icon: MapPin,
  },
  {
    year: "2024",
    event: "1000+ clients served across Maharashtra",
    icon: Users,
  },
];

const team = [
  {
    name: "Milind Rajhans",
    role: "Founder & Lead Consultant",
    qualification: "FI-ACC",
    experience: "26+ Years",
    image: founderImage, // Add founder image here
    initial: "M",
  },
  {
    name: "Rajesh Patil",
    role: "Senior Industrial Consultant",
    qualification: "B.E. Civil",
    experience: "15+ Years",
    initial: "R",
  },
  {
    name: "Sneha Deshmukh",
    role: "Financial Advisor",
    qualification: "MBA Finance",
    experience: "12+ Years",
    initial: "S",
  },
  {
    name: "Amol Joshi",
    role: "MIDC Liaison Expert",
    qualification: "Dip. Mechanical",
    experience: "18+ Years",
    initial: "A",
  },
];

const testimonials = [
  {
    name: "Rajendra Khadse",
    company: "Khadse Industries, Ambad MIDC",
    text: "Bhumi Industrial helped us secure MIDC approvals in record time. Their expertise is unmatched in Nashik.",
  },
  {
    name: "Priya Mehta",
    company: "Mehta Enterprises, Satpur",
    text: "Excellent financial advisory services. They helped us get the best term loan rate for our factory expansion.",
  },
  {
    name: "Suresh Jain",
    company: "Jain Group, Pune",
    text: "Milind sir's guidance in our project planning was invaluable. Truly the best industrial consultants in Nashik.",
  },
];

const expertise = [
  "MIDC NOC & Approvals",
  "MSME Udyam Registration",
  "Project Finance & Term Loans",
  "DPR / CMA Report Preparation",
  "SARFAESI & Bank Auctions",
  "Industrial Expansion Advisory",
];

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]);

  return (
    <SeoWrapper pageUrl="/about" schemas={[breadcrumb]}>
      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#f97316] blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#f97316] blur-3xl" />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white/50 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
            <span className="inline-block px-4 py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-sm font-semibold mb-6">
              About Bhumi Industrial
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl">
              26+ Years of Industrial{" "}
              <span className="text-[#f97316]">Excellence</span> in Nashik
            </h1>
            <p className="text-xl text-[#d9e6f2] max-w-3xl mb-8">
              Led by{" "}
              <strong className="text-white">Milind Rajhans (FI-ACC)</strong>,
              Bhumi Industrial Consultant has been the backbone of industrial
              development across Nashik, Pune, and Chakan since 1999.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" /> Free Consultation
              </Link>
              <a
                href="tel:+919096099960"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/20"
              >
                +91 90960 99960
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ──────────────────────────────────────────── */}
        <section className="bg-white py-12 shadow-md">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-[#fff7ed] rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPANY PROFILE ────────────────────────────────────── */}
        <section id="company-profile" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                  Company Profile
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Complete Industrial Solutions Under One Roof
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Bhumi Industrial Consultant has been the backbone of
                  industrial development in Nashik, Pune, and Chakan since 1999.
                  We've successfully handled over 1000+ MIDC projects and
                  financial consultations for businesses of all sizes.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our FI-ACC accredited team provides end-to-end solutions —
                  from MIDC plot acquisition and NOC approvals to term loans,
                  MSME registration, and project finance — making us the most
                  trusted name in industrial consulting in Maharashtra.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {expertise.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-[#f97316] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  href="/industrial"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl font-bold hover:shadow-lg transition-shadow group"
                >
                  View Industrial Services{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#f97316]/10 to-[#fff7ed] rounded-3xl p-8">
                  <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-8 rounded-2xl">
                    <p className="text-sm text-white/60 mb-2">
                      FI-ACC Accredited Since
                    </p>
                    <p className="text-5xl font-bold mb-6 text-[#f97316]">
                      2015
                    </p>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">
                      Financial Intermediary Accredited Consultant — a mark of
                      trust and expertise in industrial and project finance
                      consulting.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        ["25+", "MIDC Areas"],
                        ["₹500Cr+", "Finance Arranged"],
                        ["100%", "Approval Rate"],
                        ["48hr", "Turnaround"],
                      ].map(([val, lbl], i) => (
                        <div
                          key={i}
                          className="bg-white/10 p-4 rounded-xl text-center"
                        >
                          <div className="text-2xl font-bold text-[#f97316]">
                            {val}
                          </div>
                          <div className="text-xs text-white/70">{lbl}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDER ────────────────────────────────────────────── */}
        <section id="founder" className="py-20 bg-[#fff7ed] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Our Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Meet Milind Rajhans
              </h2>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Founder Image Section */}
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-[#001a33] to-[#003366] overflow-hidden">
                  <Image
                    src={founderImage}
                    alt="Milind Rajhans - Founder of Bhumi Industrial Consultant"
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                  {/* Overlay with name and title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#001a33] to-transparent p-8">
                    <h3 className="text-3xl font-bold text-white mb-2">Milind Rajhans</h3>
                    <p className="text-[#f97316] font-bold text-lg">FI-ACC</p>
                    <p className="text-white/80">Founder & Lead Consultant</p>
                  </div>
                </div>
                
                {/* Founder Details Section */}
                <div className="p-10">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-[#f97316]" />
                      <span className="text-sm font-semibold text-gray-500">26+ YEARS EXPERIENCE</span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      With over 26 years of hands-on experience, Milind Rajhans
                      has been instrumental in shaping the industrial landscape of
                      Nashik, Pune, and Chakan. His deep expertise in MIDC
                      regulations and project finance has helped 500+ businesses
                      establish and expand successfully.
                    </p>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      As an FI-ACC (Financial Intermediary Accredited Consultant),
                      he brings unmatched credibility to every engagement — from
                      securing the largest MIDC plots in Maharashtra to arranging
                      complex project finance structures for industrial units.
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Projects", value: "1000+" },
                      { label: "Clients", value: "500+" },
                      { label: "MIDC Areas", value: "25+" },
                      { label: "Finance", value: "₹500Cr+" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#fff7ed] p-3 rounded-xl text-center">
                        <div className="text-xl font-bold text-[#f97316]">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "MIDC Expert",
                        "Project Finance",
                        "Term Loans",
                        "MSME Advisory",
                        "Due Diligence",
                        "SARFAESI Deals",
                        "Industrial Planning",
                        "Bank Liaison",
                      ].map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-[#fff7ed] text-[#ea580c] border border-[#ffedd5] rounded-lg px-3 py-2 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+919096099960"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-colors"
                    >
                      <Phone className="w-4 h-4" /> Call Milind Rajhans
                    </a>
                    <Link
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#f97316] text-[#f97316] rounded-xl font-bold hover:bg-[#f97316] hover:text-white transition-colors"
                    >
                      Schedule Meeting
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ───────────────────────────────────────────────── */}
        <section id="team" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Experts Behind Your Success
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A dedicated team of industrial and financial experts committed
                to your project's success
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-white to-[#fff7ed] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-[#ffedd5]/50"
                >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {member.initial}
                    </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#f97316] font-semibold text-sm mb-2">
                    {member.role}
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    <span className="text-xs bg-[#fff7ed] text-[#ea580c] border border-[#ffedd5] rounded px-2 py-1">
                      {member.qualification}
                    </span>
                    <span className="text-xs bg-gray-50 text-gray-600 border border-gray-100 rounded px-2 py-1">
                      {member.experience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MILESTONES ─────────────────────────────────────────── */}
        <section id="milestones" className="py-20 bg-[#fff7ed] scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                26+ Years of Excellence
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f97316] to-[#ffedd5]" />
                <div className="space-y-6">
                  {milestones.map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-2xl font-bold text-[#f97316]">
                          {item.year}
                        </span>
                        <p className="text-gray-700 mt-1">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────── */}
        <section id="testimonials" className="py-20 bg-white scroll-mt-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-br from-[#fff7ed] to-white p-7 rounded-2xl border border-[#ffedd5] hover:shadow-lg transition-shadow"
                >
                  <div className="text-6xl text-[#f97316]/15 absolute top-4 right-6 font-serif leading-none">
                    "
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 text-[#f97316] fill-[#f97316]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                    {t.text}
                  </p>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-[#f97316]">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Work with Nashik's Best Industrial Consultants?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Free consultation with Milind Rajhans. 26+ years of expertise,
              1000+ projects delivered.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#ea580c] rounded-xl font-bold hover:bg-[#fff7ed] transition-colors shadow-xl group"
              >
                Get Free Consultation{" "}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919096099960"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" /> +91 90960 99960
              </a>
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}