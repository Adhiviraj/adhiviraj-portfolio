import { GitBranch, ExternalLink } from "lucide-react";
import type { ProjectLink } from "@/content/types";
import { cn } from "@/lib/utils";

interface ProjectLinksProps {
  github: ProjectLink;
  liveDemo: ProjectLink;
}

function LinkItem({
  link,
  label,
  icon: Icon,
}: {
  link: ProjectLink;
  label: string;
  icon: React.ElementType;
}) {
  if (link.status === "available") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium",
          "text-foreground underline underline-offset-2",
          "hover:text-muted-foreground transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        )}
        aria-label={`${label} (opens in new tab)`}
      >
        <Icon size={13} strokeWidth={1.75} aria-hidden="true" />
        {label}
      </a>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
      aria-label={`${label} — not yet available`}
      title={link.note}
    >
      <Icon size={13} strokeWidth={1.75} aria-hidden="true" />
      <span className="meta-label">Link pending</span>
    </span>
  );
}

export function ProjectLinks({ github, liveDemo }: ProjectLinksProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <LinkItem link={github} label="GitHub" icon={GitBranch} />
      {liveDemo.status === "available" && (
        <LinkItem link={liveDemo} label="Live demo" icon={ExternalLink} />
      )}
    </div>
  );
}
