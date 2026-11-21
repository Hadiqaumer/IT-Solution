"use client";
import type { ReactNode } from "react";

// Palette: Ink #0F2E24 (text only), Brass #7A4F00 (accent), light Sage / Gold / Teal / Clay tints on a light Ground

const ico = (d: ReactNode) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

type Feature = { t: string; d: string; icon: ReactNode };
type Tone = { tint: string; soft: string; tick: string };

const tones: Tone[] = [
  { tint: "#A9CDB4", soft: "#E4F0E7", tick: "#1F6B45" }, // sage
  { tint: "#E3CF8E", soft: "#F7F0D3", tick: "#7A5A00" }, // gold
  { tint: "#94C9BE", soft: "#DDF0EB", tick: "#14665A" }, // teal
  { tint: "#E1B497", soft: "#F8E7DB", tick: "#8F4A22" }, // clay
];

const features: Feature[] = [
  {
    t: "Custom Software Development",
    d: "We develop software according to your business processes, operational requirements, and long-term objectives.",
    icon: ico(<><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>),
  },
  {
    t: "Complete Project Management",
    d: "We manage every stage of your technology project, from consultation and planning to implementation and deployment.",
    icon: ico(<><path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z" /><rect x="5" y="6" width="14" height="15" rx="2" /><polyline points="9 14 11 16 15 12" /></>),
  },
  {
    t: "Integrated Technology Solutions",
    d: "We connect software, hardware, security, and business systems to create a more efficient working environment.",
    icon: ico(<><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><line x1="8.5" y1="6" x2="15.5" y2="6" /><line x1="7.3" y1="8.2" x2="10.7" y2="15.8" /><line x1="16.7" y1="8.2" x2="13.3" y2="15.8" /></>),
  },
  {
    t: "Modern Technology & Innovation",
    d: "We incorporate AI, automation, and intelligent systems to help businesses embrace modern technology.",
    icon: ico(<><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" /></>),
  },
  {
    t: "Professional Implementation",
    d: "Our implementation approach focuses on proper configuration, system integration, testing, and deployment.",
    icon: ico(<><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>),
  },
  {
    t: "Ongoing Maintenance & Support",
    d: "We provide continued maintenance and technical assistance to help keep your technology systems operating reliably.",
    icon: ico(<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z" />),
  },
];

const depth = (z: number): React.CSSProperties => ({ transform: `translateZ(${z}px)` });

/* Light card. Tilts toward the cursor; the icon tile and title sit at different depths.
   Tilt is written straight to CSS variables, so React never re-renders while the mouse moves. */
function Card({ f, tone }: { f: Feature; tone: Tone }) {
  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transition = "transform .15s ease-out, box-shadow .4s ease";
    el.style.setProperty("--ry", `${(px - 0.5) * 14}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 14}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const leave = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.transition = "transform .7s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease";
    el.style.removeProperty("--rx");
    el.style.removeProperty("--ry");
  };

  return (
    <div className="h-full [perspective:1000px]">
      <div
        onPointerMove={move}
        onPointerLeave={leave}
        className="group relative h-full rounded-[26px] border-2 border-white p-6 shadow-[0_20px_36px_-24px_rgba(15,46,36,.35)] hover:shadow-[0_40px_56px_-28px_rgba(15,46,36,.42)] sm:p-7"
        style={{
          background: `linear-gradient(160deg, #FFFFFF 0%, ${tone.soft} 100%)`,
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transition: "transform .7s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease",
        }}
      >
        {/* glare that follows the cursor */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at var(--gx,50%) var(--gy,0%), rgba(255,255,255,.65), transparent 55%)" }}
        />

        <span
          className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border-2 border-white shadow-[0_12px_18px_-10px_rgba(15,46,36,.45)] transition-shadow duration-300 group-hover:shadow-[0_20px_26px_-10px_rgba(15,46,36,.45)]"
          style={{ ...depth(34), background: tone.tint, color: tone.tick }}
        >
          {f.icon}
        </span>

        <h3 className="text-[18px] font-extrabold leading-snug tracking-tight text-[#0F2E24]" style={depth(20)}>
          {f.t}
        </h3>
        <p className="mt-2 text-[14.5px] font-semibold leading-relaxed text-[#35524A]" style={depth(10)}>
          {f.d}
        </p>
      </div>
    </div>
  );
}

/* 4 cards stay in the right grid, the last 2 move under the text on the left */
const gridFeatures = features.slice(0, 4);
const textFeatures = features.slice(4);

export function WhyUs() {
  return (
    <section id="why" className="section tone-l relative isolate overflow-hidden" aria-labelledby="why-title">
      {/* light ground */}
      {/* same max width as Industries and Process; two equal columns */}
      <div className="mx-auto grid max-w-full items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* left: heading, text, 2 cards, button */}
        <div className="flex min-w-0 flex-col items-start gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-3.5 py-1.5 text-[13px] font-bold text-[#35524A] shadow-[0_8px_16px_-10px_rgba(15,46,36,.35)]">
            <span className="h-2 w-2 rounded-full bg-[#1F6B45]" />
            Why Tawakal Econ?
          </span>
          <h2 id="why-title" className="h2 !mt-0">
            Why You Choose <span className="text-[#7A4F00]">Tawakal Econ</span> For Your Business?
          </h2>
          <p className="text-base font-semibold leading-relaxed text-[#35524A] sm:text-[17px]">
            Choosing the right technology partner can make a significant difference in your business operations. Tawakal Econ combines software development, IT infrastructure, security, and project management to deliver comprehensive technology solutions.
          </p>

          <ul className="mt-2 grid w-full gap-5 sm:grid-cols-2">
            {textFeatures.map((f, i) => (
              <li key={f.t}>
                <Card f={f} tone={tones[(i + gridFeatures.length) % tones.length]} />
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#7A4F00] px-6 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_-8px_rgba(122,79,0,.45)] transition hover:-translate-y-0.5 hover:bg-[#8C5B00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A4F00] sm:text-[15px]"
          >
            Talk to our team <span aria-hidden>→</span>
          </a>
        </div>

        {/* right: 2 x 2 grid, second column sits lower for a staggered feel */}
        <ul className="grid min-w-0 gap-5 sm:grid-cols-2 sm:pb-10">
          {gridFeatures.map((f, i) => (
            <li key={f.t} className={i % 2 === 1 ? "sm:translate-y-10" : ""}>
              <Card f={f} tone={tones[i % tones.length]} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}