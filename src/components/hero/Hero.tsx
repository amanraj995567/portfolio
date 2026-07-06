"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { personal } from "@/data/resume";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";

// Three.js must never run during SSR — it reaches for `window`/WebGL.
const HeroScene = dynamic(
  () => import("@/components/hero/HeroScene").then((m) => m.HeroScene),
  { ssr: false },
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-dot-grid bg-grid-fade"
    >
      <div className="absolute inset-0 -z-0 opacity-90">
        <HeroScene />
      </div>

      {/* Readability scrim so the 3D scene never fights the text */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-content px-6"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to new opportunities · {personal.location}
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-lg font-medium text-muted-foreground sm:text-xl"
        >
          {personal.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="text-gradient">{role}</span>
              {i < personal.roles.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              )}
            </span>
          ))}
        </motion.p>

        <motion.p variants={item} className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
          {personal.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton>
            <Button size="lg" onClick={() => scrollToId("project")}>
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </MagneticButton>
          <MagneticButton>
            <a href={personal.resumeFile} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg">
                <FileDown className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </MagneticButton>
          <MagneticButton>
            <Button variant="ghost" size="lg" onClick={() => scrollToId("contact")}>
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
