import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, AudioLines, Bot, Check, Image as ImageIcon, Pause, Play, ShieldCheck, Type, User, type LucideIcon } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import SampleIdCard from "@/components/demo/SampleIdCard";
import { AUDIO_SCENE, IMAGE_ENTITIES, TEXT_SCENE, WAVE_BARS, type Entity, type TranscriptScene } from "@/components/demo/scenes";

type TabId = "text" | "image" | "audio";

const TABS: { id: TabId; label: string; Icon: LucideIcon }[] = [
  { id: "text", label: "Text", Icon: Type },
  { id: "image", label: "Image", Icon: ImageIcon },
  { id: "audio", label: "Audio", Icon: AudioLines },
];

const SCENES: Record<"text" | "audio", TranscriptScene> = { text: TEXT_SCENE, audio: AUDIO_SCENE };

function Transcript({ scene, step, protectedView }: { scene: TranscriptScene; step: number; protectedView: boolean }) {
  return (
    <p className="font-mono text-[13px] leading-8 text-brand-body sm:text-sm">
      {scene.segments.map((segment, index) => {
        if (segment.entity === undefined) return <span key={index}>{segment.text}</span>;
        const done = segment.entity < step;
        if (!protectedView) {
          return <span key={index} className={`rounded px-1 py-0.5 transition-colors motion-reduce:transition-none ${done ? "bg-rose-400/15 text-rose-200" : ""}`}>{segment.text}</span>;
        }
        return done
          ? <span key={index} className="rounded bg-brand-primary/10 px-1 py-0.5 text-brand-secondary">{scene.entities[segment.entity].token}</span>
          : <span key={index} aria-hidden="true" className="inline-block h-3 animate-pulse rounded bg-white/10 align-middle motion-reduce:animate-none" style={{ width: `${segment.text.length}ch` }} />;
      })}
    </p>
  );
}

function Waveform({ step, protectedView }: { step: number; protectedView: boolean }) {
  return (
    <div className="flex h-14 items-center gap-[2px]" aria-hidden="true">
      {WAVE_BARS.map((bar, index) => {
        const flagged = bar.entity !== undefined && bar.entity < step;
        const muted = protectedView && flagged;
        return (
          <span
            key={index}
            className={`flex-1 rounded-full transition-all duration-300 motion-reduce:transition-none ${flagged ? (protectedView ? "bg-brand-primary/40" : "bg-rose-400/80") : "bg-white/25"}`}
            style={{ height: `${(muted ? 0.08 : bar.height) * 100}%` }}
          />
        );
      })}
    </div>
  );
}

function Pane({ title, Icon, children }: { title: string; Icon: LucideIcon; children: React.ReactNode }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.07] bg-black/20 p-4 sm:p-5">
      <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-label"><Icon className="h-3.5 w-3.5" aria-hidden="true" />{title}</p>
      {children}
    </div>
  );
}

function ImageCompare() {
  const [position, setPosition] = useState(50);
  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative aspect-[480/280] select-none overflow-hidden rounded-xl border border-white/10 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand-primary">
        <div className="absolute inset-0"><SampleIdCard protectedView={false} /></div>
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}><SampleIdCard protectedView /></div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-brand-primary shadow-[0_0_12px_rgba(245,184,61,0.8)]" style={{ left: `${position}%` }}>
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-secondary bg-brand-ink text-xs text-brand-secondary" aria-hidden="true">↔</span>
        </div>
        <span className="pointer-events-none absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">User sends</span>
        <span className="pointer-events-none absolute right-2 bottom-2 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-secondary">Model receives</span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={event => setPosition(Number(event.target.value))}
          aria-label="Compare the original and protected image"
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-center text-xs text-brand-label">Drag the divider to compare the original with what the model receives.</p>
    </div>
  );
}

function AuditLog({ entities, step }: { entities: Entity[]; step: number }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-white/[0.07]">
      <p className="border-b border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-label">Audit log</p>
      <table className="w-full text-left font-mono text-[11px] sm:text-xs">
        <thead className="sr-only"><tr><th>Entity</th><th>Action</th><th>Confidence</th><th>Status</th></tr></thead>
        <tbody>
          {entities.map((entity, index) => {
            const done = index < step;
            return (
              <tr key={entity.type} className={`border-b border-white/[0.05] last:border-0 transition-opacity motion-reduce:transition-none ${done ? "opacity-100" : "opacity-35"}`}>
                <td className="px-4 py-2.5 text-brand-body">{entity.type}</td>
                <td className="px-2 py-2.5 text-brand-secondary">{entity.action}</td>
                <td className="hidden px-2 py-2.5 text-brand-label sm:table-cell">{done ? `${entity.confidence}% confidence` : "—"}</td>
                <td className="px-4 py-2.5 text-right">{done ? <span className="inline-flex items-center gap-1.5 text-emerald-300"><Check className="h-3.5 w-3.5" aria-hidden="true" />Protected</span> : <span className="text-brand-label">Pending</span>}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function RedactionDemo() {
  const reducedMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("text");
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ text: null, image: null, audio: null });

  const entities = tab === "image" ? IMAGE_ENTITIES : SCENES[tab].entities;
  const total = entities.length;
  const animated = tab !== "image" && !reducedMotion;
  const displayStep = animated ? step : total;
  const complete = displayStep >= total;

  const selectTab = (id: TabId) => { setTab(id); setStep(0); };

  useEffect(() => {
    if (!animated || paused) return;
    const timer = window.setTimeout(() => setStep(previous => previous >= total ? 0 : previous + 1), complete ? 3200 : 1100);
    return () => window.clearTimeout(timer);
  }, [step, complete, paused, animated, total]);

  const onTabKeyDown = (event: KeyboardEvent, index: number) => {
    const keys: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: TABS.length - 1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = TABS[(keys[event.key] + TABS.length) % TABS.length].id;
    selectTab(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="lolo-demo" aria-labelledby="demo-heading" className="relative overflow-hidden border-y border-white/[0.06] bg-[#15110c]/90 py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="lolo-eyebrow">See Lolo in action</p>
          <h2 id="demo-heading" className="mt-4 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl">
            Keep the context.<br />Protect the details.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-body">
            Pick a modality and compare what a user sends with what the model actually receives, plus the audit trail behind every change.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1710] shadow-[0_30px_100px_-35px_rgba(245,184,61,0.25)]">
          <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.07] bg-white/[0.025] px-4 py-3 sm:px-6">
            <div role="tablist" aria-label="Demo modality" className="flex gap-1">
              {TABS.map(({ id, label, Icon }, index) => (
                <button
                  key={id}
                  ref={element => { tabRefs.current[id] = element; }}
                  role="tab"
                  id={`demo-tab-${id}`}
                  aria-selected={tab === id}
                  aria-controls="demo-panel"
                  tabIndex={tab === id ? 0 : -1}
                  onClick={() => selectTab(id)}
                  onKeyDown={event => onTabKeyDown(event, index)}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-primary motion-reduce:transition-none sm:text-sm ${tab === id ? "bg-brand-primary/15 text-brand-secondary" : "text-brand-label hover:bg-white/5 hover:text-white"}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />{label}
                </button>
              ))}
            </div>
            <span className="ml-auto text-[9px] uppercase tracking-widest text-brand-label">Simulated demo</span>
          </div>

          <div role="tabpanel" id="demo-panel" aria-labelledby={`demo-tab-${tab}`} className="p-4 sm:p-6">
            {tab === "image" ? (
              <ImageCompare />
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                <Pane title="User sends" Icon={User}>
                  {tab === "audio" ? <div className="mb-4"><Waveform step={displayStep} protectedView={false} /></div> : null}
                  <Transcript scene={SCENES[tab]} step={displayStep} protectedView={false} />
                </Pane>
                <Pane title="Model receives" Icon={Bot}>
                  {tab === "audio" ? <div className="mb-4"><Waveform step={displayStep} protectedView /></div> : null}
                  <Transcript scene={SCENES[tab]} step={displayStep} protectedView />
                </Pane>
              </div>
            )}
            <AuditLog entities={entities} step={displayStep} />
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3 sm:px-6">
            <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-300/80 sm:text-xs" role="status">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              {displayStep} / {total} sensitive items protected{complete ? " · context preserved" : ""}
            </span>
            {animated ? (
              <button type="button" onClick={() => setPaused(previous => !previous)} aria-label={paused ? "Play demo animation" : "Pause demo animation"} className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-brand-label hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-primary">
                {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}{paused ? "Play" : "Pause"}
              </button>
            ) : null}
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-brand-label">Illustrative demo using synthetic data. No real personal information is shown.</p>
        <div className="mt-8 text-center">
          <Link to="/?section=contact" className="lolo-button-primary group">Request a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </section>
  );
}
