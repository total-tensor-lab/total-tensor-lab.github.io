import { motion } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We work closely with you to understand your challenges, goals, data landscape, and success criteria — building a shared foundation.",
    color: "from-brand-primary/30 to-brand-primary/5",
    dot: "bg-brand-primary",
  },
  {
    number: "02",
    title: "Research & Design",
    description:
      "Our research team identifies optimal AI approaches, surveys the literature, and designs the model architecture and data pipeline.",
    color: "from-blue-500/30 to-blue-500/5",
    dot: "bg-blue-500",
  },
  {
    number: "03",
    title: "Build & Train",
    description:
      "We develop, experiment, and iterate — training models with rigorous evaluation, ablation studies, and benchmark comparisons.",
    color: "from-brand-secondary/30 to-brand-secondary/5",
    dot: "bg-brand-secondary",
  },
  {
    number: "04",
    title: "Deploy & Scale",
    description:
      "We ship your solution with production-grade infrastructure — including monitoring, drift detection, and ongoing optimization.",
    color: "from-pink-500/30 to-pink-500/5",
    dot: "bg-pink-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Our{" "}
            <span className="gradient-text">Engagement Process</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven four-step process that takes you from idea to
            production-ready AI system.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-full ${step.dot} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <span className="text-slate-600 font-mono text-sm">{step.number}</span>
                </div>

                <div className={`bg-gradient-to-br ${step.color} border border-white/[0.06] rounded-2xl p-6 h-full`}>
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
