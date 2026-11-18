import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { email, github, whatsapp } from "@/lib/content";

export function Header() {
  return <header className="r-header"><div className="r-header-inner">
    <Link className="r-wordmark" href="/" aria-label="Raghav Jindal home"><span className="r-monogram" aria-hidden="true">R</span><span className="r-wordmark-text"><strong>Raghav Jindal</strong><span>ENGINEER & BUILDER</span></span></Link>
    <nav aria-label="Main navigation"><Link href="/#work">Work</Link><Link href="/#journey">Journey</Link><Link href="/#about" className="r-hide-sm">About</Link><Link href="/#github" className="r-hide-sm">GitHub</Link><a className="r-pill dark" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={15}/></a></nav>
  </div></header>;
}

export function Footer() {
  return <footer className="r-footer"><div><Link className="r-footer-name" href="/">Raghav Jindal</Link><p className="r-serif">Thoughtfully built. Always a work in progress.</p></div><nav aria-label="Footer" className="r-footer-links"><a href={github} target="_blank" rel="noreferrer">GitHub</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://x.com/hibernuts" target="_blank" rel="noreferrer">X</a><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé</a><a href="#top">Back to top ↑</a></nav><span className="r-copyright">© {new Date().getFullYear()}</span></footer>;
}

export function SectionHeading({ number, label, title, accent, children }: { number: string; label: string; title: string; accent?: string; children?: React.ReactNode }) {
  return <div className="r-section-heading"><div><p className="r-eyebrow"><span className="r-serif">{number}</span>{label}</p><h2>{title}{accent && <> <span className="r-serif">{accent}</span></>}</h2></div>{children}</div>;
}
