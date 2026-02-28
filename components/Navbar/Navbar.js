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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const closeTimeout = useRef(null);

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
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
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
        { name: "Our Founder - Milind Rajhans", href: "/about#founder" },
        { name: "Our Team", href: "/about#team" },
        { name: "26+ Years of Excellence", href: "/about#milestones" },
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
    const brochureUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Bhumi-Industrial-Consultant-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Top Utility Bar - UPDATED with correct contact details */}
      <div
        className={`bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white transition-all duration-300 ${scrolled ? "py-1" : "py-2"
          }`}
        style={{ minHeight: scrolled ? "40px" : "48px" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left side - Contact Info - UPDATED with correct numbers */}
            <div className="hidden md:flex items-center gap-6 text-sm font-secondary">
              <a
                href="tel:+919096099960"
                className="flex items-center gap-2 hover:text-[#fff7ed] transition-colors group"
              >
                <Phone size={14} className="group-hover:animate-pulse" />
                <span>+91 90960 99960</span>
              </a>
              <span className="text-white/50">|</span>
              <a
                href="tel:+919822372070"
                className="flex items-center gap-2 hover:text-[#fff7ed] transition-colors"
              >
                <Phone size={14} />
                <span>+91 98223 72070</span>
              </a>
              <span className="text-white/50 hidden xl:inline">|</span>
              <a
                href="mailto:info@bhumiindustrial.com"
                className="hidden xl:flex items-center gap-2 hover:text-[#fff7ed] transition-colors"
              >
                <Mail size={14} />
                <span>info@bhumiindustrial.com</span>
              </a>
            </div>

            {/* Center - Locations - UPDATED with all locations */}
            <div className="hidden lg:flex items-center gap-2 text-sm">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="flex items-center gap-2">
                <span className="hover:text-[#fff7ed] transition-colors">Nashik</span>
                <span className="text-white/50">|</span>
                <span className="hover:text-[#fff7ed] transition-colors">Mumbai</span>
                <span className="text-white/50">|</span>
                <span className="hover:text-[#fff7ed] transition-colors">Pune</span>
                <span className="text-white/50">|</span>
                <span className="hover:text-[#fff7ed] transition-colors">Nagpur</span>
              </span>
            </div>

            {/* Right side - Quick Links */}
            <div className="flex items-center gap-4 font-secondary">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm hover:text-[#fff7ed] transition-colors hidden md:block"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleDownloadBrochure}
                className="flex items-center gap-2 text-sm hover:text-[#fff7ed] transition-colors group"
              >
                <Download size={16} className="group-hover:animate-bounce" />
                <span className="hidden lg:inline">Brochure</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - UPDATED contact button */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled
            ? "shadow-[0_10px_25px_-5px_rgba(249,115,22,0.2)] py-2"
            : "shadow-md py-3"
          }`}
        style={{ minHeight: scrolled ? "72px" : "80px" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Dual Logo Section */}
            <Link
              href="/"
              className="relative group flex items-center gap-3 flex-shrink-0"
            >
              <div
                className={`transition-all duration-300 ${scrolled ? "h-12" : "h-18"
                  }`}
                style={{ width: scrolled ? "100px" : "120px" }}
              >
                <Image
                  src={bhumilogo}
                  alt="Bhumi Industrial Logo"
                  width={scrolled ? 100 : 120}
                  height={scrolled ? 48 : 60}
                  className="h-full w-auto object-contain"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="h-10 w-px bg-[#f3f4f6] hidden sm:block flex-shrink-0"></div>
              <div
                className={`transition-all duration-300 ${scrolled ? "h-12" : "h-16"
                  }`}
                style={{ width: scrolled ? "100px" : "120px" }}
              >
                <Image
                  src={rajhanslogo}
                  alt="Rajhans Logo"
                  width={scrolled ? 100 : 120}
                  height={scrolled ? 48 : 64}
                  className="h-full w-auto object-contain"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-1 mx-4">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => handleMouseEnter(index, item.type)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.type === "mega" ? (
                    <>
                      <button className="flex items-center gap-1 px-3 py-3 text-base font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-2xl transition-all whitespace-nowrap">
                        <span>{item.name}</span>
                        {item.count && (
                          <span className="ml-1 text-xs bg-[#f97316]/10 text-[#ea580c] px-1.5 py-0.5 rounded-full">
                            {item.count}
                          </span>
                        )}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${activeMegaMenu === index ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Mega Menu - Two Columns */}
                      {activeMegaMenu === index && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white shadow-xl rounded-2xl border border-[#ffedd5]/50 py-6 px-4 animate-fadeIn z-50">
                          <div className="grid grid-cols-2 gap-4">
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
                      <button className="flex items-center gap-1 px-3 py-3 text-base font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-2xl transition-all whitespace-nowrap">
                        <span>{item.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {activeDropdown === index && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-2xl border border-[#ffedd5]/50 py-2 animate-fadeIn z-50">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] transition-all text-sm whitespace-nowrap"
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
                      className="inline-block px-3 py-3 text-base font-semibold text-gray-700 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-2xl transition-all whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons - UPDATED with correct phone */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href="tel:+919096099960"
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all group whitespace-nowrap"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-[#fff7ed] hover:text-[#f97316] transition-all flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
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

        {/* Mobile Menu Panel - UPDATED contact info */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="h-10 w-auto">
                  <Image
                    src={bhumilogo}
                    alt="Bhumi Industrial"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent">
                  Bhumi
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-[#fff7ed] rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-[#f97316]" />
              </button>
            </div>

            {/* Mobile Contact Info - UPDATED */}
            <div className="mb-6 p-4 bg-gradient-to-r from-[#f97316]/10 to-[#ea580c]/10 rounded-xl border border-[#f97316]/20">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <Phone size={14} className="text-[#f97316]" />
                Contact Us
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+919096099960"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#f97316] transition-colors"
                >
                  <Phone size={12} className="text-[#f97316]" />
                  +91 90960 99960
                </a>
                <a
                  href="tel:+919822372070"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#f97316] transition-colors"
                >
                  <Phone size={12} className="text-[#f97316]" />
                  +91 98223 72070
                </a>
                <a
                  href="mailto:info@bhumiindustrial.com"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#f97316] transition-colors break-all"
                >
                  <Mail size={12} className="text-[#f97316]" />
                  info@bhumiindustrial.com
                </a>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex-1 overflow-y-auto hide-scrollbar pb-20">
              {/* Home Link */}
              <Link
                href="/"
                className="block p-4 text-gray-800 hover:bg-[#fff7ed] rounded-xl font-semibold transition-colors mb-2"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="mb-2">
                <button
                  onClick={() => handleMobileDropdown("about")}
                  className="flex items-center justify-between w-full p-4 text-left text-gray-800 hover:bg-[#fff7ed] rounded-xl transition-colors"
                >
                  <span className="font-semibold">About</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${activeDropdown === "about" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="ml-4 border-l-2 border-[#f97316]/20 pl-2">
                    <Link
                      href="/about#company-profile"
                      className="block p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      Company Profile
                    </Link>
                    <Link
                      href="/about#founder"
                      className="block p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      Our Founder
                    </Link>
                    <Link
                      href="/about#team"
                      className="block p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/about#milestones"
                      className="block p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      26+ Years of Excellence
                    </Link>
                    <Link
                      href="/about#testimonials"
                      className="block p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </div>
                )}
              </div>

              {/* Industrial Services - Mobile with Icons */}
              <div className="mb-2">
                <button
                  onClick={() => handleMobileDropdown("industrial")}
                  className="flex items-center justify-between w-full p-4 text-left text-gray-800 hover:bg-[#fff7ed] rounded-xl transition-colors"
                >
                  <span className="font-semibold flex items-center gap-2">
                    Industrial Services
                    <span className="text-xs bg-[#f97316]/10 text-[#ea580c] px-2 py-0.5 rounded-full">
                      11
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${activeDropdown === "industrial" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {activeDropdown === "industrial" && (
                  <div className="ml-4 space-y-1">
                    {industrialServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-[#f97316] flex-shrink-0">
                          {service.icon}
                        </span>
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/industrial"
                      className="flex items-center gap-2 p-3 text-[#f97316] font-semibold text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      View All <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Financial Services - Mobile with Icons */}
              <div className="mb-2">
                <button
                  onClick={() => handleMobileDropdown("financial")}
                  className="flex items-center justify-between w-full p-4 text-left text-gray-800 hover:bg-[#fff7ed] rounded-xl transition-colors"
                >
                  <span className="font-semibold flex items-center gap-2">
                    Financial Services
                    <span className="text-xs bg-[#f97316]/10 text-[#ea580c] px-2 py-0.5 rounded-full">
                      14
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${activeDropdown === "financial" ? "rotate-180" : ""
                      }`}
                  />
                </button>
                {activeDropdown === "financial" && (
                  <div className="ml-4 space-y-1">
                    {financialServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center gap-3 p-3 text-gray-600 hover:text-[#f97316] hover:bg-[#fff7ed] rounded-lg transition-colors text-sm"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-[#f97316] flex-shrink-0">
                          {service.icon}
                        </span>
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/financial"
                      className="flex items-center gap-2 p-3 text-[#f97316] font-semibold text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      View All <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="block p-4 text-gray-800 hover:bg-[#fff7ed] rounded-xl font-semibold transition-colors mb-2"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              {/* Quick Links in Mobile */}
              <div className="mt-8 pt-6 border-t border-[#ffedd5]">
                <h3 className="text-sm font-semibold text-[#9ca3af] uppercase mb-3 px-4">
                  Quick Links
                </h3>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-4 text-gray-600 hover:bg-[#fff7ed] rounded-xl transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Action Buttons - UPDATED */}
            <div className="pt-6 border-t border-[#ffedd5] space-y-3 bg-white">
              <a
                href="tel:+919096099960"
                className="flex items-center justify-center gap-2 w-full p-4 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 90960 99960
              </a>
              <button
                onClick={() => {
                  handleDownloadBrochure();
                  setMobileOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full p-4 bg-[#fff7ed] text-[#ea580c] rounded-xl font-bold hover:bg-[#f97316]/20 transition-all"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </nav>
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