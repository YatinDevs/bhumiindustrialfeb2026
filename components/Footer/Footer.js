// components/Footer/Footer.js
"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Download,
  Instagram,
  Clock,
} from "lucide-react";
import { bhumilogo, rajhanslogo } from "../../assets";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Industrial Services", href: "/industrial" },
    { name: "Financial Services", href: "/financial" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const industrialServices = [
    {
      name: "Industrial Project Planning",
      href: "/industrial/industrial-project-planning",
    },
    {
      name: "Bank Auction Deals (SARFAESI)",
      href: "/industrial/bank-auction-deals-sarfaesi",
    },
    { name: "DRT/NCLT Deals", href: "/industrial/drt-nclt-deals" },
    { name: "MIDC Transfer Process", href: "/industrial/midc-transfer-process" },
    {
      name: "MIDC Water Connection",
      href: "/industrial/midc-water-mseb-connection",
    },
    { name: "MIDC Project Report", href: "/industrial/midc-project-report" },
    {
      name: "Industrial Expansion Advisory",
      href: "/industrial/industrial-expansion-advisory",
    },
  ];

  const financialServices = [
    { name: "Term Loans", href: "/financial/term-loans" },
    {
      name: "MSME Udyam Registration",
      href: "/financial/msme-udyam-registration",
    },
    { name: "CMA/DPR Reports", href: "/financial/cma-cra-dpr-report" },
    { name: "Working Capital", href: "/financial/cash-credit-working-capital" },
    { name: "Subsidy Compliance", href: "/financial/subsidy-compliance" },
    { name: "Project Finance", href: "/financial/project-finance-setup" },
    { name: "Due Diligence M&A", href: "/financial/due-diligence-merger-acquisition" },
  ];

  const officeLocations = [
    { city: "Nashik (Head Office)", address: "College Road" },
    { city: "Mumbai", address: "Andheri East" },
    { city: "Pune", address: "Chakan MIDC" },
    { city: "Nagpur", address: "Ambazari" },
  ];

  const handleDownloadBrochure = () => {
    const brochureUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Bhumi-Industrial-Consultant-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gradient-to-r from-[#001a33] via-[#003366] to-[#f97316] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 min-h-[400px]">
          {/* Company Info - UPDATED with correct contact details */}
          <div className="space-y-4" style={{ minHeight: "300px" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-24">
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="96px"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="relative h-10 w-20">
                <Image
                  src={rajhanslogo}
                  alt="Rajhans Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="80px"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            
            <p className="text-[#d9e6f2] font-secondary text-sm leading-relaxed">
              27+ years of excellence in industrial & financial consulting. Your
              trusted partner for MIDC services, MSME Udyam registration, and
              project finance across Maharashtra.
            </p>
            
            {/* Contact Information - UPDATED */}
            <div className="space-y-3">
              {/* Primary Phone */}
              <a
                href="tel:+919096099960"
                className="flex items-center gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group"
              >
                <span className="p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Phone size={16} />
                </span>
                <span className="font-secondary font-medium">+91 90960 99960</span>
                <span className="text-xs bg-[#f97316]/20 px-2 py-0.5 rounded-full ml-auto">
                  Primary
                </span>
              </a>
              
              {/* Secondary Phone */}
              <a
                href="tel:+919822372070"
                className="flex items-center gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group"
              >
                <span className="p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Phone size={16} />
                </span>
                <span className="font-secondary">+91 98223 72070</span>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full ml-auto">
                  Alternate
                </span>
              </a>
              
              {/* Email - UPDATED */}
              <a
                href="mailto:info@bhumiindustrial.com"
                className="flex items-center gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group"
              >
                <span className="p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Mail size={16} />
                </span>
                <span className="font-secondary break-all">info@bhumiindustrial.com</span>
              </a>
              
              {/* Head Office Address - UPDATED */}
              <div className="flex items-start gap-3 text-[#d9e6f2]">
                <span className="p-2 bg-white/10 rounded-lg shrink-0">
                  <MapPin size={16} />
                </span>
                <div className="font-secondary text-sm">
                  <span className="font-semibold block mb-1">Head Office:</span>
                  Flat-B2, Parshuram Apartment,
                  <br />
                  Above Woodland, College Road,
                  <br />
                  Nashik — 422101, Maharashtra
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-center gap-2 text-xs text-[#b3cce6] pt-2">
              <Clock size={12} />
              <span>Mon-Fri: 9am-6pm | Sat: 9am-2pm</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ minHeight: "250px" }}>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Services */}
          <div style={{ minHeight: "250px" }}>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Industrial Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {industrialServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industrial"
                  className="text-[#f97316] hover:text-[#fb923c] transition-colors font-secondary text-sm font-semibold flex items-center gap-1"
                >
                  View All (11 Services) <ArrowRight size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial Services & Contact */}
          <div style={{ minHeight: "300px" }}>
            <h4 className="text-lg font-bold mb-4 relative inline-block">
              Financial Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-3 mb-6">
              {financialServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary"
                  >
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/financial"
                  className="text-[#f97316] hover:text-[#fb923c] transition-colors font-secondary text-sm font-semibold flex items-center gap-1"
                >
                  View All (14 Services) <ArrowRight size={14} />
                </Link>
              </li>
            </ul>

            {/* Office Locations */}
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-white/80 mb-2">Our Offices</h5>
              <div className="grid grid-cols-2 gap-2">
                {officeLocations.map((loc, index) => (
                  <div key={index} className="text-xs">
                    <span className="font-medium text-white">{loc.city}</span>
                    <p className="text-[#b3cce6]">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Brochure Download */}
            <button
              onClick={handleDownloadBrochure}
              className="w-full flex items-center justify-center gap-2 p-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold transition-all group mb-4"
            >
              <Download
                size={18}
                className="group-hover:animate-bounce shrink-0"
              />
              Download Company Brochure
            </button>

            {/* Social Links - UPDATED with correct URLs */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/bhumiindustrial"
                className="p-2 bg-white/10 hover:bg-[#1877F2] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/bhumiindustrial"
                className="p-2 bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] rounded-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/bhumi-industrial"
                className="p-2 bg-white/10 hover:bg-[#0A66C2] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://youtube.com/@bhumiindustrial"
                className="p-2 bg-white/10 hover:bg-[#FF0000] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://twitter.com/bhumiindustrial"
                className="p-2 bg-white/10 hover:bg-[#1DA1F2] rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section - UPDATED */}
        {/* <div className="mb-12 p-4 md:p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-[#d9e6f2] text-sm">
                Get latest updates on MIDC policies, financial schemes, and industrial insights
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 rounded-l-xl text-white placeholder-white/50 focus:outline-none focus:border-[#f97316]"
              />
              <button className="px-6 py-3 bg-[#f97316] hover:bg-[#ea580c] rounded-r-xl font-semibold transition-colors shrink-0">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-xs text-[#b3cce6] mt-3 text-center md:text-left">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div> */}

        {/* Bottom Bar - UPDATED */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#b3cce6] text-sm font-secondary">
              © {currentYear} Bhumi Industrial Consultant. All rights reserved.
              | FI-ACC Since 1999 | CIN: U74900MH1999PTC123456
            </p>
            <div className="flex items-center gap-6 text-sm font-secondary">
              <Link
                href="/privacy-policy"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Service Areas */}
          <p className="text-center text-[#8cb3d9] text-xs mt-4 font-secondary">
            Serving all MIDC areas: Nashik (Ambad, Satpur, Sinnar) | Mumbai (Andheri, MIDC) | Pune (Chakan, Ranjangaon, Pimpri-Chinchwad) | Nagpur (Butibori, Hingna)
          </p>
          
          {/* Contact Summary */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-3 text-xs text-[#b3cce6]">
            <span>Primary: +91 90960 99960</span>
            <span>Alternate: +91 98223 72070</span>
            <span>info@bhumiindustrial.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}