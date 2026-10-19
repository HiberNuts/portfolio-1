import Link from "next/link";
import { ArrowUpRight, Github, ArrowUp, FileText } from "lucide-react";
import { email, github } from "@/lib/content";

export function Header() {
  return <header className="site-header"><div className="header-inner">
    <Link className="wordmark" href="/" aria-label="Raghav Jindal home"><span>Raghav Jindal<span className="wordmark-sub">ENGINEER & BUILDER</span></span></Link>
    <nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#github" className="nav-github">GitHub</Link><a className="nav-contact" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={14}/></a></nav>
  </div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div><Link className="footer-name" href="/">Raghav Jindal</Link><p>Thoughtfully built. Always a work in progress.</p></div><div className="footer-links"><a href={github} target="_blank" rel="noreferrer" aria-label="Raghav on GitHub"><Github size={17}/> GitHub</a><a href="https://x.com/hibernuts" target="_blank" rel="noreferrer">X <ArrowUpRight size={16}/></a><a href="/resume.pdf" target="_blank" rel="noreferrer"><FileText size={16}/> Résumé</a><a href="#top" aria-label="Back to top"><ArrowUp size={16}/> Top</a></div><span className="copyright">© {new Date().getFullYear()}</span></footer>;
}

export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{children}</div>;
}
