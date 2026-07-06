/**
 * Single source of truth for all portfolio content.
 *
 * Every field here is taken directly from Aman Raj's resume
 * (Aman_Raj_Resume.pdf). Nothing in this file is invented — if a resume
 * detail changes, update it here and every section of the site picks it up.
 *
 * NOTE: The resume PDF's "LeetCode" / "Codeforces" links did not expose
 * their target URLs in the extracted text, so those two `href` values below
 * are left as "#" placeholders. Fill in your actual profile URLs before
 * shipping. LinkedIn / GitHub / Portfolio URLs were confirmed from the live
 * site (amanraj995567.github.io).
 */

export const personal = {
  name: "Aman Raj",
  title: "Software Engineer",
  roles: ["Backend Engineer", "Distributed Systems", "AI Systems Builder"],
  tagline:
    "Building scalable distributed systems, AI-powered applications, and production-grade software.",
  location: "Gurugram, India",
  phone: "+91 9955673334",
  email: "amanraj363738@gmail.com",
  resumeFile: "/Aman_Raj_Resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/aman9955profile",
    github: "https://github.com/amanraj995567",
    portfolio: "https://amanraj995567.github.io",
    leetcode: "#",
    codeforces: "#",
  },
} as const;

export const about = {
  paragraphs: [
    "I studied Electrical and Electronics Engineering at NIT Delhi, but most of my actual education happened in parallel — grinding data structures, operating systems, and system design on the side while competitive programming taught me to think in edge cases before they became production incidents.",
    "That habit followed me into industry. At Skeps, I own the REST APIs behind an end-to-end loan origination workflow — eligibility, offers, intake, status tracking — and I've learned that the interesting engineering problems are rarely the feature itself; they're the query that's fine at 10 rows and falls over at 10 million, the monitoring gap that turns a five-minute fix into a two-hour fire drill, the onboarding flow that quietly needs an engineer every single time.",
    "I built an internal Sentry monitoring service that cut triage effort by 90%, rebuilt slow SQL paths and added Redis caching to bring latency down 30%, and shipped a self-service merchant onboarding platform that took a multi-hour manual process down to minutes — no engineer required.",
    "Outside of work, I architected Prompt2Prod, a distributed AI coding platform with six Spring Cloud microservices, a Qdrant-backed RAG pipeline, and Kubernetes-isolated code execution — a chance to apply distributed-systems thinking to the AI infrastructure problems I find most interesting right now.",
    "I like systems that stay correct under load, code that's boring in the way that reliable things are boring, and the kind of problems where the fix is a schema migration and an index, not a rewrite.",
  ],
} as const;

export type ExperienceBullet = string;

export const experience = [
  {
    company: "Skeps",
    role: "Software Engineer",
    location: "Gurugram, India",
    start: "June 2025",
    end: "Present",
    current: true,
    summary:
      "Own REST APIs across the loan origination workflow — eligibility, offers, intake, and status tracking.",
    bullets: [
      "Designed and maintained REST APIs powering the end-to-end loan origination workflow (eligibility evaluation, offer generation, application intake, status tracking) using Node.js, Express.js, and MySQL.",
      "Engineered an internal Sentry monitoring service that scans production alerts across microservices and generates daily service-wise reports, replacing manual monitoring and reducing triage effort by 90%.",
      "Reduced API response latency by 30% by optimizing complex SQL queries, adding targeted database indexes, and implementing Redis caching, improving throughput for high-volume loan-processing APIs.",
      "Developed a self-service merchant onboarding platform that automated merchant, store, and environment provisioning, cutting onboarding time from hours to minutes and eliminating manual engineering intervention.",
      "Integrated multiple third-party fraud detection and identity verification (KYC) providers into the loan approval pipeline, enabling faster verification and stronger fraud screening.",
      "Implemented authentication and authorization using JWT, RBAC, and password hashing across lender, merchant, and admin portals, working across multiple microservices in an event-driven architecture.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Redis",
      "Sentry",
      "JWT",
      "RBAC",
      "Microservices",
    ],
    metrics: [
      { label: "Triage effort", value: "-90%" },
      { label: "API latency", value: "-30%" },
      { label: "Onboarding time", value: "hrs → mins" },
    ],
  },
] as const;

export const education = [
  {
    school: "National Institute of Technology, Delhi",
    credential: "B.Tech, Electrical and Electronics Engineering",
    detail: "CGPA: 7.08",
    start: "2021",
    end: "2025",
  },
  {
    school: "Bihar Public School",
    credential: "12th, Senior Secondary",
    detail: "Percentage: 91%",
    start: "2020",
    end: "2020",
  },
] as const;

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "Python", "C++"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    category: "Cloud & Infra",
    items: [
      "Docker",
      "Kubernetes (GKE)",
      "Kafka",
      "Redis",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "Git",
      "Linux",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant (Vector DB)"],
  },
  {
    category: "Practices",
    items: ["System Design (HLD & LLD)", "Unit Testing", "Code Reviews"],
  },
  {
    category: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
] as const;

export const featuredProject = {
  name: "Prompt2Prod",
  subtitle: "Distributed AI Code Assistant Platform",
  link: "https://github.com/amanraj995567",
  description:
    "A distributed AI coding platform spanning six Java / Spring Cloud microservices, built to ingest a codebase, reason over it with an LLM, and run the generated code safely in an isolated sandbox — end to end.",
  bullets: [
    "Architected a distributed AI coding platform spanning 6 Java/Spring Cloud microservices (API Gateway, Config, Discovery, Account, Workspace, and Intelligence), with the gateway routing all traffic and every service loading configuration from a Git-backed Config Service.",
    "Engineered a RAG pipeline that chunks, embeds, and indexes entire codebases into Qdrant for semantic retrieval, streaming LLM responses to the React UI token-by-token over SSE for real-time feedback.",
    "Implemented LLM tool-calling that feeds the model the project file tree and fetches only required files from MinIO via a tool call wrapped in a circuit breaker, minimizing storage reads.",
    "Decoupled AI generation from storage using Kafka: the Intelligence service publishes a file-generated event that the Workspace service consumes to persist files in MinIO and metadata in PostgreSQL, backed by a Redis cache layer.",
    "Designed an isolated code execution system on Kubernetes with per-project runner pods running live Vite dev servers and a sidecar syncing files from MinIO for automatic hot-reload of previews.",
  ],
  stack: [
    "Java",
    "Spring Boot",
    "Spring Cloud",
    "Kafka",
    "Redis",
    "Qdrant",
    "MinIO",
    "PostgreSQL",
    "Kubernetes",
    "React",
    "SSE",
  ],
  // Architecture nodes for the interactive diagram. `connects` lists node ids
  // this node has a direct arrow to, purely for the animated-connections view.
  architecture: [
    {
      id: "gateway",
      name: "API Gateway",
      role: "Entry point",
      description:
        "Spring Cloud Gateway routes and secures all incoming traffic before it reaches any downstream service.",
      connects: ["config", "account", "workspace", "intelligence"],
      position: { x: 50, y: 8 },
    },
    {
      id: "config",
      name: "Config Service",
      role: "Central configuration",
      description:
        "Git-backed Spring Cloud Config server. Every microservice loads its configuration from here at boot.",
      connects: ["discovery"],
      position: { x: 15, y: 30 },
    },
    {
      id: "discovery",
      name: "Discovery Service",
      role: "Service registry",
      description:
        "Service discovery so the gateway and services can find and load-balance across each other dynamically.",
      connects: [],
      position: { x: 15, y: 55 },
    },
    {
      id: "account",
      name: "Account Service",
      role: "Identity",
      description: "Owns account and identity concerns for the platform.",
      connects: [],
      position: { x: 85, y: 30 },
    },
    {
      id: "workspace",
      name: "Workspace Service",
      role: "Files & metadata",
      description:
        "Consumes file-generated events from Kafka, persists files in MinIO and metadata in PostgreSQL, backed by a Redis cache layer.",
      connects: ["minio", "postgres", "redis", "kafka"],
      position: { x: 50, y: 55 },
    },
    {
      id: "intelligence",
      name: "Intelligence Service",
      role: "RAG + LLM",
      description:
        "Runs the RAG pipeline over Qdrant, performs LLM tool-calling against MinIO via a circuit breaker, streams responses over SSE, and publishes file-generated events to Kafka.",
      connects: ["qdrant", "minio", "kafka", "k8s"],
      position: { x: 85, y: 55 },
    },
    {
      id: "qdrant",
      name: "Qdrant",
      role: "Vector DB",
      description:
        "Stores embeddings of the chunked codebase for semantic retrieval during RAG.",
      connects: [],
      position: { x: 85, y: 80 },
    },
    {
      id: "kafka",
      name: "Kafka",
      role: "Event backbone",
      description:
        "Decouples AI generation from storage — the Intelligence service publishes file-generated events that Workspace consumes.",
      connects: [],
      position: { x: 50, y: 80 },
    },
    {
      id: "minio",
      name: "MinIO",
      role: "Object storage",
      description:
        "Stores project files. The Intelligence service fetches only the files it needs; the Workspace service persists generated files here.",
      connects: [],
      position: { x: 30, y: 92 },
    },
    {
      id: "postgres",
      name: "PostgreSQL",
      role: "Metadata store",
      description: "Stores file and project metadata for the Workspace service.",
      connects: [],
      position: { x: 65, y: 92 },
    },
    {
      id: "redis",
      name: "Redis",
      role: "Cache layer",
      description: "Caches hot metadata reads in front of PostgreSQL.",
      connects: [],
      position: { x: 15, y: 80 },
    },
    {
      id: "k8s",
      name: "Kubernetes",
      role: "Sandboxed execution",
      description:
        "Runs isolated per-project runner pods with a live Vite dev server and a sidecar that syncs files from MinIO for automatic hot-reload of previews.",
      connects: [],
      position: { x: 85, y: 100 },
    },
  ],
} as const;

export const achievements = [
  {
    value: 1857,
    suffix: "",
    label: "LeetCode Knight rating",
    detail: "Top 5.9% globally",
  },
  {
    value: 1000,
    suffix: "+",
    label: "DSA problems solved",
    detail: "Across LeetCode, Codeforces & CodeChef",
  },
  {
    value: 588,
    suffix: "",
    label: "Global rank, Weekly Contest 437",
    detail: "Among 30,000+ participants",
  },
  {
    value: 42,
    suffix: "",
    label: "All India Rank, Naukri.com Aptitude Test",
    detail: "Out of 3,00,000 students",
  },
  {
    value: 2,
    suffix: "%",
    label: "Top percentile, JEE Main",
    detail: "2021, among 1M+ candidates",
    topPercent: true,
  },
  {
    value: 1.5,
    suffix: "%",
    label: "Top percentile, JEE Advanced",
    detail: "2021, among 1M+ candidates",
    topPercent: true,
  },
] as const;

export const leadership = {
  headline: "Team captain, NIT Delhi",
  detail: "All India Inter-NIT Cricket Tournament",
};

export const codingProfiles = [
  {
    name: "GitHub",
    handle: "amanraj995567",
    href: personal.links.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    handle: "aman9955profile",
    href: personal.links.linkedin,
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    handle: "Knight · 1857 rating",
    href: personal.links.leetcode,
    icon: "leetcode",
  },
  {
    name: "Codeforces",
    handle: "Competitive programmer",
    href: personal.links.codeforces,
    icon: "codeforces",
  },
] as const;
