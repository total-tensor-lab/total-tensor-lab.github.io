import { useEffect, useState } from "react";
import { ArrowRight, Check, Pause, Play, ShieldCheck, Terminal } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

const FIELDS = [
  { key: "name", raw: "Alex Morgan", redacted: "[PERSON]" },
  { key: "email", raw: "alex@example.com", redacted: "[EMAIL]" },
  { key: "account", raw: "DEMO-4821-9036", redacted: "[ACCOUNT]" },
  { key: "query", raw: "What is the status of my order?", redacted: null },
];

export default function RedactionDemo() {
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [step, setStep] = useState(0);
  const displayStep = reducedMotion ? FIELDS.length : step;
  const detected = FIELDS.filter((field, index) => field.redacted && index < displayStep).length;
  const complete = displayStep >= FIELDS.length;

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setTimeout(() => setStep(previous => previous >= FIELDS.length ? 0 : previous + 1), complete ? 3200 : 1100);
    return () => window.clearTimeout(timer);
  }, [step, complete, paused, reducedMotion]);

  return (
    <section id="lolo-demo" aria-labelledby="demo-heading" className="relative overflow-hidden border-y border-white/[0.06] bg-[#15110c]/90 py-24 sm:py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="lolo-eyebrow">See Lolo in action</p>
          <h2 id="demo-heading" className="mt-4 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl">
            Keep the context.<br /><span className="hero-gradient">Protect the details.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-brand-body">
            From detection to redaction, see how sensitive text can be replaced
            while the useful parts of a prompt stay intact.
          </p>
          <ol className="my-8 space-y-5">
            {[
              ["Inspect", "Analyze textual content with NLP."],
              ["Identify", "Locate sensitive entities in the input."],
              ["Protect", "Redact details before sharing with AI."],
            ].map(([title, description], index) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 font-mono text-xs text-brand-secondary">0{index + 1}</span>
                <div><p className="text-sm font-medium text-brand-body">{title}</p><p className="mt-1 text-sm text-brand-label">{description}</p></div>
              </li>
            ))}
          </ol>
          <Link to="/?section=contact" className="button-lift inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-secondary focus-visible:outline-2 focus-visible:outline-brand-primary">Request a demo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <figure className="min-w-0">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1c1710] shadow-[0_30px_100px_-35px_rgba(245,184,61,0.25)]">
            <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.07] bg-white/[0.025] px-4 py-4 sm:px-6">
              <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#ff5f57]" /><span className="h-2 w-2 rounded-full bg-[#febc2e]" /><span className="h-2 w-2 rounded-full bg-[#28c840]" /></div>
              <span className="flex flex-1 items-center justify-center gap-2 font-mono text-[10px] text-brand-label sm:text-xs"><Terminal className="h-3.5 w-3.5" /> lolo / prompt-redaction</span>
              <span className="text-[9px] uppercase tracking-widest text-brand-label">Text demo</span>
            </div>
            <div className="px-4 py-7 font-mono text-[11px] sm:px-7 sm:text-sm">
              <div className="mb-6 flex items-center gap-2 text-xs text-brand-label"><span className="text-brand-primary">$</span> lolo inspect --input prompt.json</div>
              <div className="text-brand-label">{"{"}</div>
              {FIELDS.map((field, index) => {
                const redacted = index < displayStep && field.redacted;
                return (
                  <div key={field.key} className={`my-1 flex min-h-10 flex-wrap items-center gap-x-2 rounded-md px-3 py-2 transition-colors ${redacted ? "bg-brand-primary/[0.07]" : ""}`}>
                    <span className="text-brand-label">&quot;{field.key}&quot;:</span>
                    <span className={`break-all ${redacted ? "text-brand-secondary" : "text-brand-body"}`}>&quot;{redacted || field.raw}&quot;{index < FIELDS.length - 1 ? "," : ""}</span>
                    {redacted ? <Check aria-label="Redacted" className="ml-auto h-3.5 w-3.5 text-emerald-400" /> : null}
                  </div>
                );
              })}
              <div className="text-brand-label">{"}"}</div>
              <div className="mt-6 flex items-center gap-2 text-xs text-emerald-300/80"><ShieldCheck className="h-4 w-4 shrink-0" />{complete ? "Sensitive details redacted. Prompt context preserved." : "Inspecting prompt for sensitive information…"}</div>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3 sm:px-6">
              <span className="font-mono text-[10px] text-brand-label">{detected} / 3 sensitive fields redacted</span>
              {!reducedMotion ? <button type="button" onClick={() => setPaused(previous => !previous)} aria-label={paused ? "Play terminal animation" : "Pause terminal animation"} className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-brand-label hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-primary">{paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}{paused ? "Play" : "Pause"}</button> : <span className="text-xs text-brand-label">Redacted output</span>}
            </div>
          </div>
          <figcaption className="mt-4 text-center text-xs leading-relaxed text-brand-label">Illustrative text redaction using sample data. Visual detection is shown above.</figcaption>
        </figure>
      </div>
    </section>
  );
}
