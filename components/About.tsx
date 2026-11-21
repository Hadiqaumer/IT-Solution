"use client";

import { useState } from "react";
import Icon from "./Icon";

/* paste your 3 photo paths here (leave "" to show the "Add photo" placeholder) */
const aboutPhotos = [
  "/about/3.webp", // 1: top-left
  "/about/2.webp", // 2: top-right
  "/about/1.webp", // 3: wide, bottom
];

const aboutText =
  "Tawakal Econ is a complete IT solutions and software development company helping businesses embrace modern technology, work more efficiently, and strengthen their digital infrastructure. From custom software, POS and AI to CCTV, GPS tracking and networking, we manage every project from planning to ongoing maintenance.";

// each tab gets one light tint from the palette: Sage / Gold / Teal / Clay
const tabs = [
  {
    id: "mission",
    label: "Mission",
    tint: "#A9CDB4",
    soft: "#E4F0E7",
    tick: "#1F6B45",
    text: "To empower businesses with innovative, reliable, and customised technology solutions that simplify operations, improve efficiency, and support sustainable growth.",
  },
  {
    id: "vision",
    label: "Vision",
    tint: "#E3CF8E",
    soft: "#F7F0D3",
    tick: "#7A5A00",
    text: "To become a trusted technology partner for businesses across the UAE by delivering intelligent software, integrated IT infrastructure, and forward-thinking digital solutions.",
  },
  {
    id: "commitment",
    label: "Commitment",
    tint: "#94C9BE",
    soft: "#DDF0EB",
    tick: "#14665A",
    text: "We provide technology solutions that align with real business needs, through custom development, professional implementation, and continuous maintenance, building long-term technology partnerships.",
  },
];

function MosaicPhoto({ src, alt }: { src?: string; alt: string }) {
  if (!src) {
    return (
      <div
        aria-hidden="true"
        className="grid h-full w-full place-items-center bg-gradient-to-br from-[#bcd5c4] to-[#e3efe7] text-[12px] font-bold text-[#0F2E24]/40"
      >
        Add photo
      </div>
    );
  }
  return <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />;
}

const depth = (z: number): React.CSSProperties => ({ transform: `translateZ(${z}px)` });

/* Each photo sits in a wrapper at its own depth. The wrapper carries the shadow
   (drop-shadow follows the diagonal clip), the inner box does the clipping. */
const layers = [
  { pos: "left-0 top-0 h-[62%] w-[49%]", clip: "polygon(0 0,100% 0,100% 89%,0 97%)", z: 28, i: 0, alt: "Our team at work" },
  { pos: "right-0 top-0 h-[62%] w-[49%]", clip: "polygon(0 0,100% 0,100% 81%,0 88.5%)", z: 52, i: 1, alt: "Software and systems" },
  { pos: "inset-0", clip: "polygon(0 64%,100% 54%,100% 100%,0 100%)", z: 10, i: 2, alt: "Installation and support" },
];

function Mosaic() {
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transition = "transform .15s ease-out";
    el.style.setProperty("--ry", `${px * 12}deg`);
    el.style.setProperty("--rx", `${-py * 12}deg`);
  };
  const leave = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = "transform .8s cubic-bezier(.2,.8,.2,1)";
    el.style.removeProperty("--rx");
    el.style.removeProperty("--ry");
  };

  return (
    <div className="[perspective:1200px]">
      <div
        onPointerMove={move}
        onPointerLeave={leave}
        className="relative h-[340px] sm:h-[430px] lg:h-[500px]"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transition: "transform .8s cubic-bezier(.2,.8,.2,1)",
        }}
      >
        {layers.map((l) => (
          <div
            key={l.i}
            className={`absolute ${l.pos}`}
            style={{ ...depth(l.z), filter: "drop-shadow(0 22px 20px rgba(15,46,36,.2))" }}
          >
            <div className="h-full w-full overflow-hidden rounded-[24px]" style={{ clipPath: l.clip }}>
              <MosaicPhoto src={aboutPhotos[l.i]} alt={l.alt} />
            </div>
          </div>
        ))}

        {/* floating chip, pops out the most */}
        <div
          className="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-full border-2 border-white bg-white/90 py-2 pl-2.5 pr-4 text-[13px] font-extrabold text-[#0F2E24] shadow-[0_16px_24px_-12px_rgba(15,46,36,.45)]"
          style={depth(80)}
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#A9CDB4] text-[#1F6B45]">
            <Icon name="chk" size={14} stroke={3} />
          </span>
          From planning to ongoing maintenance
        </div>
      </div>
    </div>
  );
}

export function About() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  /* arrow keys, Home and End move between tabs */
  const onKey = (e: React.KeyboardEvent) => {
    const i = tabs.findIndex((t) => t.id === active);
    let n = i;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(tabs[n].id);
    document.getElementById(`about-tab-${tabs[n].id}`)?.focus();
  };

  return (
    <section id="about" className="section tone-g relative isolate overflow-hidden">
      {/* same sage background as the hero / services */}
      <style>{`
        @keyframes aboutIn { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
        @media (prefers-reduced-motion: no-preference) { .about-in { animation: aboutIn .35s ease-out } }
      `}</style>

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
        <Mosaic />

        {/* text with tabs */}
        <div>
          <p className="eyebrow">About Tawakal Econ</p>
          <h2 className="h2 leading-[1.05]">
            Empowering Businesses Through <span className="text-brass">Technology &amp; Innovation</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-[16px] font-semibold leading-relaxed text-[#35524A]">{aboutText}</p>

          {/* tabs */}
          <div role="tablist" aria-label="Mission, vision and commitment" onKeyDown={onKey} className="mt-7 flex flex-wrap gap-2">
            {tabs.map((t) => {
              const on = t.id === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`about-tab-${t.id}`}
                  aria-selected={on}
                  aria-controls="about-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(t.id)}
                  className={`rounded-full border-2 px-5 py-2 text-[14px] font-extrabold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A4F00] ${
                    on
                      ? "border-white text-[#0F2E24] shadow-[0_12px_18px_-10px_rgba(15,46,36,.4)]"
                      : "border-white/70 bg-white/55 text-[#35524A] hover:-translate-y-0.5 hover:bg-white/85"
                  }`}
                  style={on ? { background: t.tint } : undefined}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* tab content (fixed minimum height so the page doesn't jump) */}
          <div
            key={current.id}
            role="tabpanel"
            id="about-panel"
            aria-labelledby={`about-tab-${current.id}`}
            className="about-in mt-5 min-h-[150px] rounded-[26px] border-2 border-white p-6 shadow-[0_22px_38px_-26px_rgba(15,46,36,.4)] sm:p-7"
            style={{ background: `linear-gradient(160deg, #FFFFFF 0%, ${current.soft} 100%)` }}
          >
            <h3 className="flex items-center gap-3 text-[19px] font-extrabold tracking-tight text-[#0F2E24]">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl border-2 border-white"
                style={{ background: current.tint, color: current.tick }}
              >
                <Icon name="chk" size={16} stroke={3} />
              </span>
              {current.label}
            </h3>
            <p className="mt-3 text-[15.5px] font-semibold leading-relaxed text-[#35524A]">{current.text}</p>
          </div>

          <a
            href="#contact"
            className="group/cta mt-7 inline-flex items-center gap-4 rounded-full bg-[#7A4F00] py-1.5 pl-7 pr-1.5 text-[15px] font-extrabold text-white shadow-[0_14px_26px_-10px_rgba(122,79,0,.5)] transition hover:-translate-y-0.5 hover:bg-[#8C5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A4F00]"
          >
            Let&apos;s Work Together
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#7A4F00] transition-transform duration-300 group-hover/cta:translate-x-0.5">
              <Icon name="arr" size={18} stroke={2.4} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}