"use client";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["Industries", "#industries"], ["Services", "#services"], ["Restaurant IT", "#flow"],
  ["AI Attendance", "#attendance"], ["Process", "#how"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 lg:px-[72px]">
      <nav aria-label="Main" className="rounded-3xl bg-white/90 px-5 py-3 shadow-[0_8px_24px_rgba(15,46,36,.08)] backdrop-blur lg:rounded-full">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 font-extrabold">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-[11px] text-gold">LOGO</span>
            {site.name}
          </a>
          <ul className="hidden gap-8 text-[15px] font-bold lg:flex">
            {links.slice(0, 5).map(([t, h]) => <li key={h}><a href={h} className="hover:text-brass">{t}</a></li>)}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" className="btn hidden !py-3 lg:inline-flex">Book a demo</a>
            <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-ground lg:hidden">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
          </div>
        </div>
        {open && (
          <ul className="mt-3 flex flex-col gap-1 border-t border-ink/10 pt-3 font-bold lg:hidden">
            {links.map(([t, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3">{t}</a></li>)}
          </ul>
        )}
      </nav>
    </header>
  );
}
