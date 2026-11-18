import Icon from "./Icon";
import Roster from "./Roster";

const slab = "absolute h-[300px] w-[300px] rounded-[40px] shadow-[-16px_16px_0_rgba(15,46,36,.16),-28px_28px_50px_rgba(15,46,36,.22)]";
const slabT = { transform: "rotateX(58deg) rotateZ(-40deg)" };
const tilt = { transform: "rotateY(-14deg) rotateX(6deg)" };

export default function Hero() {
  return (
    <section className="grid items-center gap-12 bg-gradient-to-br from-ground via-[#B6D4C0] to-ground px-6 py-16 lg:grid-cols-2 lg:px-[72px] lg:py-20">
      <div className="flex flex-col gap-6">
        <span className="self-start rounded-full bg-white/70 px-4 py-2 text-[13px] font-extrabold tracking-wide text-[#14665A]">IT solutions and software for businesses</span>
        <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight lg:text-7xl">
          Every system your business needs. <span className="text-brass">Connected.</span>
        </h1>
        <p className="lead max-w-xl text-xl">Software, hardware and security installed and supported by one team, with complete systems for restaurants and cafés.</p>
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn">Book a demo <Icon name="arr" size={18} stroke={2.4} /></a>
          <a href="#services" className="btn-ghost">Explore services</a>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-2 pt-1 text-sm font-bold">
          {["Installation", "Staff training", "Ongoing support"].map((t) => (
            <li key={t} className="flex items-center gap-2"><Icon name="chk" size={18} stroke={2.6} className="text-[#1F6B45]" />{t}</li>
          ))}
        </ul>
      </div>
      <div className="relative hidden h-[560px] lg:block" style={{ perspective: 1600 }} aria-hidden="true">
        <div className={`${slab} left-[120px] top-[250px] bg-gradient-to-br from-gold to-[#D9D3A8]`} style={slabT} />
        <div className={`${slab} left-[150px] top-[190px] bg-gradient-to-br from-teal to-sage`} style={slabT} />
        <div className={`${slab} left-[180px] top-[130px] bg-gradient-to-br from-[#1F6B45] to-[#14665A]`} style={slabT} />
        <div className="panel absolute left-0 top-5 w-[430px] p-6" style={tilt}>
          <div className="flex items-center justify-between pb-3"><b>Live shift roster</b><span className="rounded-full bg-[#CFE8D8] px-3 py-1 text-xs font-extrabold text-[#14532D]">4 on shift</span></div>
          <Roster />
        </div>
        <div className="panel absolute right-0 top-[270px] w-[250px] bg-ink p-6 text-white" style={{ ...tilt, background: "#0F2E24" }}>
          <b className="text-[13px] tracking-widest text-gold">TABLE 07 · POS</b>
          <div className="space-y-2 pt-3 text-sm">
            <div className="flex justify-between"><span>Item 1</span><span>[PRICE]</span></div>
            <div className="flex justify-between"><span>Item 2</span><span>[PRICE]</span></div>
            <div className="flex justify-between border-t border-white/20 pt-2 font-extrabold text-gold"><span>Total</span><span>[TOTAL]</span></div>
          </div>
        </div>
        <div className="panel float absolute bottom-0 left-10 flex items-center gap-3 px-5 py-3.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6DDB8] text-brass"><Icon name="bell" size={22} /></span>
          <span className="text-sm"><b>Table 04 is calling</b><br /><small className="text-[#4A6458]">Waiter alert sent</small></span>
        </div>
      </div>
    </section>
  );
}
