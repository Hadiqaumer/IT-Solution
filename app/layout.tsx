import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "800"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  title: `${site.name} | IT Solutions, Software and Security for Businesses`,
  description: "POS, CCTV, inventory, AI attendance, kitchen IT, queue management, barcode, security doors and waiter calling systems, planned, installed and supported by one team.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#CFE3D2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
