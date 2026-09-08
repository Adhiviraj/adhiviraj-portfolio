import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content";
import { Container } from "@/components/layout/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="section-rule py-16 sm:py-24"
    >
      <Container>
        {/* Student context label */}
        <p className="meta-label mb-5">{profile.currentPosition} &middot; {profile.college}</p>

        {/* Name + positioning */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-4 max-w-2xl"
        >
          {profile.name}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-3 max-w-xl">
          {profile.professionalDirection}
        </p>

        <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl">
          {profile.opportunity}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/85 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="View all projects"
          >
            View projects
            <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
          </Link>

          <a
            href="mailto:paladhiviraj@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border text-foreground rounded-md hover:border-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Email me
          </a>
        </div>
      </Container>
    </section>
  );
}
