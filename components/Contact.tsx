"use client";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

const field = "w-full rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold";

export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "ok" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="grid gap-12 bg-ink px-6 py-20 lg:grid-cols-2 lg:px-[72px] lg:py-24">
      <div>
        <h2 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl">Ready to <span className="text-gold">upgrade</span> your business?</h2>
        <p className="mt-4 text-lg font-medium text-[#D5E4DA]">Tell us what you need. We will visit, plan and quote.</p>
        <p className="mt-6 font-bold text-white">{site.phone} · {site.email}</p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label htmlFor="name" className="mb-1 block text-sm font-bold text-gold">Your name</label><input id="name" name="name" required className={field} placeholder="Full name" /></div>
          <div><label htmlFor="phone" className="mb-1 block text-sm font-bold text-gold">Phone</label><input id="phone" name="phone" required className={field} placeholder="Phone number" /></div>
        </div>
        <div><label htmlFor="type" className="mb-1 block text-sm font-bold text-gold">Business type</label>
          <select id="type" name="type" className={`${field} [&>option]:text-ink`}><option>Restaurant or café</option><option>Other business</option></select></div>
        <div><label htmlFor="message" className="mb-1 block text-sm font-bold text-gold">What do you need?</label><textarea id="message" name="message" rows={4} className={field} placeholder="POS, CCTV, attendance, full package..." /></div>
        <button type="submit" disabled={state === "sending"} className="rounded-full bg-gold px-8 py-4 font-extrabold text-ink transition hover:brightness-105 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          {state === "sending" ? "Sending..." : "Book a free demo"}
        </button>
        <p role="status" className="min-h-6 font-bold text-white">
          {state === "ok" && "Thank you. We will contact you soon."}
          {state === "error" && "Could not send. Check your name and phone, then try again."}
        </p>
      </form>
    </section>
  );
}
