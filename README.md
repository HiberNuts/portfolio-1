# raghav.work — portfolio

Personal portfolio of **Raghav Jindal** — backend-first fullstack engineer (Node.js, TypeScript, React, Next.js + Solana/EVM).

Live: [portfolio-1-chi-nine.vercel.app](https://portfolio-1-chi-nine.vercel.app)

## Stack

Next.js 14 (App Router) · TypeScript · TailwindCSS · shadcn/ui · Framer Motion — based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio) (MIT).

## Editing

All content lives in a single file: [`src/data/resume.tsx`](./src/data/resume.tsx). The OG share image is generated at build time by [`src/app/opengraph-image.tsx`](./src/app/opengraph-image.tsx). The resume PDF is served from [`public/resume.pdf`](./public/resume.pdf) and regenerated with `node generate-resume.js`.

```bash
yarn && yarn dev
```
