import type { Project } from "./types";

const pendingRepository = {
  status: "pending",
  note: "TODO — repository link to be provided.",
} as const;

export const projects = [
  {
    slug: "voice-ai-government-scheme-assistant",
    priority: 1,
    title: "Voice AI Government Scheme Assistant",
    valueProposition:
      "A conversational prototype that helps people explore simulated government welfare schemes and eligibility.",
    summary:
      "A working prototype designed to make welfare schemes easier to discover and understand through voice calls, direct text interaction, and a web interface.",
    problem:
      "Understanding which welfare schemes may be relevant or eligible can be difficult when people must navigate complex information on their own.",
    solution:
      "The prototype collects user information through conversational interfaces, then uses simulated scheme data to surface potentially relevant schemes and explain eligibility.",
    role: "TODO — clarify individual role and contributions.",
    status: "Working prototype / actively improving",
    technologies: ["Python", "MCP", "APIs", "AI/voice agent"],
    technicalHighlights: [
      "Supports voice calls, direct text interaction, and a web interface as input paths.",
      "Uses MCP-based orchestration and eligibility processing where applicable to the current prototype.",
      "Uses dummy/simulated government-scheme data; it is not connected to official government databases or APIs.",
    ],
    links: {
      github: pendingRepository,
      liveDemo: {
        status: "pending",
        note: "TODO — live demo link to be provided.",
      },
    },
  },
  {
    slug: "ai-habit-tracker",
    priority: 2,
    title: "AI Habit Tracker",
    valueProposition:
      "A habit-tracking prototype that turns completion patterns into next-week task recommendations.",
    summary:
      "A working prototype for tracking daily tasks and habits, analyzing completion behavior, and generating recommendations for the following week.",
    problem:
      "Tracking habits is useful, but translating completion history into a practical next-week plan is harder.",
    solution:
      "The app follows a simple product flow: track daily tasks, analyze completion, generate recommendations, and plan the next week.",
    role: "TODO — clarify individual role and contributions.",
    status: "Working prototype / actively improving",
    technologies: ["Gemini API"],
    technicalHighlights: [
      "Generates recommendations from each user's task-completion pattern.",
      "Uses Gemini API access within the constraints of its free-tier token limits.",
      "Built to explore practical AI integration and data-driven product decisions, not production-scale AI infrastructure.",
    ],
    links: {
      github: pendingRepository,
      liveDemo: {
        status: "pending",
        note: "TODO — live demo link to be provided.",
      },
    },
  },
  {
    slug: "ml-laptop-recommendation-platform",
    priority: 3,
    title: "ML-Based Laptop Recommendation Platform",
    valueProposition:
      "A prototype that recommends laptops from practical needs and budget rather than hardware jargon.",
    summary:
      "A Microsoft Imagine Cup 2026 project that helps people choose laptops based on their budget, intended workload, and usage requirements.",
    problem:
      "People buying a laptop often need to make sense of technical specifications before they can identify a suitable option.",
    solution:
      "The platform accepts practical requirements and recommends suitable laptops, shifting the decision from raw specifications to the user's needs.",
    role: "Project Lead & Full-Stack Developer",
    status: "Prototype / actively improving",
    technologies: ["Django", "React.js", "Scikit-learn", "REST APIs"],
    technicalHighlights: [
      "Combines full-stack development with recommendation-system and machine-learning work.",
      "Part of Microsoft Imagine Cup 2026; no competition result is claimed.",
      "Designed around user requirements including budget, workload, and intended use.",
    ],
    context: "Microsoft Imagine Cup 2026 project.",
    links: {
      github: pendingRepository,
      liveDemo: {
        status: "pending",
        note: "TODO — live demo link to be provided.",
      },
    },
  },
  {
    slug: "smart-library-system",
    priority: 4,
    title: "Smart Library System",
    valueProposition:
      "An ESP32-based academic prototype for library access, book allotment, and tracking workflows.",
    summary:
      "A hardware and software project combining QR scanning, RFID, book allotment, entry/exit tracking, an OLED display, LEDs, and a buzzer.",
    problem:
      "Library workflows such as access tracking and book allotment can involve multiple physical checks and disconnected steps.",
    solution:
      "The prototype uses a dual-credential authentication workflow and multi-peripheral state-machine logic to coordinate library interactions.",
    role: "TODO — clarify individual role and contributions.",
    status: "Academic/project prototype",
    technologies: [
      "C++",
      "Arduino IDE",
      "ESP32",
      "RFID RC522",
      "GM65 QR scanner",
      "I2C OLED",
    ],
    technicalHighlights: [
      "Coordinates QR scanning, RFID, book allotment, and entry/exit tracking.",
      "Uses dual-credential authentication and multi-peripheral state-machine logic.",
      "Demonstrates an ECE foundation across hardware, software, and automation.",
    ],
    links: {
      github: pendingRepository,
      liveDemo: {
        status: "pending",
        note: "Not applicable unless a demo is provided later.",
      },
    },
  },
] as const satisfies readonly Project[];
