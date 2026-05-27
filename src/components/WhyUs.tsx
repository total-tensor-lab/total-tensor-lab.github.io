import { motion } from "motion/react";
import { Lock, ShieldCheck, Cpu, Activity } from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Local Processing, Always",
    description:
      "AI requests are processed inside your own infrastructure. Your data never touches an external server, never traverses the public internet. Zero egress by design.",
    gradient: "from-brand-secondary/15 via-transparent to-transparent",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    border: "border-brand-secondary/20 hover:border-brand-secondary/40",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Built from the ground up for SOC2 Type II, GDPR, HIPAA, and ISO 27001. Cryptographic audit logs, role-based access controls, and end-to-end encryption throughout.",
    gradient: "from-brand-primary/15 via-transparent to-transparent",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    border: "border-brand-primary/20 hover:border-brand-primary/40",
  },
  {
    icon: Cpu,
    title: "Model Agnostic",
    description:
      "Works with OpenAI, Anthropic, Cohere, Mistral, and any open-source model. Bring your own inference — TTL is the governance layer, not the model layer.",
    gradient: "from-violet-500/15 via-transparent to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-500/40",
  },
  {
    icon: Activity,
    title: "Complete Audit Trail",
    description:
      "Every AI interaction — prompt, context, model response — is logged, timestamped, and queryable. Prove compliance to auditors, not just to yourself.",
    gradient: "from-brand-success/12 via-transparent to-transparent",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    border: "border-brand-success/20 hover:border-brand-success/40",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Why Privacy-First
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            The infrastructure your{" "}
            <span className="gradient-text">security team approves.</span>
          </h2>
          <p className="text-brand-muted text-base max-w-xl mx-auto">
            Designed with enterprise security, governance, and platform engineering teams
            as the primary stakeholders — not an afterthought.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`relative bg-brand-surface border ${p.border} rounded-2xl p-8 overflow-hidden group transition-colors duration-300`}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${p.iconColor}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{p.title}</h3>
                  <p className="text-brand-muted text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
