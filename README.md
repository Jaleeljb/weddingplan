# Evermore & Co. — Wedding Planning Studio Website

A fully responsive, animated single-page site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — a stack Vercel supports out of the box with zero configuration.

## Sections
Home · About · Services · Packages · Venues · Gallery · Contact — plus a sticky animated nav and footer.

## Design
"Botanical Editorial" identity: deep forest green, ivory, antique gold, and dusty rose; Cormorant Garamond (display serif) paired with Jost (body sans); a hand-drawn vine motif that draws itself in on scroll as the page's signature element.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B — Git + Vercel Dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset "Next.js" is auto-detected — click **Deploy**. No environment variables are required.

## Customize

- **Copy & pricing**: edit the arrays at the top of each component in `/components` (`Services.tsx`, `Packages.tsx`, `Venues.tsx`, `Gallery.tsx`).
- **Images**: currently sourced from Unsplash via `next/image`. Swap the `src` URLs for your own photos, or drop files into `/public` and reference them as `/your-file.jpg`.
- **Colors/fonts**: adjust tokens in `tailwind.config.ts` and the font imports in `app/layout.tsx`.
- **Contact form**: `components/Contact.tsx` currently simulates a submission client-side. Wire it to an API route, Formspree, or your email provider of choice to actually receive messages.

## Accessibility & performance notes
- Respects `prefers-reduced-motion`.
- Fully responsive from small mobile up through large desktop.
- Images use `next/image` for automatic optimization.
