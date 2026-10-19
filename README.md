# Raghav’s next portfolio

A standalone redesign of raghav.works. Warm charcoal accents on an ivory light theme, clear typography, original product illustrations, three project pages, and live GitHub contributions.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3001. For a production preview: `npm run build` then `npm start`.

## Edit

- `src/lib/content.ts`: project content, experience, philosophy, contact details.
- `src/app/page.tsx`: homepage sections and introduction.
- `src/app/globals.css`: palette, layout, responsiveness, and motion.
- `src/components/product-visual.tsx`: original illustrative project previews.
- `public/projects/`: screenshots from the existing portfolio.
- `public/resume.pdf`: current portfolio résumé. Its editable source is `resumes/Raghav_Jindal_Resume.html`; the original portfolio’s files remain untouched.
- `/llms.txt`: agent-readable index, linked from every page’s HTML head. `/portfolio.md` contains the complete text portfolio; both routes reuse `src/lib/content.ts` for projects. Update the short introduction, education, and tools in the Markdown route if those facts change.

## Checks

```sh
npm run typecheck
npm run build
```

GitHub contributions are fetched through a public third-party API by the same-origin `/api/activity` route, validated, and cached. If the provider fails, the site offers a retry and a GitHub link. The chart is keyboard navigable with arrow keys, Home, and End.

## Editorial notes

- Content comes from the existing portfolio, resume, and approved profile. Public use of VoiceGrid and Fundlio names was confirmed during this redesign.
- The philosophy is an initial draft; personal decision/incident stories can be added later.
- The product panels are explicitly illustrative. They do not claim to be production traces or actual dashboard screenshots.
- VoiceGrid pilot volume was updated to 1,000+ calls per day based on the owner’s correction. Project metrics are content values, not live counters.
- Hackathon participation (10+) and wins at ETH India and ETH Singapore were confirmed during the redesign; disputed event years are omitted.
- VoiceGrid does not yet support tool integrations; the earlier illustrative tool-call demo was removed.
- The existing VoiceGrid marketing screenshot contains product-site claims; the caption distinguishes these from the operational volume reported in the case study.
- Case studies describe confirmed scope and outcomes. Specific engineering incident stories and operational artifacts can be added when supplied.
- No analytics or contact-form service is enabled. Contact uses email links, a clipboard button, and a prefilled WhatsApp chat link.
- The default metadata domain matches the existing portfolio. Set `NEXT_PUBLIC_SITE_URL` only if a future deployment uses a different URL.

The portfolio is maintained in `HiberNuts/portfolio-1`. Pushes to `main` trigger its connected Vercel production deployment. See `THIRD_PARTY_NOTICES.md` for component attribution.
