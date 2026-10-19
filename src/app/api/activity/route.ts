import { NextResponse } from "next/server";
import { parseContributions } from "@/lib/activity";

export async function GET() {
  try {
    // Public GitHub contribution data, aggregated by the same provider used by react-github-calendar.
    const response = await fetch("https://github-contributions-api.jogruber.de/v4/HiberNuts?y=last", {
      next: { revalidate: 21600 }, signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("GitHub activity unavailable");
    const contributions = parseContributions(await response.json());
    return NextResponse.json({ contributions, total: contributions.reduce((sum, day) => sum + day.count, 0), fetchedAt: new Date().toISOString() }, { headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=21600" } });
  } catch {
    return NextResponse.json({ error: "Activity is temporarily unavailable. View the profile on GitHub." }, { status: 503 });
  }
}
