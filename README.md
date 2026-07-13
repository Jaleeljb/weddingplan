# Evermore & Co. — Wedding Planning Studio Website

A fully responsive, animated single-page site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — a stack Vercel supports out of the box with zero configuration.

## Sections
Home · About · Services · Venues · Cuisine · Gallery · Packages · Contact — plus a sticky animated nav and footer. (Packages sits directly above Contact by design, so pricing leads straight into the enquiry form.)

## Regional Wedding Cuisine Section
`components/Cuisine.tsx` + `data/indiaCuisine.ts` cover all 24 states/UTs in the venue dataset, each with 5 real signature dishes (veg/non-veg tagged), a wedding-feast tradition note, and a diet profile. Filterable by region and state, same UX pattern as Venues.

**Photography honesty:** dishes marked "Real dish photo" link to genuine Wikimedia Commons photography — either of that exact dish (Hyderabadi biryani, Gujarati dhokla, dal baati churma, rosogolla, masala dosa, Kerala sadya) or a real regional-style thali reused honestly across a few neighbouring states with a similar thali tradition (noted in each entry's `sourceNote`). States without that badge use representative stock photography of the cuisine style, not a confirmed photo of that state's actual food — swap in real photography whenever you have it, using the same `StateCuisine` shape.

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

## No Duplicate Images
Every image URL in this app — across Hero, About, Venues, Cuisine, Gallery — is used exactly once. This was a deliberate constraint, not an accident:
- **Venues (120 areas):** only 3 areas (Jaipur, Hyderabad, Mumbai) have a genuine confirmed photo of that exact property. Every other area has no `image` in the data and instead renders through `components/AreaVisual.tsx`, which deterministically generates a unique on-brand SVG (palette + pattern + monogram, seeded from the area's id) — so all 117 remaining area cards look distinct and none falsely implies it's a photo of that specific venue.
- **Cuisine (24 states):** 17 states use real, distinct Wikimedia Commons dish/thali photography; the remaining 7 use distinct representative stock photos (never shared between states).
- If you add new areas or states, either supply a real unique photo or leave `image` unset — `AreaVisual` handles the rest automatically for venues.

## India Venues Section
The Venues section is now a directory of **120 real areas across 24 states/UTs** (5 per state) — `data/indiaVenues.ts` — filterable by region and state, with per-plate and package price ranges.

**Important — read before treating this as a live feed:** there is no public real-time pricing API for Indian wedding venues (vendors quote privately by date/season/menu). So instead of faking a live feed:
- Every area is assigned a **tier** (Metro, State Capital, Heritage Destination, Hill Resort, Beach & Coastal, Kerala Backwater, Pilgrimage Town, or Tier-2 Town), each with its own 2026 rate-benchmark pricing model defined once in `TIER_INFO` and applied consistently.
- A handful of areas (Jaipur, Hyderabad, Mumbai, Ambala, and others) additionally name a real flagship property via `featured`. Entries with `featured.verified: true` (Jaipur/Rambagh Palace, Hyderabad/Taj Falaknuma Palace, Mumbai/Taj Mahal Palace, Ambala/Wedcation by Tivoli) have pricing cross-checked against multiple published 2026 sources for that specific venue and override the tier default. Other `featured` entries are named real properties with category-level (not property-specific) pricing.
- Photos for the 3 verified palace/heritage flagships are real building photography from Wikimedia Commons; every other area uses representative regional/category stock photography, not that area's own venue photos.
- A "How we source this data" link in the UI opens a plain-language methodology modal so visitors aren't misled.

**To go fully live**, replace `data/indiaVenues.ts` with a fetch to a real vendor API (e.g. a WedMeGood/Mandap partner feed if you have one) or your own CMS, keeping the same `IndiaArea` shape so the UI needs no changes.

## Customize

- **Copy & pricing**: edit the arrays at the top of each component in `/components` (`Services.tsx`, `Packages.tsx`, `Venues.tsx`, `Gallery.tsx`).
- **Images**: currently sourced from Unsplash via `next/image`. Swap the `src` URLs for your own photos, or drop files into `/public` and reference them as `/your-file.jpg`.
- **Colors/fonts**: adjust tokens in `tailwind.config.ts` and the font imports in `app/layout.tsx`.
- **Contact form**: `components/Contact.tsx` currently simulates a submission client-side. Wire it to an API route, Formspree, or your email provider of choice to actually receive messages.

## Accessibility & performance notes
- Respects `prefers-reduced-motion`.
- Fully responsive from small mobile up through large desktop.
- Images use `next/image` for automatic optimization.
