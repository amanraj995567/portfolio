import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { experience } from "@/data/resume";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped"
      intro="Measurable, business-facing impact — not just a list of responsibilities."
      alt
    >
      <div className="space-y-8">
        {experience.map((role) => (
          <Reveal key={role.company}>
            <GlassCard className="p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{role.role}</h3>
                    {role.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-500">
                        <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-emerald-500" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {role.company} · {role.location}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {role.start} — {role.end}
                </p>
              </div>

              <p className="mt-5 text-muted-foreground">{role.summary}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {role.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-border bg-background/40 p-4"
                  >
                    <p className="text-2xl font-semibold text-foreground">{m.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
                {role.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {role.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
