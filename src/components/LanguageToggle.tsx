"use client";

import { useI18n } from "../lib/i18n";

const localeNames: Record<string, string> = {
  ru: "Русский",
  en: "English",
};

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1">
      {(["ru", "en"] as const).map((loc) => (
        <button
          key={loc}
          onClick={() => setLocale(loc)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            loc === locale
              ? "bg-light-accent dark:bg-dark-accent text-white"
              : "text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
          }`}
        >
          {localeNames[loc]}
        </button>
      ))}
    </div>
  );
}
