import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/types";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { ProjectLinks } from "./ProjectLinks";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  /** Emphasize the lead project visually */
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group border-t border-border pt-6 pb-6",
        featured && "border-t-2 border-foreground"
      )}
      aria-label={`Project: ${project.title}`}
    >
      {/* Context label + status */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {featured && (
          <span className="meta-label text-foreground">Lead project</span>
        )}
        {"context" in project && project.context && !featured && (
          <span className="meta-label">{project.context}</span>
        )}
        <ProjectStatusBadge status={project.status} />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "font-semibold tracking-tight mb-2",
          featured ? "text-xl sm:text-2xl" : "text-lg"
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {project.title}
        </Link>
      </h3>

      {/* Value proposition */}
      <p className={cn("text-muted-foreground mb-4", featured ? "text-base" : "text-sm leading-relaxed")}>
        {project.valueProposition}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="meta-label px-2 py-0.5 bg-secondary border border-border rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions: view project + links */}
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            "inline-flex items-center gap-1.5 text-sm font-medium",
            "text-foreground hover:text-muted-foreground",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          )}
          aria-label={`View ${project.title} project details`}
        >
          View project
          <ArrowRight
            size={14}
            strokeWidth={1.75}
            aria-hidden="true"
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </Link>

        <ProjectLinks github={project.links.github} liveDemo={project.links.liveDemo} />
      </div>
    </article>
  );
}
