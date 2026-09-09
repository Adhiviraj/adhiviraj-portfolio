import type { Metadata } from "next";
import { Mail, GitBranch } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/layout/Container";
import { socialLinks } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Adhiviraj Pal — seeking internship opportunities in web development and full-stack engineering.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section aria-labelledby="contact-heading" className="section-rule py-16 sm:py-24">
          <Container>
            <div className="max-w-lg">
              <p className="meta-label mb-1">Contact</p>
              <h1 id="contact-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Get in touch
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                I am a third-year ECE student looking for internship opportunities in
                web development, full-stack engineering, and related software roles.
                If you have an opportunity that fits or would like to discuss a project,
                please reach out directly.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=paladhiviraj@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border rounded-md text-foreground hover:border-foreground transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="Email Adhiviraj via Gmail (opens in new tab)"
                >
                  <Mail size={16} strokeWidth={1.75} className="text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-muted-foreground meta-label mb-0.5">Email</p>
                    <p className="text-sm font-medium">paladhiviraj@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/Adhiviraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border rounded-md text-foreground hover:border-foreground transition-colors duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="View GitHub profile (opens in new tab)"
                >
                  <GitBranch size={16} strokeWidth={1.75} className="text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-muted-foreground meta-label mb-0.5">GitHub</p>
                    <p className="text-sm font-medium">github.com/Adhiviraj</p>
                  </div>
                </a>
              </div>

              <div className="section-rule pt-8">
                <p className="meta-label mb-4">Also on</p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.filter(l => l.label !== "Email" && l.label !== "GitHub").map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                      aria-label={`${link.label} (opens in new tab)`}
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