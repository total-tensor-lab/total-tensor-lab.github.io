import { motion } from "motion/react";
import { Shield } from "lucide-react";

const DATA_SOURCES = [
  { label: "Text & Prompts", y: 113 },
  { label: "Images & Screenshots", y: 169 },
  { label: "Documents & PDFs", y: 225 },
  { label: "Video", y: 281 },
  { label: "Audio", y: 337 },
  { label: "Databases", y: 393 },
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(245,184,61,0.08),transparent_26%),radial-gradient(circle_at_78%_34%,rgba(245,184,61,0.08),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(245,184,61,0.06),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
      <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 1100 505"
        className="relative z-10 w-full h-auto"
        aria-label="Project Lolo architecture: raw data from text, images, documents, video, audio and databases passes through the Lolo privacy layer inside your environment, and only sanitized data reaches AI workflows"
      >
        <defs>
          <marker id="about-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#f5b83d" />
          </marker>
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
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f5b83d" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="about-flow-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f5b83d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f5b83d" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="about-runtime-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#f5b83d" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#f5b83d" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1100" height="505" rx="22" fill="url(#about-topology-grid)" />
        <ellipse cx="550" cy="297" rx="190" ry="132" fill="url(#about-runtime-glow)" />

        <rect x="16" y="52" width="738" height="408" rx="18" fill="rgba(245,184,61,0.025)" stroke="#f5b83d" strokeOpacity="0.35" strokeWidth="1.25" strokeDasharray="3 6" strokeLinecap="round" />
        <rect x="34" y="42" width="168" height="20" rx="10" fill="#17130e" stroke="#f5b83d" strokeOpacity="0.35" />
        <text x="118" y="56" textAnchor="middle" fill="#f8d58b" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.16em">
          YOUR ENVIRONMENT
        </text>

        <text x="138" y="81" textAnchor="middle" fill="#f5b83d" fontSize="16" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em">
          DATA SOURCES
        </text>
        <text x="550" y="81" textAnchor="middle" fill="#f5b83d" fontSize="16" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em">
          LOLO PRIVACY LAYER
        </text>
        <text x="962" y="81" textAnchor="middle" fill="#f5b83d" fontSize="16" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em">
          AI WORKFLOWS
        </text>

        <text x="138" y="102" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.16em">
          RAW
        </text>
        <text x="962" y="102" textAnchor="middle" fill="#f8d58b" fontSize="11" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.16em">
          SANITIZED
        </text>

        {DATA_SOURCES.map((source, index) => (
          <g key={source.label}>
            <rect x="38" y={source.y} width="200" height="42" rx="10" fill="#17140f" stroke="#94a3b8" strokeOpacity="0.55" strokeWidth="1" strokeDasharray="4 3" />
            <rect x="38" y={source.y} width="4" height="42" rx="2" fill="#94a3b8" fillOpacity="0.7" />
            <text x="58" y={source.y + 25} fill="var(--color-brand-body)" fontSize="14" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {source.label}
            </text>
            <path
              d={`M 238 ${source.y + 21} C 302 ${source.y + 21}, 338 ${241 + index * 10}, 368 ${241 + index * 10}`}
              fill="none"
              stroke="url(#about-flow-in)"
              strokeWidth="1.6"
              strokeDasharray="8 5"
              markerEnd="url(#about-flow-arrow)"
              style={lineStyle(`${index * 0.24}s`)}
            />
          </g>
        ))}

        <rect x="372" y="190" width="356" height="180" rx="20" fill="#1c1812" stroke="#f5b83d" strokeWidth="1.5" filter="url(#about-glow)" />
        <rect x="390" y="208" width="320" height="144" rx="16" fill="var(--color-brand-surface)" stroke="rgba(255,255,255,0.05)" />

        <Shield x={532} y={246} width={36} height={36} color="#f5b83d" strokeWidth={1.75} aria-hidden="true" />
        <text x="550" y="312" textAnchor="middle" fill="#F8FAFC" fontSize="20" fontFamily="Inter,system-ui,sans-serif" fontWeight="700">
          Project Lolo
        </text>

        <text x="550" y="486" textAnchor="middle" fill="var(--color-brand-label)" fontSize="15" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
          Only sanitized data leaves your environment.
        </text>

        {AI_SYSTEMS.map((system, index) => (
          <g key={system.label}>
            <rect x="862" y={system.y} width="200" height="42" rx="10" fill="#2a2111" stroke="#f5b83d" strokeWidth="1.25" />
            <rect x="1058" y={system.y} width="4" height="42" rx="2" fill="#f5b83d" />
            <text x="880" y={system.y + 25} fill="var(--color-brand-body)" fontSize="14" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {system.label}
            </text>
            <path
              d={`M 718 ${247 + index * 12} C 764 ${247 + index * 12}, 798 ${system.y + 21}, 858 ${system.y + 21}`}
              fill="none"
              stroke="url(#about-flow-out)"
              strokeWidth="1.6"
              strokeDasharray="8 5"
              markerEnd="url(#about-flow-arrow)"
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/3 top-1/3 w-[420px] h-[420px] bg-brand-secondary/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[520px] h-[520px] bg-brand-primary/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <span className="lolo-section-label">
            The Architecture
          </span>
          <h2 className="lolo-section-heading text-white">
            Between your data and your AI.
          </h2>
        </motion.div>

        <ArchitectureDiagram />
      </div>
    </section>
  );
}
