'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  emoji: string;
  accent: 'violet' | 'cyan' | 'emerald';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'СнабЛаб',
    description: 'Система управления закупками лабораторных расходных материалов',
    challenge: 'Ручное отслеживание закупок расходников приводило к срывам сроков и перерасходу бюджета',
    solution: 'Автоматизированная система учёта с предиктивной аналитикой потребностей',
    results: '651 тест, production-развёртывание в закрытом контуре',
    emoji: '�',
    accent: 'violet',
  },
  {
    id: 2,
    title: 'autoexpert',
    description: 'SaaS-платформа для автоэкспертизы',
    challenge: 'Автоэксперты тратили часы на составление заключений вручную',
    solution: 'AI-система автоматического формирования экспертных заключений',
    results: 'Release Ready, интеграция с внешними API',
    emoji: '🚗',
    accent: 'cyan',
  },
  {
    id: 3,
    title: 'mail-daemon',
    description: 'IMAP-to-Telegram агрегатор с AI-карточками писем',
    challenge: 'Обработка большого потока писем с анализами и заключениями вручную',
    solution: 'Автоматический парсинт писем из IMAP, AI-структурирование содержимого в Telegram',
    results: 'v6.0, специализированный промпт для медицинских анализов',
    emoji: '📧',
    accent: 'emerald',
  },
];

const accentMap = {
  violet: {
    tag: 'text-violet-400',
    glow: 'from-violet-500/10',
    hoverBorder: 'group-hover:border-violet-500/40',
  },
  cyan: {
    tag: 'text-cyan-400',
    glow: 'from-cyan-400/10',
    hoverBorder: 'group-hover:border-cyan-400/40',
  },
  emerald: {
    tag: 'text-emerald-400',
    glow: 'from-emerald-500/10',
    hoverBorder: 'group-hover:border-emerald-500/40',
  },
};

export function Cases() {
  const t = useTranslations('cases');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="cases" aria-labelledby="cases-heading">
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
          <h2 id="cases-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-lg text-gray300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          role="list"
          aria-label="Case studies"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {caseStudies.map((cs) => {
            const accents = accentMap[cs.accent];
            return (
              <motion.article
                key={cs.id}
                role="listitem"
                aria-label={cs.title}
                className={`group glass p-6 md:p-8 rounded-2xl relative overflow-hidden ${accents.hoverBorder}`}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 40px rgba(124, 58, 237, 0.15), 0 0 80px rgba(6, 182, 212, 0.08)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accents.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${
                  cs.accent === 'violet' ? 'from-violet-500 to-violet-500/0' :
                  cs.accent === 'cyan' ? 'from-cyan-400 to-cyan-400/0' :
                  'from-emerald-500 to-emerald-500/0'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} aria-hidden="true" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                      {cs.emoji}
                    </span>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={16} className={accents.tag} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-1">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-gray300 leading-relaxed mb-5">{cs.description}</p>

                  {/* Divider */}
                  <div className="section-divider opacity-30 my-5" aria-hidden="true" />

                  {/* Process steps */}
                  <div className="space-y-4">
                    <div className="process-step pl-5 relative">
                      <span className={`font-mono text-[0.7rem] font-medium uppercase ${accents.tag}`}>
                        Challenge
                      </span>
                      <p className="text-sm text-gray300 mt-1 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="process-step pl-5 relative">
                      <span className={`font-mono text-[0.7rem] font-medium uppercase ${accents.tag}`}>
                        Solution
                      </span>
                      <p className="text-sm text-gray300 mt-1 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="process-step pl-5 relative">
                      <span className="font-mono text-[0.7rem] font-medium uppercase text-emerald-400">
                        Results
                      </span>
                      <p className="text-sm text-gray300 mt-1 leading-relaxed">{cs.results}</p>
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="mt-6 flex items-center gap-2">
                    <span className={`text-sm font-semibold ${accents.tag} group-hover:underline decoration underline-offset-4`}>
                      Подробнее
                    </span>
                    <span className={`${accents.tag} group-hover:translate-x-1 transition-transform duration-300`} aria-hidden="true">→</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
