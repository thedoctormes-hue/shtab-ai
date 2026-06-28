"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";
import { Zap, Heart, Server } from "lucide-react";

const caseIds = ["shtab", "medical", "infra"] as const;

const caseIcons = {
  shtab: Zap,
  medical: Heart,
  infra: Server,
} as const;

const caseColors = {
  shtab: "#00E5FF",
  medical: "#4ADE80",
  infra: "#F97316",
} as const;

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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical gradient line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-light-accent via-purple-500 to-orange-500 dark:from-dark-accent dark:via-purple-400 dark:to-orange-400 opacity-20 sm:-translate-x-px" />

          {caseIds.map((id, i) => {
            const Icon = caseIcons[id];
            const color = caseColors[id];
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 -top-1 z-10">
                  <span className="absolute inset-0 rounded-full blur-md opacity-40" style={{ backgroundColor: color }} />
                  <div className="relative w-4 h-4 rounded-full border-2 border-light-bg dark:border-dark-bg" style={{ backgroundColor: color }}>
                    <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: color }} />
                  </div>
                </div>

                {/* Card */}
                <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}`}>
                  <div className="p-6 rounded-2xl backdrop-blur-md bg-light-card/80 dark:bg-dark-card/80 border border-light-border dark:border-dark-border hover:border-light-accent/50 dark:hover:border-dark-accent/50 hover:shadow-lg transition-all overflow-hidden relative group">
                    {/* Glow accent */}
                    <span className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" style={{ backgroundColor: color }} />

                    <div className="relative flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                        <Icon size={18} style={{ color }} />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text">
                        {t(`items.${id}.title`)}
                      </h3>
                    </div>

                    <div className="relative space-y-4">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
                          {t("problem")}
                        </span>
                        <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                          {t(`items.${id}.problem`)}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>
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
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
