// Replace with the real WhatsApp number: country code + number, digits only (e.g. 923001234567)
const WHATSAPP_NUMBER = "971581657677";
const WHATSAPP_TEXT = "Hello Tawakal Econ, I would like to discuss my project.";
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.84 9.84 0 0 0 12.04 2Zm0 18.15h0a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function FinalCta() {
  return (
    <section id="contact-cta" className="px-wrap tone-g py-8 lg:py-10" aria-labelledby="cta-title">
      <div
        className="relative mx-auto max-w-full overflow-hidden rounded-[32px] border border-white/70 px-6 py-10 text-[#0F2E24] sm:px-10 lg:rounded-[44px] lg:px-8 lg:py-10"
        style={{ background: "linear-gradient(135deg,#CFE3D2 0%,#A9C9B4 50%,#D9D3A8 100%)" }}
      >
        {/* background: grid + glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,.55), transparent 65%)" }} />
          <div className="absolute -bottom-32 left-10 h-[340px] w-[340px] rounded-full" style={{ background: "radial-gradient(circle, rgba(227,207,142,.5), transparent 65%)" }} />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(15,46,36,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,46,36,.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse at 70% 50%, #000, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at 70% 50%, #000, transparent 75%)",
            }}
          />
        </div>

        <div className="relative grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          {/* left: message + CTAs */}
          <div className="flex flex-col items-start gap-5">
            <span className="text-[12px] font-extrabold uppercase tracking-[.16em] text-[#7A4F00]">Let&apos;s talk</span>
            <h2 id="cta-title" className="h2 !mt-0">
              Let&apos;s Build a Smarter Technology for <span className="text-[#7A4F00]">Your Business</span>
            </h2>
            <p className="max-w-2xl text-base font-semibold leading-relaxed text-[#0F2E24]/75 sm:text-[17px]">
              Tell us about your project, and let&apos;s create the right solution for your business.
            </p>

            <div className="mt-1 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#7A4F00] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(122,79,0,.35)] transition hover:-translate-y-0.5 hover:brightness-110 sm:text-[15px]"
              >
                Start Your Project <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border-2 border-[#7A4F00] px-7 py-3.5 text-sm font-extrabold text-[#7A4F00] transition hover:-translate-y-0.5 hover:bg-white/50 sm:text-[15px]"
              >
                Contact Our Team
              </a>
            </div>
          </div>

          {/* right: WhatsApp card */}
          <div style={{ perspective: 1200 }}>
            <div
              className="relative rounded-3xl border border-white/80 p-5 sm:p-6"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,.85), rgba(255,255,255,.55))",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 28px 56px rgba(15,46,36,.2), inset 0 1px 0 #fff",
                transform: "rotateY(-8deg) rotateX(4deg)",
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon size={24} />
                </span>
                <div className="leading-tight">
                  <b className="block text-[16px] font-extrabold">Message us on WhatsApp</b>
                  <small className="text-[12.5px] font-semibold text-[#0F2E24]/60">Quick replies, no forms</small>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-[#DCF8C6] px-4 py-2.5 text-[13.5px] font-semibold text-[#0F2E24]">
                  Hi, I want to build a custom system for my business.
                </div>
                <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-[#0F2E24]/10 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-[#0F2E24]">
                  Sure! Tell us a little about your project and we will get back to you.
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_26px_rgba(37,211,102,.35)] transition hover:-translate-y-0.5 hover:brightness-105 sm:text-[15px]"
              >
                <WhatsAppIcon size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}