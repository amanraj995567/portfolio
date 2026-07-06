import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SkillCard } from "@/components/sections/SkillCard";
import { skills } from "@/data/resume";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolbox"
      intro="Hover a card — everything here ships in production today, not a list of buzzwords."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <SkillCard category={group.category} items={group.items} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
