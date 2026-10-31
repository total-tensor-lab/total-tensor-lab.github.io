import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  FileCheck2,
  Gauge,
  Github,
  KeyRound,
  Package,
  Puzzle,
  ScanText,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import CodeBlock from "@/components/promptveil/CodeBlock";
import PipelineFlow from "@/components/promptveil/PipelineFlow";
import { PROMPTVEIL } from "@/lib/promptveil";

const FACTS = [`v${PROMPTVEIL.version}`, "Alpha", "MIT license", "Python 3.10+"];

const CAPABILITIES = [
  { icon: ScanText, title: "PII and secret detection", desc: "Email, phone, credit card and API keys, plus Aadhaar, PAN, GSTIN, IFSC, SSN, EIN and passport formats." },
  { icon: SlidersHorizontal, title: "YAML policy engine", desc: "Set mask, block or allow per entity type, with optional confidence thresholds." },
  { icon: KeyRound, title: "Reversible vault", desc: "Swap PII for tokens before the LLM call, then restore the originals in the reply." },
  { icon: Gauge, title: "Risk scoring", desc: "Get a risk score, a risk level and per-entity detail for every scan." },
  { icon: ClipboardList, title: "Audit logging", desc: "Write structured JSON lines that never contain raw sensitive values." },
  { icon: Puzzle, title: "Custom detectors", desc: "Subclass BaseDetector to add your own patterns, spaCy pipelines or ML models." },
];

const PROFILES = [
  { name: "india_dpdpa", block: "Aadhaar, PAN, passport", mask: "Phone, GSTIN, IFSC" },
  { name: "eu_gdpr", block: "Credit card, API key", mask: "Email, phone" },
  { name: "us_hipaa", block: "SSN", mask: "Email, phone, passport, EIN" },
];

const POLICY_YAML = `version: "1.0"
default_action: allow
# Optional: india_dpdpa | eu_gdpr | us_hipaa
# profile: eu_gdpr

rules:
  - type: email
    action: mask
  - type: phone
    action: mask
  - type: credit_card
    action: block
  - type: api_key
    action: block`;

const INTEGRATIONS = [
  {
    name: "Python",
    install: "pip install promptveil",
    code: `from promptveil import Shield

shield = Shield(config_path="policy.yaml")

safe = shield.scan("Contact alice@example.com for the invoice.")
# "Contact a***@example.com for the invoice."`,
  },
  {
    name: "OpenAI",
    install: 'pip install "promptveil[openai]"',
    code: `import openai
from promptveil.adapters import wrap_openai

client = openai.OpenAI()
wrap_openai(client, shield=shield)  # patches the client in place

client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": prompt}],
)`,
  },
  {
    name: "LangChain",
    install: 'pip install "promptveil[langchain]"',
    code: `from promptveil.adapters import get_langchain_callback

CallbackClass = get_langchain_callback()
callback = CallbackClass(shield)

llm.invoke(prompt, config={"callbacks": [callback]})`,
  },
  {
    name: "FastAPI",
    install: 'pip install "promptveil[fastapi]"',
    code: `from fastapi import FastAPI
from promptveil.middleware import PromptVeilMiddleware

app = FastAPI()
app.add_middleware(PromptVeilMiddleware, shield=shield, prompt_field="prompt")
# Blocked prompts receive a 400 response`,
  },
];

const RESOURCES = [
  { label: "GitHub repository", href: PROMPTVEIL.repoUrl },
  { label: "PyPI package", href: PROMPTVEIL.pypiUrl },
  { label: "Releases", href: PROMPTVEIL.releasesUrl },
  { label: "Changelog", href: PROMPTVEIL.changelogUrl },
  { label: "Issues", href: PROMPTVEIL.issuesUrl },
  { label: "Contributing guide", href: PROMPTVEIL.contributingUrl },
  { label: "Security policy", href: PROMPTVEIL.securityUrl },
  { label: "MIT license", href: PROMPTVEIL.licenseUrl },
  { label: "Code of conduct", href: PROMPTVEIL.codeOfConductUrl },
];

export default function PromptVeilPage() {
  const [activeName, setActiveName] = useState(INTEGRATIONS[0].name);
  const active = INTEGRATIONS.find(({ name }) => name === activeName) ?? INTEGRATIONS[0];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "PromptVeil | Total Tensor Labs";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <section aria-labelledby="promptveil-heading" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(245,184,61,0.18),transparent)] pointer-events-none" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="min-w-0">
            <span className="inline-flex items-center rounded-full border border-brand-success/25 bg-brand-success/10 px-3 py-1 text-xs font-semibold text-brand-success">
              Free and open source
            </span>
            <h1 id="promptveil-heading" className="mt-8 text-5xl font-bold leading-[1.04] tracking-[-0.04em] md:text-6xl">
              <span className="gradient-text">PromptVeil</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-body">
              Privacy and safety middleware for LLM applications. PromptVeil finds PII and secrets in prompts, applies your policy, and logs the result before anything reaches an LLM API.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={PROMPTVEIL.repoUrl} target="_blank" rel="noopener noreferrer" className="lolo-button-primary">
                <Github aria-hidden="true" className="h-4 w-4" /> View on GitHub
              </a>
              <a href={PROMPTVEIL.pypiUrl} target="_blank" rel="noopener noreferrer" className="lolo-button-secondary">
                <Package aria-hidden="true" className="h-4 w-4" /> View on PyPI
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Package details">
              {FACTS.map((fact) => (
                <li key={fact} className="content-tag">{fact}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <CodeBlock label="Install" code="pip install promptveil" />
            <p className="mt-3 text-sm text-brand-label">The core package only requires PyYAML.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="pipeline-heading" className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="lolo-section-label">How it works</span>
            <h2 id="pipeline-heading" className="lolo-section-heading text-white">
              A checkpoint between your app and the model.
            </h2>
            <p className="lolo-section-description mt-4 text-brand-body">
              PromptVeil checks each prompt inside your own process. Your policy decides what crosses the line to the LLM.
            </p>
          </div>

          <PipelineFlow />

          <p className="mt-4 text-center text-xs leading-relaxed text-brand-label">
            Sample prompts run through PromptVeil {PROMPTVEIL.version} with the policy below. Audit lines are shortened, and the restored reply uses a sample LLM response.
          </p>
        </div>
      </section>

      <section aria-labelledby="capabilities-heading" className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="lolo-section-label">Capabilities</span>
            <h2 id="capabilities-heading" className="lolo-section-heading text-white">
              Everything runs in your Python process.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-[13px] border border-[#55401d] bg-[#211b13] p-5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-brand-primary/10">
                  <Icon aria-hidden="true" className="h-[18px] w-[18px] text-brand-primary" />
                </span>
                <h3 className="lolo-card-heading mt-3 text-white">{title}</h3>
                <p className="lolo-description mt-2 text-brand-body">{desc}</p>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-brand-label">
            PromptVeil works on text. Built-in detectors use regular expressions and checksum validation, and custom detectors extend them.
          </p>
        </div>
      </section>

      <section aria-labelledby="profiles-heading" className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="lolo-section-label">Compliance profiles</span>
            <h2 id="profiles-heading" className="lolo-section-heading text-white">
              Start from a rule pack.
            </h2>
            <p className="lolo-section-description mt-4 text-brand-body">
              Set one line in your policy to load the rules and detectors for DPDPA, GDPR or HIPAA.
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {PROFILES.map(({ name, block, mask }) => (
              <article key={name} className="rounded-[13px] border border-[#55401d] bg-[#211b13] p-5">
                <h3 className="font-mono text-base font-medium tracking-normal text-brand-primary">{name}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-white">Block</dt>
                    <dd className="mt-0.5 text-brand-body">{block}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Mask</dt>
                    <dd className="mt-0.5 text-brand-body">{mask}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-brand-label">
            Profiles are starting points. Using one does not make an application compliant, so review the rules against your own obligations.
          </p>
        </div>
      </section>

      <section aria-labelledby="integrations-heading" className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="lolo-section-label">Quick start</span>
            <h2 id="integrations-heading" className="lolo-section-heading text-white">
              Add it to the stack you already use.
            </h2>
          </div>

          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <CodeBlock label="policy.yaml" code={POLICY_YAML} />

            <div className="min-w-0">
              <div role="group" aria-label="Choose an integration" className="mb-3 flex flex-wrap gap-2">
                {INTEGRATIONS.map(({ name }) => (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={name === active.name}
                    onClick={() => setActiveName(name)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary ${
                      name === active.name ? "bg-brand-primary/10 text-brand-primary" : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <div className="grid gap-3">
                <CodeBlock label={`Install for ${active.name}`} code={active.install} />
                <CodeBlock label={`${active.name} example`} code={active.code} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="resources-heading" className="relative py-16 sm:py-24">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <span className="lolo-section-label">Open source</span>
            <h2 id="resources-heading" className="lolo-section-heading text-white">
              Read the code. Shape the project.
            </h2>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-[13px] border border-white/10 bg-white/[0.02] px-4 py-3 text-sm font-medium text-brand-body transition-colors hover:border-brand-primary/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                >
                  {label}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-brand-primary" />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-brand-label">
            Need images and documents too?{" "}
            <Link to="/" className="group/link inline-flex items-center gap-1 font-medium text-brand-primary transition-colors hover:text-brand-secondary">
              See Project Lolo <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
