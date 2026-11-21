"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["About", "about"], ["Services", "services"], ["Platform", "platform"],
  ["Industries", "industries"], ["Process", "how"], ["Why us", "why"],
] as const;
const extra = [["Testimonials", "testimonials"], ["FAQ", "faq"]] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = [...links, ...extra].map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { io.disconnect(); window.removeEventListener("keydown", onKey); };
  }, []);

  const item = (id: string) =>
    `rounded-full px-4 py-2 text-[15px] font-bold transition ${active === id ? "bg-[#CFE3D2] text-[#0F2E24]" : "text-[#0F2E24]/80 hover:bg-[#CFE3D2]/60 hover:text-[#0F2E24]"}`;

  return (
    <header className="px-wrap sticky top-0 z-50 pt-3">
      <nav aria-label="Main" className="rounded-[28px] border border-white/80 bg-white/85 px-3 py-2 shadow-[0_10px_30px_-14px_rgba(15,46,36,.35)] backdrop-blur-md lg:rounded-full lg:pl-4 lg:pr-2">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-2.5" aria-label={`${site.name} home`}>
            <img src="/lo.webp" width={100} height={44} alt="" className="h-11 w-11 shrink-0 rounded-xl border border-[#0F2E24]/10 bg-white object-contain p-0.5" />
            <span className="truncate text-[17px] font-extrabold tracking-tight text-[#0F2E24] sm:text-lg">{site.name}</span>
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map(([t, id]) => (
              <li key={id}><a href={`#${id}`} aria-current={active === id ? "true" : undefined} className={item(id)}>{t}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#7A4F00] px-6 py-3 text-[15px] font-extrabold text-white shadow-[0_8px_18px_-8px_rgba(122,79,0,.6)] transition hover:brightness-110 lg:inline-flex">Book a demo</a>
            <button type="button" aria-label="Menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#CFE3D2] text-[#0F2E24] lg:hidden">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div id="mobile-menu" className="mt-2 border-t border-[#0F2E24]/10 pb-2 pt-3 lg:hidden">
            <ul className="grid grid-cols-2 gap-1.5">
              {[...links, ...extra].map(([t, id]) => (
                <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block text-center ${item(id)}`}>{t}</a></li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="btn mt-3 w-full justify-center">Book a demo</a>
          </div>
        )}
      </nav>
    </header>
  );
}
