import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raghav Jindal",
  initials: "RJ",
  url: "https://raghav.work/",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/banglore",
  description:
    "Full Stack Developer specializing in modern web applications and blockchain solutions. I love building scalable, user-focused products that holds up in production.",
  summary:
    "Backend First Full Stack Engineer who builds systems that don't fall apart under load. Works primarily with Node.js, TypeScript, React, and Next.js, designing APIs, data models, and distributed backends with production constraints in mind. Strong Web3 background across EVM chains and Solana, spanning smart contracts, DeFi mechanics, wallet infrastructure, and on-chain/off-chain coordination. Focused on correctness, performance, and shipping systems end to end.",
  avatarUrl: "/me.png",
  skills: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "Flutter",
    "Solidity",
    "Web3.js",
    "Ethers.js",
    "Solana",
    "Smart Contracts",
    "DeFi",
    "NFTs",
    "Blockchain",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Vercel",
    "REST APIs",
    "Microservices",
    "CI/CD",
    "Git",
    "Prisma",
    "TailwindCSS",
    "AI Integration",
    "Telegram Bots",
    "Chrome Extensions",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "raghavjindal0212@gmail.com",
    tel: "+918015637209",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/HiberNuts",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hibernuts",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@raghavjindal0212",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raghavjindal0212@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/hibernuts0",
        icon: Icons.telegram,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CrackedDevs.com",
      href: "https://www.crackeddevs.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack & Blockchain Developer",
      logoUrl: "/atomic.png",
      start: "May 2023",
      end: "Present",
      description:
        "CrackedDevs is a high-performance tech collective specializing in blockchain, AI, and full-stack development. Known for its elite team of developers, CrackedDevs has delivered scalable, production-ready solutions for startups and enterprises alike. The team has built a range of projects including decentralized trading tools, NFT platforms, crypto payment systems, real-time AI agents, and data scraping solutions. With a strong presence at hackathons and a reputation for execution speed, CrackedDevs blends deep technical expertise with startup agility to ship products that push boundaries.",
    },
    {
      company: "Decentraclasses",
      badges: [],
      href: "https://www.decentraclasses.com/",
      location: "Remote",
      title: "Co-founder & Developer",
      logoUrl: "/decentra.jpg",
      start: "2022",
      end: "2024",
      description:
        "Led end-to-end development of a fullstack blockchain education platform with dynamic course delivery, live cohort scheduling, and a robust content management system. Built a custom in-browser Solidity code editor with real-time compilation and auto-evaluation for hands-on learning. Designed user dashboards for progress tracking, integrated NFT-based certification on EVM chains, and enabled token-gated content access. Leveraged Next.js, Node.js, Mongodb, IPFS, and smart contract tooling to deliver a seamless learning experience. Partnered with leading protocols to deliver expert-led sessions to the Web3 community.",
    },
    {
      company: "Tamil Nadu Engineering Association",
      href: "https://dte.tn.gov.in/",
      badges: [],
      location: "Tamil Nadu, India",
      title: "Full Stack Developer Intern",
      logoUrl: "/tamilnadu.png",
      start: "2023",
      end: "2023",
      description:
        "Migrated legacy government systems to modern web stacks to power the 2023 Tamil Nadu counselling process used by over 100,000 students within a month. Played a key role in building and optimizing the platform that handled college seat allocation across 500+ institutions, significantly improving reliability, speed, and user experience at state-wide scale.",
    },
    {
      company: "Cookr",
      href: "https://cookr.in/",
      badges: [],
      location: "Tamil Nadu, India",
      title: "Full Stack Developer Intern",
      logoUrl: "/cookr.png",
      start: "2022",
      end: "2023",
      description:
        "Gained hands-on experience working on a home made food delivery application as a fullstack developer intern. Learned production-level coding practices and industry best practices while contributing to large-scale codebases. Worked on both frontend and backend development, implementing features for customer ordering, cook registration, and order management systems. Developed understanding of scalable architecture patterns, code review processes, and collaborative development workflows in a production environment.",
    },
  ],
  education: [
    {
      school: "Government College of Technology",
      href: "https://www.gct.ac.in/",
      degree: "B.Tech in Information Technology - 8.6 CGPA",
      logoUrl: "/clg.png",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Qwik",
      href: "https://qwikcard.app/",
      dates: "2025",
      active: true,
      description:
        "Qwik is a comprehensive fintech backend API built with Node.js/TypeScript that powers a modern digital banking platform. It provides end-to-end banking services including card management, payment processing, budgeting tools, and financial analytics.",
      technologies: [
        "Node.js",
        "TypeScript",
        "REST APIs",
        "PostgreSQL",
        "Microservices",
        "Fintech",
        "Payment Processing",
      ],
      links: [
        {
          type: "Website",
          href: "https://qwikcard.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/qwik.png",
      video: "",
    },
    {
      title: "Whop",
      href: "https://whop.com/",
      dates: "2025",
      active: true,
      description:
        "Whop is an American social commerce platform and digital product marketplace that lets creators and small businesses build, host, and sell digital products, memberships, services, courses, and community access from a single platform. Worked as a freelance developer to build Whop's crypto narrative features, enabling blockchain-based functionality and Web3 integrations for the platform.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Web3",
        "Blockchain",
        "Crypto",
        "Social Commerce",
        "Digital Products",
      ],
      links: [
        {
          type: "Website",
          href: "https://whop.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/whop.png",
      video: "",
    },
    {
      title: "Street Mint",
      href: "https://www.streetmint.xyz/",
      dates: "2025",
      active: true,
      description:
        "Street Mint combines the power of Solana blockchain with NFC technology to bring your digital collectibles into the physical world. Features include easy minting, NFC integration, seamless checkout, and Solana-powered infrastructure.\n\n**Stats:** 714 Collectibles • 5,700 Taps • 10,000 Orders processed",
      technologies: [
        "Solana",
        "Blockchain",
        "NFC Technology",
        "Web3",
        "NFTs",
        "Digital Collectibles",
        "Smart Contracts",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.streetmint.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/streetmint.jpg",
      video: "",
    },
    {
      title: "Rods Sniper",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "A low-latency Solana token sniping system designed to detect newly created SPL tokens at the moment of creation and execute buy transactions with minimal delay, prioritizing speed, determinism, and execution reliability over UX.\n\n**Performance:** Successfully sniped tokens with 0-2 block difference, making it one of the very few snipers capable of achieving such extreme low latency.",
      technologies: [
        "Solana",
        "Rust",
        "WebSockets",
        "Low-Latency Systems",
        "SPL Tokens",
        "Blockchain",
        "High-Frequency Trading",
      ],
      links: [],
      image: "/rods.avif",
      video: "",
    },
    {
      title: "Shardeum University",
      href: "https://university.shardeum.org/",
      dates: "2023 - Present",
      active: true,
      description:
        "Core Developer for Shardeum University, an educational platform focused on blockchain technology and development.",
      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Blockchain",
        "Smart Contracts",
      ],
      links: [
        {
          type: "Website",
          href: "https://university.shardeum.org/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "walkthrough",
          href: "https://www.loom.com/share/cd2ed172d28d43659e6c254bc7154e2b",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/shardeum.jpg",
      video: "",
    },

    // {
    //   title: "Netflix Clone (Mobile App)",
    //   href: "https://github.com/HiberNuts/flutter-netflix",
    //   dates: "2022",
    //   active: false,
    //   description:
    //     "A mobile streaming application built using Flutter, replicating Netflix's core features for video streaming and user interface.",
    //   technologies: [
    //     "Flutter",
    //     "Dart",
    //     "API Integration",
    //     "Mobile Development",
    //   ],
    //   links: [
    //     {
    //       type: "Source",
    //       href: "https://github.com/HiberNuts/flutter-netflix",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/netflix.png",
    //   video: "",
    // },
  ],
  hackathons: [
    {
      title: "ETH India",
      dates: "2024",
      location: "India",
      description:
        "Winner at ETH India hackathon, developing cutting-edge Web3 applications.",
      image: "/india.png",
      win: "Winner",
      links: [],
    },
    {
      title: "ETH Singapore",
      dates: "2023",
      location: "Singapore",
      description:
        "Winner at ETH Singapore hackathon, building innovative blockchain solutions.",
      image: "/eth.png",
      win: "Winner",
      links: [],
    },
  ],
} as const;
