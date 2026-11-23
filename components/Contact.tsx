"use client";
import { FormEvent, useRef, useState } from "react";
import { site } from "@/lib/site";

// 1) Paste the "Web app" URL of your NEW Apps Script deployment here (ends with /exec).
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx3uxuFMpUuTKgzsyfeaP0HuhrVp8b5dPcpjLw5iZ5ZWqMND0iKtQ-tnpvX5VLkCmA3NQ/exec";

// 2) WhatsApp number that receives the enquiries (country code + number, digits only).
const WHATSAPP_NUMBER = "971524951912";

const SERVICES = [
  "Custom Software Development",
  "POS & Business Management Systems",
  "CCTV & Smart Surveillance Solutions",
  "AI & Business Automation",
  "Inventory & Accounting Software",
  "Restaurant & Kitchen IT Solutions",
  "AI Attendance & Workforce Management",
  "GPS Tracking & Fleet Management",
  "Queue Management Systems",
  "Smart Access Control & Security Doors",
  "Website & E-commerce Development",
];

type Lead = { service: string; name: string; phone: string; message: string };

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Tawakal Econ, I would like to discuss my project.")}`;

function waLink(d: Lead) {
  const text = [
    "Hello Tawakal Econ, I just sent an enquiry from your website.",
    "",
    "Name: " + d.name,
    "Service: " + d.service,
    "Phone: " + (d.phone || "-"),
    "",
    "Message: " + (d.message || "-"),
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const field =
  "w-full rounded-xl border border-[#0F2E24]/15 bg-white px-4 py-3 text-[15px] font-semibold text-[#0F2E24] placeholder:font-medium placeholder:text-[#0F2E24]/40 transition focus-visible:border-[#7A4F00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#7A4F00]/40";
const label = "mb-1.5 block text-[13px] font-extrabold text-[#0F2E24]";

const steps = [
  { n: "01", t: "Tell us what you need", d: "Share your project in the form or on WhatsApp." },
  { n: "02", t: "We visit and plan", d: "We look at your business and plan the right system." },
  { n: "03", t: "You get a clear quote", d: "A clear quote for your project." },
];

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");
  const [waUrl, setWaUrl] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;

    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);

    const lead: Lead = {
      service: String(fd.get("service") ?? "").trim(),
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    if (lead.name.length < 2) {
      setState("error");
      setErrMsg("Please enter your name.");
      return;
    }
    if (lead.phone.replace(/\D/g, "").length < 9) {
      setState("error");
      setErrMsg("Please enter a valid phone number.");
      return;
    }

    // Honeypot: real visitors never fill this. Bots do. Pretend success, send nothing.
    const isBot = String(fd.get("hp_trap") ?? "").trim() !== "";

    setState("sending");
    setErrMsg("");

    try {
      if (!isBot) {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 20000);
        try {
          // text/plain + no-cors: Google Apps Script does not answer CORS preflight requests.
          await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ ...lead, page: window.location.href, submittedAt: new Date().toISOString() }),
            signal: controller.signal,
            keepalive: true,
          });
        } finally {
          clearTimeout(timer);
        }
      }

      const link = waLink(lead);
      setWaUrl(link);
      setState("ok");
      form.reset();
      setTimeout(() => {
        window.location.href = link;
      }, 2500);
    } catch (err) {
      console.error("Contact form error:", err);
      setState("error");
      setErrMsg("Could not send. Please try again or message us on WhatsApp.");
    }
  }

  return (
    <section
      id="contact"
      className="section relative overflow-hidden text-[#0F2E24]"
      style={{ background: "linear-gradient(135deg,#DDEBE0 0%,#C6DDCD 50%,#E8E4C6 100%)" }}
    >
      {/* soft background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,.55), transparent 65%)" }} />
        <div className="absolute -bottom-40 -right-24 h-[460px] w-[460px] rounded-full" style={{ background: "radial-gradient(circle, rgba(227,207,142,.5), transparent 65%)" }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(15,46,36,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,46,36,.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 78%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 0%, transparent 78%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-full items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        {/* left: message, contact details, next steps */}
        <div className="flex flex-col items-start gap-5">
          <span className="text-[12px] font-extrabold uppercase tracking-[.16em] text-[#7A4F00]">Contact us</span>
          <h2 className="h2 !mt-0">
            Ready to <span className="text-[#7A4F00]">upgrade</span> your business?
          </h2>
          <p className="max-w-lg text-base font-semibold leading-relaxed text-[#0F2E24]/75 sm:text-lg">
            Tell us what you need. We will visit, plan and quote.
          </p>

          {/* contact details */}
          <ul className="mt-1 grid w-full max-w-lg gap-3">
            {[
              { l: "Phone", v: site.phone, h: `tel:${site.phone.replace(/[^\d+]/g, "")}`, i: <Icon><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></Icon> },
               { l: "Phone", v: site.phone1, h: `tel:${site.phone1.replace(/[^\d+]/g, "")}`, i: <Icon><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></Icon> },
              { l: "Email", v: site.email, h: `mailto:${site.email}`, i: <Icon><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></Icon> },
            ].map((c) => (
              <li key={c.l}>
                <a href={c.h} className="flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/60 px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white/85">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F2E24] text-[#E3CF8E]">{c.i}</span>
                  <span className="leading-tight">
                    <small className="block text-[12px] font-bold text-[#0F2E24]/55">{c.l}</small>
                    <b className="break-all text-[15px] font-extrabold">{c.v}</b>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 rounded-2xl border border-white/80 bg-white/60 px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white/85">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm0 18.15h0a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
                  </svg>
                </span>
                <span className="leading-tight">
                  <small className="block text-[12px] font-bold text-[#0F2E24]/55">WhatsApp</small>
                  <b className="text-[15px] font-extrabold">Chat with us now</b>
                </span>
              </a>
            </li>
          </ul>

          {/* what happens next */}
          <ol className="mt-3 w-full max-w-lg space-y-4 border-l-2 border-[#7A4F00]/30 pl-5">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <span className="absolute -left-[31px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#7A4F00] text-[9px] font-extrabold text-white">{s.n}</span>
                <b className="block text-[15px] font-extrabold">{s.t}</b>
                <small className="text-[13.5px] font-semibold text-[#0F2E24]/65">{s.d}</small>
              </li>
            ))}
          </ol>
        </div>

        {/* right: form card */}
        <div style={{ perspective: 1400 }}>
          <form
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            className="rounded-[28px] border border-white/90 p-5 sm:p-8 lg:[transform:rotateY(-3deg)_rotateX(1.5deg)]"
            style={{ background: "linear-gradient(145deg, rgba(255,255,255,.92), rgba(255,255,255,.72))", boxShadow: "0 30px 60px rgba(15,46,36,.18), inset 0 1px 0 #fff" }}
          >
            <h3 className="text-[22px] font-extrabold leading-tight">Start your project</h3>
            <p className="mb-5 mt-1 text-[14px] font-semibold text-[#0F2E24]/60">Fill in the form and we will get back to you.</p>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={label}>Your name</label>
                  <input id="name" name="name" required autoComplete="name" className={field} placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="phone" className={label}>Phone</label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="Phone number" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className={label}>Service you need</label>
                <select id="service" name="service" className={field} defaultValue={SERVICES[0]}>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={label}>What do you need?</label>
                <textarea id="message" name="message" rows={4} className={`${field} resize-none`} placeholder="Tell us a little about your business and what you need..." />
              </div>

              {/* honeypot: hidden from people, odd name so browser autofill ignores it */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <input name="hp_trap" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
              </div>

              <button
                type="submit"
                disabled={state === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#7A4F00] px-8 py-4 text-[15px] font-extrabold text-white shadow-[0_12px_28px_rgba(122,79,0,.3)] transition hover:-translate-y-0.5 hover:brightness-110 disabled:translate-y-0 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A4F00]"
              >
                {state === "sending" ? "Sending..." : "Book a free demo"} {state !== "sending" && <span aria-hidden>→</span>}
              </button>

              <p
                role="status"
                className={`min-h-6 text-[14px] font-bold ${state === "ok" ? "text-[#1F6B45]" : state === "error" ? "text-[#B3402A]" : ""}`}
              >
                {state === "ok" && "Thank you. Redirecting you to WhatsApp..."}
                {state === "error" && errMsg}
              </p>
              {state === "ok" && waUrl && (
                <a href={waUrl} className="text-sm font-bold underline">
                  Not redirected? Open WhatsApp
                </a>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}