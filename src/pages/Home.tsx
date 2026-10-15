import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  Cpu,
  Network,
  Shield,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import AISystemHierarchy from "../components/AISystemHierarchy";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "TTL AI Engineering",
    description:
      "Custom ML/DL models, computer vision, multimodal AI, LLM fine-tuning, advanced analytics, and production model development.",
    outcome:
      "Purpose-built intelligence that solves a specific business problem.",
  },
  {
    icon: Network,
    title: "TTL GenAI & Agentic Systems",
    description:
      "Enterprise RAG, document intelligence, intelligent automation, multi-agent systems, knowledge assistants, and enterprise integrations.",
    outcome:
      "Automate workflows and improve enterprise information access.",
  },
  {
    icon: Cpu,
    title: "TTL AI Infrastructure & Optimization",
    description:
      "GPU infrastructure, cloud/edge deployment, inference acceleration, model compression, private AI deployments, and platform engineering.",
    outcome:
      "Faster, more economical, scalable AI systems.",
  },
  {
    icon: Shield,
    title: "TTL Secure & Responsible AI",
    description:
      "AI privacy infrastructure, security assessments, AI guardrails, governance programs, risk management, and security testing.",
    outcome:
      "Greater control over AI-related security, privacy, and operational risks.",
  },
  {
    icon: Boxes,
    title: "TTL AI Product Development",
    description:
      "End-to-end AI product engineering, from discovery and architecture to API development, frontend UX, productization, and deployment.",
    outcome:
      "A working, maintainable, customer-ready AI product.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "TTL Managed AI Services",
    description:
      "AI observability, monitoring, troubleshooting, model maintenance, evaluation, system improvements, support, and operational management.",
    outcome:
      "AI systems that remain reliable and useful after deployment.",
  },
];

const DELIVERY_STAGES = [
  {
    number: "01",
    title: "Discovery",
    outputs: ["Problem statement", "Stakeholders", "Requirements", "Business KPIs"],
  },
  {
    number: "02",
    title: "Feasibility",
    outputs: ["Data availability", "Success criteria", "Constraints", "Risk and ROI assumptions"],
  },
  {
    number: "03",
    title: "Solution Design",
    outputs: ["Architecture", "Threat model", "Infrastructure", "Cost estimate"],
  },
  {
    number: "04",
    title: "Data Preparation",
    outputs: ["Data quality report", "Dataset specifications", "Access controls"],
  },
  {
    number: "05",
    title: "Development",
    outputs: ["Version-controlled code", "Model/prompt configs", "Automated tests"],
  },
  {
    number: "06",
    title: "Evaluation",
    outputs: ["Baselines", "Acceptance metrics", "Test results", "Safety and failure tests"],
  },
  {
    number: "07",
    title: "Deployment",
    outputs: ["CI/CD", "Infrastructure configs", "Authentication", "Rollout/rollback plan"],
  },
  {
    number: "08",
    title: "Production Validation",
    outputs: ["Load tests", "Security review", "User acceptance", "Operational readiness"],
  },
  {
    number: "09",
    title: "Handover",
    outputs: ["Documentation", "Runbooks", "Training", "Known limitations"],
  },
  {
    number: "10",
    title: "Managed Operations",
    outputs: ["Monitoring", "Incidents", "Change management", "Scheduled reviews"],
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-28 lg:pb-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-surface/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-8%,rgba(139,92,246,0.22),transparent),radial-gradient(circle_at_82%_42%,rgba(6,182,212,0.12),transparent_26%)] pointer-events-none" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-6 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-secondary">
              End-to-end AI engineering
            </p>
            <h1 className="text-[2.14rem] font-bold leading-[1.16] tracking-[-0.025em] text-white sm:text-[2.85rem] lg:text-[3.325rem] xl:text-[3.56rem]">
              From AI ideas to{" "}
              <span className="gradient-text">production-ready intelligent systems.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
              From AI strategy and model development to inference optimization, enterprise deployment, governance, and continuous operations.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/?section=contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary px-7 py-4 text-sm font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(139,92,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                to="/?section=services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              >
                Explore our services
              </Link>
            </div>
          </motion.div>
          <AISystemHierarchy />
        </div>
      </section>

      <section id="services" className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 section-divider" />
        <div className="absolute left-1/4 top-20 h-[480px] w-[480px] rounded-full bg-brand-primary/[0.035] blur-[160px] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              The expertise to take AI from{" "}
              <span className="gradient-text">concept to deployment.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
              We combine applied research, software engineering, and deployment experience to build systems that perform reliably beyond the prototype.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-px overflow-hidden border-y border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description, outcome }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group grid h-full grid-cols-[1.75rem_minmax(0,1fr)] gap-4 bg-brand-bg/95 px-3 py-7 transition-colors duration-300 hover:bg-brand-surface/90 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-6 sm:px-6 lg:min-h-[238px] lg:px-7 lg:py-8"
              >
                <div className="flex h-8 w-8 items-center justify-center text-slate-100 transition-colors group-hover:text-brand-secondary">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-100 md:text-lg">{description}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-muted md:text-base">
                    <strong className="font-semibold text-slate-200">Outcome:</strong>{" "}
                    {outcome}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 section-divider" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">How we work</span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
              A practical path
              <br />
              <span className="gradient-text">from idea to impact.</span>
            </h2>
            <p className="mt-6 max-w-none text-base leading-relaxed text-brand-muted md:text-lg lg:whitespace-nowrap">
              A consistent delivery process for every engagement, from initial discovery through managed operations.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {DELIVERY_STAGES.map((stage, index) => (
              <motion.article
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index % 5 * 0.05 }}
                className="relative rounded-[22px] border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-brand-secondary/30 hover:bg-white/[0.045]"
              >
                <span className="text-xs font-semibold tracking-[0.12em] text-brand-secondary">
                  STAGE {stage.number}
                </span>
                <h3 className="mt-3 min-h-12 text-lg font-semibold leading-snug text-white">{stage.title}</h3>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                  Mandatory outputs
                </p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-100">
                  {stage.outputs.map((output) => (
                    <li key={output} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-secondary" aria-hidden="true" />
                      <span>{output}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
