'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, ui, type Project } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Asterisk, Eyebrow, Reveal, Scribble, Sparkle, GlitchWord } from './primitives';
import { accentBg, accentBorder, accentText, cn, tornClip } from '@/lib/utils';

const tilt = ['-rotate-1', 'rotate-[0.7deg]', '-rotate-[0.4deg]', 'rotate-1'];
const doodles = [Asterisk, Sparkle, Scribble];

function Poster({ p, i }: { p: Project; i: number }) {
  const { t } = useLang();
  const Doodle = doodles[i % doodles.length];
  const hero = p.metrics[0];
  return (
    <div className={cn('relative aspect-[4/3] overflow-hidden sm:aspect-[4/5] rounded-[6px] text-ink', accentBg[p.accent])}>
      <div aria-hidden className="halftone absolute -right-10 -top-10 h-2/3 w-2/3 rotate-12 text-ink/20" />
      <div
        aria-hidden
        className="absolute -bottom-[15%] -left-[10%] h-[55%] w-[80%] rounded-full bg-ink/90"
        style={{ filter: 'url(#rough-strong)' }}
      />
      <Doodle className="boil absolute right-5 top-14 h-12 w-12 text-ink/80 [animation-play-state:paused] group-hover:[animation-play-state:running]" />

      <span className="absolute left-3 top-3 rounded-sm bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
        <span className={accentText[p.accent]}>●</span> {t(p.tag)}
      </span>

      <div className="absolute inset-x-5 bottom-6">
        <div className={cn('font-display text-[2.6rem] sm:text-[3rem] xl:text-[2.5rem] 2xl:text-[2.8rem] leading-none', accentText[p.accent])}>{hero.value}</div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/85">{t(hero.label)}</div>
      </div>

      <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-paper transition-transform duration-300 group-hover:rotate-90">
        <Plus className="h-5 w-5" />
      </span>
    </div>
  );
}

function CaseDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useLang();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) d.showModal();
    if (!project && d.open) d.close();
  }, [project]);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="case m-auto max-h-[92svh] w-[min(760px,calc(100vw-2rem))] overflow-visible bg-transparent p-0 text-paper"
      aria-labelledby="case-title"
    >
      {project && (
        <div className="max-h-[92svh] overflow-y-auto bg-coal px-6 pb-12 pt-12 sm:px-10" style={{ clipPath: tornClip(11, 34, 1.2) }}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={cn('chip', accentBorder[project.accent], accentText[project.accent])}>{t(project.tag)}</span>
              <span className="chip border-paper/30 text-paper/70">{t(project.status)}</span>
            </div>
            <button
              onClick={onClose}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md border-2 border-paper/50 transition-colors hover:border-pink hover:text-pink"
              aria-label={t(ui.work.close)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-paper/60">{t(project.client)}</p>
          <h3 id="case-title" className="display mt-2 text-[clamp(2rem,5vw,3.2rem)] text-paper">
            {t(project.title)}
          </h3>
          <p className="mt-5 font-sans text-[17px] leading-relaxed text-paper/85">{t(project.summary)}</p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.metrics.map((m, i) => (
              <div key={`${i}-${m.value}`} className="rounded-md border-2 border-paper/15 p-4">
                <div className={cn('font-display text-3xl', accentText[project.accent])}>{m.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60">{t(m.label)}</div>
              </div>
            ))}
          </div>

          <h4 className="eyebrow mt-10 text-pink">{'// '}{t(ui.work.challenge)}</h4>
          <p className="mt-3 font-sans leading-relaxed text-paper/80">{t(project.challenge)}</p>

          <h4 className="eyebrow mt-8 text-teal">{'// '}{t(ui.work.solution)}</h4>
          <ul className="mt-3 space-y-3 font-sans leading-relaxed text-paper/85">
            {project.solution.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-[2px] text-teal">+</span>
                <span>{t(s)}</span>
              </li>
            ))}
          </ul>

          <h4 className="eyebrow mt-8 text-mustard">{'// '}{t(ui.work.stack)}</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="chip border-paper/25 text-paper/80">
                {s}
              </span>
            ))}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn-sticker mt-10">
              <FaGithub className="h-4 w-4" /> GitHub <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}

export default function Work() {
  const { t } = useLang();
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-12 lg:py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow glyph="▶">{t(ui.work.eyebrow)}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">
            <span className="block text-paper"><GlitchWord index={1}>{t(ui.work.title[0])}</GlitchWord></span>
            <span className="block text-teal"><GlitchWord index={2}>{t(ui.work.title[1])}</GlitchWord></span>
          </h2>
        </div>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
          {String(projects.length).padStart(2, '0')} / {t({ en: 'projects', it: 'progetti' })}
        </span>
      </Reveal>

      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 4) * 80}>
            <button
              onClick={() => setActive(p)}
              className={cn(
                'group block w-full text-left transition-transform duration-300 hover:-translate-y-1.5 hover:rotate-0',
                tilt[i % tilt.length],
              )}
              aria-haspopup="dialog"
            >
              <Poster p={p} i={i} />
              <div className="mt-4 flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
                <span className={cn('live-dot', accentText[p.accent])} aria-hidden />
                {t(p.status)} <span>·</span> {t(p.client)}
              </div>
              <h3 className="display mt-2 text-xl leading-[1.05] text-paper transition-colors group-hover:text-pink">{t(p.title)}</h3>
              <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-teal">
                {t(ui.work.open)} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <CaseDialog project={active} onClose={() => setActive(null)} />
    </section>
  );
}
