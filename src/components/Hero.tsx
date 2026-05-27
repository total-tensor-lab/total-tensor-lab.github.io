import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const TRUST_BADGES = [
  "Local Processing",
  "Self-Hosted Runtime",
  "Air-Gapped Deployment",
  "Enterprise Governance",
];

// ── Topology diagram helpers ─────────────────────────────────────────────────
function DataNode({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="120" height="38" rx="8" fill="#0F172A" stroke="#06B6D4" strokeWidth="1" opacity="0.9" />
      <rect x={x} y={y} width="3" height="38" rx="2" fill="#06B6D4" />
      <text x={x + 15} y={y + 23} fill="#CBD5E1" fontSize="11.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">{label}</text>
    </g>
  );
}

function AINode({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="120" height="38" rx="8" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1" opacity="0.9" />
      <rect x={x + 117} y={y} width="3" height="38" rx="2" fill="#8B5CF6" />
      <text x={x + 14} y={y + 23} fill="#CBD5E1" fontSize="11.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">{label}</text>
    </g>
  );
}

function TopologyDiagram() {
  const lineStyle = (delay: string) => ({
    animation: `dash-flow 2.4s linear infinite`,
    animationDelay: delay,
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.55, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(2,6,23,0.65)] backdrop-blur-sm"
    >
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.04] via-transparent to-brand-primary/[0.04] pointer-events-none" />
      <div className="absolute left-5 right-5 top-5 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
      <div className="absolute bottom-5 left-5 right-5 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent pointer-events-none" />
      <svg
        viewBox="0 0 580 388"
        className="relative z-10 w-full h-auto"
        aria-label="TTL Privacy Runtime architecture diagram"
      >
        <defs>
          <filter id="pf-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.545  0 0 0 0 0.361  0 0 0 0 0.965  0 0 0 0.65 0"
              in="blur"
              result="coloredBlur"
            />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lg-in" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="lg-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.35" />
          </linearGradient>
          <pattern id="topo-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139,92,246,0.035)" strokeWidth="1" />
          </pattern>
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background grid */}
        <rect width="580" height="388" fill="url(#topo-grid)" rx="18" />
        <ellipse cx="290" cy="194" rx="150" ry="104" fill="url(#center-glow)" />

        {/* Inbound lines — data sources → TTL Runtime */}
        <path d="M 130 88 C 178 88 218 168 226 172" fill="none" stroke="url(#lg-in)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0s")} />
        <path d="M 130 194 L 226 194" fill="none" stroke="url(#lg-in)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0.55s")} />
        <path d="M 130 300 C 178 300 218 220 226 216" fill="none" stroke="url(#lg-in)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("1.1s")} />

        {/* Outbound lines — TTL Runtime → AI layer */}
        <path d="M 354 178 C 404 178 442 96 450 96" fill="none" stroke="url(#lg-out)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0.25s")} />
        <path d="M 354 210 C 404 210 442 292 450 292" fill="none" stroke="url(#lg-out)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0.8s")} />

        {/* Column labels */}
        <text x="80" y="34" textAnchor="middle" fill="#06B6D4" fontSize="9" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.75">LOCAL DATA</text>
        <text x="290" y="34" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.55">PROTECTION LAYER</text>
        <text x="500" y="34" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.75">AI SYSTEMS</text>

        {/* Left — data source nodes */}
        <DataNode x={10} y={70} label="Databases" />
        <DataNode x={10} y={176} label="Vector DBs" />
        <DataNode x={10} y={282} label="Documents" />

        {/* Center — TTL-Shield Runtime */}
        <rect x="226" y="160" width="128" height="68" rx="12" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5" filter="url(#pf-glow)" />
        <text x="290" y="186" textAnchor="middle" fill="#A78BFA" fontSize="10" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em">TTL-SHIELD</text>
        <text x="290" y="201" textAnchor="middle" fill="#E2E8F0" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="600">Runtime</text>
        <text x="290" y="216" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif">Detect · Govern · Protect</text>
        <line x1="246" y1="220" x2="334" y2="220" stroke="rgba(139,92,246,0.22)" strokeWidth="1" />
        <circle cx="264" cy="211" r="2.5" fill="#10B981" />
        <text x="272" y="214" fill="#10B981" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.05em">ACTIVE</text>

        {/* Right — AI service nodes */}
        <AINode x={450} y={78} label="APIs" />
        <AINode x={450} y={274} label="AI Agents" />

        {/* Status dots */}
        <circle cx="568" cy="96" r="3.5" fill="#10B981" opacity="0.8" />
        <circle cx="568" cy="292" r="3.5" fill="#10B981" opacity="0.8" />
      </svg>
    </motion.div>
  );
}

// ── Hero section ─────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient light */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-surface/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.14),_transparent_34%),radial-gradient(circle_at_80%_28%,_rgba(6,182,212,0.12),_transparent_26%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[640px] h-[640px] bg-brand-secondary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[560px] h-[560px] bg-brand-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-32 w-full">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-16 xl:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Eyebrow badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-2.5 mb-8"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-widest uppercase">
                AI Privacy Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-success/10 border border-brand-success/20 text-brand-success text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success inline-block animate-pulse" />
                Runtime Protection Layer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[4.4rem] xl:text-[5rem] leading-[0.98] tracking-[-0.04em] mb-8 font-bold max-w-4xl"
            >
              Control What
              <br />
              <span className="gradient-text">Your AI Sees.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-muted text-lg leading-relaxed max-w-2xl mb-10"
            >
              Runtime privacy and governance infrastructure for enterprise AI systems.
              Detect, govern, and protect sensitive data across prompts, vector
              databases, agents, and AI workflows — without moving your data.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch gap-3 mb-12 max-w-2xl"
            >
              <a
                href="#about"
                className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/12 text-white font-semibold text-sm shadow-[0_18px_60px_rgba(2,6,23,0.5)] backdrop-blur-md hover:border-brand-primary/30 hover:bg-white/[0.07] hover:-translate-y-0.5 transition-all duration-200 min-w-[220px]"
              >
                <span>View Architecture</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/15 border border-brand-primary/20 text-brand-primary">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-brand-primary/[0.08] border border-brand-primary/20 text-white font-semibold text-sm shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-md hover:bg-brand-primary/[0.12] hover:border-brand-primary/35 hover:-translate-y-0.5 transition-all duration-200 min-w-[220px]"
              >
                <span>Book Demo</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary/20 border border-brand-primary/25 text-brand-primary">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-3"
            >
              {TRUST_BADGES.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-brand-muted text-xs font-medium backdrop-blur-sm"
                >
                  <Check className="w-3.5 h-3.5 text-brand-success flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Topology diagram ── */}
          <div className="hidden lg:flex items-center justify-end">
            <TopologyDiagram />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/15 to-transparent"
        />
      </motion.div>
    </section>
  );
}
