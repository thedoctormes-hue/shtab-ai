"use client";

import { useI18n } from "../lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-8 border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold text-light-accent dark:text-dark-accent">
              DoctorM&Ai
            </span>
            <span className="text-sm text-light-muted dark:text-dark-muted">
              © 2025
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-light-muted dark:text-dark-muted">
            <span>{t("built")}</span>
            <span className="text-light-border dark:text-dark-border">|</span>
            <span>{t("version")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
