import { motion } from "motion/react";
import { Plug, SlidersHorizontal, Server, BarChart3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Plug,
    title: "Connect",
    description:
      "Integrate TTL with your existing AI stack in minutes. Drop-in SDK for LangChain, LlamaIndex, and direct OpenAI/Anthropic clients. No architecture changes required.",
    color: "from-brand-secondary/20 to-transparent",
    iconBg: "bg-brand-secondary/10",
    iconColor: "text-brand-secondary",
    dot: "bg-brand-secondary",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Configure",
    description:
      "Define data governance policies as code. Set redaction rules, access controls, content filters, and model allow-lists through a declarative YAML or API-driven interface.",
    color: "from-brand-primary/20 to-transparent",
    iconBg: "bg-brand-primary/10",
    iconColor: "text-brand-primary",
    dot: "bg-brand-primary",
  },
  {
    number: "03",
    icon: Server,
    title: "Deploy",
    description:
      "Self-host the privacy runtime inside your own infrastructure — on-prem, private cloud, or air-gapped environments. Docker, Kubernetes, and Helm charts provided.",
    color: "from-brand-success/15 to-transparent",
    iconBg: "bg-brand-success/10",
    iconColor: "text-brand-success",
    dot: "bg-brand-success",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Monitor",
    description:
      "Continuous compliance audit and real-time alerting. Query your AI interaction logs, export reports, and receive anomaly alerts before they become incidents.",
    color: "from-violet-500/15 to-transparent",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    dot: "bg-violet-400",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-primary/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            From integration to{" "}
            <span className="gradient-text">compliance in four steps.</span>
          </h2>
          <p className="text-brand-muted text-base max-w-xl mx-auto">
            A simple, predictable deployment model built for platform engineering teams.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[2.6rem] left-[calc(12.5%-0.5px)] right-[calc(12.5%-0.5px)] h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="relative z-10"
                >
                  {/* Step bubble */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-full ${step.dot} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="text-slate-600 font-mono text-xs">{step.number}</span>
                  </div>

                  <div className={`bg-gradient-to-b ${step.color} border border-white/[0.06] rounded-2xl p-6 h-full`}>
                    <div className={`w-9 h-9 rounded-lg ${step.iconBg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-4.5 h-4.5 ${step.iconColor}`} />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2.5">{step.title}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
