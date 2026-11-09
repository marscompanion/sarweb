import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData, SiteData, IPRecord, LocalizedString } from '../data/siteData';
import { i18nData, I18nDictionary } from '../data/i18n';

export type Language = 'en' | 'ru';

export interface AppContextType {
  lang: Language;
  setLang: (newLang: Language) => void;
  t: I18nDictionary;
  db: SiteData;
  getString: (val?: LocalizedString | null) => string;
  selectedPatent: IPRecord | null;
  setSelectedPatent: (pat: IPRecord | null) => void;
  isStructuredDataOpen: boolean;
  setIsStructuredDataOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/ru')) {
        return 'ru';
      }
      const search = new URLSearchParams(window.location.search);
      const urlLang = search.get('lang');
      if (urlLang === 'ru') {
        return 'ru';
      }
      if (urlLang === 'en') {
        return 'en';
      }
    }
    return 'en';
  });

  const [selectedPatent, setSelectedPatent] = useState<IPRecord | null>(null);
  const [isStructuredDataOpen, setIsStructuredDataOpen] = useState(false);

  // Sync document language and title
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      if (lang === 'ru') {
        document.title = 'Саркисян Александр Давидович (Саргсян) — Официальный сайт | КМКВК, Лицей 410, teduza';
      } else {
        document.title = 'Aleksandr Sarkisian (Sargsyan) — Official Personal Website';
      }
    }
  }, [lang]);

  // Listen to browser navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.startsWith('/ru')) {
        setLangState('ru');
      } else {
        setLangState('en');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle language switch seamlessly
  const setLang = (newLang: Language) => {
    try {
      localStorage.setItem('sarkisian_lang', newLang);
    } catch {}

    setLangState(newLang);
    if (typeof window !== 'undefined') {
      const targetUrl = newLang === 'ru' ? '/ru/' : '/';
      window.history.pushState(null, '', targetUrl);
    }
  };

  const getString = (val?: LocalizedString | null): string => {
    if (!val) return '';
    return val[lang] || val.en || '';
  };

  const t = i18nData[lang];

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t,
        db: siteData,
        getString,
        selectedPatent,
        setSelectedPatent,
        isStructuredDataOpen,
        setIsStructuredDataOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
