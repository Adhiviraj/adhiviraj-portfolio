import { Mail, GitBranch } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="section-rule py-16 sm:py-20"
    >
      <Container>
        <div className="max-w-xl">
          <p className="meta-label mb-2">Contact</p>
          <h2
            id="contact-cta-heading"
            className="text-xl sm:text-2xl font-semibold tracking-tight mb-3"
          >
            Open to internship and collaboration
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            I am looking for internship opportunities in web development, full-stack engineering,
            and related software roles. If you are working on something interesting or have an
            opportunity that fits, I would like to hear from you.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:paladhiviraj@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/85 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Send an email to Adhiviraj Pal"
            >
              <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
              paladhiviraj@gmail.com
            </a>

            <a
              href="https://github.com/Adhivirajleetcode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border text-foreground rounded-md hover:border-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <GitBranch size={14} strokeWidth={1.75} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
