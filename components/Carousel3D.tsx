"use client";
import { useEffect, useRef, useState } from "react";

export type Slide = { title: string; sub: string; bg: string; img?: string };

const TILT = 8; // top-view angle in degrees (0 = straight on)
const GAP = 1.04; // distance between card centres as a multiple of card width (1 = touching)

const defaultSlides: Slide[] = [
  { title: "POS & Billing", sub: "Fast, accurate sales", bg: "linear-gradient(160deg,#A9CDB4,#1F6B45)", img: "/slides/pos.webp" },
  { title: "Digital Shift Roster", sub: "AI attendance & scheduling", bg: "linear-gradient(160deg,#E3CF8E,#7A5A00)", img: "/slides/roster.webp" },
  { title: "Waiter Alerts", sub: "Call-bell for every table", bg: "linear-gradient(160deg,#94C9BE,#14665A)", img: "/slides/waiter.webp" },
  { title: "CCTV & Security", sub: "Cameras, access & network", bg: "linear-gradient(160deg,#A9CDB4,#0F2E24)", img: "/slides/cctv.webp" },
  { title: "Order Taking", sub: "Phone + WhatsApp orders", bg: "linear-gradient(160deg,#E1B497,#8F4A22)", img: "/slides/order-taking.webp" },
  { title: "Taxi Dispatch", sub: "Driver and ride tracking", bg: "linear-gradient(160deg,#94C9BE,#0F2E24)", img: "/slides/taxi.webp" },
  { title: "Inventory", sub: "Stock and supplier tracking", bg: "linear-gradient(160deg,#E3CF8E,#7A4F00)", img: "/slides/inventory.webp" },
];

export default function Carousel3D({ slides = defaultSlides }: { slides?: Slide[] }) {
  const n = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [W, setW] = useState(1200); // container width
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => setW(el.clientWidth || 1200);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 3200);
    return () => clearInterval(t);
  }, [paused, n]);

  const next = () => setActive((a) => (a + 1) % n);
  const prev = () => setActive((a) => (a - 1 + n) % n);

  // Everything is derived from the container width, so the arc spans the full width
  const mobile = W < 560;
  const compact = W < 900; // half-width column (two-column layout)
  const cardW = mobile ? W * 0.5 : compact ? W * 0.38 : Math.min(W * 0.2, 320);
  const cardH = cardW * 1.5;
  const R = mobile ? W * 0.7 : compact ? W * 0.75 : W * 0.62; // cylinder radius
  const step = ((cardW * GAP) / R) * (180 / Math.PI); // degrees between cards -> tight, even gap
  const u = cardW / 240; // text unit
  const VISIBLE = mobile ? 1 : compact ? 1 : Math.min(3, Math.max(1, Math.floor(n / 2) - 1));

  const offsetOf = (i: number) => {
    let o = (((i - active) % n) + n) % n;
    if (o > n / 2) o -= n;
    return o;
  };

  const tiltRad = (TILT * Math.PI) / 180;

  return (
    <div
      ref={box}
      className="w-full select-none outline-none"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Our IT solutions"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onPointerDown={(e) => (drag.current = { x: e.clientX, moved: false })}
      onPointerUp={(e) => {
        const d = drag.current;
        drag.current = null;
        if (!d) return;
        const dx = e.clientX - d.x;
        if (Math.abs(dx) > 50) {
          dx < 0 ? next() : prev();
          drag.current = { x: 0, moved: true };
          setTimeout(() => (drag.current = null), 0);
        }
      }}
    >
      {/* Clip wrapper (no 3D here) */}
      <div style={{ position: "relative", overflow: compact ? "visible" : "hidden", paddingBlock: `${44 * u}px ${70 * u}px` }}>
        {/* soft floor glow + shadow under the ring */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            bottom: 18 * u,
            width: Math.min(W * 0.9, cardW * 5),
            height: 56 * u,
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse at center, rgba(15,46,36,.38) 0%, rgba(15,46,36,.12) 45%, transparent 72%)",
            filter: "blur(6px)",
          }}
        />

        {/* ONE perspective element; ring is its direct child */}
        <div
          style={{
            position: "relative",
            perspective: `${R * 2}px`,
            perspectiveOrigin: "50% 30%",
            height: cardH,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: cardW,
              height: cardH,
              transformStyle: "preserve-3d",
              transform: `translateY(${-R * Math.sin(tiltRad)}px) translateZ(${-R}px) rotateX(${-TILT}deg)`,
            }}
          >
            {slides.map((sl, i) => {
              const o = offsetOf(i);
              const a = Math.abs(o);
              const hidden = a > VISIBLE;
              const isActive = o === 0;
              return (
                <button
                  key={sl.title}
                  type="button"
                  onClick={() => {
                    if (drag.current?.moved) return;
                    setActive(i);
                  }}
                  aria-label={sl.title}
                  aria-current={isActive}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 24 * u,
                    overflow: "hidden",
                    textAlign: "left",
                    color: "#fff",
                    border: 0,
                    padding: 0,
                    cursor: isActive ? "default" : "pointer",
                    background: sl.img ? `url("${sl.img}") center/cover no-repeat, ${sl.bg}` : sl.bg,
                    // active card pops forward a little
                    transform: `rotateY(${o * step}deg) translateZ(${R + (isActive ? 36 * u : 0)}px)`,
                    opacity: hidden ? 0 : 1,
                    pointerEvents: hidden ? "none" : "auto",
                    backfaceVisibility: "hidden",
                    transition: "transform .9s cubic-bezier(.2,.7,.2,1), opacity .6s, box-shadow .6s",
                    boxShadow: isActive
                      ? `0 ${34 * u}px ${70 * u}px rgba(15,46,36,.45), 0 0 0 ${2 * u}px rgba(255,255,255,.55)`
                      : `0 ${22 * u}px ${46 * u}px rgba(15,46,36,.28), 0 0 0 ${1 * u}px rgba(255,255,255,.25)`,
                  }}
                >
                  {/* depth shading (overlay, not filter, so 3D is not flattened) */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#0F2E24",
                      opacity: Math.min(a * 0.16, 0.42),
                      transition: "opacity .9s",
                    }}
                  />
                  {/* glossy sheen */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(115deg, rgba(255,255,255,.28) 0%, rgba(255,255,255,.06) 28%, transparent 46%)",
                      mixBlendMode: "soft-light",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: `${70 * u}px ${20 * u}px ${20 * u}px`,
                      background: "linear-gradient(to top, rgba(15,46,36,.78), transparent)",
                    }}
                  >
                    <b style={{ display: "block", fontSize: 22 * u, fontWeight: 800, lineHeight: 1.1 }}>{sl.title}</b>
                    <small style={{ fontSize: 13 * u, opacity: 0.9 }}>{sl.sub}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pt-1">
        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="h-10 w-10 rounded-full bg-white/80 text-lg font-bold text-[#0F2E24] shadow transition hover:bg-white"
        >
          ‹
        </button>
        <div className="flex gap-2">
          {slides.map((sl, i) => (
            <button
              key={sl.title}
              type="button"
              aria-label={`Go to ${sl.title}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-7 bg-[#7A4F00]" : "w-2 bg-[#0F2E24]/25"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="h-10 w-10 rounded-full bg-white/80 text-lg font-bold text-[#0F2E24] shadow transition hover:bg-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}