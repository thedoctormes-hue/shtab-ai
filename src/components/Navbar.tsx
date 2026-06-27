"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useI18n } from "../lib/i18n";
import Link from "next/link";

const localeNames: Record<string, string> = {
  ru: "Русский",
  en: "English",
};

export function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { key: "projects", href: "#projects" },
    { key: "stakeholders", href: "#stakeholders" },
    { key: "architecture", href: "#architecture" },
    { key: "cases", href: "#cases" },
    { key: "tech", href: "#tech" },
    { key: "contacts", href: "#contacts" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-light-bg/80 dark:bg-dark-bg/80 border-b border-light-border dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-heading text-xl font-bold text-light-accent dark:text-dark-accent">
            DoctorM<span className="text-light-text dark:text-dark-text">&</span>Ai
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-light-muted hover:text-light-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
              >
                {t(`Header.nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-lg text-light-muted hover:text-light-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
              >
                <Globe size={18} />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border shadow-lg overflow-hidden">
                  {(["ru", "en"] as const).map((loc) => (
                    <button
                      key={loc}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        loc === locale
                          ? "bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent"
                          : "text-light-text dark:text-dark-text hover:bg-light-accent/5 dark:hover:bg-dark-accent/5"
                      }`}
                      onClick={() => {
                        setLocale(loc);
                        setLangOpen(false);
                      }}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-light-muted hover:text-light-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-light-muted hover:text-light-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="block py-2 text-sm font-medium text-light-muted hover:text-light-accent dark:text-dark-muted dark:hover:text-dark-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(`Header.nav.${item.key}`)}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
