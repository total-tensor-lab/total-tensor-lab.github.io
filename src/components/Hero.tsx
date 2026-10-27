import { ArrowDown, ArrowRight, Eye, ScanText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="lolo-hero relative isolate overflow-hidden">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-primary/20 bg-brand-primary/[0.07] px-4 py-2 text-xs font-medium text-brand-secondary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_12px_#f5b83d]" />
          PROJECT LOLO <span className="mx-1 h-3 w-px bg-white/15" /> Privacy before the prompt
        </div>
        <h1 id="hero-heading" className="hero-title mx-auto max-w-5xl font-semibold text-white">
          <span className="block">Control What Your AI</span>
          <span className="sr-only">Reads and Sees.</span>
          <span className="hero-rolling-word" aria-hidden="true">
            <span className="invisible">Reads.</span>
            <span className="hero-rolling-track">
              <span className="hero-gradient">Reads.</span>
              <span className="hero-gradient">Sees.</span>
              <span className="hero-gradient">Reads.</span>
            </span>
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Sensitive data belongs under your control. Project Lolo uses{" "}
          <strong className="font-medium text-slate-200">natural language processing</strong> and{" "}
          <strong className="font-medium text-slate-200">computer vision</strong> to detect it
          in text and images before it reaches your AI.
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link to="/?section=contact" className="lolo-button-primary group">Book a Demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          <Link to="/?section=lolo-demo" className="lolo-button-secondary">See Lolo in Action <ArrowDown className="h-4 w-4" /></Link>
        </div>
        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400/80" /> Process locally. Keep your data in your environment.
        </div>
        <div className="hero-focus-strip mx-auto mt-16 grid max-w-3xl grid-cols-1 text-left sm:mt-20 sm:grid-cols-2">
          <Link to="/?section=detection" className="button-lift group flex items-center gap-4 px-6 py-5 focus-visible:outline-2 focus-visible:outline-brand-primary sm:border-r sm:border-white/10">
            <ScanText className="h-6 w-6 shrink-0 text-brand-secondary" />
            <div className="flex-1"><p className="text-sm font-medium text-slate-200">Textual intelligence</p><p className="mt-1 text-xs text-slate-500">Sensitive data detection with NLP</p></div>
            <ArrowRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-brand-secondary" />
          </Link>
          <Link to="/?section=detection" className="button-lift group flex items-center gap-4 border-t border-white/10 px-6 py-5 focus-visible:outline-2 focus-visible:outline-brand-primary sm:border-t-0">
            <Eye className="h-6 w-6 shrink-0 text-brand-secondary" />
            <div className="flex-1"><p className="text-sm font-medium text-slate-200">Visual intelligence</p><p className="mt-1 text-xs text-slate-500">Sensitive data detection with computer vision</p></div>
            <ArrowRight className="h-4 w-4 text-slate-600 transition-colors group-hover:text-brand-secondary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
