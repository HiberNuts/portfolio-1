import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.raghav.works";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Raghav Jindal — Build it. Ship it. Make it dependable.", template: "%s · Raghav Jindal" },
  description: "Backend-first product engineer building AI voice agents, payment systems, and useful software. Explore the work, the systems, and the thinking behind them.",
  openGraph: { type: "website", locale: "en_IN", siteName: "Raghav Jindal", title: "Raghav Jindal — Software for the real world", description: "AI agents. Payment systems. Products built from the first idea through production." },
  twitter: { card: "summary_large_image", creator: "@hibernuts" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="describedby" href="/llms.txt"/></head><body className={`${sans.variable} ${mono.variable}`}><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>;
}
