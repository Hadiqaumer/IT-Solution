import Icon from "./Icon";
import Carousel3D from "./Carousel3D";

// Palette: Ground #CFE3D2 / #A9C9B4 / #D9D3A8, Ink #0F2E24, Brass #7A4F00,
// Sage #A9CDB4, Gold #E3CF8E, Teal #94C9BE, Clay #E1B497

const industries = ["Restaurants & cafés", "Retail", "Call centers", "Offices", "Hotels", "Clinics"];

/* ---------- section ---------- */
const points = [
  { t: "Software & apps" },
  { t: "Hardware & networking" },
  { t: "CCTV & security" },
  { t: "Installation & training" },
];

export default function Hero() {
  return (
    <section
      className="px-wrap relative overflow-hidden py-8 text-[#0F2E24] lg:py-12"
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
            maskImage: "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 80%)",
          }}
        />
        {[
          ["8%", "18%"], ["44%", "10%"], ["52%", "86%"], ["94%", "24%"], ["40%", "62%"], ["90%", "78%"],
        ].map(([l, t], i) => (
          <span key={i} className="absolute" style={{ left: l, top: t }}>
            <i className="hero-ping absolute h-1.5 w-1.5 rounded-full bg-[#14665A]" style={{ animationDelay: `${i * 0.5}s` }} />
            <i className="absolute h-1.5 w-1.5 rounded-full bg-[#14665A]" />
          </span>
        ))}
      </div>

      <div className="relative grid items-center gap-4 lg:grid-cols-2 lg:gap-12">
        {/* LEFT: content */}
        <div className="flex flex-col items-start gap-4 text-left sm:gap-5">
          <span className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-[12px] font-extrabold tracking-wide text-[#14665A] sm:px-4 sm:py-2 sm:text-[13px] shadow-sm backdrop-blur">
            <i className="h-2 w-2 rounded-full bg-[#1F6B45]" /> Complete IT solutions · one team
          </span>

          <h1 className="h1-fluid">
            Every system your business needs.{" "}
            <span className="text-[#7A4F00]">Connected.</span>
          </h1>

          <p className="max-w-xl text-base font-semibold text-[#0F2E24]/80 sm:text-lg lg:text-xl">
            Software, hardware, networking and security, planned, installed and supported by one team. From a single shop to a multi-branch company.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#7A4F00] px-5 py-3 text-sm font-extrabold text-white sm:px-7 sm:py-3.5 sm:text-[15px] shadow-[0_10px_24px_rgba(122,79,0,.35)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Book a demo <Icon name="arr" size={18} stroke={2.4} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border-2 border-[#7A4F00] px-5 py-3 text-sm font-extrabold text-[#7A4F00] sm:px-7 sm:py-3.5 sm:text-[15px] transition hover:-translate-y-0.5 hover:bg-white/50"
            >
              Explore services
            </a>
          </div>

          <ul className="flex flex-wrap gap-2">
            {points.map((p) => (
              <li
                key={p.t}
                className="flex items-center gap-2 rounded-full border border-[#0F2E24]/15 bg-white/55 px-3 py-1.5 text-[12px] font-extrabold text-[#0F2E24] backdrop-blur transition hover:bg-white/80 sm:px-4 sm:py-2 sm:text-[13px]"
              >
                <span className="hidden shrink-0 text-[#7A4F00] sm:flex"><Icon name="chk" size={16} stroke={2.6} /></span>
                {p.t}
              </li>
            ))}
          </ul>

          <p className="text-[13px] font-semibold text-[#0F2E24]/70 sm:text-[15px]">
            Built for {industries.join(" · ")}
          </p>
        </div>

        {/* RIGHT: 3D slider */}
        <div className="relative">
          <Carousel3D />
        </div>
      </div>
    </section>
  );
}