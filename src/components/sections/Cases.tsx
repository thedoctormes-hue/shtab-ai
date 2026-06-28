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
    results: '651 тест, production-развёртывание на snablab.shtab-ai.ru',
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

        {/* Case Studies */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              className="glassmorphism p-8 rounded-xl hover:border-accentCyan transition-all group"
              variants={itemVariants}
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side - Info */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{caseStudy.emoji}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-primaryText group-hover:text-accentCyan transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-accentCyan text-sm font-semibold">{caseStudy.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="text-sm font-bold text-gray300 mb-2">Challenge</h4>
                      <p className="text-primaryText">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray300 mb-2">Solution</h4>
                      <p className="text-primaryText">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Right side - Results */}
                <div className="flex flex-col justify-center">
                  <div className="glassmorphism p-6 rounded-lg border-2 border-accentCyan/50">
                    <h4 className="text-sm font-bold text-accentCyan mb-4">Results</h4>
                    <p className="text-2xl font-bold text-primaryText mb-4">{caseStudy.results}</p>
                    <motion.button
                      className="px-6 py-2 bg-accentCyan text-background font-bold rounded-lg hover:shadow-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
