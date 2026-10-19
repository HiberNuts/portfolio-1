import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, Braces, ChevronDown, Download, GraduationCap, MapPin, MessageCircle, Trophy } from "lucide-react";
import { Header, Footer, SectionHeading } from "@/components/shell";
import { ProductVisual } from "@/components/product-visual";
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
  return <div id="top"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replace(/</g, "\\u003c") }}/><Header/><main id="main" className="page-container">
    <section className="hero" aria-labelledby="intro-title">
      <div className="hero-copy"><div className="intro-line">HELLO, I’M RAGHAV <span className="intro-divider">/</span> ENGINEER & BUILDER</div>
        <h1 id="intro-title">Build it. Ship it.<br/>Make it <span className="serif-accent">dependable.</span></h1>
        <p className="hero-description">Backend-first engineer building voice AI and payment systems—from first version through production.</p>
        <div className="hero-actions"><a className="button primary" href="#work">Explore my work <ArrowDown size={16}/></a><a className="button secondary" href="/resume.pdf" target="_blank" rel="noreferrer">Résumé <Download size={16}/></a></div>
        <div className="hero-location"><MapPin size={13}/> Bengaluru, India <span>·</span> From first idea to production</div>
      </div>
      <div className="hero-aside"><div className="portrait-card"><div className="portrait-photo"><Image src="/portrait-pixel.png" alt="Raghav Jindal wearing pixel sunglasses" fill priority sizes="210px"/></div><div className="portrait-caption"><span>Raghav, away from the keyboard.</span><span className="handwritten">still curious.</span></div></div><span className="photo-stamp"><Braces size={15}/> made of curiosity & code</span></div>
    </section>
    <div className="proof-strip" aria-label="Selected project outcomes"><div><strong>1,000+<span>/day</span></strong><p>Pilot calls · VoiceGrid</p></div><div><strong>$100K+<span>/mo</span></strong><p>Payment volume · Fundlio</p></div><div><strong>100K+<span>students</span></strong><p>Tamil Nadu counselling platform</p></div><div className="proof-footnote"><span className="mini-cross">✳</span><span>Real workflows.<br/>Real responsibility.</span></div></div>

    <section id="work" className="section selected-work"><SectionHeading number="01" label="SELECTED WORK" title="A few things I’ve put into the world."><p>Different domains. The same care for the details.</p></SectionHeading>
      <div className="featured-grid">{projects.map((project, index) => <Link className={`project-card ${project.color} ${index === 0 ? "featured" : ""}`} key={project.slug} href={`/work/${project.slug}`}>
        <div className="project-visual-link"><ProductVisual slug={project.slug}/><span className="project-arrow"><ArrowUpRight size={21}/></span></div>
        <div className="project-copy"><div className="project-category"><span className={`category-dot ${project.color}`}/>{project.eyebrow}</div><div className="project-title-link"><h3>{project.name} <ArrowUpRight size={22}/></h3></div><p>{project.summary}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-bottom"><div><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><span className="text-link">Inside the build <ArrowRight size={16}/></span></div></div>
      </Link>)}</div>
    </section>

    <section id="experience" className="section"><SectionHeading number="02" label="THE JOURNEY" title="Small teams. Meaningful ownership."><a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">Full résumé <ArrowUpRight size={16}/></a></SectionHeading><div className="experience-list">{experience.map(job => <details className="experience-row" key={job.company}><summary><span className={`company-icon ${job.color}`}>{job.letter}</span><span className="experience-title"><strong>{job.company}</strong><span>{job.role}</span></span><span className="experience-description">{job.description}</span><span className="experience-date">{job.date}<span>{job.location}</span></span><ChevronDown size={16} className="details-chevron"/></summary><div className="experience-expanded"><p>{job.detail}</p></div></details>)}</div></section>

    <section id="more-work" className="section"><SectionHeading number="03" label="MORE EXPLORATIONS" title="More of the work."><span className="section-small-note">Products, platforms & experiments</span></SectionHeading><div className="more-grid compact-projects">{moreProjects.map(project => { const Card = project.href ? "a" : "article"; return <Card className="small-project" key={project.name} {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}><div className="small-project-top"><span className="small-project-status">{project.status}</span></div><span className="tiny-label">{project.category}</span><h3><span className="small-project-image"><Image src={project.image} alt="" fill sizes="64px"/></span><span>{project.name}</span>{project.href && <ArrowUpRight size={17}/>}</h3><p>{project.summary}</p><span className="small-project-tech">{project.tech}</span></Card>; })}</div></section>

    <section id="philosophy" className="section philosophy-section"><SectionHeading number="04" label="HOW I APPROACH THE WORK" title="Care goes beyond the code."/><div className="principles">{principles.map(principle => <article key={principle.number}><span className="principle-number">{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p><span className="principle-example">{principle.example}</span></article>)}</div></section>

    <section id="github" className="section"><SectionHeading number="05" label="AT THE KEYBOARD" title="A little progress, often."><p>The public trail of the work.</p></SectionHeading><GitHubActivity/><div className="code-links"><a href="https://github.com/HiberNuts" target="_blank" rel="noreferrer"><Braces size={18}/><span>Visit my GitHub</span><ArrowUpRight size={16}/></a><Link href="/work/voicegrid"><AudioLines size={18}/><span>Read about the systems</span><ArrowUpRight size={16}/></Link></div></section>

    <section id="about" className="section about-section"><div className="about-main"><p className="eyebrow"><span>06</span> THE PERSON BEHIND THE PROJECTS</p><h2>Curious by default.<br/><span className="serif-accent">A builder by habit.</span></h2><p>I’m Raghav, a backend-first engineer based in Bengaluru. I started building while studying information technology and went on to work with founders taking early products from idea to production.</p><p>The stack keeps changing, and I’m fine with that. Give me a real problem, enough context, and ownership of the outcome, and I’ll figure out the rest.</p><div className="about-links"><a className="text-link" href={`mailto:${email}`}>Say hello <ArrowUpRight size={16}/></a><a className="text-link" href="https://x.com/hibernuts" target="_blank" rel="noreferrer">Find me on X <ArrowUpRight size={16}/></a></div></div><aside className="about-aside"><div className="credential"><Trophy size={21}/><span className="tiny-label">BUILDING UNDER PRESSURE</span><h3>10+ hackathons</h3><p>Turning ideas into working prototypes under tight deadlines.</p><p className="hackathon-wins">Wins at ETH India · ETH Singapore</p></div><div className="credential"><GraduationCap size={22}/><span className="tiny-label">THE FOUNDATION</span><h3>B.Tech, Information Technology</h3><p>Government College of Technology<br/>2020–2024 · 8.6 CGPA</p></div><div className="toolbox"><span className="tiny-label">TOOLS I REACH FOR</span><p>TypeScript / Node.js / PostgreSQL / Redis / React / Next.js / AWS / Docker</p><span>Chosen for the problem at hand.</span></div></aside></section>

    <section id="contact" className="contact-section"><div className="contact-copy"><p className="eyebrow">LET’S WORK TOGETHER</p><h2>Let’s build<br/><span className="serif-accent">what comes next.</span></h2><p>I’d love to hear what your team is building and see where I could help.</p></div><div className="contact-details"><a className="email-action" href={`mailto:${email}`}><span className="tiny-label">SEND ME AN EMAIL</span><span className="email-action-address">{email}<ArrowUpRight size={24}/></span></a><div className="contact-secondary"><CopyEmail/><a className="whatsapp-button" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp <ArrowUpRight size={15}/></a><span>Based in Bengaluru · Open to a conversation</span></div></div></section>
  </main><Footer/></div>;
}
