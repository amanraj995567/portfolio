import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about, education } from "@/data/resume";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A backend engineer who thinks in systems"
    >
      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border p-6">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Education
            </h3>
            <ul className="space-y-6">
              {education.map((edu) => (
                <li key={edu.school} className="border-l-2 border-border pl-4">
                  <p className="text-sm font-medium text-foreground">{edu.school}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.credential}</p>
                  <p className="mt-1 text-xs text-muted-foreground/80">
                    {edu.start === edu.end ? edu.start : `${edu.start} — ${edu.end}`} ·{" "}
                    {edu.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
