import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "800"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Tech Twist Global | IT Solutions and Software for Restaurants and Businesses",
  description: "POS, CCTV, inventory, AI attendance, kitchen IT, queue management, barcode, security doors and waiter calling systems, installed and supported by one team.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
