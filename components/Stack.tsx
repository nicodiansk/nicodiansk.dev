'use client';

import { stack, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Asterisk, Eyebrow, Reveal } from './primitives';
import { accentBorder, accentText, cn, tornClip } from '@/lib/utils';

const chipTilt = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', 'rotate-0', '-rotate-[1.5deg]'];

export default function Stack() {
  const { t } = useLang();
  return (
    <section id="stack" className="relative py-20 lg:py-24">
      <div aria-hidden className="absolute inset-0 bg-coal" style={{ clipPath: tornClip(21, 40, 1.6) }} />
      <div aria-hidden className="halftone absolute right-0 top-10 h-64 w-64 text-pink/25" />
      <Asterisk className="absolute bottom-16 left-6 h-16 w-16 animate-wobble text-teal/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <Reveal>
          <Eyebrow glyph="◆">{t(ui.stack.eyebrow)}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">
            <span className="block text-paper">{t(ui.stack.title[0])}</span>
            <span className="block text-pink">{t(ui.stack.title[1])}</span>
          </h2>
        </Reveal>

        <div className="mt-16 divide-y-2 divide-dashed divide-paper/10">
          {stack.map((cat, i) => (
            <Reveal key={cat.title.en} delay={i * 50}>
              <div className="grid gap-5 py-7 md:grid-cols-[240px_1fr] md:items-center">
                <h3 className={cn('display text-2xl', accentText[cat.accent])}>{t(cat.title)}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, j) => (
                    <li
                      key={item}
                      className={cn(
                        'chip bg-ink !text-xs transition-transform hover:rotate-0 hover:scale-110',
                        chipTilt[(i + j) % chipTilt.length],
                        accentBorder[cat.accent],
                        'text-paper',
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
