// app/financial/page.jsx — FINANCIAL SERVICES LISTING PAGE
// ✅ Server Component (SSG)
// ✅ buildMetadata for SEO
// ✅ Optimized UI with fixed sidebar reference

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  PiggyBank,
  FileText,
  Calculator,
  FileCheck,
  Briefcase,
  Shield,
  Handshake,
  TrendingUp,
  ScrollText,
  CheckCircle,
  Award,
  Users,
  Clock,
  IndianRupee,
  Percent,
  Building,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";
import {
  buildMetadata,
  getBreadcrumbSchema,
  financialServices,
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import axiosInstance from "@/services/api";

export const metadata = buildMetadata("financial");
export const revalidate = 3600; // ISR - revalidate every hour

const serviceIcons = {
  "industrial-deals": Briefcase,
  "term-loans": PiggyBank,
  "cma-cra-dpr-report": FileText,
  "cash-credit-working-capital": Calculator,
  "cost-reduction-techniques": TrendingUp,
  "start-up-project": TrendingUp,
  "balance-sheet-analysis": FileText,
  "subsidy-compliance": Shield,
  "msme-udyam-registration": FileCheck,
  "due-diligence-merger-acquisition": Handshake,
  "financial-projection-ratio-analysis": Calculator,
  licenses: ScrollText,
  "business-planning-support": Briefcase,
  "documentation-compliance": FileCheck,
};

const highlights = [
  "27+ years financial consulting experience",
  "500+ term loans processed successfully",
  "CMA/DPR reports with 95%+ bank approval rates",
  "MSME Udyam registration in 24 hours",
  "Direct bank relationships across Maharashtra",
  "Subsidy claims filed for 200+ industries",
];

const bankPartners = [
  "SBI",
  "Bank of Maharashtra",
  "Union Bank",
  "Bank of Baroda",
  "HDFC",
  "SIDBI",
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

export default async function FinancialPage() {
  // Fetch only contact data
  const contactData = await getContactData();

  // Get contact info with fallbacks
  const primaryPhone = contactData?.primary_phone || "+91 90960 99960";
  const secondaryPhone = contactData?.secondary_phone || "+91 98223 72070";
  const primaryEmail = contactData?.primary_email || "info@bhumiindustrial.com";
  const whatsappNumber = contactData?.whatsapp_number || "+91 90960 99960";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Financial Services", href: "/financial" },
  ]);

  const services = Object.entries(financialServices).map(([slug, data]) => ({
    slug,
    ...data,
    Icon: serviceIcons[slug] || Briefcase,
  }));

  return (
    <SeoWrapper pageUrl="/financial" schemas={[breadcrumb]}>
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
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
              <span className="text-white">Financial Services</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-xs sm:text-sm font-semibold">
                Financial Consulting
              </span>
              <span className="inline-block px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white/10 text-white/80 rounded-full text-xs sm:text-sm font-semibold">
                14 Services
              </span>
              <span className="inline-block px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white/10 text-white/80 rounded-full text-xs sm:text-sm font-semibold">
                FI-ACC Accredited
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 max-w-4xl leading-tight">
              Financial Services for Industries in{" "}
              <span className="text-[#f97316]">Maharashtra</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-xl text-[#d9e6f2] max-w-3xl mb-4 sm:mb-6 lg:mb-8">
              Term loans, MSME Udyam, CMA/DPR reports, working capital,
              subsidies and more.{" "}
              <span className="text-[#f97316] font-semibold">
                FI-ACC accredited
              </span>{" "}
              · 27+ years experience · 4000+ projects.
            </p>

            {/* Bank Partners */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
              {bankPartners.map((bank, i) => (
                <span
                  key={i}
                  className="px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs text-white/70"
                >
                  {bank}
                </span>
              ))}
            </div>

            {/* Hero CTA Buttons - Always side by side */}
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

            {/* Contact Info Strip - with dynamic email */}
            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/20">
              <a
                href={`mailto:${primaryEmail}`}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="truncate max-w-[180px] xs:max-w-none">{primaryEmail}</span>
              </a>
              <span className="hidden xs:inline text-white/30">|</span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Nashik | Mumbai | Pune | Nagpur</span>
              </span>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ──────────────────────────────────── */}
        <section className="bg-[#fff7ed] py-4 sm:py-6 border-b border-[#ffedd5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  icon: <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "500+",
                  label: "Term Loans",
                },
                {
                  icon: <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "₹2000Cr+",
                  label: "Finance Arranged",
                },
                {
                  icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "24hr",
                  label: "Udyam Registration",
                },
                {
                  icon: <Percent className="w-4 h-4 sm:w-5 sm:h-5" />,
                  value: "95%+",
                  label: "Bank Approval",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl shadow-sm"
                >
                  <div className="text-[#f97316]">{stat.icon}</div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Complete Financial Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Comprehensive financial consulting services for industrial units
                across Maharashtra's major industrial areas
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {services.map(({ slug, breadcrumb: bc, description, Icon }) => (
                <Link
                  key={slug}
                  href={`/financial/${slug}`}
                  className="group p-5 sm:p-6 bg-gradient-to-br from-white to-[#fff7ed] rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f97316]/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#f97316] transition-colors">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-[#f97316] transition-colors leading-tight line-clamp-2">
                    {bc}
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 sm:gap-2 text-[#f97316] text-xs sm:text-sm font-semibold group-hover:gap-2 sm:group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400">MSME • Bank</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ───────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div>
                <span className="text-[#f97316] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2 block">
                  Why Bhumi Financial
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Your Trusted Financial Partner Since 1999
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Numbers - with dynamic data */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-white rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Phone className="w-4 h-4 text-[#f97316]" />
                    Get Expert Financial Advice
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#f97316] transition-colors group text-xs sm:text-sm"
                    >
                      <span className="w-7 h-7 sm:w-8 sm:h-8 bg-[#f97316]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                      <span className="font-medium truncate">{primaryPhone}</span>
                      <span className="text-[10px] sm:text-xs bg-[#f97316]/10 text-[#f97316] px-1.5 sm:px-2 py-0.5 rounded-full ml-auto">
                        Primary
                      </span>
                    </a>
                    <a
                      href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 sm:gap-3 text-gray-600 hover:text-[#f97316] transition-colors group text-xs sm:text-sm"
                    >
                      <span className="w-7 h-7 sm:w-8 sm:h-8 bg-[#f97316]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </span>
                      <span className="font-medium truncate">{secondaryPhone}</span>
                      <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 rounded-full ml-auto">
                        Alt
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Popular Services Card */}
              <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#f97316]" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Popular Services</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    {
                      name: "MSME Udyam Registration",
                      sub: "Free · 24 hour processing",
                      href: "/financial/msme-udyam-registration",
                      icon: FileCheck,
                    },
                    {
                      name: "Term Loans",
                      sub: "From ₹10L to ₹50Cr · Best rates",
                      href: "/financial/term-loans",
                      icon: PiggyBank,
                    },
                    {
                      name: "CMA / DPR Report",
                      sub: "Bank-ready documentation",
                      href: "/financial/cma-cra-dpr-report",
                      icon: FileText,
                    },
                    {
                      name: "Subsidy Compliance",
                      sub: "Maharashtra PSI & more",
                      href: "/financial/subsidy-compliance",
                      icon: Shield,
                    },
                    {
                      name: "Working Capital",
                      sub: "CC limits & OD facilities",
                      href: "/financial/cash-credit-working-capital",
                      icon: Calculator,
                    },
                  ].map(({ name, sub, href, icon: Icon }, i) => (
                    <Link
                      key={i}
                      href={href}
                      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/10 hover:bg-white/20 rounded-lg sm:rounded-xl transition-all group"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs sm:text-sm truncate">{name}</p>
                        <p className="text-white/60 text-[10px] sm:text-xs truncate">{sub}</p>
                      </div>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#f97316] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  ))}
                </div>

                {/* WhatsApp Button - with dynamic number */}
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\s+/g, '')}?text=Hi%20I%20need%20financial%20consulting%20for%20my%20business`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-6 flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 bg-[#25D366] rounded-lg sm:rounded-xl hover:bg-[#20ba57] transition-colors font-semibold text-xs sm:text-sm"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BANK PARTNERS SECTION ─────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
              Our Banking Partners
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {bankPartners.map((bank, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-4 bg-[#fff7ed] rounded-lg sm:rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-[#f97316] mx-auto mb-1 sm:mb-2" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    {bank}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Bar - with dynamic data */}
        <section className="bg-gradient-to-r from-[#f97316]/10 to-[#fff7ed] py-4 sm:py-6 border-y border-[#ffedd5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-6">
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Get in touch:</span>
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
                  <Mail className="w-4 h-4" />
                  {primaryEmail}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              Need Finance for Your Industry? Let's Talk.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 lg:mb-8 max-w-xl mx-auto">
              Free first consultation with Milind P. Rajhans (FI-ACC). We'll find
              the right financial solution for your business.
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