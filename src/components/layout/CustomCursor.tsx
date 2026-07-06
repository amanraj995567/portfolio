"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle glow cursor for pointer (mouse/trackpad) devices only.
 * Falls back to the native cursor on touch devices — we never hide the
 * system cursor unless we've confirmed a fine pointer is present, so this
 * never breaks usability on mobile.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.4 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(hasFinePointer);
    if (!hasFinePointer) return;

    document.documentElement.classList.add("cursor-none-desktop");
    return () => document.documentElement.classList.remove("cursor-none-desktop");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [role='button'], input, textarea"));
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{ scale: isPointer ? 2.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-4 w-4 rounded-full bg-white"
      />
    </motion.div>
  );
}
