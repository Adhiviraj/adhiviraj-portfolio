"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Prevent body AND html scroll when open; also prevents horizontal overflow
  useEffect(() => {
    if (open) {
      // Lock scroll on both html and body to prevent any horizontal drift
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      // Move focus into menu
      firstLinkRef.current?.focus();
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <>
      {/* Toggle button */}
      <button
        ref={menuButtonRef}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden flex items-center justify-center p-3 -mr-2 rounded-md text-foreground hover:bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
      </button>

      {/* Full-screen overlay — only mounted when open to prevent overflow */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40"
          aria-hidden="true"
        >
          {/* Backdrop — covers full viewport, visually hides page */}
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={() => {
              setOpen(false);
              menuButtonRef.current?.focus();
            }}
          />

          {/* Drawer panel — full width on mobile */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={cn(
              "absolute top-0 right-0 h-full w-full max-w-xs bg-background border-l border-border",
              "flex flex-col pt-16 px-6 pb-8"
            )}
          >
            {/* Close button inside drawer */}
            <button
              aria-label="Close navigation menu"
              onClick={() => {
                setOpen(false);
                menuButtonRef.current?.focus();
              }}
              className="absolute top-4 right-4 flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X size={20} strokeWidth={1.75} />
            </button>

            <nav aria-label="Mobile navigation">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      className={cn(
                        "block py-3 text-base font-medium border-b border-border",
                        "transition-colors duration-150",
                        pathname === link.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* "Get in touch" CTA — navigates to /contact */}
            <div className="mt-auto">
              <Link
                href="/contact"
                className="block w-full text-center py-3 px-4 text-sm font-medium border border-foreground rounded-md text-foreground hover:bg-foreground hover:text-background transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
