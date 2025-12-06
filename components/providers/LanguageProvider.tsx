// ABOUTME: Language context provider with localStorage persistence for bilingual IT/EN support
// ABOUTME: Auto-detects browser language on first visit, persists preference across sessions

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations from '@/data/translations.json';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Server-side: default to English
    if (typeof window === 'undefined') return 'en';

    // Client-side: check localStorage or browser language
    const stored = localStorage.getItem('language') as Language;
    if (stored) return stored;

    // Auto-detect from browser
    return navigator.language.startsWith('it') ? 'it' : 'en';
  });

  // Persist language preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
