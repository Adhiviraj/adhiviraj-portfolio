import Link from "next/link";
import { Container } from "./Container";
import { socialLinks } from "@/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-rule mt-auto py-8">
      <Container as="div" className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left: name + copyright */}
        <div>
          <p className="text-sm font-medium text-foreground">Adhiviraj Pal</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            &copy; {year}. Third-year ECE student, Galgotias College.
          </p>
        </div>

        {/* Right: social links */}
        <nav aria-label="Social links" className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="meta-label text-muted-foreground hover:text-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              aria-label={`${link.label}${link.href.startsWith("mailto") ? "" : " (opens in new tab)"}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
