import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { achievements, leadership } from "@/data/resume";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Track record"
      title="Achievements"
      intro="Every number below is from the resume — nothing rounded up."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_40px_-24px_hsl(var(--accent)/0.5)]">
              <p className="text-3xl font-semibold text-gradient">
                <Counter
                  value={a.value}
                  suffix={a.suffix}
                  decimals={Number.isInteger(a.value) ? 0 : 1}
                />
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">{a.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {leadership.headline} — {leadership.detail}
        </p>
      </Reveal>
    </Section>
  );
}
