'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useRef, useCallback } from 'react';

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

export function Projects() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  const handleFilter = useCallback((filterId: string) => {
    if (filterId === activeFilter || isAnimating.current) return;
    isAnimating.current = true;

    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>('.project-card');

    cards.forEach((card) => {
      card.style.transition = 'opacity 0.25s ease-in, transform 0.25s ease-in, scale 0.25s ease-in';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
    });

    setTimeout(() => {
      setActiveFilter(filterId);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const newCards = grid.querySelectorAll<HTMLElement>('.project-card');
          newCards.forEach((card, i) => {
            card.style.transition = `opacity 0.3s ease-out ${i * 0.05}s, transform 0.3s ease-out ${i * 0.05}s`;
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
          setTimeout(() => { isAnimating.current = false; }, 500);
        });
      });
    }, 250);
  }, [activeFilter]);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="projects">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mt-8">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilter(tab.id)}
              aria-pressed={activeFilter === tab.id}
              className={`font-mono text-xs font-medium uppercase px-4 py-2 rounded-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none ${
                activeFilter === tab.id
                  ? 'bg-neon-cyan text-deep-black'
                  : 'bg-transparent border border-dark-border text-light-grey hover:border-neon-cyan hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          role="list"
          aria-label="Projects list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              role="listitem"
              className="project-card group bg-dark-surface border border-dark-border rounded-xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">{project.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-light-grey leading-relaxed">{project.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[0.7rem] font-medium uppercase text-neon-cyan border border-neon-cyan/30 px-2.5 py-1 rounded">
                  {project.filterCategory}
                </span>
                <span className="text-neon-cyan font-semibold text-base group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
