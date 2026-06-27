"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";

const agentKeys = [
  { id: "kotolizator", color: "#00E5FF" },
  { id: "myrmex", color: "#4ADE80" },
  { id: "bestia", color: "#F97316" },
  { id: "streikbrecher", color: "#A78BFA" },
  { id: "sova", color: "#F472B6" },
  { id: "voron", color: "#FBBF24" },
  { id: "dominica", color: "#60A5FA" },
  { id: "mangust", color: "#34D399" },
] as const;

export function Stakeholders() {
  const { t } = useI18n();

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
          className="max-w-2xl mx-auto mb-16 p-8 rounded-2xl bg-gradient-to-br from-light-accent/5 to-transparent dark:from-dark-accent/10 dark:to-transparent border border-light-border dark:border-dark-border"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-light-accent dark:bg-dark-accent text-white font-heading text-2xl font-bold">
              ЗЛ
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-light-text dark:text-dark-text">
                {t("lead.name")}
              </h3>
              <p className="text-sm font-medium text-light-accent dark:text-dark-accent">
                {t("lead.role")}
              </p>
            </div>
          </div>
          <p className="text-light-muted dark:text-dark-muted">
            {t("lead.desc")}
          </p>
        </motion.div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agentKeys.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-light-accent/50 dark:hover:border-dark-accent/50 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-heading text-lg font-bold mb-4"
                style={{ backgroundColor: agent.color }}
              >
                {agent.id[0].toUpperCase()}
              </div>
              <h4 className="font-medium text-light-text dark:text-dark-text mb-1">
                {t(`agents.${agent.id}.name`)}
              </h4>
              <p className="text-xs font-semibold text-light-accent dark:text-dark-accent mb-2 uppercase tracking-wider">
                {t(`agents.${agent.id}.role`)}
              </p>
              <p className="text-sm text-light-muted dark:text-dark-muted">
                {t(`agents.${agent.id}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
