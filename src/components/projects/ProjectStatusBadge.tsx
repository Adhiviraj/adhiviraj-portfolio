import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/content/types";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function ProjectStatusBadge({ status, className }: ProjectStatusBadgeProps) {
  return (
    <span
      className={cn(
        "meta-label inline-block px-2 py-0.5 border border-border rounded-sm",
        "bg-secondary text-muted-foreground",
        className
      )}
    >
      {status}
    </span>
  );
}
