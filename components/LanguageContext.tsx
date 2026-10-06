'use client';

import React, { createContext, useContext, useEffect, useSyncExternalStore } from 'react';
import { siteContent, SiteContent } from '@/src/data/content';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_CHANGE_EVENT = 'dk_lang_changed';

function subscribeLanguage(callback: () => void) {
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(LANG_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getClientLanguage(): Language {
  try {
    const saved = localStorage.getItem('dk_lang');
    if (saved === 'fr' || saved === 'en') return saved;
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === 'en') return 'en';
  } catch {
    // fallback if window / storage unavailable
  }
  return 'fr';
}

function getServerLanguage(): Language {
  return 'fr';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeLanguage, getClientLanguage, getServerLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('dk_lang', lang);
    } catch {
      // storage unavailable
    }
    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        content: siteContent[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
