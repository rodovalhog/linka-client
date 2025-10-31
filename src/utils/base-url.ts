// src/utils/base-url.ts
export function getBaseUrl() {
  // Client-side: use the current origin
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin;
  }

  // Server-side: prefer explicitly configured URLs first
  const fromEnv =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.URL || // Netlify
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    (process.env.RENDER_EXTERNAL_URL ? `https://${process.env.RENDER_EXTERNAL_URL}` : undefined) ||
    (process.env.RAILWAY_STATIC_URL ? `https://${process.env.RAILWAY_STATIC_URL}` : undefined);

  if (fromEnv) return fromEnv;

  // Derive from incoming request headers (works in Server Components/Route Handlers)
  try {
    // Lazy import to avoid issues on the client
    const { headers } = require('next/headers');
    const h = headers();
    const protocol = h.get('x-forwarded-proto') ?? 'https';
    const host = h.get('x-forwarded-host') ?? h.get('host');
    if (host) return `${protocol}://${host}`;
  } catch {
    // no-op: not in a request context
  }

  // Fallback for local development
  return 'http://localhost:3000';
}
