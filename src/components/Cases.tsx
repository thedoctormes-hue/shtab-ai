"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const caseIds = ["shtab", "medical", "infra"] as const;

export function Cases() {
  const { t } = useI18n();

  return (
    <section id="cases" className="py-24 relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseIds.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-light-accent/50 dark:hover:border-dark-accent/50 hover:shadow-lg hover:shadow-light-accent/5 dark:hover:shadow-dark-accent/5 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-light-accent/10 dark:bg-dark-accent/10">
                  <ArrowRight size={18} className="text-light-accent dark:text-dark-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text">
                  {t(`items.${id}.title`)}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-light-accent dark:text-dark-accent">
                    {t("problem")}
                  </span>
                  <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                    {t(`items.${id}.problem`)}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-light-accent dark:text-dark-accent">
                    {t("solution")}
                  </span>
                  <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                    {t(`items.${id}.solution`)}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-green-500">
                    {t("result")}
                  </span>
                  <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                    {t(`items.${id}.result`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
