"use client";
// FeatureCarousel.tsx: separate carousel for the AI Brain section (hero Carousel3D is untouched).
// Design: round stage under the cards, light side cards, counter chip, glass caption,
// progress-bar dots that fill while the slide is on screen, round brass arrow buttons.
import { useEffect, useRef, useState } from "react";

export type Slide = { title: string; sub: string; bg: string; img?: string };

const TILT = 8; // top-view angle in degrees (0 = straight on)
const GAP = 1.06; // spacing between cards (1 = touching)
const RATIO = 1.18; // card height / width
const RADIUS = 18; // corner roundness (smaller = squarer)
const DELAY = 4200; // ms per slide

export default function FeatureCarousel({
  slides,
  onActiveChange,
}: {
  slides: Slide[];
  onActiveChange?: (index: number) => void;
}) {
  const n = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [W, setW] = useState(900);
  const box = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; moved: boolean } | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const update = () => setW(el.clientWidth || 900);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  // one timer per slide, so the progress bar and the slide change stay in sync
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % n), DELAY);
    return () => clearTimeout(t);
  }, [active, paused, n]);

  const next = () => setActive((a) => (a + 1) % n);
  const prev = () => setActive((a) => (a - 1 + n) % n);

  const mobile = W < 560;
  const cardW = mobile ? W * 0.72 : Math.min(W * 0.54, 440);
  const cardH = cardW * RATIO;
  const R = mobile ? W * 0.7 : W * 0.75;
  const step = ((cardW * GAP) / R) * (180 / Math.PI);
  const u = cardW / 240; // size unit
  const t = Math.min(u, 1.25); // text unit

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
      aria-label="AI Brain Software modules"
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
      <style>{`
        @keyframes fcFill{from{width:0}to{width:100%}}
        @keyframes fcSwap{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @media (prefers-reduced-motion:reduce){.fc-fill{animation:none!important;width:100%!important}.fc-swap{animation:none!important}}
      `}</style>

      <div style={{ position: "relative", paddingBlock: `${40 * t}px ${70 * t}px` }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "50%",
            bottom: 18 * t,
            width: cardW * 1.25,
            height: 30 * t,
            transform: "translateX(-50%)",
            background: "radial-gradient(ellipse at center, rgba(15,46,36,.34) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />

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
              const hidden = a > 1;
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
                    borderRadius: RADIUS * u,
                    overflow: "hidden",
                    textAlign: "left",
                    color: "#0F2E24",
                    border: 0,
                    padding: 0,
                    cursor: isActive ? "default" : "pointer",
                    background: sl.img ? `url("${sl.img}") center/cover no-repeat, ${sl.bg}` : sl.bg,
                    transform: `rotateY(${o * step}deg) translateZ(${R + (isActive ? 40 * u : 0)}px)`,
                    opacity: hidden ? 0 : 1,
                    pointerEvents: hidden ? "none" : "auto",
                    backfaceVisibility: "hidden",
                    transition: "transform .9s cubic-bezier(.2,.7,.2,1), opacity .6s, box-shadow .6s",
                    boxShadow: isActive
                      ? `0 ${36 * u}px ${70 * u}px rgba(15,46,36,.4), 0 0 0 ${4 * u}px #fff`
                      : `0 ${22 * u}px ${46 * u}px rgba(15,46,36,.22), 0 0 0 ${3 * u}px rgba(255,255,255,.7)`,
                  }}
                >
                  {/* light wash on side cards (keeps the airy look) */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "#E6F1E8",
                      opacity: Math.min(a * 0.32, 0.5),
                      transition: "opacity .9s",
                    }}
                  />
                  {/* soft top sheen */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(160deg, rgba(255,255,255,.32) 0%, rgba(255,255,255,.05) 30%, transparent 48%)",
                    }}
                  />

                  {/* counter chip (front card only) */}
                  {isActive && (
                    <span
                      className="fc-swap"
                      style={{
                        position: "absolute",
                        top: 14 * t,
                        left: 14 * t,
                        padding: `${5 * t}px ${12 * t}px`,
                        borderRadius: 999,
                        background: "rgba(255,255,255,.9)",
                        fontSize: 12.5 * t,
                        fontWeight: 800,
                        animation: "fcSwap .5s .15s both",
                      }}
                    >
                      <span style={{ color: "#7A4F00" }}>{i + 1}</span> / {n}
                    </span>
                  )}

                  {/* glass caption */}
                  <span
                    style={{
                      position: "absolute",
                      left: 14 * t,
                      right: 14 * t,
                      bottom: 14 * t,
                      display: "flex",
                      alignItems: "center",
                      gap: 12 * t,
                      padding: `${12 * t}px ${16 * t}px`,
                      borderRadius: 12 * t,
                      background: "rgba(255,255,255,.86)",
                      border: "1.5px solid #fff",
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 12px 22px -14px rgba(15,46,36,.5)",
                    }}
                  >
                    <span style={{ width: 4 * t, alignSelf: "stretch", borderRadius: 4, background: "#7A4F00", flex: "none" }} />
                    <span>
                      <b style={{ display: "block", fontSize: 20 * t, fontWeight: 800, lineHeight: 1.1 }}>{sl.title}</b>
                      <small style={{ fontSize: 13 * t, fontWeight: 600, color: "#35524A" }}>{sl.sub}</small>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* controls: round arrows + progress dots */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-white/85 text-[#7A4F00] shadow-[0_10px_18px_-10px_rgba(15,46,36,.5)] transition hover:bg-[#7A4F00] hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((sl, i) => (
            <button
              key={sl.title}
              type="button"
              aria-label={`Go to ${sl.title}`}
              onClick={() => setActive(i)}
              className={`relative h-2 overflow-hidden rounded-full bg-[#0F2E24]/15 transition-all ${i === active ? "w-10" : "w-2"}`}
            >
              {i === active && (
                <span
                  key={`${active}-${paused}`}
                  className="fc-fill absolute inset-y-0 left-0 rounded-full bg-[#7A4F00]"
                  style={paused ? { width: "100%" } : { animation: `fcFill ${DELAY}ms linear forwards` }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-white/85 text-[#7A4F00] shadow-[0_10px_18px_-10px_rgba(15,46,36,.5)] transition hover:bg-[#7A4F00] hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}