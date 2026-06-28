'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  emoji: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'СнабЛаб',
    description: 'Система управления закупками лабораторных расходных материалов',
    challenge: 'Ручное отслеживание закупок расходников приводило к срывам сроков и перерасходу бюджета',
    solution: 'Автоматизированная система учёта с предиктивной аналитикой потребностей',
    results: '651 тест, production-развёртывание в закрытом контуре',
    emoji: '🧪',
  },
  {
    id: 2,
    title: 'autoexpert',
    description: 'SaaS-платформа для автоэкспертизы',
    challenge: 'Автоэксперты тратили часы на составление заключений вручную',
    solution: 'AI-система автоматического формирования экспертных заключений',
    results: 'Release Ready, интеграция с внешними API',
    emoji: '🚗',
  },
  {
    id: 3,
    title: 'mail-daemon',
    description: 'IMAP-to-Telegram агрегатор с AI-карточками писем',
    challenge: 'Обработка большого потока писем с анализами и заключениями вручную',
    solution: 'Автоматический парсинт писем из IMAP, AI-структурирование содержимого в Telegram',
    results: 'v6.0, специализированный промпт для медицинских анализов',
    emoji: '📧',
  },
];

export function Cases() {
  const t = useTranslations('cases');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="cases">
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

        {/* Case Studies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              className="group bg-dark-surface border border-dark-border rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan"
              variants={itemVariants}
            >
              <span className="text-3xl">{cs.emoji}</span>
              <h3 className="mt-4 text-2xl font-bold text-white">{cs.title}</h3>
              <p className="mt-1 text-sm text-light-grey">{cs.description}</p>

              <div className="border-t border-dark-border my-5" />

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-[0.7rem] font-medium uppercase text-neon-purple">Challenge</span>
                  <p className="text-sm text-light-grey mt-1 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <span className="font-mono text-[0.7rem] font-medium uppercase text-neon-cyan">Solution</span>
                  <p className="text-sm text-light-grey mt-1 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <span className="font-mono text-[0.7rem] font-medium uppercase text-electric-teal">Results</span>
                  <p className="text-sm text-light-grey mt-1 leading-relaxed">{cs.results}</p>
                </div>
              </div>

              <p className="mt-6 text-sm font-semibold text-neon-cyan group-hover:underline">
                Подробнее →
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
