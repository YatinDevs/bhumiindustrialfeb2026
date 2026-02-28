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

export const metadata = buildMetadata("financial");
export const dynamic = "force-static";

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
  "26+ years financial consulting experience",
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

export default function FinancialPage() {
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
              <span className="text-white">Financial Services</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-4 py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-sm font-semibold">
                Financial Consulting
              </span>
              <span className="inline-block px-3 py-2 bg-white/10 text-white/80 rounded-full text-sm font-semibold">
                14 Services
              </span>
              <span className="inline-block px-3 py-2 bg-white/10 text-white/80 rounded-full text-sm font-semibold">
                FI-ACC Accredited
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
              Financial Services for Industries in{" "}
              <span className="text-[#f97316]">Maharashtra</span>
            </h1>

            <p className="text-xl text-[#d9e6f2] max-w-3xl mb-8">
              Term loans, MSME Udyam, CMA/DPR reports, working capital,
              subsidies and more.{" "}
              <span className="text-[#f97316] font-semibold">
                FI-ACC accredited
              </span>{" "}
              · 26+ years experience · 1000+ projects.
            </p>

            {/* Bank Partners */}
            <div className="flex flex-wrap gap-2 mb-8">
              {bankPartners.map((bank, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
                >
                  {bank}
                </span>
              ))}
            </div>

            {/* CTA Buttons - UPDATED with correct phone numbers */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-colors shadow-lg group"
              >
                <Phone className="w-4 h-4" /> Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex flex-wrap gap-2">
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

            {/* Contact Info Strip */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-white/20">
              <a
                href="mailto:info@bhumiindustrial.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@bhumiindustrial.com
              </a>
              <span className="text-white/30">|</span>
              <span className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4" />
                Nashik | Mumbai | Pune | Nagpur
              </span>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ──────────────────────────────────── */}
        <section className="bg-[#fff7ed] py-6 border-b border-[#ffedd5]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: <PiggyBank className="w-5 h-5" />,
                  value: "500+",
                  label: "Term Loans",
                },
                {
                  icon: <IndianRupee className="w-5 h-5" />,
                  value: "₹500Cr+",
                  label: "Finance Arranged",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  value: "24hr",
                  label: "Udyam Registration",
                },
                {
                  icon: <Percent className="w-5 h-5" />,
                  value: "95%+",
                  label: "Bank Approval",
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

        {/* ── SERVICES GRID ────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Financial Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive financial consulting services for industrial units
                across Maharashtra's major industrial areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {services.map(({ slug, breadcrumb: bc, description, Icon }) => (
                <Link
                  key={slug}
                  href={`/financial/${slug}`}
                  className="group p-6 bg-gradient-to-br from-white to-[#fff7ed] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f97316] transition-colors">
                    <Icon className="w-6 h-6 text-[#f97316] group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#f97316] transition-colors leading-tight">
                    {bc}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[#f97316] text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="text-xs text-gray-400">MSME • Bank</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ───────────────────────────────────────── */}
        <section className="py-20 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-[#f97316] font-semibold text-sm uppercase tracking-wider mb-2 block">
                  Why Bhumi Financial
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Financial Partner Since 1999
                </h2>
                <div className="space-y-4">
                  {highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Numbers - UPDATED */}
                <div className="mt-8 p-4 bg-white rounded-xl shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#f97316]" />
                    Get Expert Financial Advice
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="tel:+919096099960"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#f97316] transition-colors group"
                    >
                      <span className="w-8 h-8 bg-[#f97316]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </span>
                      <span className="font-medium">+91 90960 99960</span>
                      <span className="text-xs bg-[#f97316]/10 text-[#f97316] px-2 py-1 rounded-full ml-auto">
                        Primary
                      </span>
                    </a>
                    <a
                      href="tel:+919822372070"
                      className="flex items-center gap-3 text-gray-600 hover:text-[#f97316] transition-colors group"
                    >
                      <span className="w-8 h-8 bg-[#f97316]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f97316] group-hover:text-white transition-colors">
                        <Phone className="w-4 h-4" />
                      </span>
                      <span className="font-medium">+91 98223 72070</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-auto">
                        Alternate
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Popular Services Card */}
              <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-[#f97316]" />
                  <h3 className="text-2xl font-bold">Popular Services</h3>
                </div>
                <div className="space-y-3">
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
                      className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all group"
                    >
                      <Icon className="w-5 h-5 text-[#f97316]" />
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{name}</p>
                        <p className="text-white/60 text-xs">{sub}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#f97316] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/919096099960?text=Hi%20I%20need%20financial%20consulting%20for%20my%20business`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 p-3 bg-[#25D366] rounded-xl hover:bg-[#20ba57] transition-colors font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BANK PARTNERS SECTION ─────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Banking Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {bankPartners.map((bank, i) => (
                <div
                  key={i}
                  className="p-4 bg-[#fff7ed] rounded-xl text-center hover:shadow-md transition-shadow"
                >
                  <Building className="w-6 h-6 text-[#f97316] mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-800">
                    {bank}
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
              <span className="text-sm font-semibold text-gray-700">Get in touch:</span>
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
                <Mail className="w-4 h-4" />
                info@bhumiindustrial.com
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-[#f97316] to-[#ea580c]">
          <div className="max-w-[1440px] mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Finance for Your Industry? Let's Talk.
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Free first consultation with Milind Rajhans (FI-ACC). We'll find
              the right financial solution for your business.
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