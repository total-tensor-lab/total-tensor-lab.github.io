import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SecurityPage from "@/pages/Security";
import ProductsPage from "@/pages/Products";
import BlogsPage from "@/pages/Blogs";
import { useEffect, useState } from "react";

export default function App() {
  const [view, setView] = useState(window.location.hash.replace("#", "") || "home");

  useEffect(() => {
    const handleHashChange = () => {
      setView(window.location.hash.replace("#", "") || "home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderContent = () => {
    switch (view) {
      case "products":
        return <ProductsPage />;
      case "blogs":
        return <BlogsPage />;
      case "security":
        return <SecurityPage />;
      case "home":
      default:
        return (
          <>
            <Hero />
            <Services />
            <About />
            <Process />
            <WhyUs />
            <CTA />
          </>
        );
    }
  };

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}
