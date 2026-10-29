import { motion, useReducedMotion } from "motion/react";
import {
  ClipboardList,
  ScanText,
  Server,
  ShieldOff,
  SlidersHorizontal,
} from "lucide-react";

const CAPABILITIES = [
  {
    id: "detection",
    icon: ScanText,
    title: "Detect sensitive information",
    description: "Identify relevant entities in text and visual inputs.",
  },
  {
    id: "policy",
    icon: SlidersHorizontal,
    title: "Apply privacy policies",
    description: "Control what happens when sensitive information is found.",
  },
  {
    id: "redaction",
    icon: ShieldOff,
    title: "Enforce before AI processing",
    description: "Redact, mask or block sensitive content before it reaches a model.",
  },
  {
    id: "local",
    icon: Server,
    title: "Run in your environment",
    description: "Process data within infrastructure you control.",
  },
  {
    id: "audit",
    icon: ClipboardList,
    title: "Review activity",
    description: "Provide visibility into detection and policy decisions.",
  },
];

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute left-1/4 top-20 w-[420px] h-[420px] bg-brand-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute right-0 bottom-10 w-[420px] h-[420px] bg-brand-secondary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-4xl text-center"
        >
          <span className="lolo-section-label">
            Capabilities
          </span>
          <h2 className="lolo-section-heading text-white">
            Detection first. Control throughout.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {CAPABILITIES.map((capability, i) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={[
                  "group relative overflow-hidden rounded-[24px] border bg-white/[0.03] p-6 backdrop-blur-sm",
                  "shadow-[0_20px_70px_rgba(10,8,5,0.34)] transition-all duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none hover:bg-white/[0.045]",
                  "border-brand-primary/20 hover:border-brand-primary/40",
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 18% 22%, rgba(245,184,61,0.14), transparent 52%)" }}
                />
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-primary/12 to-transparent opacity-0 transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-6">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-brand-primary/10"
                  >
                    <Icon className="h-4.5 w-4.5 text-brand-primary" />
                  </div>

                  <div>
                    <h3 className="lolo-card-heading mb-2.5 max-w-sm text-white">
                      {capability.title}
                    </h3>
                    <p className="lolo-description max-w-md text-brand-body">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
