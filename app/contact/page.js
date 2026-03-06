// app/contact/page.jsx
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Star,
  Building2,
} from "lucide-react";
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import ContactFormClient from "@/components/contact/ContactFormClient";
import axiosInstance from "@/services/api";
import DirectionsLink from "@/components/contact/DirectionsLink";

export const metadata = buildMetadata("contact");
export const revalidate = 3600; // ISR - revalidate every hour

// Fetch contact info directly in the page
async function getContactInfo() {
  try {
    const response = await axiosInstance.get('/contact');
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
}

// Fetch office locations directly in the page
async function getOfficeLocations() {
  try {
    const response = await axiosInstance.get('/offices');
    if (response.data.success) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching office locations:', error);
    return [];
  }
}

export default async function ContactPage() {
  // Fetch data directly in the page
  const contactInfo = await getContactInfo();
  const offices = await getOfficeLocations();
  
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  // Main contact methods with data from backend (with fallbacks)
  const mainContactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: contactInfo?.primary_phone || "+91 90960 99960",
      sub: "Primary Contact",
      href: `tel:${contactInfo?.primary_phone?.replace(/\s+/g, '') || '+919096099960'}`,
      color: "bg-[#f97316]",
    },
    {
      icon: Phone,
      title: "Alternate",
      value: contactInfo?.secondary_phone || "+91 98223 72070",
      sub: "Secondary Contact",
      href: `tel:${contactInfo?.secondary_phone?.replace(/\s+/g, '') || '+919822372070'}`,
      color: "bg-[#ea580c]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      sub: "Quick responses",
      href: `https://wa.me/${contactInfo?.whatsapp_number?.replace(/\s+/g, '') || '919096099960'}?text=Hi%20I%20need%20industrial%20consulting%20help`,
      color: "bg-[#25D366]",
    },
    {
      icon: Mail,
      title: "Email",
      value: contactInfo?.primary_email || "info@bhumiindustrial.com",
      sub: "Reply within 24 hours",
      href: `mailto:${contactInfo?.primary_email || 'info@bhumiindustrial.com'}`,
      color: "bg-[#003366]",
    },
  ];

  // Business hours from backend or defaults
  const businessHours = [
    ["Monday–Friday", contactInfo?.weekday_hours || "9:00 AM – 6:00 PM"],
    ["Saturday", contactInfo?.saturday_hours || "9:00 AM – 2:00 PM"],
    ["Sunday", contactInfo?.sunday_hours || "Closed"],
  ];

  return (
    <SeoWrapper pageUrl="/contact" schemas={[breadcrumb]}>
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-[#f97316] blur-2xl sm:blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full bg-[#f97316] blur-2xl sm:blur-3xl" />
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
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Contact Bhumi Industrial Consultant
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-[#d9e6f2] max-w-2xl mb-4 sm:mb-6">
              Choose an office location below or send us a message. 
              Talk directly to our experts for MIDC approvals, project finance, 
              MSME registration, and all industrial consulting needs.
            </p>
            
            {/* Hero CTA Buttons - Always side by side */}
            <div className="flex flex-row flex-nowrap gap-2 sm:gap-3 max-w-[320px] xs:max-w-md sm:max-w-lg">
              <a
                href={`tel:${contactInfo?.primary_phone?.replace(/\s+/g, '') || '+919096099960'}`}
                className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 bg-[#f97316] text-white rounded-lg sm:rounded-xl font-bold hover:bg-[#ea580c] transition-colors text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">Primary: {contactInfo?.primary_phone || "+91 90960 99960"}</span>
              </a>
              <a
                href={`tel:${contactInfo?.secondary_phone?.replace(/\s+/g, '') || '+919822372070'}`}
                className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg sm:rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/20 text-[11px] xs:text-xs sm:text-sm lg:text-base whitespace-nowrap min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">Alt: {contactInfo?.secondary_phone || "+91 98223 72070"}</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── FORM + INFO 2-COLUMN SECTION ──────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">Get in Touch</h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 2 hours during business hours.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Contact Form */}
              <div className="bg-[#fff7ed] p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm">
                  Fill in your details and we'll connect you with the right office.
                </p>
                <ContactFormClient />
              </div>

              {/* Right Column - Info Cards */}
              <div className="space-y-4 sm:space-y-6">
                {/* Expert card */}
                <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#f97316] flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold flex-shrink-0">
                      M
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">Milind P. Rajhans</h3>
                      <p className="text-[#f97316] font-semibold text-xs sm:text-sm">
                        FI-ACC
                      </p>
                      <p className="text-white/60 text-[10px] sm:text-xs">
                        Founder, 27+ Years Experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-[#f97316] fill-[#f97316]"
                      />
                    ))}
                    <span className="text-white/60 text-[10px] sm:text-xs ml-2">
                      3500+ clients
                    </span>
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-5">
                    Direct consultation with the founder at our Nashik head office.
                    For other locations, you'll be connected with our senior consultants.
                  </p>
                  
                  {/* Expert card buttons - Always side by side */}
                  <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                    <a
                      href={`tel:${contactInfo?.primary_phone?.replace(/\s+/g, '') || '+919096099960'}`}
                      className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 bg-[#f97316] hover:bg-[#ea580c] rounded-lg sm:rounded-xl font-bold transition-colors text-[11px] xs:text-xs sm:text-sm whitespace-nowrap min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate max-w-[60px] xs:max-w-[80px] sm:max-w-none">Call</span>
                    </a>
                    <a
                      href={`tel:${contactInfo?.secondary_phone?.replace(/\s+/g, '') || '+919822372070'}`}
                      className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 bg-[#ea580c] hover:bg-[#dc2626] rounded-lg sm:rounded-xl font-bold transition-colors text-[11px] xs:text-xs sm:text-sm whitespace-nowrap min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate max-w-[60px] xs:max-w-[80px] sm:max-w-none">Alt</span>
                    </a>
                  </div>
                </div>

                {/* Office hours */}
                <div className="bg-[#fff7ed] p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">General Office Hours</h3>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    {businessHours.map(([day, hours], i) => (
                      <div
                        key={i}
                        className="flex justify-between text-gray-700 border-b border-gray-200 pb-1.5 sm:pb-2 last:border-0"
                      >
                        <span>{day}</span>
                        <span className="font-medium">{hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-3 sm:mt-4">
                    *Hours may vary by location. Check specific office pages for details.
                  </p>
                </div>

                {/* Email contact */}
                <div className="bg-[#fff7ed] p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Email Us</h3>
                  </div>
                  <a
                    href={`mailto:${contactInfo?.primary_email || 'info@bhumiindustrial.com'}`}
                    className="text-[#f97316] hover:underline font-medium text-xs sm:text-sm break-all block truncate"
                  >
                    {contactInfo?.primary_email || "info@bhumiindustrial.com"}
                  </a>
                  {contactInfo?.secondary_email && (
                    <a
                      href={`mailto:${contactInfo.secondary_email}`}
                      className="text-[#f97316] hover:underline font-medium text-xs sm:text-sm break-all block mt-1 sm:mt-2 truncate"
                    >
                      {contactInfo.secondary_email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── OFFICE LOCATIONS GRID ────────────────────────── */}
        {offices && offices.length > 0 && (
          <section className="py-12 sm:py-16 bg-[#fff7ed]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">Our Office Locations</h2>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Visit us at any of our offices across Maharashtra. Each location is fully equipped to handle all your industrial consulting needs.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {offices.map((office) => (
                  <Link
                    key={office.id}
                    href={`/contact/${office.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-xl transition-all hover:border-[#f97316] block"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-[#f97316] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 flex-wrap">
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg group-hover:text-[#f97316] transition-colors truncate">
                            {office.name}
                          </h3>
                          {office.is_head_office && (
                            <span className="px-1.5 sm:px-2 py-0.5 bg-[#f97316] text-white text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap">
                              Head Office
                            </span>
                          )}
                        </div>
                        <address className="not-italic text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                          {office.address_line_1}
                          {office.address_line_2 && <><br />{office.address_line_2}</>}
                          <br />
                          {office.city} - {office.pincode}
                        </address>
                        
                        {/* Contact details */}
                        <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                          {office.phone && (
                            <span className="flex items-center gap-1 group-hover:text-[#f97316] transition-colors truncate">
                              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" /> {office.phone}
                            </span>
                          )}
                          {office.email && (
                            <span className="flex items-center gap-1 group-hover:text-[#f97316] transition-colors truncate">
                              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" /> {office.email}
                            </span>
                          )}
                          {office.google_maps_link && (
                            <DirectionsLink href={office.google_maps_link} />
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── MAIN CONTACT CARDS ───────────────────────────── */}
        <section className="py-10 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {mainContactMethods.map((m, i) => (
                <a
                  key={i}
                  href={m.href}
                  target={m.href.startsWith("http") && !m.href.startsWith("/") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") && !m.href.startsWith("/") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center p-4 sm:p-5 lg:p-6 bg-[#fff7ed] rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div
                    className={`${m.color} text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <m.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1">{m.title}</p>
                  <p className="text-[#ea580c] text-[10px] sm:text-xs lg:text-sm font-medium mb-0.5 sm:mb-1 truncate max-w-full">
                    {m.value}
                  </p>
                  <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">{m.sub}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}