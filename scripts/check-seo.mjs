import assert from "node:assert/strict";

const base = process.argv[2] || "http://localhost:3101";
const canonicalBase = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.raghav.works").replace(/\/$/, "");
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = ["/", "/work/voicegrid", "/work/fundlio", "/work/decentraclasses"];
for (const path of paths) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  assert.equal(canonical?.replace(/\/$/, ""), `${canonicalBase}${path}`.replace(/\/$/, ""), path);
  for (const name of ["description", "og:title", "og:description", "og:image", "twitter:image"]) {
    assert.ok(new RegExp(`<meta (?:name|property)="${name}" content="[^"]+"`).test(html), `${path}: ${name}`);
  }
  assert.ok(sitemap.includes(canonical), `${path}: sitemap`);
  if (path === "/") {
    const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema["@type"], "ProfilePage");
    assert.equal(schema.mainEntity.name, "Raghav Jindal");
  } else {
    assert.ok(html.match(/<meta property="og:title" content="([^"]+)"/)?.[1].toLowerCase().includes(path.split("/").pop()), path);
  }
  console.log(`${path}: SEO checks passed`);
}
