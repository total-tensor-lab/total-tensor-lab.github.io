import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

const TRUST_CARDS = [
  {
    title: "Finance",
    detail: "Protect transaction intelligence, trading workflows, and customer financial data with runtime governance.",
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    glow: "radial-gradient(circle at 18% 18%, rgba(139,92,246,0.12), transparent 52%)",
  },
  {
    title: "Healthcare",
    detail: "Keep patient records, clinical knowledge, and care workflows inside governed healthcare infrastructure.",
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    glow: "radial-gradient(circle at 82% 18%, rgba(6,182,212,0.12), transparent 52%)",
  },
  {
    title: "Government",
    detail: "Support sovereign deployments for public sector environments with strict locality and audit requirements.",
    accent: "border-brand-success/20 hover:border-brand-success/40",
    glow: "radial-gradient(circle at 20% 80%, rgba(16,185,129,0.1), transparent 55%)",
  },
  {
    title: "Telecom",
    detail: "Govern subscriber data, network operations context, and AI-powered service workflows at runtime.",
    accent: "border-brand-primary/20 hover:border-brand-primary/40",
    glow: "radial-gradient(circle at 78% 78%, rgba(139,92,246,0.1), transparent 55%)",
  },
  {
    title: "Insurance",
    detail: "Control access to claims, underwriting models, and internal data flows with full traceability.",
    accent: "border-brand-secondary/20 hover:border-brand-secondary/40",
    glow: "radial-gradient(circle at 78% 20%, rgba(6,182,212,0.12), transparent 52%)",
  },
];

const BADGES = [
  "Self-Hosted",
  "Data Sovereignty",
  "Runtime Governance",
  "Audit Logging",
  "Compliance Ready",
];

const LINKS = {
  Platform: [
    { label: "Runtime Protection", href: "#process" },
    { label: "Architecture", href: "#about" },
    { label: "Deployment Models", href: "#why-us" },
    { label: "Integrations", href: "#contact" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "GitHub", href: "https://github.com/totaltensorlabs" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Contact", href: "mailto:hello@totaltensorlabs.ai" },
    { label: "Privacy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Github, href: "https://github.com/totaltensorlabs", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] pt-20 pb-10 overflow-hidden">
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] rounded-full bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute right-0 top-24 w-[420px] h-[420px] rounded-full bg-brand-secondary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-4xl"
        >
          <span className="inline-block text-brand-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Trust & Compliance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Built for <span className="gradient-text">Regulated Industries</span>
          </h2>
          <p className="text-brand-muted text-base md:text-lg max-w-3xl leading-relaxed mb-8">
            Designed for environments where privacy, governance, and auditability
            are non-negotiable.
          </p>

          <div className="flex flex-wrap gap-3">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-brand-muted text-xs font-medium backdrop-blur-sm"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-brand-success" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-[24px] border border-brand-primary/20 bg-white/[0.04] px-6 py-6 shadow-[0_20px_70px_rgba(2,6,23,0.32)] backdrop-blur-sm"
        >
          <p className="text-white text-lg md:text-xl font-semibold tracking-tight">
            “Enterprise AI adoption requires governance at runtime — not after deployment.”
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {TRUST_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-[22px] border bg-white/[0.03] p-6 backdrop-blur-sm shadow-[0_18px_60px_rgba(2,6,23,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.045] ${card.accent}`}
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{ background: card.glow }}
              />
              <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                    Trusted Sector
                  </span>
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand-primary/80 shadow-[0_0_16px_rgba(139,92,246,0.45)]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{card.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="#8B5CF6" strokeWidth="1.4" strokeLinejoin="round" />
                  <circle cx="8" cy="8" r="2" fill="#8B5CF6" opacity="0.8" />
                </svg>
              </div>
              <span className="font-semibold text-white text-sm">Total Tensor Labs</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-6">
              Privacy infrastructure for enterprise AI systems operating in highly
              regulated environments.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-600 hover:text-brand-primary hover:border-brand-primary/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(LINKS).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 opacity-50">
                  {section}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-slate-600 hover:text-slate-300 text-sm transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Total Tensor Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success inline-block opacity-80" />
            <span className="text-slate-700 text-xs">Governance runtime online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
