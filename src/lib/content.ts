export const email = "raghavjindal0212@gmail.com";
export const github = "https://github.com/HiberNuts";

export type Project = {
  slug: string; name: string; eyebrow: string; title: string; summary: string;
  role: string; period: string; status: string; color: string; tags: string[];
  metric: string; metricLabel: string; url?: string; image?: string;
  problem: string; ownership: string[]; considerations: { title: string; text: string }[];
  steps: string[]; result: string; caption?: string;
};

export const projects: Project[] = [
  {
    slug: "voicegrid", name: "VoiceGrid", eyebrow: "AI · VOICE OPERATIONS", title: "A conversation is just the beginning.",
    summary: "Built from scratch and scaled a healthcare voice-agent platform, owning the frontend, backend, deployment, and ongoing operations.",
    role: "End-to-end product engineering", period: "Ongoing", status: "Healthcare pilots", color: "violet",
    tags: ["Voice AI", "Tool integrations", "Evaluation", "Observability"], metric: "1,000+", metricLabel: "calls / day during pilots",
    url: "https://voicegrid.app/", image: "/projects/voicegrid.png", caption: "VoiceGrid’s public product website. Marketing figures shown in the screenshot are separate from the portfolio’s reported operational volume.",
    problem: "Healthcare calls are part of a larger operational workflow. A useful voice agent needs to move the conversation forward, work with business tools, and give a person enough context to take over when needed.",
    ownership: ["Built the complete product from scratch, across architecture, frontend, and backend.", "Built conversation orchestration for inbound and outbound voice agents, business-tool integrations, and human handoffs.", "Owned deployment, scaling, and ongoing production management.", "Built evaluation, failure handling, and observability into the platform, and continued improving it in production."],
    considerations: [
      { title: "Treat the call as a workflow", text: "The engineering scope extends beyond generating speech: the conversation, tool integrations, and handoff need to work together." },
      { title: "Keep people in the loop", text: "Human handoffs are part of the product. The interface should make the conversation and next action understandable to an operator." },
      { title: "Make behaviour inspectable", text: "Evaluation and observability belong alongside orchestration, so a team can examine behaviour and improve the workflow over time." },
    ],
    steps: ["Call", "Conversation", "Business tools", "Handoff / outcome", "Review"],
    result: "VoiceGrid handles more than 1,000 calls per day during healthcare pilots. I own the product from its initial build through deployment, scaling, and ongoing operations.",
  },
  {
    slug: "fundlio", name: "Fundlio", eyebrow: "FINTECH · PAYMENT SYSTEMS", title: "Every payment has a life after checkout.",
    summary: "Built from scratch and scaled a pharmacy payments platform, owning the frontend, backend, deployment, and ongoing operations.",
    role: "End-to-end product engineering", period: "Ongoing", status: "In production", color: "mint",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Payments"], metric: "$100K+", metricLabel: "monthly transaction volume",
    url: "https://fundlioo.com/", image: "/projects/fundlio.png", caption: "Fundlio’s public product website.",
    problem: "A pharmacy payments platform needs to serve several different people: merchants, administrators, sales representatives, and partners. Each needs an appropriate view of transactions, and the work continues through refunds, settlement, and reconciliation.",
    ownership: ["Built the complete product from scratch, across architecture, frontend, and backend.", "Built payment-provider integrations spanning payments, refunds, settlements, and merchant payouts.", "Delivered role-based dashboards, email-OTP login, and store-level transaction access controls.", "Implemented reconciliation, fraud controls, audit trails, and operational reporting.", "Owned deployment, scaling, and ongoing production management."],
    considerations: [
      { title: "Follow the full transaction lifecycle", text: "The scope covers the original payment and the operational work that follows: refunds, reconciliation, settlements, and payouts." },
      { title: "Make access match the job", text: "Admins, merchants, sales representatives, and partners have different responsibilities. Role-based dashboards and store-level controls reflect those boundaries." },
      { title: "Give operations a clear record", text: "Audit trails and reporting make the platform’s financial activity visible to the people operating it." },
    ],
    steps: ["Payment", "Provider", "Reconciliation", "Settlement", "Merchant payout"],
    result: "Fundlio processes $100K+ in monthly transaction volume. Its scope includes payment-provider integrations, operational dashboards, reconciliation, and payouts.",
  },
  {
    slug: "decentraclasses", name: "Decentraclasses", eyebrow: "0 → 1 · DEVELOPER EDUCATION", title: "Learn it. Write it. Run it.",
    summary: "An education platform built from scratch, with live cohorts, a browser-based code editor, and automated evaluation.",
    role: "Co-founder & developer", period: "2022–2024", status: "Archived project", color: "peach",
    tags: ["Next.js", "Node.js", "MongoDB", "Developer tools"], metric: "0 → 1", metricLabel: "end-to-end platform ownership",
    url: "https://web.archive.org/web/20240720053012/https://www.decentraclasses.com/",
    problem: "Learning to build software requires a place to practise. The platform brought course delivery, live cohort scheduling, learner progress, and hands-on coding into one experience.",
    ownership: ["Co-founded the platform and built the product from zero to production.", "Developed course delivery, a content management system, live cohort scheduling, and learner dashboards.", "Built an in-browser Solidity editor with real-time compilation and automated evaluation.", "Integrated NFT-based certification and token-gated content."],
    considerations: [
      { title: "Bring practice into the lesson", text: "The browser editor lets learners write and compile Solidity while working through the material. Automated evaluation gives the exercise a feedback loop." },
      { title: "Build for the people running the course", text: "Course administration, cohort scheduling, and content management are part of delivering the learning experience." },
      { title: "Own the complete product", text: "The co-founder role connected product decisions with frontend, backend, content delivery, and deployment." },
    ],
    steps: ["Lesson", "Code editor", "Compilation", "Evaluation", "Progress"],
    result: "Built and operated an end-to-end education platform. Related work included core development of Shardeum University, launched by Decentraclasses in partnership with Shardeum.",
  },
];

export const moreProjects = [
  { name: "Qwik", category: "Fintech backend", summary: "Banking APIs for cards, payments, budgeting, and financial analytics.", tech: "Node.js · TypeScript · PostgreSQL", href: "https://qwikcard.app/", image: "/projects/qwik.png", status: "2025" },
  { name: "Shardeum University", category: "Developer education", summary: "Core development of a blockchain education platform and learning experience.", tech: "Next.js · React · TypeScript", href: "https://university.shardeum.org/", image: "/projects/shardeum.jpg", status: "2023" },
  { name: "Street Mint", category: "Physical × digital", summary: "Connected NFC experiences and Solana collectibles. 10,000 orders processed across the product.", tech: "Solana · NFC · Payments", href: "https://www.streetmint.xyz/", image: "/projects/streetmint.jpg", status: "2025" },
  { name: "Whop", category: "Marketplace integrations", summary: "Freelance development of crypto features and Web3 integrations for the marketplace.", tech: "Node.js · TypeScript · Integrations", href: "https://whop.com/", image: "/projects/whop.png", status: "2025 · Freelance" },
  { name: "Omen", category: "AI agents", summary: "Agents that monitored world events and managed prediction-market positions.", tech: "AI agents · Event monitoring", href: "https://web.archive.org/web/20251012043741/https://www.omenfund.xyz/", image: "/projects/omen.png", status: "2025 · Archived" },
  { name: "Rods Sniper", category: "Low-latency systems", summary: "A Solana token execution system with a reported 0–2 block execution delay.", tech: "Rust · WebSockets · Solana", status: "2024 · No public demo", image: "/projects/rods.avif" },
];

export const experience = [
  { company: "Riverline", role: "Software Engineer", date: "May — Jul 2026", location: "Bengaluru", description: "Helped build multilingual AI-agent workflows for banks and lenders across voice, WhatsApp, email, and SMS.", detail: "Contributed to campaign automation and real-time operational visibility for borrower communication across channels.", letter: "R", color: "violet" },
  { company: "CrackedDevs", role: "Founding Engineer", date: "May 2024 — May 2026", location: "Remote", description: "Owned architecture, backend services, integrations, and deployment for early-stage products.", detail: "Worked directly with founders to turn ambiguous requirements into deployed products across AI agents, payments, real-time systems, and data pipelines.", letter: "C", color: "mint" },
  { company: "Decentraclasses", role: "Co-founder & Developer", date: "2022 — 2024", location: "Remote", description: "Built a developer education platform, including a browser code editor and automated evaluation.", detail: "Owned the learning platform, cohort scheduling, CMS, progress dashboards, and certification workflows.", letter: "D", color: "peach" },
  { company: "Tamil Nadu counselling platform", role: "Full-Stack Intern", date: "2023", location: "Tamil Nadu", description: "Contributed to a government-platform migration used by 100,000+ students in one month.", detail: "Worked on the 2023 counselling platform supporting seat allocation across 500+ institutions, through the Tamil Nadu Engineering Association.", letter: "TN", color: "blue" },
  { company: "Cookr", role: "Full-Stack Intern", date: "2022 — 2023", location: "Tamil Nadu", description: "Shipped features across customer ordering, cook registration, and order management.", detail: "Worked in a production food-delivery codebase with code review and CI workflows.", letter: "C", color: "peach" },
];

export const principles = [
  { number: "01", title: "Start with the workflow.", text: "I want to understand what people are trying to get done, where the work gets stuck, and what a useful outcome looks like.", example: "Calls, merchant operations, and learning experiences." },
  { number: "02", title: "Own the whole outcome.", text: "I work across APIs, interfaces, integrations, and deployment. The interesting problems usually cross those boundaries.", example: "From a first conversation to a working product." },
  { number: "03", title: "Stay for what comes next.", text: "Shipping is the start of learning. I care about failure handling, visibility, and making the software dependable in everyday use.", example: "Human handoffs, reconciliation, and observability." },
];
