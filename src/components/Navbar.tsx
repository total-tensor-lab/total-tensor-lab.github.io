import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Platform", href: "#services" },
  { label: "Security", href: "#why-us" },
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
          {/* Logo + Nav Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
              <Logo size={60} />
              <span className="font-semibold text-white text-base tracking-tight hidden sm:block">
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
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] text-sm font-medium transition-colors duration-150"
                >
                  {link.icon && <Github className="w-3.5 h-3.5" />}
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-colors duration-150"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-x-0 top-16 z-40 bg-brand-surface/98 backdrop-blur-xl border-b border-white/[0.05] px-6 py-5 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-slate-300 hover:text-white font-medium text-base py-2.5 px-2 rounded-lg hover:bg-white/[0.06] transition-colors duration-150"
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

