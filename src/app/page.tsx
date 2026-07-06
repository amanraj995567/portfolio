import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Achievements } from "@/components/sections/Achievements";
import { CodingProfiles } from "@/components/sections/CodingProfiles";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";
import { personal } from "@/data/resume";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    email: personal.email,
    telephone: personal.phone,
    address: personal.location,
    url: personal.links.portfolio,
    sameAs: [personal.links.github, personal.links.linkedin],
  };

  return (
    <>
      {/* Structured data for search engines / recruiters' link previews */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProject />
      <Achievements />
      <CodingProfiles />
      <ResumeSection />
      <Contact />
    </>
  );
}
