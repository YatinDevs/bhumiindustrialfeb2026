// utils/seoConfig.js — Bhumi Industrial Consultant | SEO Perfect

export const siteSEO = {
  siteName: "Bhumi Industrial Consultant",
  defaultTitle:
    "Bhumi Industrial Consultant Nashik | MIDC All Services | MSME Udyam | FI-ACC",
  defaultDescription:
    "27+ years MIDC NOC, MSME Udyam registration, DPR/CMA reports, term loans, project finance. Nashik Ambad Satpur Pune Chakan industrial consultants since 1999",
  baseUrl: "https://bhumiindustrial.com",
  defaultImage: "/og-bhumi-nashik.jpg",
  locale: "en_IN",
  email: "infofiiacc@gmail.com",
  phone: "+91-9822242170",
  address: "Office no 301/302, Tulips Apartment, College Road, Nashik-422005",
  foundingYear: "1999",
  founder: "Milind Rajhans",
};

export const pageSEO = {
  home: {
    title:
      "Bhumi Industrial Consultant Nashik | MIDC All Services | MSME Udyam | Term Loans | FI-ACC",
    description:
      "Complete industrial & financial consulting. MIDC NOC, MSME Udyam registration, DPR/CMA reports, term loans, project finance. Nashik Ambad Satpur 27+ years experts",
    keywords:
      "MIDC consultant Nashik, MSME Udyam registration Nashik, industrial consultant Nashik, project finance Nashik, DPR report Nashik, term loan consultant Nashik, FI-ACC Nashik",
    canonical: "/",
    ogImage: "/og-home.jpg",
  },
  industrial: {
    title:
      "Industrial Services Nashik | MIDC All Services (11) | Bhumi Industrial Consultant",
    description:
      "11 MIDC services: Industrial Project Planning, SARFAESI deals, DRT/NCLT, MIDC transfer, water connection, tri-party consent, project reports. Nashik Ambad Satpur experts",
    keywords:
      "MIDC consultant Nashik, industrial project planning Nashik, SARFAESI consultant Nashik, MIDC transfer process, MIDC water connection Nashik, MIDC tri-party consent, DRT NCLT Nashik",
    canonical: "/industrial",
    ogImage: "/og-industrial.jpg",
  },
  financial: {
    title:
      "Financial Services Nashik | MSME Udyam | Term Loans | DPR/CMA (14 Services) | FI-ACC",
    description:
      "14 financial services: MSME Udyam registration, term loans, CMA/DPR reports, cash credit, balance sheet analysis, subsidies, M&A due diligence. Nashik industrial finance experts",
    keywords:
      "MSME Udyam registration Nashik, term loan consultant Nashik, CMA data Nashik, DPR report Nashik, project finance consultant Nashik, MSME subsidy Nashik",
    canonical: "/financial",
    ogImage: "/og-financial.jpg",
  },
  about: {
    title:
      "About Bhumi Industrial Consultant | Milind Rajhans FI-ACC Nashik | 26 Years Experience",
    description:
      "Milind Rajhans FI-ACC — 26 years largest MIDC deals Maharashtra. Nashik Ambad Satpur project finance + MSME Udyam experts since 1999. Complete industrial solutions",
    keywords:
      "Milind Rajhans Nashik, FI-ACC consultant Nashik, industrial consultant Nashik, project finance expert Nashik, MSME consultant Nashik",
    canonical: "/about",
    ogImage: "/og-about.jpg",
  },
  contact: {
    title:
      "Contact Bhumi Industrial Consultant Nashik | Free MIDC MSME Consultation | 9822242170",
    description:
      "Free consultation: MIDC NOC, MSME Udyam, DPR reports, term loans Nashik. Office: Tulips Apartment College Road Nashik. Call +91-9822242170 | infofiiacc@gmail.com",
    keywords:
      "MIDC consultant contact Nashik, MSME Udyam contact Nashik, project finance phone Nashik, Milind Rajhans contact, FI-ACC Nashik phone",
    canonical: "/contact",
    ogImage: "/og-contact.jpg",
  },
  privacy: {
    title: "Privacy Policy | Bhumi Industrial Consultant Nashik",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your personal information when you use our industrial consulting services.",
    keywords:
      "privacy policy, data protection, Bhumi Industrial, information security",
    canonical: "/privacy-policy",
    ogImage: "/og-default.jpg",
  },
  terms: {
    title: "Terms & Conditions | Bhumi Industrial Consultant Nashik",
    description:
      "Review our terms and conditions for using Bhumi Industrial Consultant's website and services. Clear guidelines for our industrial consulting engagement.",
    keywords:
      "terms and conditions, service terms, legal agreement, Bhumi Industrial",
    canonical: "/terms-conditions",
    ogImage: "/og-default.jpg",
  },
  blog: {
    title: "Blog | Bhumi Industrial Consultant Nashik",
    description:
      "Read our privacy policy to understand how we collect, use, and protect your personal information when you use our industrial consulting services.",
    keywords:
      "privacy policy, data protection, Bhumi Industrial, information security",
    canonical: "/privacy-policy",
    ogImage: "/og-default.jpg",
  },
  careers: {
    title: "Career | Bhumi Industrial Consultant Nashik",
    description:
      "Review our terms and conditions for using Bhumi Industrial Consultant's website and services. Clear guidelines for our industrial consulting engagement.",
    keywords:
      "terms and conditions, service terms, legal agreement, Bhumi Industrial",
    canonical: "/terms-conditions",
    ogImage: "/og-default.jpg",
  },
  testimonials: {
    title: "Testimonials | Bhumi Industrial Consultant Nashik",
    description:
      "Review our terms and conditions for using Bhumi Industrial Consultant's website and services. Clear guidelines for our industrial consulting engagement.",
    keywords:
      "terms and conditions, service terms, legal agreement, Bhumi Industrial",
    canonical: "/terms-conditions",
    ogImage: "/og-default.jpg",
  },
};

// buildMetadata — use in Server Component pages
// export const metadata = buildMetadata("home")
export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export const industrialServices = {
  "industrial-project-planning": {
    title:
      "Industrial Project Planning & Execution Nashik | Bhumi Industrial Consultant",
    description:
      "Complete industrial project planning from concept to execution. Site analysis, feasibility, MIDC approvals, project execution Nashik Ambad Satpur experts 27+ years",
    keywords:
      "industrial project planning Nashik, factory setup consultant Nashik, project execution Nashik, MIDC project planning Nashik",
    h1: "Industrial Project Planning & Execution in Nashik",
    breadcrumb: "Industrial Project Planning",
  },
  "bank-auction-deals-sarfaesi": {
    title:
      "Bank Auction Deals (SARFAESI Act) Nashik | Industrial Plot Auction | Bhumi FI-ACC",
    description:
      "SARFAESI Act bank auction deals Nashik. Industrial plot auctions, distressed asset recovery, auction bidding strategy Ambad Satpur MIDC experts",
    keywords:
      "SARFAESI consultant Nashik, bank auction deals Nashik, industrial plot auction Nashik, SARFAESI Act consultant Ambad Satpur",
    h1: "Bank Auction Deals (SARFAESI Act) in Nashik",
    breadcrumb: "Bank Auction Deals",
  },
  "drt-nclt-deals": {
    title:
      "DRT/NCLT Deals Nashik | Debt Recovery Tribunal | Bhumi Industrial Consultant",
    description:
      "DRT NCLT cases Nashik. Debt recovery tribunal, insolvency resolution, NCLT proceedings for industrial plots Ambad Satpur experts",
    keywords:
      "DRT consultant Nashik, NCLT consultant Nashik, debt recovery tribunal Nashik, insolvency resolution Nashik",
    h1: "DRT/NCLT Deals & Resolution in Nashik",
    breadcrumb: "DRT/NCLT Deals",
  },
  "dic-wmdc-noc": {
    title:
      "DIC/WMDC NOC Nashik | District Industries Centre | Bhumi Industrial Consultant",
    description:
      "DIC WMDC NOC Nashik. District Industries Centre clearance, Western Maharashtra Development Corporation approvals for industrial projects",
    keywords:
      "DIC NOC Nashik, WMDC NOC Nashik, district industries centre Nashik, DIC clearance Ambad Satpur",
    h1: "DIC/WMDC NOC Services in Nashik",
    breadcrumb: "DIC/WMDC NOC",
  },
  "midc-project-report": {
    title:
      "MIDC Project Report Nashik | DPR Preparation | Bhumi Industrial Consultant",
    description:
      "MIDC project reports Nashik. Detailed Project Reports (DPR) for MIDC approvals Ambad Satpur Sinnar industrial plots. 27+ years expertise",
    keywords:
      "MIDC project report Nashik, DPR consultant Nashik, detailed project report MIDC, MIDC DPR Ambad Satpur",
    h1: "MIDC Project Report (DPR) Preparation in Nashik",
    breadcrumb: "MIDC Project Report",
  },
  "midc-transfer-process": {
    title:
      "MIDC Transfer Process Nashik | Industrial Plot Transfer | Bhumi FI-ACC",
    description:
      "Complete MIDC plot transfer process Nashik. Name transfer, ownership change, plot transfer approvals Ambad Satpur Sinnar experts",
    keywords:
      "MIDC transfer process Nashik, MIDC plot transfer, industrial plot name transfer Nashik, MIDC ownership transfer Ambad Satpur",
    h1: "MIDC Plot Transfer Process in Nashik",
    breadcrumb: "MIDC Transfer Process",
  },
  "midc-tri-party-consent": {
    title:
      "MIDC Tri-Party Consent Nashik | Plot Transfer Approval | Bhumi Industrial Consultant",
    description:
      "MIDC tri-party consent Nashik. Buyer-seller-MIDC agreement for industrial plot transfers Ambad Satpur experts 100% approval rate",
    keywords:
      "MIDC tri-party consent Nashik, MIDC plot transfer consent, tri-party agreement MIDC Nashik",
    h1: "MIDC Tri-Party Consent for Plot Transfer",
    breadcrumb: "MIDC Tri-Party Consent",
  },
  "midc-water-mseb-connection": {
    title:
      "MIDC Water Connection / MSEB Nashik | Utility Approvals | Bhumi FI-ACC",
    description:
      "MIDC water connection and MSEB electricity approvals Nashik. Complete utility connection process Ambad Satpur industrial plots",
    keywords:
      "MIDC water connection Nashik, MSEB connection Nashik, MIDC utility approval, water connection Ambad Satpur MIDC",
    h1: "MIDC Water & MSEB Connection Approvals in Nashik",
    breadcrumb: "MIDC Water/MSEB Connection",
  },
  "all-midc-work": {
    title:
      "All Types of MIDC Work Nashik | Complete MIDC Services | Bhumi Industrial Consultant",
    description:
      "Complete MIDC services Nashik. NOC, transfer, water, electricity, tri-party, project reports. Ambad Satpur Sinnar one-stop solution",
    keywords:
      "MIDC consultant Nashik, all MIDC services Nashik, MIDC liaison Nashik, complete MIDC work Ambad Satpur",
    h1: "All MIDC Work — Complete MIDC Services in Nashik",
    breadcrumb: "All MIDC Work",
  },
  "industrial-expansion-advisory": {
    title:
      "Industrial Expansion Advisory Nashik | Factory Expansion | Bhumi FI-ACC",
    description:
      "Industrial expansion advisory Nashik. Factory capacity expansion, additional plot approvals, MIDC expansion permissions Ambad Satpur",
    keywords:
      "industrial expansion Nashik, factory expansion consultant, MIDC expansion approval, capacity expansion Ambad Satpur",
    h1: "Industrial Expansion Advisory for Nashik Manufacturers",
    breadcrumb: "Industrial Expansion Advisory",
  },
  "project-finance-setup": {
    title:
      "Project Finance Setup Nashik | Industrial Project Funding | Bhumi Industrial Consultant",
    description:
      "Project finance setup Nashik. Term loans, working capital, project funding for industrial setups Ambad Satpur MIDC projects",
    keywords:
      "project finance consultant Nashik, industrial project funding Nashik, term loan project finance, project funding Ambad Satpur",
    h1: "Project Finance Setup for Industrial Units in Nashik",
    breadcrumb: "Project Finance Setup",
  },
};

export const financialServices = {
  "industrial-deals": {
    title:
      "Industrial Deals Nashik | Factory Finance | Bhumi Financial Consulting",
    description:
      "Industrial deals Nashik. Factory purchase finance, industrial plot loans, manufacturing unit funding Ambad Satpur experts",
    keywords:
      "industrial deals Nashik, factory finance Nashik, industrial plot loan Nashik, manufacturing unit funding",
    h1: "Industrial Deals & Factory Finance in Nashik",
    breadcrumb: "Industrial Deals",
  },
  "term-loans": {
    title:
      "Term Loans Nashik | Industrial Project Term Loan | Bhumi FI-ACC Financial Services",
    description:
      "Term loans Nashik for industrial projects. Machinery purchase, factory construction, expansion term loans Ambad Satpur approval experts",
    keywords:
      "term loan consultant Nashik, industrial term loan Nashik, project term loan Ambad MIDC, machinery term loan Nashik",
    h1: "Industrial Term Loans in Nashik — Best Rates Guaranteed",
    breadcrumb: "Term Loans",
  },
  "cma-cra-dpr-report": {
    title:
      "CMA Data, CRA Data, DPR Report Nashik | Bank Loan Documents | Bhumi FI-ACC",
    description:
      "CMA Data, CRA Data, Detailed Project Reports Nashik. Complete bank loan documentation for term loans, working capital Ambad Satpur",
    keywords:
      "CMA data Nashik, CRA data Nashik, DPR report Nashik, bank loan documents Nashik, CMA preparation",
    h1: "CMA Data, CRA Data & DPR Report Preparation in Nashik",
    breadcrumb: "CMA/CRA/DPR Report",
  },
  "cash-credit-working-capital": {
    title:
      "Cash Credit Working Capital Nashik | MSME WC Loan | Bhumi Financial Consulting",
    description:
      "Cash credit and working capital loans Nashik. MSME working capital, CC limits, overdraft facilities for industrial units Ambad Satpur",
    keywords:
      "cash credit Nashik, working capital loan Nashik, MSME working capital Ambad, CC limit consultant Nashik",
    h1: "Cash Credit & Working Capital Loans for MSME in Nashik",
    breadcrumb: "Cash Credit/Working Capital",
  },
  "cost-reduction-techniques": {
    title:
      "Cost Reduction Techniques Nashik | Industrial Cost Optimization | Bhumi FI-ACC",
    description:
      "Cost reduction techniques Nashik. Operational efficiency, overhead reduction, profitability improvement for industrial units Ambad Satpur",
    keywords:
      "cost reduction consultant Nashik, industrial cost optimization, factory cost cutting Ambad Satpur",
    h1: "Cost Reduction Techniques for Industrial Units in Nashik",
    breadcrumb: "Cost Reduction Techniques",
  },
  "start-up-project": {
    title:
      "Start Up Project Nashik | New Factory Setup Finance | Bhumi Financial Services",
    description:
      "Start-up project finance Nashik. New factory setup, greenfield projects, startup industrial unit funding Ambad Satpur experts",
    keywords:
      "start up project Nashik, new factory setup finance, greenfield project Nashik, startup industrial unit",
    h1: "New Start-Up Industrial Project Support in Nashik",
    breadcrumb: "Start Up Project",
  },
  "balance-sheet-analysis": {
    title:
      "Balance Sheet Analysis Nashik | Financial Health Check | Bhumi FI-ACC",
    description:
      "Balance sheet analysis Nashik. Financial health check, ratio analysis, working capital optimization for industrial units Ambad Satpur",
    keywords:
      "balance sheet analysis Nashik, financial ratio analysis Nashik, working capital optimization Ambad",
    h1: "Balance Sheet Analysis for Industrial Loan Applications",
    breadcrumb: "Balance Sheet Analysis",
  },
  "subsidy-compliance": {
    title:
      "Subsidy Compliance Nashik | MSME Industrial Subsidies | Bhumi Financial Consulting",
    description:
      "Subsidy compliance Nashik. MSME subsidies, industrial subsidies, government scheme compliance Ambad Satpur subsidy experts",
    keywords:
      "subsidy consultant Nashik, MSME subsidy Nashik, industrial subsidy Ambad Satpur, government subsidy compliance",
    h1: "MSME & Industrial Subsidy Compliance in Nashik",
    breadcrumb: "Subsidy Compliance",
  },
  "msme-udyam-registration": {
    title:
      "MSME/Udyam Registration & Support Nashik | Free Certificate | Bhumi FI-ACC",
    description:
      "MSME Udyam registration Nashik. Free lifetime Udyam certificate, MSME benefits, subsidy eligibility Ambad Satpur instant processing",
    keywords:
      "MSME Udyam registration Nashik, Udyam certificate Nashik, MSME registration consultant Ambad, free Udyam registration Nashik",
    h1: "MSME Udyam Registration in Nashik — Free & Instant",
    breadcrumb: "MSME Udyam Registration",
  },
  "due-diligence-merger-acquisition": {
    title:
      "Due Diligence for Merger & Acquisition Nashik | M&A Advisory | Bhumi FI-ACC",
    description:
      "Due diligence for merger & acquisition Nashik. M&A advisory, financial due diligence, legal due diligence for industrial units Ambad Satpur",
    keywords:
      "due diligence Nashik, merger acquisition consultant Nashik, M&A advisory Ambad Satpur, financial due diligence Nashik",
    h1: "Due Diligence for Industrial M&A in Nashik",
    breadcrumb: "Due Diligence M&A",
  },
  "financial-projection-ratio-analysis": {
    title:
      "Financial Projection & Ratio Analysis Nashik | Bank Loan Projections | Bhumi FI-ACC",
    description:
      "Financial projection and ratio analysis Nashik. Bank loan projections, profitability analysis, cash flow projections Ambad Satpur",
    keywords:
      "financial projection Nashik, ratio analysis Nashik, bank loan projection Ambad, cash flow projection Nashik",
    h1: "Financial Projections & Ratio Analysis for Bank Loans",
    breadcrumb: "Financial Projections",
  },
  licenses: {
    title:
      "Licenses Nashik | Industrial Factory Licenses | Bhumi Industrial Consultant",
    description:
      "Complete industrial licenses Nashik. Factory license, pollution control, fire NOC, MIDC licenses Ambad Satpur one-stop solution",
    keywords:
      "factory license Nashik, industrial licenses Ambad, pollution control license Nashik, fire NOC consultant Satpur",
    h1: "Industrial & Factory Licenses in Nashik",
    breadcrumb: "Licenses",
  },
  "business-planning-support": {
    title:
      "Business Planning Support Nashik | Industrial Business Plan | Bhumi FI-ACC",
    description:
      "Business planning support Nashik. Industrial business plans, investor pitch decks, growth strategy planning Ambad Satpur experts",
    keywords:
      "business plan consultant Nashik, industrial business plan Ambad, investor pitch deck Nashik",
    h1: "Business Planning Support for Industrial Entrepreneurs",
    breadcrumb: "Business Planning",
  },
  "documentation-compliance": {
    title:
      "Documentation & Compliance Nashik | Industrial Statutory Compliance | Bhumi FI-ACC",
    description:
      "Documentation and compliance Nashik. Statutory compliance, ROC filing, GST compliance, labor law compliance for industrial units",
    keywords:
      "statutory compliance Nashik, ROC filing consultant Ambad, GST compliance Nashik, labor law compliance Satpur",
    h1: "Documentation & Statutory Compliance for Industries in Nashik",
    breadcrumb: "Documentation & Compliance",
  },
};

export function getServiceSchema(seoData, category, slug) {
  return {
    "@type": "Service",
    name: seoData.h1,
    description: seoData.description,
    url: `${siteSEO.baseUrl}/${category}/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteSEO.siteName,
      telephone: siteSEO.phone,
    },
    areaServed: { "@type": "City", name: "Nashik" },
    serviceType:
      category === "industrial"
        ? "Industrial Consulting"
        : "Financial Consulting",
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
