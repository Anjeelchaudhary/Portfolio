// ============================================================================
//  Portfolio content — everything here is editable. Change text, add items,
//  reorder things, and the site updates automatically. No component edits needed.
// ============================================================================

export const profile = {
  nickname: "An Zeel",
  name: "Anjeel Chaudhary",
  title: "Software Engineer",
  tagline: "Creating tomorrow in the age of AI.",
  location: "Greater London, United Kingdom",
  // Path to your photo in /public (e.g. "/profile.jpg"). Empty = sketch placeholder.
  photo: "/Anjeel.JPG",
  photoCaption: "That's me  👋",
  email: "chaudharyanjeel@gmail.com",
  socials: {
    github: "https://github.com/Anjeelchaudhary",
    linkedin: "https://www.linkedin.com/in/anjeel-chaudhary-966398209/",
  },
  // A short, hand-written intro shown near the top of the home page.
  introHome: "Welcome to my portfolio. More details coming soon.",

  // The intro shown on the About page — separate from introHome so each can be tuned independently.
  introAbout: "Software engineer moving into AI. I like to understand how things work before I build them, and I focus on simple solutions that solve real business problems. I’m studying for a Master of Research in AI in Business and building my skills in Python and machine learning.",

  introCircle: "More to come!",

};

// ----------------------------------------------------------------------------
//  Hero section — the home page's opening scrapbook collage. Layout,
//  rotation, and color stay in components/home/Hero.tsx; only the copy lives
//  here so it can be edited without touching JSX.
// ----------------------------------------------------------------------------

export const hero = {
  kicker: "✂️ a page from my notebook —",

  // the four sketch sheets stitched around the photo (fig. order = reading order)
  sheets: {
    robot: {
      fig: "fig. 01",
      title: "Clean code",
      caption: "Simple code that works and is easy to fix.",
    },
    transformer: {
      fig: "fig. 02",
      title: "AI and machine learning",
      caption: "From data to working model, one experiment at a time.",
    },
    brain: {
      fig: "fig. 03",
      title: "Building in public",
      caption: "Ideas turned into real things you can click and test.",
    },
    ground: {
      fig: "fig. 04",
      title: "AI research in business",
      caption: "Studying how AI creates value in business.",
    },
  },

  // "currently building" sticky note — the punch list behind the sketches
  buildLog: {
    title: "From the bench to the future.",
    items: [
      { text: "Voice agents that understand, not just hear.", done: true },
      { text: "Robots that imagine, sketch, and create.", done: false },
      { text: "Farms that sense, adapt, and grow autonomously.", done: false},
      { text: "AI, built from the first neuron.", done: false}
    ],
  },

  // two stickers patched onto the board's corners
  stickers: {
    gpuBrrr: { text: "GPU GO BRRRRRRRR!", emoji: "✏️" },
    attention: { text: "ALL EYES HERE!", emoji: "📎" },
  },
};

// ----------------------------------------------------------------------------
//  Career path — the milestones, drawn out in order (earliest → now).
//  `kind` controls the color/icon: "education" | "work".
// ----------------------------------------------------------------------------

export type Milestone = {
  kind: "education" | "work";
  period: string;
  title: string;
  org: string;
  detail: string;
  highlights?: string[];
};

export const milestones: Milestone[] = [
  {
    kind: "education",
    period: "2017 — 2019",
    title: "Intermediate of Science",
    org: "Xavier Int. High School",
    detail: "Kathmandu, Nepal.",
  },
  {
    kind: "education",
    period: "2019 — 2024",
    title: "Bachelor of Engineering",
    org: "Nepal College of IT",
    detail: "Kathmandu, Nepal.",
  },
  {
    kind: "education",
    period: "2025 — Present",
    title: "Master by Research in AI in Business",
    org: "University of Hertfordshire",
    detail: "Hatfield, United Kingdom",
  },
  {
    kind: "work",
    period: "Coming soon",
    title: "Work Experience",
    org: "Coming soon",
    detail: "Work experience details coming soon.",
  },
];

// ----------------------------------------------------------------------------
//  Projects — rendered as sticky notes on the board.
//  `color` picks a sticky-note color: yellow | pink | blue | green | orange | purple
// ----------------------------------------------------------------------------

export type Project = {
  name: string;
  date: string;
  blurb: string;
  tags: string[];
  color: "yellow" | "pink" | "blue" | "green" | "orange" | "purple";
  // Add a project repository URL when one is ready.
  repo?: string;
  link?: string;
  // Featured projects show up on the home page.
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Projects coming soon",
    date: "Coming soon",
    blurb: "Project details coming soon.",
    tags: [],
    color: "yellow",
    featured: true,
  },
];

// ----------------------------------------------------------------------------
//  The Field — the someday project, drawn as an animated terrace landscape.
// ----------------------------------------------------------------------------

export const fieldNote = {
  kicker: "a note for later",
  title: "Coming soon",
  pull: "More project details coming soon.",
  someday: "Updates will be added here.",
};

// ----------------------------------------------------------------------------
//  Skills — grouped, rendered as marker-circled clusters.
// ----------------------------------------------------------------------------

export const skillGroups: { label: string; items: string[] }[] = [
   {
    label: "Programming",
    items: ["Python", "JavaScript / TypeScript", "C++", "DSA"],
  },
  {
    label: "AI & Machine Learning",
    items: [
      "LLMs",
      "Generative AI",
      "AI Agents",
      "RAG",
      "Fine-Tuning (LoRA, PEFT)",
      "Quantization",
      "Computer Vision",
      "Multimodal AI",
    ],
  },
  {
    label: "Frameworks & Tools",
    items: ["Hugging Face", "LangChain", "LlamaIndex", "LangGraph", "PyTorch", "TensorFlow", "vLLM"],
  },
  {
    label: "Web & Backend",
    items: ["React.js", "Next.js", "Node.js", "FastAPI", "REST APIs", "Realtime (Twilio, SIP)"],
  },
  {
    label: "Cloud & Deployment",
    items: ["AWS", "Azure", "Docker", "Vercel", "CI/CD (GitHub Actions, Jenkins)"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL / NeonDB", "MongoDB"],
  },
];

// ----------------------------------------------------------------------------
//  The open book on the home page.
// ----------------------------------------------------------------------------

export const bloodBlossom = {
  pageLabel: "an engineer's notebook",
  specimen: "Ideas today. Intelligent systems tomorrow.",
  paragraphs: [
  "Exploring artificial intelligence, engineering intelligent systems, and turning ambitious ideas into working prototypes.",
  "From AI agents and machine learning to robotics and autonomous systems — the experiments are only beginning.",
],
  credit: "Built through curiosity, code, research, and relentless experimentation.",
  rule: "Think deeply. Engineer intelligently. Build relentlessly. Ship what matters.",
  signoff: "— An Zeel",
};

// ----------------------------------------------------------------------------
//  Open source + writing
// ----------------------------------------------------------------------------

export const openSource = [
  "Coming soon.",
];

// `sticker` is a little die-cut label slapped on the card; `emoji` and `tint`
// (yellow | pink | blue | green | orange | purple) style it. All optional.
export const blogs: {
  title: string;
  link?: string;
  sticker?: string;
  emoji?: string;
  tint?: "yellow" | "pink" | "blue" | "green" | "orange" | "purple";
}[] = [
  {
    title: "Writing coming soon",
    sticker: "stay tuned",
    emoji: "✏️",
    tint: "blue",
  },
];
