// app/contact/[slug]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Star,
  Building2,
  ChevronLeft,
} from "lucide-react";
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import ContactFormClient from "@/components/contact/ContactFormClient";
import axiosInstance from "@/services/api";

// Revalidate every hour
export const revalidate = 3600;

// Fetch office by slug
async function getOfficeBySlug(slug) {
  try {
    const response = await axiosInstance.get(`/offices/${slug}`);
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching office:', error);
    return null;
  }
}

// Fetch all offices for static params
async function getAllOffices() {
  try {
    const response = await axiosInstance.get('/offices');
    if (response.data.success) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching offices:', error);
    return [];
  }
}

// Fetch contact info for global data
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

// Generate metadata for each location
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const office = await getOfficeBySlug(resolvedParams.slug);
  
  if (!office) {
    return buildMetadata("contact");
  }
  
  return {
    title: `Contact ${office.name} - Bhumi Industrial Consultant`,
    description: `Visit our ${office.name} in ${office.city} for MIDC approvals, project finance, and industrial consulting. Call us at ${office.phone || '+91 90960 99960'}.`,
    alternates: {
      canonical: `${siteSEO.baseUrl}/contact/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${office.name} - Bhumi Industrial Consultant`,
      description: `Visit our ${office.name} in ${office.city} for MIDC approvals, project finance, and industrial consulting.`,
      url: `${siteSEO.baseUrl}/contact/${resolvedParams.slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
    },
  };
}

// Generate static paths with ISR
export async function generateStaticParams() {
  const offices = await getAllOffices();
  return offices.map((office) => ({
    slug: office.slug,
  }));
}

// Icon mapping
const IconMap = {
  Phone: Phone,
  Mail: Mail,
  MessageCircle: MessageCircle,
  Building2: Building2,
};

export default async function ContactLocationPage({ params }) {
  const resolvedParams = await params;
  const office = await getOfficeBySlug(resolvedParams.slug);
  const contactInfo = await getContactInfo();
  
  if (!office) {
    notFound();
  }

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: office.name, href: `/contact/${office.slug}` },
  ]);

  // Fetch all offices for sidebar (excluding current)
  const allOffices = await getAllOffices();
  const otherOffices = allOffices.filter(
    loc => loc.slug !== office.slug
  );

  // Construct contact methods from office data
  const contactMethods = [
    {
      icon: 'Phone',
      title: "Call Us",
      value: office.phone || contactInfo?.primary_phone || "+91 90960 99960",
      sub: "Primary Contact",
      href: `tel:${(office.phone || contactInfo?.primary_phone || '+919096099960').replace(/\s+/g, '')}`,
      color: "bg-[#f97316]",
    },
    {
      icon: 'Phone',
      title: "Alternate",
      value: contactInfo?.secondary_phone || "+91 98223 72070",
      sub: "Secondary Contact",
      href: `tel:${(contactInfo?.secondary_phone || '+919822372070').replace(/\s+/g, '')}`,
      color: "bg-[#ea580c]",
    },
    {
      icon: 'MessageCircle',
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      sub: "Quick responses",
      href: `https://wa.me/${(contactInfo?.whatsapp_number || '919096099960').replace(/\s+/g, '')}?text=Hi%20I%20need%20help%20with%20${office.name}`,
      color: "bg-[#25D366]",
    },
    {
      icon: 'Mail',
      title: "Email",
      value: office.email || contactInfo?.primary_email || "info@bhumiindustrial.com",
      sub: "Reply within 24 hours",
      href: `mailto:${office.email || contactInfo?.primary_email || 'info@bhumiindustrial.com'}`,
      color: "bg-[#003366]",
    },
  ];

  // Format address lines
  const addressLines = [
    office.address_line_1,
    office.address_line_2,
    `${office.city} - ${office.pincode}`
  ].filter(Boolean);

  // Format timings
  const timings = [
    { day: "Monday–Friday", hours: office.weekday_hours || contactInfo?.weekday_hours || "9:00 AM – 6:00 PM" },
    { day: "Saturday", hours: office.saturday_hours || contactInfo?.saturday_hours || "9:00 AM – 2:00 PM" },
    { day: "Sunday", hours: contactInfo?.sunday_hours || "Closed" },
  ];

  return (
    <SeoWrapper pageUrl={`/contact/${office.slug}`} schemas={[breadcrumb]}>
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
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/50 mb-3 sm:mb-4 flex-wrap"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <span>/</span>
              <span className="text-white">{office.name}</span>
            </nav>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-1 sm:gap-2 text-white/70 hover:text-white mb-3 sm:mb-4 text-xs sm:text-sm transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Back to all offices
            </Link>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4">
              {office.name} – {office.city}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-[#d9e6f2] max-w-2xl mb-4 sm:mb-5 lg:mb-6">
              {office.is_head_office 
                ? `Talk directly to Milind P. Rajhans (FI-ACC) at our ${office.city} head office for MIDC approvals, project finance, and all industrial consulting needs.`
                : `Visit our ${office.city} office for expert industrial consulting, MIDC approvals, and financial services.`}
            </p>
            
            {/* Hero CTA Buttons - Always side by side */}
            <div className="flex flex-row flex-nowrap gap-2 sm:gap-3 max-w-[320px] xs:max-w-md">
              {contactMethods
                .filter(m => m.icon === 'Phone')
                .map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 lg:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg sm:rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-[11px] xs:text-xs sm:text-sm whitespace-nowrap min-h-[44px]"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate max-w-[70px] xs:max-w-[90px] sm:max-w-none">{contact.value}</span>
                  </a>
                ))}
            </div>
          </div>
        </section>

        {/* ── FORM SECTION (ABOVE CONTACT CARDS) ───────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
                Get in Touch with Our {office.city} Team
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 2 hours during business hours. 
                Please mention your specific requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Contact Form */}
              <div className="bg-[#fff7ed] p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm">
                  Fill in your details and we'll connect you with our {office.city} office team.
                </p>
                <ContactFormClient defaultLocation={office.city} />
              </div>

              {/* Right Column - Quick Info */}
              <div className="space-y-4 sm:space-y-6">
                {/* Office Hours Card */}
                <div className="bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Office Hours</h3>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    {timings.map((t, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-gray-700 border-b border-gray-100 pb-1.5 sm:pb-2 last:border-0"
                      >
                        <span>{t.day}</span>
                        <span className="font-medium">{t.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Card */}
                <div className="bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Quick Contact</h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {contactMethods
                      .filter(m => m.icon === 'Phone' || m.icon === 'MessageCircle')
                      .slice(0, 2)
                      .map((contact, idx) => {
                        const Icon = IconMap[contact.icon] || Building2;
                        return (
                          <a
                            key={idx}
                            href={contact.href}
                            className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-[#fff7ed] transition-colors group"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f97316]" />
                              <div>
                                <p className="text-[10px] sm:text-xs text-gray-500">{contact.title}</p>
                                <p className="font-semibold text-gray-900 group-hover:text-[#f97316] text-xs sm:text-sm truncate max-w-[150px] xs:max-w-[180px] sm:max-w-[200px]">
                                  {contact.value}
                                </p>
                              </div>
                            </div>
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#f97316] flex-shrink-0" />
                          </a>
                        );
                      })}
                  </div>
                </div>

                {/* Address Preview */}
                <div className="bg-white border border-gray-200 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Address</h3>
                  </div>
                  <address className="not-italic text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {addressLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < addressLines.length - 1 && <br />}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT CARDS ────────────────────────────────── */}
        <section className="py-10 sm:py-12 bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              All Contact Methods for {office.name}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {contactMethods.map((m, i) => {
                const Icon = IconMap[m.icon] || Building2;
                return (
                  <a
                    key={i}
                    href={m.href}
                    target={m.href.startsWith("http") && !m.href.startsWith("#") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") && !m.href.startsWith("#") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center text-center p-4 sm:p-5 lg:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`${m.color} text-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <p className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1">{m.title}</p>
                    <p className="text-[#ea580c] text-[10px] sm:text-xs lg:text-sm font-medium mb-0.5 sm:mb-1 truncate max-w-full">
                      {m.value}
                    </p>
                    <p className="text-[8px] sm:text-[10px] lg:text-xs text-gray-500">{m.sub}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── MAP PREVIEW ──────────────────────────────────── */}
        {office.google_maps_link && (
          <section className="py-10 sm:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Find Us at {office.name}
              </h2>
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <div className="h-[250px] sm:h-[300px] lg:h-[400px] w-full bg-gray-200 relative">
                  <iframe
                    title={`${office.city} Office Location`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      addressLines.join(' ')
                    )}&output=embed`}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#f97316]" />
                    {addressLines.join(', ')}
                  </p>
                  <a
                    href={office.google_maps_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 sm:gap-2 text-[#f97316] text-xs sm:text-sm font-medium hover:underline"
                  >
                    Get Directions <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── DETAILED INFORMATION SECTION ─────────────────── */}
        <section className="py-10 sm:py-12 bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {/* Address Card */}
              <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Complete Address</h3>
                </div>
                <address className="not-italic text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </div>

              {/* Contact Numbers Card */}
              <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Contact Numbers</h3>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {contactMethods
                    .filter(m => m.icon === 'Phone')
                    .map((contact, idx) => (
                      <a
                        key={idx}
                        href={contact.href}
                        className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-[#fff7ed] transition-colors group"
                      >
                        <div>
                          <p className="text-[10px] sm:text-xs text-gray-500">{contact.title}</p>
                          <p className="font-semibold text-gray-900 group-hover:text-[#f97316] text-xs sm:text-sm truncate max-w-[180px]">
                            {contact.value}
                          </p>
                        </div>
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#f97316] flex-shrink-0" />
                      </a>
                    ))}
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Email</h3>
                </div>
                {contactMethods
                  .filter(m => m.icon === 'Mail')
                  .map((email, idx) => (
                    <a
                      key={idx}
                      href={email.href}
                      className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-[#fff7ed] transition-colors group"
                    >
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-500">{email.title}</p>
                        <p className="font-semibold text-gray-900 group-hover:text-[#f97316] text-xs sm:text-sm break-all truncate max-w-[200px]">
                          {email.value}
                        </p>
                      </div>
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-[#f97316] flex-shrink-0" />
                    </a>
                  ))}
              </div>
            </div>

            {/* Expert Card (only show for head office) */}
            {office.is_head_office && (
              <div className="mt-6 sm:mt-8 bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
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
                  <span className="text-white/60 text-xs sm:text-sm ml-2">
                    3500+ clients
                  </span>
                </div>
                <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-5">
                  Direct consultation with the founder. No juniors, no
                  callbacks — speak directly with the expert who has handled
                  4000+ MIDC projects across Maharashtra.
                </p>
                
                {/* Expert card buttons - Always side by side */}
                <div className="flex flex-row flex-nowrap gap-2 sm:gap-3">
                  {contactMethods
                    .filter(m => m.icon === 'Phone')
                    .slice(0, 2)
                    .map((contact, idx) => (
                      <a
                        key={idx}
                        href={contact.href}
                        className="flex-1 inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 bg-[#f97316] hover:bg-[#ea580c] rounded-lg sm:rounded-xl font-bold transition-colors text-[11px] xs:text-xs sm:text-sm whitespace-nowrap min-h-[44px]"
                      >
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="truncate max-w-[60px] xs:max-w-[80px] sm:max-w-none">{contact.title}</span>
                      </a>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── OTHER OFFICES ────────────────────────────────── */}
        {otherOffices.length > 0 && (
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Our Other Offices
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {otherOffices.map((office) => (
                  <Link
                    key={office.id}
                    href={`/contact/${office.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:shadow-lg transition-all hover:border-[#f97316] block"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#f97316] text-white flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                          <h3 className="font-bold text-gray-900 group-hover:text-[#f97316] transition-colors text-sm sm:text-base truncate">
                            {office.name}
                          </h3>
                          {office.is_head_office && (
                            <span className="px-1.5 sm:px-2 py-0.5 bg-[#f97316] text-white text-[10px] sm:text-xs font-semibold rounded-full whitespace-nowrap">
                              Head Office
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2 truncate">
                          {office.address_line_1}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[#f97316] text-xs sm:text-sm font-medium">
                          View Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── SERVICES QUICK LINKS ─────────────────────────── */}
        <section className="py-10 sm:py-12 bg-[#fff7ed]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Can We Help You With?
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                "MIDC NOC",
                "MSME Udyam",
                "Term Loans",
                "DPR/CMA Reports",
                "Project Finance",
                "SARFAESI Deals",
                "MIDC Transfer",
                "Subsidy Compliance",
              ].map((s, i) => (
                <Link
                  key={i}
                  href={`/contact/${office.slug}`}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#ffedd5] text-[#ea580c] rounded-full text-[10px] sm:text-xs font-medium hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}