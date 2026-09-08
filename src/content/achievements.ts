import type { CredibilitySignal } from "./types";

export const credibilitySignals = [
  {
    title: "Microsoft Imagine Cup 2026",
    description:
      "Project Lead & Full-Stack Developer for the ML-Based Laptop Recommendation Platform.",
  },
  {
    title: "Smart India Hackathon",
    description: "Participated in Smart India Hackathon.",
  },
  {
    title: "Problem-solving practice",
    description: "Solved 200+ DSA problems across LeetCode and GeeksforGeeks.",
  },
  {
    title: "Hackathon participation",
    description: "Participated in software and hardware hackathons.",
  },
] as const satisfies readonly CredibilitySignal[];
