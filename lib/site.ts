// Replace the placeholders with your real details.
export const site = {
  name: "Tech Twist Global",
  phone: "[YOUR PHONE]",
  email: "[YOUR EMAIL]",
  address: "[YOUR ADDRESS]",
  facebook: "https://www.facebook.com/share/1MFQyQVmai/?mibextid=wwXIfr",
};

export type IconName =
  | "pos" | "cam" | "mon" | "ai" | "box" | "usr" | "hat" | "que" | "bar" | "door" | "bell" | "chk" | "arr";

export const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "pos", title: "POS System", text: "Fast billing, table orders, split bills and daily sales reports." },
  { icon: "cam", title: "CCTV Camera Integration", text: "Cameras installed and connected across counters, kitchen and entrances." },
  { icon: "mon", title: "CCTV Camera Software", text: "Live view, playback and alerts from any phone or PC." },
  { icon: "ai", title: "AI Based Adoption", text: "Smart tools that learn your restaurant's patterns and flag what matters." },
  { icon: "box", title: "Inventory Software", text: "Track stock, wastage and purchasing down to each ingredient." },
  { icon: "usr", title: "AI Attendance Software", text: "Face check-in, live shift roster and payroll-ready reports." },
  { icon: "hat", title: "Complete Kitchen IT", text: "Kitchen display and order flow from the counter to the pass." },
  { icon: "que", title: "Queue Management", text: "Token and queue screens that keep waiting guests informed." },
  { icon: "bar", title: "Barcode System", text: "Labels and scanners for stock, billing and checkout." },
  { icon: "door", title: "Security Doors", text: "Access-controlled doors for kitchens, stores and staff areas." },
  { icon: "bell", title: "Waiter Calling System", text: "One-tap table call buttons that alert your floor team." },
];

export const tints = [
  { bg: "bg-sage", fg: "text-[#1F6B45]" },
  { bg: "bg-gold", fg: "text-[#7A5A00]" },
  { bg: "bg-teal", fg: "text-[#14665A]" },
  { bg: "bg-clay", fg: "text-[#8F4A22]" },
];

export const roster = [
  { init: "HC", role: "Head Chef", where: "Kitchen · 09:02", status: "On time", tone: "ok" },
  { init: "WT", role: "Waiter", where: "Floor · 09:14", status: "Late 14 min", tone: "late" },
  { init: "CS", role: "Cashier", where: "Counter · 09:00", status: "On time", tone: "ok" },
  { init: "DL", role: "Delivery rider", where: "Outside · 09:31", status: "Overtime", tone: "over" },
] as const;

export const flow = [
  { icon: "door", title: "Front door", text: "Face check-in, access control" },
  { icon: "pos", title: "Counter", text: "POS, barcode, queue" },
  { icon: "hat", title: "Kitchen", text: "Order screens and flow" },
  { icon: "bell", title: "Floor", text: "Waiter calling" },
  { icon: "box", title: "Back office", text: "Inventory, reports, CCTV" },
] as const;

export const steps = [
  { title: "Site visit", text: "We study your layout, kitchen and workflow." },
  { title: "Custom plan", text: "A clear list of systems and a quote." },
  { title: "Install and train", text: "Hardware, software and staff training on site." },
  { title: "Ongoing support", text: "Help whenever your team needs it." },
];
