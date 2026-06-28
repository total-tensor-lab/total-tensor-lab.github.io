import { motion } from "motion/react";
import { Boxes, Cloud, Database, Workflow } from "lucide-react";

const INTEGRATION_GROUPS = [
  {
    title: "AI Frameworks",
    icon: Workflow,
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 18% 18%, rgba(139,92,246,0.14), transparent 52%)",
    items: ["LangChain", "LlamaIndex"],
    span: "md:col-span-2 lg:col-span-1",
  },
  {
    title: "Databases",
    icon: Database,
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    glow: "radial-gradient(circle at 82% 18%, rgba(6,182,212,0.14), transparent 52%)",
    items: ["PostgreSQL", "MongoDB"],
    span: "",
  },
  {
    title: "Vector Databases",
    icon: Boxes,
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 20% 82%, rgba(139,92,246,0.12), transparent 54%)",
    items: ["Pinecone", "Chroma", "Qdrant", "Weaviate"],
    span: "md:col-span-2",
  },
  {
    title: "Cloud & Storage",
    icon: Cloud,
    accent: "border-brand-success/20 hover:border-brand-success/40",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    glow: "radial-gradient(circle at 78% 78%, rgba(16,185,129,0.12), transparent 54%)",
    items: ["AWS S3", "Kafka", "APIs", "Object Storage"],
    span: "",
  },
];

export default function CTA() {
  return (
    <section id="integrations" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/4 top-16 w-[420px] h-[420px] rounded-full bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-brand-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Built for Modern{" "}
            <span className="gradient-text">AI Infrastructure</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-3xl leading-relaxed">
            Integrate PromptShield into existing AI pipelines without changing your architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTEGRATION_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={[
                  "group relative overflow-hidden rounded-[24px] border bg-white/[0.03] p-6 backdrop-blur-sm",
                  "shadow-[0_20px_70px_rgba(2,6,23,0.34)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045]",
                  group.accent,
                  group.span,
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: group.glow }}
                />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 ${group.iconBg}`}>
                      <Icon className={`h-5 w-5 ${group.iconColor}`} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-slate-500">
                      Compatible
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-xl mb-2">
                      {group.title}
                    </h3>
                    <div className="h-px w-16 bg-gradient-to-r from-white/15 to-transparent" />
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-xl border border-white/[0.08] bg-white/[0.02] px-3.5 py-2.5 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-transform duration-300 group-hover:-translate-y-0.5"
                      >
                        <span className="mr-2.5 inline-block h-2 w-2 rounded-full bg-slate-500/70" />
                        {item}
                      </span>
                    ))}
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
