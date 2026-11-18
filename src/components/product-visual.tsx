import { FundlioArt, LearnArt, VoiceArt } from "@/components/art";

export function ProductVisual({ slug }: { slug: string }) {
  const Art = slug === "voicegrid" ? VoiceArt : slug === "fundlio" ? FundlioArt : LearnArt;
  return <div className="art-frame"><Art/></div>;
}
