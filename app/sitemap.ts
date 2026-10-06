import type { MetadataRoute } from "next";
import { siteUrl } from "@/components/site";

const ROUTES = [
  "", "/about", "/operations", "/operations/cattle-fattening", "/operations/feed-and-fodder",
  "/sustainability", "/sustainability/community-impact", "/projects", "/partners",
  "/documents", "/gallery", "/contact", "/services", "/process", "/why-us",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${siteUrl()}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
