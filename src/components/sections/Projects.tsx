'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'medicine' | 'infrastructure' | 'services' | 'tools';
  image: string;
}

const projects: Project[] = [
  { id: 1, title: 'СнабЛаб', description: 'Система управления закупками лабораторных расходных материалов', category: 'services', image: '🧪' },
  { id: 2, title: 'cheque-bot', description: 'Telegram-бот для автоматизации бухгалтерии с AI-парсингом чеков', category: 'services', image: '🧾' },
  { id: 3, title: 'msk-gastro-digest-bot', description: 'Телеграм-бот для гастроэнтерологических дайджестов', category: 'medicine', image: '🏥' },
  { id: 4, title: 'SNZK', description: 'Система учёта и контроля санитарных норм', category: 'medicine', image: '🔬' },
  { id: 5, title: 'zprr-tracker', description: 'Трекер зубных протоколов реставрации', category: 'medicine', image: '🦷' },
  { id: 6, title: 'stenographer', description: 'Голосовой Telegram-бот: аудио → структурированный текст', category: 'services', image: '🎙️' },
  { id: 7, title: 'autoexpert', description: 'SaaS-платформа для автоэкспертизы', category: 'services', image: '🚗' },
  { id: 8, title: 'hype-pilot', description: 'Контент-система для автоматизации публикаций', category: 'services', image: '📈' },
  { id: 9, title: 'mail-daemon', description: 'IMAP-to-Telegram агрегатор с AI-карточками писем', category: 'infrastructure', image: '📧' },
  { id: 10, title: 'lab-vault', description: 'Хранилище секретов и конфигураций лаборатории', category: 'tools', image: '🔐' },
  { id: 11, title: 'free-api-hunter', description: 'Поиск и мониторинг бесплатных API', category: 'tools', image: '🔍' },
  { id: 12, title: 'myrmex-control', description: 'Дашборд мониторинга лаборатории', category: 'infrastructure', image: '📊' },
];

export function Projects() {
  const t = useTranslations('projects');
  const [activeCategory, setActiveCategory] = useState<'all' | 'medicine' | 'infrastructure' | 'services' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'medicine', label: t('categories.medicine') },
    { id: 'infrastructure', label: t('categories.infrastructure') },
    { id: 'services', label: t('categories.services') },
    { id: 'tools', label: t('categories.tools') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="projects">
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

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-accentCyan text-background'
                  : 'bg-gray100 text-primaryText hover:border-accentCyan border border-transparent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group glassmorphism p-6 rounded-xl hover:border-accentCyan transition-all cursor-pointer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{project.image}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primaryText mb-2 group-hover:text-accentCyan transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray300 text-sm mb-4">{project.description}</p>

              {/* Category Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs px-3 py-1 bg-accentCyan/10 text-accentCyan rounded-full">
                  {project.category}
                </span>
                <motion.div
                  className="text-accentCyan opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
