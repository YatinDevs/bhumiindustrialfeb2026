import { siteSEO } from "../utils/seoConfig.js";

const staticPages = ["/", "/industrial", "/financial", "/about", "/contact"];

const industrialPages = [
  "/industrial/industrial-project-planning",
  "/industrial/bank-auction-deals-sarfaesi",
  "/industrial/drt-nclt-deals",
  "/industrial/dic-wmdc-noc",
  "/industrial/midc-project-report",
  "/industrial/midc-transfer-process",
  "/industrial/midc-tri-party-consent",
  "/industrial/midc-water-mseb-connection",
  "/industrial/all-midc-work",
  "/industrial/industrial-expansion-advisory",
  "/industrial/project-finance-setup",
];

const financialPages = [
  "/financial/industrial-deals",
  "/financial/term-loans",
  "/financial/cma-cra-dpr-report",
  "/financial/cash-credit-working-capital",
  "/financial/cost-reduction-techniques",
  "/financial/start-up-project",
  "/financial/balance-sheet-analysis",
  "/financial/subsidy-compliance",
  "/financial/msme-udyam-registration",
  "/financial/due-diligence-merger-acquisition",
  "/financial/financial-projection-ratio-analysis",
  "/financial/licenses",
  "/financial/business-planning-support",
  "/financial/documentation-compliance",
];

export default async function sitemap() {
  const baseUrl = siteSEO.baseUrl;
  const currentDate = new Date().toISOString();

  const allPages = [
    ...staticPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: url === "/" ? "daily" : "weekly",
      priority: url === "/" ? 1.0 : 0.8,
    })),

    ...industrialPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    })),

    ...financialPages.map((url) => ({
      url: `${baseUrl}${url}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    })),
  ];

  return allPages;
}
