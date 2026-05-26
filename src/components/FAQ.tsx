import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What types of AI projects does Total Tensor Labs undertake?",
    a: "We work across the full spectrum of applied AI — from custom deep learning models and computer vision systems to NLP pipelines, recommendation engines, and end-to-end MLOps infrastructure. Whether you need a proof-of-concept or a production-grade system serving millions of users, we can help.",
  },
  {
    q: "How do you ensure model quality and reliability?",
    a: "We follow rigorous ML engineering practices: systematic experimentation, cross-validation, held-out test sets, and bias/fairness auditing. Every model goes through staged rollouts with monitoring for performance drift, data quality degradation, and operational anomalies.",
  },
  {
    q: "Do you offer AI research collaboration?",
    a: "Absolutely. We actively collaborate with universities, research institutions, and enterprise R&D labs. We can contribute to joint publications, provide compute resources, or embed our researchers into your team for focused research sprints.",
  },
  {
    q: "What industries have you worked with?",
    a: "Our work spans healthcare (medical imaging, diagnostics), finance (fraud detection, forecasting), retail (demand planning, personalization), manufacturing (defect detection, predictive maintenance), and technology (search, recommendations, LLM applications).",
  },
  {
    q: "How do you handle data privacy and security?",
    a: "Data security is fundamental to everything we do. We operate under strict NDAs, support on-premise or private-cloud deployments, apply differential privacy and federated learning where appropriate, and comply with GDPR, HIPAA, and other relevant regulations.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "A proof-of-concept typically runs 4–8 weeks. A full production system typically takes 3–6 months depending on data readiness, scope, and integration complexity. We provide detailed project plans after the discovery phase.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with Total Tensor Labs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-[#0c0c1a] border border-white/[0.06] rounded-2xl overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-semibold text-sm md:text-base group hover:text-cyan-400 transition-colors data-[state=open]:text-cyan-400">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-slate-500 group-data-[state=open]:text-cyan-400 transition-all duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 ml-4" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="accordion-content overflow-hidden">
                  <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
