import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { AppWindow, Ban, Bot, EyeOff, KeyRound, ListChecks, Pause, Play, ScanSearch, ScrollText, ShieldAlert, type LucideIcon } from "lucide-react";
import { useInView, useReducedMotion } from "motion/react";

type Tone = "sensitive" | "safe";
type Segment = { text: string; tone?: Tone };

type Scenario = {
  id: "mask" | "block" | "vault";
  label: string;
  Icon: LucideIcon;
  prompt: string;
  detected: Segment[];
  entities: string[];
  rules: { type: string; action: string; blocked?: boolean }[];
  ruleNote?: string;
  audit: string;
  outbound?: Segment[];
  appResult?: { label: string; text: string; blocked?: boolean };
  captions: string[];
};

const STAGE = { app: 0, detect: 1, policy: 2, audit: 3, outbound: 4 };

// Outputs below come from promptveil 0.1.3. Audit lines omit the timestamp and position fields.
const SCENARIOS: Scenario[] = [
  {
    id: "mask",
    label: "Mask",
    Icon: EyeOff,
    prompt: "Contact alice@example.com for the invoice.",
    detected: [{ text: "Contact " }, { text: "alice@example.com", tone: "sensitive" }, { text: " for the invoice." }],
    entities: ["email"],
    rules: [{ type: "email", action: "mask" }],
    audit: `{"event": "prompt_scan", "detections": 1, "entities": [{"entity_type": "email", "action": "mask", "value_preview": "a***@example.com"}]}`,
    outbound: [{ text: "Contact " }, { text: "a***@example.com", tone: "safe" }, { text: " for the invoice." }],
    captions: [
      "Your app sends a prompt.",
      "A detector finds an email address.",
      "Your policy says to mask it.",
      "The decision is logged without the raw value.",
      "The LLM receives the masked prompt.",
    ],
  },
  {
    id: "block",
    label: "Block",
    Icon: ShieldAlert,
    prompt: "Bill me at alice@example.com, card 4111-1111-1111-1111",
    detected: [{ text: "Bill me at " }, { text: "alice@example.com", tone: "sensitive" }, { text: ", card " }, { text: "4111-1111-1111-1111", tone: "sensitive" }],
    entities: ["email", "credit_card"],
    rules: [{ type: "email", action: "mask" }, { type: "credit_card", action: "block", blocked: true }],
    audit: `{"event": "prompt_blocked", "entity_type": "credit_card", "action": "block"}`,
    appResult: { label: "Raised", text: "SensitiveDataError", blocked: true },
    captions: [
      "Your app sends a prompt.",
      "Detectors find an email address and a card number.",
      "Your policy blocks credit cards.",
      "The block is logged without the card number.",
      "SensitiveDataError is raised, so nothing reaches the LLM.",
    ],
  },
  {
    id: "vault",
    label: "Pseudonymize",
    Icon: KeyRound,
    prompt: "Email alice@example.com about the renewal.",
    detected: [{ text: "Email " }, { text: "alice@example.com", tone: "sensitive" }, { text: " about the renewal." }],
    entities: ["email"],
    rules: [{ type: "email", action: "mask" }],
    ruleNote: "Vault token: <EMAIL_1>",
    audit: `{"event": "prompt_scan", "detections": 1, "entities": [{"entity_type": "email", "action": "mask", "value_preview": "<EMAIL_1>"}]}`,
    outbound: [{ text: "Email " }, { text: "<EMAIL_1>", tone: "safe" }, { text: " about the renewal." }],
    appResult: { label: "Restored reply", text: "Done. I drafted a note to alice@example.com." },
    captions: [
      "Your app sends a prompt.",
      "A detector finds an email address.",
      "The vault swaps it for a reversible token.",
      "The decision is logged with the token, not the address.",
      "The LLM only ever sees the token.",
      "vault.restore() puts the address back in the reply.",
    ],
  },
];

const lastStage = (scenario: Scenario) => scenario.captions.length - 1;

function Text({ segments }: { segments: Segment[] }) {
  return (
    <p className="font-mono text-xs leading-relaxed text-brand-body [overflow-wrap:anywhere]">
      {segments.map(({ text, tone }, index) => (
        <span key={index} className={tone === "sensitive" ? "rounded bg-rose-400/15 px-0.5 text-rose-200" : tone === "safe" ? "rounded bg-brand-primary/10 px-0.5 text-brand-secondary" : ""}>{text}</span>
      ))}
    </p>
  );
}

type SlotsProps = { current: Scenario; stage: number; from: number | ((scenario: Scenario) => number); render: (scenario: Scenario) => ReactNode };

// Stacks every scenario in one grid cell so the diagram keeps its height as content changes.
function Slots({ current, stage, from, render }: SlotsProps) {
  return (
    <div className="grid">
      {SCENARIOS.map((scenario) => {
        const start = typeof from === "function" ? from(scenario) : from;
        const visible = scenario.id === current.id && stage >= start;
        return (
          <div key={scenario.id} className={`min-w-0 transition-opacity duration-300 [grid-area:1/1] motion-reduce:transition-none ${visible ? "opacity-100" : "opacity-0"}`}>
            {render(scenario)}
          </div>
        );
      })}
    </div>
  );
}

function Node({ title, Icon, at, stage, blocked, className = "", children }: { title: string; Icon: LucideIcon; at: number; stage: number; blocked?: boolean; className?: string; children: ReactNode }) {
  const state = stage === at ? "active" : stage > at ? "done" : "idle";
  const border = blocked ? "border-rose-400/50" : state === "active" ? "border-brand-primary/60 shadow-[0_0_34px_-10px_rgba(245,184,61,0.6)]" : state === "done" ? "border-brand-primary/25" : "border-white/[0.08]";
  return (
    <div className={`relative z-10 min-w-0 rounded-xl border bg-[#211b13] p-4 transition-[border-color,box-shadow] duration-300 motion-reduce:transition-none ${border} ${className}`}>
      <p className={`mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors ${state === "idle" ? "text-brand-label" : "text-brand-primary"}`}>
        <Icon className="h-3.5 w-3.5 flex-shrink-0" />{title}
      </p>
      {children}
    </div>
  );
}

function Wire({ at, stage, horizontal, blocked, reverse, className = "" }: { at: number; stage: number; horizontal?: boolean; blocked?: boolean; reverse?: boolean; className?: string }) {
  const lit = stage >= at;
  const moving = reverse || stage === at;
  return (
    <div className={`pv-wire ${horizontal ? "pv-wire-h" : ""} ${className}`} data-lit={lit} data-blocked={blocked && lit}>
      <span className="pv-wire-fill" />
      {moving && !blocked ? <span key={`${at}-${stage}`} className="pv-wire-dot" data-reverse={reverse} /> : null}
      {blocked && lit ? (
        <span className="absolute top-1/2 left-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-rose-400/60 bg-[#2a1616] text-rose-300">
          <Ban className="h-4 w-4" />
        </span>
      ) : null}
    </div>
  );
}

export default function PipelineFlow() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.2 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pinned, setPinned] = useState(false);

  const scenario = SCENARIOS[index];
  const last = lastStage(scenario);
  const stage = reducedMotion ? last : step;
  const blocked = scenario.id === "block";

  const selectScenario = (next: number) => {
    setIndex(next);
    setStep(0);
    setPinned(true);
  };

  useEffect(() => {
    if (reducedMotion || paused || !inView) return;
    const finished = step >= last;
    const timer = window.setTimeout(() => {
      if (!finished) {
        setStep(step + 1);
        return;
      }
      setStep(0);
      if (!pinned) setIndex((index + 1) % SCENARIOS.length);
    }, finished ? 3800 : 1600);
    return () => window.clearTimeout(timer);
  }, [step, last, index, paused, pinned, inView, reducedMotion]);

  const onTabKeyDown = (event: KeyboardEvent, position: number) => {
    const keys: Record<string, number> = { ArrowRight: position + 1, ArrowLeft: position - 1, Home: 0, End: SCENARIOS.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = (keys[event.key] + SCENARIOS.length) % SCENARIOS.length;
    selectScenario(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={containerRef} className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1710] shadow-[0_30px_100px_-35px_rgba(245,184,61,0.25)]">
      <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.07] bg-white/[0.025] px-4 py-3 sm:px-6">
        <div role="tablist" aria-label="Policy outcome" className="flex flex-wrap gap-1">
          {SCENARIOS.map(({ id, label, Icon }, position) => (
            <button
              key={id}
              ref={(element) => { tabRefs.current[position] = element; }}
              type="button"
              role="tab"
              id={`pipeline-tab-${id}`}
              aria-selected={position === index}
              aria-controls="pipeline-panel"
              tabIndex={position === index ? 0 : -1}
              onClick={() => selectScenario(position)}
              onKeyDown={(event) => onTabKeyDown(event, position)}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary motion-reduce:transition-none sm:text-sm ${position === index ? "bg-brand-primary/15 text-brand-secondary" : "text-brand-label hover:bg-white/5 hover:text-white"}`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />{label}
            </button>
          ))}
        </div>
        <span className="ml-auto text-[9px] uppercase tracking-widest text-brand-label">Sample data</span>
      </div>

      <div role="tabpanel" id="pipeline-panel" aria-labelledby={`pipeline-tab-${scenario.id}`} className="p-4 pt-8 sm:p-8 sm:pt-10">
        <ol className="sr-only">
          <li>Prompt: {scenario.prompt}</li>
          {scenario.captions.slice(1).map((caption) => <li key={caption}>{caption}</li>)}
        </ol>

        <div aria-hidden="true" className="grid grid-cols-[minmax(0,1fr)] justify-items-stretch lg:grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)_28px_minmax(0,1fr)_76px_minmax(0,1fr)] lg:grid-rows-[auto_24px_auto]">
          {/* Trust boundary around everything that runs in the application's process */}
          <div className="relative col-start-1 row-start-1 row-end-8 -m-2 rounded-2xl border border-dashed border-brand-primary/35 bg-brand-primary/[0.025] sm:-m-4 lg:col-end-6 lg:row-end-4">
            <span className="absolute -top-2.5 left-4 rounded bg-[#1c1710] px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-secondary">Your Python process</span>
          </div>

          <Node title="Your app" Icon={AppWindow} at={STAGE.app} stage={stage} blocked={blocked && stage >= STAGE.outbound} className="col-start-1 row-start-1">
            <Slots
              current={scenario}
              stage={stage}
              from={STAGE.app}
              render={(item) => (
                <>
                  <Text segments={[{ text: item.prompt }]} />
                  {item.appResult ? (
                    <div className={`mt-3 border-t border-white/[0.07] pt-3 transition-opacity duration-300 motion-reduce:transition-none ${item.id === scenario.id && stage >= lastStage(item) ? "opacity-100" : "opacity-0"}`}>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-label">{item.appResult.label}</p>
                      <p className={`font-mono text-xs leading-relaxed [overflow-wrap:anywhere] ${item.appResult.blocked ? "text-rose-300" : "text-emerald-300"}`}>{item.appResult.text}</p>
                    </div>
                  ) : null}
                </>
              )}
            />
          </Node>

          <Wire at={STAGE.detect} stage={stage} horizontal className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1" />

          <Node title="Detect" Icon={ScanSearch} at={STAGE.detect} stage={stage} className="col-start-1 row-start-3 lg:col-start-3 lg:row-start-1">
            <Slots
              current={scenario}
              stage={stage}
              from={STAGE.detect}
              render={(item) => (
                <>
                  <Text segments={item.detected} />
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.entities.map((entity) => <span key={entity} className="rounded border border-rose-400/25 px-1.5 py-0.5 font-mono text-[10px] text-rose-200">{entity}</span>)}
                  </div>
                </>
              )}
            />
          </Node>

          <Wire at={STAGE.policy} stage={stage} horizontal className="col-start-1 row-start-4 lg:col-start-4 lg:row-start-1" />

          <Node title="Apply policy" Icon={ListChecks} at={STAGE.policy} stage={stage} className="col-start-1 row-start-5 lg:col-start-5 lg:row-start-1">
            <Slots
              current={scenario}
              stage={stage}
              from={STAGE.policy}
              render={(item) => (
                <>
                  <ul className="space-y-1.5 font-mono text-xs">
                    {item.rules.map(({ type, action, blocked: isBlocked }) => (
                      <li key={type} className="flex items-center justify-between gap-2">
                        <span className="min-w-0 truncate text-brand-body">{type}</span>
                        <span className={`rounded px-1.5 py-0.5 ${isBlocked ? "bg-rose-400/15 text-rose-200" : "bg-brand-primary/10 text-brand-secondary"}`}>{action}</span>
                      </li>
                    ))}
                  </ul>
                  {item.ruleNote ? <p className="mt-3 font-mono text-[11px] text-brand-label [overflow-wrap:anywhere]">{item.ruleNote}</p> : null}
                </>
              )}
            />
          </Node>

          <Wire at={STAGE.audit} stage={stage} className="col-start-1 row-start-6 lg:col-start-5 lg:row-start-2 lg:h-full" />

          <Node title="Audit log" Icon={ScrollText} at={STAGE.audit} stage={stage} className="col-start-1 row-start-7 lg:col-end-6 lg:row-start-3">
            <Slots
              current={scenario}
              stage={stage}
              from={STAGE.audit}
              render={(item) => <p className="font-mono text-[11px] leading-relaxed text-brand-body [overflow-wrap:anywhere]">{item.audit}</p>}
            />
          </Node>

          <Wire
            at={STAGE.outbound}
            stage={stage}
            horizontal
            blocked={blocked}
            reverse={stage > STAGE.outbound}
            className="col-start-1 row-start-8 lg:col-start-6 lg:row-start-1"
          />

          <Node title="LLM API" Icon={Bot} at={STAGE.outbound} stage={stage} blocked={blocked && stage >= STAGE.outbound} className="col-start-1 row-start-9 lg:col-start-7 lg:row-start-1">
            <Slots
              current={scenario}
              stage={stage}
              from={STAGE.outbound}
              render={(item) => item.outbound ? <Text segments={item.outbound} /> : <p className="font-mono text-xs text-rose-300">Nothing sent</p>}
            />
          </Node>

          <div className="relative z-10 col-start-1 row-start-10 mt-5 space-y-2 text-xs text-brand-label lg:col-start-7 lg:row-start-3 lg:mt-0 lg:self-center lg:pl-1">
            <p className="flex items-center gap-2"><span className="h-2.5 w-2.5 flex-shrink-0 rounded-sm bg-rose-400/70" />Raw sensitive value</p>
            <p className="flex items-center gap-2"><span className="h-2.5 w-2.5 flex-shrink-0 rounded-sm bg-brand-primary/80" />Masked or tokenized</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3 sm:px-6">
        <p className="flex min-w-0 items-center gap-3 text-xs text-brand-body sm:text-sm">
          <span className="flex-shrink-0 font-mono text-brand-primary">{stage + 1}/{last + 1}</span>
          <span>{scenario.captions[stage]}</span>
        </p>
        {!reducedMotion ? (
          <button type="button" onClick={() => setPaused((previous) => !previous)} aria-label={paused ? "Play pipeline animation" : "Pause pipeline animation"} className="flex flex-shrink-0 items-center gap-2 rounded-md px-2 py-1 text-xs text-brand-label hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-primary">
            {paused ? <Play className="h-3 w-3" aria-hidden="true" /> : <Pause className="h-3 w-3" aria-hidden="true" />}{paused ? "Play" : "Pause"}
          </button>
        ) : null}
      </div>
    </div>
  );
}
