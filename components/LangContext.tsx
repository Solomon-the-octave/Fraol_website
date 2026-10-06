"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { T, type Lang, type Translations } from "./i18n";
import { P, type PageCopy } from "./pagecopy";

type LangCtx = { lang: Lang; setLang: (l: Lang) => void; t: Translations; p: PageCopy };

const Ctx = createContext<LangCtx>({ lang: "en", setLang: () => {}, t: T.en, p: P.en });

const STORAGE_KEY = "fraol-lang";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore the visitor's choice so it survives navigation between pages.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && saved in T) setLangState(saved);
    } catch {
      /* storage unavailable — stay on English */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return <Ctx.Provider value={{ lang, setLang, t: T[lang], p: P[lang] }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

/* Nav and footer labels live in two string sets: the original translations
   and the page copy added with the approved content guide. One lookup, used
   by both, covers whichever set a route key belongs to. */
export function useLabel() {
  const { t, p } = useLang();
  return (key: string): string => {
    const base = t as unknown as Record<string, unknown>;
    const page = p as unknown as Record<string, unknown>;
    const v = typeof base[key] === "string" ? base[key] : page[key];
    return typeof v === "string" ? v : key;
  };
}
