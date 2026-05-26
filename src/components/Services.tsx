import { motion } from "motion/react";
import { Code2, Eye, Server, Shield } from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "AI Product Development",
    description:
      "End-to-end development of intelligent products — from ideation and rapid prototyping to production-grade deployment.",
    accent: "from-brand-secondary/20 to-brand-secondary/5",
    iconColor: "text-brand-secondary",
    iconBg: "bg-brand-secondary/10",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Building vision systems that understand and interpret visual data for automation, inspection, and intelligence at scale.",
    accent: "from-blue-400/20 to-blue-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    icon: Server,
    title: "MLOps & Infrastructure",
    description:
      "Designing robust ML infrastructure for scalable model training, serving, monitoring, and continuous improvement.",
    accent: "from-orange-400/20 to-orange-500/5",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
  },
  {
    icon: Shield,
    title: "Responsible AI",
    description:
      "Embedding fairness, safety, explainability, and ethical principles into every AI system we design and deliver.",
    accent: "from-pink-400/20 to-pink-500/5",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
            <span className="inline-block text-brand-primary text-sm font-semibold tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Our{" "}
            <span className="gradient-text">Core Services</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From foundational research to production deployment, we cover the full
            spectrum of AI engineering.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="gradient-border p-6 group hover:scale-[1.02] transition-transform duration-300 cursor-default"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${svc.iconColor}`} />
                </div>

                <h3 className="text-white font-bold text-lg mb-3">{svc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.description}</p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
