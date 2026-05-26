import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-6">
            Let's Build Together
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Unlock the{" "}
            <span className="gradient-text">Power of AI</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            Tell us about your project and we'll be in touch within 24 hours.
            No commitment — just a conversation about what's possible.
          </p>

          {/* Email form */}
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-brand-primary/50 focus:bg-white/8 transition-all"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-sm shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200 whitespace-nowrap"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-10 py-4 px-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              Thanks! We'll reach out within 24 hours.
            </div>
          )}

          {/* Alternative contact */}
          <p className="text-slate-500 text-sm">
            Prefer email?{" "}
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
