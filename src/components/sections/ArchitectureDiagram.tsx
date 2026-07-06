"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { featuredProject } from "@/data/resume";

type ArchNode = (typeof featuredProject.architecture)[number];

/**
 * Interactive system-design diagram for Prompt2Prod. Nodes are laid out
 * with percentage coordinates (see src/data/resume.ts) so the whole thing
 * is pure CSS/SVG — no canvas needed for something this simple, which
 * keeps it fast and perfectly crisp at any zoom level.
 */
export function ArchitectureDiagram() {
  const nodes = featuredProject.architecture;
  const nodeMap = useMemo(
    () => new Map(nodes.map((n): [string, ArchNode] => [n.id, n])),
    [nodes],
  );
  const [activeId, setActiveId] = useState<string>("gateway");

  const edges = useMemo(() => {
    const list: { id: string; from: ArchNode; to: ArchNode }[] = [];
    nodes.forEach((n) => {
      n.connects.forEach((targetId) => {
        const target = nodeMap.get(targetId);
        if (target) list.push({ id: `${n.id}-${targetId}`, from: n, to: target });
      });
    });
    return list;
  }, [nodes, nodeMap]);

  const active = nodeMap.get(activeId);

  function edgeTouchesActive(edge: (typeof edges)[number]) {
    return edge.from.id === activeId || edge.to.id === activeId;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <div className="relative aspect-[10/11] w-full rounded-3xl border border-border bg-surface/40 p-2">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 108"
          preserveAspectRatio="none"
          aria-hidden
        >
          {edges.map((edge, i) => (
            <motion.line
              key={edge.id}
              x1={edge.from.position.x}
              y1={edge.from.position.y}
              x2={edge.to.position.x}
              y2={edge.to.position.y}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: "easeInOut" }}
              stroke={
                edgeTouchesActive(edge) ? "hsl(var(--accent))" : "hsl(var(--border))"
              }
              strokeWidth={edgeTouchesActive(edge) ? 0.55 : 0.3}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {nodes.map((node) => (
          <button
            key={node.id}
            type="button"
            onMouseEnter={() => setActiveId(node.id)}
            onFocus={() => setActiveId(node.id)}
            style={{ left: `${node.position.x}%`, top: `${(node.position.y / 108) * 100}%` }}
            className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          >
            <span
              className={`relative flex items-center justify-center rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all duration-300 sm:text-xs ${
                activeId === node.id
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_-4px_hsl(var(--accent)/0.7)]"
                  : "border-border bg-background/80 text-foreground/80 hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {node.name}
            </span>
          </button>
        ))}
      </div>

      <div className="lg:sticky lg:top-28">
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {active.role}
              </span>
              <h4 className="mt-2 text-xl font-semibold">{active.name}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="mt-4 text-xs text-muted-foreground">
          Hover or focus a node to see what it&apos;s responsible for — this is the
          same architecture I&apos;d walk through in a system design interview.
        </p>
      </div>
    </div>
  );
}
