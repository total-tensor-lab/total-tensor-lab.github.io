import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
      setCompany("");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      {/* Dual glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)" }} />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Get Early Access
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-6 leading-tight">
            Ready to secure{" "}
            <span className="gradient-text">your AI stack?</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Join enterprise teams building privacy-first AI. We'll show you how TTL
            fits into your existing infrastructure in under 30 minutes.
          </p>

          {/* Form */}
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-sm mx-auto mb-10"
            >
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                <input
                  type="email"
                  placeholder="work@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3.5 rounded-lg bg-brand-surface border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/20 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Company name (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3.5 rounded-lg bg-brand-surface border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-primary/30 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-primary text-white font-semibold text-sm shadow-lg shadow-brand-primary/25 hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="max-w-sm mx-auto mb-10 py-4 px-6 rounded-xl bg-brand-success/10 border border-brand-success/25 text-brand-success text-sm font-medium flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-success inline-block" />
              Thanks! We'll reach out within 24 hours.
            </div>
          )}

          <p className="text-slate-600 text-sm">
            Or email us directly at{" "}
            <a
              href="mailto:hello@totaltensorlabs.ai"
              className="text-brand-primary hover:text-brand-primary/80 underline underline-offset-2 transition-colors"
            >
              hello@totaltensorlabs.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
