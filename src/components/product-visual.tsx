import { AudioLines, ArrowUpRight, Check, Code2, CornerDownRight, CreditCard, Headphones, Phone, ShieldCheck } from "lucide-react";

export function ProductVisual({ slug }: { slug: string }) {
  if (slug === "voicegrid") return <div className="product-visual voice-visual" aria-label="Illustration of a voice operations workflow">
    <div className="visual-grid"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
    <div className="voice-console"><div className="console-top"><span className="mini-icon"><AudioLines size={16}/></span><strong>VoiceGrid</strong><span className="console-dot"/><span className="tiny-label">WORKFLOW PREVIEW</span></div>
      <div className="voice-center"><div className="voice-orb"><AudioLines size={32}/></div><div><span className="tiny-label">BUILT AROUND THE CONVERSATION</span><h3>A voice. A next step.</h3></div></div>
      <div className="waveform" aria-hidden="true">{Array.from({ length: 42 }, (_, i) => <i key={i} style={{ height: `${10 + ((i * 19 + 7) % 39)}px`, animationDelay: `${i * 0.06}s` }}/>)}</div>
      <div className="call-stages"><span><Phone size={13}/> Connect</span><span><CornerDownRight size={13}/> Take action</span><span><Headphones size={13}/> Hand off</span></div>
    </div><span className="floating-note"><ShieldCheck size={16}/> People stay in the loop.</span><span className="visual-caption">WORKFLOW ILLUSTRATION</span>
  </div>;
  if (slug === "fundlio") return <div className="product-visual fundlio-visual" aria-label="Illustration of the Fundlio payment lifecycle">
    <div className="visual-grid"/><div className="payment-card"><div className="payment-card-top"><strong>fundlio<span>•</span></strong><CreditCard size={25}/></div><span className="tiny-label">PAYMENTS, THROUGH TO PAYOUT</span><div className="payment-amount">Every step.<br/>Accounted for.</div><div className="card-bottom"><span>PAY · RECONCILE · SETTLE</span><ArrowUpRight size={21}/></div></div>
    <div className="settlement-slip"><div className="slip-title"><span className="check-circle"><Check size={15}/></span><strong>Beyond the transaction</strong></div><div><span>Provider integrations</span><Check size={14}/></div><div><span>Reconciliation</span><Check size={14}/></div><div><span>Merchant payouts</span><Check size={14}/></div></div><span className="visual-caption">SYSTEM ILLUSTRATION</span>
  </div>;
  return <div className="product-visual education-visual" aria-label="Illustration of the developer education experience"><div className="visual-grid"/>
    <div className="editor-window"><div className="editor-toolbar"><span className="window-dots"><i/><i/><i/></span><span>Learning by building</span><Code2 size={15}/></div><div className="editor-body"><div className="editor-sidebar"><span>YOUR WORKSPACE</span><b>01 &nbsp; The fundamentals</b><b className="selected">02 &nbsp; Your first contract</b><b>03 &nbsp; Put it into practice</b><div className="lesson-progress"><i/></div></div><div className="editor-code"><span className="file-tab">hello.sol</span><pre><span className="code-comment">// A little code. A new possibility.</span>{"\n"}<span className="code-purple">contract</span>{" HelloWorld {\n\n  "}<span className="code-purple">string public</span>{" message =\n    "}<span className="code-green">&quot;Hello, builder.&quot;</span>{";\n\n}"}</pre></div></div><div className="editor-bottom"><span><Check size={13}/> Write → Compile → Learn</span><span>Browser-based practice</span></div></div><span className="visual-caption">LEARNING EXPERIENCE ILLUSTRATION</span>
  </div>;
}
