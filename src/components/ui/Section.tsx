import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className,
  alt = false,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-24 sm:py-32", alt && "bg-muted/40", className)}
    >
      <div className="mx-auto max-w-content px-6">
        {(eyebrow || title) && (
          <Reveal className="mb-14 max-w-2xl">
            {eyebrow && (
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-base text-muted-foreground">{intro}</p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
