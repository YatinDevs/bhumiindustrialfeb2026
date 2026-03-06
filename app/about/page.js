// app/about/page.jsx
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  Calendar,
  MapPin,
  ArrowRight,
  Star,
  ThumbsUp,
  Briefcase,
  Target,
  Phone,
  CheckCircle,
  Building2,
} from "lucide-react";
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import axiosInstance from "@/services/api";

export const revalidate = 3600; // ISR - revalidate every hour

// Icon mapping for milestones
const iconMap = {
  Target: Target,
  Building2: Building2,
  Briefcase: Briefcase,
  Award: Award,
  MapPin: MapPin,
  Users: Users,
};

async function getAboutPageData() {
  try {
    const response = await axiosInstance.get('/about');
    if (response.data.success) {
      return {
        page: response.data.data,
        contact: response.data.contact
      };
    }
    return null;
  } catch (error) {
    console.error('Error fetching about page data:', error);
    return null;
  }
}

export async function generateMetadata() {
  const data = await getAboutPageData();
  
  if (data?.page?.meta_title) {
    return {
      title: data.page.meta_title,
      description: data.page.meta_description,
      keywords: data.page.meta_keywords,
    };
  }
  
  return buildMetadata("about");
}

export default async function AboutPage() {
  const data = await getAboutPageData();
  const page = data?.page;
  const contact = data?.contact;

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]);

  // Use data from API or fallback to defaults
  const heroTitle = page?.hero_title || "27+ Years of Industrial Excellence in Nashik";
  const heroDescription = page?.hero_description || "Led by Milind P. Rajhans (FI-ACC), Bhumi Industrial Consultant has been the backbone of industrial development across Nashik, Pune, and Chakan since 1999.";
  
  const stats = page?.stats || [
    { value: "27+", label: "Years of Excellence" },
    { value: "4000+", label: "Projects Completed" },
    { value: "3500+", label: "Happy Clients" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const expertiseList = page?.expertise_list?.map(item => item.item) || [
    "MIDC NOC & Approvals",
    "MSME Udyam Registration",
    "Project Finance & Term Loans",
    "DPR / CMA Report Preparation",
    "SARFAESI & Bank Auctions",
    "Industrial Expansion Advisory",
  ];

  const accreditationStats = page?.accreditation_stats || [
    { value: "25+", label: "MIDC Areas" },
    { value: "₹2000Cr+", label: "Finance Arranged" },
    { value: "100%", label: "Approval Rate" },
    { value: "48hr", label: "Turnaround" },
  ];

  const founderStats = page?.founder_stats || [
    { label: "Projects", value: "4000+" },
    { label: "Clients", value: "3500+" },
    { label: "MIDC Areas", value: "25+" },
    { label: "Finance", value: "₹2000Cr+" },
  ];

  const founderExpertise = page?.founder_expertise?.map(item => item.tag) || [
    "MIDC Expert",
    "Project Finance",
    "Term Loans",
    "MSME Advisory",
    "Due Diligence",
    "SARFAESI Deals",
    "Industrial Planning",
    "Bank Liaison",
  ];

  const teamMembers = page?.team_members || [
    { name: "Dhanashree Rajhans", role: "Account Manager", initial: "D", experience: "27+ Years" },
    { name: "Jayesh Gulve", role: "Finance Executive", initial: "J", experience: null },
    { name: "Chaitrali Jadhav", role: "Admin Manager", initial: "C", experience: null },
    { name: "Darshan Lokhande", role: "Finance Executive", initial: "D", experience: null },
    { name: "Aniket Sangale", role: "Finance Executive", initial: "A", experience: null },
  ];

  const milestones = page?.milestones || [
    { year: "1999", event: "Started as FI-ACC Project Finance Consultant" },
    { year: "2005", event: "Expanded to full MIDC consultancy services" },
    { year: "2010", event: "Financial Advisory vertical launched" },
    { year: "2015", event: "Established Bhumi Industrial Consultant by Milind P. Rajhans" },
    { year: "2020", event: "Expanded services to Pune & Chakan MIDC" },
    { year: "2026", event: "4000+ clients served across Maharashtra" },
  ];

  const testimonials = page?.testimonials || [
    {
      name: "Rajendra Khadse",
      company: "Khadse Industries, Ambad MIDC",
      text: "Bhumi Industrial helped us secure MIDC approvals in record time. Their expertise is unmatched in Nashik.",
    },
    {
      name: "Priya Mehta",
      company: "Mehta Enterprises, Satpur",
      text: "Excellent financial advisory services. They helped us get the best term loan rate for our factory expansion.",
    },
    {
      name: "Suresh Jain",
      company: "Jain Group, Pune",
      text: "Milind sir's guidance in our project planning was invaluable. Truly the best industrial consultants in Nashik.",
    },
  ];

  const ctaTitle = page?.cta_title || "Ready to Work with Nashik's Best Industrial Consultants?";
  const ctaDescription = page?.cta_description || "Free consultation with Milind P. Rajhans. 27+ years of expertise, 4000+ projects delivered.";
  
  const primaryPhone = contact?.phone?.primary || "+91 90960 99960";
  const primaryEmail = contact?.email?.primary || "info@bhumiindustrial.com";

  return (
    <SeoWrapper pageUrl="/about" schemas={[breadcrumb]}>
      <main>
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-[#f97316] blur-2xl sm:blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full bg-[#f97316] blur-2xl sm:blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/50 mb-4 sm:mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">About Us</span>
            </nav>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/20 text-[#fb923c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 lg:mb-6">
              {page?.hero_badge || "About Bhumi Industrial"}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight max-w-4xl">
              {heroTitle.split('Excellence').map((part, i, arr) => 
                i < arr.length - 1 ? (
                  <span key={i}>{part}<span className="text-[#f97316]">Excellence</span></span>
                ) : part
              )}
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-[#d9e6f2] max-w-3xl mb-4 sm:mb-6 lg:mb-8">
              {heroDescription}
            </p>
            
            {/* Hero CTA Buttons - Always side by side with auto width */}
            <div className="flex flex-row flex-wrap gap-3">
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-[#f97316] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#ea580c] transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call {page?.founder_name || "Milind P. Rajhans"}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 border-2 border-[#f97316] text-[#f97316] rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#f97316] hover:text-white transition-colors text-xs sm:text-sm lg:text-base whitespace-nowrap"
          >
            Schedule Meeting
          </Link>
        </div>
          </div>
        </section>

        {/* ── STATS BAR ──────────────────────────────────────────── */}
        <section className="bg-white py-8 sm:py-10 lg:py-12 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon ? eval(stat.icon) : 
                  [Calendar, Users, Star, ThumbsUp][i % 4];
                return (
                  <div
                    key={i}
                    className="text-center p-3 sm:p-4 lg:p-6 bg-[#fff7ed] rounded-xl sm:rounded-2xl hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#f97316] mx-auto mb-1.5 sm:mb-2 lg:mb-3" />
                    <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs lg:text-sm text-gray-600 mt-0.5 sm:mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── COMPANY PROFILE ────────────────────────────────────── */}
        <section id="company-profile" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  {page?.profile_badge || "Company Profile"}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                  {page?.profile_title || "Complete Industrial Solutions Under One Roof"}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {page?.profile_description_1}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {page?.profile_description_2}
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {expertiseList.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f97316] flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/industrial"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:shadow-lg transition-shadow group text-sm sm:text-base"
                >
                  View Industrial Services{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative mt-6 lg:mt-0">
                <div className="bg-gradient-to-br from-[#f97316]/10 to-[#fff7ed] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                  <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
                    <p className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">
                      {page?.accreditation_title || "FI-ACC Accredited Since"}
                    </p>
                    <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6 text-[#f97316]">
                      {page?.accreditation_year || "2015"}
                    </p>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 sm:mb-5 lg:mb-6">
                      {page?.accreditation_description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                      {accreditationStats.map((stat, i) => (
                        <div
                          key={i}
                          className="bg-white/10 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl text-center"
                        >
                          <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#f97316]">
                            {stat.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-white/70">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDER ────────────────────────────────────────────── */}
        <section id="founder" className="py-12 sm:py-16 lg:py-20 bg-[#fff7ed] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {page?.founder_badge || "Our Founder"}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Meet {page?.founder_name || "Milind P. Rajhans"}
              </h2>
            </div>
            <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Founder Image Section */}
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-[#001a33] to-[#003366] overflow-hidden">
                  {page?.founder_image ? (
                    <Image
                      src={`${axiosInstance.defaults.fileURL}/${page.founder_image}`}
                      alt={page?.founder_name || "Milind P. Rajhans"}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#001a33] to-[#003366]">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-[#f97316] flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        M
                      </div>
                    </div>
                  )}
                  {/* Overlay with name and title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#001a33] to-transparent p-4 sm:p-6 lg:p-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                      {page?.founder_name || "Milind P. Rajhans"}
                    </h3>
                    <p className="text-[#f97316] font-bold text-base sm:text-lg">
                      {page?.founder_title || "FI-ACC"}
                    </p>
                    <p className="text-white/80 text-sm sm:text-base">
                      {page?.founder_subtitle || "Founder & Lead Consultant"}
                    </p>
                  </div>
                </div>
                
                {/* Founder Details Section */}
                <div className="p-5 sm:p-6 lg:p-8 xl:p-10">
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-500">
                        {stats[0]?.value || "27+"} YEARS EXPERIENCE
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                      {page?.founder_description_1}
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                      {page?.founder_description_2}
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-5 lg:mb-6">
                    {founderStats.map((stat, i) => (
                      <div key={i} className="bg-[#fff7ed] p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl text-center">
                        <div className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#f97316]">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">Areas of Expertise:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {founderExpertise.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] sm:text-xs bg-[#fff7ed] text-[#ea580c] border border-[#ffedd5] rounded-lg px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Buttons - Always side by side */}
                  <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                    <a
                      href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 bg-[#f97316] text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#ea580c] transition-colors text-[11px] xs:text-xs sm:text-sm whitespace-nowrap min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">Call</span>
                    </a>
                    <Link
                      href="/contact"
                      className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 lg:py-3 border-2 border-[#f97316] text-[#f97316] rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#f97316] hover:text-white transition-colors text-[11px] xs:text-xs sm:text-sm whitespace-nowrap min-h-[44px]"
                    >
                      <span className="truncate">Schedule</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAM ───────────────────────────────────────────────── */}
        <section id="team" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {page?.team_badge || "Our Team"}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                {page?.team_title || "Experts Behind Your Success"}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                {page?.team_description || "A dedicated team of industrial and financial experts committed to your project's success"}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-white to-[#fff7ed] p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center border border-[#ffedd5]/50"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-bold mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform">
                    {member.initial}
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base xl:text-lg mb-0.5 sm:mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-[#f97316] font-semibold text-[10px] sm:text-xs lg:text-sm">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MILESTONES ─────────────────────────────────────────── */}
        <section id="milestones" className="py-12 sm:py-16 lg:py-20 bg-[#fff7ed] scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {page?.milestones_badge || "Our Journey"}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                {page?.milestones_title || "27+ Years of Excellence"}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f97316] to-[#ffedd5]"></div>
                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  {milestones.map((item, i) => {
                    const Icon = iconMap[item.icon] || Target;
                    return (
                      <div key={i} className="flex items-start gap-3 sm:gap-4 lg:gap-6 group">
                        <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-md sm:shadow-lg">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                        </div>
                        <div className="flex-1 bg-white p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                          <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#f97316]">
                            {item.year}
                          </span>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-700 mt-0.5 sm:mt-1">
                            {item.event}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────── */}
        <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f97316]/10 text-[#ea580c] rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                {page?.testimonials_badge || "Testimonials"}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                {page?.testimonials_title || "What Our Clients Say"}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-br from-[#fff7ed] to-white p-4 sm:p-5 lg:p-6 xl:p-7 rounded-lg sm:rounded-xl lg:rounded-2xl border border-[#ffedd5] hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl sm:text-5xl lg:text-6xl text-[#f97316]/15 absolute top-2 sm:top-3 lg:top-4 right-3 sm:right-4 lg:right-6 font-serif leading-none">
                    "
                  </div>
                  <div className="flex gap-0.5 sm:gap-1 mb-2 sm:mb-3 lg:mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-[#f97316] fill-[#f97316]"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 lg:mb-5 xl:mb-6 relative z-10 line-clamp-4 sm:line-clamp-5 lg:line-clamp-none">
                    {t.text}
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</p>
                    <p className="text-xs sm:text-sm text-[#f97316]">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
              {ctaTitle}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto">
              {ctaDescription}
            </p>
            
            {/* CTA Buttons - ALWAYS SIDE BY SIDE on all screens */}
            <div className="flex flex-row flex-nowrap gap-2 sm:gap-3 lg:gap-4 justify-center max-w-full sm:max-w-md mx-auto">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 px-1 sm:px-3 lg:px-5 py-2.5 sm:py-3 lg:py-4 bg-white text-[#ea580c] rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-[#fff7ed] transition-colors shadow-xl group text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
              >
                <span className="truncate max-w-[90px] xs:max-w-[110px] sm:max-w-none">
                  {page?.cta_button_text || "Free Consult"}
                </span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden xs:inline" />
              </Link>
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 px-1 sm:px-3 lg:px-5 py-2.5 sm:py-3 lg:py-4 border-2 border-white text-white rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:bg-white/10 transition-colors text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-5 flex-shrink-0" />
                <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">
                  {primaryPhone}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}