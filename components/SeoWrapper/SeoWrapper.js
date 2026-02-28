// components/SeoWrapper/SeoWrapper.jsx
// ONLY injects JSON-LD structured data.
// All <title>/<meta> come from generateMetadata() in each page.js — Next.js 15 App Router best practice.

import { siteSEO } from "@/utils/seoConfig";

export default function SeoWrapper({ schemas = [], pageUrl = "/", children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteSEO.baseUrl}/#localbusiness`,
        name: siteSEO.siteName,
        alternateName: [
          "FI-ACC",
          "Bhumi Industrial Consultant",
          "Milind Rajhans Consultant",
        ],
        url: `${siteSEO.baseUrl}${pageUrl}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        logo: `${siteSEO.baseUrl}/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office no 301/302, 3rd floor, Tulips Apartment",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422005",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.0117,
          longitude: 73.7862,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "$$",
        areaServed: [
          "Nashik",
          "Ambad MIDC",
          "Satpur MIDC",
          "Sinnar",
          "Pune",
          "Chakan",
        ],
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: siteSEO.siteName,
        legalName: "Bhumi Industrial Consultant",
        foundingDate: "1999",
        founder: {
          "@type": "Person",
          name: "Milind Rajhans",
          honorificSuffix: "FI-ACC",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteSEO.phone,
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      },
      ...schemas,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
