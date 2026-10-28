import { motion } from "motion/react";

const DATA_SOURCES = [
  { label: "Text & Prompts", y: 121 },
  { label: "PDFs & Documents", y: 187 },
  { label: "Images", y: 253 },
  { label: "Screenshots", y: 319 },
  { label: "Scanned Documents", y: 385 },
];

const RUNTIME_CAPABILITIES = [
  { label: "NLP Detection", x: 390, y: 257, color: "#f5b83d" },
  { label: "Computer Vision", x: 552, y: 257, color: "#f8d58b" },
  { label: "Policy Engine", x: 390, y: 309, color: "#f5b83d" },
  { label: "Sanitization", x: 552, y: 309, color: "#10B981" },
  { label: "Audit Logging", x: 471, y: 361, color: "#e9c16a" },
];

const AI_SYSTEMS = [
  { label: "LLM Applications", y: 121 },
  { label: "RAG Pipelines", y: 187 },
  { label: "AI Agents", y: 253 },
  { label: "Analytics", y: 319 },
  { label: "Fine-Tuning", y: 385 },
];

function ArchitectureDiagram() {
  const lineStyle = (delay: string) => ({
    animation: "dash-flow 2.6s linear infinite",
    animationDelay: delay,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_28px_100px_rgba(10,8,5,0.42)] backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(248,213,139,0.08),transparent_26%),radial-gradient(circle_at_78%_34%,rgba(245,184,61,0.1),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.06),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
      <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 1100 520"
        className="relative z-10 w-full h-auto"
        aria-label="Project Lolo architecture: text and visual inputs pass through NLP and computer vision detection, policy controls, and sanitization before reaching AI systems"
      >
        <defs>
          <pattern id="about-topology-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.05)" strokeWidth="1" />
          </pattern>
          <filter id="about-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.961  0 0 0 0 0.722  0 0 0 0 0.239  0 0 0 0.55 0"
              in="blur"
              result="goldBlur"
            />
            <feMerge>
              <feMergeNode in="goldBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="about-flow-in" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f8d58b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f5b83d" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="about-flow-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f5b83d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="about-runtime-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#f5b83d" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#f5b83d" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1100" height="520" rx="22" fill="url(#about-topology-grid)" />
        <ellipse cx="550" cy="297" rx="190" ry="132" fill="url(#about-runtime-glow)" />

        <text x="138" y="81" textAnchor="middle" fill="#f8d58b" fontSize="16" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.78">
          DATA SOURCES
        </text>
        <text x="550" y="81" textAnchor="middle" fill="var(--color-brand-label)" fontSize="16" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="1">
          RUNTIME
        </text>
        <text x="962" y="81" textAnchor="middle" fill="#f5b83d" fontSize="16" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.78">
          AI SYSTEMS
        </text>

        {DATA_SOURCES.map((source, index) => (
          <g key={source.label}>
            <rect x="38" y={source.y} width="200" height="42" rx="10" fill="#1c1812" stroke="#f8d58b" strokeWidth="1" opacity="0.92" />
            <rect x="38" y={source.y} width="4" height="42" rx="2" fill="#f8d58b" />
            <text x="58" y={source.y + 25} fill="var(--color-brand-body)" fontSize="14" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {source.label}
            </text>
            <path
              d={`M 238 ${source.y + 21} C 302 ${source.y + 21}, 338 ${247 + index * 12}, 380 ${247 + index * 12}`}
              fill="none"
              stroke="url(#about-flow-in)"
              strokeWidth="1.6"
              strokeDasharray="8 5"
              style={lineStyle(`${index * 0.24}s`)}
            />
          </g>
        ))}

        <rect x="372" y="121" width="356" height="318" rx="20" fill="#1c1812" stroke="#f5b83d" strokeWidth="1.5" filter="url(#about-glow)" />
        <rect x="390" y="139" width="320" height="282" rx="16" fill="var(--color-brand-surface)" stroke="rgba(255,255,255,0.05)" />

        <text x="550" y="197" textAnchor="middle" fill="#f5b83d" fontSize="13" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.16em">
          TEXT + VISUAL PRIVACY
        </text>
        <text x="550" y="225" textAnchor="middle" fill="#F8FAFC" fontSize="20" fontFamily="Inter,system-ui,sans-serif" fontWeight="700">
          Project Lolo
        </text>
        <text x="550" y="247" textAnchor="middle" fill="var(--color-brand-label)" fontSize="13" fontFamily="Inter,system-ui,sans-serif">
          Detect sensitive data before it reaches AI.
        </text>

        {RUNTIME_CAPABILITIES.map((capability) => (
          <g key={capability.label}>
            <rect x={capability.x} y={capability.y} width="154" height="38" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
            <circle cx={capability.x + 16} cy={capability.y + 19} r="4" fill={capability.color} />
            <text x={capability.x + 30} y={capability.y + 24} fill="var(--color-brand-body)" fontSize="14" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {capability.label}
            </text>
          </g>
        ))}


        {AI_SYSTEMS.map((system, index) => (
          <g key={system.label}>
            <rect x="862" y={system.y} width="200" height="42" rx="10" fill="#1c1812" stroke="#f5b83d" strokeWidth="1" opacity="0.92" />
            <rect x="1058" y={system.y} width="4" height="42" rx="2" fill="#f5b83d" />
            <text x="880" y={system.y + 25} fill="var(--color-brand-body)" fontSize="14" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {system.label}
            </text>
            <path
              d={`M 718 ${247 + index * 12} C 764 ${247 + index * 12}, 798 ${system.y + 21}, 862 ${system.y + 21}`}
              fill="none"
              stroke="url(#about-flow-out)"
              strokeWidth="1.6"
              strokeDasharray="8 5"
              style={lineStyle(`${0.12 + index * 0.24}s`)}
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/3 top-1/3 w-[420px] h-[420px] bg-brand-secondary/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[520px] h-[520px] bg-brand-primary/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-4xl"
        >
          <span className="lolo-section-label mb-4">
            The Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Between Your Data{" "}
            <span className="architecture-highlight">and Your AI.</span>
          </h2>
          <p className="text-brand-body text-base md:text-lg leading-relaxed max-w-3xl mb-8">
            Project Lolo brings NLP and computer vision into one privacy layer.
            Inspect text and visual inputs, identify sensitive information, and
            apply your policies before content enters your AI workflow.
          </p>

        </motion.div>

        <ArchitectureDiagram />
      </div>
    </section>
  );
}
