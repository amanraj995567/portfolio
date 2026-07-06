"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief, tasteful loading screen shown on first mount. Purely cosmetic —
 * it never blocks real content from being in the DOM (good for SEO/CLS),
 * it just overlays while the hero's 3D scene has a moment to initialize.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-background"
        >
          <motion.span
            initial={{ letterSpacing: "0.5em", opacity: 0 }}
            animate={{ letterSpacing: "0.15em", opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm uppercase text-muted-foreground"
          >
            Aman Raj
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
