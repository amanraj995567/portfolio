import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          Designed &amp; developed by{" "}
          <span className="font-medium text-foreground">Aman Raj</span> · &copy;{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
