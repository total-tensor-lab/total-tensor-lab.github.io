interface PromptVeilMarkProps {
  className?: string;
  title?: string;
}

/**
 * PromptVeil mark (dark-background variant). Source: public/brand/promptveil-mark-dark.svg
 * Uses currentColor so it can be tinted with text-* classes like lucide icons.
 * Decorative by default; pass `title` to expose it to assistive tech.
 */
export default function PromptVeilMark({ className = "", title }: PromptVeilMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      <rect x="10" y="10" width="22" height="22" rx="6" fill="currentColor" fillOpacity="0.22" />
      <rect x="39" y="10" width="22" height="22" rx="6" fill="currentColor" fillOpacity="0.22" />
      <rect x="68" y="10" width="22" height="22" rx="6" fill="currentColor" fillOpacity="0.22" />
      <rect x="10" y="39" width="22" height="22" rx="6" fill="currentColor" fillOpacity="0.22" />
      <rect x="39" y="39" width="22" height="22" rx="6" fill="currentColor" fillOpacity="0.22" />
      <rect x="68" y="39" width="22" height="22" rx="6" fill="currentColor" fillOpacity="0.22" />
      <rect x="10" y="68" width="22" height="22" rx="6" fill="currentColor" />
      <rect x="40.25" y="69.25" width="19.5" height="19.5" rx="5" stroke="currentColor" strokeWidth="2.5" />
      <rect x="69.25" y="69.25" width="19.5" height="19.5" rx="5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
