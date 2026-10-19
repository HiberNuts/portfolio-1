import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.raghav.works";
  return [{ url: base, changeFrequency: "monthly", priority: 1 }, ...projects.map(project => ({ url: `${base}/work/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
