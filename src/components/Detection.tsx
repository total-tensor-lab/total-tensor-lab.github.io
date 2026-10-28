import { AudioLines, Database, Eye, FileText, ScanText, Video } from "lucide-react";

const plannedCapabilities = [
  { title: "Documents", description: "PDFs, OCR, scanned records", Icon: FileText },
  { title: "Video", description: "Frames, tracking, redaction", Icon: Video },
  { title: "Audio", description: "Speech, recordings, transcripts", Icon: AudioLines },
  { title: "Databases", description: "Structured enterprise data", Icon: Database },
];

export default function Detection() {
  return (
    <section id="detection" aria-labelledby="detection-heading" className="relative py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6">
        <div className="mb-3">
          <p className="lolo-section-label">
            Multiple modalities. One privacy layer.
          </p>
          <h2 id="detection-heading" className="mt-2 text-[32px] font-semibold leading-tight text-white">
            Sensitive data hides in plain sight.
          </h2>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label="Privacy modalities">
          <article className="min-h-[103px] rounded-[13px] border border-[#55401d] bg-[#211b13] p-3">
            <ScanText aria-hidden="true" className="h-4 w-4 text-brand-primary" />
            <h3 className="mt-2 text-base font-semibold leading-5 text-white">Text</h3>
            <p className="mt-2 text-sm leading-5 text-brand-body">Prompts, conversations, written content</p>
          </article>
          <article className="min-h-[103px] rounded-[13px] border border-[#55401d] bg-[#211b13] p-3">
            <Eye aria-hidden="true" className="h-4 w-4 text-brand-primary" />
            <h3 className="mt-2 text-base font-semibold leading-5 text-white">Vision</h3>
            <p className="mt-2 text-sm leading-5 text-brand-body">Images, screenshots, visual identifiers</p>
          </article>
          {plannedCapabilities.map(({ title, description, Icon }) => (
            <article key={title} className="min-h-[101px] rounded-[13px] border border-[#55401d] bg-[#211b13] p-3">
              <div className="flex items-center gap-2">
                <Icon aria-hidden="true" className="h-4 w-4 text-brand-primary" />
                <h4 className="text-sm font-medium leading-5 text-white">{title}</h4>
              </div>
              <p className="mt-2 text-sm leading-5 text-brand-label">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
