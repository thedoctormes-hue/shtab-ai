"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_KEYS = ["projects", "team", "architecture", "cases", "tech", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (key: string) => {
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[clamp(1rem,4vw,3rem)] h-[70px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl font-bold flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none rounded-md"
            aria-label="DoctorM&Ai — back to top"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <circle cx="14" cy="14" r="12" stroke="url(#navLogoGrad)" strokeWidth="2" />
              <circle cx="14" cy="14" r="4" fill="url(#navLogoGrad)" />
              <line x1="14" y1="2" x2="14" y2="10" stroke="url(#navLogoGrad)" strokeWidth="1.5" />
              <line x1="14" y1="18" x2="14" y2="26" stroke="url(#navLogoGrad)" strokeWidth="1.5" />
              <line x1="2" y1="14" x2="10" y2="14" stroke="url(#navLogoGrad)" strokeWidth="1.5" />
              <line x1="18" y1="14" x2="26" y2="14" stroke="url(#navLogoGrad)" strokeWidth="1.5" />
              <defs>
                <linearGradient id="navLogoGrad" x1="0" y1="0" x2="28" y2="28">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
            <span className="gradient-text">
              DoctorM&amp;Ai
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                role="menuitem"
                onClick={() => scrollTo(key)}
                className="nav-link text-sm font-medium uppercase tracking-wide text-light-grey hover:text-white focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none transition-colors duration-300 rounded-sm px-1"
              >
                {t(`${key}`)}
              </button>
            ))}
          </div>

          {/* Locale + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Language Switch — glassmorphism pills */}
            <div className="hidden md:flex items-center gap-1" role="group" aria-label="Language selector">
              <Link
                href="/ru"
                className={`lang-pill px-3 py-1.5 rounded-full text-xs font-mono font-medium ${
                  locale === "ru" ? "active" : "text-white"
                }`}
                aria-label="Switch to Russian"
                aria-pressed={locale === "ru"}
              >
                RU
              </Link>
              <Link
                href="/en"
                className={`lang-pill px-3 py-1.5 rounded-full text-xs font-mono font-medium ${
                  locale === "en" ? "active" : "text-white"
                }`}
                aria-label="Switch to English"
                aria-pressed={locale === "en"}
              >
                EN
              </Link>
            </div>

            {/* CTA Button — magnetic gradient */}
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex magnetic-btn px-5 py-2 rounded-full text-sm font-semibold text-white focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
              aria-label="Contact us"
            >
              {t("contact")}
            </button>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none rounded-md p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — glassmorphism overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Glass background */}
          <div className="absolute inset-0 glass-strong" />

          {/* Close button */}
          <button
            className="absolute top-5 right-5 text-white z-10 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none rounded-md p-1"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {/* Nav links */}
          <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-6">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="text-2xl font-semibold uppercase text-white tracking-wide focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none transition-colors duration-200 hover:text-neon-cyan"
              >
                {t(`${key}`)}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="magnetic-btn mt-4 px-8 py-3 rounded-full text-lg font-bold text-white focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
            >
              <span className="gradient-text">{t("contact")}</span>
            </button>

            {/* Mobile language pills */}
            <div className="flex items-center gap-2 mt-4" role="group" aria-label="Language selector">
              <Link
                href="/ru"
                onClick={() => setMobileOpen(false)}
                className={`lang-pill px-4 py-2 rounded-full text-sm font-mono font-medium ${
                  locale === "ru" ? "active" : "text-white"
                }`}
                aria-label="Switch to Russian"
              >
                RU
              </Link>
              <Link
                href="/en"
                onClick={() => setMobileOpen(false)}
                className={`lang-pill px-4 py-2 rounded-full text-sm font-mono font-medium ${
                  locale === "en" ? "active" : "text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
