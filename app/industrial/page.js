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
import axiosInstance from "@/services/api";

export const metadata = buildMetadata("industrial");
export const revalidate = 3600; // ISR - revalidate every hour

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
  "27+ years MIDC experience in Nashik, Pune & Chakan",
  "4000+ successful MIDC projects completed",
  "Direct access to Milind P. Rajhans — FI-ACC certified",
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

// Fetch contact data only
async function getContactData() {
  try {
    const response = await axiosInstance.get('/contact');
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return null;
  }
}

export default async function IndustrialPage() {
  // Fetch only contact data
  const contactData = await getContactData();
  
  // Get contact info with fallbacks
  const primaryPhone = contactData?.primary_phone || "+91 90960 99960";
  const secondaryPhone = contactData?.secondary_phone || "+91 98223 72070";
  const primaryEmail = contactData?.primary_email || "info@bhumiindustrial.com";

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
        <section className="relative bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-white rounded-full blur-2xl sm:blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#f97316] rounded-full blur-2xl sm:blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/50 mb-4 sm:mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Industrial Services</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-xs sm:text-sm font-semibold">
                Industrial Consulting
              </span>
              <span className="inline-block px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white/10 text-white/80 rounded-full text-xs sm:text-sm font-semibold">
                11 Services
              </span>
              <span className="inline-block px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white/10 text-white/80 rounded-full text-xs sm:text-sm font-semibold">
                8 MIDC Areas
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 max-w-4xl leading-tight">
              MIDC Industrial Services in{" "}
              <span className="text-[#f97316]">Maharashtra</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-xl text-[#d9e6f2] max-w-3xl mb-4 sm:mb-6 lg:mb-8">
              Complete MIDC services from NOC to water connection. 27+ years
              experience.{" "}
              <span className="text-[#f97316] font-semibold">
                Nashik · Mumbai · Pune · Nagpur
              </span>
            </p>

            {/* MIDC Area Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {midcAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs text-white/70"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Hero CTA Buttons - Side by side */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-[#f97316] text-white rounded-lg sm:rounded-xl font-bold hover:bg-[#ea580c] transition-colors shadow-lg group text-xs sm:text-sm lg:text-base whitespace-nowrap"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform hidden sm:inline" />
              </Link>
              <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg sm:rounded-xl font-bold transition-colors border border-white/20 text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">{primaryPhone}</span>
                </a>
                <a
                  href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg sm:rounded-xl font-bold transition-colors border border-white/20 text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">{secondaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ───────────────────────────────────────── */}
        <section className="bg-[#fff7ed] py-4 sm:py-6 border-b border-[#ffedd5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "27+",
                  label: "Years Experience",
                },
                {
                  icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "4000+",
                  label: "MIDC Projects",
                },
                {
                  icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "100%",
                  label: "Compliance",
                },
                {
                  icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "25+",
                  label: "MIDC Areas",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm"
                >
                  <div className="text-[#f97316]">{stat.icon}</div>
                  <div>
                    <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Complete MIDC Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Comprehensive industrial consulting services for manufacturers
                across Maharashtra's major MIDC areas
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {services.map(
                ({ slug, h1, breadcrumb: bc, description, Icon }) => (
                  <Link
                    key={slug}
                    href={`/industrial/${slug}`}
                    className="group p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-white to-[#fff7ed] rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30 hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#f97316]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 group-hover:bg-[#f97316] transition-colors">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#f97316] group-hover:text-white transition-colors" />
                    </div>
                    <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#f97316] transition-colors line-clamp-2">
                      {bc}
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 sm:gap-2 text-[#f97316] text-xs sm:text-sm font-semibold group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-400">
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
        <section className="py-12 sm:py-16 lg:py-20 bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <span className="text-[#f97316] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2 block">
                  Why Bhumi Industrial Consultant
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Your Trusted MIDC Partner Since 1999
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {whyChoose.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="mt-6 sm:mt-8 inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:shadow-lg transition-shadow group text-xs sm:text-sm lg:text-base"
                >
                  Meet Milind P. Rajhans
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  [
                    "4000+",
                    "MIDC Projects",
                    "bg-gradient-to-br from-[#001a33] to-[#003366] text-white",
                  ],
                  ["27+", "Years Experience", "bg-white"],
                  ["100%", "Approval Rate", "bg-white"],
                  [
                    "25+",
                    "MIDC Areas",
                    "bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white",
                  ],
                ].map(([v, l, bg], i) => (
                  <div
                    key={i}
                    className={`${bg} p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform`}
                  >
                    <div
                      className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2 ${i === 0 || i === 3 ? "text-white" : "text-[#f97316]"}`}
                    >
                      {v}
                    </div>
                    <div
                      className={`text-[10px] sm:text-xs lg:text-sm ${i === 0 || i === 3 ? "text-white/80" : "text-gray-600"}`}
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
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              MIDC Areas We Serve Across Maharashtra
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {midcAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 bg-[#fff7ed] rounded-lg sm:rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#f97316] mx-auto mb-1 sm:mb-2" />
                  <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-gray-800">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Bar */}
        <section className="bg-gradient-to-r from-[#f97316]/10 to-[#fff7ed] py-4 sm:py-6 border-y border-[#ffedd5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-6">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">24/7 Support:</span>
              <div className="flex flex-row flex-nowrap gap-3 sm:gap-4">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 sm:gap-2 text-[#f97316] hover:text-[#ea580c] transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-bold truncate max-w-[100px] xs:max-w-none">{primaryPhone}</span>
                </a>
                <span className="text-gray-300 hidden xs:inline">|</span>
                <a
                  href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 sm:gap-2 text-[#f97316] hover:text-[#ea580c] transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="font-bold truncate max-w-[100px] xs:max-w-none">{secondaryPhone}</span>
                </a>
                <span className="text-gray-300 hidden lg:inline">|</span>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="hidden lg:flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] transition-colors text-sm"
                >
                  {primaryEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              Need MIDC Help? Talk to an Expert Now.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 lg:mb-8 max-w-xl mx-auto">
              Free first consultation with Milind P. Rajhans. No waiting, no
              appointments — call directly for your MIDC requirements.
            </p>
            
            {/* CTA Buttons - Always side by side */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center">
              {/* Primary phone button */}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white text-[#ea580c] rounded-lg sm:rounded-xl font-bold hover:bg-[#fff7ed] transition-colors shadow-xl group text-xs sm:text-sm lg:text-base whitespace-nowrap"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                {primaryPhone}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform hidden sm:inline" />
              </a>
              
              {/* Secondary phone and enquiry buttons - side by side */}
              <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                <a
                  href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 lg:py-4 bg-white/20 text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/50 text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">{secondaryPhone}</span>
                </a>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/10 transition-colors text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
                >
                  <span className="truncate max-w-[50px] xs:max-w-[70px] sm:max-w-none">Enquiry</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0 hidden xs:inline" />
                </Link>
              </div>
            </div>
            
            <p className="text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">
              Response within 2 hours | Offices in Nashik, Mumbai, Pune & Nagpur
            </p>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}