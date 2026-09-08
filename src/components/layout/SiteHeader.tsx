import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "@/components/navigation/MobileNav";
import { DesktopNav } from "@/components/navigation/DesktopNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
      <Container
        as="div"
        className="flex items-center justify-between h-14"
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          aria-label="Adhiviraj Pal — home"
        >
          Adhiviraj Pal
        </Link>

        {/* Desktop navigation */}
        <DesktopNav />

        {/* Mobile menu button + drawer */}
        <MobileNav />
      </Container>
    </header>
  );
}
