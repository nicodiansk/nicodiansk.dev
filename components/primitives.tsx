'use client';

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import type { Accent, L } from '@/data/content';
import { useLang } from './LanguageProvider';
import { accentText, cn } from '@/lib/utils';

/** Small boxed glyph + mono label above each section title. */
export function Eyebrow({ glyph = '★', children, className }: { glyph?: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="grid h-6 w-6 place-items-center rounded-[4px] border-2 border-pink text-[10px] text-pink">{glyph}</span>
      <span className="eyebrow">{children}</span>
    </div>
  );
}

/** Stacked uppercase display headline, each line in its own accent colour. */
export function Headline({
  lines,
  as: Tag = 'h2',
  className,
  cursor = false,
  entrance = false,
}: {
  lines: { text: L; accent: Accent }[];
  as?: 'h1' | 'h2';
  className?: string;
  cursor?: boolean;
  /** stop-motion drop-in on load (hero only) */
  entrance?: boolean;
}) {
  const { t } = useLang();
  return (
    <Tag className={cn('display', className)}>
      {lines.map((line, i) => (
        <span
          key={i}
          className={cn('block', accentText[line.accent], entrance && 'drop-in')}
          style={entrance ? { animationDelay: `${120 + i * 130}ms` } : undefined}
        >
          <GlitchWord index={i}>{t(line.text)}</GlitchWord>
          {cursor && i === lines.length - 1 && <Cursor />}
        </span>
      ))}
    </Tag>
  );
}

/** Wraps text in a rare RGB-split glitch; index staggers the timing so lines never fire together. */
export function GlitchWord({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const durations = [17, 19, 23, 21, 27];
  return (
    <span
      className="glitch-word"
      style={{ '--glitch-dur': `${durations[index % durations.length]}s`, '--glitch-delay': `${-index * 3.7}s` } as CSSProperties}
    >
      {children}
    </span>
  );
}

export function Cursor() {
  return (
    <span aria-hidden className="cursor-blink ml-[0.06em] inline-block text-pink">
      _
    </span>
  );
}

/** Fades children up once they scroll into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn('reveal', className)} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ——— Hand-drawn decorations ——— */

export function Asterisk({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M20 3v34M5 11l30 18M5 29l30-18" />
      </g>
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 2c1.5 10 4 14.5 18 18-14 3.5-16.5 8-18 18-1.5-10-4-14.5-18-18 14-3.5 16.5-8 18-18z" fill="currentColor" />
    </svg>
  );
}

export function Cross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M6 9l29 22M33 6L9 35" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Scribble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden fill="none">
      <path
        d="M4 70c18-30 30-60 38-58s-6 58 6 60 30-62 42-60-4 60 10 62 28-58 40-56-2 50 12 52 24-30 36-40"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Dots({ className }: { className?: string }) {
  const pts = [
    [8, 10], [30, 4], [52, 14], [18, 30], [42, 34], [64, 28], [10, 52], [34, 56], [58, 50],
  ];
  return (
    <svg viewBox="0 0 72 64" className={className} aria-hidden>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="currentColor" />
      ))}
    </svg>
  );
}

/**
 * SVG filters that roughen edges → torn paper / brush look. Mount once.
 * `#boil` re-seeds its noise ~7×/s so shapes using it jitter like hand-drawn stop-motion.
 */
export function RoughFilters() {
  const boilRef = useRef<SVGFETurbulenceElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let seed = 0;
    const id = window.setInterval(() => {
      if (document.hidden || window.scrollY > window.innerHeight * 1.2) return; // only while the hero is on screen
      seed = (seed + 1) % 4;
      boilRef.current?.setAttribute('seed', String(seed + 11));
    }, 140);
    return () => window.clearInterval(id);
  }, []);
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <filter id="rough">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="14" />
        </filter>
        <filter id="rough-strong">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="5" seed="8" />
          <feDisplacementMap in="SourceGraphic" scale="34" />
        </filter>
        <filter id="boil">
          <feTurbulence ref={boilRef} type="fractalNoise" baseFrequency="0.03" numOctaves="4" seed="11" />
          <feDisplacementMap in="SourceGraphic" scale="18" />
        </filter>
      </defs>
    </svg>
  );
}
