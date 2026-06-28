import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function BlogsPage() {
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
          <span className="text-xs font-semibold text-amber-200 tracking-wide">Coming Soon</span>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 mb-10"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-semibold tracking-widest uppercase">
            Resource Library
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.1rem] leading-[1.04] tracking-[-0.04em] mb-10 font-bold max-w-2xl"
        >
          Insights &
          <br />
          <span className="gradient-text">Best Practices</span>
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
          Our blog is under construction. Soon you'll find in-depth articles, case studies, and industry insights on AI privacy, governance, and enterprise security.
        </motion.p>

        {/* Coming soon illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 flex flex-col items-center justify-center text-center py-16"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="mb-6"
          >
            <BookOpen className="w-16 h-16 text-brand-primary/40 mx-auto" strokeWidth={1.5} />
          </motion.div>

          <h2 className="text-2xl font-semibold text-slate-200 mb-3">Blog Launching Soon</h2>
          <p className="text-brand-muted max-w-md mb-8">
            We're preparing thought leadership content on privacy infrastructure, AI governance, and compliance for enterprise systems.
          </p>

          {/* Placeholder topics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 w-full max-w-2xl">
            {[
              "Privacy by Design in AI",
              "Enterprise Governance Frameworks",
              "Compliance Automation",
              "Security Best Practices",
            ].map((topic, i) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 + i * 0.08 }}
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-slate-300 text-sm font-medium opacity-50"
              >
                {topic}
              </motion.div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <p className="text-slate-400 text-sm mb-4">
              Want to be notified when we publish?
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-white/[0.08] border border-white/12 hover:bg-white/[0.12] hover:border-brand-primary/40 transition-all duration-200"
            >
              <span>Join Our Newsletter</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
