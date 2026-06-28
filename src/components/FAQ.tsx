import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What exactly does PromptShield do?",
    a: "PromptShield is a runtime governance layer that sits between your data sources and AI systems. It automatically detects, classifies, and sanitizes sensitive data — PII, PHI, credentials, proprietary content — before it reaches an LLM, RAG pipeline, or AI agent. It also enforces policies, logs every interaction for audit, and ensures sensitive data never leaves your environment.",
  },
  {
    q: "Does PromptShield require sending our data to the cloud?",
    a: "No. PromptShield is designed exclusively for on-premises and private cloud deployments. It runs entirely within your infrastructure — on bare metal, private cloud, Kubernetes, or air-gapped environments. Your prompts, context, and governance telemetry never leave your control boundary.",
  },
  {
    q: "Which AI systems and pipelines does it integrate with?",
    a: "PromptShield integrates with any AI system via a lightweight SDK or API proxy — including LLM applications (OpenAI-compatible APIs, custom models), RAG pipelines (LangChain, LlamaIndex, custom), AI agents, analytics platforms, and fine-tuning workflows. Integration requires no architectural changes to your existing stack.",
  },
  {
    q: "What data sources can PromptShield monitor?",
    a: "PromptShield can inspect data flowing from databases, PDFs and documents, REST/GraphQL APIs, vector databases (Pinecone, Weaviate, pgvector, etc.), log streams, and message queues. It intercepts data in motion — at the point it enters your AI pipeline — regardless of source.",
  },
  {
    q: "Which compliance frameworks does PromptShield support?",
    a: "PromptShield is built for regulated industries. Its detection and policy engine covers GDPR, HIPAA, SOC 2, PCI-DSS, and CCPA requirements out of the box. Audit logging provides tamper-evident records suitable for compliance reporting. Custom classification rules can be added for internal data governance policies.",
  },
  {
    q: "How is sensitive data handled — is it blocked or redacted?",
    a: "That depends on your configured policy. PromptShield supports multiple enforcement modes: block (reject the request), redact (replace sensitive tokens with anonymized placeholders), tokenize (reversible pseudonymization), or alert-only (pass through but log and alert). Policies are configurable per data category, per pipeline, and per user role.",
  },
  {
    q: "What performance overhead does PromptShield introduce?",
    a: "PromptShield is engineered for low-latency production workloads. In standard deployments, the governance layer adds under 10ms of overhead per request. It scales horizontally on Kubernetes to match throughput requirements without becoming a bottleneck in high-volume inference pipelines.",
  },
  {
    q: "How long does a typical deployment take?",
    a: "Most organizations are fully operational within 2–4 weeks. This includes infrastructure provisioning, integration with existing AI pipelines, classification rule tuning for your data environment, and policy configuration aligned with your compliance requirements. We provide hands-on support throughout onboarding.",
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
            Everything you need to know about deploying PromptShield in your enterprise AI environment.
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
