import { motion } from "motion/react";
import {
  ClipboardList,
  Database,
  Search,
  Server,
  Shield,
  SlidersHorizontal,
} from "lucide-react";

const CAPABILITIES = [
  {
    id: "runtime",
    icon: Shield,
    title: "Runtime AI Protection",
    description:
      "Monitor and govern prompts, responses, agents, and AI workflows in real time.",
    border: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    gradient:
      "radial-gradient(circle at 18% 22%, rgba(139,92,246,0.14), transparent 52%)",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    id: "vector",
    icon: Database,
    title: "Vector Database Governance",
    description:
      "Detect sensitive embeddings, unsafe retrieval patterns, and data leakage risks.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    gradient:
      "radial-gradient(circle at 82% 22%, rgba(6,182,212,0.14), transparent 52%)",
    span: "",
  },
  {
    id: "scanning",
    icon: Search,
    title: "Structured & Unstructured Data Scanning",
    description:
      "Scan databases, documents, logs, APIs, and object storage for sensitive AI data.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    gradient:
      "radial-gradient(circle at 20% 80%, rgba(6,182,212,0.12), transparent 55%)",
    span: "md:col-span-2",
  },
  {
    id: "local",
    icon: Server,
    title: "Local Processing Engine",
    description:
      "All scanning and governance can run fully inside your infrastructure.",
    border: "border-brand-success/20 hover:border-brand-success/40",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    gradient:
      "radial-gradient(circle at 80% 78%, rgba(16,185,129,0.12), transparent 55%)",
    span: "",
  },
  {
    id: "policy",
    icon: SlidersHorizontal,
    title: "Policy Enforcement Engine",
    description:
      "Create granular governance policies for AI systems and data flows.",
    border: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    gradient:
      "radial-gradient(circle at 78% 18%, rgba(139,92,246,0.14), transparent 52%)",
    span: "",
  },
  {
    id: "audit",
    icon: ClipboardList,
    title: "Audit & Traceability",
    description:
      "Track how AI systems access, retrieve, and process enterprise data.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    gradient:
      "radial-gradient(circle at 22% 20%, rgba(6,182,212,0.14), transparent 52%)",
    span: "lg:col-span-2",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/4 top-20 w-[420px] h-[420px] bg-brand-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-10 w-[420px] h-[420px] bg-brand-secondary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-4xl"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Built for Enterprise{" "}
            <span className="gradient-text">AI Governance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((capability, i) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={[
                  "group relative overflow-hidden rounded-[24px] border bg-white/[0.03] p-6 backdrop-blur-sm",
                  "shadow-[0_20px_70px_rgba(2,6,23,0.34)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045]",
                  capability.border,
                  capability.span,
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: capability.gradient }}
                />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-primary/12 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 ${capability.iconBg}`}
                  >
                    <Icon className={`h-4.5 w-4.5 ${capability.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl leading-snug mb-2.5 max-w-sm">
                      {capability.title}
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed max-w-md">
                      {capability.description}
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
