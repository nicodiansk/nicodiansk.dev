'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { L, Lang } from '@/data/content';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (text: L) => string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always render EN first so static HTML and hydration match; then pick up the stored/browser choice.
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    let initial: Lang = navigator.language?.toLowerCase().startsWith('it') ? 'it' : 'en';
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'en' || stored === 'it') initial = stored;
    } catch {}
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('lang', l);
    } catch {}
  }, []);

  const t = useCallback((text: L) => text[lang], [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}
