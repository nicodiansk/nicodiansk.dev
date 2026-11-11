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
The downloadable CV is `public/docs/Nicholas_Previtali_CV.pdf`. Keep the two in sync.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export in ./out (basePath /nicodiansk.dev in production)
```

## Structure

```
app/            layout (fonts, metadata) + page (section order) + globals.css
components/     Nav, Hero, Marquee, Pillars, Work (+ case dialog), Experience, Stack, About, Contact
                primitives.tsx (Eyebrow, Headline, Reveal, doodles, SVG filters)
                LanguageProvider.tsx (EN/IT toggle, persisted)
data/content.ts all text
public/         images/nicholas.jpg, docs/Nicholas_Previtali_CV.pdf
```
