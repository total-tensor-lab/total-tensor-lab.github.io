import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";
import { useLocation } from "react-router-dom";
import { PROMPTVEIL } from "@/lib/promptveil";

export default function Footer() {
  const { pathname } = useLocation();
  const isPromptVeil = pathname === "/products/promptveil";
  const subject = encodeURIComponent("Request a demo of Project Lolo");
  const body = encodeURIComponent("Hello, I would like to request a product walkthrough.");
  const mailto = `mailto:hello@totaltensorlab.com?subject=${subject}&body=${body}`;

  return (
    <footer className="relative border-t border-white/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] rounded-full bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute right-0 top-24 w-[420px] h-[420px] rounded-full bg-brand-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] px-6 py-14 md:px-10 md:py-16 mb-16 text-center backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,184,61,0.14),_transparent_32%),radial-gradient(circle_at_80%_30%,_rgba(248,213,139,0.08),_transparent_24%)] pointer-events-none" />
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

          {isPromptVeil ? (
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.02] tracking-tight mb-5 text-balance">
                Build PromptVeil{" "}
                <span className="gradient-text">in the open.</span>
              </h2>
              <p className="text-brand-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                PromptVeil is MIT licensed and free to use. Report an issue, propose a detector, or send a pull request.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <a href={PROMPTVEIL.repoUrl} target="_blank" rel="noopener noreferrer" className="lolo-button-primary">
                  <Github aria-hidden="true" className="w-4 h-4" /> View on GitHub
                </a>
                <a href={PROMPTVEIL.contributingUrl} target="_blank" rel="noopener noreferrer" className="lolo-button-secondary">
                  Contribute
                </a>
              </div>
            </div>
          ) : (
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.02] tracking-tight mb-5 text-balance">
                Ready to govern{" "}
                <span className="gradient-text">your enterprise AI?</span>
              </h2>
              <p className="text-brand-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Request a product walkthrough to see how Project Lolo protects sensitive data across your AI workflows.
              </p>

              <a
                href={mailto}
                className="lolo-button-primary group mb-4"
              >
                Request a demo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="max-w-xl mx-auto mb-4 text-xs leading-relaxed text-brand-label">
                This opens an email draft in your email app. No email app? Write to{" "}
                <a
                  href="mailto:hello@totaltensorlab.com"
                  className="text-brand-body underline underline-offset-2 hover:text-white transition-colors"
                >
                  hello@totaltensorlab.com
                </a>
                .
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </footer>
  );
}
