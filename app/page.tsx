import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import { About } from "@/components/About";
import { Industries, Process, Services, Trust } from "@/components/Sections";
import { WhyUs } from "@/components/WhyUs";
import { FinalCta } from "@/components/FinalCta";
import { Flow } from "@/components/Flow";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        {/* hero and trust share one background so there is no seam between them */}
        <div
          className="relative"
          style={{ background: "linear-gradient(135deg,#DDEBE0 0%,#C6DDCD 50%,#E8E4C6 100%)" }}
        >
          <Hero />
          <Trust />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent to-[#DDEBE0]" />
        </div>
        <About />
        <Services />
        <Flow />
        <Industries />
        <Process />
        <WhyUs />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
