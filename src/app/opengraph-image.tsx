import { ImageResponse } from "next/og";
export const alt = "Raghav Jindal — Build it. Ship it. Make it dependable.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between", background:"#faf8f3", color:"#292623", padding:"72px" }}><div style={{ display:"flex", fontSize:26 }}>Raghav Jindal · Engineer & builder</div><div style={{ display:"flex", flexDirection:"column", fontSize:78, lineHeight:1.1, letterSpacing:-4 }}><span>Build it. Ship it.</span><span style={{color:"#3f3b36"}}>Make it dependable.</span></div><div style={{display:"flex",justifyContent:"space-between",fontSize:23,color:"#665f5b"}}><span>AI agents · Payments · Product engineering</span><span>raghav.works ↗</span></div></div>, size); }
