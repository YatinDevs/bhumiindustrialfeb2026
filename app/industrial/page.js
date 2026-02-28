// app/industrial/page.jsx — INDUSTRIAL SERVICES LISTING PAGE
// ✅ Server Component (SSG)
// ✅ buildMetadata for SEO
// ✅ Optimized UI with fixed sidebar reference

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Building2,
  LandPlot,
  ScrollText,
  FileCheck,
  FileText,
  Handshake,
  Factory,
  TrendingUp,
  Calculator,
  Droplets,
  CheckCircle,
  Award,
  Users,
  Clock,
  MapPin,
} from "lucide-react";
import {
  buildMetadata,
  getBreadcrumbSchema,
  industrialServices,
  siteSEO,
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";

export const metadata = buildMetadata("industrial");
export const dynamic = "force-static";

const serviceIcons = {
  "industrial-project-planning": Building2,
  "bank-auction-deals-sarfaesi": LandPlot,
  "drt-nclt-deals": ScrollText,
  "dic-wmdc-noc": FileCheck,
  "midc-project-report": FileText,
  "midc-transfer-process": Handshake,
  "midc-tri-party-consent": FileText,
  "midc-water-mseb-connection": Droplets,
  "all-midc-work": Factory,
  "industrial-expansion-advisory": TrendingUp,
  "project-finance-setup": Calculator,
};

const whyChoose = [
  "26+ years MIDC experience in Nashik, Pune & Chakan",
  "1000+ successful MIDC projects completed",
  "Direct access to Milind Rajhans — FI-ACC certified",
  "End-to-end support from application to approval",
  "100% compliance with latest MIDC regulations",
  "Fast turnaround — most NOCs within 30-45 days",
];

const midcAreas = [
  "Ambad MIDC",
  "Satpur MIDC",
  "Sinnar MIDC",
  "Dindori MIDC",
  "Chakan MIDC",
  "Ranjangaon MIDC",
  "Butibori MIDC",
  "Hingna MIDC",
];

export default function IndustrialPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Industrial Services", href: "/industrial" },
  ]);

  const services = Object.entries(industrialServices).map(([slug, data]) => ({
    slug,
    ...data,
    Icon: serviceIcons[slug] || Building2,
  }));

  return (
    <SeoWrapper pageUrl="/industrial" schemas={[breadcrumb]}>
      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Industrial Services</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-4 py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-sm font-semibold">
                Industrial Consulting
              </span>
              <span className="inline-block px-3 py-2 bg-white/10 text-white/80 rounded-full text-sm font-semibold">
                11 Services
              </span>
              <span className="inline-block px-3 py-2 bg-white/10 text-white/80 rounded-full text-sm font-semibold">
                8 MIDC Areas
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              MIDC Industrial Services in{" "}
              <span className="text-[#f97316]">Maharashtra</span>
            </h1>

            <p className="text-xl text-[#d9e6f2] max-w-3xl mb-8">
              Complete MIDC services from NOC to water connection. 26+ years
              experience.{" "}
              <span className="text-[#f97316] font-semibold">
                Nashik · Mumbai · Pune · Nagpur
              </span>
            </p>

            {/* MIDC Area Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {midcAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-colors shadow-lg group"
              >
                <Phone className="w-4 h-4" /> Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex gap-2">
                <a
                  href="tel:+919096099960"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4" /> +91 90960 99960
                </a>
                <a
                  href="tel:+919822372070"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/20"
                >
                  <Phone className="w-4 h-4" /> +91 98223 72070
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ───────────────────────────────────────── */}
        <section className="bg-[#fff7ed] py-6 border-b border-[#ffedd5]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <Clock className="w-5 h-5" />,
                  value: "26+",
                  label: "Years Experience",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  value: "1000+",
                  label: "MIDC Projects",
                },
                {
                  icon: <Award className="w-5 h-5" />,
                  value: "100%",
                  label: "Compliance",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  value: "25+",
                  label: "MIDC Areas",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-[#f97316]">{stat.icon}</div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete MIDC Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive industrial consulting services for manufacturers
                across Maharashtra's major MIDC areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(
                ({ slug, h1, breadcrumb: bc, description, Icon }) => (
                  <Link
                    key={slug}
                    href={`/industrial/${slug}`}
                    className="group p-7 bg-gradient-to-br from-white to-[#fff7ed] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#f97316] transition-colors">
                      <Icon className="w-7 h-7 text-[#f97316] group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f97316] transition-colors">
                      {bc}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="text-xs text-gray-400">
                        MIDC • Maharashtra
                      </span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ────────────────────────────────────── */}
        <section className="py-20 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider mb-2 block">
                  Why Bhumi Industrial
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted MIDC Partner Since 1999
                </h2>
                <div className="space-y-4">
                  {whyChoose.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-xl font-bold hover:shadow-lg transition-shadow group"
                >
                  Meet Milind Rajhans
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  [
                    "1000+",
                    "MIDC Projects",
                    "bg-gradient-to-br from-[#001a33] to-[#003366] text-white",
                  ],
                  ["26+", "Years Experience", "bg-white"],
                  ["100%", "Approval Rate", "bg-white"],
                  [
                    "25+",
                    "MIDC Areas",
                    "bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white",
                  ],
                ].map(([v, l, bg], i) => (
                  <div
                    key={i}
                    className={`${bg} p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform`}
                  >
                    <div
                      className={`text-4xl font-bold mb-2 ${i === 0 || i === 3 ? "text-white" : "text-[#f97316]"}`}
                    >
                      {v}
                    </div>
                    <div
                      className={`text-sm ${i === 0 || i === 3 ? "text-white/80" : "text-gray-600"}`}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MIDC AREAS SECTION ───────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              MIDC Areas We Serve Across Maharashtra
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {midcAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#fff7ed] rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <MapPin className="w-6 h-6 text-[#f97316] mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Bar */}
        <section className="bg-gradient-to-r from-[#f97316]/10 to-[#fff7ed] py-6 border-y border-[#ffedd5]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <span className="text-sm font-semibold text-gray-700">24/7 Support:</span>
              <a
                href="tel:+919096099960"
                className="flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-bold">+91 90960 99960</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="tel:+919822372070"
                className="flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-bold">+91 98223 72070</span>
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="mailto:info@bhumiindustrial.com"
                className="flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] transition-colors"
              >
                info@bhumiindustrial.com
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c]">
          <div className="max-w-[1440px] mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need MIDC Help? Talk to an Expert Now.
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Free first consultation with Milind Rajhans. No waiting, no
              appointments — call directly for your MIDC requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919096099960"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#ea580c] rounded-xl font-bold hover:bg-[#fff7ed] transition-colors shadow-xl group"
                >
                  <Phone className="w-5 h-5" /> +91 90960 99960
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+919822372070"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/50"
                >
                  <Phone className="w-5 h-5" /> +91 98223 72070
                </a>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Send Enquiry <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              Response within 2 hours | Offices in Nashik, Mumbai, Pune & Nagpur
            </p>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}