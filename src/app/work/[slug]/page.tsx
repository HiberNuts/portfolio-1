import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects, email } from "@/lib/content";
import { Header, Footer } from "@/components/shell";
import { ProductVisual } from "@/components/product-visual";
import { ImageViewer } from "@/components/image-viewer";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  return { title: project?.name || "Project not found", description: project?.summary, alternates: { canonical: `/work/${slug}` } };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <div id="top"><Header/><main id="main" className="page-container case-study"><Link className="back-link" href="/#work"><ArrowLeft size={15}/> All selected work</Link><section className="case-hero"><span className="eyebrow">{project.eyebrow}</span><h1>{project.name}<span className={`case-title-dot ${project.color}`}>.</span></h1><p className="case-subtitle">{project.title}</p><p className="case-intro">{project.summary}</p><div className="case-meta"><div><span>ROLE</span><strong>{project.role}</strong></div><div><span>PERIOD</span><strong>{project.period}</strong></div><div><span>STATUS</span><strong>{project.status}</strong></div>{project.url && <a className="button secondary" href={project.url} target="_blank" rel="noreferrer">{project.slug === "decentraclasses" ? "Archived website" : "Visit product"}<ArrowUpRight size={16}/></a>}</div></section><div className={`case-visual ${project.color}`}><ProductVisual slug={project.slug}/></div>
    <div className="case-layout"><aside className="case-sidebar"><span className="tiny-label">IN THIS BUILD</span><a href="#context">The context</a><a href="#ownership">What I owned</a><a href="#system">The system</a><a href="#considerations">Engineering focus</a><a href="#outcome">The outcome</a><div className="case-stat"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div></aside><div className="case-prose"><section id="context"><span className="eyebrow">01 / CONTEXT</span><h2>The work behind the product.</h2><p>{project.problem}</p></section><section id="ownership"><span className="eyebrow">02 / MY CONTRIBUTION</span><h2>What I owned.</h2><ul className="ownership-list">{project.ownership.map(item => <li key={item}><Check size={17}/><span>{item}</span></li>)}</ul><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></section><section id="system"><span className="eyebrow">03 / THE SYSTEM</span><h2>A view of the moving parts.</h2><p>The main stages of the product workflow, from start to outcome.</p><ol className="system-diagram">{project.steps.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span>{step}</li>)}</ol></section><section id="considerations"><span className="eyebrow">04 / ENGINEERING FOCUS</span><h2>The details that matter.</h2>{project.considerations.map((item, i) => <article className="consideration" key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</section><section id="outcome"><span className="eyebrow">05 / OUTCOME</span><h2>Software in use.</h2><p>{project.result}</p></section></div></div>
    {project.image && <section className="case-extra"><h2>A look at the product.</h2><ImageViewer src={project.image} alt={`${project.name} public website`} caption={project.caption}/></section>}
    <section className="case-next"><div><span className="eyebrow">KEEP EXPLORING</span><Link href={`/work/${next.slug}`}><h2>{next.name} <ArrowRight size={30}/></h2></Link></div><a className="text-link" href={`mailto:${email}?subject=${encodeURIComponent(`Let’s talk about ${project.name}`)}`}>Ask me about this build <ArrowUpRight size={16}/></a></section>
  </main><Footer/></div>;
}
