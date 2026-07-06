"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Moon,
  Sun,
  ArrowRight,
  Search,
} from "lucide-react";
import { personal } from "@/data/resume";

type NavItem = { label: string; hash: string };

const navItems: NavItem[] = [
  { label: "Home", hash: "#home" },
  { label: "About", hash: "#about" },
  { label: "Experience", hash: "#experience" },
  { label: "Skills", hash: "#skills" },
  { label: "Featured Project — Prompt2Prod", hash: "#project" },
  { label: "Achievements", hash: "#achievements" },
  { label: "Resume", hash: "#resume" },
  { label: "Contact", hash: "#contact" },
];

/**
 * Cmd+K / Ctrl+K command palette for fast navigation and quick actions.
 * Built on cmdk, styled to match the glass/premium aesthetic of the rest
 * of the site rather than pulling in the full shadcn Dialog primitive.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(hash: string) {
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }

  function openExternal(href: string) {
    setOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground sm:flex"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        Search
        <kbd className="ml-2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command palette"
        className="fixed inset-0 z-[100]"
      >
        <div
          className="fixed inset-0 bg-background/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div className="glass fixed left-1/2 top-24 w-[90vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Command.Input
              autoFocus
              placeholder="Jump to a section or run a command…"
              className="w-full bg-transparent py-3.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Navigate"
              className="px-2 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-2"
            >
              {navItems.map((item) => (
                <Command.Item
                  key={item.hash}
                  onSelect={() => go(item.hash)}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent/10 aria-selected:text-foreground"
                >
                  {item.label}
                  <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Actions"
              className="px-2 py-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground [&_[cmdk-group-heading]]:px-1 [&_[cmdk-group-heading]]:pb-2"
            >
              <Command.Item
                onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent/10 aria-selected:text-foreground"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5" />
                )}
                Toggle theme
              </Command.Item>
              <Command.Item
                onSelect={() => openExternal(personal.resumeFile)}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent/10 aria-selected:text-foreground"
              >
                <FileDown className="h-3.5 w-3.5" />
                Download resume
              </Command.Item>
              <Command.Item
                onSelect={() => openExternal(personal.links.github)}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent/10 aria-selected:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                Open GitHub
              </Command.Item>
              <Command.Item
                onSelect={() => openExternal(personal.links.linkedin)}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent/10 aria-selected:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" />
                Open LinkedIn
              </Command.Item>
              <Command.Item
                onSelect={() => openExternal(`mailto:${personal.email}`)}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/90 aria-selected:bg-accent/10 aria-selected:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" />
                Email {personal.email}
              </Command.Item>
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}
