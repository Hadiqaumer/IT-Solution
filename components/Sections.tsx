"use client";

import { useEffect, useRef, useState } from "react";
import Icon, { type IconName } from "./Icon";
import Roster from "./Roster";
import { services, tints } from "@/lib/site";

/* Shared helper: layers sit at different depths (translateZ) so they separate as a card tilts */
const depth = (z: number): React.CSSProperties => ({ transform: `translateZ(${z}px)` });

/* ───────────────────────── Trust ───────────────────────── */

const items = ["Certified Experts", "ISO 27001 Certified", "24/7 Support", "Global Reach"];

export function Trust() {
  return (
    <section className="px-wrap relative z-10 pb-8 pt-2 lg:pb-10" aria-label="Why choose us">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-4 rounded-3xl border border-white bg-white/90 px-5 py-4 shadow-[0_18px_40px_-26px_rgba(15,46,36,.4)] sm:px-9 lg:grid-cols-4 lg:gap-6">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-3 text-[13px] font-extrabold text-[#0F2E24] sm:text-[15px] lg:justify-center">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7A4F00]/10 text-[#7A4F00]">
              <Icon name="chk" size={16} stroke={2.6} />
            </span>
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────────────────── Industries (minimal 3D cards) ───────────────────────── */

type Industry = {
  name: string;
  text: string;
  link: string;
  href: string;
  icon: IconName;
  img?: string;
  tint: string; // photo window + icon badge
  soft: string; // card surface
  tick: string; // accent text / arrow
};

const industries: Industry[] = [
  {
    name: "Restaurants and cafés",
    text: "Run the floor, kitchen and counter from one system, and always know who is on shift.",
    link: "See restaurant solutions",
    href: "#contact",
    icon: "hat",
    img: "/industries/restaurant.webp",
    tint: "#A9CDB4",
    soft: "#E4F0E7",
    tick: "#1F6B45",
  },
  {
    name: "Retail Stores & Supermarkets",
    text: "Faster checkout, accurate stock and a clear view of every aisle, till and employee.",
    link: "See retail solutions",
    href: "#contact",
    icon: "ai",
    img: "/industries/retail.webp",
    tint: "#E3CF8E",
    soft: "#F7F0D3",
    tick: "#7A5A00",
  },
  {
    name: "Corporate Offices",
    text: "Keep teams, doors and networks secure with attendance, access control and IT support.",
    link: "See office solutions",
    href: "#contact",
    icon: "ai",
    img: "/industries/corporate.webp",
    tint: "#94C9BE",
    soft: "#DDF0EB",
    tick: "#14665A",
  },
  {
    name: "Healthcare Facilities",
    text: "Shorter waiting rooms, protected patient data and clear duty rosters for clinics.",
    link: "See healthcare solutions",
    href: "#contact",
    icon: "ai",
    img: "/industries/healthcare.webp",
    tint: "#E1B497",
    soft: "#F8E7DB",
    tick: "#8F4A22",
  },
];

/* Light placeholder if the image is missing or fails to load */
function IndustryImage({ src, alt, icon }: { src?: string; alt: string; icon: IconName }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div aria-hidden="true" className="grid h-full w-full place-items-center text-[#0F2E24]/25">
        <Icon name={icon} size={64} />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

function IndustryCard({ c }: { c: Industry }) {
  const move = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transition = "transform .15s ease-out, box-shadow .4s ease";
    el.style.setProperty("--ry", `${(px - 0.5) * 16}deg`);
    el.style.setProperty("--rx", `${(0.5 - py) * 16}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const leave = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.transition = "transform .7s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease";
    el.style.removeProperty("--rx");
    el.style.removeProperty("--ry");
  };

  return (
    <li className="[perspective:1100px]">
      <a
        href={c.href}
        onPointerMove={move}
        onPointerLeave={leave}
        aria-label={`${c.name}: ${c.link}`}
        className="group relative block rounded-[28px] border-2 border-white p-3.5 shadow-[0_22px_38px_-24px_rgba(15,46,36,.35)] hover:shadow-[0_44px_60px_-28px_rgba(15,46,36,.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A4F00]"
        style={{
          background: c.soft,
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transition: "transform .7s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease",
        }}
      >
        {/* light glare that follows the cursor */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(circle at var(--gx,50%) var(--gy,0%), rgba(255,255,255,.6), transparent 55%)",
          }}
        />

        {/* photo window floats forward; badge pops out of it */}
        <div className="relative" style={{ ...depth(36), transformStyle: "preserve-3d" }}>
          <div
            className="aspect-[5/4] overflow-hidden rounded-[20px] shadow-[0_18px_28px_-16px_rgba(15,46,36,.45)]"
            style={{ background: `linear-gradient(135deg, ${c.tint}, #F6F1D6)` }}
          >
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
              <IndustryImage src={c.img} alt={c.name} icon={c.icon} />
            </div>
          </div>
          <span
            className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-2xl border-2 border-white shadow-[0_14px_20px_-10px_rgba(15,46,36,.5)]"
            style={{ ...depth(34), background: c.tint, color: c.tick }}
          >
            <Icon name={c.icon} />
          </span>
        </div>

        {/* text */}
        <div className="px-2 pb-1.5 pt-5" style={depth(24)}>
          <h3 className="text-[19px] font-extrabold leading-tight tracking-tight text-[#0F2E24]">{c.name}</h3>
          <p className="mt-2 text-[14.5px] font-semibold leading-snug text-[#35524A]">{c.text}</p>
        </div>

        {/* arrow: fills with the accent colour on hover and the arrow turns white */}
        <div
          className="flex items-center justify-between px-2 pb-1.5 pt-3"
          style={{ ...depth(30), ["--tick" as string]: c.tick } as React.CSSProperties}
        >
          <span className="text-[13.5px] font-extrabold text-[var(--tick)]">{c.link}</span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--tick)] shadow-[0_10px_16px_-8px_rgba(15,46,36,.4)] transition-colors duration-300 group-hover:bg-[var(--tick)] group-hover:text-white">
            <Icon name="arr" size={16} stroke={2.4} />
          </span>
        </div>
      </a>
    </li>
  );
}

export function Industries() {
  return (
    <section id="industries" className="section tone-l relative isolate overflow-hidden">
      {/* light ground */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="h2">
          Made for <span className="text-[#7A4F00]">your</span> kind of business
        </h2>
        <p className="mt-4 text-[16px] font-semibold leading-relaxed text-[#35524A]">
          Pick your industry to see the software and services that fit it.
        </p>
      </div>

      <ul className="mx-auto mt-9 grid max-w-full gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((c) => (
          <IndustryCard key={c.name} c={c} />
        ))}
      </ul>

      <p className="mt-8 text-center text-[15px] font-bold text-[#35524A]">
        Don’t see your industry?{" "}
        <a href="#contact" className="text-[#7A4F00] underline decoration-[#7A4F00]/40 underline-offset-4 hover:decoration-[#7A4F00]">
          Tell us what you run
        </a>
      </p>
    </section>
  );
}

/* ───────────────────────── Photo ───────────────────────── */

function Photo({ src, alt, zoom = false }: { src?: string; alt: string; zoom?: boolean }) {
  if (!src) {
    return (
      <div
        aria-hidden="true"
        className="grid h-full w-full place-items-center bg-gradient-to-br from-[#D3E6D7] to-[#E9E6C4] text-[11px] font-bold text-[#0F2E24]/40"
      >
        Add photo
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
        zoom ? "group-hover:scale-105" : ""
      }`}
    />
  );
}

/* ───────────────────────── Services (glass grid) ───────────────────────── */

const pad = (n: number) => String(n).padStart(2, "0");

function ServiceCard({
  s,
  index,
  total,
  t,
}: {
  s: (typeof services)[number];
  index: number;
  total: number;
  t: (typeof tints)[number];
}) {
  return (
    <li className="relative flex flex-col overflow-hidden rounded-[30px] border border-white/70 bg-white/45 p-3 text-ink shadow-[0_36px_60px_-30px_rgba(15,46,36,.3),inset_0_1px_0_rgba(255,255,255,.9)] backdrop-blur-2xl backdrop-saturate-150">
      {/* image (short) */}
      <div className="relative h-[150px] flex-none overflow-hidden rounded-[22px] bg-[#D3E6D7] sm:h-[170px]">
        <Photo src={s.cover} alt={`${s.name} cover`} />
      </div>

      {/* details */}
      <div className="relative flex flex-1 flex-col px-4 pb-3 pt-6">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-0 select-none text-[110px] font-extrabold leading-none text-brass/10"
        >
          {s.n}
        </span>

        <h3 className="relative mt-3 text-[22px] font-extrabold leading-[1.1] tracking-tight">{s.name}</h3>
        <p className="relative mt-3 text-[14.5px] font-medium leading-relaxed text-muted">{s.text}</p>

        <p className="relative mt-5 text-[13px] font-extrabold">Key features</p>
        <ul className="relative mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
          {s.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-[13px] font-bold leading-snug">
              <span className={`mt-px grid h-5 w-5 flex-none place-items-center rounded-full ${t.bg} ${t.fg}`}>
                <Icon name="chk" size={12} stroke={3} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* footer pinned to the bottom so all cards line up */}
        <div className="relative mt-auto flex items-center gap-3 border-t border-ink/10 pt-5">
          <a
            href="#contact"
            className="group/cta flex flex-1 items-center justify-between rounded-full bg-brass py-1.5 pl-5 pr-1.5 text-[14px] font-extrabold text-white transition-colors hover:bg-ink"
          >
            {s.cta}
            <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white/90 text-brass transition-colors group-hover/cta:text-ink">
              <Icon name="arr" size={16} stroke={2.4} />
            </span>
          </a>
          <span className="flex-none text-[12.5px] font-bold text-ink/70">
            {pad(index + 1)} / {pad(total)}
          </span>
        </div>
      </div>
    </li>
  );
}

export function Services() {
  return (
    <section id="services" className="section tone-l relative isolate overflow-hidden">
      {/* sage background like the hero (gradient + faint grid + soft colour blobs for the glass to blur) */}
      <div className="max-w-3xl">
        <p className="eyebrow">Our solutions</p>
        <h2 className="h2">
          Technology Solutions Designed to <span className="text-brass">Move Your Business Forward</span>
        </h2>
        <p className="lead mt-3">
          We bring software, hardware, security, and intelligent automation together to create reliable technology
          ecosystems for modern businesses.
        </p>
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <ServiceCard key={s.n} s={s} index={i} total={services.length} t={tints[i % 4]} />
        ))}
      </ul>
    </section>
  );
}

/* ───────────────────────── Attendance ───────────────────────── */

export function Attendance() {
  return (
    <section id="attendance" className="section grid items-center gap-16 bg-white/40 lg:grid-cols-2">
      <div>
        <p className="eyebrow">AI attendance software</p>
        <h2 className="h2">
          Know who is on shift. <span className="text-brass">Instantly.</span>
        </h2>
        <p className="lead mt-3">
          Staff check in by face at the door. You see the live roster, late arrivals and overtime without paperwork.
        </p>
        <ul className="my-8 space-y-3.5 text-[17px] font-bold">
          {["Face check-in at the door", "Live shift roster", "Late and overtime alerts", "Payroll-ready reports"].map(
            (t) => (
              <li key={t} className="flex items-center gap-3">
                <Icon name="chk" size={18} stroke={2.6} className="text-[#1F6B45]" />
                {t}
              </li>
            )
          )}
        </ul>
        <a href="#contact" className="btn">
          See attendance demo
        </a>
      </div>
      <div className="panel p-7 lg:[transform:perspective(1400px)_rotateY(-10deg)_rotateX(4deg)]">
        <div className="flex items-center justify-between pb-3">
          <b className="text-lg">Today&apos;s attendance</b>
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-[#5A4200]">Payroll-ready</span>
        </div>
        <Roster />
        <p className="mt-2 rounded-2xl bg-[#EEF5F0] p-3.5 text-[13px] font-semibold text-muted">
          Illustrative screen · replace with a real product screenshot
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */

type Step = { title: string; text: string; tint: string; soft: string; tick: string };

const processSteps: Step[] = [
  {
    title: "Understand Your Business",
    text: "We learn about your operations, challenges, and technology requirements.",
    tint: "#A9CDB4", soft: "#E4F0E7", tick: "#1F6B45", // sage
  },
  {
    title: "Plan the Right Solution",
    text: "We recommend suitable software, hardware, security, and integration options.",
    tint: "#E3CF8E", soft: "#F7F0D3", tick: "#7A5A00", // gold
  },
  {
    title: "Installation & Configuration",
    text: "Our team works on deploying and configuring the required systems.",
    tint: "#94C9BE", soft: "#DDF0EB", tick: "#14665A", // teal
  },
  {
    title: "Integration & Testing",
    text: "We connect the relevant technologies and verify their functionality.",
    tint: "#E1B497", soft: "#F8E7DB", tick: "#8F4A22", // clay
  },
  {
    title: "Technical Support",
    text: "We provide assistance to help your business maintain reliable technology operations.",
    tint: "#A9CDB4", soft: "#E4F0E7", tick: "#1F6B45", // sage again
  },
];

/* Card tilts toward the cursor; the title and text sit at different depths.
   Tilt goes straight to CSS variables, so React never re-renders on mouse move. */
function StepCard({ s }: { s: Step }) {
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
        className="group relative h-full rounded-[24px] border-2 border-white p-5 shadow-[0_20px_36px_-24px_rgba(15,46,36,.35)] hover:shadow-[0_38px_54px_-28px_rgba(15,46,36,.42)] sm:p-6"
        style={{
          background: `linear-gradient(160deg, #FFFFFF 0%, ${s.soft} 100%)`,
          transformStyle: "preserve-3d",
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transition: "transform .7s cubic-bezier(.2,.8,.2,1), box-shadow .4s ease",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at var(--gx,50%) var(--gy,0%), rgba(255,255,255,.65), transparent 55%)" }}
        />
        <h3 className="text-[18px] font-extrabold leading-snug tracking-tight text-[#0F2E24]" style={depth(24)}>
          {s.title}
        </h3>
        <p className="mt-2 text-[14.5px] font-semibold leading-relaxed text-[#35524A]" style={depth(12)}>
          {s.text}
        </p>
      </div>
    </div>
  );
}

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const [shown, setShown] = useState(false);

  /* draw the connecting line once, when the steps scroll into view */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const fill = "linear-gradient(90deg, #A9CDB4, #E3CF8E 55%, #7A4F00)";
  const fillV = "linear-gradient(180deg, #A9CDB4, #E3CF8E 55%, #7A4F00)";

  return (
    <section id="how" className="section tone-g relative isolate overflow-hidden" aria-labelledby="how-title">
      {/* light ground */}
      <div className="mx-auto max-w-full">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-3.5 py-1.5 text-[13px] font-bold text-[#35524A] shadow-[0_8px_16px_-10px_rgba(15,46,36,.35)]">
            <span className="h-2 w-2 rounded-full bg-[#1F6B45]" />
            Our working process
          </span>
          <h2 id="how-title" className="h2 mt-5">
            From Your Requirements to <span className="text-[#7A4F00]">Complete Technology Implementation</span>
          </h2>
        </div>

        <ol ref={listRef} className="relative mt-9 grid gap-6 lg:grid-cols-5 lg:gap-5">
          {/* connecting line: vertical on phones, horizontal on desktop */}
          <span aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-[3px] -translate-x-1/2 rounded-full bg-[#0F2E24]/10 lg:hidden" />
          <span
            aria-hidden="true"
            className="absolute bottom-7 left-7 top-7 w-[3px] origin-top rounded-full lg:hidden"
            style={{ background: fillV, transform: `translateX(-50%) scaleY(${shown ? 1 : 0})`, transition: "transform 1.4s cubic-bezier(.3,.7,.2,1)" }}
          />
          <span aria-hidden="true" className="absolute left-7 right-0 top-7 hidden h-[3px] -translate-y-1/2 rounded-full bg-[#0F2E24]/10 lg:block" />
          <span
            aria-hidden="true"
            className="absolute left-7 right-0 top-7 hidden h-[3px] origin-left rounded-full lg:block"
            style={{ background: fill, transform: `translateY(-50%) scaleX(${shown ? 1 : 0})`, transition: "transform 1.4s cubic-bezier(.3,.7,.2,1)" }}
          />

          {processSteps.map((s, i) => (
            <li key={s.title} className="relative flex gap-4 lg:flex-col lg:gap-6">
              {/* step number sits on the line */}
              <span
                className="relative z-10 grid h-14 w-14 flex-none place-items-center rounded-full border-[3px] border-white text-[18px] font-extrabold shadow-[0_14px_22px_-10px_rgba(15,46,36,.45)]"
                style={{ background: s.tint, color: s.tick }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <StepCard s={s} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}