"use client";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  LandPlot,
  ScrollText,
  FileCheck,
  FileText,
  Handshake,
  Factory,
  TrendingUp,
  Calculator,
  Briefcase,
  PiggyBank,
  Shield,
  Droplets,
} from "lucide-react";

const ServicesSection = () => {
  const industrialServices = [
    {
      title: "Industrial Project Planning",
      href: "/industrial/industrial-project-planning",
      icon: <Building2 className="w-8 h-8" />,
      description: "Complete project planning from concept to execution",
    },
    {
      title: "Bank Auction Deals",
      href: "/industrial/bank-auction-deals-sarfaesi",
      icon: <LandPlot className="w-8 h-8" />,
      description: "SARFAESI Act bank auction deals and bidding strategy",
    },
    {
      title: "DRT/NCLT Deals",
      href: "/industrial/drt-nclt-deals",
      icon: <ScrollText className="w-8 h-8" />,
      description: "Debt recovery tribunal and insolvency resolution",
    },
    {
      title: "MIDC Transfer Process",
      href: "/industrial/midc-transfer-process",
      icon: <Handshake className="w-8 h-8" />,
      description: "Complete MIDC plot transfer and name change",
    },
    {
      title: "MIDC Water Connection",
      href: "/industrial/midc-water-mseb-connection",
      icon: <Droplets className="w-8 h-8" />,
      description: "Water and electricity connection approvals",
    },
    {
      title: "Project Reports",
      href: "/industrial/midc-project-report",
      icon: <FileText className="w-8 h-8" />,
      description: "DPR preparation for MIDC approvals",
    },
  ];

  const financialServices = [
    {
      title: "Term Loans",
      href: "/financial/term-loans",
      icon: <PiggyBank className="w-8 h-8" />,
      description: "Industrial term loans and project financing",
    },
    {
      title: "MSME Udyam Registration",
      href: "/financial/msme-udyam-registration",
      icon: <FileCheck className="w-8 h-8" />,
      description: "Free Udyam registration with MSME benefits",
    },
    {
      title: "CMA/DPR Reports",
      href: "/financial/cma-cra-dpr-report",
      icon: <FileText className="w-8 h-8" />,
      description: "Complete bank loan documentation",
    },
    {
      title: "Working Capital",
      href: "/financial/cash-credit-working-capital",
      icon: <Calculator className="w-8 h-8" />,
      description: "Cash credit and working capital loans",
    },
    {
      title: "Subsidy Compliance",
      href: "/financial/subsidy-compliance",
      icon: <Shield className="w-8 h-8" />,
      description: "Government subsidy and compliance support",
    },
    {
      title: "Due Diligence",
      href: "/financial/due-diligence-merger-acquisition",
      icon: <Briefcase className="w-8 h-8" />,
      description: "M&A due diligence and financial advisory",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] bg-clip-text text-transparent">
              Industrial & Financial
            </span>{" "}
            Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From MIDC approvals to project finance - we handle it all under one
            roof
          </p>
        </div>

        {/* Industrial Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Industrial Services <span className="text-[#f97316]">(11)</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 bg-gradient-to-br from-white to-[#fff7ed] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30"
              >
                <div className="text-[#f97316] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#f97316] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#f97316] text-sm font-semibold">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Financial Services */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Financial Services <span className="text-[#f97316]">(14)</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financialServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 bg-gradient-to-br from-white to-[#fff7ed] rounded-2xl shadow-lg hover:shadow-xl transition-all border border-[#ffedd5]/50 hover:border-[#f97316]/30"
              >
                <div className="text-[#f97316] mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#f97316] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[#f97316] text-sm font-semibold">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Two CTA Buttons Side by Side */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link
            href="/industrial"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-xl font-bold hover:bg-[#ea580c] transition-all transform hover:scale-105 shadow-xl group flex-1 max-w-md"
          >
            <Building2 className="w-5 h-5" />
            View All Industrial Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/financial"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#003366] text-white rounded-xl font-bold hover:bg-[#002244] transition-all transform hover:scale-105 shadow-xl group flex-1 max-w-md"
          >
            <PiggyBank className="w-5 h-5" />
            View All Financial Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Optional: Add a note about total services */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Explore all 25+ services we offer across Maharashtra
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;