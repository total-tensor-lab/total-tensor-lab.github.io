import { Eye, ScanText, ShieldCheck } from "lucide-react";

export default function Detection() {
  return (
    <section id="detection" aria-labelledby="detection-heading" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="lolo-eyebrow">Two modalities. One privacy layer.</p>
            <h2 id="detection-heading" className="mt-4 text-4xl font-semibold leading-[1.12] text-white sm:text-5xl">
              Sensitive data hides<br />in plain sight.
            </h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="detection-card detection-card-text">
            <div className="flex items-center justify-between">
              <span className="detection-icon text-brand-secondary"><ScanText className="h-5 w-5" /></span>
              <span className="font-mono text-[11px] tracking-widest text-brand-secondary/70">01 / TEXT</span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold text-white">Understand the text.</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-body">
              Natural language processing identifies sensitive information in written content,
              from prompts and documents to the context you share with AI.
            </p>
            <div className="detection-example mt-8">
              <div className="mb-5 flex justify-between font-mono text-[10px] uppercase tracking-wider text-brand-label">
                <span>Prompt inspection</span><span>Illustrative example</span>
              </div>
              <p className="text-sm leading-[2.4] text-brand-body">
                Summarize the account for <mark className="sensitive-text">Alex Morgan <span>PERSON</span></mark>.<br />
                Send the report to <mark className="sensitive-text">alex@example.com <span>EMAIL</span></mark>.
              </p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-brand-secondary">
                <ScanText className="h-3.5 w-3.5" /> Sensitive entities identified in context
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Text content types">
              {["Prompts", "Documents", "Written context"].map(label => <span key={label} className="content-tag">{label}</span>)}
            </div>
          </article>
          <article className="detection-card detection-card-visual">
            <div className="flex items-center justify-between">
              <span className="detection-icon text-brand-secondary"><Eye className="h-5 w-5" /></span>
              <span className="font-mono text-[11px] tracking-widest text-brand-secondary/70">02 / VISUAL</span>
            </div>
            <h3 className="mt-7 text-2xl font-semibold text-white">Inspect the image.</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-body">
              Computer vision detects sensitive visual information in images,
              screenshots, and scanned documents, bringing privacy controls to what your AI sees.
            </p>
            <div className="detection-example mt-8">
              <div className="mb-5 flex flex-wrap justify-between gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-brand-label">
                <span>Visual inspection</span><span>Illustrative example</span>
              </div>
              <div className="visual-document" role="img" aria-label="Static illustrative document with entirely synthetic data. Outlined regions label a drawn face as Face, Alex Example as Name, and DEMO-0042 as Account number. This is an illustration, not a live scan.">
                <p className="col-span-2 text-[10px] uppercase tracking-wider text-brand-label">Synthetic sample</p>
                <div className="visual-region">
                  <span className="visual-region-label">Face</span>
                  <div className="document-avatar"><span /><div /></div>
                </div>
                <div className="min-w-0 space-y-2">
                  <div className="visual-region">
                    <span className="visual-region-label">Name</span>
                    <span className="visual-region-value">Alex Example</span>
                  </div>
                  <div className="visual-region">
                    <span className="visual-region-label">Account number</span>
                    <span className="visual-region-value font-mono">DEMO-0042</span>
                  </div>
                </div>
                <div className="scan-corner scan-corner-tl" /><div className="scan-corner scan-corner-br" />
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-brand-secondary">
                <Eye className="h-3.5 w-3.5 shrink-0" /> Sample regions highlighted
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2" aria-label="Visual content types">
              {["Images", "Screenshots", "Scanned documents"].map(label => <span key={label} className="content-tag">{label}</span>)}
            </div>
          </article>
        </div>
        <p className="mt-7 flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-brand-label">
          <ShieldCheck className="h-4 w-4 shrink-0 text-brand-label" />
          Purpose-built for text and visual privacy, with detection before AI processing.
        </p>
      </div>
    </section>
  );
}
