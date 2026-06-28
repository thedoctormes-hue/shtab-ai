"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";
import { useState } from "react";

const agentKeys = [
  { id: "kotolizator", color: "#00E5FF", initials: "КТ" },
  { id: "myrmex", color: "#4ADE80", initials: "МР" },
  { id: "bestia", color: "#F97316", initials: "БС" },
  { id: "streikbrecher", color: "#A78BFA", initials: "ШБ" },
  { id: "sova", color: "#F472B6", initials: "СВ" },
  { id: "voron", color: "#FBBF24", initials: "ВР" },
  { id: "dominica", color: "#60A5FA", initials: "ДМ" },
  { id: "mangust", color: "#34D399", initials: "МГ" },
] as const;

export function Stakeholders() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="stakeholders" className="py-24 relative">
      {/* Background accent */}
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

        {/* ЗавЛаб card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16 p-8 rounded-2xl backdrop-blur-md bg-light-card/80 dark:bg-dark-card/80 border border-light-border dark:border-dark-border relative overflow-hidden"
        >
          {/* Glow behind avatar */}
          <span className="absolute -left-10 -top-10 w-40 h-40 rounded-full bg-light-accent/10 dark:bg-dark-accent/20 blur-3xl" />
          <div className="relative flex items-center gap-4 mb-4">
            <div className="relative">
              <span className="absolute inset-0 rounded-2xl bg-light-accent/30 dark:bg-dark-accent/30 blur-xl animate-pulse-slow" />
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-light-accent to-blue-500 dark:from-dark-accent dark:to-purple-500 text-white font-heading text-2xl font-bold shadow-lg shadow-light-accent/20 dark:shadow-dark-accent/20">
                ЗЛ
              </div>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text">
                {t("lead.name")}
              </h3>
              <p className="text-sm font-medium bg-gradient-to-r from-light-accent to-blue-500 dark:from-dark-accent dark:to-purple-400 bg-clip-text text-transparent">
                {t("lead.role")}
              </p>
            </div>
          </div>
          <p className="relative text-light-muted dark:text-dark-muted">
            {t("lead.desc")}
          </p>
        </motion.div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agentKeys.map((agent, i) => {
            const isExpanded = expanded === agent.id;
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setExpanded(isExpanded ? null : agent.id)}
                className="group relative p-5 rounded-xl backdrop-blur-md bg-light-card/70 dark:bg-dark-card/70 border border-light-border dark:border-dark-border hover:border-light-accent/50 dark:hover:border-dark-accent/50 transition-all cursor-pointer overflow-hidden"
              >
                {/* Background glow */}
                <span
                  className="absolute -top-8 -left-8 w-28 h-28 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: agent.color }}
                />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <span
                        className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity"
                        style={{ backgroundColor: agent.color }}
                      />
                      <div
                        className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white font-heading text-lg font-bold shadow-lg"
                        style={{ backgroundColor: agent.color }}
                      >
                        {agent.initials}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-light-text dark:text-dark-text">
                        {t(`agents.${agent.id}.name`)}
                      </h4>
                      <p
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: agent.color }}
                      >
                        {t(`agents.${agent.id}.role`)}
                      </p>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-light-muted dark:text-dark-muted mt-3 pt-3 border-t border-light-border/50 dark:border-dark-border/50">
                      {t(`agents.${agent.id}.desc`)}
                    </p>
                  </motion.div>

                  {/* Always-visible short desc (hidden when expanded) */}
                  {!isExpanded && (
                    <p className="text-sm text-light-muted dark:text-dark-muted mt-2 line-clamp-1">
                      {t(`agents.${agent.id}.desc`)}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
