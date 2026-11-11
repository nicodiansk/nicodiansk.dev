'use client';

import { pillars, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Eyebrow, Reveal } from './primitives';
import { accentBorder, accentText, cn, tornClip } from '@/lib/utils';

const tilt = ['-rotate-[1.2deg]', 'rotate-[0.8deg]', '-rotate-[0.6deg]', 'rotate-[1.6deg]'];

export default function Pillars() {
  const { t } = useLang();
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
      <Reveal>
        <Eyebrow>{t(ui.whatIDo.eyebrow)}</Eyebrow>
        <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">
          <span className="block text-paper">{t(ui.whatIDo.title[0])}</span>
          <span className="block text-pink">{t(ui.whatIDo.title[1])}</span>
        </h2>
        <p className="mt-6 max-w-xl text-paper/75">{t(ui.whatIDo.sub)}</p>
      </Reveal>

      <div className="relative mt-16">
        {/* paint smear behind the cards */}
        <div
          aria-hidden
          className="absolute inset-x-[-3%] bottom-[-14%] hidden lg:block h-[45%] bg-gradient-to-r from-pink-deep/70 via-teal-deep/80 to-mustard-deep/60"
          style={{ filter: 'url(#rough-strong)' }}
        />
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const inverted = p.accent === 'cream';
            return (
              <Reveal key={p.num} delay={i * 90}>
                <article
                  className={cn(
                    'h-full px-6 pb-10 pt-10 transition-transform duration-300 hover:rotate-0 hover:-translate-y-1',
                    tilt[i],
                    inverted ? 'bg-paper text-ink' : 'bg-coal text-paper',
                  )}
                  style={{ clipPath: tornClip(i + 3) }}
                >
                  <div className={cn('font-display text-5xl', inverted ? 'text-pink' : accentText[p.accent])}>{p.num}</div>
                  <span
                    className={cn(
                      'chip mt-5',
                      inverted ? 'border-pink text-pink' : [accentBorder[p.accent], accentText[p.accent]],
                    )}
                  >
                    {t(p.tag)}
                  </span>
                  <h3 className="display mt-5 text-2xl leading-[1.02]">{t(p.title)}</h3>
                  <p className={cn('mt-4 text-sm leading-relaxed', inverted ? 'text-ink/75' : 'text-paper/70')}>{t(p.body)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
