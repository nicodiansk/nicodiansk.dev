'use client';

import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile, ui } from '@/data/content';
import { useLang } from './LanguageProvider';
import { Logo } from './Nav';
import { Eyebrow, Headline, Reveal } from './primitives';
import { asset } from '@/lib/utils';

export default function Contact() {
  const { t } = useLang();

  const nav = [
    { href: '#top', label: { en: 'home', it: 'home' } },
    { href: '#work', label: ui.nav.work },
    { href: '#experience', label: ui.nav.experience },
    { href: '#stack', label: ui.nav.stack },
    { href: '#about', label: ui.nav.about },
  ];

  const connect = [
    { href: `mailto:${profile.email}`, tag: '@', label: 'Email', color: 'bg-pink' },
    { href: profile.linkedin, tag: 'IN', label: 'LinkedIn', color: 'bg-teal' },
    { href: profile.github, tag: 'GH', label: 'GitHub', color: 'bg-paper' },
    { href: asset(profile.cv), tag: 'CV', label: 'CV (PDF)', color: 'bg-mustard' },
  ];

  return (
    <footer id="contact" className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-12 lg:pt-24">
      <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <Eyebrow glyph="◆">{t(ui.contact.eyebrow)}</Eyebrow>
          <Headline lines={ui.contact.lines} cursor className="mt-5 text-[clamp(2.6rem,7vw,5.6rem)]" />
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href={`mailto:${profile.email}`} className="btn-sticker">
              <Mail className="icon-wiggle h-4 w-4" /> {t(ui.contact.cta)}
            </a>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">{t(ui.contact.note)}</span>
          </div>
          <div className="mt-8 flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-md border-2 border-paper/40 transition-colors hover:border-teal hover:bg-teal hover:text-ink">
              <FaLinkedinIn />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-md border-2 border-paper/40 transition-colors hover:border-pink hover:bg-pink hover:text-ink">
              <FaGithub />
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-2 gap-8 self-end">
          <div>
            <p className="eyebrow !text-paper/50">{t(ui.contact.navigate)}</p>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="font-mono text-sm text-paper/85 transition-colors hover:text-pink">
                    {t(n.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow !text-paper/50">{t(ui.contact.connect)}</p>
            <ul className="mt-5 space-y-3">
              {connect.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-3 font-mono text-sm text-paper/85 transition-colors hover:text-paper"
                  >
                    <span className={`grid h-6 w-7 place-items-center rounded-sm text-[9px] text-ink ${c.color}`}>{c.tag}</span>
                    <span className="group-hover:underline group-hover:underline-offset-4">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
        <Logo />
        <p className="font-mono text-xs text-paper/50">
          © 2026 {profile.name}. {t(ui.contact.rights)}
        </p>
      </div>
    </footer>
  );
}
