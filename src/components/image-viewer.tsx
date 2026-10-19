"use client";
import Image from "next/image";
import { useRef } from "react";
import { Expand, X } from "lucide-react";

export function ImageViewer({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const close = () => { dialog.current?.close(); };
  return <figure className="project-screenshot"><button className="image-trigger" onClick={() => { dialog.current?.showModal(); }} aria-label={`Enlarge ${alt}`}><Image src={src} alt={alt} width={1440} height={864} sizes="(max-width: 800px) 100vw, 1000px"/><span><Expand size={17}/> Enlarge image</span></button>{caption && <figcaption>{caption}</figcaption>}
    <dialog ref={dialog} className="image-dialog" onClick={event => { if (event.target === event.currentTarget) close(); }} aria-label={alt}><button className="dialog-close" onClick={close} autoFocus aria-label="Close image"><X size={23}/></button><Image src={src} alt={alt} width={1440} height={864} sizes="95vw"/>{caption && <p>{caption}</p>}</dialog>
  </figure>;
}
