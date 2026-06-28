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
  { id: 3, name: 'Сова', role: 'Разработчик', emoji: '🦉', description: 'Разработчик — код, тесты, коммиты, самый активный коммиттер' },
  { id: 4, name: 'Ворон', role: 'Патруль', emoji: '🐦‍⬛', description: 'Мониторинг и патруль — следит за здоровьем сервисов 24/7' },
  { id: 5, name: 'Муравей', role: 'Инфраструктура', emoji: '🐜', description: 'Инфраструктура — сборка, деплой, Docker, CI/CD' },
  { id: 6, name: 'Бестия', role: 'Снабжение', emoji: '⚡', description: 'Снабжение — управление закупками и расходными материалами' },
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-primaryText mb-4">{t('title')}</h2>
          <p className="text-lg text-gray300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Founder */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-accentCyan mb-8 text-center">{t('founder')}</h3>
          <motion.div
            className="max-w-md mx-auto glassmorphism p-8 rounded-xl text-center hover:border-accentCyan transition-all"
            whileHover={{
              y: -8,
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
            }}
          >
            <div className="text-6xl mb-4">{founder.emoji}</div>
            <h4 className="text-2xl font-bold text-primaryText mb-2">{founder.name}</h4>
            <p className="text-accentCyan font-semibold mb-3">{founder.role}</p>
            <p className="text-gray300">{founder.description}</p>
          </motion.div>
        </motion.div>

        {/* AI Agents */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-accentCyan mb-8 text-center">{t('agents')}</h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                className="group glassmorphism p-6 rounded-xl hover:border-accentCyan transition-all cursor-pointer text-center"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
                }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{agent.emoji}</div>
                <h4 className="text-lg font-bold text-primaryText mb-1 group-hover:text-accentCyan transition-colors">
                  {agent.name}
                </h4>
                <p className="text-accentCyan text-sm font-semibold mb-3">{agent.role}</p>
                <p className="text-gray300 text-xs">{agent.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
