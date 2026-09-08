import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/layout/Container";

export default function ProjectNotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 flex flex-col justify-center">
        <section className="py-24 sm:py-32">
          <Container>
            <div className="max-w-xl">
              <p className="meta-label mb-4 text-destructive">404 Error</p>
              <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Project not found
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                The project case study you are looking for does not exist or has been removed.
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/85 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowLeft size={14} strokeWidth={1.75} aria-hidden="true" />
                Back to all projects
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
