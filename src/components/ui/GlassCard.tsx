import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-2xl transition-all duration-300 hover:border-accent/40",
        className,
      )}
      {...props}
    />
  );
}
