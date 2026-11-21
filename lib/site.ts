// Replace the placeholders with your real details.
export const site = {
  name: "Tawakal Econ",
  phone: "971581657677",
  email: "admin@tawakalecon.com",
  address: "312 floor 2, Eden Tower, Main Boulevard, Gulberg III, Lahore, Pakistan",
  facebook: "https://www.facebook.com/share/1MFQyQVmai/?mibextid=wwXIfr",
};

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
// services.ts
// All content for the Services section lives here. Edit text, add image paths, or reorder from this one file.

export type Thumb = { label: string; src?: string };

export type Service = {
  n: string;
  name: string;
  headline: string;
  text: string;
  features: string[];
  cta: string;
  cover?: string; // big photo, best at 4:3 (e.g. 1200x900)
  thumbs: [Thumb, Thumb, Thumb]; // 3 small photos, square (e.g. 600x600)
};

/*
  ADD YOUR IMAGES HERE: put the path in `cover` and in each thumb's `src`.
  Example: cover: "/images/services/01-cover.jpg"
  Until a path is added, a green placeholder is shown.
*/
export const services: Service[] = [
  {
    n: "01",
    name: "Custom Software Development",
    headline: "Build Software Around Your Business Needs",
    text: "We develop customised software applications that simplify business processes, improve operational efficiency, and support your organisation's growth.",
    features: [
      "Custom Business Applications",
      "Enterprise Management Software",
      "Web & Mobile Application Development",
      "Database & System Integration",
      "Workflow Automation",
      "Software Maintenance & Upgrades",
    ],
    cta: "Explore Software Solutions",
    cover: "/services/8.webp",
    thumbs: [{ label: "Web apps" }, { label: "Mobile" }, { label: "Automation" }],
  },
  {
    n: "02",
    name: "POS & Business Management Systems",
    headline: "Simplify Sales, Billing & Business Operations",
    text: "Manage your business more efficiently with intelligent POS and management software designed to streamline transactions, monitor sales, and improve operational control.",
    features: [
      "Retail & Restaurant POS Software",
      "Smart Billing & Invoicing",
      "Barcode & QR Code Integration",
      "Sales & Purchase Management",
      "Multi-Branch Management",
      "Real-Time Sales Reporting",
    ],
    cta: "Explore POS Solutions",
     cover: "/services/5.webp",
    thumbs: [{ label: "Billing" }, { label: "Barcode" }, { label: "Reports" }],
  },
  {
    n: "03",
    name: "CCTV & Smart Surveillance Solutions",
    headline: "Advanced Security for Complete Peace of Mind",
    text: "Protect your business premises with integrated CCTV systems, intelligent monitoring software, and advanced surveillance technologies.",
    features: [
      "CCTV Camera Installation & Integration",
      "IP Camera & Network Surveillance",
      "DVR & NVR Configuration",
      "Remote CCTV Monitoring",
      "Centralised Security Management",
      "Intelligent Motion Detection & Alerts",
    ],
    cta: "Explore Security Solutions",
    cover: "/slides/cctv.webp",
    thumbs: [{ label: "Cameras" }, { label: "Monitoring" }, { label: "Alerts" }],
  },
  {
    n: "04",
    name: "AI & Business Automation",
    headline: "Make Your Business Smarter with AI",
    text: "Integrate artificial intelligence and intelligent automation into your business processes to reduce repetitive tasks, improve productivity, and support smarter decisions.",
    features: [
      "AI Software Development & Integration",
      "Intelligent Workflow Automation",
      "Automated Business Processes",
      "AI-Powered Data Analysis",
      "Smart Reporting & Analytics",
      "Custom AI Business Applications",
    ],
    cta: "Discover AI Solutions",
    cover: "/services/6.webp",
    thumbs: [{ label: "Automation" }, { label: "Analytics" }, { label: "AI apps" }],
  },
  {
    n: "05",
    name: "Inventory & Accounting Software",
    headline: "Complete Control Over Stock & Finances",
    text: "Manage inventory, purchasing, sales, expenses, and financial records through integrated business management software designed to improve accuracy and operational visibility.",
    features: [
      "Real-Time Inventory Tracking",
      "Stock & Product Management",
      "Purchase & Supplier Management",
      "Sales & Expense Tracking",
      "Accounting & Financial Reports",
      "Low-Stock Alerts & Notifications",
    ],
    cta: "Explore Management Software",
    cover: "/services/3.webp",
    thumbs: [{ label: "Stock" }, { label: "Purchasing" }, { label: "Reports" }],
  },
  {
    n: "06",
    name: "Restaurant & Kitchen IT Solutions",
    headline: "Transform Restaurant Operations with Smart Technology",
    text: "Connect restaurant billing, kitchen operations, order management, and customer service through an integrated restaurant technology ecosystem.",
    features: [
      "Restaurant POS & Billing Systems",
      "Kitchen Display Systems (KDS)",
      "Digital Order Management",
      "Waiter Calling Systems",
      "Table & Reservation Management",
      "Restaurant Inventory Integration",
    ],
    cta: "Explore Restaurant Solutions",
    cover: "/slides/pos.webp",
    thumbs: [{ label: "POS" }, { label: "Kitchen" }, { label: "Orders" }],
  },
  {
    n: "07",
    name: "AI Attendance & Workforce Management",
    headline: "Intelligent Employee Attendance & Monitoring",
    text: "Modernise workforce management with smart attendance systems that simplify employee tracking, automate attendance records, and improve workforce visibility.",
    features: [
      "AI-Based Facial Recognition",
      "Biometric Fingerprint Attendance",
      "Employee Time Tracking",
      "Shift & Duty Management",
      "Automated Attendance Reports",
      "Access Control Integration",
    ],
    cta: "Explore Attendance Solutions",
    cover: "/slides/ai-attendance.webp",
    thumbs: [{ label: "Face scan" }, { label: "Fingerprint" }, { label: "Shifts" }],
  },
  {
    n: "08",
    name: "GPS Tracking & Fleet Management",
    headline: "Stay Connected to Your Vehicles & Fleet",
    text: "Monitor vehicle locations, track journeys, receive movement alerts, and manage fleet operations through intelligent GPS tracking and monitoring solutions.",
    features: [
      "Real-Time GPS Vehicle Tracking",
      "Journey History & Route Playback",
      "Vehicle Movement Monitoring",
      "Over-Speed Alerts",
      "Anti-Theft Notifications",
      "Mileage & Fleet Reports",
    ],
    cta: "Explore GPS Solutions",
    cover: "/services/2.webp",
    thumbs: [{ label: "Live map" }, { label: "Routes" }, { label: "Alerts" }],
  },
  {
    n: "09",
    name: "Queue Management Systems",
    headline: "Create Faster & More Organised Customer Experiences",
    text: "Improve customer flow with intelligent queue management technology that automates token generation, waiting lists, and customer calling.",
    features: [
      "Digital Token Generation",
      "Queue Display Screens",
      "Self-Service Ticket Kiosks",
      "Automated Customer Calling",
      "Counter & Service Management",
      "Queue Monitoring & Reports",
    ],
    cta: "Explore Queue Solutions",
    cover: "/services/1.webp",
    thumbs: [{ label: "Tokens" }, { label: "Display" }, { label: "Kiosk" }],
  },
  {
    n: "10",
    name: "Smart Access Control & Security Doors",
    headline: "Smarter Entry Management. Stronger Security.",
    text: "Secure your premises with intelligent access control systems that manage entry permissions, restrict unauthorised access, and improve facility security.",
    features: [
      "Biometric Access Control",
      "Facial Recognition Entry Systems",
      "RFID & Smart Card Readers",
      "Electronic Door Lock Integration",
      "Automated Security Doors",
      "Employee Access Management",
    ],
    cta: "Explore Access Control",
    cover: "/services/4.webp",
    thumbs: [{ label: "Biometric" }, { label: "Face entry" }, { label: "Smart doors" }],
  },
  {
    n: "11",
    name: "Website & E-commerce Development",
    headline: "Build Your Digital Presence with Confidence",
    text: "Establish a professional online presence through responsive website development, customised e-commerce platforms, and modern digital applications.",
    features: [
      "Business Website Development",
      "E-commerce Website Development",
      "Custom Web Applications",
      "Mobile Application Development",
      "Domain & Web Hosting Solutions",
      "Business Email & Live Chat Integration",
    ],
    cta: "Explore Web Solutions",
    cover: "/services/7.webp",
    thumbs: [{ label: "Websites" }, { label: "E-commerce" }, { label: "Mobile apps" }],
  },
  {
    n: "12",
    name: "Networking & Communication Systems",
    headline: "Build a Connected & Reliable Business Infrastructure",
    text: "Connect your business with professional networking and communication solutions designed to support secure connectivity, efficient communication, and reliable IT operations.",
    features: [
      "LAN & WAN Network Configuration",
      "Structured Network Cabling",
      "Router & Switch Installation",
      "Wireless Network Solutions",
      "IP Digital PBX Systems",
      "Analog PBX & Telephone Solutions",
    ],
    cta: "Explore Networking Solutions",
    cover: "/services/11.webp",
    thumbs: [{ label: "Cabling" }, { label: "Wi-Fi" }, { label: "PBX" }],
  },
];