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
    description: "Maintain reliable AI systems through monitoring, performance tuning, continuous evaluation, and operational support.",
    capabilities: ["Observability & monitoring", "Drift detection & model updates", "Reliability & incident response"],
  },
];

const STAGE_GRID_PLACEMENT = [
  { column: 1, row: 1 },
  { column: 3, row: 1 },
  { column: 3, row: 3 },
  { column: 1, row: 3 },
  { column: 1, row: 5 },
  { column: 3, row: 5 },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function StageConnector({
  direction,
  active,
  order,
}: {
  direction: "left" | "right" | "down";
  active: boolean;
  order: number;
}) {
  const horizontal = direction !== "down";
  const isLeft = direction === "left";
  const flow = isLeft ? [29, 3, 29] : [3, 29, 3];

  return (
    <span className="flex items-center justify-center text-cyan-100/80" aria-hidden="true">
      {horizontal ? (
        <svg className="h-4 w-full overflow-visible" viewBox="0 0 32 16" fill="none">
          <path
            d={isLeft ? "M1 8h30M7 3 1 8l6 5" : "M1 8h30M25 3l6 5-6 5"}
            stroke="currentColor"
            strokeOpacity="0.8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.circle
            r="2"
            cx="16"
            cy="8"
            fill="#a5f3fc"
            style={{ filter: "drop-shadow(0 0 3px rgba(103,232,249,0.9))" }}
            animate={active ? { cx: flow } : { cx: 16 }}
            transition={active ? {
              duration: 0.85,
              delay: order * 1.1,
              repeat: Infinity,
              repeatDelay: 6.15,
              ease: "easeInOut",
            } : { duration: 0 }}
          />
        </svg>
      ) : (
        <svg className="h-5 w-full overflow-visible" viewBox="0 0 32 20" fill="none">
          <path
            d="M16 1v17m-6-6 6 6 6-6"
            stroke="currentColor"
            strokeOpacity="0.8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.circle
            cx="16"
            cy="9"
            r="2"
            fill="#a5f3fc"
            style={{ filter: "drop-shadow(0 0 3px rgba(103,232,249,0.9))" }}
            animate={active ? { cy: [2, 15, 2] } : { cy: 9 }}
            transition={active ? {
              duration: 0.85,
              delay: order * 1.1,
              repeat: Infinity,
              repeatDelay: 6.15,
              ease: "easeInOut",
            } : { duration: 0 }}
          />
        </svg>
      )}
    </span>
  );
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
      className="relative mx-auto w-full max-w-[580px] py-2 lg:-mt-4"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 18 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.12, ease: EASE_OUT }}
    >
      <h2 id="ai-lifecycle-title" className="sr-only">Interactive AI engineering lifecycle</h2>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="#8b9bc5" strokeOpacity="0.22" strokeWidth="1">
          <path d="m22 70 94 47 102-38M795 63l108 65-51 101M18 504l112-77 97 51m556 33 91-87 107 67" />
        </g>
        {[
          { start: [22, 70], middle: [116, 117], end: [218, 79] },
          { start: [795, 63], middle: [903, 128], end: [852, 229] },
          { start: [18, 504], middle: [130, 427], end: [227, 478] },
          { start: [783, 511], middle: [874, 424], end: [981, 491] },
        ].map((node, index) => (
          <g key={index} fill="#a5b4fc">
            <circle cx={node.start[0]} cy={node.start[1]} r="2" />
            <motion.circle
              r="2.5"
              cx={node.middle[0]}
              cy={node.middle[1]}
              fill="#a5f3fc"
              animate={
                animateContinuously
                  ? {
                      cx: [node.middle[0] - 8, node.middle[0] + 8, node.middle[0] - 8],
                      cy: [node.middle[1] + 7, node.middle[1] - 7, node.middle[1] + 7],
                    }
                  : { cx: node.middle[0], cy: node.middle[1] }
              }
              transition={animateContinuously ? { duration: 12 + index * 2, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
            />
            <circle cx={node.end[0]} cy={node.end[1]} r="2" />
          </g>
        ))}
      </svg>

      <div className="relative rounded-2xl border border-white/10 bg-[#080d1c]/90 p-3 shadow-[0_18px_60px_rgba(3,7,18,0.36)] backdrop-blur-sm sm:p-4">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
          <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.07] blur-3xl" />
          <div className="absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-3xl" />
        </div>

        <div className="relative">
          <div className="mb-3 flex items-center justify-between gap-2 px-0.5">
            <h3 className="text-xs font-semibold text-white sm:text-sm">AI Engineering Lifecycle</h3>
          </div>

          <div className="grid gap-3 rounded-xl border border-indigo-200/[0.08] bg-[#11182b]/80 p-2 sm:p-2.5 xl:grid-cols-[1.05fr_0.95fr] xl:items-stretch">
            <div className="grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] grid-rows-[auto_20px_auto_20px_auto] items-center gap-x-1.5 gap-y-1">
              {LIFECYCLE_STAGES.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = activeStage === index;
                const { column, row } = STAGE_GRID_PLACEMENT[index];

                return (
                  <motion.button
                    key={stage.number}
                    type="button"
                    aria-label={`Stage ${stage.number}: ${stage.label}`}
                    aria-pressed={isActive}
                    aria-describedby="lifecycle-stage-details"
                    onFocus={() => setActiveStage(index)}
                    onClick={() => setActiveStage(index)}
                    style={{ gridColumnStart: column, gridRowStart: row }}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 8 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : index * 0.12,
                      ease: EASE_OUT,
                    }}
                    data-selected={isActive}
                    className={`lifecycle-stage group relative flex min-h-[68px] flex-col items-center justify-center gap-1 rounded-lg border px-1 py-2 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/80 sm:min-h-[78px] ${
                      isActive
                        ? ""
                        : "border-slate-500/30 bg-[#0b1121]/90"
                    }`}
                  >
                    <span className={`absolute left-1.5 top-1 text-[10px] font-semibold tracking-wide sm:left-2 sm:top-1.5 sm:text-[11px] ${
                      isActive ? "text-cyan-100/90" : "text-slate-400"
                    }`}>
                      {stage.number}
                    </span>
                    <Icon
                      className={`h-6 w-6 transition-[color,filter] duration-200 sm:h-7 sm:w-7 ${
                        isActive ? "text-cyan-100 drop-shadow-[0_0_7px_rgba(103,232,249,0.35)]" : "text-slate-400 group-hover:text-cyan-100 group-hover:drop-shadow-[0_0_6px_rgba(103,232,249,0.3)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span className={`text-xs font-medium leading-tight transition-colors duration-200 sm:text-sm ${
                      isActive ? "text-cyan-50" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {stage.label}
                    </span>
                  </motion.button>
                );
              })}

              <span style={{ gridColumnStart: 2, gridRowStart: 1 }}>
                <StageConnector direction="right" active={animateContinuously} order={0} />
              </span>
              <span className="flex items-center justify-center" style={{ gridColumnStart: 3, gridRowStart: 2 }}>
                <StageConnector direction="down" active={animateContinuously} order={1} />
              </span>
              <span style={{ gridColumnStart: 2, gridRowStart: 3 }}>
                <StageConnector direction="left" active={animateContinuously} order={2} />
              </span>
              <span className="flex items-center justify-center" style={{ gridColumnStart: 1, gridRowStart: 4 }}>
                <StageConnector direction="down" active={animateContinuously} order={3} />
              </span>
              <span style={{ gridColumnStart: 2, gridRowStart: 5 }}>
                <StageConnector direction="right" active={animateContinuously} order={4} />
              </span>
            </div>

            <div
              id="lifecycle-stage-details"
              className="flex min-h-[236px] flex-col justify-center rounded-lg border border-cyan-200/15 bg-[#090f1d]/90 p-3.5 shadow-inner shadow-cyan-300/[0.03] sm:p-4"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedStage.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                  transition={{ duration: reduceMotion ? 0 : 0.18, ease: EASE_OUT }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.06]">
                      <SelectedStageIcon className="h-5 w-5 text-cyan-100" aria-hidden="true" />
                    </span>
                    <h4 className="text-base font-semibold text-white sm:text-lg">{selectedStage.label}</h4>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-200/80 sm:text-sm">
                    {selectedStage.description}
                  </p>
                  <div className="mt-3 border-t border-white/[0.08] pt-2.5">
                    <h5 className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-300/70 sm:text-[10px]">
                      Focus areas
                    </h5>
                    <ul className="mt-1.5 grid gap-1.5" aria-label={`${selectedStage.label} focus areas`}>
                      {selectedStage.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center gap-2 text-[11px] text-cyan-50/90 sm:text-xs">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-200" aria-hidden="true" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative mt-2.5 overflow-hidden rounded-xl border border-cyan-200/30 bg-[#0b1c2a]/90 px-3 py-2.5 text-center shadow-[0_0_18px_rgba(34,211,238,0.05)]">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/60 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/[0.04] via-teal-300/[0.08] to-cyan-400/[0.04]" aria-hidden="true" />
            <div className="relative flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-200" aria-hidden="true" />
              <span className="text-[9px] font-semibold tracking-wide text-cyan-50 sm:text-[10px]">
                Security · Privacy · Governance
              </span>
            </div>
            <p className="relative mt-1 text-[8px] text-slate-300/75 sm:text-[9px]">
              Embedded throughout the AI lifecycle
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
