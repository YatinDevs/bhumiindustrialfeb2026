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
import { locations, getAllLocationSlugs, getLocationBySlug } from "@/lib/data";

// Generate metadata for each location
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.slug);
  
  if (!location) {
    return buildMetadata("contact");
  }
  
  return {
    title: location.seo.title,
    description: location.seo.description,
    keywords: `MIDC consultant ${location.city}, industrial consultant ${location.city}, MSME Udyam ${location.city}, project finance ${location.city}, FI-ACC ${location.city}`,
    alternates: {
      canonical: `${siteSEO.baseUrl}/contact/${resolvedParams.slug}`,
    },
    openGraph: {
      title: location.seo.title,
      description: location.seo.description,
      url: `${siteSEO.baseUrl}/contact/${resolvedParams.slug}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}/og-contact-${location.city.toLowerCase()}.jpg`,
          width: 1200,
          height: 630,
          alt: location.seo.title,
        },
      ],
    },
  };
}

// Generate static paths with ISR
export async function generateStaticParams() {
  return getAllLocationSlugs();
}

// Revalidate every hour (3600 seconds)
export const revalidate = 3600;

// Icon mapping for dynamic rendering
const IconMap = {
  Phone: Phone,
  Mail: Mail,
  MessageCircle: MessageCircle,
  Building2: Building2,
};

export default async function ContactLocationPage({ params }) {
  const resolvedParams = await params;
  const location = getLocationBySlug(resolvedParams.slug);
  
  if (!location) {
    notFound();
  }

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: location.name, href: `/contact/${location.slug}` },
  ]);

  // Get all locations for sidebar (excluding current)
  const otherLocations = Object.values(locations).filter(
    loc => loc.slug !== location.slug
  );

  return (
    <SeoWrapper pageUrl={`/contact/${location.slug}`} schemas={[breadcrumb]}>
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-white/50 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <span>/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 text-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to all offices
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {location.name} – {location.city}
            </h1>
            <p className="text-xl text-[#d9e6f2] max-w-2xl">
              {location.isHeadOffice 
                ? `Talk directly to Milind Rajhans (FI-ACC) at our ${location.city} head office for MIDC approvals, project finance, and all industrial consulting needs.`
                : `Visit our ${location.city} office for expert industrial consulting, MIDC approvals, and financial services.`}
            </p>
            
            {/* Quick contact buttons in hero */}
            <div className="flex flex-wrap gap-3 mt-6">
              {location.contactMethods
                .filter(m => m.icon === 'Phone')
                .map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.href}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <Phone className="w-4 h-4" />
                    {contact.value}
                  </a>
                ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CARDS ────────────────────────────────── */}
        <section className="py-12 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {location.contactMethods.map((m, i) => {
                const Icon = IconMap[m.icon] || Building2;
                return (
                  <a
                    key={i}
                    href={m.href}
                    target={m.href.startsWith("http") && !m.href.startsWith("#") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") && !m.href.startsWith("#") ? "noopener noreferrer" : undefined}
                    className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div
                      className={`${m.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="font-bold text-gray-900 mb-1">{m.title}</p>
                    <p className="text-sm text-[#ea580c] font-medium mb-1">
                      {m.value}
                    </p>
                    <p className="text-xs text-gray-500">{m.sub}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FORM + LOCATION DETAILS ───────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form (3/5) */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 text-sm">
                  Fill in your details and we'll call you back within 2 hours
                  during business hours. Please mention "{location.city} Office" in your message.
                </p>
                <ContactFormClient defaultLocation={location.city} />
              </div>

              {/* Location Details Sidebar (2/5) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Office Address Card */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900">Office Address</h3>
                  </div>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed mb-4">
                    {location.officeDetails.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < location.officeDetails.address.length - 1 && <br />}
                      </span>
                    ))}
                  </address>
                  <a
                    href={location.officeDetails.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#f97316] text-sm font-medium hover:underline"
                  >
                    Get Directions <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Office Hours */}
                <div className="bg-[#fff7ed] p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {location.officeDetails.timings.map((t, i) => (
                      <div
                        key={i}
                        className="flex justify-between text-gray-700 border-b border-[#ffedd5] pb-2 last:border-0"
                      >
                        <span>{t.day}</span>
                        <span className="font-medium">{t.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Numbers Card */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-5 h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900">Contact Numbers</h3>
                  </div>
                  <div className="space-y-3">
                    {location.contactMethods
                      .filter(m => m.icon === 'Phone')
                      .map((contact, idx) => (
                        <a
                          key={idx}
                          href={contact.href}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-[#fff7ed] transition-colors group"
                        >
                          <div>
                            <p className="text-sm text-gray-500">{contact.title}</p>
                            <p className="font-semibold text-gray-900 group-hover:text-[#f97316]">
                              {contact.value}
                            </p>
                          </div>
                          <Phone className="w-4 h-4 text-gray-400 group-hover:text-[#f97316]" />
                        </a>
                      ))}
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900">Email</h3>
                  </div>
                  {location.contactMethods
                    .filter(m => m.icon === 'Mail')
                    .map((email, idx) => (
                      <a
                        key={idx}
                        href={email.href}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-[#fff7ed] transition-colors group"
                      >
                        <div>
                          <p className="text-sm text-gray-500">{email.title}</p>
                          <p className="font-semibold text-gray-900 group-hover:text-[#f97316] break-all">
                            {email.value}
                          </p>
                        </div>
                        <Mail className="w-4 h-4 text-gray-400 group-hover:text-[#f97316]" />
                      </a>
                    ))}
                </div>

                {/* Expert Card (only show for head office) */}
                {location.isHeadOffice && (
                  <div className="bg-gradient-to-br from-[#001a33] to-[#003366] text-white p-7 rounded-2xl">
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center text-2xl font-bold flex-shrink-0">
                        M
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Milind Rajhans</h3>
                        <p className="text-[#f97316] font-semibold text-sm">
                          FI-ACC
                        </p>
                        <p className="text-white/60 text-xs">
                          Founder, 26+ Years Experience
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 text-[#f97316] fill-[#f97316]"
                        />
                      ))}
                      <span className="text-white/60 text-sm ml-2">
                        500+ clients
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mb-5">
                      Direct consultation with the founder. No juniors, no
                      callbacks — speak directly with the expert who has handled
                      1000+ MIDC projects across Maharashtra.
                    </p>
                    <div className="space-y-3">
                      {location.contactMethods
                        .filter(m => m.icon === 'Phone')
                        .map((contact, idx) => (
                          <a
                            key={idx}
                            href={contact.href}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-[#f97316] hover:bg-[#ea580c] rounded-xl font-bold transition-colors text-sm"
                          >
                            <Phone className="w-4 h-4" /> {contact.value}
                          </a>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP PREVIEW ──────────────────────────────────── */}
        <section className="py-12 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-[400px] w-full bg-gray-200 relative">
                <iframe
                  title={`${location.city} Office Location`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    location.officeDetails.address.join(' ')
                  )}&output=embed`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── OTHER OFFICES ────────────────────────────────── */}
        {otherLocations.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Other Offices
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherLocations.map((office) => (
                  <Link
                    key={office.id}
                    href={`/contact/${office.slug}`}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:border-[#f97316]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#f97316] text-white flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900 group-hover:text-[#f97316] transition-colors">
                            {office.name}
                          </h3>
                          {office.isHeadOffice && (
                            <span className="px-2 py-0.5 bg-[#f97316] text-white text-xs font-semibold rounded-full">
                              Head Office
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          {office.officeDetails.address[0]}
                        </p>
                        <span className="inline-flex items-center gap-1 text-[#f97316] text-sm font-medium">
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
        <section className="py-12 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              What Can We Help You With?
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
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
                  href={`/contact/${location.slug}`}
                  className="px-4 py-2 bg-white border border-[#ffedd5] text-[#ea580c] rounded-full text-sm font-medium hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all"
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