# nicodiansk.dev

Personal portfolio of **Nicholas Previtali**, AI Engineering Lead / Head of AI at S.I. 2001.

Live at: [nicodiansk.github.io/nicodiansk.dev](https://nicodiansk.github.io/nicodiansk.dev/)

## Stack

- Next.js 16 (static export) + TypeScript
- Tailwind CSS 3
- Self-hosted fonts via Fontsource: Archivo Black (display), Space Mono (mono), Inter (body)
- Deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `master`

## Design

A zine / sticker look: black paper, cream, pink, teal and mustard. Torn-paper cards (`tornClip` in `lib/utils.ts`), rough SVG
paint filters (`RoughFilters` in `components/primitives.tsx`), offset “sticker” buttons, a moving tape marquee and film grain.

## Editing content

All copy lives in **`data/content.ts`**, bilingual (`{ en, it }`). Projects, experience, stack, education: edit there.
The downloadable CV is the **public** version (no phone, clients anonymised), rendered from `scripts/cv/cv.html`
with `npm run cv` (needs Playwright + Chromium) into `public/docs/Nicholas_Previtali_CV.pdf`. Keep it in sync with `data/content.ts`.

## Development

```bash
npm install
npm run dev        # dev server with hot reload → http://localhost:3000
npm run preview    # production build served at the root → http://localhost:4173
npm run lint       # ESLint (flat config, next/core-web-vitals + typescript)
npm run typecheck  # tsc --noEmit
npm run check      # lint + typecheck + build (same as CI)
npm run build      # static export in ./out, basePath /nicodiansk.dev
```

`PAGES_BASE_PATH` overrides the base path (`npm run preview` sets it to empty).

## Workflow

`feature branch → PR to master → CI (lint, typecheck, build) + Claude code review → merge → GitHub Pages deploy`.
Mention `@claude` in a PR comment to ask Claude for changes.

## Motion

Inspired by stop-motion zines: collage pieces pop in and “boil” (an SVG turbulence filter re-seeded ~7×/s while the hero is
on screen), headlines glitch with an RGB split on staggered 17–27s timers, the cursor blinks irregularly, and the portrait
swaps to an animated glitch loop after page load. Everything respects `prefers-reduced-motion`.

Regenerate the portrait loop after changing the photo: `python3 scripts/make-portrait-loop.py` (needs Pillow).

## Structure

```
app/            layout (fonts, metadata) + page (section order) + globals.css
components/     Nav, Hero, Marquee, Pillars, Work (+ case dialog), Experience, Stack, About, Contact
                primitives.tsx (Eyebrow, Headline, Reveal, doodles, SVG filters)
                LanguageProvider.tsx (EN/IT toggle, persisted)
data/content.ts all text
public/         images/nicholas.jpg (+ nicholas-loop.webp), docs/Nicholas_Previtali_CV.pdf
scripts/        preview.mjs (local prod preview), make-portrait-loop.py, build-cv.mjs + cv/cv.html (public CV),
                build-og.mjs + og/og.html (social preview card → public/og.jpg, `npm run og`)
```
