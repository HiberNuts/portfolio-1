import Link from "next/link";
import { Header, Footer } from "@/components/shell";
export default function NotFound() { return <><Header/><main id="main" className="not-found"><span className="eyebrow">404 / A SMALL DETOUR</span><h1>This page wandered off.</h1><p>There’s still plenty of work to explore.</p><Link className="button primary" href="/">Back to the portfolio →</Link></main><Footer/></>; }
