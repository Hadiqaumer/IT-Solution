import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Attendance, Flow, Industries, Process, Services, Trust } from "@/components/Sections";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Industries />
        <Services />
        <Flow />
        <Attendance />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
