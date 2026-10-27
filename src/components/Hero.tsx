import { ArrowDown, ArrowRight, Eye, ScanText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="lolo-hero relative isolate overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h1 id="hero-heading" className="hero-title mx-auto max-w-5xl font-semibold text-white">
          Control What Your AI{" "}
          <span className="hero-gradient">Reads and Sees.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-body sm:text-lg">
          Detect and redact sensitive information in text and images before it reaches your AI workflows.
        </p>
        <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link to="/?section=contact" className="lolo-button-primary group">Book a Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          <Link to="/?section=lolo-demo" className="lolo-button-secondary">See Lolo in Action <ArrowDown className="h-4 w-4" /></Link>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-brand-label">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/80" /> Process locally. Keep your data in your environment.
        </div>
        <div className="hero-focus-strip mx-auto mt-8 grid max-w-3xl grid-cols-1 text-left sm:mt-10 sm:grid-cols-2">
          <Link to="/?section=detection" className="button-lift group flex items-center gap-4 px-6 py-5 focus-visible:outline-2 focus-visible:outline-brand-primary sm:border-r sm:border-white/10">
            <ScanText className="h-6 w-6 shrink-0 text-brand-secondary" />
            <div className="flex-1"><p className="text-sm font-medium text-brand-body">Textual intelligence</p><p className="mt-1 text-xs text-brand-label">Sensitive data detection with NLP</p></div>
            <ArrowRight className="h-4 w-4 text-brand-label transition-colors group-hover:text-brand-secondary" />
          </Link>
          <Link to="/?section=detection" className="button-lift group flex items-center gap-4 border-t border-white/10 px-6 py-5 focus-visible:outline-2 focus-visible:outline-brand-primary sm:border-t-0">
            <Eye className="h-6 w-6 shrink-0 text-brand-secondary" />
            <div className="flex-1"><p className="text-sm font-medium text-brand-body">Visual intelligence</p><p className="mt-1 text-xs text-brand-label">Sensitive data detection with computer vision</p></div>
            <ArrowRight className="h-4 w-4 text-brand-label transition-colors group-hover:text-brand-secondary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
