import { Shield, Cpu, FileCheck, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function SecurityPage() {
  return (
    <section className="relative overflow-hidden pt-28 pb-28 lg:pt-36 lg:pb-44">
      {/* Ambient lighting layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-surface/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.18),transparent),radial-gradient(circle_at_80%_28%,rgba(6,182,212,0.12),transparent_26%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[640px] h-[640px] bg-brand-secondary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[560px] h-[560px] bg-brand-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1560px] mx-auto px-6 lg:px-8 w-full">
        {/* WIP Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-950/40 border border-amber-800/60 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="text-xs font-semibold text-amber-200 tracking-wide">Work in Progress</span>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 mb-10"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-semibold tracking-widest uppercase">
            Security & Compliance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.1rem] leading-[1.04] tracking-[-0.04em] mb-10 font-bold max-w-2xl"
        >
          Enterprise-Grade
          <br />
          <span className="gradient-text">Security</span>
        </motion.h1>

        {/* Divider accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
          className="origin-left w-16 h-0.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary mb-10"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-brand-muted text-lg leading-relaxed max-w-xl mb-12"
        >
          At Total Tensor Labs, we prioritize security by design. Our infrastructure is built with enterprise-grade protocols, zero-trust architecture, and advanced threat detection systems to keep your data protected.
        </motion.p>

        {/* Security Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        >
          {[
            { icon: Shield, title: "Zero Trust Architecture", desc: "Identity-centric security model with strict access controls." },
            { icon: Cpu, title: "End-to-End Encryption", desc: "Military-grade encryption for all data in transit and at rest." },
            { icon: FileCheck, title: "Regular Audits", desc: "Third-party penetration testing and compliance verification." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.07 }}
              className="group relative overflow-hidden flex items-start gap-4 px-6 py-6 rounded-2xl border border-white/12 bg-white/[0.025] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-200"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 20% 50%, rgba(139,92,246,0.12), transparent 70%)` }}
              />
              <span className="relative z-10 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-brand-primary/10">
                <Icon className="h-5 w-5 text-brand-primary" />
              </span>
              <div className="relative z-10 min-w-0">
                <p className="text-sm font-semibold text-slate-200 leading-snug">{title}</p>
                <p className="text-xs text-brand-muted mt-1 leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-16 flex flex-col sm:flex-row items-stretch gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-sm text-white overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:shadow-[0_0_55px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary" />
            <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-80 transition-opacity duration-200 blur-xl" />
            <span className="relative z-10">Request Security Details</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}