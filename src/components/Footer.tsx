import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  HeartPulse,
  Landmark,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const USE_CASES = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    detail: "Identifying patient details in scanned documents.",
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    glow: "radial-gradient(circle at 82% 18%, rgba(248,213,139,0.12), transparent 52%)",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
  },
  {
    icon: Landmark,
    title: "Finance",
    detail: "Identifying account details in documents or prompts.",
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    glow: "radial-gradient(circle at 18% 18%, rgba(245,184,61,0.12), transparent 52%)",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
  },
  {
    icon: ShieldCheck,
    title: "Insurance",
    detail: "Identifying personal details in claim documents and images.",
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    glow: "radial-gradient(circle at 78% 20%, rgba(248,213,139,0.12), transparent 52%)",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const showProjectLoloUseCases = pathname === "/" || pathname === "/products/project-lolo";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-white/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] rounded-full bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute right-0 top-24 w-[420px] h-[420px] rounded-full bg-brand-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {showProjectLoloUseCases ? (
          <>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 max-w-4xl"
            >
              <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
                Industries
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Illustrative <span className="gradient-text">Use Cases.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              {USE_CASES.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className={`group relative overflow-hidden rounded-[22px] border bg-white/[0.03] p-6 backdrop-blur-sm shadow-[0_18px_60px_rgba(10,8,5,0.3)] transition-all duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none hover:bg-white/[0.045] ${card.accent}`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100 pointer-events-none"
                      style={{ background: card.glow }}
                    />
                    <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center gap-3">
                        <div className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/8 ${card.iconBg}`}>
                          <Icon className={`h-4.5 w-4.5 ${card.iconColor}`} aria-hidden="true" />
                        </div>
                        <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                      </div>
                      <p className="text-brand-body text-sm leading-relaxed">{card.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : null}

        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] px-6 py-14 md:px-10 md:py-16 mb-16 text-center backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,184,61,0.14),_transparent_32%),radial-gradient(circle_at_80%_30%,_rgba(248,213,139,0.08),_transparent_24%)] pointer-events-none" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-5">
              Explore Project Lolo
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.02] tracking-tight mb-5">
              Ready to govern{" "}
              <span className="gradient-text">your enterprise AI?</span>
            </h2>
            <p className="text-brand-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Discover how Project Lolo protects sensitive data across your AI workflows.
              Get in touch to discuss a demo.
            </p>

            {!sent ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-stretch justify-center gap-3 max-w-[680px] mx-auto mb-8"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-label" />
                  <input
                    type="email"
                    aria-label="Work email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-full pl-12 pr-5 py-4 rounded-full bg-white/[0.04] border border-brand-label text-white placeholder:text-brand-label placeholder:opacity-100 text-sm focus:outline-none focus:border-brand-primary/40 focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-primary text-brand-ink hover:bg-brand-secondary font-semibold text-sm shadow-[0_18px_60px_rgba(255,255,255,0.08)] transition-all duration-200"
                >
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="max-w-md mx-auto mb-8 py-4 px-6 rounded-full bg-brand-success/10 border border-brand-success/20 text-brand-success text-sm font-medium">
                Thanks. We&apos;ll reach out within 24 hours.
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </footer>
  );
}
