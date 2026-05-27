import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// ── Topology diagram helpers ─────────────────────────────────────────────────
function DataNode({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="112" height="36" rx="7" fill="#0F172A" stroke="#06B6D4" strokeWidth="1" opacity="0.9" />
      <rect x={x} y={y} width="3" height="36" rx="2" fill="#06B6D4" />
      <text x={x + 16} y={y + 22} fill="#CBD5E1" fontSize="11.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">{label}</text>
    </g>
  );
}

function AINode({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width="112" height="36" rx="7" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1" opacity="0.9" />
      <rect x={x + 109} y={y} width="3" height="36" rx="2" fill="#8B5CF6" />
      <text x={x + 12} y={y + 22} fill="#CBD5E1" fontSize="11.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="500">{label}</text>
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
      className="relative w-full"
    >
      <svg
        viewBox="0 0 560 356"
        className="w-full h-auto"
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
        <rect width="560" height="356" fill="url(#topo-grid)" rx="16" />
        <ellipse cx="280" cy="178" rx="130" ry="88" fill="url(#center-glow)" />

        {/* Inbound lines — data sources → TTL Runtime */}
        <path d="M 122 68 C 165 68 208 161 208 161" fill="none" stroke="url(#lg-in)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0s")} />
        <path d="M 122 178 L 208 178" fill="none" stroke="url(#lg-in)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0.55s")} />
        <path d="M 122 288 C 165 288 208 195 208 195" fill="none" stroke="url(#lg-in)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("1.1s")} />

        {/* Outbound lines — TTL Runtime → AI layer */}
        <path d="M 352 161 C 395 161 438 68 438 68" fill="none" stroke="url(#lg-out)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0.25s")} />
        <path d="M 352 178 L 438 178" fill="none" stroke="url(#lg-out)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("0.8s")} />
        <path d="M 352 195 C 395 195 438 288 438 288" fill="none" stroke="url(#lg-out)" strokeWidth="1.5" strokeDasharray="8 5" style={lineStyle("1.35s")} />

        {/* Column labels */}
        <text x="66" y="26" textAnchor="middle" fill="#06B6D4" fontSize="9" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.75">YOUR INFRA</text>
        <text x="280" y="26" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.12em" opacity="0.55">PRIVATE RUNTIME</text>
        <text x="494" y="26" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.14em" opacity="0.75">AI LAYER</text>

        {/* Left — data source nodes */}
        <DataNode x={10} y={50} label="Vector Store" />
        <DataNode x={10} y={160} label="Documents" />
        <DataNode x={10} y={270} label="SQL / Struct" />

        {/* Center — TTL Privacy Runtime */}
        <rect x="208" y="146" width="144" height="64" rx="11" fill="#0F172A" stroke="#8B5CF6" strokeWidth="1.5" filter="url(#pf-glow)" />
        <text x="280" y="171" textAnchor="middle" fill="#A78BFA" fontSize="10.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="700" letterSpacing="0.12em">TTL RUNTIME</text>
        <text x="280" y="186" textAnchor="middle" fill="#64748B" fontSize="9" fontFamily="Inter,system-ui,sans-serif">Privacy · Governance · Audit</text>
        <line x1="226" y1="193" x2="334" y2="193" stroke="rgba(139,92,246,0.22)" strokeWidth="1" />
        <circle cx="254" cy="203" r="2.5" fill="#10B981" />
        <text x="262" y="207" fill="#10B981" fontSize="8.5" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" letterSpacing="0.05em">ACTIVE</text>

        {/* Right — AI service nodes */}
        <AINode x={438} y={50} label="LLM API" />
        <AINode x={438} y={160} label="Embeddings" />
        <AINode x={438} y={270} label="RAG Engine" />

        {/* Status dots */}
        <circle cx="555" cy="68" r="3.5" fill="#10B981" opacity="0.8" />
        <circle cx="555" cy="178" r="3.5" fill="#10B981" opacity="0.8" />
        <circle cx="555" cy="288" r="3.5" fill="#10B981" opacity="0.8" />
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
      <div className="absolute top-1/4 -left-40 w-[640px] h-[640px] bg-brand-secondary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[560px] h-[560px] bg-brand-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">

          {/* ── Left: Text ── */}
          <div>
            {/* Eyebrow badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-2 mb-8"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold tracking-widest uppercase">
                Privacy Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-success/10 border border-brand-success/20 text-brand-success text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success inline-block animate-pulse" />
                SOC2 · GDPR · HIPAA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.06] tracking-tight mb-7 font-bold"
            >
              Secure AI.
              <br />
              Without Moving
              <br />
              <span className="gradient-text">Your Data.</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-muted text-lg leading-relaxed max-w-xl mb-10"
            >
              Deploy AI governance and privacy controls inside your own
              infrastructure. Protect vector stores, RAG pipelines, and AI
              runtimes — with zero data egress.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-14"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-brand-primary text-white font-semibold text-sm shadow-lg shadow-brand-primary/25 hover:bg-brand-primary/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white/[0.04] border border-white/10 text-white font-medium text-sm hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200"
              >
                Explore Platform
              </a>
            </motion.div>

            {/* Trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-x-7 gap-y-2"
            >
              {[
                "100% On-Premise",
                "Zero Data Egress",
                "Any LLM / Model",
                "Full Audit Trail",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-brand-muted text-xs font-medium">
                  <span className="w-1 h-1 rounded-full bg-brand-secondary flex-shrink-0" />
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
