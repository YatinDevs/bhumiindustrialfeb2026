// app/industrial/[slug]/page.jsx
// ✅ SSG with generateStaticParams
// ✅ await params — Next.js 15 fix
// ✅ generateMetadata per slug
// ✅ SeoWrapper for JSON-LD schemas
// ✅ Optimized UI with fixed sticky sidebar

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
  Building2,
  Factory,
  Landmark,
} from "lucide-react";
import {
  siteSEO,
  industrialServices,
  getServiceSchema,
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import { getIndustrialServiceData } from "@/lib/data";

export async function generateStaticParams() {
  return Object.keys(industrialServices).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ Next.js 15 fix
  const service = industrialServices[slug];
  if (!service)
    return { title: "Service Not Found | Bhumi Industrial Consultant" };

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}/industrial/${slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteSEO.baseUrl}/industrial/${slug}`,
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

// Rich content data
const serviceContent = {
  "industrial-project-planning": {
    intro:
      "End-to-end industrial project planning from site identification to production start. 26+ years of helping Nashik manufacturers set up successfully in Ambad, Satpur, and Sinnar MIDC.",
    features: [
      "Site Feasibility Analysis",
      "MIDC Plot Shortlisting",
      "DPR Preparation",
      "Budget & Timeline Planning",
      "Regulatory Compliance",
      "Factory Layout Advisory",
    ],
    benefits: [
      {
        title: "Comprehensive Planning",
        desc: "We cover everything from site selection to production commencement.",
      },
      {
        title: "MIDC Expertise",
        desc: "Deep understanding of Nashik MIDC regulations and procedures.",
      },
      {
        title: "Timely Execution",
        desc: "Structured timelines ensure your project stays on track.",
      },
    ],
    faqs: [
      {
        question:
          "How long does industrial project planning take in Nashik MIDC?",
        answer:
          "Basic project planning including DPR preparation takes 2-4 weeks. Complete execution from concept to production typically takes 12-18 months depending on approvals and construction.",
      },
      {
        question: "What is the cost of industrial project planning services?",
        answer:
          "Project planning fees depend on project scale. We offer a free initial consultation to assess requirements and provide a customized quote. Call +91 90960 99960 or +91 98223 72070 to discuss your project.",
      },
    ],
  },
  "bank-auction-deals-sarfaesi": {
    intro:
      "Expert SARFAESI Act bank auction guidance in Nashik. We identify, evaluate, and help you win industrial plots at auctions with complete legal and financial support.",
    features: [
      "Auction Property Identification",
      "Title Search & Due Diligence",
      "Bidding Strategy",
      "EMD Finance Arrangement",
      "Legal Documentation",
      "Post-Auction MIDC Transfer",
    ],
    benefits: [
      {
        title: "Risk-Free Bidding",
        desc: "Complete due diligence before you bid on any property.",
      },
      {
        title: "Below Market Value",
        desc: "Acquire industrial properties at 30-40% below market rates.",
      },
      {
        title: "End-to-End Support",
        desc: "From property identification to final possession transfer.",
      },
    ],
    faqs: [
      {
        question:
          "How to participate in SARFAESI bank auction for industrial property in Nashik?",
        answer:
          "SARFAESI auctions require registration with the bank, EMD payment, and compliance with e-auction rules. We guide through identification, due diligence, bidding strategy, and post-auction transfer.",
      },
      {
        question: "What are the risks in bank auction industrial properties?",
        answer:
          "Key risks include title issues, pending MIDC dues, encumbrances, and hidden liabilities. Our due diligence process identifies all such risks before bidding, protecting your investment.",
      },
    ],
  },
  "drt-nclt-deals": {
    intro:
      "Specialized DRT and NCLT deal facilitation for industrial properties in Nashik. We navigate debt recovery tribunal and insolvency proceedings to help you acquire or resolve industrial assets.",
    features: [
      "DRT Case Assessment",
      "NCLT Proceedings Support",
      "Asset Identification",
      "Legal Coordination",
      "Finance Arrangement",
      "Resolution Plan Advisory",
    ],
    benefits: [
      {
        title: "Legal Expertise",
        desc: "Navigate complex DRT and NCLT proceedings with expert guidance.",
      },
      {
        title: "Opportunity Identification",
        desc: "Identify distressed assets at attractive valuations.",
      },
      {
        title: "Resolution Support",
        desc: "Complete support for resolution plan preparation and submission.",
      },
    ],
    faqs: [
      {
        question:
          "What is DRT and how does it affect industrial property acquisition in Nashik?",
        answer:
          "Debt Recovery Tribunal handles cases under SARFAESI and Recovery of Debts Act. Industrial properties in DRT proceedings can be acquired at below-market rates. We identify opportunities and coordinate the legal process.",
      },
      {
        question:
          "How does NCLT insolvency resolution work for industrial units?",
        answer:
          "NCLT insolvency proceedings under IBC offer opportunities to acquire industrial units through resolution plans. We prepare bids, coordinate with resolution professionals, and handle MIDC transfer post-acquisition.",
      },
    ],
  },
  "dic-wmdc-noc": {
    intro:
      "Expert DIC and WMDC NOC services in Nashik. Complete clearance from District Industries Centre and Western Maharashtra Development Corporation for industrial projects.",
    features: [
      "DIC Registration",
      "Project Clearance Application",
      "WMDC Approval Process",
      "Documentation Preparation",
      "Government Liaison",
      "Compliance Certification",
    ],
    benefits: [
      {
        title: "Fast Approvals",
        desc: "Streamlined documentation ensures quicker NOC processing.",
      },
      {
        title: "Government Liaison",
        desc: "Direct coordination with DIC and WMDC officials.",
      },
      {
        title: "Complete Compliance",
        desc: "Ensure all regulatory requirements are met.",
      },
    ],
    faqs: [
      {
        question: "What is DIC NOC and when is it required in Nashik?",
        answer:
          "District Industries Centre (DIC) NOC is required for new industrial units, expansion projects, and certain MIDC approvals. We prepare complete DIC applications and coordinate with Nashik DIC office.",
      },
      {
        question: "How long does WMDC NOC take in Nashik?",
        answer:
          "WMDC NOC typically takes 30-45 days with complete documentation. We prepare all required documents, submit applications, and follow up regularly for timely approval.",
      },
    ],
  },
  "midc-project-report": {
    intro:
      "Professional MIDC project report (DPR) preparation for Nashik industrial projects. Our reports are accepted by MIDC offices in Ambad, Satpur, Sinnar, and across Maharashtra.",
    features: [
      "Technical Project Description",
      "Financial Projections",
      "Market Analysis",
      "Employment & Production Details",
      "MIDC-Specific Format",
      "Submission Support",
    ],
    benefits: [
      {
        title: "High Acceptance Rate",
        desc: "Reports prepared in exact MIDC-specified format.",
      },
      {
        title: "Quick Turnaround",
        desc: "Complete DPR within 5-7 working days.",
      },
      {
        title: "Expert Analysis",
        desc: "Detailed financial and technical analysis by industry experts.",
      },
    ],
    faqs: [
      {
        question: "What should a MIDC project report contain?",
        answer:
          "MIDC project reports must include promoter details, project description, technical specifications, financial projections, land/building details, machinery list, employment, and production capacity. We prepare reports in MIDC's specific format.",
      },
      {
        question: "Is a project report mandatory for MIDC allotment in Nashik?",
        answer:
          "Yes, a detailed project report is mandatory for MIDC plot allotment application. The report quality significantly impacts the allotment committee's decision. Our 26+ years of experience ensures MIDC-compliant reports.",
      },
    ],
  },
  "midc-transfer-process": {
    intro:
      "Complete MIDC plot transfer and name change services in Nashik. We handle all paperwork, government liaison, and compliance for smooth plot ownership transfers in Ambad, Satpur, and Sinnar MIDC.",
    features: [
      "Transfer Application Filing",
      "NOC from MIDC",
      "Tri-Party Agreement",
      "Legal Documentation",
      "Stamp Duty Assistance",
      "Final Transfer Order",
    ],
    benefits: [
      {
        title: "Hassle-Free Transfer",
        desc: "We handle all paperwork and government follow-ups.",
      },
      {
        title: "Fast Processing",
        desc: "Established MIDC relationships ensure quicker approvals.",
      },
      {
        title: "Legal Protection",
        desc: "Complete legal verification and documentation.",
      },
    ],
    faqs: [
      {
        question: "What is the process for MIDC plot transfer in Nashik?",
        answer:
          "MIDC transfer involves application submission, NOC from MIDC, tri-party agreement between buyer-seller-MIDC, stamp duty payment, and final transfer order. The complete process takes 60-90 days. We handle all steps end-to-end.",
      },
      {
        question: "What documents are required for MIDC plot transfer?",
        answer:
          "Required documents include original allotment letter, possession letter, lease deed, NOC from bank (if mortgaged), sale deed, buyer's project report, and identity documents of both parties. We prepare and verify all documents.",
      },
    ],
  },
  "midc-tri-party-consent": {
    intro:
      "Expert MIDC tri-party consent services for industrial plot transfers in Nashik. The tri-party agreement between buyer, seller, and MIDC is the critical step in every MIDC plot transfer.",
    features: [
      "Agreement Drafting",
      "MIDC Coordination",
      "Legal Verification",
      "Stamp Duty Calculation",
      "Document Registration",
      "Transfer Execution",
    ],
    benefits: [
      {
        title: "Expert Drafting",
        desc: "Legally sound tri-party agreements prepared by experts.",
      },
      {
        title: "MIDC Coordination",
        desc: "Direct liaison with MIDC Nashik office.",
      },
      {
        title: "Quick Approval",
        desc: "Fast-track processing with established relationships.",
      },
    ],
    faqs: [
      {
        question: "What is MIDC tri-party consent and why is it needed?",
        answer:
          "MIDC tri-party consent is an agreement between the plot buyer, seller, and MIDC Authority confirming the transfer. It is mandatory as MIDC retains ownership rights over industrial plots and must consent to any transfer.",
      },
      {
        question: "How long does tri-party consent take in Nashik MIDC?",
        answer:
          "Tri-party consent typically takes 30-45 days after complete document submission. We have established relationships with MIDC Nashik office, enabling faster processing for our clients.",
      },
    ],
  },
  "midc-water-mseb-connection": {
    intro:
      "Complete MIDC water connection and MSEB electricity connection services for industrial plots in Nashik. We handle all technical documentation and follow-up for fast utility approvals.",
    features: [
      "MIDC Water Application",
      "Demand Note Processing",
      "MSEB Load Sanction",
      "HT/LT Connection Support",
      "Meter Installation",
      "Connection Completion",
    ],
    benefits: [
      {
        title: "Fast Connections",
        desc: "Quick utility connections with proper follow-up.",
      },
      {
        title: "Technical Expertise",
        desc: "Handle all technical documentation and load calculations.",
      },
      {
        title: "End-to-End Service",
        desc: "From application to final connection activation.",
      },
    ],
    faqs: [
      {
        question:
          "How to get MIDC water connection for my Nashik industrial plot?",
        answer:
          "MIDC water connection requires application with plot possession documents, project details, and water demand calculation. We prepare the complete application and coordinate with MIDC water department for timely connection.",
      },
      {
        question:
          "What is the timeline for MSEB industrial connection in Nashik MIDC?",
        answer:
          "MSEB industrial connection (LT) takes 30-45 days; HT connections take 60-90 days. We handle load sanction applications, coordination with MSEB Nashik, and all technical documentation.",
      },
    ],
  },
  "all-midc-work": {
    intro:
      "One-stop solution for all MIDC work in Nashik. Whatever your MIDC requirement — from first allotment to final closure — we handle it with 26+ years of MIDC expertise.",
    features: [
      "MIDC Plot Allotment",
      "NOC Applications",
      "Transfer & Name Change",
      "Water/Power Connection",
      "Completion Certificate",
      "Annual Compliance",
    ],
    benefits: [
      {
        title: "Comprehensive Service",
        desc: "All MIDC-related services under one roof.",
      },
      {
        title: "26+ Years Experience",
        desc: "Deep understanding of all MIDC procedures.",
      },
      {
        title: "Complete Support",
        desc: "From first inquiry to project completion.",
      },
    ],
    faqs: [
      {
        question: "What MIDC services does Bhumi Industrial handle?",
        answer:
          "We handle all MIDC services including plot allotment, NOC, transfer, name change, tri-party consent, water connection, MSEB connection, project reports, DIC clearance, completion certificate, and annual compliance for Nashik MIDC areas.",
      },
      {
        question: "Which MIDC areas do you serve in Nashik?",
        answer:
          "We serve all Nashik MIDC areas including Ambad MIDC, Satpur MIDC, Sinnar MIDC, Dindori MIDC, Ambad Phase 2, and Vani-Wadala MIDC. We also serve Pune MIDC areas including Chakan and Ranjangaon.",
      },
    ],
  },
  "industrial-expansion-advisory": {
    intro:
      "Expert industrial expansion advisory for established manufacturers in Nashik. We help you plan, finance, and execute factory expansions with minimum disruption and maximum efficiency.",
    features: [
      "Expansion Feasibility Study",
      "Additional Plot Acquisition",
      "MIDC Expansion Permission",
      "Finance Arrangement",
      "Project Management",
      "Compliance Update",
    ],
    benefits: [
      {
        title: "Strategic Planning",
        desc: "Optimize your expansion for maximum efficiency.",
      },
      {
        title: "Regulatory Compliance",
        desc: "Handle all MIDC permissions and approvals.",
      },
      {
        title: "Finance Arrangement",
        desc: "Arrange funding for expansion projects.",
      },
    ],
    faqs: [
      {
        question:
          "What approvals are needed for factory expansion in Nashik MIDC?",
        answer:
          "MIDC expansion requires revised project report, MIDC permission for additional space/floor, updated building plan approval, revised pollution NOC, and increased MSEB load sanction. We manage all these approvals.",
      },
      {
        question:
          "Can I expand my Nashik MIDC factory within the existing plot?",
        answer:
          "Yes, you can construct additional floors or expand within your existing MIDC plot after getting revised building plan approval from MIDC. We assist with the complete expansion approval process.",
      },
    ],
  },
  "project-finance-setup": {
    intro:
      "Complete project finance setup for new and expanding industrial units in Nashik. We structure the right mix of term loans, working capital, and equity for your project.",
    features: [
      "Finance Requirement Analysis",
      "Funding Structure Design",
      "Bank Shortlisting",
      "DPR/CMA Preparation",
      "Loan Processing",
      "Disbursement Support",
    ],
    benefits: [
      {
        title: "Optimal Structure",
        desc: "Right mix of debt and equity for your project.",
      },
      {
        title: "Best Bank Rates",
        desc: "Negotiate with multiple banks for best terms.",
      },
      {
        title: "Quick Approval",
        desc: "Streamlined documentation for faster loan processing.",
      },
    ],
    faqs: [
      {
        question: "How to arrange project finance for a new factory in Nashik?",
        answer:
          "Project finance involves term loan for fixed assets and working capital for operations. Typically, banks fund 65-75% and promoters contribute 25-35%. We structure the optimal finance mix and process loans from SBI, Bank of Maharashtra, and other banks.",
      },
      {
        question:
          "Which banks provide best industrial project finance in Nashik?",
        answer:
          "SBI, Bank of Maharashtra, Union Bank, and Bank of Baroda are prominent for industrial finance in Nashik. SIDBI provides specialized SME finance. We have active relationships with all these banks for faster processing.",
      },
    ],
  },
};

const defaultContent = {
  intro:
    "Expert industrial consulting with 26+ years of MIDC experience. Complete support from first inquiry to project completion in Nashik, Pune, and Chakan.",
  features: [
    "Expert Consultation",
    "Documentation Support",
    "MIDC Government Liaison",
    "Fast Processing",
    "Compliance Assurance",
    "Post-Service Support",
  ],
  benefits: [
    {
      title: "Expert Guidance",
      desc: "Get advice from industry experts with decades of MIDC experience.",
    },
    {
      title: "Hassle-Free Process",
      desc: "We handle all paperwork and government follow-ups for you.",
    },
    {
      title: "Guaranteed Results",
      desc: "Proven track record with 1000+ successful MIDC projects.",
    },
  ],
  faqs: [
    {
      question: "Why choose Bhumi Industrial Consultant for MIDC work?",
      answer:
        "With 26+ years of experience, FI-ACC accreditation, and 1000+ successful projects, Milind Rajhans personally handles each case for the best outcome with minimum hassle. Call us at +91 90960 99960 or +91 98223 72070 for a free consultation.",
    },
    {
      question: "Is the first consultation free?",
      answer:
        "Yes, the first consultation is completely free. Call +91 90960 99960 or +91 98223 72070, or visit our office at Flat-B2, Parshuram Apartment, College Road, Nashik to discuss your MIDC requirements.",
    },
  ],
};

export default async function IndustrialServicePage({ params }) {
  const { slug } = await params; // ✅ Next.js 15 fix
  const seoData = industrialServices[slug];
  if (!seoData) notFound();

  // Try to get data from API, fallback to static content
  let serviceData;
  try {
    serviceData = await getIndustrialServiceData(slug);
  } catch (error) {
    console.error("Error fetching service data:", error);
  }

  const content = serviceContent[slug] || defaultContent;
  const serviceName = serviceData?.name || seoData.title.split("|")[0].trim();

  const schemas = [
    getServiceSchema(seoData, "industrial", slug),
    getBreadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Industrial Services", href: "/industrial" },
      { name: seoData.breadcrumb, href: `/industrial/${slug}` },
    ]),
    getFAQSchema(content.faqs),
  ];

  const related = Object.entries(industrialServices)
    .filter(([s]) => s !== slug)
    .slice(0, 5);

  const whyChooseItems = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "26+ Years Experience",
      desc: "Decades of expertise in MIDC and industrial consulting.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      desc: "Led by Milind Rajhans, FI-ACC certified consultant.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "1000+ Projects",
      desc: "Proven track record with successful MIDC projects.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "MIDC Specialists",
      desc: "Deep understanding of all Nashik MIDC procedures.",
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Experts",
      desc: "Comprehensive industrial project knowledge.",
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Government Liaison",
      desc: "Strong relationships with MIDC and government offices.",
    },
  ];

  return (
    <SeoWrapper pageUrl={`/industrial/${slug}`} schemas={schemas}>
      <main>
        {/* Hero Section - Premium Gradient */}
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
                href="/industrial"
                className="hover:text-white transition-colors"
              >
                Industrial Services
              </Link>
              <span>/</span>
              <span className="text-white">{seoData.breadcrumb}</span>
            </nav>

            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-sm font-semibold mb-4">
              Industrial Service · Nashik MIDC
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
                <div className="flex gap-2">
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

              {/* Right Column - Sidebar (Fixed Sticky) - UPDATED with correct contact numbers */}
              <div className="lg:col-span-1">
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
                          FI-ACC · 26+ Years MIDC Experience
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-6">
                      Free first consultation. Direct access to the founder — no
                      juniors, no callbacks. Personally handling each case for
                      the best outcome with MIDC Nashik.
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
                  </div>

                  {/* Contact Info Card */}
                  <div className="bg-white border border-[#ffedd5] p-6 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#f97316]" />
                      24/7 Support
                    </h3>
                    <div className="space-y-2 mb-4">
                      <a
                        href="tel:+919096099960"
                        className="flex items-center gap-2 text-gray-600 hover:text-[#f97316] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">+91 90960 99960</span>
                      </a>
                      <a
                        href="tel:+919822372070"
                        className="flex items-center gap-2 text-gray-600 hover:text-[#f97316] transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="font-medium">+91 98223 72070</span>
                      </a>
                      <a
                        href="mailto:info@bhumiindustrial.com"
                        className="flex items-center gap-2 text-gray-600 hover:text-[#f97316] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-medium break-all">info@bhumiindustrial.com</span>
                      </a>
                    </div>
                    <p className="text-xs text-gray-500">
                      ⏱️ Response within 2 hours | Offices in Nashik, Mumbai, Pune & Nagpur
                    </p>
                  </div>

                  {/* Related Services */}
                  <div className="bg-white border border-[#ffedd5] p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#f97316]" />
                      Related MIDC Services
                    </h3>
                    <ul className="space-y-3">
                      {related.map(([s, data]) => (
                        <li key={s}>
                          <Link
                            href={`/industrial/${s}`}
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
                      href="/industrial"
                      className="mt-4 inline-flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] font-semibold text-sm"
                    >
                      View All Industrial Services{" "}
                      <ArrowRight className="w-4 h-4" />
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
              Why Choose Bhumi Industrial?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience the difference with our expert MIDC and industrial
              consulting services
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
              Get answers to common questions about {serviceName} in Nashik MIDC
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
              Ready to Start Your {serviceName} Project?
            </h2>
            <p className="text-xl text-[#d9e6f2] mb-8 max-w-2xl mx-auto">
              Get expert guidance from our team. We'll help you navigate through
              every step of your MIDC project.
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
              Explore Other MIDC Services
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map(([s, data]) => (
                <Link
                  key={s}
                  href={`/industrial/${s}`}
                  className="px-4 py-2 bg-[#fff7ed] border border-[#ffedd5] text-[#ea580c] rounded-lg text-sm font-medium hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                >
                  {data.breadcrumb}
                </Link>
              ))}
              <Link
                href="/industrial"
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