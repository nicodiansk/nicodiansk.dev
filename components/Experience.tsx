'use client';

import { experience, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Eyebrow, Reveal, Sparkle } from './primitives';
import { accentBg, accentText, cn } from '@/lib/utils';

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow glyph="✦">{t(ui.experience.eyebrow)}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2.6rem,6vw,4.8rem)]">
            <span className="block text-paper">{t(ui.experience.title[0])}</span>
            <span className="block text-mustard">{t(ui.experience.title[1])}</span>
          </h2>
          <div className="mt-10 hidden items-center gap-4 lg:flex">
            <Sparkle className="h-10 w-10 animate-wobble text-pink" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">2021 → {t({ en: 'now', it: 'oggi' })}</span>
          </div>
        </Reveal>

        <ol className="relative space-y-14 border-l-2 border-dashed border-paper/20 pl-8 sm:pl-12">
          {experience.map((job, i) => (
            <Reveal key={job.period.en} delay={i * 80}>
              <li className="relative">
                <span
                  aria-hidden
                  className={cn('absolute -left-[45px] top-1 h-5 w-5 rotate-45 border-2 border-ink sm:-left-[61px]', accentBg[job.accent])}
                />
                <p className={cn('font-mono text-xs uppercase tracking-[0.2em]', accentText[job.accent])}>{t(job.period)}</p>
                <h3 className="display mt-2 text-[clamp(1.7rem,3.4vw,2.5rem)] text-paper">{t(job.role)}</h3>
                <p className="mt-1 font-mono text-sm text-paper/60">{job.company}</p>
                <p className="mt-5 font-sans text-[17px] leading-relaxed text-paper/85">{t(job.intro)}</p>
                <ul className="mt-4 space-y-2 font-sans text-paper/75">
                  {job.points.map((pt, j) => (
                    <li key={j} className="flex gap-3">
                      <span className={accentText[job.accent]}>+</span>
                      <span>{t(pt)}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
