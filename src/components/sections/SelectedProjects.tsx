import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/content";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/layout/Container";

export function SelectedProjects() {
  // Priority 1–3 on homepage; priority 4 (Smart Library) shown separately
  const selectedProjects = projects
    .filter((p) => p.priority <= 3)
    .sort((a, b) => a.priority - b.priority);

  return (
    <section
      aria-labelledby="selected-projects-heading"
      className="section-rule py-16 sm:py-20"
    >
      <Container>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="meta-label mb-1">Work</p>
            <h2
              id="selected-projects-heading"
              className="text-xl sm:text-2xl font-semibold tracking-tight"
            >
              Selected projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            aria-label="View all projects"
          >
            All projects <ArrowRight size={12} className="inline" aria-hidden="true" />
          </Link>
        </div>

        {/* Lead project — priority 1 */}
        <ProjectCard
          project={selectedProjects[0]}
          featured
        />

        {/* Two supporting projects — priority 2 and 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          {selectedProjects.slice(1).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
