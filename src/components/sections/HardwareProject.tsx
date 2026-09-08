import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { projects } from "@/content";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function HardwareProject() {
  const smartLibrary = projects.find((p) => p.slug === "smart-library-system");
  if (!smartLibrary) return null;

  return (
    <section
      aria-labelledby="hardware-project-heading"
      className="section-rule py-12 sm:py-16"
    >
      <Container>
        <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
          {/* Icon column */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-10 h-10 bg-secondary border border-border rounded-md">
              <Cpu size={18} strokeWidth={1.5} className="text-muted-foreground" aria-hidden="true" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="meta-label">ECE &amp; Embedded</span>
              <ProjectStatusBadge status={smartLibrary.status} />
            </div>

            <h2
              id="hardware-project-heading"
              className="text-lg font-semibold tracking-tight mb-2"
            >
              {smartLibrary.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-3 max-w-prose">
              {smartLibrary.valueProposition}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {smartLibrary.technologies.map((tech) => (
                <span
                  key={tech}
                  className="meta-label px-2 py-0.5 bg-secondary border border-border rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${smartLibrary.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label={`View ${smartLibrary.title} project details`}
            >
              View project
              <ArrowRight size={13} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}
