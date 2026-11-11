'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { profile, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { asset, cn } from '@/lib/utils';

const links = [
  { href: '#work', label: ui.nav.work },
  { href: '#experience', label: ui.nav.experience },
  { href: '#stack', label: ui.nav.stack },
  { href: '#about', label: ui.nav.about },
];

export function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div className={cn('flex rounded-md border-2 border-pink/80 p-0.5 font-mono text-xs', className)} role="group" aria-label="Language">
      {(['en', 'it'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            'rounded-[3px] px-2 py-1 uppercase tracking-widest transition-colors',
            lang === l ? 'bg-pink text-ink' : 'text-pink hover:text-paper',
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Nicholas Previtali — home">
      <span className="grid h-10 w-10 -rotate-6 place-items-center rounded-md bg-pink font-display text-base text-ink shadow-[3px_3px_0_0_#9E2448] transition-transform group-hover:rotate-6">
        NP
      </span>
      <span className="font-display text-[13px] uppercase leading-[1.05] tracking-tight text-paper">
        Nicholas
        <br />
        Previtali
      </span>
    </a>
  );
}

export default function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'bg-ink/90 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-12">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-mono text-xs uppercase tracking-[0.2em] text-paper/90 transition-colors hover:text-pink">
                {t(l.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <LangToggle />
          <a href={asset(profile.cv)} download className="btn-sticker !px-4 !py-2 !text-xs">
            {t(ui.nav.cv)} <Star className="h-3.5 w-3.5 fill-ink" />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border-2 border-paper/60 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/10 px-4 pb-8 pt-4 md:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="display block text-4xl text-paper hover:text-pink">
                  {t(l.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <LangToggle />
            <a href={asset(profile.cv)} download className="btn-sticker !px-4 !py-2 !text-xs">
              {t(ui.nav.cv)} <Star className="h-3.5 w-3.5 fill-ink" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
