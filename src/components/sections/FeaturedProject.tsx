import { Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { featuredProject } from "@/data/resume";

export function FeaturedProject() {
  return (
    <Section
      id="project"
      eyebrow="Featured build"
      title={featuredProject.name}
      intro={featuredProject.subtitle}
      alt
    >
      <Reveal>
        <div className="mb-10 flex flex-wrap items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="max-w-2xl text-muted-foreground">
            {featuredProject.description}
          </p>
          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <ArchitectureDiagram />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Engineering highlights
            </h4>
            <ul className="space-y-3">
              {featuredProject.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {featuredProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
