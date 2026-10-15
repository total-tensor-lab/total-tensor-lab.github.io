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
    title: "AI Engineering",
    description: "Custom models and analytics built around your business needs.",
    outcome: "AI that solves real problems.",
  },
  {
    icon: Network,
    title: "GenAI & Agentic Systems",
    description: "RAG, assistants, and AI agents that put knowledge to work.",
    outcome: "Faster workflows. Easier access to information.",
  },
  {
    icon: Cpu,
    title: "AI Infrastructure & Optimization",
    description: "Deploy and optimize AI across cloud, edge, or private environments.",
    outcome: "Better performance at lower cost.",
  },
  {
    icon: Shield,
    title: "Secure & Responsible AI",
    description: "Build privacy, security, and governance into your AI systems.",
    outcome: "Stronger control. Lower risk.",
  },
  {
    icon: Boxes,
    title: "AI Product Development",
    description: "Turn an AI concept into a polished, production-ready product.",
    outcome: "Ready for customers and built to grow.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Managed AI Services",
    description: "Keep deployed AI monitored, maintained, and improving.",
    outcome: "Reliable systems over time.",
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

          <div className="mt-10 grid gap-px overflow-hidden border-y border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {SERVICES.map(({ icon: Icon, title, description, outcome }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group grid h-full grid-cols-[1.75rem_minmax(0,1fr)] gap-4 bg-brand-bg/95 px-3 py-5 transition-colors duration-300 hover:bg-brand-surface/90 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-5 sm:px-6 sm:py-6 lg:px-7"
              >
                <div className="flex h-8 w-8 items-center justify-center text-slate-100 transition-colors group-hover:text-brand-secondary">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">{title}</h3>
                  <p className="mt-1.5 text-base leading-relaxed text-slate-100">{description}</p>
                  <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                    <strong className="font-semibold text-slate-200">Outcome:</strong>{" "}
                    {outcome}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
