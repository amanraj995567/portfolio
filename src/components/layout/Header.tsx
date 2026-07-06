"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", hash: "#about" },
  { label: "Experience", hash: "#experience" },
  { label: "Skills", hash: "#skills" },
  { label: "Project", hash: "#project" },
  { label: "Achievements", hash: "#achievements" },
  { label: "Contact", hash: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
          aman<span className="text-accent">.</span>raj
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CommandPalette />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
