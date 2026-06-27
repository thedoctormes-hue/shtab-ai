"use client";

import { I18nProvider } from "../lib/i18n";

export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  return (
    <I18nProvider initialLocale={locale as "ru" | "en"}>
      {children}
    </I18nProvider>
  );
}
