import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/content";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/layout/Container";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { ProjectLinks } from "@/components/projects/ProjectLinks";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.valueProposition,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <article className="section-rule py-16 sm:py-20">
          <Container>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 meta-label text-muted-foreground hover:text-foreground transition-colors duration-150 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label="Back to all projects"
            >
              <ArrowLeft size={12} aria-hidden="true" />
              All projects
            </Link>

            <div className="max-w-2xl mb-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {"context" in project && project.context && (
                  <span className="meta-label">{project.context}</span>
                )}
                <ProjectStatusBadge status={project.status} />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {project.valueProposition}
              </p>

              <ProjectLinks github={project.links.github} liveDemo={project.links.liveDemo} />
            </div>

            <div className="section-rule mb-10" />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16">
              <div className="space-y-10">
                <section aria-labelledby="section-overview">
                  <h2 id="section-overview" className="text-sm font-semibold text-foreground mb-2 pb-2 border-b border-border">
                    Overview
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{project.summary}</p>
                </section>

                <section aria-labelledby="section-problem">
                  <h2 id="section-problem" className="text-sm font-semibold text-foreground mb-2 pb-2 border-b border-border">
                    Problem
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{project.problem}</p>
                </section>

                <section aria-labelledby="section-approach">
                  <h2 id="section-approach" className="text-sm font-semibold text-foreground mb-2 pb-2 border-b border-border">
                    Approach
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
                </section>

                {project.technicalHighlights.length > 0 && (
                  <section aria-labelledby="section-highlights">
                    <h2 id="section-highlights" className="text-sm font-semibold text-foreground mb-2 pb-2 border-b border-border">
                      Technical highlights
                    </h2>
                    <ul className="space-y-3" role="list">
                      {project.technicalHighlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="meta-label pt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                          <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <aside className="space-y-6" aria-label="Project facts">
                <div>
                  <p className="meta-label mb-2">Role</p>
                  <p className="text-sm text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="meta-label mb-2">Status</p>
                  <ProjectStatusBadge status={project.status} />
                </div>
                <div>
                  <p className="meta-label mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="meta-label px-2 py-0.5 bg-secondary border border-border rounded-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="meta-label mb-2">Links</p>
                  <ProjectLinks github={project.links.github} liveDemo={project.links.liveDemo} />
                </div>
              </aside>
            </div>
          </Container>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}