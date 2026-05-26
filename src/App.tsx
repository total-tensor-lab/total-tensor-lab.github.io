import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Process />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
