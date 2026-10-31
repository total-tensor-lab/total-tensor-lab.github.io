import { useEffect } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecurityPage from "@/pages/Security";
import ProductsPage from "@/pages/Products";
import ProjectLoloPage from "@/pages/ProjectLolo";
import PromptVeilPage from "@/pages/PromptVeil";
import BlogsPage from "@/pages/Blogs";

function RouteScrollManager() {
  const { pathname, search, key } = useLocation();

  useEffect(() => {
    const section = new URLSearchParams(search).get("section");

    if (!section) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(section);
      if (!target) return;

      target.setAttribute("tabindex", "-1");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      target.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, search, key]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <RouteScrollManager />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<ProjectLoloPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/project-lolo" element={<ProjectLoloPage />} />
          <Route path="/products/promptveil" element={<PromptVeilPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
