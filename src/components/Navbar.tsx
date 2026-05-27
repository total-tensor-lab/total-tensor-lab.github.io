import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github } from "lucide-react";

const NAV_LINKS = [
  { label: "Platform", href: "#services" },
  { label: "Security", href: "#why-us" },
  { label: "How It Works", href: "#process" },
  { label: "GitHub", href: "https://github.com/totaltensorlabs", target: "_blank", icon: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-bg/85 backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="#8B5CF6" strokeWidth="1.4" strokeLinejoin="round"/>
                <circle cx="8" cy="8" r="2" fill="#8B5CF6" opacity="0.8"/>
              </svg>
            </div>
            <span className="font-semibold text-white text-sm tracking-tight hidden sm:block">
              Total Tensor Labs
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-brand-muted hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-all duration-200"
              >
                {link.icon && <Github className="w-3.5 h-3.5" />}
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Request Demo
            </a>
            <button
              className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 bg-brand-surface/98 backdrop-blur-xl border-b border-white/[0.05] px-6 py-5 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-brand-muted hover:text-white font-medium text-base py-2.5 px-2 rounded-lg hover:bg-white/[0.04] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.icon && <Github className="w-4 h-4" />}
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 inline-flex w-full items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold bg-brand-primary text-white"
              onClick={() => setMobileOpen(false)}
            >
              Request Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
