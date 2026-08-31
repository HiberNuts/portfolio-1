import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glido · Learn from every session",
  description:
    "Glido reviews your Codex sessions and shows you how to write better prompts, choose the right model, and waste fewer tokens.",
  alternates: { canonical: "/glido" },
};

const github = "https://github.com/HiberNuts/glido";

export default function GlidoPage() {
  return (
    <main className="-mx-6 -my-12 min-h-screen bg-[#f7faf6] px-6 py-7 text-[#172019] sm:-my-24 sm:px-10 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between text-base font-semibold">
          <span className="text-2xl font-extrabold tracking-[-0.04em] text-[#187247]">glido</span>
          <div className="flex items-center gap-3"><Link className="underline underline-offset-4" href="/">Portfolio</Link><span className="text-[#68726b]">·</span><a className="underline underline-offset-4" href={github}>GitHub ↗</a></div>
        </nav>
        <section className="grid min-h-[620px] items-start gap-14 py-24 lg:grid-cols-[1.1fr_.9fr] lg:py-36">
          <div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[.98] tracking-[-0.07em] sm:text-7xl lg:text-[84px]">Your AI coding<br />habits,<span className="ml-[.12em] text-[#187247]">scored.</span></h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#68726b] sm:text-2xl">Glido reviews your Codex sessions and shows you how to write better prompts, choose the right model, and waste fewer tokens.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3"><a className="rounded-full bg-[#172019] px-5 py-3 font-bold text-white" href={github}>Get Glido on GitHub</a><code className="rounded-xl border border-[#dce3dc] bg-white px-4 py-3 text-sm font-semibold">npx glido-coach</code></div>
          </div>
          <aside className="rounded-[30px] border border-[#dce3dc] bg-white p-8 shadow-[0_18px_50px_rgba(23,32,25,.08)] sm:p-9">
            <p className="text-xs font-extrabold tracking-[.12em] text-[#68726b]">YOUR PROMPT SCORE</p>
            <div className="mt-4 flex items-baseline gap-3"><span className="text-[118px] font-extrabold leading-[.85] tracking-[-.1em] text-[#187247]">43</span><span className="text-3xl font-bold tracking-[-.04em] text-[#68726b]">/100</span></div>
            <p className="mt-7 text-2xl font-extrabold text-[#187247]">Clear prompts. A few gaps.</p>
            <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#edf4ee] p-4"><strong className="block text-2xl text-[#187247]">23.6%</strong><span className="mt-2 block text-sm font-bold leading-relaxed text-[#68726b]">weekly capacity to save</span></div><div className="rounded-2xl bg-[#edf4ee] p-4"><strong className="block text-2xl text-[#187247]">24</strong><span className="mt-2 block text-sm font-bold leading-relaxed text-[#68726b]">model downshifts found</span></div></div>
          </aside>
        </section>
        <section className="border-t border-[#dce3dc] py-20"><h2 className="max-w-2xl text-4xl font-extrabold leading-none tracking-[-.06em] sm:text-5xl">Learn from every session. Waste fewer tokens.</h2><p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#68726b]">One simple score, three clear fixes, and a private dashboard you can share on X.</p></section>
      </div>
    </main>
  );
}
