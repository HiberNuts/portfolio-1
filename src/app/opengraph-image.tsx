import { ImageResponse } from "next/og";
export const alt = "Raghav Jindal — Build it. Ship it. Make it dependable.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chip = (label: string, bg: string, dot: string) => <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 20px", borderRadius: 999, background: bg, fontSize: 22 }}><div style={{ width: 12, height: 12, borderRadius: 999, background: dot }}/>{label}</div>;

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#faf8f3", color: "#292623", padding: "64px 72px", overflow: "hidden" }}>
    <div style={{ position: "absolute", right: -140, bottom: -200, width: 520, height: 520, borderRadius: 999, background: "#f3d9c8", opacity: 0.7, display: "flex" }}/>
    <div style={{ position: "absolute", right: 72, top: 64, width: 260, height: 300, borderRadius: 28, background: "#24211e", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 28 }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 80 }}>{[24, 48, 70, 40, 84, 56, 30, 62, 38, 20].map((h, i) => <div key={i} style={{ width: 10, height: h, borderRadius: 5, background: "#b9aedd" }}/>)}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{["Payment", "Reconciled", "Payout"].map(label => <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, color: "#faf8f3", fontSize: 20 }}><div style={{ width: 16, height: 16, borderRadius: 999, background: "#357663" }}/>{label}</div>)}</div>
    </div>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}><div style={{ width: 56, height: 56, borderRadius: 16, background: "#24211e", color: "#faf8f3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontStyle: "italic" }}>R</div><div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 26, fontWeight: 600 }}>Raghav Jindal</span><span style={{ fontSize: 16, letterSpacing: 2, color: "#665f5b" }}>BACKEND & AI PRODUCT ENGINEER</span></div></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1, letterSpacing: -4, fontWeight: 600 }}><span>Build it. Ship it.</span><span style={{ display: "flex" }}>Make it&nbsp;<span style={{ color: "#ac623b", fontStyle: "italic" }}>dependable.</span></span></div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ display: "flex", gap: 12 }}>{chip("Voice AI", "#e9e4f4", "#7463ab")}{chip("Payment systems", "#ddebe4", "#357663")}{chip("Zero-to-one products", "#f2e2d6", "#ac623b")}</div><span style={{ fontSize: 22, color: "#24211e", background: "#fff", padding: "10px 18px", borderRadius: 999 }}>raghav.works</span></div>
    </div>
  </div>, size);
}
