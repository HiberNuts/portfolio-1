"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, AudioLines, Check, Headphones, Phone, RotateCcw, Wrench } from "lucide-react";

const stages = [
  { label: "Connect", icon: Phone, title: "Start with a clear purpose.", text: "An outbound call begins with the workflow’s purpose and the context needed for the conversation.", message: "Hello! I’m calling to help with your appointment.", detail: "CONVERSATION CONTEXT" },
  { label: "Understand", icon: AudioLines, title: "Turn a conversation into intent.", text: "The agent needs to understand what the person wants before asking a business tool to do anything.", message: "Could we move my appointment to a different day?", detail: "INTENT · RESCHEDULE" },
  { label: "Act", icon: Wrench, title: "Connect speech to useful work.", text: "A tool integration connects the request to the business workflow. Its response determines what the agent can say next.", message: "Check available appointments", detail: "BUSINESS TOOL REQUEST" },
  { label: "Resolve", icon: Check, title: "Close the loop.", text: "A successful outcome needs a clear confirmation, so both the person and the operations team know what happened.", message: "Your new appointment is confirmed.", detail: "OUTCOME · CONFIRMED" },
];

export function Workflow() {
  const [path, setPath] = useState("complete");
  const [step, setStep] = useState(0);
  const id = useId();
  const reduce = useReducedMotion();
  const handoff = path === "handoff" && step >= 2;
  const current = handoff ? step === 2
    ? { ...stages[2], title: "A tool failure changes the next step.", text: "When availability cannot be confirmed, the agent should explain the limitation and move to a human handoff.", message: "Availability could not be confirmed.", detail: "TOOL RESPONSE · UNAVAILABLE" }
    : { ...stages[3], title: "Make the handoff useful.", text: "A person takes over with the conversation context and the unresolved request. The example ends with a handoff, not an invented confirmation.", message: "Let me connect you with someone who can help.", detail: "OUTCOME · HUMAN HANDOFF" }
    : stages[step];
  const choose = (value: string) => { setPath(value); setStep(0); };

  return <div className="workflow-card">
    <div className="workflow-header"><div><span className="tiny-label">THE ENGINEERING BETWEEN HELLO AND DONE</span><h3>Follow a voice workflow.</h3></div>
      <div className="scenario-tabs" role="tablist" aria-label="Workflow scenario">
        {[{ value: "complete", label: "Happy path" }, { value: "handoff", label: "Tool failure" }].map((tab, i, tabs) => <button key={tab.value} role="tab" id={`${id}-${tab.value}`} aria-selected={path === tab.value} aria-controls={`${id}-panel`} tabIndex={path === tab.value ? 0 : -1} onClick={() => choose(tab.value)} onKeyDown={(event) => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (i + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
          choose(tabs[next].value); document.getElementById(`${id}-${tabs[next].value}`)?.focus();
        }}>{path === tab.value && <motion.span className="tab-indicator" layoutId={`${id}-indicator`} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 245, damping: 36, mass: 1.2 }}/>}<span>{tab.label}</span></button>)}
      </div>
    </div>
    <div role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-${path}`} tabIndex={0}>
      <ol className="workflow-steps">{stages.map((stage, i) => { const Icon = i === 3 && path === "handoff" ? Headphones : stage.icon; return <li key={stage.label} className={`${i === step ? "current" : ""} ${i < step ? "completed" : ""}`}><button onClick={() => setStep(i)} aria-current={i === step ? "step" : undefined} aria-label={`Step ${i + 1}: ${i === 3 && path === "handoff" ? "Handoff" : stage.label}`}><span className="step-icon"><Icon size={19}/></span><span>{i === 3 && path === "handoff" ? "Handoff" : stage.label}</span></button></li>; })}</ol>
      <div className="workflow-detail" aria-live="polite" aria-atomic="true"><div><span className="step-count">0{step + 1} / 04</span><h4>{current.title}</h4><p>{current.text}</p></div><div className={`conversation-card ${handoff ? "handoff" : ""}`}><span className="tiny-label">{current.detail}</span><p>“{current.message}”</p><span className="example-label">Illustrative scenario · synthetic conversation</span></div></div>
    </div>
    <div className="workflow-footer"><p>A simplified explanation, not a live call or production trace.</p><div><button className="icon-button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} aria-label="Previous step"><ArrowLeft size={17}/></button><button className="button small" onClick={() => setStep(step === 3 ? 0 : step + 1)}>{step === 3 ? "Replay" : "Next step"}{step === 3 ? <RotateCcw size={15}/> : <ArrowRight size={15}/>}</button></div></div>
  </div>;
}
