import { motion } from "motion/react";
import { Database, Eye, Shield, Workflow } from "lucide-react";

const PROBLEMS = [
  {
    id: "leakage",
    icon: Shield,
    title: "Sensitive Data Leakage",
    description:
      "Prompts, logs, and AI copilots can unintentionally expose confidential enterprise data.",
    border: "border-brand-primary/20 hover:border-brand-primary/35",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.12), transparent 55%)",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "rag",
    icon: Database,
    title: "Unsafe RAG Pipelines",
    description:
      "Retrieval systems often embed sensitive documents without sanitization or access controls.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/35",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    glow: "radial-gradient(circle at 80% 20%, rgba(6,182,212,0.12), transparent 55%)",
    span: "",
  },
  {
    id: "agents",
    icon: Workflow,
    title: "Uncontrolled AI Agents",
    description:
      "AI agents can access internal systems, APIs, and tools without runtime governance.",
    border: "border-brand-primary/20 hover:border-brand-primary/35",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 25% 80%, rgba(139,92,246,0.1), transparent 55%)",
    span: "",
  },
  {
    id: "visibility",
    icon: Eye,
    title: "No AI Data Visibility",
    description:
      "Organizations lack traceability into how AI systems process and retrieve sensitive information.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/35",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    glow: "radial-gradient(circle at 75% 80%, rgba(6,182,212,0.1), transparent 55%)",
    span: "md:col-span-2",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/3 top-24 w-[420px] h-[420px] bg-brand-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[380px] h-[380px] bg-brand-secondary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-4xl"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Enterprise AI Introduces{" "}
            <span className="gradient-text">New Risks.</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-3xl">
            Modern AI systems process sensitive enterprise data across prompts,
            vector databases, agents, and retrieval pipelines — often without
            governance or visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={[
                  "group relative overflow-hidden rounded-[24px] border bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300",
                  "shadow-[0_18px_60px_rgba(2,6,23,0.32)] hover:-translate-y-1 hover:bg-white/[0.04]",
                  problem.border,
                  problem.span,
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: problem.glow }}
                />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className={`mb-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 ${problem.iconBg}`}>
                    <Icon className={`h-4.5 w-4.5 ${problem.iconColor}`} />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-white font-semibold text-xl leading-snug mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed max-w-md">
                      {problem.description}
                    </p>
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
