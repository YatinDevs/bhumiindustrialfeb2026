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
import { locations } from "@/lib/data";

export const metadata = buildMetadata("contact");
export const dynamic = "force-static";

// Get all locations for display
const allLocations = Object.values(locations);

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
  ]);

  // Main contact methods for hero section with updated numbers
  const mainContactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 90960 99960",
      sub: "Primary Contact",
      href: "tel:+919096099960",
      color: "bg-[#f97316]",
    },
    {
      icon: Phone,
      title: "Alternate",
      value: "+91 98223 72070",
      sub: "Secondary Contact",
      href: "tel:+919822372070",
      color: "bg-[#ea580c]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat on WhatsApp",
      sub: "Quick responses",
      href: "https://wa.me/919096099960?text=Hi%20I%20need%20industrial%20consulting%20help",
      color: "bg-[#25D366]",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@bhumiindustrial.com",
      sub: "Reply within 24 hours",
      href: "mailto:info@bhumiindustrial.com",
      color: "bg-[#003366]",
    },
  ];

  return (
    <SeoWrapper pageUrl="/contact" schemas={[breadcrumb]}>
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
              <span className="text-white">Contact</span>
            </nav>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact Bhumi Industrial Consultant
            </h1>
            <p className="text-xl text-[#d9e6f2] max-w-2xl">
              Choose an office location below or send us a message. 
              Talk directly to our experts for MIDC approvals, project finance, 
              MSME registration, and all industrial consulting needs.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="tel:+919096099960"
                className="inline-flex items-center gap-2 bg-[#f97316] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#ea580c] transition-colors"
              >
                <Phone className="w-4 h-4" /> Call +91 90960 99960
              </a>
              <a
                href="tel:+919822372070"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/20"
              >
                <Phone className="w-4 h-4" /> +91 98223 72070
              </a>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTACT CARDS ───────────────────────────── */}
        <section className="py-12 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {mainContactMethods.map((m, i) => (
                <a
                  key={i}
                  href={m.href}
                  target={m.href.startsWith("http") && !m.href.startsWith("/") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") && !m.href.startsWith("/") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div
                    className={`${m.color} text-white w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <m.icon className="w-7 h-7" />
                  </div>
                  <p className="font-bold text-gray-900 mb-1">{m.title}</p>
                  <p className="text-sm text-[#ea580c] font-medium mb-1">
                    {m.value}
                  </p>
                  <p className="text-xs text-gray-500">{m.sub}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICE LOCATIONS GRID ────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at any of our offices across Maharashtra. Each location is fully equipped to handle all your industrial consulting needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allLocations.map((office) => (
                <Link
                  key={office.id}
                  href={`/contact/${office.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all hover:border-[#f97316]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#f97316] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-[#f97316] transition-colors">
                          {office.name}
                        </h3>
                        {office.isHeadOffice && (
                          <span className="px-2 py-0.5 bg-[#f97316] text-white text-xs font-semibold rounded-full">
                            Head Office
                          </span>
                        )}
                      </div>
                      <address className="not-italic text-sm text-gray-600 leading-relaxed mb-4">
                        {office.officeDetails.address[0]}
                        <br />
                        {office.officeDetails.address[1]}
                      </address>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Phone className="w-3 h-3" /> Contact
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Office Hours
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + INFO ──────────────────────────────────── */}
        <section className="py-16 bg-[#fff7ed]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form (3/5) */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 text-sm">
                  Fill in your details and we'll connect you with the right office.
                  We typically respond within 2 hours during business hours.
                </p>
                <ContactFormClient />
              </div>

              {/* Info sidebar (2/5) */}
              <div className="lg:col-span-2 space-y-6">
                {/* Expert card */}
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
                        Founder, 27+ Years Experience
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
                    Direct consultation with the founder at our Nashik head office.
                    For other locations, you'll be connected with our senior consultants.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="tel:+919096099960"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#f97316] hover:bg-[#ea580c] rounded-xl font-bold transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" /> Call: +91 90960 99960
                    </a>
                    <a
                      href="tel:+919822372070"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-[#ea580c] hover:bg-[#dc2626] rounded-xl font-bold transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" /> Alt: +91 98223 72070
                    </a>
                  </div>
                </div>

                {/* Office hours */}
                <div className="bg-white p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900">General Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Monday–Friday", "9:00 AM – 6:00 PM"],
                      ["Saturday", "9:00 AM – 2:00 PM"],
                      ["Sunday", "Closed"],
                    ].map(([d, h], i) => (
                      <div
                        key={i}
                        className="flex justify-between text-gray-700 border-b border-gray-100 pb-2 last:border-0"
                      >
                        <span>{d}</span>
                        <span className="font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    *Hours may vary by location. Check specific office pages for details.
                  </p>
                </div>

                {/* Email contact */}
                <div className="bg-white p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-[#f97316]" />
                    <h3 className="font-bold text-gray-900">Email Us</h3>
                  </div>
                  <a
                    href="mailto:info@bhumiindustrial.com"
                    className="text-[#f97316] hover:underline font-medium text-sm break-all"
                  >
                    info@bhumiindustrial.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}