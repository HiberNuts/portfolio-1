export type Contribution = { date: string; count: number; level: number };
export type Activity = { total: number; contributions: Contribution[]; fetchedAt: string };

export function parseContributions(value: unknown): Contribution[] {
  if (typeof value !== "object" || value === null || !("contributions" in value) || !Array.isArray(value.contributions)) throw new Error("Invalid contribution response");
  const contributions: Contribution[] = [];
  for (const day of value.contributions) {
    if (typeof day !== "object" || day === null || typeof day.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isFinite(Date.parse(day.date)) || !Number.isInteger(day.count) || day.count < 0 || !Number.isInteger(day.level) || day.level < 0 || day.level > 4) throw new Error("Invalid contribution day");
    if (new Date(day.date).toISOString().slice(0, 10) !== day.date) throw new Error("Invalid calendar date");
    contributions.push({ date: day.date, count: day.count, level: day.level });
  }
  if (!contributions.length || contributions.length > 370 || new Set(contributions.map(d => d.date)).size !== contributions.length) throw new Error("Invalid contribution range");
  contributions.sort((a, b) => a.date.localeCompare(b.date));
  for (let i = 1; i < contributions.length; i++) {
    if (Date.parse(contributions[i].date) - Date.parse(contributions[i - 1].date) !== 86400000) throw new Error("Missing contribution day");
  }
  return contributions;
}
