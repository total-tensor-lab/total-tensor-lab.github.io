import { motion } from "motion/react";
import { Check } from "lucide-react";

const DATA_SOURCES = [
  { label: "Databases", y: 84 },
  { label: "PDFs & Documents", y: 150 },
  { label: "APIs", y: 216 },
  { label: "Vector Databases", y: 282 },
  { label: "Logs & Streams", y: 348 },
];

const RUNTIME_CAPABILITIES = [
  { label: "Detection", x: 392, y: 174, color: "#06B6D4" },
  { label: "Classification", x: 554, y: 174, color: "#8B5CF6" },
  { label: "Policy Engine", x: 392, y: 232, color: "#8B5CF6" },
  { label: "Sanitization", x: 554, y: 232, color: "#06B6D4" },
  { label: "Audit Logging", x: 473, y: 290, color: "#10B981" },
];

const AI_SYSTEMS = [
  { label: "LLM Applications", y: 84 },
  { label: "RAG Pipelines", y: 150 },
  { label: "AI Agents", y: 216 },
  { label: "Analytics", y: 282 },
  { label: "Fine-Tuning", y: 348 },
];

const DEPLOYMENT_BADGES = [
  "On-Prem",
  "Private Cloud",
  "Kubernetes",
  "Air-Gapped",
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
      className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_28px_100px_rgba(2,6,23,0.42)] backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(6,182,212,0.08),transparent_26%),radial-gradient(circle_at_78%_34%,rgba(139,92,246,0.1),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.06),transparent_28%)] pointer-events-none" />
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
      <div className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent pointer-events-none" />

      <svg
        viewBox="0 0 1100 520"
        className="relative z-10 w-full h-auto"
        aria-label="PromptShield enterprise AI runtime governance architecture"
      >
        <defs>
          <pattern id="about-topology-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(148,163,184,0.05)" strokeWidth="1" />
          </pattern>
          <filter id="about-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.545  0 0 0 0 0.361  0 0 0 0 0.965  0 0 0 0.55 0"
              in="blur"
              result="purpleBlur"
            />
            <feMerge>
              <feMergeNode in="purpleBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="about-flow-in" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="about-flow-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="about-runtime-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1100" height="520" rx="22" fill="url(#about-topology-grid)" />
        <ellipse cx="550" cy="260" rx="190" ry="132" fill="url(#about-runtime-glow)" />

        <text x="138" y="44" textAnchor="middle" fill="#06B6D4" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.78">
          DATA SOURCES
        </text>
        <text x="550" y="44" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.7">
          PROMPTSHIELD RUNTIME
        </text>
        <text x="962" y="44" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.78">
          AI SYSTEMS
        </text>

        {DATA_SOURCES.map((source, index) => (
          <g key={source.label}>
            <rect x="38" y={source.y} width="200" height="42" rx="10" fill="#0F172A" stroke="#06B6D4" strokeWidth="1" opacity="0.92" />
            <rect x="38" y={source.y} width="4" height="42" rx="2" fill="#06B6D4" />
            <text x="58" y={source.y + 25} fill="#CBD5E1" fontSize="12" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {source.label}
            </text>
            <path
              d={`M 238 ${source.y + 21} C 302 ${source.y + 21}, 338 ${210 + index * 12}, 380 ${210 + index * 12}`}
              fill="none"
              stroke="url(#about-flow-in)"
              strokeWidth="1.6"
              strokeDasharray="8 5"
              style={lineStyle(`${index * 0.24}s`)}
            />
          </g>
        ))}

        <rect x="382" y="112" width="336" height="296" rx="20" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5" filter="url(#about-glow)" />
        <rect x="398" y="128" width="304" height="264" rx="16" fill="rgba(15,23,42,0.72)" stroke="rgba(255,255,255,0.05)" />

        <text x="550" y="154" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.16em">
          GOVERNANCE LAYER
        </text>
        <text x="550" y="178" textAnchor="middle" fill="#F8FAFC" fontSize="23" fontFamily="Inter,system-ui,sans-serif" fontWeight="700">
          PromptShield Runtime
        </text>
        <text x="550" y="202" textAnchor="middle" fill="#64748B" fontSize="11" fontFamily="Inter,system-ui,sans-serif">
          Detect, govern, and protect sensitive enterprise data in motion.
        </text>

        {RUNTIME_CAPABILITIES.map((capability) => (
          <g key={capability.label}>
            <rect x={capability.x} y={capability.y} width="154" height="38" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
            <circle cx={capability.x + 16} cy={capability.y + 19} r="4" fill={capability.color} />
            <text x={capability.x + 30} y={capability.y + 24} fill="#E2E8F0" fontSize="11.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {capability.label}
            </text>
          </g>
        ))}

        <line x1="430" y1="340" x2="670" y2="340" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
        <circle cx="448" cy="340" r="3" fill="#10B981" />
        <text x="462" y="344" fill="#10B981" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.06em">
          DATA NEVER LEAVES YOUR ENVIRONMENT
        </text>

        {AI_SYSTEMS.map((system, index) => (
          <g key={system.label}>
            <rect x="862" y={system.y} width="200" height="42" rx="10" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1" opacity="0.92" />
            <rect x="1058" y={system.y} width="4" height="42" rx="2" fill="#8B5CF6" />
            <text x="880" y={system.y + 25} fill="#CBD5E1" fontSize="12" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">
              {system.label}
            </text>
            <path
              d={`M 718 ${210 + index * 12} C 764 ${210 + index * 12}, 798 ${system.y + 21}, 862 ${system.y + 21}`}
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
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            The Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Governance Layer for{" "}
            <span className="gradient-text">Enterprise AI</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg leading-relaxed max-w-3xl mb-8">
            PromptShield connects to your AI stack to detect, govern, and protect
            sensitive data at runtime.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-success/20 bg-brand-success/10 px-3.5 py-2 text-brand-success text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-success inline-block" />
              Data never leaves your environment.
            </span>
            {DEPLOYMENT_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-brand-muted text-xs font-medium backdrop-blur-sm"
              >
                <Check className="w-3.5 h-3.5 text-brand-success flex-shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <ArchitectureDiagram />
      </div>
    </section>
  );
}
