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

const layerColors = [
  "#00E5FF",
  "#4ADE80",
  "#F97316",
  "#A78BFA",
  "#FBBF24",
];

export function Architecture() {
  const { t } = useI18n();

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
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

        {/* Animated architecture diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 relative"
        >
          <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {layerColors.map((color, i) => (
                <filter key={`glow-${i}`} id={`glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              ))}
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" className="text-light-accent dark:text-dark-accent" style={{ stopColor: "currentColor" }} />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>

            {/* Center vertical line with animated dash */}
            <line x1="400" y1="60" x2="400" y2="440" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8 4" className="animate-dash-flow" opacity="0.3" />

            {/* Layers */}
            {layerKeys.map((layer, i) => {
              const y = 60 + i * 95;
              const rx = 120;
              return (
                <g key={layer}>
                  {/* Layer rect with glow */}
                  <motion.rect
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    x={400 - rx}
                    y={y}
                    width={rx * 2}
                    height={70}
                    rx={12}
                    fill={layerColors[i]}
                    fillOpacity={0.08}
                    stroke={layerColors[i]}
                    strokeWidth={1.5}
                    strokeOpacity={0.3}
                    style={{ transformOrigin: `${400}px ${y + 35}px` }}
                    filter={`url(#glow-${i})`}
                  />
                  {/* Layer number */}
                  <text
                    x={400 - rx + 30}
                    y={y + 40}
                    fill={layerColors[i]}
                    fontSize={20}
                    fontWeight={700}
                    fontFamily="Oswald, system-ui"
                  >
                    {i + 1}
                  </text>
                  {/* Layer name (English from i18n) */}
                  <text
                    x={400 - rx + 60}
                    y={y + 28}
                    className="fill-light-text dark:fill-dark-text"
                    fontSize={14}
                    fontWeight={600}
                    fontFamily="Oswald, system-ui"
                  >
                    {layer === "presentation" ? "Presentation" :
                     layer === "orchestration" ? "Orchestration" :
                     layer === "services" ? "Services" :
                     layer === "intelligence" ? "Intelligence" : "Infrastructure"}
                  </text>
                  {/* Layer desc (shortened) */}
                  <text
                    x={400 - rx + 60}
                    y={y + 50}
                    className="fill-light-muted dark:fill-dark-muted"
                    fontSize={10}
                    fontFamily="Inter, system-ui"
                  >
                    {layer === "presentation" ? "Next.js, API, WebSocket" :
                     layer === "orchestration" ? "Котолизатор → agents" :
                     layer === "services" ? "Муравей, Бестия, Штрейкбрехер" :
                     layer === "intelligence" ? "Сова, Ворон, Доминика, Мангуст" : "PostgreSQL, Redis, Docker"}
                  </text>

                  {/* Animated connector dots */}
                  {i < layerKeys.length - 1 && (
                    <>
                      <circle cx={400} cy={y + 70 + 12.5} r={3} fill={layerColors[i]} opacity={0.6}>
                        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                      </circle>
                    </>
                  )}
                </g>
              );
            })}

            {/* Side decorative lines */}
            {[0, 1, 2, 3, 4].map((i) => {
              const y = 95 + i * 95;
              const side = i % 2 === 0 ? -1 : 1;
              const startX = side > 0 ? 400 + 120 + 20 : 400 - 120 - 20;
              const endX = side > 0 ? 400 + 120 + 60 : 400 - 120 - 60;
              return (
                <motion.line
                  key={`side-${i}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  x1={startX}
                  y1={y}
                  x2={endX}
                  y2={y}
                  stroke={layerColors[i]}
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-6 rounded-2xl backdrop-blur-md bg-light-card/80 dark:bg-dark-card/80 border border-light-border dark:border-dark-border"
        >
          <h3 className="font-heading text-xl font-semibold text-light-text dark:text-dark-text mb-4">
            {t("principles.title")}
          </h3>
          <ul className="space-y-3">
            {["0", "1", "2", "3", "4"].map((idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: parseInt(idx) * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-light-accent dark:bg-dark-accent mt-2 animate-pulse-slow" style={{ animationDelay: `${parseInt(idx) * 0.3}s` }} />
                <span className="text-sm text-light-muted dark:text-dark-muted">
                  {t(`principles.items.${idx}`)}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
