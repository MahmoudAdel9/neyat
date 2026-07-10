import { CATEGORY_IDS } from "@/content/intentions";
import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    entries.push({
      url: `${siteUrl}/${locale}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((item) => [item, `${siteUrl}/${item}`]),
        ),
      },
    });

    for (const category of CATEGORY_IDS) {
      const path = `/intentions/${category}`;
      entries.push({
        url: `${siteUrl}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((item) => [item, `${siteUrl}/${item}${path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
