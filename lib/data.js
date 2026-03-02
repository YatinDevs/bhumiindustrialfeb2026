// lib/data.js - Updated locations with correct contact info
import {
  industrialServices as seoIndustrial,
  financialServices as seoFinancial,
} from "@/utils/seoConfig";

// ============================================
// LOCATIONS DATA
// ============================================
export const locations = {
  'head-office': {
    id: 'head-office',
    slug: 'head-office',
    name: 'Head Office',
    city: 'Nashik',
    isHeadOffice: true,
    contactMethods: [
      {
        icon: 'Phone',
        title: 'Call Us',
        value: '+91 90960 99960',
        sub: 'Primary Contact',
        href: 'tel:+919096099960',
        color: 'bg-[#f97316]',
      },
      {
        icon: 'Phone',
        title: 'Alternate',
        value: '+91 98223 72070',
        sub: 'Secondary Contact',
        href: 'tel:+919822372070',
        color: 'bg-[#ea580c]',
      },
      {
        icon: 'MessageCircle',
        title: 'WhatsApp',
        value: 'Chat on WhatsApp',
        sub: 'Quick responses',
        href: 'https://wa.me/919096099960?text=Hi%20I%20need%20industrial%20consulting%20help',
        color: 'bg-[#25D366]',
      },
      {
        icon: 'Mail',
        title: 'Email',
        value: 'info@bhumiindustrial.com',
        sub: 'Reply within 24 hours',
        href: 'mailto:info@bhumiindustrial.com',
        color: 'bg-[#003366]',
      },
    ],
    officeDetails: {
      address: [
        'Flat-B2, Parshuram Apartment',
        'Above Woodland, College Road',
        'Nashik — 422101, Maharashtra',
      ],
      mapLink: 'https://maps.google.com/?q=Parshuram+Apartment+College+Road+Nashik',
      coordinates: { lat: 19.9975, lng: 73.7898 },
      timings: [
        { day: 'Monday–Friday', hours: '9:00 AM – 6:00 PM' },
        { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
        { day: 'Sunday', hours: 'Closed' },
      ],
    },
    seo: {
      title: 'Contact Head Office Nashik - Bhumi Industrial Consultant',
      description: 'Visit our head office in Nashik for MIDC approvals, project finance, and industrial consulting. Call +91 90960 99960 or +91 98223 72070.',
    },
  },
  'mumbai-office': {
    id: 'mumbai-office',
    slug: 'mumbai-office',
    name: 'Mumbai Office',
    city: 'Mumbai',
    isHeadOffice: false,
    contactMethods: [
      {
        icon: 'Phone',
        title: 'Call Us',
        value: '+91 90960 99960',
        sub: 'Primary Contact',
        href: 'tel:+919096099960',
        color: 'bg-[#f97316]',
      },
      {
        icon: 'Phone',
        title: 'Alternate',
        value: '+91 98223 72070',
        sub: 'Secondary Contact',
        href: 'tel:+919822372070',
        color: 'bg-[#ea580c]',
      },
      {
        icon: 'Mail',
        title: 'Email',
        value: 'info@bhumiindustrial.com',
        sub: 'Reply within 24 hours',
        href: 'mailto:info@bhumiindustrial.com',
        color: 'bg-[#003366]',
      },
    ],
    officeDetails: {
      address: [
        '3rd Floor, 351 Icon',
        'Western Express Highway, Andheri (East)',
        'Mumbai — 400069, Maharashtra',
      ],
      mapLink: 'https://maps.google.com/?q=351+Icon+Andheri+East+Mumbai',
      coordinates: { lat: 19.1136, lng: 72.8697 },
      timings: [
        { day: 'Monday–Friday', hours: '9:00 AM – 6:00 PM' },
        { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
        { day: 'Sunday', hours: 'Closed' },
      ],
    },
    seo: {
      title: 'Contact Mumbai Office - Bhumi Industrial Consultant',
      description: 'Visit our Mumbai office at Andheri East for MIDC approvals and industrial consulting services. Call +91 90960 99960.',
    },
  },
  'nagpur-office': {
    id: 'nagpur-office',
    slug: 'nagpur-office',
    name: 'Nagpur Office',
    city: 'Nagpur',
    isHeadOffice: false,
    contactMethods: [
      {
        icon: 'Phone',
        title: 'Call Us',
        value: '+91 90960 99960',
        sub: 'Primary Contact',
        href: 'tel:+919096099960',
        color: 'bg-[#f97316]',
      },
      {
        icon: 'Phone',
        title: 'Alternate',
        value: '+91 98223 72070',
        sub: 'Secondary Contact',
        href: 'tel:+919822372070',
        color: 'bg-[#ea580c]',
      },
      {
        icon: 'Mail',
        title: 'Email',
        value: 'info@bhumiindustrial.com',
        sub: 'Reply within 24 hours',
        href: 'mailto:info@bhumiindustrial.com',
        color: 'bg-[#003366]',
      },
    ],
    officeDetails: {
      address: [
        'Plot No 75, Rajhans Complex',
        'Verma Layout, Ambazari',
        'Nagpur — 440010, Maharashtra',
      ],
      mapLink: 'https://maps.google.com/?q=Rajhans+Complex+Ambazari+Nagpur',
      coordinates: { lat: 21.1239, lng: 79.0709 },
      timings: [
        { day: 'Monday–Friday', hours: '9:00 AM – 6:00 PM' },
        { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
        { day: 'Sunday', hours: 'Closed' },
      ],
    },
    seo: {
      title: 'Contact Nagpur Office - Bhumi Industrial Consultant',
      description: 'Visit our Nagpur office at Ambazari for expert industrial consulting and MIDC approvals. Call +91 90960 99960.',
    },
  },
  'pune-office': {
    id: 'pune-office',
    slug: 'pune-office',
    name: 'Pune Office',
    city: 'Pune',
    isHeadOffice: false,
    contactMethods: [
      {
        icon: 'Phone',
        title: 'Call Us',
        value: '+91 90960 99960',
        sub: 'Primary Contact',
        href: 'tel:+919096099960',
        color: 'bg-[#f97316]',
      },
      {
        icon: 'Phone',
        title: 'Alternate',
        value: '+91 98223 72070',
        sub: 'Secondary Contact',
        href: 'tel:+919822372070',
        color: 'bg-[#ea580c]',
      },
      {
        icon: 'Mail',
        title: 'Email',
        value: 'info@bhumiindustrial.com',
        sub: 'Reply within 24 hours',
        href: 'mailto:info@bhumiindustrial.com',
        color: 'bg-[#003366]',
      },
    ],
    officeDetails: {
      address: [
        'Office No. 45, Industrial Plaza',
        'MIDC Phase II, Chakan',
        'Pune — 410501, Maharashtra',
      ],
      mapLink: 'https://maps.google.com/?q=Chakan+MIDC+Pune',
      coordinates: { lat: 18.7601, lng: 73.8624 },
      timings: [
        { day: 'Monday–Friday', hours: '9:00 AM – 6:00 PM' },
        { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
        { day: 'Sunday', hours: 'Closed' },
      ],
    },
    seo: {
      title: 'Contact Pune Office - Bhumi Industrial Consultant',
      description: 'Visit our Pune office at Chakan MIDC for expert industrial consulting and MIDC approvals. Call +91 90960 99960.',
    },
  },
};

// Location helper functions
export const getAllLocationSlugs = () => {
  return Object.keys(locations).map((key) => ({
    slug: locations[key].slug,
  }));
};

export const getLocationBySlug = (slug) => {
  return Object.values(locations).find((loc) => loc.slug === slug) || null;
};

// For use in contact form dropdown
export const locationOptions = Object.values(locations).map(loc => ({
  value: loc.city,
  label: loc.city,
  slug: loc.slug
}));

// ============================================
// INDUSTRIAL SERVICES DATA
// ============================================

// Industrial Services Detailed Data
export async function getIndustrialServiceData(slug) {
  const seoData = seoIndustrial[slug];

  if (!seoData) return null;

  // This could come from a CMS or database
  const serviceDetails = {
    "industrial-project-planning": {
      name: "Industrial Project Planning",
      fullDesc:
        "With 27+ years of experience, we provide end-to-end industrial project planning services. From initial site selection to final execution, we handle all aspects of your industrial project.",
      detailedDesc:
        "Our comprehensive project planning service includes site feasibility studies, MIDC approval assistance, detailed project report preparation, budget planning, timeline management, and regulatory compliance. We ensure your project is completed on time and within budget.",
      features: [
        "Site Feasibility Study",
        "MIDC Approval Assistance",
        "Project Report Preparation",
        "Budget Planning",
        "Timeline Management",
        "Regulatory Compliance",
      ],
      benefits: [
        {
          title: "Expert Team",
          desc: "Led by Milind Rajhans, our team has 27+ years of combined experience in industrial consulting.",
        },
        {
          title: "Proven Track Record",
          desc: "Successfully handled 1000+ MIDC projects with 100% client satisfaction rate.",
        },
        {
          title: "End-to-End Support",
          desc: "We handle everything from documentation to final approvals, saving you time and effort.",
        },
      ],
    },
    "bank-auction-deals-sarfaesi": {
      name: "Bank Auction Deals (SARFAESI)",
      fullDesc:
        "Expert guidance on SARFAESI Act bank auction deals. We help you identify profitable industrial plots and navigate the auction process successfully.",
      detailedDesc:
        "We provide complete assistance in identifying, evaluating, and bidding on SARFAESI Act bank auction properties. Our team conducts thorough due diligence, handles legal documentation, and provides strategic bidding advice.",
      features: [
        "Auction Property Identification",
        "Due Diligence",
        "Bidding Strategy",
        "Legal Documentation",
        "Post-Auction Support",
        "Title Clearance",
      ],
      benefits: [
        {
          title: "Expert Team",
          desc: "Specialized knowledge in SARFAESI Act and auction procedures.",
        },
        {
          title: "Proven Track Record",
          desc: "Successfully helped clients acquire prime industrial properties.",
        },
        {
          title: "End-to-End Support",
          desc: "Complete assistance from identification to possession.",
        },
      ],
    },
    // Add other industrial services as needed
  };

  // Default fallback for services not in detailed list
  return (
    serviceDetails[slug] || {
      name: seoData.title.split("|")[0].trim(),
      fullDesc: seoData.description,
      detailedDesc: seoData.description,
      features: [
        "Expert Consultation",
        "Documentation Support",
        "Government Liaison",
        "Fast Processing",
        "Compliance Assurance",
        "Post-Service Support",
      ],
      benefits: [
        {
          title: "Expert Team",
          desc: "Led by Milind Rajhans, our team has 27+ years of combined experience.",
        },
        {
          title: "Proven Track Record",
          desc: "Successfully handled 1000+ projects with 100% client satisfaction.",
        },
        {
          title: "End-to-End Support",
          desc: "We handle everything from start to finish.",
        },
      ],
    }
  );
}

// Get all industrial services for listing
export async function getAllIndustrialServices() {
  return Object.entries(seoIndustrial).map(([slug, data]) => ({
    slug,
    name: data.title.split("|")[0].trim(),
    description: data.description,
    keywords: data.keywords,
  }));
}

// ============================================
// FINANCIAL SERVICES DATA
// ============================================

// Financial Services Detailed Data
export async function getFinancialServiceData(slug) {
  const seoData = seoFinancial[slug];

  if (!seoData) return null;

  const serviceDetails = {
    "term-loans": {
      name: "Term Loans",
      fullDesc:
        "Assistance in securing term loans for industrial projects. We help you get the best terms from banks and financial institutions.",
      detailedDesc:
        "We provide complete assistance in securing term loans for industrial projects. Our services include loan assessment, documentation preparation, bank negotiation, interest optimization, and quick approval processing.",
      features: [
        "Loan Assessment",
        "Documentation",
        "Bank Negotiation",
        "Interest Optimization",
        "Quick Approval",
        "Disbursement Support",
      ],
      benefits: [
        {
          title: "Expert Team",
          desc: "Specialized knowledge in industrial project finance.",
        },
        {
          title: "Proven Track Record",
          desc: "Successfully secured loans for 500+ industrial projects.",
        },
        {
          title: "End-to-End Support",
          desc: "Complete assistance from application to disbursement.",
        },
      ],
    },
    // Add other financial services as needed
  };

  return (
    serviceDetails[slug] || {
      name: seoData.title.split("|")[0].trim(),
      fullDesc: seoData.description,
      detailedDesc: seoData.description,
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
          title: "Expert Team",
          desc: "Led by Milind Rajhans, our team has 27+ years of experience.",
        },
        {
          title: "Proven Track Record",
          desc: "Successfully handled 1000+ projects with 100% client satisfaction.",
        },
        {
          title: "End-to-End Support",
          desc: "We handle everything from start to finish.",
        },
      ],
    }
  );
}

// Get all financial services for listing
export async function getAllFinancialServices() {
  return Object.entries(seoFinancial).map(([slug, data]) => ({
    slug,
    name: data.title.split("|")[0].trim(),
    description: data.description,
    keywords: data.keywords,
  }));
}

// ============================================
// COMMON DATA (Services lists, etc.)
// ============================================

// Services list for forms
export const servicesList = [
  "MIDC NOC / Approvals",
  "MSME Udyam Registration",
  "Term Loans",
  "DPR / CMA Report",
  "Project Finance Setup",
  "MIDC Transfer Process",
  "Bank Auction / SARFAESI",
  "Subsidy Compliance",
  "Other",
];

// Cities list for forms (from locations)
export const citiesList = Object.values(locations).map(loc => loc.city);

// For backward compatibility
export const industrialServices = seoIndustrial;
export const financialServices = seoFinancial;