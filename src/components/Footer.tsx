import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Request a demo of Project Lolo");
    const body = encodeURIComponent(`Hello, I would like to request a product walkthrough.\n\nWork email: ${email}`);
    window.location.href = `mailto:hello@totaltensorlab.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="relative border-t border-white/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] rounded-full bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute right-0 top-24 w-[420px] h-[420px] rounded-full bg-brand-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
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
            <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.02] tracking-tight mb-5 text-balance">
              Ready to govern{" "}
              <span className="gradient-text">your enterprise AI?</span>
            </h2>
            <p className="text-brand-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Request a product walkthrough to see how Project Lolo protects sensitive data across your AI workflows.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-stretch justify-center gap-3 max-w-[680px] mx-auto mb-4"
            >
              <div className="relative flex flex-1 flex-col gap-2 text-left">
                <label htmlFor="work-email" className="pl-4 text-sm font-medium text-brand-body">
                  Work email
                </label>
                <div className="relative">
                  <Mail aria-hidden="true" className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-label" />
                  <input
                    id="work-email"
                    type="email"
                    autoComplete="email"
                    aria-describedby="email-help"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-5 py-4 rounded-full bg-white/[0.04] border border-brand-label text-white placeholder:text-brand-label placeholder:opacity-100 text-sm focus:outline-none focus:border-brand-primary/40 focus:ring-1 focus:ring-brand-primary/20 transition-all"
                  />
                </div>
                <span id="email-help" className="px-4 text-xs leading-relaxed text-brand-label">
                  Use your work email to request a product walkthrough.
                </span>
              </div>
              <button
                type="submit"
                className="inline-flex h-[54px] shrink-0 items-center justify-center gap-2 px-7 rounded-full bg-brand-primary text-brand-ink hover:bg-brand-secondary font-semibold text-sm shadow-[0_18px_60px_rgba(255,255,255,0.08)] transition-all duration-200 md:mt-7"
              >
                Request a demo <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="max-w-xl mx-auto mb-4 text-xs leading-relaxed text-brand-label">
              This opens an email draft to hello@totaltensorlab.com in your email app.
            </p>

          </div>
        </motion.div>

      </div>
    </footer>
  );
}
