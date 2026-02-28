// app/careers/page.jsx — SIMPLE CAREERS PAGE
import Link from "next/link";
import { Briefcase, MapPin, Clock, Mail } from "lucide-react";
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import CareerEnquiryForm from "@/components/careers/CareerEnquiryForm";

export const metadata = buildMetadata("careers");
export const dynamic = "force-static";

export default function CareersPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
  ]);

  return (
    <SeoWrapper pageUrl="/careers" schemas={[breadcrumb]}>
      <main>
        {/* Simple Header */}
        <section className="bg-gradient-to-br from-[#001a33] via-[#002952] to-[#003d66] text-white py-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Careers</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              Join Our Team
            </h1>
            <p className="text-[#d9e6f2] max-w-2xl">
              Send us your enquiry and our HR team will get back to you.
            </p>
          </div>
        </section>

        {/* Simple Enquiry Form */}
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#fff7ed] p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Career Enquiry
              </h2>
              <p className="text-gray-600 mb-6 text-sm">
                Fill in your details and we'll contact you regarding suitable opportunities.
              </p>
              
              <CareerEnquiryForm />
            </div>
          </div>
        </section>
      </main>
    </SeoWrapper>
  );
}