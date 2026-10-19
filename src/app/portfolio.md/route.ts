import { email, github, whatsapp, projects, moreProjects, experience, principles } from "@/lib/content";

export function GET() {
  const markdown = [
    "# Raghav Jindal",
    "> Backend-first product engineer based in Bengaluru, India. Builds products from the first idea through deployment, scaling, and ongoing operations.",
    "Give me a real problem, enough context, and ownership of the outcome. I’ll figure out the rest. The stack keeps changing, and I’m fine with that.",
    "## Selected projects",
    ...projects.map(project => [
      `### ${project.name}`,
      `${project.role} · ${project.period} · ${project.status}`,
      project.summary,
      `**Problem:** ${project.problem}`,
      "**Ownership:**",
      project.ownership.map(item => `- ${item}`).join("\n"),
      `**Technologies and areas:** ${project.tags.join(", ")}.`,
      "**Engineering considerations:**",
      project.considerations.map(item => `- ${item.title}: ${item.text}`).join("\n"),
      `**Outcome:** ${project.result}`,
      `**Reported metric:** ${project.metric} ${project.metricLabel}.`,
      `[Case study](/work/${project.slug})${project.url ? ` · [Product website or archive](${project.url})` : ""}`,
    ].join("\n\n")),
    "VoiceGrid does not yet support tool integrations. Project figures describe reported operational outcomes, not live counters. Product illustrations are conceptual; they are not production dashboard screenshots.",
    "## Other projects",
    ...moreProjects.map(project => `### ${project.name}\n\n${project.status} · ${project.category}\n\n${project.summary}\n\n${project.tech}${project.href ? `\n\n[Website or archive](${project.href})` : ""}`),
    "## Experience",
    ...experience.map(job => `### ${job.company} — ${job.role}\n\n${job.date} · ${job.location}\n\n${job.description}\n\n${job.detail}`),
    "## Working principles",
    ...principles.map(principle => `### ${principle.title}\n\n${principle.text}\n\n${principle.example}`),
    "## Education and hackathons",
    "B.Tech, Information Technology, Government College of Technology, 2020–2024. CGPA: 8.6.",
    "Participated in 10+ hackathons, with wins at ETH India and ETH Singapore.",
    "## Tools",
    "TypeScript, Node.js, PostgreSQL, Redis, React, Next.js, AWS, Docker. Tools are chosen for the problem at hand.",
    "## Contact",
    `- [Email](mailto:${email})\n- [GitHub](${github})\n- [X](https://x.com/hibernuts)\n- [WhatsApp](${whatsapp})\n- [Résumé](/resume.pdf)\n- [Portfolio](/)`,
  ].join("\n\n");

  return new Response(`${markdown}\n`, { headers: {
    "Content-Type": "text/markdown; charset=utf-8",
    "Link": '</llms.txt>; rel="describedby"',
  } });
}
