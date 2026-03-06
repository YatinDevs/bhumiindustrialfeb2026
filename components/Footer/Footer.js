// components/Footer/Footer.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
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
import axiosInstance from "@/services/api";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [contactInfo, setContactInfo] = useState(null);
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactData();
    fetchOfficeLocations();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await axiosInstance.get('/contact');
      if (response.data.success) {
        setContactInfo(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching contact info:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchOfficeLocations = async () => {
    try {
      const response = await axiosInstance.get('/offices');
      if (response.data.success) {
        setOffices(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching office locations:', error);
    }
  };

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Industrial Services", href: "/industrial" },
    { name: "Financial Services", href: "/financial" },
    { name: "Contact", href: "/contact" },
    // { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    // { name: "Testimonials", href: "/testimonials" },
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

  // Get data from API or use fallbacks
  const primaryPhone = contactInfo?.primary_phone || "+91 90960 99960";
  const secondaryPhone = contactInfo?.secondary_phone || "+91 98223 72070";
  const whatsappNumber = contactInfo?.whatsapp_number || "+91 90960 99960";
  const primaryEmail = contactInfo?.primary_email || "info@bhumiindustrial.com";
  const secondaryEmail = contactInfo?.secondary_email;
  
  const facebookUrl = contactInfo?.facebook_url || "https://www.facebook.com/bhumiindustrial";
  const instagramUrl = contactInfo?.instagram_url || "https://www.instagram.com/bhumiindustrial";
  const linkedinUrl = contactInfo?.linkedin_url || "https://www.linkedin.com/company/bhumi-industrial";
  const youtubeUrl = contactInfo?.youtube_url || "https://youtube.com/@bhumiindustrial";
  const twitterUrl = contactInfo?.twitter_url || "https://twitter.com/bhumiindustrial";
  
  const weekdayHours = contactInfo?.weekday_hours || "9:00 AM – 6:00 PM";
  const saturdayHours = contactInfo?.saturday_hours || "9:00 AM – 2:00 PM";
  const sundayHours = contactInfo?.sunday_hours || "Closed";

  // Get head office
  const headOffice = offices?.find(office => office.is_head_office);
  
  // Format office locations for display
  const officeLocations = offices?.length > 0 
    ? offices.map(office => ({
        city: office.is_head_office ? `${office.city} (Head Office)` : office.city,
        address: office.address_line_1?.split(',')[0] || office.city,
        fullAddress: `${office.address_line_1}, ${office.address_line_2 || ''}, ${office.city} - ${office.pincode}`.replace(/, ,/g, ',').replace(/, $/g, ''),
        phone: office.phone,
        email: office.email,
      }))
    : [
        { city: "Nashik (Head Office)", address: "College Road" },
        { city: "Mumbai", address: "Andheri East" },
        { city: "Pune", address: "Chakan MIDC" },
        { city: "Nagpur", address: "Ambazari" },
      ];

  const handleDownloadBrochure = () => {
    const brochureUrl = "/MPR Brochure - 27 Oct.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Bhumi-Industrial-Consultant-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <footer className="bg-gradient-to-r from-[#001a33] via-[#003366] to-[#f97316] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gradient-to-r from-[#001a33] via-[#003366] to-[#f97316] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            {/* Logos - Responsive sizing */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="relative h-12 sm:h-16 w-24 sm:w-32">
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="(max-width: 640px) 96px, 128px"
                  loading="lazy"
                />
              </div>
              <div className="h-6 sm:h-8 w-px bg-white/20"></div>
              <div className="relative h-10 sm:h-14 w-20 sm:w-28">
                <Image
                  src={rajhanslogo}
                  alt="Rajhans Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="(max-width: 640px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
            
            <p className="text-[#d9e6f2] font-secondary text-xs sm:text-sm leading-relaxed">
              27+ years of excellence in industrial & financial consulting. Your
              trusted partner for MIDC services, MSME Udyam registration, and
              project finance across Maharashtra.
            </p>
            
            {/* Contact Information - Condensed on mobile */}
            <div className="space-y-2 sm:space-y-3">
              {/* Primary Phone */}
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 sm:gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group text-sm sm:text-base"
              >
                <span className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                </span>
                <span className="font-secondary font-medium truncate">{primaryPhone}</span>
                <span className="text-[10px] sm:text-xs bg-[#f97316]/20 px-1.5 sm:px-2 py-0.5 rounded-full ml-auto shrink-0">
                  Primary
                </span>
              </a>
              
              {/* Secondary Phone - Hide on very small screens */}
              <a
                href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                className="hidden xs:flex items-center gap-2 sm:gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group text-sm sm:text-base"
              >
                <span className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                </span>
                <span className="font-secondary truncate">{secondaryPhone}</span>
                <span className="text-[10px] sm:text-xs bg-white/10 px-1.5 sm:px-2 py-0.5 rounded-full ml-auto shrink-0">
                  Alt
                </span>
              </a>
              
              {/* Email - Truncated on mobile */}
              <a
                href={`mailto:${primaryEmail}`}
                className="flex items-center gap-2 sm:gap-3 text-[#d9e6f2] hover:text-[#f97316] transition-colors group text-sm sm:text-base"
              >
                <span className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-[#f97316]/20 shrink-0">
                  <Mail size={14} className="sm:w-4 sm:h-4" />
                </span>
                <span className="font-secondary truncate">
                  {primaryEmail.replace('@', '@\u200B')}
                </span>
              </a>
              
              {/* Head Office Address - Condensed */}
              <div className="flex items-start gap-2 sm:gap-3 text-[#d9e6f2] text-xs sm:text-sm">
                <span className="p-1.5 sm:p-2 bg-white/10 rounded-lg shrink-0">
                  <MapPin size={14} className="sm:w-4 sm:h-4" />
                </span>
                <div className="font-secondary">
                  <span className="font-semibold block mb-0.5 sm:mb-1">
                    {headOffice ? `${headOffice.city} HO:` : "Head Office:"}
                  </span>
                  <span className="line-clamp-2 sm:line-clamp-3">
                    {headOffice ? (
                      <>
                        {headOffice.address_line_1.split(',')[0]},
                        <br className="hidden sm:block" />
                        {headOffice.city}
                      </>
                    ) : (
                      "College Road, Nashik"
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Office Hours - Hide on very small screens */}
            <div className="hidden xs:flex items-center gap-2 text-[10px] sm:text-xs text-[#b3cce6] pt-1 sm:pt-2">
              <Clock size={10} className="sm:w-3 sm:h-3" />
              <span className="truncate">Mon-Fri: {weekdayHours}</span>
            </div>
          </div>

          {/* Quick Links - Responsive columns */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 sm:w-12 h-0.5 sm:h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 sm:gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary text-xs sm:text-sm"
                  >
                    <ArrowRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
              {quickLinks.slice(4).map((link, index) => (
                <li key={index + 4} className="hidden sm:block">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 sm:gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary text-xs sm:text-sm"
                  >
                    <ArrowRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Services */}
          <div className="col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 relative inline-block">
              Industrial
              <span className="absolute -bottom-2 left-0 w-8 sm:w-12 h-0.5 sm:h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {industrialServices.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 sm:gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary text-xs sm:text-sm"
                  >
                    <ArrowRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    <span className="truncate">{service.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industrial"
                  className="text-[#f97316] hover:text-[#fb923c] transition-colors font-secondary text-xs sm:text-sm font-semibold flex items-center gap-1"
                >
                  <span>View All (11)</span>
                  <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Financial Services */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 relative inline-block">
              Financial
              <span className="absolute -bottom-2 left-0 w-8 sm:w-12 h-0.5 sm:h-1 bg-[#f97316] rounded-full"></span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {financialServices.slice(0, 3).map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 sm:gap-2 text-[#d9e6f2] hover:text-[#f97316] transition-colors group font-secondary text-xs sm:text-sm"
                  >
                    <ArrowRight
                      size={12}
                      className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0"
                    />
                    <span className="truncate">{service.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/financial"
                  className="text-[#f97316] hover:text-[#fb923c] transition-colors font-secondary text-xs sm:text-sm font-semibold flex items-center gap-1"
                >
                  <span>View All (14)</span>
                  <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </Link>
              </li>
            </ul>

            {/* Office Locations - Compact on mobile */}
            <div className="mt-4 sm:mt-6">
              <h5 className="text-xs sm:text-sm font-semibold text-white/80 mb-2">Our Offices</h5>
              <div className="grid grid-cols-2 gap-1 sm:gap-2">
                {officeLocations.slice(0, 4).map((loc, index) => (
                  <div key={index} className="text-[10px] sm:text-xs">
                    <span className="font-medium text-white block truncate">
                      {loc.city.replace(' (Head Office)', ' HO')}
                    </span>
                    <span className="text-[#b3cce6] truncate block">{loc.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA and Social Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {/* Brochure Download - Full width on mobile */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <button
              onClick={handleDownloadBrochure}
              className="w-full flex items-center justify-center gap-2 p-3 sm:p-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-xl font-bold transition-all group text-sm sm:text-base"
            >
              <Download
                size={16}
                className="sm:w-5 sm:h-5 group-hover:animate-bounce shrink-0"
              />
              <span className="truncate">Download Company Brochure</span>
            </button>
          </div>

          {/* Social Links - Centered on mobile */}
          <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <a
              href={facebookUrl}
              className="p-1.5 sm:p-2 bg-white/10 hover:bg-[#1877F2] rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={instagramUrl}
              className="p-1.5 sm:p-2 bg-white/10 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] rounded-lg transition-all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={linkedinUrl}
              className="p-1.5 sm:p-2 bg-white/10 hover:bg-[#0A66C2] rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={youtubeUrl}
              className="p-1.5 sm:p-2 bg-white/10 hover:bg-[#FF0000] rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a
              href={twitterUrl}
              className="p-1.5 sm:p-2 bg-white/10 hover:bg-[#1DA1F2] rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[#b3cce6] text-[10px] sm:text-xs font-secondary text-center sm:text-left">
              © {currentYear} Bhumi Industrial Consultant. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[10px] sm:text-xs font-secondary">
              <Link
                href="/privacy-policy"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors whitespace-nowrap"
              >
                Privacy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors whitespace-nowrap"
              >
                Terms
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-[#b3cce6] hover:text-[#f97316] transition-colors whitespace-nowrap"
              >
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Service Areas - Wrapping on mobile */}
          <p className="text-center text-[#8cb3d9] text-[10px] sm:text-xs mt-3 sm:mt-4 font-secondary px-2">
            Serving all MIDC areas: {officeLocations.map(loc => 
              loc.city.replace(' (Head Office)', '')
            ).join(' • ')}
          </p>
          
          {/* Contact Summary - Grid on mobile */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex justify-center gap-x-4 gap-y-1 mt-2 text-[8px] sm:text-xs text-[#b3cce6]">
            <span className="truncate text-center xs:text-left">Primary: {primaryPhone}</span>
            <span className="hidden xs:block text-center">Alt: {secondaryPhone}</span>
            <span className="col-span-2 xs:col-span-1 text-center xs:text-left truncate">{primaryEmail}</span>
          </div>
        </div>
      </div>

      {/* Add custom CSS for xs breakpoint */}
      <style jsx global>{`
        @media (min-width: 480px) {
          .xs\\:flex {
            display: flex;
          }
          .xs\\:hidden {
            display: none;
          }
          .xs\\:block {
            display: block;
          }
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .xs\\:text-left {
            text-align: left;
          }
          .xs\\:text-center {
            text-align: center;
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </footer>
  );
}