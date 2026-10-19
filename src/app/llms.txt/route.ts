import { email, github, projects } from "@/lib/content";

export function GET() {
  return new Response(`# Raghav Jindal

> Backend-first product engineer based in Bengaluru, India. Builds and operates products across voice AI, payments, developer tools, and public-service platforms.

VoiceGrid handles 1,000+ calls per day during healthcare pilots. Fundlio processes $100K+ in monthly transaction volume. Raghav built both products from scratch and owns frontend, backend, deployment, scaling, and ongoing operations. VoiceGrid does not yet support tool integrations.

## Portfolio

- [Complete portfolio in Markdown](/portfolio.md): Projects, ownership, outcomes, experience, working principles, education, and contact details.
- [Portfolio homepage](/): Visual overview of the work.
${projects.map(project => `- [${project.name}](/work/${project.slug}): ${project.summary}`).join("\n")}
- [Résumé](/resume.pdf): Downloadable résumé.

## Contact

- [Email](mailto:${email}): Discuss a role, project, or collaboration.
- [GitHub](${github}): HiberNuts, public repositories and activity.
- [X](https://x.com/hibernuts): Public profile.
`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
