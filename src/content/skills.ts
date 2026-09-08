import type { SkillGroup } from "./types";

export const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Full Stack",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
    ],
  },
  {
    title: "AI / Data",
    skills: ["TensorFlow", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Tools / Systems",
    skills: ["Git", "GitHub", "MongoDB", "Arduino IDE", "ESP32", "MCP"],
  },
] as const satisfies readonly SkillGroup[];
