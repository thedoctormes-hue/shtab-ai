"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { t } = useI18n();

  const stats = [
    { value: "8", label: t("stats.agents") },
    { value: "23", label: t("stats.projects") },
    { value: "627", label: t("stats.tests") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dark-accent/5 dark:bg-dark-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dark-accent/20 dark:border-dark-accent/30 bg-dark-accent/5 dark:bg-dark-accent/10 mb-8"
          >
            <Sparkles size={14} className="text-dark-accent" />
            <span className="text-sm font-medium text-light-accent dark:text-dark-accent">
              AI Laboratory
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-light-text dark:text-dark-text">{t("title")}</span>
            <br />
            <span className="text-light-accent dark:text-dark-accent">{t("titleAccent")}</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-light-muted dark:text-dark-muted mb-10">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#contacts"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-light-accent dark:bg-dark-accent text-white font-semibold text-lg hover:opacity-90 transition-all shadow-lg shadow-light-accent/20 dark:shadow-dark-accent/20"
            >
              {t("cta.primary")}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-semibold text-lg hover:border-light-accent dark:hover:border-dark-accent transition-colors"
            >
              {t("cta.secondary")}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl sm:text-4xl font-bold text-light-accent dark:text-dark-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-light-muted dark:text-dark-muted mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
