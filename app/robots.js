import { siteSEO } from "../utils/seoConfig.js";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/private/", "/temp/"], // Block non-public paths
    },
    sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
    host: siteSEO.baseUrl,
  };
}
