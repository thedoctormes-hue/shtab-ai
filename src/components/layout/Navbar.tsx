"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

const NAV_KEYS = ["projects", "team", "architecture", "cases", "tech", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("navigation");

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-deep-black/85 backdrop-blur-[12px] border-b border-dark-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[clamp(1rem,4vw,3rem)] h-[70px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-xl font-bold text-white flex items-center gap-2"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
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
            <span>
              <span className="text-neon-cyan font-mono">M</span>
              <span>DoctorM&amp;Ai</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="relative text-sm font-medium uppercase tracking-wide text-light-grey hover:text-white focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none transition-colors duration-300"
              >
                {t(`${key}`)}
              </button>
            ))}
          </div>

          {/* Locale + Mobile */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1 text-xs font-mono">
              <Link href="/ru" className="text-white">RU</Link>
              <span className="text-mid-grey">|</span>
              <Link href="/en" className="text-mid-grey hover:text-white transition-colors">EN</Link>
            </div>
            <button
              className="md:hidden text-white focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-deep-black flex flex-col items-center justify-center gap-8 md:hidden" role="dialog" aria-modal="true">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-2xl font-semibold uppercase text-white tracking-wide focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
            >
              {t(`${key}`)}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
