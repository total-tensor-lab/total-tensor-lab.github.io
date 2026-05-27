import { motion } from "motion/react";

const PILLARS = [
  {
    number: "01",
    title: "Zero Egress Architecture",
    description:
      "Your enterprise data never leaves your infrastructure. AI requests are processed inside your own runtime — models are invoked on your terms, not the vendor's.",
    color: "text-brand-secondary",
    borderColor: "border-brand-secondary/20",
    bgColor: "bg-brand-secondary/5",
  },
  {
    number: "02",
    title: "Unified Policy Engine",
    description:
      "Define and enforce governance policies across every AI system in one place. From prompt-level redaction to model-level allow-lists, governance is code.",
    color: "text-brand-primary",
    borderColor: "border-brand-primary/20",
    bgColor: "bg-brand-primary/5",
  },
  {
    number: "03",
    title: "Full Observability",
    description:
      "Every inference, retrieval, and embedding operation is logged in structured, queryable audit trails. Prove compliance. Detect anomalies. Understand AI behaviour at scale.",
    color: "text-brand-success",
    borderColor: "border-brand-success/20",
    bgColor: "bg-brand-success/5",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
              The Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built for enterprise{" "}
              <span className="gradient-text">AI infrastructure.</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mb-6">
              Enterprise teams can't afford to send sensitive data to external AI services.
              Competitive intelligence, patient records, financial models, legal documents —
              none of it should leave your perimeter.
            </p>
            <p className="text-brand-muted text-base leading-relaxed mb-10">
              TTL provides a self-hosted privacy runtime that sits between your data and
              any AI system. Governance policies are enforced at the infrastructure layer,
              not the application layer — making compliance structural rather than procedural.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Talk to our infrastructure team
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative border ${pillar.borderColor} ${pillar.bgColor} rounded-2xl p-7 group`}
              >
                <div className="flex items-start gap-5">
                  <span className={`font-mono text-xs font-bold ${pillar.color} opacity-60 mt-1 flex-shrink-0 w-6`}>
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{pillar.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
