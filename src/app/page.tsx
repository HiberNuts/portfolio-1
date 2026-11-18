import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CreditCard, Download, Github, Globe, GraduationCap, MessageCircle, Radio, ShoppingBag, Trophy, Zap } from "lucide-react";
import { Header, Footer, SectionHeading } from "@/components/shell";
import { ProductVisual } from "@/components/product-visual";
import { HeroBanner, JourneyArt, WorkflowArt, OwnershipArt, ProgressArt, ContactArt } from "@/components/art";
import { GitHubActivity } from "@/components/github-activity";
import { CopyEmail } from "@/components/copy-email";
import { projects, moreProjects, experience, principles, email, github, whatsapp } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_IN", siteName: "Raghav Jindal", url: "/",
    title: "Raghav Jindal — Backend & AI Product Engineer",
    description: "Backend-first engineer in Bengaluru building voice AI, payment systems, and products from first version through production.",
  },
};

const moreIcons: Record<string, { icon: typeof Zap; tone: string }> = {
  Qwik: { icon: CreditCard, tone: "mint" },
  "Shardeum University": { icon: GraduationCap, tone: "peach" },
  "Street Mint": { icon: Radio, tone: "violet" },
  Whop: { icon: ShoppingBag, tone: "blue" },
  Omen: { icon: Globe, tone: "violet" },
  "Rods Sniper": { icon: Zap, tone: "dark" },
};
const principleArt = [WorkflowArt, OwnershipArt, ProgressArt];
const principleTags = ["CALLS · MERCHANT OPS · LEARNING", "FIRST CONVERSATION → WORKING PRODUCT", "HANDOFFS · RECONCILIATION · OBSERVABILITY"];
const taglines: Record<string, string> = { voicegrid: "A conversation is just the beginning.", fundlio: "Every payment has a life after checkout.", decentraclasses: "Learn it. Write it. Run it." };

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.raghav.works";
  const profile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: new URL("/", siteUrl).href,
    name: "Raghav Jindal — Backend & AI Product Engineer",
    mainEntity: {
      "@type": "Person", "@id": new URL("/#person", siteUrl).href,
      name: "Raghav Jindal", url: new URL("/", siteUrl).href,
      image: new URL("/portrait.png", siteUrl).href,
      jobTitle: "Backend-first product engineer",
      sameAs: [github, "https://x.com/hibernuts"],
      homeLocation: { "@type": "City", name: "Bengaluru" },
    },
  };
  const [featured, ...rest] = projects;
  const card = (project: typeof projects[number], big: boolean) => <Link className={`r-project ${project.color} ${big ? "featured" : ""}`} key={project.slug} href={`/work/${project.slug}`}>
    <div className="r-project-art"><ProductVisual slug={project.slug}/></div>
    <div className="r-project-copy">
      <p className="r-project-eyebrow">{project.eyebrow}</p>
      <h3>{project.name}</h3>
      <p className="r-serif r-project-tagline">{taglines[project.slug] ?? project.title}</p>
      <p className="r-project-summary">{project.summary}</p>
      {big && <div className="r-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
      <div className="r-project-bottom"><div><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><span className="r-link">Inside the build <ArrowRight size={16}/></span></div>
    </div>
  </Link>;

  return <div id="top" className="r-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }}/><Header/><main id="main">
    <section className="r-wrap r-hero" aria-labelledby="intro-title">
      <div className="r-hero-copy">
        <p className="r-intro"><span className="r-live-dot" aria-hidden="true"/>HELLO, I’M RAGHAV <span className="r-slash">/</span> ENGINEER & BUILDER</p>
        <h1 id="intro-title">Build it. Ship it.<br/>Make it <span className="r-serif r-accent">dependable.</span></h1>
        <p className="r-hero-description">Backend-first engineer building voice AI and payment systems — from the first version through production, and everything that comes after.</p>
        <div className="r-actions"><a className="r-pill dark big" href="#work">Explore my work <ArrowDown size={16}/></a><a className="r-pill light big" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <Download size={16}/></a></div>
      </div>
      <figure className="r-portrait">
        <div className="r-portrait-card"><div className="r-portrait-photo"><Image src="/portrait-pixel.png" alt="Raghav Jindal wearing pixel sunglasses" fill priority sizes="300px"/></div><figcaption>Away from the keyboard. <span className="r-serif">still curious.</span></figcaption></div>
        <span className="r-stamp">BENGALURU, INDIA</span>
      </figure>
    </section>

    <section className="r-wrap r-banner" aria-label="What I build"><HeroBanner/></section>

    <section className="r-wrap" aria-label="Selected project outcomes"><div className="r-proof">
      <div><strong>1,000+<span className="r-serif violet">/day</span></strong><p>Pilot calls · VoiceGrid</p></div>
      <div><strong>$100K+<span className="r-serif mint">/mo</span></strong><p>Payment volume · Fundlio</p></div>
      <div><strong>100K+<span className="r-serif blue">students</span></strong><p>Tamil Nadu counselling platform</p></div>
      <div className="r-proof-note"><p className="r-serif">Real workflows.<br/>Real responsibility.</p></div>
    </div></section>

    <section id="work" className="r-wrap r-section"><SectionHeading number="01" label="SELECTED WORK" title="A few things I’ve put" accent="into the world."><p className="r-heading-note">Different domains. The same care for the details that keep software running.</p></SectionHeading>
      {card(featured, true)}
      <div className="r-project-pair">{rest.map(project => card(project, false))}</div>
    </section>

    <section id="journey" className="r-wrap r-section r-journey">
      <div className="r-journey-intro"><SectionHeading number="02" label="THE JOURNEY" title="Small teams." accent="Meaningful ownership."/><JourneyArt className="r-journey-art"/><a className="r-link" href="/resume.pdf" target="_blank" rel="noreferrer">Full résumé <ArrowUpRight size={16}/></a></div>
      <ol className="r-timeline">{experience.map(job => <li key={job.company}>
        <span className={`r-badge ${job.color}`} aria-hidden="true">{job.letter}</span>
        <div className="r-timeline-body"><p><strong>{job.company}</strong> <span>· {job.role}</span></p><p className="r-timeline-desc">{job.description}</p><details><summary>More detail</summary><p>{job.detail}</p></details></div>
        <span className="r-timeline-date">{job.date}<br/>{job.location}</span>
      </li>)}</ol>
    </section>

    <section id="more-work" className="r-wrap r-section"><SectionHeading number="03" label="MORE EXPLORATIONS" title="More of" accent="the work."/>
      <div className="r-more">{moreProjects.map(project => { const meta = moreIcons[project.name] ?? { icon: Zap, tone: "dark" }; const Icon = meta.icon; const Card = project.href ? "a" : "article"; return <Card className={`r-more-card ${project.href ? "" : "static"}`} key={project.name} {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}>
        <div className="r-more-top"><span className={`r-more-icon ${meta.tone}`}><Icon size={22} strokeWidth={1.8}/></span><span className="r-more-status">{project.status}</span></div>
        <h3>{project.name}{project.href && <ArrowUpRight size={17}/>}</h3><p>{project.summary}</p><span className="r-more-tech">{project.tech}</span>
      </Card>; })}</div>
    </section>

    <section id="philosophy" className="r-wrap r-section"><SectionHeading number="04" label="HOW I APPROACH THE WORK" title="Care goes" accent="beyond the code."/>
      <div className="r-principles">{principles.map((principle, i) => { const Art = principleArt[i] ?? WorkflowArt; return <article key={principle.number}><Art className="r-principle-art"/><span className="r-serif r-principle-number">{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p><p className="r-principle-tag">{principleTags[i] ?? principle.example}</p></article>; })}</div>
    </section>

    <section id="github" className="r-wrap r-section"><SectionHeading number="05" label="AT THE KEYBOARD" title="A little progress," accent="often."><a className="r-link" href={github} target="_blank" rel="noreferrer"><Github size={17}/> View GitHub <ArrowUpRight size={16}/></a></SectionHeading><GitHubActivity/></section>

    <section id="about" className="r-wrap r-section r-about">
      <div><SectionHeading number="06" label="THE PERSON BEHIND THE PROJECTS" title="Curious by default." accent="A builder by habit."/><p>I’m Raghav, a backend-first engineer based in Bengaluru. I started building while studying information technology and went on to work with founders taking early products from idea to production.</p><p>The stack keeps changing, and I’m fine with that. Give me a real problem, enough context, and ownership of the outcome, and I’ll figure out the rest.</p><div className="r-about-links"><a className="r-link" href={`mailto:${email}`}>Say hello <ArrowUpRight size={16}/></a><a className="r-link" href="https://x.com/hibernuts" target="_blank" rel="noreferrer">Find me on X <ArrowUpRight size={16}/></a></div></div>
      <div className="r-about-cards">
        <div className="r-credential peach"><Trophy size={28} strokeWidth={1.8}/><p className="r-mini">BUILDING UNDER PRESSURE</p><h3>10+ hackathons</h3><p>Wins at ETH India · ETH Singapore</p></div>
        <div className="r-credential violet"><GraduationCap size={28} strokeWidth={1.8}/><p className="r-mini">THE FOUNDATION</p><h3>B.Tech, IT</h3><p>Government College of Technology · 2020–2024 · 8.6 CGPA</p></div>
        <div className="r-toolbox"><p className="r-mini">TOOLS I REACH FOR</p><div>{["TypeScript", "Node.js", "PostgreSQL", "Redis", "React", "Next.js", "AWS", "Docker"].map(tool => <span key={tool}>{tool}</span>)}</div></div>
      </div>
    </section>

    <section id="contact" className="r-wrap r-section"><div className="r-contact">
      <ContactArt className="r-contact-art"/>
      <div className="r-contact-copy">
        <p className="r-mini">LET’S WORK TOGETHER</p>
        <h2>Let’s build<br/><span className="r-serif">what comes next.</span></h2>
        <p>I’d love to hear what your team is building and see where I could help.</p>
        <div className="r-actions"><a className="r-pill cream big" href={`mailto:${email}`}>{email} <ArrowUpRight size={18}/></a><a className="r-pill ghost big" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp</a><CopyEmail/></div>
      </div>
    </div></section>
  </main><Footer/></div>;
}
