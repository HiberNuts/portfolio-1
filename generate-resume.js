const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Raghav Jindal Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 10px;
      line-height: 1.4;
      color: #333;
      padding: 30px 40px;
    }

    h1 {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 5px;
    }

    .subtitle {
      text-align: center;
      font-size: 12px;
      color: #666;
      font-style: italic;
      margin-bottom: 8px;
    }

    .contact-info {
      text-align: center;
      font-size: 9px;
      color: #444;
      margin-bottom: 15px;
    }

    .contact-info a {
      color: #444;
      text-decoration: none;
    }

    .two-column {
      display: flex;
      gap: 25px;
      margin-bottom: 15px;
    }

    .left-column {
      flex: 1.2;
    }

    .right-column {
      flex: 0.8;
    }

    h2 {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      border-bottom: 1px solid #333;
      padding-bottom: 3px;
      margin-bottom: 10px;
    }

    .section {
      margin-bottom: 15px;
    }

    .profile-text {
      font-size: 9.5px;
      line-height: 1.5;
      text-align: justify;
    }

    .education-item {
      margin-bottom: 5px;
    }

    .education-title {
      font-weight: 700;
      font-size: 10px;
    }

    .education-school {
      font-style: italic;
      font-size: 9px;
      color: #555;
    }

    .education-details {
      font-size: 9px;
      color: #666;
    }

    .work-item {
      margin-bottom: 12px;
    }

    .work-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .work-company {
      font-weight: 700;
      font-size: 11px;
    }

    .work-company a {
      color: #2563eb;
      text-decoration: none;
    }

    .work-date {
      font-size: 9px;
      color: #666;
    }

    .work-role {
      font-size: 9px;
      font-style: italic;
      color: #555;
      margin-bottom: 3px;
    }

    .work-description {
      font-size: 9px;
      line-height: 1.4;
      text-align: justify;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .project-card {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 5px;
    }

    .project-title {
      font-weight: 700;
      font-size: 10px;
    }

    .project-link {
      font-size: 8px;
      color: #2563eb;
    }

    .project-description {
      font-size: 8.5px;
      line-height: 1.4;
      margin-bottom: 8px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
    }

    .tag {
      background: #dbeafe;
      border: 1px solid #2563eb;
      border-radius: 3px;
      padding: 2px 6px;
      font-size: 7px;
      color: #1e40af;
    }

    .skills-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .skill-tag {
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
      border-radius: 3px;
      padding: 3px 8px;
      font-size: 8px;
      color: #374151;
    }

    .achievement-item {
      margin-bottom: 8px;
      font-size: 9px;
    }

    .achievement-badge {
      background: #f59e0b;
      color: white;
      padding: 2px 6px;
      border-radius: 3px;
      font-weight: 700;
      font-size: 8px;
      margin-right: 5px;
    }
  </style>
</head>
<body>
  <h1>Raghav Jindal</h1>
  <div class="subtitle">Backend-first Fullstack Engineer | Node.js &middot; TypeScript &middot; Next.js &middot; Solana</div>
  <div class="contact-info">
    <a href="https://github.com/HiberNuts">github.com/HiberNuts</a> | <a href="https://portfolio-1-chi-nine.vercel.app">portfolio-1-chi-nine.vercel.app</a> | <a href="mailto:raghavjindal0212@gmail.com">raghavjindal0212@gmail.com</a> | +91 8015637209 | @hibernuts | Bengaluru, India
  </div>

  <div class="two-column">
    <div class="left-column">
      <div class="section">
        <h2>Profile</h2>
        <p class="profile-text">
          Backend First Full Stack Engineer who builds systems that don't fall apart under load. Works primarily with Node.js, TypeScript, React, and Next.js, designing APIs, data models, and distributed backends with production constraints in mind. Strong Web3 background across EVM chains and Solana, spanning smart contracts, DeFi mechanics, wallet infrastructure, and on-chain/off-chain coordination.
        </p>
      </div>
    </div>
    <div class="right-column">
      <div class="section">
        <h2>Education</h2>
        <div class="education-item">
          <div class="education-title">BTech Information Technology</div>
          <div class="education-school">Government College of Technology</div>
          <div class="education-details">2020 - 2024 | Coimbatore, India | CGPA: 8.6</div>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>Work Experience</h2>

    <div class="work-item">
      <div class="work-header">
        <span class="work-company"><a href="https://www.crackeddevs.com/">CrackedDevs.com</a></span>
        <span class="work-date">May 2023 - Present</span>
      </div>
      <div class="work-role">Founding Engineer | Remote</div>
      <p class="work-description">
        Founding engineer at a remote tech collective shipping blockchain, AI, and full-stack products for startup clients. Own systems end to end — architecture, backend, smart contracts, and deployment — across decentralized trading tools, NFT platforms, crypto payment systems, real-time AI agents, and data scraping pipelines.
      </p>
    </div>

    <div class="work-item">
      <div class="work-header">
        <span class="work-company"><a href="https://www.decentraclasses.com/">Decentraclasses</a></span>
        <span class="work-date">2022 - 2024</span>
      </div>
      <div class="work-role">Co-founder & Developer | Remote</div>
      <p class="work-description">
        Led end-to-end development of fullstack blockchain education platform with dynamic course delivery, live cohorts, and custom in-browser Solidity code editor with real-time compilation. Built user dashboards, NFT-based certification on EVM chains, and token-gated content. Tech: Next.js, Node.js, MongoDB, IPFS.
      </p>
    </div>

    <div class="work-item">
      <div class="work-header">
        <span class="work-company"><a href="https://dte.tn.gov.in/">Tamil Nadu Engineering Association</a></span>
        <span class="work-date">2023</span>
      </div>
      <div class="work-role">Full Stack Developer Intern | Tamil Nadu, India</div>
      <p class="work-description">
        Migrated legacy government systems to modern web stacks for 2023 Tamil Nadu counselling process. Built platform handling college seat allocation across 500+ institutions serving 100,000+ students.
      </p>
    </div>

    <div class="work-item">
      <div class="work-header">
        <span class="work-company"><a href="https://cookr.in/">Cookr</a></span>
        <span class="work-date">2022 - 2023</span>
      </div>
      <div class="work-role">Full Stack Developer Intern | Tamil Nadu, India</div>
      <p class="work-description">
        Worked on home-made food delivery app implementing customer ordering, cook registration, and order management. Learned production-level coding and scalable architecture patterns.
      </p>
    </div>
  </div>

  <div class="section">
    <h2>Projects</h2>
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-header">
          <span class="project-title">Qwik</span>
          <a class="project-link" href="https://qwikcard.app">qwikcard.app</a>
        </div>
        <p class="project-description">
          Comprehensive fintech backend API powering digital banking with card management, payment processing, and financial analytics.
        </p>
        <div class="tags">
          <span class="tag">Node.js</span>
          <span class="tag">TypeScript</span>
          <span class="tag">PostgreSQL</span>
          <span class="tag">Microservices</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <span class="project-title">Whop</span>
          <a class="project-link" href="https://whop.com">whop.com</a>
        </div>
        <p class="project-description">
          Built crypto narrative features for American social commerce platform, enabling blockchain-based functionality and Web3 integrations.
        </p>
        <div class="tags">
          <span class="tag">Node.js</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Web3</span>
          <span class="tag">Blockchain</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <span class="project-title">Street Mint</span>
          <a class="project-link" href="https://streetmint.xyz">streetmint.xyz</a>
        </div>
        <p class="project-description">
          Solana + NFC platform for physical digital collectibles. Stats: 714 Collectibles, 5,700 Taps, 10,000+ Orders.
        </p>
        <div class="tags">
          <span class="tag">Solana</span>
          <span class="tag">NFC</span>
          <span class="tag">NFTs</span>
          <span class="tag">Smart Contracts</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <span class="project-title">Rods Sniper</span>
          <span class="project-link">Private</span>
        </div>
        <p class="project-description">
          Low-latency Solana token sniping system. Performance: 0-2 block difference - one of the fastest on Solana.
        </p>
        <div class="tags">
          <span class="tag">Solana</span>
          <span class="tag">Rust</span>
          <span class="tag">WebSockets</span>
          <span class="tag">HFT</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <span class="project-title">Shardeum University</span>
          <a class="project-link" href="https://university.shardeum.org">university.shardeum.org</a>
        </div>
        <p class="project-description">
          Core developer for blockchain educational platform focused on Web3 development training.
        </p>
        <div class="tags">
          <span class="tag">Next.js</span>
          <span class="tag">React</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Blockchain</span>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <span class="project-title">Omen</span>
          <a class="project-link" href="https://omenfund.xyz">omenfund.xyz</a>
        </div>
        <p class="project-description">
          World's first Polymarket hedge fund powered by AI agents. Scans world events 24/7 and manages bets autonomously, optimizing risk and reward.
        </p>
        <div class="tags">
          <span class="tag">AI Agents</span>
          <span class="tag">Polymarket</span>
          <span class="tag">DeFi</span>
          <span class="tag">Web3</span>
        </div>
      </div>
    </div>
  </div>

  <div class="two-column">
    <div class="left-column">
      <div class="section">
        <h2>Skills</h2>
        <div class="skills-tags">
          <span class="skill-tag">Next.js</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">PostgreSQL</span>
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">Redis</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">REST APIs</span>
          <span class="skill-tag">Microservices</span>
          <span class="skill-tag">Flutter</span>
          <span class="skill-tag">Solidity</span>
          <span class="skill-tag">Solana</span>
          <span class="skill-tag">Web3.js</span>
          <span class="skill-tag">Smart Contracts</span>
          <span class="skill-tag">DeFi</span>
          <span class="skill-tag">NFTs</span>
        </div>
      </div>
    </div>
    <div class="right-column">
      <div class="section">
        <h2>Achievements</h2>
        <div class="achievement-item">
          <span class="achievement-badge">WINNER</span>
          ETH India 2024 - Developed cutting-edge Web3 applications
        </div>
        <div class="achievement-item">
          <span class="achievement-badge">WINNER</span>
          ETH Singapore 2023 - Built innovative blockchain solutions
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`;

async function generatePDF() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setContent(resumeHTML, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'Raghav_Jindal_Resume_Updated.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  await browser.close();
  console.log('PDF generated successfully: Raghav_Jindal_Resume_Updated.pdf');
}

generatePDF().catch(console.error);
