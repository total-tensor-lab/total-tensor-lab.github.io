import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Check, ShieldCheck, Zap, CalendarCheck, Cpu, Server, WifiOff, Building2 } from "lucide-react";

const ROTATING_WORDS = ["Read", "Listen", "See"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-grid overflow-hidden align-bottom">
      {/* Hidden reference word — sets container width to the longest word */}
      <span className="invisible pointer-events-none" style={{ gridArea: "1/1" }}>Listens</span>
      {/* Animated word sits on top, clipped to the same cell */}
      <span className="overflow-hidden flex items-end justify-start" style={{ gridArea: "1/1" }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.33, 1, 0.68, 1] }}
            className="gradient-text"
            style={{ display: "inline-block" }}
          >
            {ROTATING_WORDS[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}

// ── Privacy Score Dashboard ──────────────────────────────────────────────────
const RISK_ROWS = [
  { label: "PII (Personally Identifiable)", severity: "High",   color: "#EF4444", bg: "rgba(239,68,68,0.18)",   count: 12 },
  { label: "PHI (Protected Health Info)",   severity: "Medium", color: "#F59E0B", bg: "rgba(245,158,11,0.18)",  count: 4  },
  { label: "Credentials / Secrets",         severity: "High",   color: "#EF4444", bg: "rgba(239,68,68,0.18)",   count: 3  },
  { label: "Financial / Payment Data",      severity: "Medium", color: "#F59E0B", bg: "rgba(245,158,11,0.18)",  count: 2  },
  { label: "IP Address / Location",         severity: "Low",    color: "#10B981", bg: "rgba(16,185,129,0.18)",  count: 6  },
];

const COMPLIANCE_ITEMS = [
  { label: "GDPR",      status: "Passed"    },
  { label: "CCPA",      status: "Passed"    },
  { label: "HIPAA",     status: "Passed"    },
  { label: "ISO 27001", status: "Passed"    },
  { label: "EU AI Act", status: "Compliant" },
];

const SCORE = 92;
const GAUGE_R = 54;
const GAUGE_CX = 80;
const GAUGE_CY = 82;
const CIRCUMFERENCE = 2 * Math.PI * GAUGE_R;          // ≈ 339.3
const ARC_LENGTH = CIRCUMFERENCE * (270 / 360);        // ≈ 254.5  (270° sweep)
const DEAD_ZONE = CIRCUMFERENCE - ARC_LENGTH;          // ≈ 84.8
const FILLED = ARC_LENGTH * (SCORE / 100);             // ≈ 234.1
const UNFILLED_GAP = CIRCUMFERENCE - FILLED;           // ≈ 105.2

function PrivacyScoreDashboard() {
  const [scanTime, setScanTime] = useState(0.1);

  useEffect(() => {
    const id = setInterval(() => {
      setScanTime((t) => {
        const next = parseFloat((t + 0.1).toFixed(1));
        return next >= 5.0 ? 0.1 : next;
      });
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.55, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full rounded-2xl border border-white/10 bg-[#070C18] overflow-hidden shadow-[0_30px_100px_rgba(2,6,23,0.7),0_0_60px_rgba(139,92,246,0.06)]"
    >
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent pointer-events-none" />

      {/* ── Card header ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-primary" />
          <span className="text-[11px] font-bold tracking-[0.08em] uppercase">
            <span className="text-brand-primary">TTL-Shield</span>{" "}
            <span className="text-slate-400">Privacy Dashboard</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-success animate-pulse" />
          <span className="text-[10px] font-semibold text-brand-success tracking-wider uppercase">Live</span>
        </div>
      </div>

      {/* ── Three-column body: risk scan | score | compliance ── */}
      <div className="grid grid-cols-[43%_27%_30%] divide-x divide-white/[0.07]">

        {/* Left — Risk Scan */}
        <div className="px-4 py-4">
          <div className="flex items-center gap-1 mb-4">
            <span className="text-[10px] xl:text-xs font-medium tracking-[0.04em] text-slate-300 uppercase">
              Risk Scan
            </span>
            <span className="text-[10px] xl:text-xs font-medium tracking-[0.04em] text-slate-300 uppercase">
              (Live)
            </span>
          </div>
          <div className="space-y-3">
            {RISK_ROWS.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="flex items-center justify-between gap-2"
              >
                <span className="min-w-0 text-[10px] xl:text-xs leading-tight text-slate-300">{row.label}</span>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className="text-[9px] xl:text-[11px] font-medium px-2 py-1 rounded-[5px] leading-none whitespace-nowrap"
                    style={{ color: row.color, background: row.bg }}
                  >
                    {row.severity}
                  </span>
                  <span className="text-[10px] xl:text-xs font-semibold text-slate-200 w-4 text-right tabular-nums">
                    {row.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Center — Score gauge */}
        <div className="px-3 py-4 flex flex-col">
          <span className="text-[10px] xl:text-xs font-medium tracking-[0.04em] text-slate-300 uppercase">
            Privacy Score
          </span>
          <div className="flex flex-1 items-center justify-center">
            <svg
              viewBox="0 0 160 145"
              className="w-full max-w-[160px]"
              aria-label={`Privacy score ${SCORE} out of 100`}
            >
              <defs>
                <linearGradient id="gauge-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06D4C8" />
                </linearGradient>
                <filter id="gauge-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <circle
                cx={GAUGE_CX} cy={GAUGE_CY} r={GAUGE_R}
                fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`${ARC_LENGTH} ${DEAD_ZONE}`}
                transform={`rotate(135, ${GAUGE_CX}, ${GAUGE_CY})`}
              />
              <motion.circle
                cx={GAUGE_CX} cy={GAUGE_CY} r={GAUGE_R}
                fill="none" stroke="url(#gauge-fill)" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`0 ${CIRCUMFERENCE}`}
                transform={`rotate(135, ${GAUGE_CX}, ${GAUGE_CY})`}
                filter="url(#gauge-glow)"
                animate={{ strokeDasharray: `${FILLED} ${UNFILLED_GAP}` }}
                transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
              />
              <motion.text
                x={GAUGE_CX} y="78" textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="32" fontFamily="Inter,system-ui,sans-serif" fontWeight="700"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              >{SCORE}</motion.text>
              <text x={GAUGE_CX} y="98" textAnchor="middle" fill="#94A3B8" fontSize="11" fontFamily="Inter,system-ui,sans-serif">/100</text>
              <text x={GAUGE_CX} y="128" textAnchor="middle" fill="#38F59A" fontSize="12" fontFamily="Inter,system-ui,sans-serif" fontWeight="600">Excellent</text>
            </svg>
          </div>
        </div>

        {/* Right — Compliance */}
        <div className="px-4 py-4">
          <span className="text-[10px] xl:text-xs font-medium tracking-[0.04em] text-slate-300 uppercase block mb-4">
            Compliance
          </span>
          <div className="space-y-3">
            {COMPLIANCE_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75 + i * 0.08 }}
                className="flex items-center justify-between gap-2"
              >
                <span className="text-[10px] xl:text-xs text-slate-300 whitespace-nowrap">{item.label}</span>
                <span className="flex items-center gap-1 text-[9px] xl:text-[11px] text-brand-success font-medium whitespace-nowrap flex-shrink-0">
                  <Check className="w-3 h-3 flex-shrink-0" />
                  {item.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="border-t border-white/[0.07] px-4 py-2.5 flex items-center justify-between bg-white/[0.015]">
        <div className="flex items-center gap-2 text-[9px] xl:text-[11px] text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 inline-block" />
          <span>Protected by TTL-Shield Runtime v2.4</span>
        </div>
        <div className="flex items-center gap-3 text-[9px] xl:text-[11px]">
          <span className="text-slate-500">
            Last scan:{" "}
            <span className="text-slate-300 tabular-nums">{scanTime.toFixed(1)}s ago</span>
          </span>
          <span className="text-brand-success">•</span>
          <span className="flex items-center gap-1.5 text-slate-400">
            Auto-scan:
            <span className="text-brand-success font-bold">ON</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse inline-block" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── Prompt Redaction Terminal ─────────────────────────────────────────────────
const REDACT_FIELDS = [
  { key: "name",        raw: '"Sarah Johnson"',                 out: '" [REDACTED] "',        mask: false },
  { key: "email",       raw: '"sarah.johnson@gmail.com"',       out: '" [REDACTED] "',        mask: false },
  { key: "ssn",         raw: '"987-65-4321"',                   out: '" [REDACTED]"',         mask: false },
  { key: "card_number", raw: '"4111 1111 1111 1111"',           out: '"**** **** **** 1111"', mask: true  },
  { key: "address",     raw: '"45 Park Ave, NY NY 10016"',      out: '" [REDACTED] "',        mask: false },
  { key: "query",       raw: '"What is the status of my order?"', out: null,                sensitive: false },
];

type FieldState = 'hidden' | 'raw' | 'scanning' | 'done';

function PromptRedactionTerminal() {
  const total = REDACT_FIELDS.filter(f => f.out !== null).length;
  const [states, setStates] = useState<FieldState[]>(REDACT_FIELDS.map(() => 'hidden'));
  const [redactedCount, setRedactedCount] = useState(0);
  const [latency, setLatency] = useState(98);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>(res => setTimeout(res, ms));

    async function loop() {
      while (!cancelled) {
        // Reset
        setStates(REDACT_FIELDS.map(() => 'hidden'));
        setRedactedCount(0);
        await wait(350);

        // Fields appear one by one
        for (let i = 0; i < REDACT_FIELDS.length; i++) {
          if (cancelled) return;
          setStates(prev => prev.map((s, idx) => idx === i ? 'raw' : s));
          await wait(120);
        }
        await wait(480);

        // Scan + redact each sensitive field sequentially
        let count = 0;
        for (let i = 0; i < REDACT_FIELDS.length; i++) {
          if (cancelled) return;
          if (!REDACT_FIELDS[i].out) continue;
          // Scanning highlight
          setStates(prev => prev.map((s, idx) => idx === i ? 'scanning' : s));
          await wait(560);
          // Flip to redacted
          if (cancelled) return;
          setStates(prev => prev.map((s, idx) => idx === i ? 'done' : s));
          setLatency(Math.floor(Math.random() * 18) + 88);
          count++;
          setRedactedCount(count);
          await wait(280);
        }

        // Hold on completed state then loop
        await wait(2600);
      }
    }

    loop();
    return () => { cancelled = true; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.55, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full rounded-2xl border border-white/10 bg-[#0D1117] overflow-hidden shadow-[0_30px_100px_rgba(2,6,23,0.7),0_0_60px_rgba(139,92,246,0.06)]"
    >
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent pointer-events-none" />

      {/* ── Title bar ── */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08] bg-[#161B22]">
        <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F57]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#28C840]" />
        <span className="flex-1 text-center text-[13px] font-bold tracking-[0.16em] uppercase text-slate-300 select-none font-mono">
          Prompt Redaction Terminal
        </span>
        <ShieldCheck className="w-5 h-5 text-brand-primary flex-shrink-0" />
      </div>

      {/* ── JSON body ── */}
      <div className="px-7 pt-6 pb-5 font-mono text-[15px] leading-[2.1]">
        <span className="text-slate-500">{"{"}</span>
        {REDACT_FIELDS.map((f, i) => {
          const state = states[i];

          if (state === 'hidden') {
            return (
              <div key={f.key} className="pl-7 opacity-0 select-none" aria-hidden="true">
                &nbsp;
              </div>
            );
          }

          const isScanning = state === 'scanning';
          const isDone     = state === 'done';

          return (
            <motion.div
              key={f.key}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.18 }}
              className={[
                'pl-7 relative rounded-sm transition-colors duration-150',
                isScanning ? 'bg-brand-primary/[0.12]' : '',
              ].join(' ')}
            >
              {/* Left scan indicator bar */}
              {isScanning && (
                <motion.div
                  className="absolute left-0 top-[3px] bottom-[3px] w-[4px] rounded-full bg-brand-primary"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.15 }}
                />
              )}

              {/* Key */}
              <span className="text-[#79C0FF]">"{f.key}"</span>
              <span className="text-slate-500">: </span>

              {/* Value — animated swap raw → redacted */}
              <AnimatePresence mode="wait" initial={false}>
                {isDone ? (
                  <motion.span
                    key="out"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className={f.mask ? 'text-[#F0883E]' : f.out ? 'text-[#D29922]' : 'text-[#A5D6FF]'}
                  >
                    {f.out}
                  </motion.span>
                ) : isScanning ? (
                  <motion.span
                    key="scan"
                    animate={{ opacity: [1, 0.2, 1, 0.2, 1] }}
                    transition={{ duration: 0.55, ease: 'linear' }}
                    className="text-[#FF7B72]"
                  >
                    {f.raw}
                  </motion.span>
                ) : (
                  <motion.span
                    key="raw"
                    className={f.out ? 'text-[#FF7B72]' : 'text-[#A5D6FF]'}
                  >
                    {f.raw}
                  </motion.span>
                )}
              </AnimatePresence>

              {i < REDACT_FIELDS.length - 1 && <span className="text-slate-500">,</span>}
            </motion.div>
          );
        })}
        <span className="text-slate-500">{"}"}</span>
      </div>

      {/* ── Footer status bar ── */}
      <div className="border-t border-white/[0.07] px-5 py-3 flex items-center gap-3 bg-[#161B22] flex-wrap">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
          <span className="text-[12px] font-bold tracking-[0.1em] uppercase text-brand-primary font-mono">
            TTL-Shield Runtime
          </span>
        </div>
        <span className="text-slate-600 text-xs">•</span>
        <span className="text-[12px] text-slate-400 font-mono">
          <span className="text-[#FF7B72] font-semibold">{total}</span> PII fields detected
        </span>
        <span className="text-slate-600 text-xs">•</span>
        <span className="text-[12px] text-slate-400 font-mono">
          <motion.span
            key={redactedCount}
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.22 }}
            className="text-[#3FB950] font-semibold tabular-nums inline-block"
          >
            {redactedCount}
          </motion.span>{" "}fields redacted
        </span>
        <span className="text-slate-600 text-xs">•</span>
        <motion.span
          key={latency}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          className="text-[12px] text-brand-success font-mono tabular-nums"
        >
          ↑{latency}ms
        </motion.span>
      </div>
    </motion.div>
  );
}

const TRUST_BADGES = [
  {
    label: "Local Processing",
    sub: "Data never leaves your infra",
    Icon: Cpu,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20",
    glow: "rgba(139,92,246,0.12)",
  },
  {
    label: "Self-Hosted Runtime",
    sub: "Deploy inside your own stack",
    Icon: Server,
    color: "text-brand-secondary",
    bg: "bg-brand-secondary/10",
    border: "border-brand-secondary/20",
    glow: "rgba(6,182,212,0.12)",
  },
  {
    label: "Air-Gapped Deployment",
    sub: "Fully offline, zero egress",
    Icon: WifiOff,
    color: "text-brand-success",
    bg: "bg-brand-success/10",
    border: "border-brand-success/20",
    glow: "rgba(16,185,129,0.12)",
  },
  {
    label: "Enterprise Governance",
    sub: "Audit trails & policy controls",
    Icon: Building2,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10",
    border: "border-brand-primary/20",
    glow: "rgba(139,92,246,0.12)",
  },
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
    <section className="relative overflow-hidden pt-28 pb-28 lg:pt-36 lg:pb-44">
      {/* Ambient lighting layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-surface/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(139,92,246,0.18),transparent),radial-gradient(circle_at_80%_28%,rgba(6,182,212,0.12),transparent_26%)] pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-[640px] h-[640px] bg-brand-secondary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[560px] h-[560px] bg-brand-primary/[0.06] rounded-full blur-[140px] pointer-events-none" />
      {/* Top-edge accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1560px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[minmax(0,48fr)_minmax(0,52fr)] gap-8 xl:gap-14 items-center">

          {/* ── Left: Text ── */}
          <div>

            {/* Eyebrow badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap items-center gap-2.5 mb-10"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-semibold tracking-widest uppercase">
                AI Privacy Infrastructure
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-success/10 border border-brand-success/25 text-brand-success text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-success inline-block animate-pulse" />
                Runtime Protection Layer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.1rem] leading-[1.04] tracking-[-0.04em] mb-10 font-bold max-w-2xl"
            >
              Control What
              <br />
              <span className="whitespace-nowrap inline-flex items-baseline gap-[0.22em]">
                <span className="gradient-text">Your AI</span>
                <RotatingWord />
              </span>
            </motion.h1>

            {/* Divider accent */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.6, ease: "easeOut" }}
              className="origin-left w-16 h-0.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary mb-10"
            />

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-brand-muted text-lg text-white leading-relaxed max-w-xl mb-12"
            >
              Runtime privacy and governance infrastructure for enterprise AI systems.
              Detect, govern, and protect sensitive data across prompts, vector
              databases, agents, and AI workflows — without moving your data.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 }}
              className="flex flex-col sm:flex-row items-stretch gap-3"
            >
              {/* Primary — gradient fill */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-semibold text-sm text-white overflow-hidden shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:shadow-[0_0_55px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                <span className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-80 transition-opacity duration-200 blur-xl" />
                <CalendarCheck className="relative z-10 w-4 h-4" />
                <span className="relative z-10">Book a Demo</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>

              {/* Secondary — ghost */}
              <a
                href="#about"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white/[0.04] border border-white/12 text-white font-semibold text-sm hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-brand-secondary" />
                <span>View Architecture</span>
              </a>
            </motion.div>

          </div>

          {/* ── Right: Prompt Redaction Terminal ── */}
          <div className="hidden lg:flex items-center justify-center xl:scale-[1.08]">
            <PromptRedactionTerminal />
          </div>

        </div>

        {/* Trust badges — 2×2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 gap-3"
        >
          {TRUST_BADGES.map(({ label, sub, Icon, color, bg, border, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + i * 0.07 }}
              className={`group relative overflow-hidden flex items-center gap-4 px-5 py-4 rounded-2xl border ${border} bg-white/[0.025] backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-200`}
            >
              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(circle at 20% 50%, ${glow}, transparent 70%)` }}
              />
              {/* Icon */}
              <span className={`relative z-10 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.08] ${bg}`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </span>
              {/* Text */}
              <div className="relative z-10 min-w-0">
                <p className="text-sm font-semibold text-slate-200 leading-snug">{label}</p>
                <p className="text-xs text-brand-muted mt-0.5 leading-snug">{sub}</p>
              </div>
              {/* Check pill */}
              <span className="relative z-10 ml-auto flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-success/10 border border-brand-success/20">
                <Check className="h-3 w-3 text-brand-success" />
                <span className="text-[10px] font-semibold text-brand-success tracking-wide">Active</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5"
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
