"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { personal } from "@/data/resume";

/**
 * There's no backend wired up here (this is a static portfolio, not a
 * full-stack app), so "sending" the form opens the visitor's email client
 * with a pre-filled message via a mailto: link. If you later add an API
 * route or a service like Resend/Formspree, swap the onSubmit body only —
 * the form markup/animation doesn't need to change.
 */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something that scales" alt>
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-2/20 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <p className="max-w-sm text-muted-foreground">
                Open to backend and distributed-systems roles. If you&apos;ve got a
                system worth engineering well, my inbox is open.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" /> {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" /> {personal.phone}
                </a>
              </div>

              <div className="mt-8 flex gap-3">
                <MagneticButton>
                  <a
                    href={personal.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={personal.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </MagneticButton>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  placeholder="Let's talk about..."
                />
              </div>
              <Button type="submit" className="w-full">
                Send message
                <Send className="h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
