import { Github, Linkedin, Twitter } from "lucide-react";

const LINKS = {
  Platform: [
    { label: "AI Runtime", href: "#services" },
    { label: "RAG Protection", href: "#services" },
    { label: "Vector Shield", href: "#services" },
    { label: "Compliance Audit", href: "#services" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "GitHub", href: "https://github.com/totaltensorlabs" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
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
    <footer className="relative border-t border-white/[0.05] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="#8B5CF6" strokeWidth="1.4" strokeLinejoin="round"/>
                  <circle cx="8" cy="8" r="2" fill="#8B5CF6" opacity="0.8"/>
                </svg>
              </div>
              <span className="font-semibold text-white text-sm">Total Tensor Labs</span>
            </a>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mb-6">
              Privacy infrastructure for enterprise AI. Govern, protect, and audit
              every AI interaction without moving your data.
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

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 opacity-50">{section}</h4>
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Total Tensor Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success inline-block opacity-80" />
            <span className="text-slate-700 text-xs">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
