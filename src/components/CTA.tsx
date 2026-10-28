import { motion, useReducedMotion } from "motion/react";
import { Boxes, Cloud, Database, Workflow } from "lucide-react";

const INTEGRATION_GROUPS = [
  {
    title: "AI Frameworks",
    icon: Workflow,
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 18% 18%, rgba(245,184,61,0.14), transparent 52%)",
    items: ["LangChain", "LlamaIndex"],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    glow: "radial-gradient(circle at 82% 18%, rgba(248,213,139,0.14), transparent 52%)",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Vector Databases",
    icon: Boxes,
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 20% 82%, rgba(245,184,61,0.12), transparent 54%)",
    items: ["Pinecone", "Chroma", "Qdrant", "Weaviate"],
  },
  {
    title: "Cloud & Storage",
    icon: Cloud,
    accent: "border-brand-success/20 hover:border-brand-success/40",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    glow: "radial-gradient(circle at 78% 78%, rgba(16,185,129,0.12), transparent 54%)",
    items: ["AWS S3", "Kafka", "APIs", "Object Storage"],
  },
];

export default function CTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="integrations" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/4 top-16 w-[420px] h-[420px] rounded-full bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[420px] h-[420px] rounded-full bg-brand-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-4xl"
        >
          <span className="lolo-section-label mb-4">
            Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Built for Modern{" "}
            <span className="gradient-text">AI Infrastructure</span>
          </h2>
          <p className="text-brand-body text-base md:text-lg max-w-3xl leading-relaxed">
            Integrate Project Lolo into existing AI pipelines without changing your architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {INTEGRATION_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={[
                  "group relative overflow-hidden rounded-2xl border bg-white/[0.03] p-5 backdrop-blur-sm",
                  "shadow-[0_20px_70px_rgba(10,8,5,0.34)] transition-colors duration-300 motion-reduce:transition-none hover:bg-white/[0.045]",
                  group.accent,
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100 pointer-events-none"
                  style={{ background: group.glow }}
                />
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/8 ${group.iconBg}`}>
                      <Icon className={`h-4 w-4 ${group.iconColor}`} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg leading-snug">
                        {group.title}
                      </h3>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-brand-label">
                        Compatible
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-sm font-medium text-brand-body shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      >
                        <span className="mr-2 inline-block h-2 w-2 shrink-0 rounded-full bg-slate-500/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
