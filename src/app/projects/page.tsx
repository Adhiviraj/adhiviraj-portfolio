import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, AI/ML, and embedded systems projects by Adhiviraj Pal — third-year ECE student and practical builder.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <section aria-labelledby="projects-page-heading" className="section-rule py-16 sm:py-24">
          <Container>
            <p className="meta-label mb-1">Work</p>
            <h1
              id="projects-page-heading"
              className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            >
              Projects
            </h1>
            <p className="text-muted-foreground text-base mb-10 max-w-xl leading-relaxed">
              A catalogue of practical prototypes across full-stack development, AI/ML integration,
              and embedded systems. Each project is represented honestly with its current status.
            </p>

            <div className="space-y-0">
              {sorted.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  featured={i === 0}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
