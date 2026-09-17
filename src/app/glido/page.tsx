import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glido · The smart Codex launcher",
  description:
    "Glido routes your task to the right Codex model, improves the prompt, and can run a coordinated agent team for larger goals.",
  alternates: { canonical: "/glido" },
};

const github = "https://github.com/HiberNuts/glido";
const twitter = "https://x.com/hibernuts";

const steps = [
  ["01", "Describe the outcome", "Give Glido a task in plain language, plus optional reference images and a definition of done."],
  ["02", "Review the route", "See the recommended Codex model, effort level, reasoning, and improved prompt before anything starts."],
  ["03", "Launch Codex", "Approve the run and Glido opens a real Codex session. Agent mode keeps a master thread on larger goals."],
];

export default function GlidoPage() {
  return (
    <main className="-mx-6 -my-12 min-h-screen overflow-hidden bg-[#f7faf6] px-6 py-7 text-[#172019] sm:-my-24 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm font-semibold">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold tracking-[-0.04em] text-[#187247]">glido</span>
            <Link className="rounded-full bg-[#edf4ee] px-3 py-1.5 text-[#41604e] transition hover:bg-[#e2eee4]" href="/">From Raghav&apos;s portfolio ♥</Link>
          </div>
          <div className="flex items-center gap-3"><Link className="underline decoration-[#b9c8bc] underline-offset-4" href="/">Portfolio</Link><span className="text-[#a4ada6]">·</span><a className="underline decoration-[#b9c8bc] underline-offset-4" href={github}>GitHub ↗</a></div>
        </nav>
        <section className="grid items-start gap-14 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce3dc] bg-white px-3 py-1.5 text-sm font-bold text-[#41604e]"><span className="size-2 rounded-full bg-[#8bbf52]" />Smart Codex launcher</div>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[.98] tracking-[-0.07em] sm:text-7xl lg:text-[84px]">Start with a goal.<br /><span className="text-[#187247]">Launch the right Codex run.</span></h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#68726b] sm:text-2xl">Glido routes coding work to the right model and effort level, improves the prompt for review, then opens Codex. For bigger outcomes, Agent Mode coordinates a master session and sub-agents.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3"><a className="rounded-full bg-[#172019] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5" href={github}>View on GitHub</a><code className="rounded-xl border border-[#dce3dc] bg-white px-4 py-3 text-sm font-semibold shadow-sm">npx glido-coach@latest</code></div>
            <p className="mt-4 text-sm font-medium text-[#7b857e]">Local routing · review before launch · Codex stays in your terminal</p>
          </div>
          <aside className="rounded-[30px] border border-[#dce3dc] bg-[#172019] p-7 text-white shadow-[0_18px_50px_rgba(23,32,25,.16)] sm:p-9">
            <p className="text-xs font-extrabold tracking-[.12em] text-[#b5c2b8]">GLIDO ROUTER</p>
            <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 p-5"><p className="text-sm font-bold text-[#d7e2d9]">Recommended route</p><p className="mt-3 text-2xl font-extrabold text-[#9cdd80]">GPT-5.6 Sol</p><p className="mt-1 text-sm text-[#b5c2b8]">medium effort · multi-area implementation</p></div>
            <div className="mt-3 rounded-2xl border border-white/15 bg-white/5 p-5"><p className="text-sm font-bold text-[#d7e2d9]">Prepared for review</p><p className="mt-2 text-sm leading-relaxed text-[#b5c2b8]">Clear task, working agreement, verification, and optional image references—before Codex is opened.</p></div>
            <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#8bbf52] px-5 py-4 text-[#172019]"><span className="font-extrabold">Approve → Codex launches</span><span aria-hidden="true">↗</span></div>
          </aside>
        </section>
        <section className="border-t border-[#dce3dc] py-20">
          <div className="max-w-3xl"><p className="text-sm font-extrabold uppercase tracking-[.12em] text-[#187247]">Normal mode or Agent Mode</p><h2 className="mt-3 text-4xl font-extrabold leading-none tracking-[-.06em] sm:text-5xl">Use one focused session—or give a larger goal to a coordinated Codex team.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map(([number, title, copy]) => <article key={number} className="rounded-3xl border border-[#dce3dc] bg-white p-6"><span className="text-sm font-extrabold text-[#187247]">{number}</span><h3 className="mt-8 text-xl font-extrabold">{title}</h3><p className="mt-2 text-[#68726b]">{copy}</p></article>)}
          </div>
        </section>
        <section className="grid gap-5 border-t border-[#dce3dc] py-20 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#edf4ee] p-8"><p className="text-sm font-extrabold text-[#187247]">NORMAL MODE</p><h2 className="mt-5 text-3xl font-extrabold tracking-[-.05em]">A better start to every Codex task.</h2><p className="mt-4 leading-relaxed text-[#68726b]">Use Glido to route a focused request, review its rewritten prompt, then work in the Codex session it launches.</p><code className="mt-6 block w-fit rounded-xl border border-[#dce3dc] bg-white px-4 py-3 text-sm font-semibold">glido run &quot;Fix the checkout error&quot;</code></article>
          <article className="rounded-3xl bg-[#172019] p-8 text-white"><p className="text-sm font-extrabold text-[#9cdd80]">AGENT MODE</p><h2 className="mt-5 text-3xl font-extrabold tracking-[-.05em]">One master, multiple focused sub-agents.</h2><p className="mt-4 leading-relaxed text-[#b5c2b8]">Set a goal and clear completion criteria. The master plans, delegates, integrates the results, and verifies the outcome in a live view.</p><code className="mt-6 block w-fit rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold">glido agent &quot;Ship the feature&quot;</code></article>
        </section>
        <footer className="mb-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#dce3dc] py-8 text-sm font-medium text-[#68726b]">
          <span>Built with <span className="text-[#187247]">♥</span> by <Link className="font-bold text-[#172019] underline decoration-[#b9c8bc] underline-offset-4" href="/">Raghav Jindal</Link></span>
          <div className="flex gap-4"><a className="underline decoration-[#b9c8bc] underline-offset-4" href={twitter}>Follow on X ↗</a><a className="underline decoration-[#b9c8bc] underline-offset-4" href={github}>Star on GitHub ↗</a></div>
        </footer>
      </div>
    </main>
  );
}
