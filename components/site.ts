/* Canonical site URL.

   Set NEXT_PUBLIC_SITE_URL to the real domain once it is registered. Until
   then this falls back to the deployment URL Vercel injects, so the sitemap,
   robots file and social metadata are correct from the first deploy. */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
