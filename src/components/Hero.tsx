import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="lolo-hero relative isolate overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-outer" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-inner" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="lolo-eyebrow mb-6">The enterprise privacy layer for AI</p>
        <h1 id="hero-heading" className="hero-title mx-auto max-w-5xl font-semibold text-white">
          <span className="hero-title-line">Control What Your AI</span>{" "}
          <span className="sr-only">Reads, Sees, and Listens.</span>
          <span className="hero-word-window" aria-hidden="true">
            <span className="hero-word-stack">
              <span className="hero-gradient">Reads.</span>
              <span className="hero-gradient">Sees.</span>
              <span className="hero-gradient">Listens.</span>
              <span className="hero-gradient">Reads.</span>
            </span>
          </span>
        </h1>
      <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-brand-body sm:text-lg">
        <span className="block">Your data. Your rules.</span>
        <span className="block">Lolo is not another redaction tool. It is the privacy layer between your enterprise data and every AI workflow, detecting sensitive information and enforcing your policies before anything reaches a model.</span>
      </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link to="/?section=contact" className="lolo-button-primary group">Request a demo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          <Link to="/?section=about" className="lolo-button-secondary">See how it works</Link>
        </div>
      </div>
    </section>
  );
}
