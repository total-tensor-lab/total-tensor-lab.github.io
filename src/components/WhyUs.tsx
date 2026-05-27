import { motion } from "motion/react";
import { Cloud, Server, ShieldCheck, Workflow } from "lucide-react";

const DEPLOYMENTS = [
  {
    icon: Server,
    title: "Self-Hosted Runtime",
    description:
      "Deploy PromptShield directly inside your own infrastructure so prompts, context, and governance telemetry remain entirely under customer control.",
    border: "border-brand-primary/20 hover:border-brand-primary/40",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    glow: "radial-gradient(circle at 20% 18%, rgba(139,92,246,0.14), transparent 52%)",
  },
  {
    icon: Workflow,
    title: "Kubernetes Deployment",
    description:
      "Run PromptShield on Kubernetes for standardized enterprise orchestration while data stays within your cluster boundaries and operational guardrails.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    glow: "radial-gradient(circle at 82% 20%, rgba(6,182,212,0.14), transparent 52%)",
  },
  {
    icon: Cloud,
    title: "Private Cloud",
    description:
      "Operate in your private cloud environment with full locality, governance enforcement, and isolation so enterprise data never leaves approved infrastructure.",
    border: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    glow: "radial-gradient(circle at 18% 78%, rgba(6,182,212,0.12), transparent 55%)",
  },
  {
    icon: ShieldCheck,
    title: "Air-Gapped Infrastructure",
    description:
      "Support high-security environments with fully disconnected deployments where sensitive enterprise data remains sealed inside customer-controlled networks.",
    border: "border-brand-success/20 hover:border-brand-success/40",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    glow: "radial-gradient(circle at 78% 78%, rgba(16,185,129,0.12), transparent 55%)",
  },
];

function InfrastructureVisual() {
  return (
    <div className="relative h-16 w-full overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
      <div className="absolute left-6 right-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-[18%] top-1/2 h-6 w-px -translate-y-1/2 bg-gradient-to-b from-brand-secondary/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-brand-primary/50 to-transparent" />
      <div className="absolute right-[18%] top-1/2 h-6 w-px -translate-y-1/2 bg-gradient-to-b from-brand-success/40 to-transparent" />
      <div className="absolute left-[18%] top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-secondary/80 shadow-[0_0_18px_rgba(6,182,212,0.45)]" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/80 shadow-[0_0_22px_rgba(139,92,246,0.55)]" />
      <div className="absolute right-[18%] top-1/2 h-2.5 w-2.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-success/80 shadow-[0_0_18px_rgba(16,185,129,0.45)]" />
    </div>
  );
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-secondary/[0.035] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[480px] h-[480px] bg-brand-primary/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-4xl"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Deployment Options
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Deploy Anywhere. Keep Data{" "}
            <span className="gradient-text">Sovereign.</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-3xl">
            PromptShield is designed for enterprise environments where data privacy,
            locality, and governance are mandatory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-[24px] border border-brand-primary/20 bg-white/[0.04] px-6 py-5 shadow-[0_20px_70px_rgba(2,6,23,0.32)] backdrop-blur-sm"
        >
          <p className="text-white text-lg md:text-xl font-semibold tracking-tight">
            Bring compute to data <span className="text-brand-muted">— not data to compute.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {DEPLOYMENTS.map((deployment, i) => {
            const Icon = deployment.icon;
            return (
              <motion.div
                key={deployment.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-[24px] border bg-brand-surface/80 p-8 shadow-[0_20px_70px_rgba(2,6,23,0.34)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${deployment.border}`}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                  style={{ background: deployment.glow }}
                />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 ${deployment.iconBg}`}>
                      <Icon className={`h-5 w-5 ${deployment.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-slate-500">
                      Customer Infra
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-xl mb-3 leading-snug">
                    {deployment.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-md">
                    {deployment.description}
                  </p>

                  <InfrastructureVisual />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
