import { useRef, useState } from "react";
import {
  Activity,
  BadgeCheck,
  BrainCircuit,
  CloudUpload,
  Database,
  Lightbulb,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";

const LIFECYCLE_STAGES: {
  number: string;
  label: string;
  icon: LucideIcon;
  description: string;
  capabilities: string[];
}[] = [
  {
    number: "01",
    label: "Discover",
    icon: Lightbulb,
    description: "Align on the opportunity, success measures, and responsible use.",
    capabilities: ["Use-case framing", "Feasibility", "Success metrics"],
  },
  {
    number: "02",
    label: "Engineer Data",
    icon: Database,
    description: "Prepare trustworthy, well-governed data for real-world AI.",
    capabilities: ["Data pipelines", "Quality & access", "Feature engineering"],
  },
  {
    number: "03",
    label: "Build AI",
    icon: BrainCircuit,
    description: "Develop the right model or application for the problem at hand.",
    capabilities: ["Model development", "LLM applications", "AI agents"],
  },
  {
    number: "04",
    label: "Evaluate",
    icon: BadgeCheck,
    description: "Validate quality, safety, performance, and business impact.",
    capabilities: ["Model evaluation", "Red teaming", "Human review"],
  },
  {
    number: "05",
    label: "Deploy",
    icon: CloudUpload,
    description: "Release reliable systems to cloud, private, or edge environments.",
    capabilities: ["Cloud & edge", "CI/CD", "Production readiness"],
  },
  {
    number: "06",
    label: "Operate & Optimize",
    icon: Activity,
    description: "Monitor, tune, and continuously improve reliability in production.",
    capabilities: ["Observability", "Drift & updates", "Incident response"],
  },
];

const RING_POSITIONS = [
  { left: "50%", top: "9.5%", angle: -90 },
  { left: "85%", top: "29.75%", angle: -30 },
  { left: "85%", top: "70.25%", angle: 30 },
  { left: "50%", top: "90.5%", angle: 90 },
  { left: "15%", top: "70.25%", angle: 150 },
  { left: "15%", top: "29.75%", angle: 210 },
] as const;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const RING_CENTER = 250;
const RING_RADIUS = 202.5;
const ARC_GAP_DEGREES = 11;

function pointOnRing(angle: number) {
  const radians = (angle * Math.PI) / 180;

  return {
    x: RING_CENTER + RING_RADIUS * Math.cos(radians),
    y: RING_CENTER + RING_RADIUS * Math.sin(radians),
  };
}

function stageArc(index: number) {
  const startAngle = RING_POSITIONS[index].angle + ARC_GAP_DEGREES;
  const nextAngle = index === RING_POSITIONS.length - 1
    ? RING_POSITIONS[0].angle + 360
    : RING_POSITIONS[index + 1].angle;
  const endAngle = nextAngle - ARC_GAP_DEGREES;
  const start = pointOnRing(startAngle);
  const end = pointOnRing(endAngle);

  return `M ${start.x} ${start.y} A ${RING_RADIUS} ${RING_RADIUS} 0 0 1 ${end.x} ${end.y}`;
}

export default function AISystemHierarchy() {
  const diagramRef = useRef<HTMLElement>(null);
  const isInView = useInView(diagramRef, { amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const animateContinuously = isInView && !reduceMotion;
  const [activeStage, setActiveStage] = useState(0);
  const selectedStage = LIFECYCLE_STAGES[activeStage];
  const SelectedStageIcon = selectedStage.icon;

  return (
    <motion.aside
      ref={diagramRef}
      aria-labelledby="ai-lifecycle-title"
      className="relative mx-auto w-full max-w-[620px] py-2"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 18 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.12, ease: EASE_OUT }}
    >
      <h2 id="ai-lifecycle-title" className="sr-only">Interactive AI engineering lifecycle</h2>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d1c]/90 p-3 shadow-[0_18px_60px_rgba(3,7,18,0.36)] backdrop-blur-sm sm:p-4">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.07] blur-3xl" />
          <div className="absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-3xl" />
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        <div className="relative">
          <div className="mb-1.5 px-0.5 sm:mb-2">
            <h3 className="text-xs font-semibold text-white sm:text-sm">AI Engineering Lifecycle</h3>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[560px]" role="group" aria-label="AI lifecycle stages">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 500 500"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="lifecycle-ring" x1="70" y1="60" x2="430" y2="440" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#06B6D4" />
                </linearGradient>
                <filter id="lifecycle-ring-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <marker id="lifecycle-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M0 0 8 4 0 8Z" fill="#67e8f9" />
                </marker>
              </defs>

              <circle cx="250" cy="250" r={RING_RADIUS} stroke="rgba(148,163,184,0.12)" strokeWidth="22" />
              <circle cx="250" cy="250" r={RING_RADIUS} stroke="rgba(148,163,184,0.18)" strokeWidth="1" strokeDasharray="2 8" />

              {LIFECYCLE_STAGES.map((stage, index) => {
                const isActive = activeStage === index;

                return (
                  <motion.path
                    key={stage.number}
                    d={stageArc(index)}
                    pathLength="1"
                    stroke={isActive ? "url(#lifecycle-ring)" : "rgba(103,232,249,0.34)"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    strokeLinecap="round"
                    strokeDasharray={isActive ? "0.12 0.05" : "0.025 0.035"}
                    markerEnd="url(#lifecycle-arrow)"
                    filter={isActive ? "url(#lifecycle-ring-glow)" : undefined}
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0.58,
                      strokeDashoffset: animateContinuously ? [0, -0.17] : 0,
                    }}
                    transition={
                      animateContinuously
                        ? { strokeDashoffset: { duration: 1.8, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.2 } }
                        : { duration: 0.2 }
                    }
                  />
                );
              })}
            </svg>

            <ol className="absolute inset-0 m-0 list-none p-0">
              {LIFECYCLE_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = activeStage === index;
                const position = RING_POSITIONS[index];

                return (
                  <li
                    key={stage.number}
                    className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2 sm:w-[29%]"
                    style={{ left: position.left, top: position.top }}
                  >
                    <motion.button
                      type="button"
                      aria-label={`Stage ${stage.number}: ${stage.label}`}
                      aria-pressed={isActive}
                      aria-controls="lifecycle-stage-details"
                      onFocus={() => setActiveStage(index)}
                      onClick={() => setActiveStage(index)}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        scale: 1,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        delay: reduceMotion ? 0 : index * 0.07,
                        ease: EASE_OUT,
                      }}
                      data-selected={isActive}
                      className={`lifecycle-stage group relative grid min-h-[56px] w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-x-1.5 rounded-xl border px-2 py-1.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080d1c] sm:min-h-[66px] sm:gap-x-2 sm:px-2.5 ${
                        isActive ? "" : "border-slate-500/30 bg-[#0b1121]/95"
                      }`}
                    >
                      <span className={`col-start-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border sm:h-8 sm:w-8 ${
                        isActive
                          ? "border-cyan-200/25 bg-cyan-200/[0.08]"
                          : "border-white/[0.07] bg-white/[0.025]"
                      }`}>
                        <Icon
                          className={`h-3.5 w-3.5 transition-[color,filter] duration-200 sm:h-4 sm:w-4 ${
                            isActive
                              ? "text-cyan-100 drop-shadow-[0_0_7px_rgba(103,232,249,0.4)]"
                              : "text-slate-400 group-hover:text-cyan-100"
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                      <span className={`absolute right-2 top-1.5 block text-[10px] font-semibold leading-none tracking-[0.08em] sm:right-2.5 sm:top-2 sm:text-[11px] ${
                        isActive ? "text-cyan-200" : "text-slate-400"
                      }`}>
                        {stage.number}
                      </span>
                      <span className={`col-start-2 block min-w-0 text-[11px] font-medium leading-[1.15] transition-colors sm:text-[13px] ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}>
                        {stage.label}
                      </span>
                    </motion.button>
                  </li>
                );
              })}
            </ol>

            <div
              id="lifecycle-stage-details"
              className="absolute left-1/2 top-1/2 flex aspect-square w-[45%] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-cyan-200/15 bg-[#090f1d]/95 p-3 text-center shadow-[inset_0_0_32px_rgba(34,211,238,0.025),0_0_40px_rgba(2,6,23,0.5)] sm:w-[46%] sm:p-6"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="pointer-events-none absolute inset-3 rounded-full border border-white/[0.04]" aria-hidden="true" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedStage.number}
                  className="relative w-full"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, y: -4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.2, ease: EASE_OUT }}
                >
                  <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-200/15 bg-cyan-200/[0.06] sm:h-9 sm:w-9 sm:rounded-xl">
                    <SelectedStageIcon className="h-3.5 w-3.5 text-cyan-100 sm:h-5 sm:w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 text-[7px] font-semibold uppercase tracking-[0.14em] text-cyan-200/70 sm:text-[9px]">
                    Stage {selectedStage.number}
                  </p>
                  <h4 className="mt-0.5 text-[11px] font-semibold leading-tight text-white sm:text-base">
                    {selectedStage.label}
                  </h4>
                  <p className="mx-auto mt-1.5 max-w-[190px] text-[8px] leading-[1.35] text-slate-300/80 sm:mt-2 sm:text-[11px] sm:leading-relaxed">
                    {selectedStage.description}
                  </p>
                  <ul className="mx-auto mt-2 flex max-w-[200px] flex-wrap justify-center gap-1 sm:mt-3" aria-label={`${selectedStage.label} focus areas`}>
                    {selectedStage.capabilities.map((capability) => (
                      <li key={capability} className="rounded-full border border-cyan-200/10 bg-cyan-200/[0.045] px-1.5 py-0.5 text-[6.5px] leading-tight text-cyan-50/85 sm:px-2 sm:text-[8px]">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative mt-1 overflow-hidden rounded-xl border border-cyan-200/25 bg-[#0b1c2a]/90 px-3 py-2 text-center shadow-[0_0_18px_rgba(34,211,238,0.05)] sm:mt-2 sm:py-2.5">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/60 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/[0.04] via-teal-300/[0.08] to-cyan-400/[0.04]" aria-hidden="true" />
            <div className="relative flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-200" aria-hidden="true" />
              <span className="text-[10px] font-semibold tracking-wide text-cyan-50 sm:text-[11px]">
                Security · Privacy · Governance
              </span>
            </div>
            <p className="relative mt-1 text-[9px] text-slate-300/75 sm:text-[10px]">
              Embedded throughout the AI lifecycle
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
