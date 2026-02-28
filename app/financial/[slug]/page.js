// app/financial/[slug]/page.jsx
// ✅ SSG with generateStaticParams
// ✅ await params — Next.js 15 fix
// ✅ generateMetadata per slug
// ✅ SeoWrapper for JSON-LD schemas
// ✅ Optimized UI with better structure

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Clock,
  Users,
  FileText,
  Briefcase,
  Target,
  Award,
  Mail,
  MapPin,
} from "lucide-react";
import {
  siteSEO,
  financialServices,
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import { getFinancialServiceData } from "@/lib/data";

export async function generateStaticParams() {
  return Object.keys(financialServices).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ Next.js 15 fix
  const service = financialServices[slug];
  if (!service)
    return { title: "Service Not Found | Bhumi Industrial Consultant" };

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}/financial/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteSEO.baseUrl}/financial/${slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

// Rich content data from first version
const serviceContent = {
  "term-loans": {
    intro:
      "Expert term loan facilitation for industrial projects in Nashik. From machinery purchase to factory construction — we secure the best terms from leading banks and NBFCs.",
    features: [
      "Loan Requirement Assessment",
      "Bank Shortlisting",
      "CMA/DPR Preparation",
      "Application Filing",
      "Bank Negotiation",
      "Disbursement Support",
    ],
    benefits: [
      {
        title: "Best Interest Rates",
        desc: "We negotiate with multiple banks to secure the lowest possible interest rates for your term loan.",
      },
      {
        title: "Quick Approval",
        desc: "Streamlined documentation and bank relationships ensure faster loan approvals.",
      },
      {
        title: "End-to-End Support",
        desc: "From application to disbursement, we handle everything for you.",
      },
    ],
    faqs: [
      {
        question:
          "What is the interest rate for industrial term loans in Nashik?",
        answer:
          "Industrial term loan rates range from 8.5% to 12% depending on credit profile, bank, and loan amount. We negotiate the best rates across SBI, Bank of Maharashtra, Union Bank, and NBFCs.",
      },
      {
        question: "What documents are needed for industrial term loan?",
        answer:
          "Term loans require CMA data, DPR, balance sheets (3 years), ITR, project details, MIDC documents, and promoter KYC. We prepare the complete documentation package.",
      },
    ],
  },
  "msme-udyam-registration": {
    intro:
      "Free and instant MSME Udyam registration for businesses in Nashik. Get your lifetime Udyam certificate and access subsidies, priority lending, and government schemes.",
    features: [
      "Online Udyam Registration",
      "Aadhaar-Based Process",
      "Instant Certificate",
      "MSME Benefits Advisory",
      "Subsidy Eligibility Check",
      "Annual Update Support",
    ],
    benefits: [
      {
        title: "100% Free Registration",
        desc: "No hidden charges. We help you register on the official government portal.",
      },
      {
        title: "Same Day Certificate",
        desc: "Get your Udyam certificate instantly on the same day.",
      },
      {
        title: "Benefits Guidance",
        desc: "We guide you on all available subsidies and schemes after registration.",
      },
    ],
    faqs: [
      {
        question: "Is MSME Udyam registration free?",
        answer:
          "Yes, Udyam registration is completely free on the government portal. There are no government charges. We assist with the process at nominal service charges for smooth completion.",
      },
      {
        question: "What are the benefits of MSME Udyam registration?",
        answer:
          "Udyam registration provides priority sector lending, collateral-free loans under CGTMSE, capital and interest subsidies, government tender preferences, and protection under MSME Act.",
      },
    ],
  },
  "cma-cra-dpr-report": {
    intro:
      "Professional CMA data, CRA data, and DPR report preparation for bank loans in Nashik. 1000+ reports prepared with high bank approval rates.",
    features: [
      "CMA Data Preparation",
      "CRA Analysis",
      "Detailed Project Report",
      "Financial Projections",
      "Ratio Analysis",
      "Bank-Specific Formatting",
    ],
    benefits: [
      {
        title: "High Approval Rate",
        desc: "Our professionally prepared reports have a 95% bank approval rate.",
      },
      {
        title: "Bank-Ready Format",
        desc: "Reports prepared in specific formats required by different banks.",
      },
      {
        title: "Quick Turnaround",
        desc: "Get your reports within 3-5 working days.",
      },
    ],
    faqs: [
      {
        question: "What is CMA data and why do banks require it?",
        answer:
          "CMA (Credit Monitoring Arrangement) data is a 5-year financial analysis covering past performance and future projections. Banks use CMA data to assess loan repayment capacity for working capital and term loans.",
      },
      {
        question: "How is DPR different from CMA for bank loans?",
        answer:
          "DPR (Detailed Project Report) covers technical, commercial, and financial feasibility for new projects. CMA focuses on working capital assessment. Term loans need DPR; CC limits need CMA.",
      },
    ],
  },
  "cash-credit-working-capital": {
    intro:
      "Expert working capital finance solutions for industrial units in Nashik. We help you secure cash credit limits, overdrafts, and bill discounting facilities tailored to your business needs.",
    features: [
      "Working Capital Assessment",
      "CC/OD Limit Arrangement",
      "CMA Data Preparation",
      "Bank Negotiation",
      "Limit Enhancement",
      "Renewal Support",
    ],
    benefits: [
      {
        title: "Optimized Limits",
        desc: "We help you secure working capital limits aligned with your actual business cycle.",
      },
      {
        title: "Lower Interest",
        desc: "Negotiate better interest rates and processing fees with multiple banks.",
      },
      {
        title: "Smooth Renewals",
        desc: "Timely renewals and limit enhancements without operational disruption.",
      },
    ],
    faqs: [
      {
        question: "What is cash credit limit for industrial units?",
        answer:
          "Cash Credit (CC) is a working capital facility where you can withdraw up to the sanctioned limit based on your inventory and receivables. Interest is charged only on the amount utilized.",
      },
      {
        question: "How is working capital requirement calculated?",
        answer:
          "Working capital is calculated using the operating cycle method or turnover method. We prepare CMA data that accurately reflects your business cycle to optimize the sanctioned limit.",
      },
    ],
  },
  "cost-reduction-techniques": {
    intro:
      "Strategic cost reduction consulting for industrial units in Nashik. We identify operational inefficiencies and implement proven cost optimization techniques.",
    features: [
      "Cost Audit",
      "Operational Efficiency Analysis",
      "Procurement Optimization",
      "Energy Cost Reduction",
      "Waste Minimization",
      "Process Improvement",
    ],
    benefits: [
      {
        title: "Immediate Savings",
        desc: "Identify quick-win opportunities for immediate cost reduction.",
      },
      {
        title: "Sustainable Impact",
        desc: "Long-term cost optimization strategies for lasting benefits.",
      },
      {
        title: "ROI Focused",
        desc: "Every recommendation backed by clear ROI calculations.",
      },
    ],
    faqs: [
      {
        question: "How much cost reduction can be achieved?",
        answer:
          "Typically, we help clients achieve 10-15% reduction in operational costs within the first year through process optimization, better procurement, and energy efficiency measures.",
      },
      {
        question: "What industries benefit most from cost reduction?",
        answer:
          "All manufacturing industries benefit from cost reduction, especially those in competitive sectors like automotive components, engineering, plastics, and food processing.",
      },
    ],
  },
  "start-up-project": {
    intro:
      "Comprehensive financial support for new start-up projects in Nashik. From business planning to funding, we guide new entrepreneurs through every step.",
    features: [
      "Business Plan Development",
      "Financial Projections",
      "Funding Strategy",
      "Investor Pitch Deck",
      "Government Scheme Advisory",
      "Seed Funding Support",
    ],
    benefits: [
      {
        title: "Complete Guidance",
        desc: "End-to-end support from ideation to funding for new entrepreneurs.",
      },
      {
        title: "Investor Ready",
        desc: "Professional pitch decks and business plans that attract investors.",
      },
      {
        title: "Government Support",
        desc: "Guidance on seed funding schemes, subsidies, and grants for startups.",
      },
    ],
    faqs: [
      {
        question: "What financial support is available for startups in Nashik?",
        answer:
          "Startups can access seed funding schemes, MSME subsidies, bank loans under CGTMSE, and government grants. We guide you through all available options and help with applications.",
      },
      {
        question: "How do I get funding for my startup idea?",
        answer:
          "We help you prepare a comprehensive business plan, financial projections, and investor pitch deck. We then connect you with appropriate funding sources - banks, NBFCs, or angel investors based on your requirements.",
      },
    ],
  },
  "balance-sheet-analysis": {
    intro:
      "Expert balance sheet analysis for industrial units in Nashik. We provide detailed financial health assessment, ratio analysis, and actionable insights for better financial management.",
    features: [
      "Financial Statement Analysis",
      "Ratio Analysis",
      "Working Capital Assessment",
      "Profitability Analysis",
      "Cash Flow Analysis",
      "Recommendation Report",
    ],
    benefits: [
      {
        title: "Clear Insights",
        desc: "Understand your financial health with clear, actionable insights.",
      },
      {
        title: "Bank-Ready Reports",
        desc: "Comprehensive analysis reports that banks trust for loan assessments.",
      },
      {
        title: "Improvement Roadmap",
        desc: "Specific recommendations to improve financial metrics and bankability.",
      },
    ],
    faqs: [
      {
        question: "Why is balance sheet analysis important for businesses?",
        answer:
          "Balance sheet analysis reveals your business's financial health, identifies strengths and weaknesses, helps in loan applications, and guides strategic decisions for growth.",
      },
      {
        question: "What ratios are analyzed in balance sheet analysis?",
        answer:
          "We analyze liquidity ratios, profitability ratios, efficiency ratios, solvency ratios, and working capital metrics to provide a comprehensive view of your financial position.",
      },
    ],
  },
  "subsidy-compliance": {
    intro:
      "Expert subsidy compliance services for industrial units in Nashik. We help you claim and maintain compliance for Maharashtra industrial subsidies and government schemes.",
    features: [
      "Subsidy Eligibility Assessment",
      "Application Filing",
      "Documentation Support",
      "Compliance Monitoring",
      "Renewal Assistance",
      "Audit Support",
    ],
    benefits: [
      {
        title: "Maximum Benefits",
        desc: "Identify and claim all eligible subsidies for maximum benefit.",
      },
      {
        title: "Hassle-Free Process",
        desc: "We handle all paperwork and follow-ups with government departments.",
      },
      {
        title: "Compliance Assurance",
        desc: "Ensure ongoing compliance to retain claimed subsidies.",
      },
    ],
    faqs: [
      {
        question: "What industrial subsidies are available in Maharashtra?",
        answer:
          "Maharashtra offers PSI (Package Scheme of Incentives), capital subsidy, interest subsidy, electricity duty exemption, and stamp duty exemption for eligible industrial units in notified areas.",
      },
      {
        question: "How do I claim MSME subsidies in Nashik?",
        answer:
          "We assess your eligibility, prepare the application with required documents, file with the concerned department, and follow up until approval. We also ensure ongoing compliance to retain benefits.",
      },
    ],
  },
  "due-diligence-merger-acquisition": {
    intro:
      "Comprehensive due diligence services for mergers and acquisitions in Nashik. We provide financial, operational, and legal assessment for informed business decisions.",
    features: [
      "Financial Due Diligence",
      "Operational Assessment",
      "Legal Compliance Check",
      "Valuation Analysis",
      "Risk Identification",
      "Deal Advisory",
    ],
    benefits: [
      {
        title: "Risk Mitigation",
        desc: "Identify potential risks and hidden liabilities before the deal.",
      },
      {
        title: "Informed Decisions",
        desc: "Comprehensive insights for confident decision-making.",
      },
      {
        title: "Better Valuation",
        desc: "Accurate valuation based on thorough financial and operational analysis.",
      },
    ],
    faqs: [
      {
        question: "What is included in financial due diligence for M&A?",
        answer:
          "Financial due diligence includes analysis of historical financials, quality of earnings, working capital assessment, debt analysis, tax compliance, and identification of potential liabilities.",
      },
      {
        question: "Why is due diligence important before acquisition?",
        answer:
          "Due diligence uncovers hidden risks, validates financial projections, ensures compliance, and provides negotiating power for better deal terms.",
      },
    ],
  },
  "financial-projection-ratio-analysis": {
    intro:
      "Professional financial projection and ratio analysis services for industrial units in Nashik. We create bank-ready projections that demonstrate your business's growth potential.",
    features: [
      "5-Year Financial Projections",
      "Profit & Loss Forecast",
      "Balance Sheet Projections",
      "Cash Flow Statements",
      "Ratio Analysis",
      "Sensitivity Analysis",
    ],
    benefits: [
      {
        title: "Bank-Ready Format",
        desc: "Projections prepared in formats accepted by all major banks.",
      },
      {
        title: "Realistic Assumptions",
        desc: "Industry-benchmarked assumptions for credible projections.",
      },
      {
        title: "Strategic Insights",
        desc: "Understand future financial performance and key drivers.",
      },
    ],
    faqs: [
      {
        question: "Why do banks need financial projections?",
        answer:
          "Banks use financial projections to assess loan repayment capacity, understand business growth potential, and evaluate the viability of expansion projects.",
      },
      {
        question: "What is included in financial projection reports?",
        answer:
          "Financial projection reports include projected P&L, balance sheet, cash flow statements, key ratio analysis, assumptions, and sensitivity analysis for 3-5 years.",
      },
    ],
  },
  licenses: {
    intro:
      "Complete license advisory and compliance services for industrial units in Nashik. We help you obtain and maintain all required business licenses and registrations.",
    features: [
      "Factory License",
      "Pollution NOC",
      "Fire NOC",
      "GST Registration",
      "Trade License",
      "FSSAI License",
    ],
    benefits: [
      {
        title: "Complete Compliance",
        desc: "Ensure all regulatory licenses are in place for smooth operations.",
      },
      {
        title: "Hassle-Free Process",
        desc: "We handle all applications, documentation, and follow-ups.",
      },
      {
        title: "Timely Renewals",
        desc: "Never miss a license renewal with our proactive tracking.",
      },
    ],
    faqs: [
      {
        question: "What licenses are required for a factory in Nashik MIDC?",
        answer:
          "Industrial units require factory license, pollution NOC, fire NOC, GST registration, and specific licenses based on industry type (FSSAI, drug license, etc.). We help with all required approvals.",
      },
      {
        question: "How long does it take to get factory license in Nashik?",
        answer:
          "Factory license typically takes 15-30 days after complete document submission. We prepare and submit the complete application for faster processing.",
      },
    ],
  },
  "business-planning-support": {
    intro:
      "Expert business planning support for industrial entrepreneurs in Nashik. From business plan development to growth strategy, we help you plan for success.",
    features: [
      "Business Plan Development",
      "Market Analysis",
      "Operational Planning",
      "Financial Planning",
      "Growth Strategy",
      "Investor Presentations",
    ],
    benefits: [
      {
        title: "Clear Roadmap",
        desc: "A detailed business plan that guides your growth journey.",
      },
      {
        title: "Investor Ready",
        desc: "Professional business plans that attract investors and lenders.",
      },
      {
        title: "Strategic Focus",
        desc: "Align your operations and finances with clear strategic goals.",
      },
    ],
    faqs: [
      {
        question: "What should a good business plan include?",
        answer:
          "A comprehensive business plan includes executive summary, company overview, market analysis, operational plan, marketing strategy, financial projections, and growth roadmap.",
      },
      {
        question: "How can business planning help my existing industry?",
        answer:
          "Strategic business planning helps identify growth opportunities, optimize operations, prepare for expansion, and attract funding for new projects.",
      },
    ],
  },
  "documentation-compliance": {
    intro:
      "Complete documentation and compliance services for industrial units in Nashik. We ensure your business meets all statutory and regulatory requirements.",
    features: [
      "Statutory Compliance",
      "ROC Filings",
      "GST Compliance",
      "Labor Law Compliance",
      "Document Management",
      "Audit Support",
    ],
    benefits: [
      {
        title: "Worry-Free Compliance",
        desc: "Never miss a compliance deadline with our proactive tracking.",
      },
      {
        title: "Complete Documentation",
        desc: "Well-organized documentation ready for inspections and audits.",
      },
      {
        title: "Penalty Protection",
        desc: "Avoid penalties and legal issues with timely compliance.",
      },
    ],
    faqs: [
      {
        question: "What statutory compliances apply to industrial units?",
        answer:
          "Industrial units must comply with Companies Act, GST, labor laws, factory act, pollution norms, and industry-specific regulations. We help manage all compliances.",
      },
      {
        question: "How can I ensure my business is compliant?",
        answer:
          "We conduct a compliance audit, identify gaps, and implement systems for ongoing compliance across all regulatory requirements.",
      },
    ],
  },
};

const defaultContent = {
  intro:
    "Professional financial consulting services with 26+ years of expertise. Complete support from advisory to final execution for industrial units in Nashik, Pune, and Chakan.",
  features: [
    "Expert Consultation",
    "Documentation Support",
    "Bank Liaison",
    "Fast Processing",
    "Compliance Assurance",
    "Post-Service Support",
  ],
  benefits: [
    {
      title: "Expert Guidance",
      desc: "Get advice from industry experts with decades of experience.",
    },
    {
      title: "Hassle-Free Process",
      desc: "We handle all paperwork and follow-ups for you.",
    },
    {
      title: "Guaranteed Results",
      desc: "Proven track record with 1000+ successful projects.",
    },
  ],
  faqs: [
    {
      question: "Why choose Bhumi Industrial Consultant?",
      answer:
        "With 26+ years of experience, FI-ACC accreditation, and 1000+ successful projects, Milind Rajhans personally handles each case for the best outcome. Call us at +91 90960 99960 or +91 98223 72070 for a free consultation.",
    },
    {
      question: "Is the first consultation free?",
      answer:
        "Yes, the first consultation is completely free. Call +91 90960 99960 or +91 98223 72070, or visit our office at Flat-B2, Parshuram Apartment, College Road, Nashik.",
    },
  ],
};

export default async function FinancialServicePage({ params }) {
  const { slug } = await params; // ✅ Next.js 15 fix
  const seoData = financialServices[slug];
  if (!seoData) notFound();

  // Try to get data from API, fallback to static content
  let serviceData;
  try {
    serviceData = await getFinancialServiceData(slug);
  } catch (error) {
    console.error("Error fetching service data:", error);
  }

  const content = serviceContent[slug] || defaultContent;
  const serviceName = serviceData?.name || seoData.title.split("|")[0].trim();

  const schemas = [
    getServiceSchema(seoData, "financial", slug),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Financial Services", href: "/financial" },
      { name: seoData.breadcrumb, href: `/financial/${slug}` },
    ]),
    getFAQSchema(content.faqs),
  ];

  const related = Object.entries(financialServices)
    .filter(([s]) => s !== slug)
    .slice(0, 5);

  const whyChooseItems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "26+ Years Experience",
      desc: "Decades of expertise in financial consulting for industrial units.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      desc: "Led by Milind Rajhans, FI-ACC certified consultant.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "1000+ Projects",
      desc: "Proven track record with successful project completions.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "PAN India Network",
      desc: "Strong relationships with banks and financial institutions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "High Success Rate",
      desc: "95% loan approval rate for our clients.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "FI-ACC Accredited",
      desc: "Recognized by ICAI for financial consulting excellence.",
    },
  ];

  return (
    <SeoWrapper pageUrl={`/financial/${slug}`} schemas={schemas}>
      <main>
        {/* Hero Section - Premium Gradient from First Version */}
        <section className="relative bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316] rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white/50 mb-6 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/financial"
                className="hover:text-white transition-colors"
              >
                Financial Services
              </Link>
              <span>/</span>
              <span className="text-white">{seoData.breadcrumb}</span>
            </nav>

            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-sm font-semibold mb-4">
              Financial Service · Maharashtra
            </span>

            {/* Title and Description */}
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {serviceName}
              </h1>
              <p className="text-xl text-[#d9e6f2] mb-8">{content.intro}</p>

              {/* CTA Buttons - UPDATED with correct phone numbers */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold transition-all group shadow-lg shadow-[#f97316]/25"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="tel:+919096099960"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/20"
                  >
                    <Phone className="w-5 h-5" />
                    +91 90960 99960
                  </a>
                  <a
                    href="tel:+919822372070"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition-colors border border-white/20"
                  >
                    <Phone className="w-5 h-5" />
                    +91 98223 72070
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
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Complete {serviceName} Services
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {serviceData?.detailedDesc || seoData.description}
                </p>

                {/* Features Grid */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What We Offer
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {content.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-[#fff7ed] rounded-xl hover:shadow-md transition-shadow"
                    >
                      <CheckCircle className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Benefits/Why Choose Us Section */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Our {serviceName}?
                </h3>
                <div className="space-y-4 mb-12">
                  {(content.benefits || defaultContent.benefits).map(
                    (benefit, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-6 bg-[#fff7ed] rounded-xl hover:shadow-md transition-shadow"
                      >
                        <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600">{benefit.desc}</p>
                        </div>
                      </div>
                    ),
                  )}
                </div>

                {/* Description Highlight */}
                <div className="bg-gradient-to-r from-[#fff7ed] to-transparent border-l-4 border-[#f97316] p-6 rounded-r-xl">
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    "{seoData.description}"
                  </p>
                </div>
              </div>

              {/* Right Column - Sidebar - UPDATED with correct contact numbers */}
              <div className="lg:col-span-1">
                {/* Founder Card - Sticky with proper spacing */}
                <div className="sticky top-24 space-y-6">
                  {/* Founder Card */}
                  <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full bg-[#f97316] flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        M
                      </div>
                      <div>
                        <p className="font-bold text-lg">Milind Rajhans</p>
                        <p className="text-[#f97316] text-sm font-semibold">
                          FI-ACC · 26+ Years Experience
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-6">
                      Free first consultation. Direct access to the founder — no
                      juniors, no callbacks. Personally handling each case for
                      the best outcome.
                    </p>

                    {/* Contact Options - UPDATED */}
                    <div className="space-y-3">
                      <a
                        href="tel:+919096099960"
                        className="flex items-center gap-3 p-4 bg-[#f97316] rounded-xl hover:bg-[#ea580c] transition-colors font-bold group"
                      >
                        <Phone className="w-5 h-5" />
                        Primary: +91 90960 99960
                        <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="tel:+919822372070"
                        className="flex items-center gap-3 p-4 bg-[#f97316]/80 rounded-xl hover:bg-[#ea580c] transition-colors font-bold group"
                      >
                        <Phone className="w-5 h-5" />
                        Alternate: +91 98223 72070
                        <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href={`https://wa.me/919096099960?text=Hi%20Milind%20sir%2C%20I%20need%20help%20with%20${encodeURIComponent(seoData.breadcrumb)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-[#25D366] rounded-xl hover:bg-[#20ba57] transition-colors font-bold group"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Us
                        <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                      </a>

                      <Link
                        href="/contact"
                        className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors font-bold group"
                      >
                        <FileText className="w-5 h-5" />
                        Send Enquiry
                        <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Email Contact */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <a
                        href="mailto:info@bhumiindustrial.com"
                        className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        info@bhumiindustrial.com
                      </a>
                    </div>
                  </div>

                  {/* Related Services - Now properly separated */}
                  <div className="bg-white border border-[#ffedd5] p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#f97316]" />
                      Related Services
                    </h3>
                    <ul className="space-y-3">
                      {related.map(([s, data]) => (
                        <li key={s}>
                          <Link
                            href={`/financial/${s}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-[#f97316] transition-colors group py-2 border-b border-[#ffedd5] last:border-0"
                          >
                            <ArrowRight
                              size={14}
                              className="group-hover:translate-x-1 transition-transform text-[#f97316]"
                            />
                            <span className="font-medium">
                              {data.breadcrumb}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/financial"
                      className="mt-4 inline-flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] font-semibold text-sm"
                    >
                      View All Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Grid */}
        <section className="py-20 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Choose Bhumi Financial?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience the difference with our expert financial consulting
              services
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="text-[#f97316] mb-4 bg-[#fff7ed] w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-[#f97316] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - UPDATED with correct contact numbers */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Get answers to common questions about {serviceName}
            </p>

            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-[#fff7ed] p-6 rounded-2xl hover:shadow-md transition-shadow border border-[#ffedd5]"
                >
                  <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-start gap-2">
                    <span className="text-[#f97316] mt-1">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 pl-6 leading-relaxed">
                    <span className="text-[#f97316] font-bold mr-2">A:</span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Still Have Questions? */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#f97316]/10 to-[#fff7ed] rounded-2xl text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-4">
                Call us directly for personalized assistance
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="tel:+919096099960"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#f97316] text-white rounded-lg font-medium hover:bg-[#ea580c] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 90960 99960
                </a>
                <a
                  href="tel:+919822372070"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#f97316] text-[#f97316] rounded-lg font-medium hover:bg-[#f97316] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 98223 72070
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - UPDATED with correct contact numbers */}
        <section className="py-20 bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started with {serviceName}?
            </h2>
            <p className="text-xl text-[#d9e6f2] mb-8 max-w-2xl mx-auto">
              Get expert guidance from our team. We'll help you secure the best
              financial solutions for your industrial unit.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold text-lg transition-all group shadow-lg shadow-[#f97316]/25"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919096099960"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-colors border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  +91 90960 99960
                </a>
                <a
                  href="tel:+919822372070"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-lg transition-colors border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  +91 98223 72070
                </a>
              </div>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Offices in Nashik, Mumbai, Pune & Nagpur | Response within 2 hours
            </p>
          </div>
        </section>

        {/* Related Services Navigation */}
        <section className="py-12 bg-white border-t border-[#ffedd5]">
          <div className="max-w-[1440px] mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Explore Other Financial Services
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map(([s, data]) => (
                <Link
                  key={s}
                  href={`/financial/${s}`}
                  className="px-4 py-2 bg-[#fff7ed] border border-[#ffedd5] text-[#ea580c] rounded-lg text-sm font-medium hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                >
                  {data.breadcrumb}
                </Link>
              ))}
              <Link
                href="/financial"
                className="px-4 py-2 bg-[#f97316] text-white rounded-lg text-sm font-medium hover:bg-[#ea580c] transition-colors"
              >
                View All Services →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}