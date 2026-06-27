"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";

const categories = [
  {
    id: "languages",
    items: ["Python", "TypeScript", "Go", "Bash"],
    color: "#00E5FF",
  },
  {
    id: "frameworks",
    items: ["FastAPI", "React", "Next.js", "Express"],
    color: "#4ADE80",
  },
  {
    id: "databases",
    items: ["PostgreSQL", "Redis"],
    color: "#F97316",
  },
  {
    id: "infrastructure",
    items: ["Docker", "systemd", "Nginx"],
    color: "#A78BFA",
  },
] as const;

export function TechStack() {
  const { t } = useI18n();

  return (
    <section id="tech" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-light-accent/[0.02] to-light-bg dark:from-dark-bg dark:via-dark-accent/[0.02] dark:to-dark-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-light-muted dark:text-dark-muted">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border"
            >
              <h3
                className="font-heading text-lg font-semibold mb-4"
                style={{ color: cat.color }}
              >
                {t(`categories.${cat.id}.name`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-light-border dark:border-dark-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
