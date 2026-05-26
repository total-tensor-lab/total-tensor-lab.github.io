import { motion } from "motion/react";
import { FlaskConical, Rocket, Handshake, Cpu } from "lucide-react";

const PILLARS = [
  {
    icon: FlaskConical,
    title: "Research-First Thinking",
    description:
      "Every solution starts with rigorous research. We don't retrofit off-the-shelf models — we understand the problem deeply and choose or build the right approach from first principles.",
    gradient: "from-brand-primary/20 via-brand-primary/5 to-transparent",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    border: "hover:border-brand-primary/20",
  },
  {
    icon: Rocket,
    title: "Production-Ready from Day One",
    description:
      "Research stays research unless it ships. We engineer with deployment in mind — scalable infrastructure, monitoring, and CI/CD baked in from the first commit.",
    gradient: "from-brand-secondary/20 via-brand-secondary/5 to-transparent",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    border: "hover:border-brand-secondary/20",
  },
  {
    icon: Handshake,
    title: "Fully Transparent Collaboration",
    description:
      "No black boxes, no surprises. You get full visibility into experiments, tradeoffs, and progress. We work as an extension of your team, not a distant vendor.",
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    border: "hover:border-emerald-500/20",
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Infrastructure",
    description:
      "Access to high-performance GPU clusters, modern MLOps tooling, and cutting-edge frameworks — without the overhead of building and maintaining it yourself.",
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-400",
    border: "hover:border-orange-500/20",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-secondary/4 rounded-full blur-[140px]" />
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
            Our Edge
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Why{" "}
            <span className="gradient-text">Total Tensor Labs</span>?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We're a focused team that cares deeply about doing AI right — with
            the craft, transparency, and ambition that great work demands.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`relative bg-brand-surface border border-white/[0.06] ${p.border} rounded-2xl p-8 overflow-hidden group transition-colors duration-300`}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex gap-5">
                  <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Icon className={`w-6 h-6 ${p.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
