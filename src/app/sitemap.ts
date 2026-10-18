import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Public pages only: /ai is internal and never listed
const PAGES = ["", "/legal", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    (["es", "en"] as const).map((locale) => ({
      url: `${SITE.url}/${locale}${page}`,
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.3,
      alternates: { languages: { es: `${SITE.url}/es${page}`, en: `${SITE.url}/en${page}` } },
    }))
  );
}
