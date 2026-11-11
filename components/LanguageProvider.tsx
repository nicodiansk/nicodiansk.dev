'use client';

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';
import type { L, Lang } from '@/data/content';

/* Tiny external store: server/hydration render is always EN, the client then switches to the stored or browser language. */
const listeners = new Set<() => void>();
let current: Lang | null = null;

function readInitial(): Lang {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'it') return stored;
  } catch {}
  return navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en';
}

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
};
const getSnapshot = (): Lang => (current ??= readInitial());
const getServerSnapshot = (): Lang => 'en';

function writeLang(l: Lang) {
  current = l;
  try {
    localStorage.setItem('lang', l);
  } catch {}
  listeners.forEach((cb) => cb());
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (text: L) => string };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback((text: L) => text[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang: writeLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
