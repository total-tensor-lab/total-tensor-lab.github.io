import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  code: string;
  label: string;
};

export default function CodeBlock({ code, label }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number>();

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="lolo-code-block">
      <div className="lolo-code-header">
        <span className="truncate">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${label}`}
          className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-brand-body transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          {copied ? <Check aria-hidden="true" className="h-3.5 w-3.5 text-brand-success" /> : <Copy aria-hidden="true" className="h-3.5 w-3.5" />}
          <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      {/* Focusable so keyboard users can scroll long lines */}
      <pre className="lolo-code" tabIndex={0} aria-label={label}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
