import { Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/data/resume";

export function OtherProjects() {
  return (
    <Section
      id="projects"
      eyebrow="More builds"
      title="Other projects"
      intro="Smaller systems where I got to try an idea end to end."
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <GlassCard className="p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {project.subtitle}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </div>

              <p className="mt-5 max-w-3xl text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-6 space-y-3">
                {project.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
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
