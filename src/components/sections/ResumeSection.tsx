import { FileDown, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/resume";

export function ResumeSection() {
  return (
    <Section id="resume" eyebrow="Resume" title="Take a closer look">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border p-5">
            <p className="text-sm text-muted-foreground">
              Aman_Raj_Resume.pdf
            </p>
            <div className="flex gap-3">
              <a href={personal.resumeFile} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md">
                  <ExternalLink className="h-4 w-4" />
                  Open in new tab
                </Button>
              </a>
              <a href={personal.resumeFile} download>
                <Button size="md">
                  <FileDown className="h-4 w-4" />
                  Download
                </Button>
              </a>
            </div>
          </div>
          {/* Native browser PDF viewer — no extra dependency needed. */}
          <object
            data={personal.resumeFile}
            type="application/pdf"
            className="hidden h-[70vh] w-full sm:block"
            aria-label="Aman Raj resume preview"
          >
            <p className="p-6 text-sm text-muted-foreground">
              Your browser can&apos;t preview PDFs inline.{" "}
              <a href={personal.resumeFile} className="text-accent underline">
                Open the resume directly
              </a>
              .
            </p>
          </object>
          <p className="p-6 text-sm text-muted-foreground sm:hidden">
            Inline preview isn&apos;t available on this screen size — use the
            buttons above to open or download the PDF.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
