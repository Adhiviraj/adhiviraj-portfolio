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
import { StaggerContainer, StaggerItem } from "@/components/motion/FadeIn";

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
            <StaggerContainer>
            <StaggerItem>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 meta-label text-muted-foreground hover:text-foreground transition-colors duration-150 mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label="Back to all projects"
            >
              <ArrowLeft size={12} aria-hidden="true" />
              All projects
            </Link>

            <div className="max-w-3xl mb-12">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {"context" in project && project.context && (
                  <span className="meta-label">{project.context}</span>
                )}
                {project.priority > 3 && (
                  <span className="meta-label text-foreground bg-foreground/5 px-2 py-0.5 rounded-sm">Technical Note</span>
                )}
                <ProjectStatusBadge status={project.status} />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                {project.valueProposition}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-secondary/50 border border-border rounded-lg mb-10">
                <div>
                  <p className="meta-label mb-2">Role</p>
                  <p className="text-sm text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="meta-label mb-2">Status</p>
                  <ProjectStatusBadge status={project.status} />
                </div>
                <div className="sm:col-span-2">
                  <p className="meta-label mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="meta-label px-2 py-0.5 bg-background border border-border rounded-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </StaggerItem>

            <div className="max-w-3xl space-y-12">
              <StaggerItem>
              <section aria-labelledby="section-overview">
                <h2 id="section-overview" className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  Overview
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">{project.summary}</p>
              </section>
              </StaggerItem>

              <StaggerItem>
              <section aria-labelledby="section-problem">
                <h2 id="section-problem" className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  Problem / Motivation
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">{project.problem}</p>
              </section>
              </StaggerItem>

              {"context" in project && project.context && (
                <StaggerItem>
                <section aria-labelledby="section-context">
                  <h2 id="section-context" className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    Context
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{project.context}</p>
                </section>
                </StaggerItem>
              )}

              <StaggerItem>
              <section aria-labelledby="section-approach">
                <h2 id="section-approach" className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                  Approach
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">{project.solution}</p>
              </section>
              </StaggerItem>

              {project.technicalHighlights.length > 0 && (
                <StaggerItem>
                <section aria-labelledby="section-architecture">
                  <h2 id="section-architecture" className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                    Architecture & Technical Flow
                  </h2>
                  <ul className="space-y-4" role="list">
                    {project.technicalHighlights.map((highlight, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="meta-label pt-0.5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                        <p className="text-base text-muted-foreground leading-relaxed">{highlight}</p>
                      </li>
                    ))}
                  </ul>
                </section>
                </StaggerItem>
              )}

              <StaggerItem>
              <section aria-labelledby="section-links" className="pt-8">
                <h2 id="section-links" className="text-lg font-semibold text-foreground mb-6 pb-2 border-b border-border">
                  Links
                </h2>
                <ProjectLinks github={project.links.github} liveDemo={project.links.liveDemo} />
              </section>
              </StaggerItem>
            </div>
            </StaggerContainer>
          </Container>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}