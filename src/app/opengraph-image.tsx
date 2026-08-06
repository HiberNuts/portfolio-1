import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Raghav Jindal, AI and backend engineer building production agents, voice AI, and distributed systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, #1e1b4b 0%, #09090b 55%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#a1a1aa", letterSpacing: 2 }}>
            RAGHAV JINDAL
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.15,
              marginTop: 20,
              maxWidth: 980,
            }}
          >
            AI &amp; backend engineer
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#d4d4d8",
              marginTop: 18,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Production agents · Voice AI · Temporal · Node.js · TypeScript ·
            PostgreSQL
          </div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {[
            "Multichannel AI agents",
            "Orchestration + simulation evals",
            "100k+ public-service users",
          ].map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#e4e4e7",
                backgroundColor: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: 999,
                padding: "14px 28px",
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
