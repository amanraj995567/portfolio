import { Github, Linkedin, Code2, Swords, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { codingProfiles } from "@/data/resume";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  codeforces: Swords,
};

export function CodingProfiles() {
  return (
    <Section
      id="profiles"
      eyebrow="Elsewhere"
      title="Coding profiles"
      alt
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {codingProfiles.map((profile, i) => {
          const Icon = icons[profile.icon] ?? Github;
          const isPlaceholder = profile.href === "#";
          return (
            <Reveal key={profile.name} delay={i * 0.05}>
              <a
                href={profile.href}
                target={isPlaceholder ? undefined : "_blank"}
                rel={isPlaceholder ? undefined : "noopener noreferrer"}
                aria-disabled={isPlaceholder}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">{profile.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{profile.handle}</p>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
