import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

export const dynamic = "force-static";

const SLUGS = ["", "about", "programs", "location", "faq", "contact", "privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const slug of SLUGS) {
    for (const lang of ["ko", "en"] as const) {
      const base = lang === "ko" ? "" : "/en";
      const path = slug ? `${base}/${slug}/` : `${base}/` || "/";
      entries.push({
        url: `${SITE.url}${path}`,
        changeFrequency: slug === "" ? "weekly" : "monthly",
        priority: slug === "" ? 1 : slug === "privacy" ? 0.3 : 0.8,
        alternates: {
          languages: {
            ko: `${SITE.url}${slug ? `/${slug}/` : "/"}`,
            en: `${SITE.url}/en${slug ? `/${slug}/` : "/"}`,
          },
        },
      });
    }
  }

  return entries;
}
