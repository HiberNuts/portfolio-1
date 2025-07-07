import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raghav Jindal",
  initials: "RJ",
  url: "https://raghav.work/",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/banglore",
  description:
    "Full Stack Developer specializing in modern web applications and blockchain solutions. I love building scalable, user-focused products that make a difference.",
  summary:
    "A passionate Full Stack Developer with extensive experience in building modern web applications using React, Next.js, Node.js, and TypeScript. Specialized in creating scalable architectures, RESTful APIs, and responsive user interfaces. Additionally skilled in blockchain development across EVM-compatible chains and Solana, with expertise in smart contracts, DeFi protocols, and Web3 integrations. Proven track record of delivering end-to-end solutions from database design to deployment, with a strong focus on user experience and performance optimization.",
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
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hibernuts/",
        icon: Icons.linkedin,
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
      start: "2023",
      end: "Present",
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
      ],
      image: "",
      video: "",
    },
    {
      title: "Prompt Me",
      href: "https://github.com/HiberNuts/promt-me-extension",
      dates: "2023",
      active: true,
      description:
        "AI Prompt Generator Chrome Extension that helps users generate creative and effective prompts for AI interactions.",
      technologies: ["JavaScript", "Chrome Extension API", "AI", "HTML", "CSS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/HiberNuts/promt-me-extension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Netflix Clone (Mobile App)",
      href: "#",
      dates: "2022",
      active: false,
      description:
        "A mobile streaming application built using Flutter, replicating Netflix's core features for video streaming and user interface.",
      technologies: [
        "Flutter",
        "Dart",
        "API Integration",
        "Mobile Development",
      ],
      links: [],
      image: "",
      video: "",
    },
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
