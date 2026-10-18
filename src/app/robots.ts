import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Disallowing /ai only keeps it out of search engines; the protection is the Basic Auth in proxy.ts
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/ai" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
