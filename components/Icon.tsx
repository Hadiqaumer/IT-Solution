export type IconName = "pos" | "cam" | "mon" | "ai" | "box" | "usr" | "hat" | "que" | "bar" | "door" | "bell" | "chk" | "arr";

const paths: Record<IconName, string> = {
  pos: "M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 7h8M8 11h2M12 11h2M8 15h8",
  cam: "M3 8l12-3 2 6-12 3zM17 9l4-1M9 14l-1 5M6 19h6",
  mon: "M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM10 8l5 2-5 2zM8 20h8M12 16v4",
  ai: "M9 7h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4",
  box: "M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10",
  usr: "M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM2 21c0-4 3-7 7-7s7 3 7 7M16 11l2 2 4-4",
  hat: "M7 14a4 4 0 1 1 2-7 4 4 0 0 1 6 0 4 4 0 1 1 2 7v6H7zM7 17h10",
  que: "M6 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM12 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 18c0-3 1.5-5 3-5M9 18c0-3 1.5-5 3-5M15 18c0-3 1.5-5 3-5",
  bar: "M4 5v14M7 5v14M11 5v14M14 5v14M18 5v14M20 5v14",
  door: "M6 21V4h12v17M4 21h16M15 12.5h.01",
  bell: "M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4",
  chk: "M5 12l4 4 10-10",
  arr: "M5 12h14M13 6l6 6-6 6",
};

export default function Icon({ name, size = 26, stroke = 1.8, className = "" }: { name: IconName; size?: number; stroke?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={paths[name]} />
    </svg>
  );
}
