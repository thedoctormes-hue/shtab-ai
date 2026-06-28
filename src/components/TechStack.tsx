"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";

const allTechItems = [
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Go", color: "#00ADD8" },
  { name: "Bash", color: "#4EAA25" },
  { name: "FastAPI", color: "#009688" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Express", color: "#FFFFFF" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redis", color: "#DC382D" },
  { name: "Docker", color: "#2496ED" },
  { name: "systemd", color: "#333333" },
  { name: "Nginx", color: "#009639" },
] as const;

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

        {/* Orbit visualization */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]"
          >
            {/* Center hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 border border-light-accent/20 dark:border-dark-accent/20 flex items-center justify-center backdrop-blur-sm">
              <span className="font-heading text-lg font-bold text-light-accent dark:text-dark-accent">AI</span>
              <span className="absolute inset-0 rounded-full bg-light-accent/5 dark:bg-dark-accent/5 animate-ping" />
            </div>

            {/* Orbit rings */}
            {[0.3, 0.55, 0.78, 0.95].map((scale, ringIdx) => (
              <div
                key={ringIdx}
                className="absolute inset-0 rounded-full border border-light-border/30 dark:border-dark-border/20"
                style={{ transform: `scale(${scale})` }}
              />
            ))}

            {/* Orbiting items */}
            {allTechItems.map((item, i) => {
              const total = allTechItems.length;
              const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
              const radius = i < 4 ? 0.3 : i < 8 ? 0.55 : i < 10 ? 0.78 : 0.95;
              const size = 320; // matches w-[320px]
              const x = size / 2 + Math.cos(angle) * (size / 2) * radius - 20;
              const y = size / 2 + Math.sin(angle) * (size / 2) * radius - 20;

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.3, type: "spring" }}
                  className="absolute w-10 h-10 flex items-center justify-center"
                  style={{ left: `${x}px`, top: `${y}px` }}
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-semibold backdrop-blur-sm border transition-all hover:scale-110 cursor-default"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}30`,
                      color: item.color === "#FFFFFF" ? undefined : item.color,
                    }}
                  >
                    <span className={item.color === "#FFFFFF" ? "text-light-text dark:text-dark-text" : ""}>
                      {item.name.slice(0, 2)}
                    </span>
                  </span>
                  {/* Label below */}
                  <span className="absolute -bottom-5 text-[10px] font-medium text-light-muted dark:text-dark-muted whitespace-nowrap">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Category cards below orbit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl backdrop-blur-md bg-light-card/80 dark:bg-dark-card/80 border border-light-border dark:border-dark-border"
            >
              <h3
                className="font-heading text-lg font-semibold mb-4"
                style={{ color: cat.color }}
              >
                {t(`categories.${cat.id}.name`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => {
                  const techItem = allTechItems.find((t) => t.name === item);
                  return (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-light-border dark:border-dark-border hover:border-light-accent/50 dark:hover:border-dark-accent/50 transition-colors"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
