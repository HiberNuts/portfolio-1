"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { email } from "@/lib/content";
export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  return <button className="copy-button" aria-label="Copy email address" onClick={async () => { try { await navigator.clipboard.writeText(email); setStatus("copied"); } catch { setStatus("failed"); } }}><span aria-live="polite">{status === "copied" ? "Copied" : status === "failed" ? "Select email to copy" : "Copy email"}</span>{status === "copied" ? <Check size={16}/> : <Copy size={16}/>}</button>;
}
