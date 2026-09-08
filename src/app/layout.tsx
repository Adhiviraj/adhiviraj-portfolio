import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Adhiviraj Pal — Full-Stack Developer",
    template: "%s — Adhiviraj Pal",
  },
  description:
    "Third-year ECE student building practical full-stack and AI/ML products. Seeking internship opportunities in software development.",
  metadataBase: new URL("https://adhiviraj.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adhiviraj.in",
    siteName: "Adhiviraj Pal",
    title: "Adhiviraj Pal — Full-Stack Developer",
    description:
      "Third-year ECE student building practical full-stack and AI/ML products. Seeking internship opportunities in software development.",
  },
  twitter: {
    card: "summary",
    site: "@Adhiviraj007",
    creator: "@Adhiviraj007",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
