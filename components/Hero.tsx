'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { profile, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Asterisk, Cross, Dots, Headline, Scribble, Sparkle } from './primitives';
import { asset } from '@/lib/utils';

/** Collage piece that pops in (stop-motion) and keeps "boiling" via the animated SVG filter. */
function Piece({ className, style, delay, from = '-14deg', to = '0deg' }: { className: string; style?: CSSProperties; delay: number; from?: string; to?: string }) {
  return (
    <div
      className={`pop-in absolute ${className}`}
      style={{ animationDelay: `${delay}ms`, '--from': from, '--to': to, filter: 'url(#boil)', ...style } as CSSProperties}
    />
  );
}

/** Still JPG for a fast first paint; swaps to the animated glitch loop once the page has loaded. */
function Portrait() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const swap = () => {
      const img = new Image();
      img.onload = () => setAnimated(true);
      img.src = asset('/images/nicholas-loop.webp');
    };
    if (document.readyState === 'complete') swap();
    else window.addEventListener('load', swap, { once: true });
    return () => window.removeEventListener('load', swap);
  }, []);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(animated ? '/images/nicholas-loop.webp' : profile.photo)}
      alt="Nicholas Previtali"
      width={640}
      height={640}
      className="relative h-full w-full rounded-full object-cover contrast-[1.08] saturate-[0.9]"
      fetchPriority="high"
    />
  );
}

function Collage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <Piece delay={150} className="left-[18%] top-[2%] h-[52%] w-[52%] rounded-full bg-teal" />
      <Piece
        delay={260}
        from="20deg"
        className="left-[2%] top-[38%] h-[44%] w-[40%] bg-teal-deep"
        style={{ clipPath: 'polygon(30% 0, 100% 40%, 70% 100%, 0 80%)' }}
      />
      <Piece delay={360} from="-4deg" to="8deg" className="right-[2%] top-[10%] h-[72%] w-[72%] bg-paper" />
      <Piece delay={460} from="10deg" to="-12deg" className="bottom-[0%] right-[-4%] h-[48%] w-[62%] rounded-[45%_55%_40%_60%] bg-pink" />

      {/* portrait */}
      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2">
        <div className="pop-in relative h-full w-full" style={{ animationDelay: '600ms' }}>
          <div className="absolute inset-[-5%] rounded-full bg-ink" style={{ filter: 'url(#boil)' }} />
          <Portrait />
          <span className="boil absolute -left-4 top-[8%] rounded-sm bg-mustard px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink shadow-[3px_3px_0_0_#070707] [--r:-12deg]">
            Head of AI
          </span>
          <span className="absolute -right-2 bottom-[10%] flex rotate-6 items-center gap-2 rounded-sm border-2 border-ink bg-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
            <span className="live-dot text-pink" /> Bergamo, IT
          </span>
        </div>
      </div>

      {/* doodles: stepped “line boil” like hand-drawn animation */}
      <Cross className="boil absolute left-[6%] top-[2%] h-12 w-12 text-pink [--r:12deg]" />
      <Sparkle className="absolute left-[4%] top-[24%] h-8 w-8 animate-wobble text-paper" />
      <Sparkle className="absolute left-[12%] top-[18%] h-3 w-3 animate-wobble text-paper [animation-delay:-3s]" />
      <Asterisk className="spin-step absolute right-[2%] top-[38%] h-14 w-14 text-ink" />
      <Scribble className="boil absolute bottom-[10%] left-[-2%] w-[42%] text-mustard [animation-duration:0.6s]" />
      <Dots className="boil absolute bottom-[26%] left-[30%] w-[16%] text-ink [animation-duration:0.7s]" />
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-12">
      <div className="relative z-10">
        <p className="drop-in mb-6 font-mono text-xs uppercase tracking-[0.22em] text-teal sm:text-sm">{t(ui.hero.eyebrow)}</p>
        <Headline as="h1" lines={ui.hero.lines} cursor entrance className="text-[clamp(3rem,8.4vw,6.6rem)]" />
        <p className="drop-in mt-8 max-w-xl text-[15px] leading-relaxed text-paper/85 sm:text-lg" style={{ animationDelay: '700ms' }}>
          {t(ui.hero.intro)}
        </p>

        <div className="drop-in mt-10 flex flex-wrap items-center gap-5" style={{ animationDelay: '820ms' }}>
          <a href="#work" className="btn-sticker">
            {t(ui.hero.ctaWork)} <ArrowDown className="icon-wiggle h-4 w-4" />
          </a>
          <a href={asset(profile.cv)} download className="btn-ghost">
            {t(ui.hero.ctaCv)} <Download className="icon-wiggle h-4 w-4" />
          </a>
        </div>

        <dl className="drop-in mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4" style={{ animationDelay: '940ms' }}>
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
