// src/utils/base-url.ts
export function getBaseUrl() {
  // Prefer a manually configured base URL (e.g., external API or different domain)
  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;
  // Fallback to the current Vercel deployment URL when running on Vercel
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  // Local development
  return 'http://localhost:3000';
}
