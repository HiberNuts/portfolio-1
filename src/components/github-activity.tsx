"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Github, RefreshCw } from "lucide-react";
import { parseContributions, type Activity, type Contribution } from "@/lib/activity";
import { github } from "@/lib/content";

const formatDate = (value: string) => new Date(`${value}T00:00:00Z`).toLocaleDateString("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export function GitHubActivity() {
  const calendar = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<Activity | null>(null);
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [selected, setSelected] = useState<Contribution | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    setFailed(false);
    fetch("/api/activity", { signal: controller.signal }).then(async response => {
      if (!response.ok) throw new Error("Unavailable");
      const value = await response.json();
      const contributions = parseContributions(value);
      setSelected(contributions.at(-1)!);
      setData({ ...value, contributions, total: contributions.reduce((sum, day) => sum + day.count, 0) });
    }).catch(() => { if (!controller.signal.aborted) setFailed(true); else if (controller.signal.reason?.name === "AbortError") setFailed(true); }).finally(() => clearTimeout(timeout));
    return () => { clearTimeout(timeout); controller.abort("unmounted"); };
  }, [attempt]);
  useEffect(() => {
    if (calendar.current) calendar.current.scrollLeft = calendar.current.scrollWidth;
  }, [data]);
  const offset = data ? new Date(`${data.contributions[0].date}T00:00:00Z`).getUTCDay() : 0;
  const weeks = data ? Math.ceil((data.contributions.length + offset) / 7) : 0;
  const monthLabels = data ? data.contributions.flatMap((day, i) => {
    if (i && day.date.slice(0, 7) === data.contributions[i - 1].date.slice(0, 7)) return [];
    const date = new Date(`${day.date}T00:00:00Z`);
    return [{ label: date.toLocaleDateString("en", { month: "short", timeZone: "UTC" }), column: Math.floor((i + offset) / 7) + 1 }];
  }).filter((month, i, months) => i === months.length - 1 || months[i + 1].column - month.column >= 3) : [];
  const currentYear = new Date().getFullYear();
  const yearDays = data?.contributions.filter(day => day.date.startsWith(`${currentYear}-`)) || [];
  const yearTotal = yearDays.reduce((sum, day) => sum + day.count, 0);
  const yearMonths = new Set(yearDays.map(day => day.date.slice(0, 7))).size;
  return <div className="github-card"><div className="github-card-header"><div className="github-identity"><span className="github-avatar"><Github size={23}/></span><div><strong>HiberNuts</strong><span>Building, one commit at a time.</span></div></div><a className="text-link" href={github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16}/></a></div>
    {failed ? <div className="activity-error"><p>GitHub activity is temporarily unavailable.</p><a href={github} target="_blank" rel="noreferrer">See activity on GitHub ↗</a><button className="text-link" onClick={() => setAttempt(a => a + 1)}><RefreshCw size={14}/> Try again</button></div> : data ? <>
    <div ref={calendar} className="activity-scroll" tabIndex={0} role="region" aria-label="GitHub contributions for the last 12 months. Scroll horizontally to explore."><div className="calendar-range"><span>{formatDate(data.contributions[0].date)} — {formatDate(data.contributions.at(-1)!.date)}</span></div><div className="calendar-months" style={{ gridTemplateColumns: `repeat(${weeks}, minmax(var(--day-size, 12px), 1fr))` }}>{monthLabels.map(month => <span key={month.column} style={{ gridColumn: `${month.column} / span ${Math.min(3, weeks - month.column + 1)}` }}>{month.label}</span>)}</div><div className="contribution-grid">{Array.from({ length: offset }, (_, i) => <span key={`empty-${i}`} className="contribution empty"/>)}{data.contributions.map((day, i) => <button key={day.date} className={`contribution level-${day.level}`} title={`${day.count} contributions on ${formatDate(day.date)}`} aria-label={`${day.count} contributions on ${formatDate(day.date)}`} onFocus={() => setSelected(day)} onMouseEnter={() => setSelected(day)} onClick={() => setSelected(day)} tabIndex={selected ? selected.date === day.date ? 0 : -1 : i === data.contributions.length - 1 ? 0 : -1} onKeyDown={event => {
      const move = { ArrowUp: -1, ArrowDown: 1, ArrowLeft: -7, ArrowRight: 7 }[event.key];
      if (move === undefined && event.key !== "Home" && event.key !== "End") return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? data.contributions.length - 1 : Math.max(0, Math.min(data.contributions.length - 1, i + move!));
      const buttons = event.currentTarget.parentElement?.querySelectorAll("button");
      (buttons?.[next] as HTMLButtonElement | undefined)?.focus();
    }}/>)}</div></div>
    <p className="calendar-year-summary"><strong>{yearTotal.toLocaleString()}</strong> contributions in {currentYear} · {yearMonths} months covered</p><div className="calendar-footer"><span aria-live="polite">{selected ? `${selected.count} contributions · ${formatDate(selected.date)}` : `${data.total.toLocaleString()} contributions in the last 12 months`}</span><div className="calendar-legend"><span>Less</span>{[0,1,2,3,4].map(level => <i key={level} className={`contribution level-${level}`}/>)}<span>More</span></div></div></> : <div className="calendar-loading" role="status"><span className="loading-line"/>Loading contributions from GitHub…</div>}
    <div className="github-note"><span>Source: GitHub via contributions API</span></div>
  </div>;
}
