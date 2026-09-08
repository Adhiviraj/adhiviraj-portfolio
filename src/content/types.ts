export type ProjectLink =
  | {
      status: "available";
      href: string;
    }
  | {
      status: "pending";
      note: string;
    };

export type ProjectStatus =
  | "Working prototype / actively improving"
  | "Prototype / actively improving"
  | "Academic/project prototype";

export interface Project {
  slug: string;
  priority: 1 | 2 | 3 | 4;
  title: string;
  valueProposition: string;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  status: ProjectStatus;
  technologies: string[];
  technicalHighlights: string[];
  context?: string;
  links: {
    github: ProjectLink;
    liveDemo: ProjectLink;
  };
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface CredibilitySignal {
  title: string;
  description: string;
}
