import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/layout/Container";
import { profile, education, currentJourney, socialLinks } from "@/content";

export const metadata: Metadata = {
  title: "About",
  description: "About Adhiviraj Pal — third-year ECE student, full-stack developer, and practical builder of AI/ML prototypes.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section aria-labelledby="about-heading" className="section-rule py-16 sm:py-24">
          <Container>
            <div className="max-w-2xl">
              <p className="meta-label mb-1">About</p>
              <h1 id="about-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                {profile.name}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">{profile.currentPosition} &mdash; {profile.college}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{profile.professionalDirection}</p>

              {/* Story */}
              <div className="space-y-4 mb-10 pb-10 border-b border-border">
                {profile.story.map((paragraph, i) => (
                  <p key={i} className="text-base text-muted-foreground leading-relaxed">{paragraph}</p>
                ))}
              </div>

              {/* Education */}
              <div className="mb-10 pb-10 border-b border-border">
                <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Education</h2>
                <p className="text-sm font-medium text-foreground mb-0.5">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.location}</p>
                <p className="text-sm text-muted-foreground">{education.degree}</p>
                <p className="meta-label mt-1">{education.period} &mdash; Expected {education.expectedGraduation}</p>
                <div className="mt-3">
                  <p className="text-xs font-medium text-foreground mb-2">Relevant coursework</p>
                  <div className="flex flex-wrap gap-1.5">
                    {education.relevantCoursework.map((course) => (
                      <span key={course} className="meta-label px-2 py-0.5 bg-secondary border border-border rounded-sm">{course}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="mb-10 pb-10 border-b border-border">
                <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Interests</h2>
                <ul className="space-y-1" role="list">
                  {profile.interests.map((interest) => (
                    <li key={interest} className="text-sm text-muted-foreground">{interest}</li>
                  ))}
                </ul>
              </div>

              {/* Current journey */}
              <div className="mb-10 pb-10 border-b border-border">
                <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Current journey</h2>
                <div className="space-y-4">
                  {currentJourney.map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div>
                <h2 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">Connect</h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm underline underline-offset-2"
                      aria-label={`${link.label}${link.href.startsWith("mailto") ? "" : " (opens in new tab)"}`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}