// app/layout.jsx
import Navbar from "@/components/Navbar/Navbar.js";
import Footer from "@/components/Footer/Footer.js";
import { GoogleAnalytics } from "@next/third-parties/google";
import { siteSEO } from "@/utils/seoConfig";
import { dmSerif, urbanist, poppins } from "./fonts"; // Import optimized fonts

import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  metadataBase: new URL(siteSEO.baseUrl),
  title: {
    template: `%s | ${siteSEO.siteName}`,
    default: siteSEO.defaultTitle,
  },
  description: siteSEO.defaultDescription,
  keywords: [
    "MIDC consultant Nashik",
    "MSME Udyam registration Nashik",
    "industrial consultant Nashik",
    "project finance Nashik",
    "DPR report Nashik",
    "term loan consultant Nashik",
    "FI-ACC Nashik",
    "MIDC NOC Nashik",
    "industrial project planning",
    "bank auction deals",
    "DRT NCLT Nashik",
    "industrial expansion advisory",
  ],
  authors: [{ name: siteSEO.founder, url: siteSEO.baseUrl }],
  creator: siteSEO.founder,
  publisher: siteSEO.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    url: siteSEO.baseUrl,
    siteName: siteSEO.siteName,
    images: [
      {
        url: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        width: 1200,
        height: 630,
        alt: siteSEO.siteName,
      },
    ],
    locale: siteSEO.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSEO.defaultTitle,
    description: siteSEO.defaultDescription,
    images: [`${siteSEO.baseUrl}${siteSEO.defaultImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      {
        url: "/apple-touch-icon-precomposed.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#f97316",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#f97316",
    "msapplication-TileImage": "/mstile-150x150.png",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#001a33",
    "apple-mobile-web-app-title": siteSEO.siteName,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "application-name": siteSEO.siteName,
    "mobile-web-app-capable": "yes",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "business",
  classification: "Industrial & Financial Consulting",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteSEO.siteName,
    image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
    "@id": siteSEO.baseUrl,
    url: siteSEO.baseUrl,
    telephone: siteSEO.phone,
    email: siteSEO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSEO.address.split(",")[0],
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422005",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.9975,
      longitude: 73.7898,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    foundingDate: siteSEO.foundingYear,
    founder: {
      "@type": "Person",
      name: siteSEO.founder,
    },
    priceRange: "₹₹",
    areaServed: ["Nashik", "Pune", "Chakan", "Ambad", "Satpur", "Sinnar"],
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(siteSEO.address)}`,
    sameAs: [
      "https://www.linkedin.com/company/bhumi-industrial-consultant",
      "https://twitter.com/bhumiindustrial",
      "https://www.facebook.com/bhumiindustrial",
    ],
  };

  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${urbanist.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        {/* FIXED: Remove external font links - now using next/font */}

        {/* FIXED: Add preconnect for critical origins */}
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* FIXED: Preload LCP image */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&q=80"
          fetchPriority="high"
        />

        {/* Additional meta tags */}
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Nashik" />
        <meta name="geo.position" content="19.9975;73.7898" />
        <meta name="ICBM" content="19.9975, 73.7898" />

        {/* Windows Phone meta tags */}
        <meta name="msapplication-navbutton-color" content="#f97316" />
        <meta
          name="msapplication-square70x70logo"
          content="/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/mstile-310x310.png"
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-50 font-sans antialiased min-h-screen">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FloatingButtons />
        <Footer />
        <GoogleAnalytics gaId="G-48WFX34589" />
      </body>
    </html>
  );
}
