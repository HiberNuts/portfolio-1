import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glido · Learn from every session",
  description:
    "Glido reviews your Codex sessions and shows you how to write better prompts, choose the right model, and waste fewer tokens.",
  alternates: { canonical: "/glido" },
};

const github = "https://github.com/HiberNuts/glido";
const twitter = "https://x.com/hibernuts";

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
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce3dc] bg-white px-3 py-1.5 text-sm font-bold text-[#41604e]"><span className="size-2 rounded-full bg-[#8bbf52]" />Private Codex coach</div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[.98] tracking-[-0.07em] sm:text-7xl lg:text-[84px]">Your AI coding<br />habits,<span className="ml-[.12em] text-[#187247]">scored.</span></h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#68726b] sm:text-2xl">Glido reviews your Codex sessions and shows you how to write better prompts, choose the right model, and waste fewer tokens.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3"><a className="rounded-full bg-[#172019] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5" href={github}>View on GitHub</a><code className="rounded-xl border border-[#dce3dc] bg-white px-4 py-3 text-sm font-semibold shadow-sm">npx glido-coach</code></div>
            <p className="mt-4 text-sm font-medium text-[#7b857e]">One command · asks permission first · dashboard stays on your computer</p>
          </div>
          <aside className="rounded-[30px] border border-[#dce3dc] bg-white p-8 shadow-[0_18px_50px_rgba(23,32,25,.08)] sm:p-9">
            <p className="text-xs font-extrabold tracking-[.12em] text-[#68726b]">YOUR PROMPT SCORE</p>
            <div className="mt-4 flex items-baseline gap-3"><span className="text-[118px] font-extrabold leading-[.85] tracking-[-.1em] text-[#187247]">43</span><span className="text-3xl font-bold tracking-[-.04em] text-[#68726b]">/100</span></div>
            <p className="mt-7 text-2xl font-extrabold text-[#187247]">Clear prompts. A few gaps.</p>
            <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#edf4ee] p-4"><strong className="block text-2xl text-[#187247]">23.6%</strong><span className="mt-2 block text-sm font-bold leading-relaxed text-[#68726b]">weekly capacity to save</span></div><div className="rounded-2xl bg-[#edf4ee] p-4"><strong className="block text-2xl text-[#187247]">24</strong><span className="mt-2 block text-sm font-bold leading-relaxed text-[#68726b]">model downshifts found</span></div></div>
          </aside>
        </section>
        <section className="border-t border-[#dce3dc] py-20">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-none tracking-[-.06em] sm:text-5xl">One command. Three useful answers.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[["01", "Run Glido", "It finds your recent Codex sessions and asks before reading selected prompts."], ["02", "See your score", "Get a clear prompt score, rewrites, and the habits slowing you down."], ["03", "Use the right model", "See simpler model and effort choices with estimated capacity savings."]].map(([number, title, copy]) => <article key={number} className="rounded-3xl border border-[#dce3dc] bg-white p-6"><span className="text-sm font-extrabold text-[#187247]">{number}</span><h3 className="mt-8 text-xl font-extrabold">{title}</h3><p className="mt-2 text-[#68726b]">{copy}</p></article>)}
          </div>
        </section>
        <footer className="mb-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#dce3dc] py-8 text-sm font-medium text-[#68726b]">
          <span>Built with <span className="text-[#187247]">♥</span> by <Link className="font-bold text-[#172019] underline decoration-[#b9c8bc] underline-offset-4" href="/">Raghav Jindal</Link></span>
          <div className="flex gap-4"><a className="underline decoration-[#b9c8bc] underline-offset-4" href={twitter}>Follow on X ↗</a><a className="underline decoration-[#b9c8bc] underline-offset-4" href={github}>Star on GitHub ↗</a></div>
        </footer>
      </div>
    </main>
  );
}
