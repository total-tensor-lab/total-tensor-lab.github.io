import { AudioLines, Database, Eye, FileText, ScanText, Video } from "lucide-react";

const privacyModalities = [
  { title: "Text", description: "Prompts, conversations, written content", Icon: ScanText },
  { title: "Images", description: "Photos, screenshots, visual identifiers", Icon: Eye },
  { title: "Documents", description: "PDFs, forms, scanned records", Icon: FileText },
  { title: "Video", description: "Video clips, recordings, frames", Icon: Video },
  { title: "Audio", description: "Speech, recordings, transcripts", Icon: AudioLines },
  { title: "Databases", description: "Structured enterprise data", Icon: Database },
];

export default function Detection() {
  return (
    <section id="detection" aria-labelledby="detection-heading" className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6">
        <div className="mb-12 max-w-4xl">
          <p className="lolo-section-label">
            Multiple modalities. One privacy layer.
          </p>
          <h2 id="detection-heading" className="lolo-section-heading text-white">
            Sensitive data hides in plain sight.
          </h2>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="Privacy modalities">
          {privacyModalities.map(({ title, description, Icon }) => (
            <article key={title} className="group relative min-h-[103px] overflow-hidden rounded-[13px] border border-[#55401d] bg-[#211b13] p-3 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-reduce:transition-none hover:border-brand-primary/40 hover:bg-white/[0.045]">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100"
                style={{ background: "radial-gradient(circle at 18% 22%, rgba(245,184,61,0.14), transparent 52%)" }}
              />
              <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-primary/12 to-transparent opacity-0 transition-opacity duration-500 motion-reduce:transition-none group-hover:opacity-100" />
              <div className="relative z-10">
                <Icon aria-hidden="true" className="h-4 w-4 text-brand-primary" />
                <h3 className="lolo-card-heading mt-2 text-white">{title}</h3>
                <p className="lolo-description mt-2 text-brand-body">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
