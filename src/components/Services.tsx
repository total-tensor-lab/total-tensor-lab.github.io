import { motion } from "motion/react";
import { Shield, Database, Search, FileText, Server, ClipboardList } from "lucide-react";

const PRODUCTS = [
  {
    id: "runtime",
    icon: Shield,
    label: "AI Runtime Protection",
    description:
      "Intercept, govern, and audit every AI inference request before it reaches an external model. Define allow/deny policies on prompt content, enforce redaction rules, and log every interaction.",
    accent: "border-brand-primary/30 hover:border-brand-primary/60",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    tag: "Core",
    tagColor: "bg-brand-primary/10 text-brand-primary border-brand-primary/20",
    wide: true,
  },
  {
    id: "rag",
    icon: Search,
    label: "RAG Protection",
    description:
      "Secure retrieval-augmented generation without exposing source documents. Enforce retrieval-time access controls and sanitize context before it enters the prompt.",
    accent: "border-brand-secondary/30 hover:border-brand-secondary/60",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    tag: "New",
    tagColor: "bg-brand-secondary/10 text-brand-secondary border-brand-secondary/20",
    wide: false,
  },
  {
    id: "vector",
    icon: Database,
    label: "Vector Shield",
    description:
      "Governance layer for vector databases. Control which embeddings are queryable by which identities, enforce namespace isolation, and prevent embedding inversion attacks.",
    accent: "border-brand-secondary/30 hover:border-brand-secondary/50",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    tag: null,
    tagColor: "",
    wide: false,
  },
  {
    id: "data",
    icon: FileText,
    label: "Data Governance",
    description:
      "Unified privacy controls for structured and unstructured data flowing through AI pipelines. Apply PII detection, masking, and differential privacy at the infrastructure layer.",
    accent: "border-brand-success/30 hover:border-brand-success/50",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    tag: null,
    tagColor: "",
    wide: false,
  },
  {
    id: "self-hosted",
    icon: Server,
    label: "Self-hosted Runtime",
    description:
      "Deploy the full TTL stack entirely within your own cloud or on-prem environment. Your keys, your compute, your control. No vendor lock-in.",
    accent: "border-brand-primary/30 hover:border-brand-primary/50",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    tag: null,
    tagColor: "",
    wide: false,
  },
  {
    id: "audit",
    icon: ClipboardList,
    label: "Compliance Audit",
    description:
      "Immutable audit logs for every AI interaction. Query, export, and report on AI usage across your organization for GDPR, HIPAA, and SOC2 compliance.",
    accent: "border-slate-700/60 hover:border-slate-600",
    iconBg: "bg-slate-700/30",
    iconColor: "text-slate-400",
    tag: null,
    tagColor: "",
    wide: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            The Platform
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-lg">
              Everything your AI stack{" "}
              <span className="gradient-text">needs, governed.</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed max-w-sm md:text-right">
              Six interlocking modules. One privacy runtime.
              Deploy any subset or the full stack.
            </p>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`
                  relative bg-brand-surface border rounded-2xl p-7 group cursor-default
                  transition-all duration-300 overflow-hidden
                  ${product.accent}
                  ${product.wide ? "lg:col-span-2" : ""}
                `}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse 60% 40% at 30% 30%, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />

                <div className="relative z-10">
                  {/* Icon + tag row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl ${product.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-5 h-5 ${product.iconColor}`} />
                    </div>
                    {product.tag && (
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${product.tagColor}`}>
                        {product.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{product.label}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "<5ms", label: "Runtime overhead" },
            { value: "100%", label: "On-premise deployment" },
            { value: "Any", label: "LLM or embedding model" },
            { value: "SOC2", label: "Compliance ready" },
          ].map((stat) => (
            <div key={stat.label} className="bg-brand-surface border border-white/[0.06] rounded-xl px-5 py-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-brand-muted text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
