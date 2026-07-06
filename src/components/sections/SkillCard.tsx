"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * A single skill-category card with a subtle 3D tilt that follows the
 * pointer, plus a soft glow that tracks the cursor position. Kept gentle
 * (a few degrees of rotation) so it reads as premium rather than gimmicky.
 */
export function SkillCard({
  category,
  items,
}: {
  category: string;
  items: readonly string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), {
    stiffness: 200,
    damping: 20,
  });
  // Combine both values into a single derived MotionValue — interpolating
  // two separate MotionValues into one template string only takes a live
  // snapshot once and never updates, so the glow needs to be computed here.
  const glowBackground = useTransform([mouseX, mouseY], ([x, y]: number[]) => {
    const px = (x ?? 0.5) * 100;
    const py = (y ?? 0.5) * 100;
    return `radial-gradient(220px circle at ${px}% ${py}%, hsl(var(--accent) / 0.16), transparent 70%)`;
  });

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function onPointerLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      <h3 className="relative mb-4 text-sm font-semibold text-foreground">
        {category}
      </h3>
      <div className="relative flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_16px_-4px_hsl(var(--accent)/0.6)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
