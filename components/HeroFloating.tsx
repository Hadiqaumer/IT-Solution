import type { ReactNode } from "react";
import Icon from "./Icon";
import Carousel3D from "./Carousel3D";

// Option B: centered content, floating glass IT widgets on left/right, full-width 3D slider below.
// Palette: Ground #CFE3D2 / #A9C9B4 / #D9D3A8, Ink #0F2E24, Brass #7A4F00,
// Sage #A9CDB4, Gold #E3CF8E, Teal #94C9BE, Clay #E1B497

const industries = ["Restaurants & cafés", "Retail", "Call centers", "Offices", "Hotels", "Clinics"];

/* ---------- glass shell ---------- */
function Glass({ children, delay, dark = false }: { children: ReactNode; delay: string; dark?: boolean }) {
  return (
    <div
      className="hero-float relative w-full overflow-hidden rounded-2xl border p-3 text-left"
      style={{
        animationDelay: delay,
        borderColor: dark ? "rgba(255,255,255,.22)" : "rgba(255,255,255,.65)",
        background: dark
          ? "linear-gradient(135deg, rgba(15,46,36,.82), rgba(15,46,36,.62))"
          : "linear-gradient(135deg, rgba(255,255,255,.6), rgba(255,255,255,.2))",
        backdropFilter: "blur(16px) saturate(160%)",
        WebkitBackdropFilter: "blur(16px) saturate(160%)",
        boxShadow: "0 14px 32px rgba(15,46,36,.2), inset 0 1px 0 rgba(255,255,255,.55)",
      }}
    >
      {children}
    </div>
  );
}

/* ---------- IT widgets ---------- */
function TerminalWidget({ delay }: { delay: string }) {
  return (
    <Glass dark delay={delay}>
      <div className="mb-2 flex items-center gap-1.5">
        <i className="h-2 w-2 rounded-full bg-[#E1B497]" />
        <i className="h-2 w-2 rounded-full bg-[#E3CF8E]" />
        <i className="h-2 w-2 rounded-full bg-[#A9CDB4]" />
        <span className="ml-auto font-mono text-[9px] tracking-wider text-white/50">setup.sh</span>
      </div>
      <div className="space-y-1 font-mono text-[10.5px] leading-snug text-[#CFE3D2]">
        <div><span className="text-[#E3CF8E]">$</span> install --pos --wifi</div>
        <div className="text-[#94C9BE]">✓ POS installed</div>
        <div className="text-[#94C9BE]">✓ Network secured</div>
        <div><span className="text-[#E3CF8E]">$</span> <span className="hero-blink">▍</span></div>
      </div>
    </Glass>
  );
}

function NetworkWidget({ delay }: { delay: string }) {
  return (
    <Glass delay={delay}>
      <div className="mb-2 flex items-center justify-between">
        <b className="text-[12px] font-extrabold text-[#0F2E24]">Network</b>
        <span className="flex items-center gap-1 rounded-full bg-[#CFE8D8] px-2 py-0.5 text-[9px] font-extrabold text-[#14532D]">
          <i className="h-1.5 w-1.5 rounded-full bg-[#1F6B45]" /> Online
        </span>
      </div>
      <svg viewBox="0 0 150 56" className="w-full" aria-hidden="true">
        <g stroke="#14665A" strokeWidth="1.5" strokeDasharray="3 3" opacity=".7">
          <line x1="75" y1="14" x2="25" y2="42" />
          <line x1="75" y1="14" x2="75" y2="42" />
          <line x1="75" y1="14" x2="125" y2="42" />
        </g>
        <circle cx="75" cy="14" r="9" fill="#7A4F00" />
        <circle cx="75" cy="14" r="3" fill="#fff" />
        {[25, 75, 125].map((x) => (
          <g key={x}>
            <circle cx={x} cy="42" r="7" fill="#94C9BE" stroke="#14665A" strokeWidth="1.5" />
            <circle cx={x} cy="42" r="2.2" fill="#14665A" />
          </g>
        ))}
      </svg>
      <div className="mt-1 flex justify-between font-mono text-[9px] font-bold text-[#0F2E24]/60">
        <span>HQ</span><span>Branch 1 · 2 · 3</span>
      </div>
    </Glass>
  );
}

function CctvWidget({ delay }: { delay: string }) {
  const c = "absolute h-2.5 w-2.5 border-white/70";
  return (
    <Glass delay={delay}>
      <div className="relative h-[74px] overflow-hidden rounded-lg" style={{ background: "linear-gradient(135deg,#0F2E24,#14665A 60%,#94C9BE)" }}>
        <span className="absolute bottom-0 left-3 h-8 w-5 rounded-t-md bg-white/10" />
        <span className="absolute bottom-0 left-10 h-11 w-6 rounded-t-md bg-white/15" />
        <span className="absolute bottom-0 right-5 h-6 w-8 rounded-t-md bg-white/10" />
        <span className={`${c} left-1.5 top-1.5 border-l-2 border-t-2`} />
        <span className={`${c} right-1.5 top-1.5 border-r-2 border-t-2`} />
        <span className={`${c} bottom-1.5 left-1.5 border-b-2 border-l-2`} />
        <span className={`${c} bottom-1.5 right-1.5 border-b-2 border-r-2`} />
        <span className="absolute left-3 top-2.5 flex items-center gap-1 font-mono text-[8px] font-bold text-white">
          <i className="hero-blink h-1.5 w-1.5 rounded-full bg-[#E1766A]" /> REC
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <b className="text-[12px] font-extrabold text-[#0F2E24]">CCTV</b>
        <span className="font-mono text-[9px] font-bold text-[#0F2E24]/60">CAM 02 · LIVE</span>
      </div>
    </Glass>
  );
}

function SupportWidget({ delay }: { delay: string }) {
  return (
    <Glass delay={delay}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-[9px] font-bold text-[#0F2E24]/55">TICKET #1042</span>
        <span className="flex items-center gap-1 rounded-full bg-[#E3CF8E] px-2 py-0.5 text-[9px] font-extrabold text-[#7A5A00]">✓ Resolved</span>
      </div>
      <b className="block text-[12px] font-extrabold leading-tight text-[#0F2E24]">Remote support</b>
      <small className="mt-0.5 block text-[10.5px] font-semibold text-[#0F2E24]/65">Printer + POS fixed remotely</small>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#0F2E24]/10">
        <div className="h-full w-full rounded-full" style={{ background: "linear-gradient(90deg,#94C9BE,#1F6B45)" }} />
      </div>
    </Glass>
  );
}

/* ---------- section ---------- */
export default function HeroFloating() {
  return (
    <section
      className="relative overflow-hidden px-6 py-16 text-[#0F2E24] lg:px-[72px] lg:py-24"
      style={{ background: "linear-gradient(135deg,#CFE3D2 0%,#A9C9B4 50%,#D9D3A8 100%)" }}
    >
      <style>{`
        @keyframes heroFloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        @keyframes heroBlink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
        @keyframes heroPing { 0% { transform: scale(1); opacity: .7 } 100% { transform: scale(3.2); opacity: 0 } }
        .hero-float { animation: heroFloat 6s ease-in-out infinite; }
        .hero-blink { animation: heroBlink 1.1s steps(1) infinite; }
        .hero-ping { animation: heroPing 2.4s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .hero-float, .hero-blink, .hero-ping { animation: none; } }
      `}</style>

      {/* tech background: grid + glow + network nodes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full" style={{ background: "radial-gradient(circle,rgba(255,255,255,.55),transparent 65%)" }} />
        <div className="absolute -right-32 top-24 h-[460px] w-[460px] rounded-full" style={{ background: "radial-gradient(circle,rgba(227,207,142,.6),transparent 65%)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,46,36,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(15,46,36,.07) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 35%, #000 0%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, #000 0%, transparent 75%)",
          }}
        />
        {[
          ["12%", "30%"], ["30%", "12%"], ["70%", "10%"], ["88%", "38%"], ["22%", "52%"], ["78%", "55%"],
        ].map(([l, t], i) => (
          <span key={i} className="absolute" style={{ left: l, top: t }}>
            <i className="hero-ping absolute h-1.5 w-1.5 rounded-full bg-[#14665A]" style={{ animationDelay: `${i * 0.5}s` }} />
            <i className="absolute h-1.5 w-1.5 rounded-full bg-[#14665A]" />
          </span>
        ))}
      </div>

      <div className="relative grid items-center gap-10 xl:grid-cols-[190px_1fr_190px] xl:gap-10">
        {/* left widgets */}
        <div className="hidden flex-col gap-6 xl:flex">
          <TerminalWidget delay="0s" />
          <div className="ml-5"><NetworkWidget delay="-2.5s" /></div>
        </div>

        {/* content */}
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <span className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 font-mono text-[12px] font-bold tracking-wide text-[#14665A] shadow-sm backdrop-blur">
            <i className="h-2 w-2 rounded-full bg-[#1F6B45]" /> Complete IT solutions · one team
          </span>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight lg:text-6xl 2xl:text-7xl">
            Every system your business needs.{" "}
            <span className="text-[#7A4F00]">Connected.</span>
          </h1>

          <p className="max-w-3xl text-lg font-semibold text-[#0F2E24]/80 lg:text-xl">
            Software, hardware, networking and security, planned, installed and supported by one team. From a single shop to a multi-branch company.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#7A4F00] px-7 py-3.5 text-[15px] font-extrabold text-white shadow-[0_10px_24px_rgba(122,79,0,.35)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Book a demo <Icon name="arr" size={18} stroke={2.4} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-[#7A4F00] px-7 py-3.5 text-[15px] font-extrabold text-[#7A4F00] transition hover:-translate-y-0.5 hover:bg-white/50"
            >
              Explore services
            </a>
          </div>

          {/* below xl: widgets sit in a grid under the buttons */}
          <div className="grid w-full max-w-md grid-cols-1 gap-3 pt-2 text-left sm:grid-cols-2 xl:hidden">
            <TerminalWidget delay="0s" />
            <NetworkWidget delay="-1.5s" />
            <CctvWidget delay="-3s" />
            <SupportWidget delay="-4.5s" />
          </div>

          <p className="pt-1 font-mono text-[12px] font-bold tracking-wide text-[#0F2E24]/60">
            Built for {industries.join(" · ")}
          </p>
        </div>

        {/* right widgets */}
        <div className="hidden flex-col gap-6 xl:flex">
          <div className="mr-5"><CctvWidget delay="-1s" /></div>
          <SupportWidget delay="-3.5s" />
        </div>
      </div>

      {/* 3D convex slider, full width */}
      <div className="relative -mx-6 pt-10 lg:-mx-[72px] lg:pt-14">
        <Carousel3D />
      </div>
    </section>
  );
}