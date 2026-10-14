import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", to: "/?section=services" },
  { label: "Products", to: "/products" },
  { label: "Blogs", to: "/blogs" },
  { label: "Security", to: "/security" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
    isActive ? "bg-white/[0.08] text-white" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
  }`;

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo + Nav Links */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="Total Tensor Labs home">
              <Logo size={52} />
              <span className="font-semibold text-white text-base tracking-tight hidden sm:block">
                Total Tensor Labs
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/products"}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://github.com/orgs/total-tensor-lab/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              to="/?section=contact"
              className="whitespace-nowrap px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
            >
              Talk to Us
            </Link>
            <button
              className="md:hidden text-slate-400 hover:text-white transition-colors p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-lg"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-x-0 top-16 z-40 bg-brand-surface/98 backdrop-blur-xl border-b border-white/[0.05] px-6 py-5 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/products"}
                className={({ isActive }) => `flex items-center gap-2 rounded-lg px-2 py-2.5 text-base font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${isActive ? "bg-white/[0.08] text-white" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/orgs/total-tensor-lab/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-2 py-2.5 text-base font-medium text-slate-300 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              onClick={() => setMobileOpen(false)}
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <Link
              to="/?section=contact"
              className="mt-3 inline-flex w-full items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold bg-brand-primary text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
