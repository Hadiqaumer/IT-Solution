const faqs = [
  { q: "What services do you provide?", a: "Software and apps (POS, inventory, AI attendance), hardware and networking, and CCTV and security including cameras, camera software and access-controlled doors. For restaurants we also cover kitchen IT, queue management, barcode systems and waiter calling." },
  { q: "Which businesses do you work with?", a: "Restaurants and cafés, retail, call centers, offices, hotels and clinics. If your business is not listed, contact us and we will tell you how we can help." },
  { q: "Do you handle installation and staff training?", a: "Yes. We plan the setup, install the hardware and software, and train your team so everyone can use the system from day one." },
  { q: "Can I buy a single system, or do I need the full package?", a: "Both options work. You can start with one system, such as POS or CCTV, and add more later. Everything is designed to work together." },
  { q: "Do you support businesses with more than one branch?", a: "Yes. We work with everything from a single shop to a multi-branch company, and can connect branches so you see them from one place." },
  { q: "Do you offer support after installation?", a: "Yes. Ongoing support is part of our process, so your team can get help whenever it is needed." },
  { q: "How do I get a quote or demo?", a: "Use the Book a demo button or the contact form. Tell us about your business and what you need, and we will plan the right setup with you." },
];

export default function Faq() {
  return (
    <section id="faq" className="section tone-l" aria-labelledby="faq-title">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-3.5 py-1.5 text-[13px] font-bold text-[#35524A]">
            <span className="h-2 w-2 rounded-full bg-[#1F6B45]" />FAQs
          </span>
          <h2 id="faq-title" className="h2 mt-4">Questions? <span className="text-[#7A4F00]">Answered.</span></h2>
          <p className="lead mt-3 max-w-md">Everything you need to know before you get started. Cannot find your answer? Talk to our team.</p>
          <a href="#contact" className="btn mt-5">Ask a question</a>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-2xl border border-white bg-white/80 shadow-[0_12px_30px_-22px_rgba(15,46,36,.4)] open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-[16px] font-extrabold text-[#0F2E24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7A4F00] [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CFE3D2] text-[#7A4F00] transition group-open:rotate-45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <p className="px-5 pb-5 text-[15px] font-medium leading-relaxed text-[#35524A]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
