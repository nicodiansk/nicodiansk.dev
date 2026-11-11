'use client';

import { ArrowUpRight } from 'lucide-react';
import { education, languages, research, thesis, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Cross, Dots, Eyebrow, Reveal, Scribble } from './primitives';
import { tornClip } from '@/lib/utils';

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
      <Reveal>
        <Eyebrow glyph="●">{t(ui.about.eyebrow)}</Eyebrow>
        <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">
          <span className="block text-paper">{t(ui.about.title[0])}</span>
          <span className="block text-teal">{t(ui.about.title[1])}</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {/* Education — paper card */}
        <Reveal className="lg:row-span-2">
          <article className="relative h-full -rotate-1 bg-paper px-7 pb-12 pt-12 text-ink" style={{ clipPath: tornClip(31) }}>
            <Cross className="absolute right-6 top-8 h-9 w-9 text-pink" />
            <p className="eyebrow !text-ink/60">{t(ui.about.education)}</p>
            <div className="mt-6 font-display text-7xl leading-none text-pink">110</div>
            <div className="font-mono text-sm uppercase tracking-[0.16em] text-ink/70">/110 · {t({ en: 'summa cum laude', it: 'e lode' })}</div>
            <ul className="mt-8 space-y-6">
              {education.map((e) => (
                <li key={e.period}>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/55">{e.period}</p>
                  <h3 className="display mt-1 text-xl leading-tight">{t(e.degree)}</h3>
                  <p className="mt-1 font-sans text-sm text-ink/70">{e.school}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t-2 border-dashed border-ink/20 pt-6">
              <p className="eyebrow !text-ink/60">{t(ui.about.thesis)}</p>
              <p className="mt-2 font-sans italic leading-snug">{t(thesis.title)}</p>
              <p className="mt-2 font-mono text-xs text-ink/60">{thesis.authors}</p>
            </div>
          </article>
        </Reveal>

        {/* Open source — pink sticker */}
        <Reveal delay={80} className="lg:col-span-2">
          <a
            href="https://github.com/nicodiansk/turbocharge"
            target="_blank"
            rel="noreferrer"
            className="group relative block h-full rotate-[0.6deg] overflow-hidden rounded-md bg-pink px-7 py-9 text-ink shadow-[6px_7px_0_0_#9E2448] transition-transform hover:rotate-0 hover:-translate-y-1"
          >
            <div aria-hidden className="halftone absolute -right-6 -top-6 h-48 w-48 text-ink/15" />
            <Scribble className="absolute -bottom-2 right-8 w-40 text-ink/30" />
            <p className="eyebrow !text-ink/70">{t(ui.about.openSource)}</p>
            <div className="mt-4 flex items-start justify-between gap-4">
              <h3 className="display text-[clamp(2.2rem,5vw,3.6rem)]">Turbocharge</h3>
              <ArrowUpRight className="h-10 w-10 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <p className="relative mt-3 max-w-xl font-sans text-[17px] leading-relaxed">
              {t({
                en: 'Open-source Claude Code plugin: brainstorm → plan → build → review, test-driven. 10 skills, 6 agents, 2 hooks.',
                it: 'Plugin open source per Claude Code: brainstorm → plan → build → review, guidato dai test. 10 skill, 6 agenti, 2 hook.',
              })}
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em]">github.com/nicodiansk/turbocharge</p>
          </a>
        </Reveal>

        {/* Research */}
        <Reveal delay={140}>
          <article className="relative h-full -rotate-[0.6deg] border-2 border-teal bg-ink px-7 py-9">
            <Dots className="absolute right-6 top-6 w-12 text-teal/60" />
            <p className="eyebrow !text-teal">{t(ui.about.research)}</p>
            <div className="mt-5 font-display text-6xl leading-none text-teal">50+</div>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">papers</p>
            <p className="mt-5 font-sans leading-relaxed text-paper/80">{t(research)}</p>
          </article>
        </Reveal>

        {/* Languages */}
        <Reveal delay={200}>
          <article className="relative h-full rotate-[0.8deg] border-2 border-mustard bg-ink px-7 py-9">
            <p className="eyebrow !text-mustard">{t(ui.about.languages)}</p>
            <ul className="mt-6 space-y-5">
              {languages.map((l) => (
                <li key={l.name.en}>
                  <h3 className="display text-3xl text-paper">{t(l.name)}</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-mustard">{t(l.level)}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
