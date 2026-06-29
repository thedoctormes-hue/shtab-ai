'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  filterCategory: string;
  icon: string;
}

const filterTabs = [
  { id: 'All', label: 'All' },
  { id: 'Медицина', label: 'Медицина' },
  { id: 'Инфраструктура', label: 'Инфраструктура' },
  { id: 'AI Сервисы', label: 'AI Сервисы' },
  { id: 'Инструменты', label: 'Инструменты' },
];

const projects: Project[] = [
  { id: 1, title: 'СнабЛаб', description: 'Система управления закупками лабораторных расходных материалов', category: 'services', filterCategory: 'AI Сервисы', icon: '🧪' },
  { id: 2, title: 'cheque-bot', description: 'Telegram-бот для автоматизации бухгалтерии с AI-парсингом чеков', category: 'services', filterCategory: 'AI Сервисы', icon: '🧾' },
  { id: 3, title: 'msk-gastro-digest-bot', description: 'Телеграм-бот для гастроэнтерологических дайджестов', category: 'medicine', filterCategory: 'Медицина', icon: '🏥' },
  { id: 4, title: 'SNZK', description: 'Система учёта и контроля санитарных норм', category: 'medicine', filterCategory: 'Медицина', icon: '🔬' },
  { id: 5, title: 'zprr-tracker', description: 'Трекер зубных протоколов реставрации', category: 'medicine', filterCategory: 'Медицина', icon: '🦷' },
  { id: 6, title: 'stenographer', description: 'Голосовой Telegram-бот: аудио → структурированный текст', category: 'services', filterCategory: 'AI Сервисы', icon: '🎙️' },
  { id: 7, title: 'autoexpert', description: 'SaaS-платформа для автоэкспертизы', category: 'services', filterCategory: 'AI Сервисы', icon: '🚗' },
  { id: 8, title: 'hype-pilot', description: 'Контент-система для автоматизации публикаций', category: 'services', filterCategory: 'AI Сервисы', icon: '📈' },
  { id: 9, title: 'mail-daemon', description: 'IMAP-to-Telegram агрегатор с AI-карточками писем', category: 'infrastructure', filterCategory: 'Инфраструктура', icon: '📧' },
  { id: 10, title: 'lab-vault', description: 'Хранилище секретов и конфигураций лаборатории', category: 'tools', filterCategory: 'Инструменты', icon: '🔐' },
  { id: 11, title: 'free-api-hunter', description: 'Поиск и мониторинг бесплатных API', category: 'tools', filterCategory: 'Инструменты', icon: '🔍' },
  { id: 12, title: 'myrmex-control', description: 'Дашборд мониторинга лаборатории', category: 'infrastructure', filterCategory: 'Инфраструктура', icon: '📊' },
];

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Projects() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="projects" aria-labelledby="projects-heading">
      {/* Section Divider */}
      <div className="section-divider mb-24" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs font-medium uppercase tracking-widest text-violet-400 mb-4 block">
            ПОРТФОЛИО
          </span>
          <h2 id="projects-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Filter Tabs — Glass Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Filter projects by category"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="projects-grid"
                onClick={() => setActiveFilter(tab.id)}
                className={`
                  font-mono text-xs font-medium uppercase px-5 py-2.5 rounded-full transition-all duration-300
                  focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none
                  ${isActive
                    ? 'bg-gradient-to-r from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-transparent border border-white/10 text-light-grey hover:border-violet-400/40 hover:text-white'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          id="projects-grid"
          role="list"
          aria-label="Projects list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={activeFilter}
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              role="listitem"
              aria-label={project.title}
              className="group glass p-6 rounded-2xl relative overflow-hidden cursor-pointer border border-white/5 hover:border-violet-500/30 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.15), 0 0 80px rgba(124, 58, 237, 0.05)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative z-10">
                {/* Icon */}
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {project.icon}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-light-grey leading-relaxed">
                  {project.description}
                </p>

                {/* Footer: Tag + Arrow */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] font-medium uppercase text-violet-400 border border-violet-500/20 px-2.5 py-1 rounded-full">
                    {project.filterCategory}
                  </span>
                  <span className="text-violet-400 font-semibold text-base opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" aria-hidden="true">
                    →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
