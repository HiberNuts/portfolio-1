export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.raghav.works";
  return new Response(`User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${base}/sitemap.xml

# AI-readable portfolio: ${base}/llms.txt
# Complete Markdown portfolio: ${base}/portfolio.md
`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
