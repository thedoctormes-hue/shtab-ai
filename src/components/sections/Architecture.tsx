'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface ArchLayer {
  name: string;
  icon: string;
  description: string;
  items: string[];
}

const layers: ArchLayer[] = [
  {
    name: 'AI Agents',
    icon: '🤖',
    description: '8 автономных агентов на OpenClaw',
    items: ['Котолизатор', 'Мангуст', 'Сова', 'Ворон', 'Муравей', 'Бестия'],
  },
  {
    name: 'Gateway',
    icon: '🚪',
    description: 'Маршрутизация и оркестрация',
    items: ['OpenClaw Core', 'Load Balancer', 'Rate Limiter', 'Auth Middleware'],
  },
  {
    name: 'Data Layer',
    icon: '🐘',
    description: 'Хранение и кэширование',
    items: ['PostgreSQL', 'Redis', 'FAISS Vector DB', 'JSON Vault'],
  },
  {
    name: 'Infrastructure',
    icon: '�',
    description: 'Контейнеризация и деплой',
    items: ['Docker', 'CI/CD', 'nginx', 'Linux systemd'],
  },
  {
    name: 'Monitoring',
    icon: '�',
    description: 'Наблюдаемость и алертинг',
    items: ['Prometheus', 'Grafana', 'Health Checks', 'Log Aggregation'],
  },
  {
    name: 'Security',
    icon: '🔐',
    description: 'Безопасность и шифрование',
    items: ['HashiCorp Vault', 'SSL/TLS', 'API Keys', 'Encryption at Rest'],
  },
];

export function Architecture() {
  const t = useTranslations('architecture');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="architecture" aria-labelledby="architecture-heading">
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
          <h2 id="architecture-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-lg text-gray300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Architecture Layers */}
        <motion.div
          role="list"
          aria-label="Architecture layers"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              role="listitem"
              aria-label={layer.name}
              className="glass p-6 rounded-2xl group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.25), 0 0 80px rgba(6, 182, 212, 0.1)',
                borderColor: 'rgba(124, 58, 237, 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Neon glow line on top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              {/* Layer number */}
              <div className="absolute top-4 right-4 font-mono text-[0.65rem] text-mid-grey group-hover:text-cyan-400 transition-colors duration-300" aria-hidden="true">
                L{index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {layer.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {layer.name}
                    </h4>
                    <p className="text-xs text-mid-grey leading-snug mt-0.5">{layer.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[0.65rem] text-mid-grey border border-dark-border px-2 py-0.5 rounded group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Hub — Connecting Visual */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-center">
            <div className="glass-strong p-8 rounded-2xl text-center relative overflow-hidden group">
              {/* Animated border glow */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500 opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-500 animate-gradient-shift" aria-hidden="true" />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl mb-3"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                >
                  🏗️
                </motion.div>
                <div className="font-display text-xl font-bold gradient-text">
                  LabDoctorM Core
                </div>
                <div className="font-mono text-xs text-violet-400 mt-1">
                  AI Agents Orchestration Engine
                </div>
              </div>

              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                <motion.div
                  className="w-32 h-32 rounded-full border border-violet-500/20"
                  animate={{ scale: [1, 1.5, 1.5], opacity: [0.3, 0, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>

          {/* Connecting lines visual */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] hidden lg:block pointer-events-none" aria-hidden="true">
            <div className="section-divider opacity-30" />
          </div>
        </motion.div>

        {/* Tech Stack Bar */}
        <motion.div
          className="glass-strong p-6 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-400 mb-4">
            Full Stack Coverage
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Node.js', 'Go', 'TypeScript', 'PostgreSQL', 'Docker', 'OpenClaw', 'ONNX', 'Redis', 'Nginx', 'React', 'FastAPI', 'FAISS', 'WebDAV'].map((tech) => (
              <span
                key={tech}
                className="tech-item font-mono text-xs text-mid-grey border border-dark-border px-3 py-1.5 rounded-lg bg-deep-black/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
