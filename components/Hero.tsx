'use client';

import { ArrowDown, Download } from 'lucide-react';
import { profile, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Asterisk, Cross, Dots, Headline, Scribble, Sparkle } from './primitives';
import { asset } from '@/lib/utils';

function Collage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      {/* torn paper + paint layers */}
      <div
        className="absolute left-[18%] top-[2%] h-[52%] w-[52%] rounded-full bg-teal"
        style={{ filter: 'url(#rough)' }}
      />
      <div
        className="absolute left-[2%] top-[38%] h-[44%] w-[40%] bg-teal-deep"
        style={{ clipPath: 'polygon(30% 0, 100% 40%, 70% 100%, 0 80%)', filter: 'url(#rough)' }}
      />
      <div
        className="absolute right-[2%] top-[10%] h-[72%] w-[72%] rotate-[8deg] bg-paper"
        style={{ filter: 'url(#rough-strong)' }}
      />
      <div
        className="absolute bottom-[0%] right-[-4%] h-[48%] w-[62%] -rotate-12 rounded-[45%_55%_40%_60%] bg-pink"
        style={{ filter: 'url(#rough-strong)' }}
      />

      {/* portrait */}
      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[-5%] rounded-full bg-ink" style={{ filter: 'url(#rough)' }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(profile.photo)}
          alt="Nicholas Previtali"
          width={900}
          height={900}
          className="relative h-full w-full rounded-full object-cover contrast-[1.08] saturate-[0.9]"
          fetchPriority="high"
        />
        <span className="absolute -left-4 top-[8%] -rotate-12 rounded-sm bg-mustard px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink shadow-[3px_3px_0_0_#070707]">
          Head of AI
        </span>
        <span className="absolute -right-2 bottom-[10%] rotate-6 rounded-sm border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
          ● Bergamo, IT
        </span>
      </div>

      {/* doodles */}
      <Cross className="absolute left-[6%] top-[2%] h-12 w-12 rotate-12 text-pink" />
      <Sparkle className="absolute left-[4%] top-[24%] h-8 w-8 animate-wobble text-paper" />
      <Asterisk className="absolute right-[2%] top-[38%] h-14 w-14 animate-wobble text-ink [animation-delay:-2s]" />
      <Scribble className="absolute bottom-[10%] left-[-2%] w-[42%] text-mustard" />
      <Dots className="absolute bottom-[26%] left-[30%] w-[16%] text-ink" />
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-12">
      <div className="relative z-10">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-teal sm:text-sm">{t(ui.hero.eyebrow)}</p>
        <Headline as="h1" lines={ui.hero.lines} cursor className="text-[clamp(3rem,8.4vw,6.6rem)]" />
        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-paper/85 sm:text-lg">{t(ui.hero.intro)}</p>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a href="#work" className="btn-sticker">
            {t(ui.hero.ctaWork)} <ArrowDown className="h-4 w-4" />
          </a>
          <a href={asset(profile.cv)} download className="btn-ghost">
            {t(ui.hero.ctaCv)} <Download className="h-4 w-4" />
          </a>
        </div>

        <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {ui.stats.map((s) => (
            <div key={s.value + s.label.en} className="border-l-2 border-pink/70 pl-3">
              <dt className="sr-only">{t(s.label)}</dt>
              <dd className="font-display text-3xl text-paper">{s.value}</dd>
              <dd className="mt-1 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-paper/60">{t(s.label)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Collage />
    </section>
  );
}
