import { site } from "@/lib/site";

const col = "mb-3 text-[13px] font-extrabold uppercase tracking-[.14em] text-[#7A4F00]";
const list = "flex flex-col gap-2 text-[15px] font-semibold text-[#0F2E24]/80";
const link = "transition hover:text-[#7A4F00]";

export default function Footer() {
  return (
    <footer
      className="px-wrap border-t border-[#0F2E24]/10 pt-12 text-[#0F2E24]"
      style={{ background: "linear-gradient(rgba(255,255,255,.5),rgba(255,255,255,.5)), linear-gradient(135deg,#CFE3D2 0%,#A9C9B4 50%,#D9D3A8 100%)" }}
    >
      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:gap-12">
        <div>
          <a href="#top" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
            <img src="/lo.webp" width={100} height={52} alt="" loading="lazy" className="h-[52px] w-[52px] rounded-2xl border border-[#0F2E24]/10 bg-white object-contain p-1 shadow-sm" />
            <span className="text-xl font-extrabold tracking-tight">{site.name}</span>
          </a>
          <p className="mt-4 max-w-sm text-[15px] font-medium leading-relaxed text-[#0F2E24]/75">
            Software, hardware, networking and security, planned, installed and supported by one team.
          </p>
          <a href="#contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#7A4F00] px-6 py-3 text-sm font-extrabold text-white transition hover:brightness-110">Book a demo</a>
        </div>
        <nav aria-label="Services">
          <p className={col}>Services</p>
          <ul className={list}>
            {["POS System", "CCTV and Security", "Inventory Software", "AI Attendance", "Queue Management", "Waiter Calling"].map((t) => (
              <li key={t}><a href="#services" className={link}>{t}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className={col}>Company</p>
          <ul className={list}>
            {[["About", "about"], ["Platform", "platform"], ["Industries", "industries"], ["Process", "how"], ["Why us", "why"], ["Testimonials", "testimonials"], ["FAQ", "faq"]].map(([t, id]) => (
              <li key={id}><a href={`#${id}`} className={link}>{t}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className={col}>Contact</p>
          <ul className={list}>
            <li>{site.phone}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 ${link}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21z" /></svg>
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#0F2E24]/10 py-5 text-sm font-semibold text-[#0F2E24]/70 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <a href="#top" className={`inline-flex items-center gap-1.5 ${link}`}>Back to top
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
        </a>
      </div>
    </footer>
  );
}
