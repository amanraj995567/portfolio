"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to About section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </motion.div>
    </motion.a>
  );
}
