// app/page.jsx — HOME PAGE
// ✅ Server Component (NO "use client") — Next.js App Router default
// ✅ export const metadata = buildMetadata("home") — correct SEO pattern
// ✅ Client child components (HeroSection etc.) are allowed inside Server Components

import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/SeoWrapper/SeoWrapper";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import WhyUsSection from "@/components/home/WhyUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

// ── SEO metadata (Next.js puts this in <head>) ───────────────────────────────
export const metadata = buildMetadata("home");

// ── Full static generation ───────────────────────────────────────────────────
export const dynamic = "force-static";

export default function HomePage() {
  const breadcrumb = getBreadcrumbSchema([{ name: "Home", href: "/" }]);

  return (
    <SeoWrapper pageUrl="/" schemas={[breadcrumb]}>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </SeoWrapper>
  );
}
