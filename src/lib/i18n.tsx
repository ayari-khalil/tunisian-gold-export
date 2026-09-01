import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { languages, type LanguageCode } from "@/lib/site";

/**
 * Minimal i18n scaffold. English is the only complete dictionary; other
 * languages intentionally fall back to English until real translations are
 * supplied. No machine translations are shipped.
 */
const dictionaries: Partial<Record<LanguageCode, Record<string, string>>> = {
  en: {
    "cta.quote": "Request a Quote",
    "cta.sample": "Request a Sample",
    "cta.explore": "Explore Our Oil",
  },
};

interface I18nValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
  isTranslated: (code: LanguageCode) => boolean;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  const t = useCallback(
    (key: string, fallback?: string) =>
      dictionaries[language]?.[key] ?? dictionaries.en?.[key] ?? fallback ?? key,
    [language],
  );

  const value = useMemo<I18nValue>(
    () => ({
      language,
      setLanguage,
      t,
      isTranslated: (code) => Boolean(dictionaries[code]),
    }),
    [language, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export { languages };
