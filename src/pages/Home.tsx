import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Cpu,
  Eye,
  MessageSquareText,
  Network,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import AISystemHierarchy from "../components/AISystemHierarchy";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Machine Learning Systems",
    description:
      "Design and build production ML solutions—from data pipelines and model development to deployment, monitoring, and continuous improvement.",
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    iconStyle: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Develop vision systems for detection, segmentation, tracking, OCR, quality inspection, and real-time video analytics.",
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconStyle: "bg-brand-secondary/10 text-brand-secondary",
  },
  {
    icon: Cpu,
    title: "Edge AI",
    description:
      "Optimize and deploy intelligent models on edge devices for low-latency, private, and reliable on-device inference.",
    accent: "border-brand-success/20 hover:border-brand-success/40",
    iconStyle: "bg-brand-success/10 text-brand-success",
  },
  {
    icon: Network,
    title: "LLM Applications",
    description:
      "Create dependable LLM solutions with retrieval, evaluation, fine-tuning, guardrails, and integration into existing business systems.",
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    iconStyle: "bg-brand-secondary/10 text-brand-secondary",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Build tool-using agents and automated workflows with clear controls, human oversight, observability, and measurable outcomes.",
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    iconStyle: "bg-brand-primary/10 text-brand-primary",
  },
  {
    icon: MessageSquareText,
    title: "Chatbots & Assistants",
    description:
      "Deliver domain-aware conversational experiences connected to your knowledge, applications, APIs, and support workflows.",
    accent: "border-brand-success/20 hover:border-brand-success/40",
    iconStyle: "bg-brand-success/10 text-brand-success",
  },
];

const ENGAGEMENT_STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Clarify the problem, assess data and technical constraints, and define a practical delivery roadmap.",
  },
  {
    number: "02",
    title: "Build",
    description: "Prototype quickly, validate with real users and data, then engineer the solution for scale and reliability.",
  },
  {
    number: "03",
    title: "Deploy & improve",
    description: "Integrate, monitor, and evolve the system so it continues delivering value in production.",
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-violet-300">
              End-to-end AI engineering
            </p>
            <h1 className="text-4xl font-bold leading-[1.16] tracking-[-0.025em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
              From AI ideas to{" "}
              <span className="text-brand-primary">production-ready</span>{" "}
              <span className="text-brand-secondary">intelligent systems.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
              We design, build, optimize, secure, and operate AI systems that deliver measurable business outcomes—from cloud to edge.
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
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">Consulting capabilities</span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
              The expertise to take AI from{" "}
              <span className="gradient-text">concept to production.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted md:text-lg">
              We combine applied research, software engineering, and deployment experience to build systems that perform reliably beyond the prototype.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, description, accent, iconStyle }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`group relative overflow-hidden rounded-[24px] border bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045] ${accent}`}
              >
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] ${iconStyle}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-x-0 top-0 section-divider" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">How we work</span>
              <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">A practical path to production.</h2>
              <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">
                Engage us for focused technical guidance, a complete build, or support strengthening an existing AI initiative.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {ENGAGEMENT_STEPS.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid gap-4 rounded-[22px] border border-white/[0.08] bg-white/[0.025] p-6 sm:grid-cols-[auto_1fr] sm:gap-6"
                >
                  <span className="text-sm font-semibold text-brand-secondary">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
