"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-0.5",
            pathname === link.href
              ? "text-foreground font-medium"
              : "text-muted-foreground hover:text-foreground font-normal"
          )}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}

      <a
        href="mailto:paladhiviraj@gmail.com"
        className={cn(
          "text-sm font-medium ml-2",
          "px-3 py-1.5 border border-foreground rounded-md",
          "text-foreground hover:bg-foreground hover:text-background",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        Get in touch
      </a>
    </nav>
  );
}
