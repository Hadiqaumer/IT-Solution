import { roster } from "@/lib/site";

const tone = { ok: "bg-[#CFE8D8] text-[#14532D]", late: "bg-[#F6DDB8] text-brass", over: "bg-[#EBCFBF] text-[#8F4A22]" };

export default function Roster() {
  return (
    <ul>
      {roster.map((r) => (
        <li key={r.init} className="flex items-center gap-3 border-t border-[#E3ECE5] py-3 text-sm">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-xs font-extrabold">{r.init}</span>
          <span className="flex-1"><b>{r.role}</b><br /><small className="font-medium text-[#4A6458]">{r.where}</small></span>
          <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${tone[r.tone]}`}>{r.status}</span>
        </li>
      ))}
    </ul>
  );
}
