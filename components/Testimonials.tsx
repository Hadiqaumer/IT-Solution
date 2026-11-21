// REPLACE the quotes, names and roles below with real client testimonials before launch.
const items = [
  { quote: "Billing is faster and our end-of-day sales report is ready without any manual work.", name: "[Client name]", role: "[Owner, Restaurant]", tint: "#A9CDB4", tick: "#1F6B45" },
  { quote: "We can check every branch from one screen, and the installation team was neat and on time.", name: "[Client name]", role: "[Manager, Retail store]", tint: "#E3CF8E", tick: "#7A5A00" },
  { quote: "Shift attendance is now automatic, so payroll no longer needs hours of checking.", name: "[Client name]", role: "[Operations, Business]", tint: "#94C9BE", tick: "#14665A" },
];

const Star = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#C8921B" aria-hidden="true"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.3 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" /></svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="section tone-g" aria-labelledby="testi-title">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-3.5 py-1.5 text-[13px] font-bold text-[#35524A]">
          <span className="h-2 w-2 rounded-full bg-[#1F6B45]" />Client feedback
        </span>
        <h2 id="testi-title" className="h2 mt-4">What our <span className="text-[#7A4F00]">clients</span> say</h2>
        <p className="lead mt-3">Real businesses, real results from systems we planned, installed and support.</p>
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <li key={i} className="relative flex flex-col gap-4 rounded-3xl border border-white bg-white/80 p-6 shadow-[0_18px_40px_-24px_rgba(15,46,36,.35)]">
            <svg className="absolute right-5 top-5 opacity-20" width="40" height="40" viewBox="0 0 24 24" fill={t.tick} aria-hidden="true"><path d="M4 17c0-4 1.5-7 5-9l1 1.5C8 11 7.5 12.5 7.5 14H10v5H4zm10 0c0-4 1.5-7 5-9l1 1.5c-2 1.5-2.500 3-2.500 4.500H20v5h-6z" /></svg>
            <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">{[0, 1, 2, 3, 4].map((n) => <Star key={n} />)}</div>
            <blockquote className="text-[16px] font-semibold leading-relaxed text-[#0F2E24]">“{t.quote}”</blockquote>
            <div className="mt-auto flex items-center gap-3 border-t border-[#0F2E24]/10 pt-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold" style={{ background: t.tint, color: t.tick }}>{t.name.replace(/[\[\]]/g, "").slice(0, 1)}</span>
              <span className="text-sm"><b className="block text-[15px]">{t.name}</b><span className="font-semibold text-[#35524A]">{t.role}</span></span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
