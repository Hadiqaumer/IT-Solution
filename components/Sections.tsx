import Icon from "./Icon";
import Roster from "./Roster";
import { flow, services, steps, tints } from "@/lib/site";

export function Trust() {
  return (
    <section className="px-6 pb-16 lg:px-[72px]" aria-label="Clients">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white/55 px-9 py-6 text-sm font-bold text-[#4A6458]">
        <span className="font-extrabold text-ink">Trusted by businesses</span>
        {[1, 2, 3, 4, 5].map((n) => <span key={n}>[CLIENT LOGO]</span>)}
      </div>
    </section>
  );
}

export function Industries() {
  const empty = ["bg-gold text-[#7A5A00]", "bg-teal text-[#14665A]", "bg-clay text-[#8F4A22]"];
  return (
    <section id="industries" className="section">
      <div className="max-w-3xl">
        <p className="eyebrow">Industries and software</p>
        <h2 className="h2">Software and IT for <span className="text-brass">every</span> kind of business</h2>
        <p className="lead mt-3">Restaurants are one of our specialities. [EDIT: describe your other software and the businesses you serve.]</p>
      </div>
      <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1400 }}>
        <a href="#services" className="tilt flex min-h-[260px] flex-col gap-3 rounded-3xl bg-white p-7 shadow-[0_10px_30px_rgba(15,46,36,.08)]">
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-sage text-[#1F6B45]"><Icon name="hat" /></span>
          <h3 className="mt-1.5 text-xl font-extrabold">Restaurants and cafés</h3>
          <p className="font-medium text-muted">POS, CCTV, kitchen, queue, attendance and more.</p>
          <span className="mt-auto flex items-center gap-1.5 text-sm font-extrabold text-[#1F6B45]">See restaurant solutions <Icon name="arr" size={16} stroke={2.2} /></span>
        </a>
        {empty.map((c, i) => (
          <a key={i} href="#contact" className="tilt flex min-h-[260px] flex-col gap-3 rounded-3xl border-2 border-dashed border-ink/30 bg-white/55 p-7">
            <span className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl ${c}`}><Icon name="ai" /></span>
            <h3 className="mt-1.5 text-xl font-extrabold">[YOUR INDUSTRY]</h3>
            <p className="font-medium text-muted">[One line about the software or service you offer here]</p>
            <span className="mt-auto text-sm font-extrabold text-brass">[Link]</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section bg-white/40">
      <div className="max-w-3xl">
        <p className="eyebrow">Restaurant solutions</p>
        <h2 className="h2">Complete IT for <span className="text-brass">restaurants</span>, from one partner</h2>
        <p className="lead mt-3">Choose a single service or the complete package. Everything is designed to work together.</p>
      </div>
      <ul className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const t = tints[i % 4];
          return (
            <li key={s.title} className="tilt flex flex-col gap-3 rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_6px_20px_rgba(15,46,36,.06)]">
              <span className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl ${t.bg} ${t.fg}`}><Icon name={s.icon} /></span>
              <h3 className="mt-1.5 text-[19px] font-extrabold">{s.title}</h3>
              <p className="text-[15px] font-medium leading-relaxed text-muted">{s.text}</p>
              <a href="#contact" className={`mt-auto flex items-center gap-1.5 pt-2 text-sm font-extrabold ${t.fg}`}>Learn more <Icon name="arr" size={16} stroke={2.2} /></a>
            </li>
          );
        })}
        <li className="tilt flex flex-col gap-3 rounded-3xl bg-ink p-7">
          <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-gold text-ink"><Icon name="chk" stroke={2.4} /></span>
          <h3 className="mt-1.5 text-[19px] font-extrabold text-white">Full restaurant package</h3>
          <p className="text-[15px] font-medium leading-relaxed text-[#E6EFE8]">Tell us about your restaurant and we plan the complete setup.</p>
          <a href="#contact" className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-extrabold text-gold">Get a quote <Icon name="arr" size={16} stroke={2.2} /></a>
        </li>
      </ul>
    </section>
  );
}

export function Flow() {
  return (
    <section id="flow" className="section text-center">
      <p className="eyebrow">One connected system</p>
      <h2 className="h2">From the front door to the <span className="text-brass">back office</span></h2>
      <p className="lead mx-auto mt-3 max-w-2xl">Each part of your restaurant gets the right tool, and the data flows between them.</p>
      <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        <span aria-hidden="true" className="absolute left-[8%] right-[8%] top-[34px] hidden h-0.5 bg-ink/25 lg:block" />
        {flow.map((f) => (
          <li key={f.title} className="relative flex flex-col items-center gap-2">
            <span className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(15,46,36,.12)]"><Icon name={f.icon} size={28} /></span>
            <b className="text-[17px]">{f.title}</b>
            <small className="text-sm font-medium text-muted">{f.text}</small>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Attendance() {
  return (
    <section id="attendance" className="section grid items-center gap-16 bg-white/40 lg:grid-cols-2">
      <div>
        <p className="eyebrow">AI attendance software</p>
        <h2 className="h2">Know who is on shift. <span className="text-brass">Instantly.</span></h2>
        <p className="lead mt-3">Staff check in by face at the door. You see the live roster, late arrivals and overtime without paperwork.</p>
        <ul className="my-8 space-y-3.5 text-[17px] font-bold">
          {["Face check-in at the door", "Live shift roster", "Late and overtime alerts", "Payroll-ready reports"].map((t) => (
            <li key={t} className="flex items-center gap-3"><Icon name="chk" size={18} stroke={2.6} className="text-[#1F6B45]" />{t}</li>
          ))}
        </ul>
        <a href="#contact" className="btn">See attendance demo</a>
      </div>
      <div className="panel p-7 lg:[transform:perspective(1400px)_rotateY(-10deg)_rotateX(4deg)]">
        <div className="flex items-center justify-between pb-3"><b className="text-lg">Today&apos;s attendance</b><span className="rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-[#5A4200]">Payroll-ready</span></div>
        <Roster />
        <p className="mt-2 rounded-2xl bg-[#EEF5F0] p-3.5 text-[13px] font-semibold text-muted">Illustrative screen · replace with a real product screenshot</p>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="how" className="section">
      <p className="eyebrow">How it works</p>
      <h2 className="h2 max-w-3xl">From first call to <span className="text-brass">running</span> smoothly</h2>
      <ol className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-3xl bg-white/60 p-7">
            <span className="text-4xl font-extrabold text-brass">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mb-2 mt-2.5 text-xl font-extrabold">{s.title}</h3>
            <p className="font-medium leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
