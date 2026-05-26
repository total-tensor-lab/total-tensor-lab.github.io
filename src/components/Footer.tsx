import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

const LINKS = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
  ],
  Research: [
    { label: "Publications", href: "#" },
    { label: "Open Source", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Datasets", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Github, href: "https://github.com/totaltensorlabs", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 5h12M9 5v8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="5" cy="13" r="1.5" fill="white" opacity="0.8" />
                  <circle cx="13" cy="13" r="1.5" fill="white" opacity="0.8" />
                </svg>
              </div>
              <span className="font-bold text-white text-base">Total Tensor Labs</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
              AI research and engineering organization advancing the frontiers
              of machine learning — from foundational research to production
              systems.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-brand-primary hover:border-brand-primary/20 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.href === "#" && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Total Tensor Labs. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs font-mono">
            Built with ❤️ and tensors
          </p>
        </div>
      </div>
    </footer>
  );
}
