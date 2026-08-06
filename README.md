# raghav.works portfolio

Personal portfolio of **Raghav Jindal**, an AI and backend engineer building production agents, voice systems, and reliable distributed products.

Live: [www.raghav.works](https://www.raghav.works)

## Stack

Next.js 14 (App Router) · TypeScript · TailwindCSS · shadcn/ui · Framer Motion. Based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio) (MIT).

## Editing

All content lives in a single file: [`src/data/resume.tsx`](./src/data/resume.tsx). The OG share image is generated at build time by [`src/app/opengraph-image.tsx`](./src/app/opengraph-image.tsx). The resume PDF is served from [`public/resume.pdf`](./public/resume.pdf) and regenerated with `node generate-resume.js`.

```bash
yarn && yarn dev
```
