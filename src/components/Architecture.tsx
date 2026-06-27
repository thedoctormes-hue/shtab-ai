"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";

const layerKeys = [
  "presentation",
  "orchestration",
  "services",
  "intelligence",
  "infrastructure",
] as const;

export function Architecture() {
  const { t } = useI18n();

  return (
    <section id="architecture" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Architecture layers */}
        <div className="max-w-3xl mx-auto mb-16">
          {layerKeys.map((layer, i) => (
            <motion.div
              key={layer}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex items-start gap-4 mb-4"
            >
              {/* Connector line */}
              {i < layerKeys.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-light-accent/20 dark:bg-dark-accent/20" />
              )}

              {/* Node */}
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-light-accent/10 dark:bg-dark-accent/10 border border-light-accent/20 dark:border-dark-accent/20">
                <span className="text-sm font-bold text-light-accent dark:text-dark-accent">
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h4 className="font-heading text-lg font-semibold text-light-text dark:text-dark-text">
                  {t(`layers.${layer}.name`)}
                </h4>
                <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                  {t(`layers.${layer}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border"
        >
          <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-4">
            {t("principles.title")}
          </h3>
          <ul className="space-y-3">
            {["0", "1", "2", "3", "4"].map((idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-light-accent dark:bg-dark-accent mt-2" />
                <span className="text-sm text-light-muted dark:text-dark-muted">
                  {t(`principles.items.${idx}`)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
