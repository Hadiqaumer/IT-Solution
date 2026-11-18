import { site } from "@/lib/site";

export default function Footer() {
  const h = "mb-3.5 text-[13px] font-extrabold tracking-wider text-gold";
  const l = "flex flex-col gap-2.5 text-[15px] font-medium text-[#D5E4DA]";
  return (
    <footer className="grid gap-10 border-t border-gold/30 bg-ink px-6 py-14 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-[72px]">
      <div>
        <b className="text-xl text-white">{site.name}</b>
        <p className="mt-2.5 max-w-xs leading-relaxed text-[#C5D8CB]">IT solutions and software for businesses, with complete systems for restaurants and cafés.</p>
      </div>
      <div><p className={h}>SERVICES</p><div className={l}><a href="#services">POS System</a><a href="#services">CCTV</a><a href="#services">Inventory</a><a href="#attendance">AI Attendance</a></div></div>
      <div><p className={h}>COMPANY</p><div className={l}><a href="#how">Process</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div></div>
      <div><p className={h}>CONTACT</p><div className={l}><span>{site.phone}</span><span>{site.email}</span><span>{site.address}</span><a href={site.facebook} rel="noopener noreferrer" target="_blank">Facebook</a></div></div>
    </footer>
  );
}
