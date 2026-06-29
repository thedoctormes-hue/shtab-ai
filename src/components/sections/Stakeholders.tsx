'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  emoji: string;
  description: string;
}

const founder: TeamMember = {
  id: 0,
  name: 'Евгений Московский',
  role: 'ЗавЛаб / Founder',
  emoji: '👨‍💼',
  description: 'Visionary leader driving AI innovation — DoctorMES, Michi, Безумный Доктор',
};

const agents: TeamMember[] = [
  { id: 1, name: 'Котолизатор', role: 'Координатор', emoji: '🐱', description: 'Координатор лаборатории — оркестрирует задачи между агентами' },
  { id: 2, name: 'Мангуст', role: 'Аналитик', emoji: '🐾', description: 'Аналитик — глубокий анализ данных, архитектурные ревью' },
  { id: 3, name: 'Сова', role: 'Разработчик', emoji: '�', description: 'Разработчик — код, тесты, коммиты, самый активный коммиттер' },
  { id: 4, name: 'Ворон', role: 'Патруль', emoji: '�‍�', description: 'Мониторинг и патруль — следит за здоровьем сервисов 24/7' },
  { id: 5, name: 'Муравей', role: 'Инфраструктура', emoji: '🐜', description: 'Инфраструктура — сборка, деплой, Docker, CI/CD' },
  { id: 6, name: 'Бестия', role: 'Снабжение', emoji: '�', description: 'Снабжение — управление закупками и расходными материалами' },
  { id: 7, name: 'Штрейкбрехер', role: 'Fullstack', emoji: '🦠', description: 'Fullstack-разработчик — от бэкенда до фронтенда' },
  { id: 8, name: 'Доминика', role: 'Стратег', emoji: '🦅', description: 'Стратег — сканирование горизонтов и координация разведки' },
];

export function Stakeholders() {
  const t = useTranslations('stakeholders');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="team" aria-labelledby="stakeholders-heading">
      {/* Section Divider */}
      <div className="section-divider mb-24" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="stakeholders-heading"
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-lg text-gray300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Founder */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-sm font-mono font-medium uppercase tracking-[0.2em] text-violet-400 mb-8 text-center">
            {t('founder')}
          </h3>
          <motion.div
            role="listitem"
            aria-label={founder.name}
            className="max-w-md mx-auto glass-strong p-8 rounded-2xl text-center group"
            whileHover={{
              y: -8,
              boxShadow: '0 0 40px rgba(124, 58, 237, 0.3), 0 0 80px rgba(124, 58, 237, 0.1)',
              borderColor: 'rgba(124, 58, 237, 0.5)',
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Glow ring */}
            <div className="relative inline-block mb-4">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" aria-hidden="true" />
              <div className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">{founder.emoji}</div>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
              {founder.name}
            </h4>
            <p className="font-mono text-sm text-violet-400 font-medium mb-3">{founder.role}</p>
            <p className="text-gray300 text-sm leading-relaxed">{founder.description}</p>
          </motion.div>
        </motion.div>

        {/* AI Agents */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-sm font-mono font-medium uppercase tracking-[0.2em] text-violet-400 mb-8 text-center">
            {t('agents')}
          </h3>
          <motion.div
            role="list"
            aria-label="AI Agents"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                role="listitem"
                aria-label={agent.name}
                className="process-step glass p-6 rounded-2xl cursor-pointer text-center group relative overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 40px rgba(124, 58, 237, 0.2), 0 0 80px rgba(6, 182, 212, 0.1)',
                  borderColor: 'rgba(124, 58, 237, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                {/* Process step dot */}
                <div
                  className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gray200 group-hover:bg-violet-500 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(124,58,237,0.6)]"
                  aria-hidden="true"
                />

                {/* Agent number */}
                <div className="absolute top-3 right-3 font-mono text-[0.65rem] text-mid-grey group-hover:text-violet-400 transition-colors duration-300" aria-hidden="true">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {agent.emoji}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:gradient-text transition-all duration-300">
                    {agent.name}
                  </h4>
                  <p className="font-mono text-xs text-violet-400 font-medium mb-3 uppercase tracking-wider">
                    {agent.role}
                  </p>
                  <p className="text-gray300 text-xs leading-relaxed">{agent.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
