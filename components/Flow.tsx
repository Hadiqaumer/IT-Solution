"use client";
// Flow.tsx: "AI Brain Software"
// Centre: heading + intro. Left: big 3D carousel. Right: content that changes with the front slide.
// Needs FeatureCarousel.tsx in the same folder (your hero Carousel3D is not touched).
import { useState } from "react";
import FeatureCarousel, { type Slide } from "./FeatureCarousel";

const SOFTWARE = "AI Brain Software";

/* One entry per module. Slide order = content order. Edit the text freely. */
const modules = [
  {
    slide: { title: "POS & Billing", sub: "Fast, accurate sales", bg: "linear-gradient(160deg,#A9CDB4,#1F6B45)", img: "/slides/pos.webp" } as Slide,
    tint: "#D3E8DA",
    tick: "#1F6B45",
    text: "Fast, accurate billing at the counter. Every sale updates stock and accounts on its own and shows up in live reports.",
    features: ["Quick billing and receipts", "Stock updates on every sale", "Live sales reports", "Works across branches"],
    link: "Ask about POS & Billing",
  },
  {
    slide: { title: "CCTV & Security", sub: "Cameras, alerts, access", bg: "linear-gradient(160deg,#E3CF8E,#7A5A00)", img: "/slides/cctv.webp" } as Slide,
    tint: "#F3EAC4",
    tick: "#7A5A00",
    text: "Camera footage and alerts sit beside your sales and attendance records, so you can see what happened and when.",
    features: ["Live camera view", "Motion alerts", "Search by date and time", "Access and network monitoring"],
    link: "Ask about CCTV & Security",
  },
  {
    slide: { title: "Restaurant", sub: "Tables, kitchen and bills", bg: "linear-gradient(160deg,#94C9BE,#14665A)", img: "/slides/waiter.webp" } as Slide,
    tint: "#CBE7E0",
    tick: "#14665A",
    text: "Table orders reach the kitchen screen, the bill and the stock count together, with nothing typed twice.",
    features: ["Table and phone orders", "Kitchen display screen", "Waiter call alerts", "Split bills"],
    link: "Ask about Restaurant",
  },
  {
    slide: { title: "Attendance", sub: "Face check-in and shifts", bg: "linear-gradient(160deg,#E1B497,#8F4A22)", img: "/slides/roster.webp" } as Slide,
    tint: "#F3DCCD",
    tick: "#8F4A22",
    text: "Check-ins and shifts come from the same staff records used for reports and door access.",
    features: ["Face check-in at the door", "Live shift roster", "Late and overtime alerts", "Payroll-ready reports"],
    link: "Ask about Attendance",
  },
  {
    slide: { title: "Inventory", sub: "Stock and supplier tracking", bg: "linear-gradient(160deg,#A9CDB4,#0F2E24)", img: "/slides/inventory.webp" } as Slide,
    tint: "#E7F1E4",
    tick: "#1F6B45",
    text: "Stock, purchases and expenses stay current from every sale at every branch.",
    features: ["Multi-branch stock", "Supplier tracking", "Purchases and expenses", "Low-stock alerts"],
    link: "Ask about Inventory",
  },
];

const slides: Slide[] = modules.map((m) => m.slide);
const benefits = ["Budget friendly", "One connected system", "Grow at your pace"];

export function Flow() {
  const [i, setI] = useState(0);
  const m = modules[i] ?? modules[0];

  return (
    <section id="platform" className="section tone-g relative isolate overflow-hidden">
      <style>{`
        @keyframes flowIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
        .flow-in{animation:flowIn .55s cubic-bezier(.2,.7,.2,1) both}
        @media (prefers-reduced-motion:reduce){.flow-in{animation:none}}
      `}</style>

      {/* centre: heading + intro */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="h2">
          AI <span className="text-[#7A4F00]">Brain</span> Software
        </h2>
        <p className="mt-4 text-[16px] font-semibold leading-relaxed text-[#35524A] md:text-[17px]">
          One connected software for sales, security, kitchen, staff and stock. Pay for one system, not five, and switch on more modules as you grow.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-full items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
        {/* LEFT: big carousel (side cards are clipped at the column edge) */}
        <div className="min-w-0 overflow-hidden px-1 py-4">
          <FeatureCarousel slides={slides} onActiveChange={setI} />
        </div>

        {/* RIGHT: content follows the front slide */}
        <div className="min-w-0">
          <div
            key={i}
            className="flow-in lg:min-h-[430px]"
            aria-live="polite"
          >
            <h3 className="text-[28px] font-extrabold leading-tight tracking-tight text-[#0F2E24]">{m.slide.title}</h3>
            <p className="mt-3 text-[15.5px] font-semibold leading-relaxed text-[#35524A]">{m.text}</p>

            <ul className="mt-5 grid gap-2.5">
              {m.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-[15px] font-bold text-[#0F2E24]">
                  <span
                    aria-hidden="true"
                    className="grid h-6 w-6 flex-none place-items-center rounded-full text-[12px] font-extrabold"
                    style={{ color: m.tick, background: m.tint }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <p className="mt-5 border-l-4 pl-4 text-[13.5px] font-semibold leading-snug text-[#35524A]" style={{ borderColor: m.tick }}>
              <b className="block text-[12.5px] font-extrabold text-[#7A4F00]">Part of {SOFTWARE}</b>
              Shares the same records as the other four modules, so nothing is entered twice.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center rounded-full border-2 border-[#7A4F00] px-5 py-2.5 text-[14.5px] font-bold text-[#7A4F00] transition hover:bg-[#7A4F00] hover:text-white"
            >
              {m.link}
            </a>
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {benefits.map((b) => (
              <li key={b} className="rounded-full bg-white/80 px-4 py-1.5 text-[13px] font-bold text-[#0F2E24]">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[#7A4F00] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_18px_26px_-14px_rgba(122,79,0,.75)] transition hover:bg-[#0F2E24]"
        >
          See how it fits your business
        </a>
      </div>
    </section>
  );
}