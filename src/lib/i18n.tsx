import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import ruMessages from "../../messages/ru.json";
import enMessages from "../../messages/en.json";

type Locale = "ru" | "en";

export interface I18nContextType {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "ru",
  t: (key: string) => key,
  setLocale: () => {},
});

export function useI18n() {
  return useContext(I18nContext);
}

function getNestedValue(obj: unknown, path: string): string {
  if (!obj || typeof obj !== "object") return path;
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === "object" && key in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  if (typeof current === "string") return current;
  return path;
}

const messages: Record<Locale, Record<string, unknown>> = {
  ru: ruMessages as unknown as Record<string, unknown>,
  en: enMessages as unknown as Record<string, unknown>,
};

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const t = useCallback(
    (key: string) => {
      return getNestedValue(messages[locale], key);
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}
