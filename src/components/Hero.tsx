import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";




export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background – let global starfield show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/60" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-brand-primary/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-brand-secondary/6 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col items-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Engineering the{" "}
              <span className="gradient-text">Next Generation</span>{" "}
              of AI
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-10"
            >
              Total Tensor Labs is an AI research and engineering organization
              building cutting-edge machine learning solutions that transform
              industries — from prototype to production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-gray-900 font-semibold text-base shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold text-base hover:-translate-y-1 hover:border-white/40 hover:shadow-xl transition-all duration-200"
              >
                About Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
