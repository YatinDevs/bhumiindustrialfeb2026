// components/Navbar.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Download,
  User,
  MapPin,
  Mail,
  ArrowRight,
  Building2,
  FileText,
  Factory,
  LandPlot,
  Droplets,
  Handshake,
  TrendingUp,
  Calculator,
  FileCheck,
  ScrollText,
  Briefcase,
  Shield,
  PiggyBank,
} from "lucide-react";
import { bhumilogo, rajhanslogo } from "../../assets";
import axiosInstance from "@/services/api";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const closeTimeout = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileOpen]);

  const handleMouseEnter = (index, type) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    if (type === "mega") {
      setActiveMegaMenu(index);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
      setActiveMegaMenu(null);
    }
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveMegaMenu(null);
    }, 200);
  };

  const handleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveMegaMenu(null);
  };

  const quickLinks = [
    { label: "Careers", href: "/careers", icon: <Briefcase size={14} /> },
    // { label: "Blog", href: "/blog", icon: <FileText size={14} /> },
    // { label: "Testimonials", href: "/testimonials", icon: <User size={14} /> },
  ];

  // Industrial Services with Icons
  const industrialServices = [
    {
      name: "Industrial Project Planning",
      href: "/industrial/industrial-project-planning",
      icon: <Building2 size={18} />,
    },
    {
      name: "Bank Auction Deals (SARFAESI)",
      href: "/industrial/bank-auction-deals-sarfaesi",
      icon: <LandPlot size={18} />,
    },
    {
      name: "DRT/NCLT Deals",
      href: "/industrial/drt-nclt-deals",
      icon: <ScrollText size={18} />,
    },
    {
      name: "DIC/WMDC NOC",
      href: "/industrial/dic-wmdc-noc",
      icon: <FileCheck size={18} />,
    },
    {
      name: "MIDC Project Report",
      href: "/industrial/midc-project-report",
      icon: <FileText size={18} />,
    },
    {
      name: "MIDC Transfer Process",
      href: "/industrial/midc-transfer-process",
      icon: <Handshake size={18} />,
    },
    {
      name: "MIDC Tri-Party Consent",
      href: "/industrial/midc-tri-party-consent",
      icon: <FileText size={18} />,
    },
    {
      name: "MIDC Water/MSEB Connection",
      href: "/industrial/midc-water-mseb-connection",
      icon: <Droplets size={18} />,
    },
    {
      name: "All MIDC Work",
      href: "/industrial/all-midc-work",
      icon: <Factory size={18} />,
    },
    {
      name: "Industrial Expansion Advisory",
      href: "/industrial/industrial-expansion-advisory",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "Project Finance Setup",
      href: "/industrial/project-finance-setup",
      icon: <Calculator size={18} />,
    },
  ];

  // Financial Services with Icons
  const financialServices = [
    {
      name: "Industrial Deals",
      href: "/financial/industrial-deals",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Term Loans",
      href: "/financial/term-loans",
      icon: <PiggyBank size={18} />,
    },
    {
      name: "CMA/CRA/DPR Report",
      href: "/financial/cma-cra-dpr-report",
      icon: <FileText size={18} />,
    },
    {
      name: "Cash Credit/Working Capital",
      href: "/financial/cash-credit-working-capital",
      icon: <Calculator size={18} />,
    },
    {
      name: "Cost Reduction Techniques",
      href: "/financial/cost-reduction-techniques",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "Start Up Project",
      href: "/financial/start-up-project",
      icon: <Rocket size={18} />,
    },
    {
      name: "Balance Sheet Analysis",
      href: "/financial/balance-sheet-analysis",
      icon: <FileText size={18} />,
    },
    {
      name: "Subsidy Compliance",
      href: "/financial/subsidy-compliance",
      icon: <Shield size={18} />,
    },
    {
      name: "MSME/Udyam Registration",
      href: "/financial/msme-udyam-registration",
      icon: <FileCheck size={18} />,
    },
    {
      name: "Due Diligence for M&A",
      href: "/financial/due-diligence-merger-acquisition",
      icon: <Handshake size={18} />,
    },
    {
      name: "Financial Projection",
      href: "/financial/financial-projection-ratio-analysis",
      icon: <Calculator size={18} />,
    },
    {
      name: "Licenses",
      href: "/financial/licenses",
      icon: <ScrollText size={18} />,
    },
    {
      name: "Business Planning Support",
      href: "/financial/business-planning-support",
      icon: <Briefcase size={18} />,
    },
    {
      name: "Documentation & Compliance",
      href: "/financial/documentation-compliance",
      icon: <FileCheck size={18} />,
    },
  ];

  // Split services into two columns
  const midPointIndustrial = Math.ceil(industrialServices.length / 2);
  const industrialColumn1 = industrialServices.slice(0, midPointIndustrial);
  const industrialColumn2 = industrialServices.slice(midPointIndustrial);

  const midPointFinancial = Math.ceil(financialServices.length / 2);
  const financialColumn1 = financialServices.slice(0, midPointFinancial);
  const financialColumn2 = financialServices.slice(midPointFinancial);

  const navItems = [
    { name: "Home", href: "/", type: "link" },
    {
      name: "About",
      href: "/about",
      type: "dropdown",
      dropdown: [
        { name: "Company Profile", href: "/about#company-profile" },
        { name: "Our Founder - Milind P. Rajhans", href: "/about#founder" },
        { name: "Our Team", href: "/about#team" },
        { name: "27+ Years of Excellence", href: "/about#milestones" },
        { name: "Testimonials", href: "/about#testimonials" },
      ],
    },
    {
      name: "Industrial Services",
      href: "/industrial",
      type: "mega",
      count: "11",
      columns: [industrialColumn1, industrialColumn2],
    },
    {
      name: "Financial Services",
      href: "/financial",
      type: "mega",
      count: "14",
      columns: [financialColumn1, financialColumn2],
    },
    { name: "Contact", href: "/contact", type: "link" },
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

  // Get primary phone from contact info or use fallback
  const primaryPhone = contactInfo?.primary_phone || "+91 90960 99960";
  const secondaryPhone = contactInfo?.secondary_phone || "+91 98223 72070";
  const primaryEmail = contactInfo?.primary_email || "info@bhumiindustrial.com";
  
  // Get unique cities from offices
  const officeCities = offices?.map(office => office.city) || ["Nashik", "Mumbai", "Pune", "Nagpur"];

  if (loading) {
    return (
      <>
        {/* Top Utility Bar Skeleton */}
        <div className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="h-4 w-32 bg-white/20 animate-pulse rounded"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-4 w-24 bg-white/20 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Navbar Skeleton */}
        <nav className="sticky top-0 z-50 bg-white shadow-md py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-12 w-24 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
                <div className="h-12 w-20 bg-gray-200 animate-pulse rounded hidden sm:block"></div>
              </div>
              <div className="hidden lg:block h-10 w-64 bg-gray-200 animate-pulse rounded"></div>
              <div className="h-10 w-32 bg-gray-200 animate-pulse rounded hidden lg:block"></div>
              <div className="lg:hidden h-10 w-10 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      {/* Top Utility Bar */}
      <div
        className={`bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Left side - Contact Info */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-[#fff7ed] transition-colors group"
              >
                <Phone size={14} className="flex-shrink-0" />
                <span className="hidden xs:inline">{primaryPhone}</span>
                <span className="xs:hidden">Call</span>
              </a>
              <span className="text-white/50 hidden xs:inline">|</span>
              <a
                href={`tel:${secondaryPhone.replace(/\s+/g, '')}`}
                className="hidden xs:flex items-center gap-1.5 hover:text-[#fff7ed] transition-colors"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">{secondaryPhone}</span>
                <span className="sm:hidden">Alt</span>
              </a>
              
              {/* Email - Hidden on mobile, visible on md and up */}
              <a
                href={`mailto:${primaryEmail}`}
                className="hidden md:flex items-center gap-1.5 hover:text-[#fff7ed] transition-colors"
              >
                <Mail size={14} />
                <span className="hidden lg:inline">{primaryEmail}</span>
                <span className="lg:hidden">Email</span>
              </a>
            </div>

            {/* Center - Locations - Hidden on mobile, visible on lg and up */}
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="flex items-center gap-2 flex-wrap">
                {officeCities.slice(0, 3).map((city, index) => (
                  <span key={city} className="whitespace-nowrap">
                    {city}
                    {index < Math.min(officeCities.length, 3) - 1 && <span className="text-white/50 ml-2">|</span>}
                  </span>
                ))}
                {officeCities.length > 3 && <span className="text-white/50">+{officeCities.length - 3}</span>}
              </span>
            </div>

            {/* Right side - Quick Links with Careers prominently displayed */}
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              {/* Careers - Always visible with special styling */}
              <Link
                href="/careers"
                className="flex items-center gap-1.5 bg-white/20 px-2 sm:px-3 py-1 rounded-full hover:bg-white/30 transition-colors font-medium"
              >
                <Briefcase size={14} />
                <span>Careers</span>
              </Link>
              
              {/* Other quick links - Hidden on mobile */}
              {quickLinks.slice(1).map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hidden sm:flex items-center gap-1.5 hover:text-[#fff7ed] transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
              
              <span className="text-white/50 hidden sm:block">|</span>
              
              <button
                onClick={handleDownloadBrochure}
                className="flex items-center gap-1.5 hover:text-[#fff7ed] transition-colors group"
              >
                <Download size={14} className="group-hover:animate-bounce" />
                <span className="hidden xs:inline">Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_10px_25px_-5px_rgba(249,115,22,0.2)] py-2"
            : "shadow-md py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Dual Logo Section - Responsive sizing */}
            <Link
              href="/"
              className="relative group flex items-center gap-2 sm:gap-3 flex-shrink-0"
            >
              <div className={`transition-all duration-300 ${scrolled ? "h-10 sm:h-12" : "h-12 sm:h-16"}`}>
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial Logo"
                  width={scrolled ? 80 : 100}
                  height={scrolled ? 40 : 48}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
              <div className="h-8 sm:h-10 w-px bg-gray-200 hidden sm:block"></div>
              <div className={`transition-all duration-300 ${scrolled ? "h-8 sm:h-10" : "h-10 sm:h-14"} hidden sm:block`}>
                <Image
                  src={rajhanslogo}
                  alt="Rajhans Logo"
                  width={scrolled ? 70 : 90}
                  height={scrolled ? 32 : 40}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden xl:flex items-center justify-center flex-1 gap-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index, item.type)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.type === "mega" ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all whitespace-nowrap">
                        <span>{item.name}</span>
                        {item.count && (
                          <span className="ml-1 text-xs bg-[#f97316]/10 text-[#ea580c] px-1.5 py-0.5 rounded-full">
                            {item.count}
                          </span>
                        )}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeMegaMenu === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mega Menu */}
                      {activeMegaMenu === index && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white shadow-xl rounded-2xl border border-[#ffedd5]/50 py-6 px-4 animate-fadeIn z-50">
                          <div className="grid grid-cols-2 gap-6">
                            {item.columns.map((column, colIndex) => (
                              <div key={colIndex} className="space-y-1">
                                {column.map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    href={service.href}
                                    className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all text-sm group"
                                    onClick={() => {
                                      setActiveMegaMenu(null);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <span className="text-[#f97316]/70 group-hover:text-[#f97316] flex-shrink-0">
                                      {service.icon}
                                    </span>
                                    <span className="flex-1 truncate">
                                      {service.name}
                                    </span>
                                    <ArrowRight
                                      size={14}
                                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                    />
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>

                          {/* View All Link */}
                          <div className="mt-4 pt-3 border-t border-[#ffedd5]/50 text-center">
                            <Link
                              href={item.href}
                              className="inline-flex items-center gap-2 text-[#f97316] hover:text-[#ea580c] font-semibold text-sm"
                              onClick={() => {
                                setActiveMegaMenu(null);
                                setActiveDropdown(null);
                              }}
                            >
                              View All {item.name} <ArrowRight size={14} />
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  ) : item.type === "dropdown" ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all whitespace-nowrap">
                        <span>{item.name}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-2xl border border-[#ffedd5]/50 py-2 animate-fadeIn z-50">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] transition-all text-sm"
                              onClick={() => {
                                setActiveDropdown(null);
                                setMobileOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Tablet Navigation - Visible on lg only */}
            <div className="hidden lg:flex xl:hidden items-center gap-2">
              <Link
                href="/industrial"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all"
              >
                About
              </Link>
              <Link
                href="/careers"
                className="px-3 py-2 text-sm font-semibold text-[#f97316] hover:text-[#ea580c] hover:bg-[#fff7ed] rounded-xl transition-all"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-xl transition-all"
              >
                Contact
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">Free Consultation</span>
                <span className="xl:hidden">Call</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-[#fff7ed] hover:text-[#f97316] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 sm:p-6 h-full flex flex-col">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-auto">
                  <Image
                    src={bhumilogo}
                    alt="Bhumi Industrial"
                    width={80}
                    height={40}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent">
                  Bhumi Industrial
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-[#fff7ed] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#f97316]" />
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-[#f97316]/10 to-[#ea580c]/10 rounded-xl border border-[#f97316]/20">
              <div className="space-y-2">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#f97316] transition-colors"
                >
                  <Phone size={14} className="text-[#f97316]" />
                  {primaryPhone}
                </a>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#f97316] transition-colors break-all"
                >
                  <Mail size={14} className="text-[#f97316]" />
                  {primaryEmail}
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
              {/* Home */}
              <Link
                href="/"
                className="block p-3 sm:p-4 text-gray-800 hover:bg-[#fff7ed] rounded-xl font-semibold transition-colors mb-1"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="mb-1">
                <button
                  onClick={() => handleMobileDropdown("about")}
                  className="flex items-center justify-between w-full p-3 sm:p-4 text-left text-gray-800 hover:bg-[#fff7ed] rounded-xl transition-colors"
                >
                  <span className="font-semibold">About</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="ml-4 border-l-2 border-[#f97316]/20 pl-2 mt-1">
                    {navItems.find(item => item.name === "About").dropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block p-2.5 sm:p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industrial Services */}
              <div className="mb-1">
                <button
                  onClick={() => handleMobileDropdown("industrial")}
                  className="flex items-center justify-between w-full p-3 sm:p-4 text-left text-gray-800 hover:bg-[#fff7ed] rounded-xl transition-colors"
                >
                  <span className="font-semibold flex items-center gap-2">
                    Industrial Services
                    <span className="text-xs bg-[#f97316]/10 text-[#ea580c] px-2 py-0.5 rounded-full">
                      11
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "industrial" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "industrial" && (
                  <div className="ml-4 space-y-1 mt-1 max-h-96 overflow-y-auto">
                    {industrialServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-2.5 sm:p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-[#f97316] flex-shrink-0">
                          {service.icon}
                        </span>
                        <span className="line-clamp-1">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Financial Services */}
              <div className="mb-1">
                <button
                  onClick={() => handleMobileDropdown("financial")}
                  className="flex items-center justify-between w-full p-3 sm:p-4 text-left text-gray-800 hover:bg-[#fff7ed] rounded-xl transition-colors"
                >
                  <span className="font-semibold flex items-center gap-2">
                    Financial Services
                    <span className="text-xs bg-[#f97316]/10 text-[#ea580c] px-2 py-0.5 rounded-full">
                      14
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "financial" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "financial" && (
                  <div className="ml-4 space-y-1 mt-1 max-h-96 overflow-y-auto">
                    {financialServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-2.5 sm:p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-[#f97316] flex-shrink-0">
                          {service.icon}
                        </span>
                        <span className="line-clamp-1">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Careers - Prominently displayed in mobile menu */}
              <Link
                href="/careers"
                className="flex items-center gap-2 p-3 sm:p-4 my-2 bg-gradient-to-r from-[#f97316]/10 to-[#ea580c]/10 text-[#ea580c] rounded-xl font-semibold transition-colors border border-[#f97316]/20"
                onClick={() => setMobileOpen(false)}
              >
                <Briefcase size={20} />
                <span>Careers</span>
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="block p-3 sm:p-4 text-gray-800 hover:bg-[#fff7ed] rounded-xl font-semibold transition-colors mb-1"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              {/* Quick Links */}
              <div className="mt-6 pt-4 border-t border-[#ffedd5]">
                <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2 px-3 sm:px-4">
                  More Links
                </h3>
                {quickLinks.slice(1).map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 p-3 sm:p-4 text-gray-600 hover:bg-[#fff7ed] rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-[#ffedd5] space-y-2 bg-white">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                onClick={() => {
                  handleDownloadBrochure();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 bg-[#fff7ed] text-[#ea580c] rounded-xl font-semibold hover:bg-[#f97316]/20 transition-all text-sm"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom CSS for xs breakpoint and animations */}
      <style jsx global>{`
        @media (min-width: 480px) {
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
          .xs\\:block {
            display: block;
          }
          .xs\\:flex {
            display: flex;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </>
  );
}

// Rocket icon component
function Rocket(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}