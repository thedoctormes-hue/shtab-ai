'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Architecture() {
  const t = useTranslations('architecture');

  const components = [
    { name: 'AI Agents', icon: '🤖', description: '8 автономных агентов на OpenClaw' },
    { name: 'OpenClaw Gateway', icon: '🚪', description: 'Маршрутизация и оркестрация агентов' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Основная реляционная БД' },
    { name: 'Docker', icon: '🐳', description: 'Контейнеризация и деплой' },
    { name: 'Monitoring', icon: '📊', description: 'Prometheus, Grafana, алертинг' },
    { name: 'Security', icon: '🔐', description: 'Vault, SSL, шифрование' },
  ];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="architecture">
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

        {/* Architecture Diagram */}
        <motion.div
          role="img"
          aria-label="LabDoctorM architecture diagram showing core components: AI Agents, OpenClaw Gateway, PostgreSQL, Docker, Monitoring, and Security"
          className="relative mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Central Hub */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="bg-gradient-to-br from-[rgba(6,182,212,0.1)] to-[rgba(139,92,246,0.1)] border border-neon-cyan/30 rounded-2xl p-8"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 229, 255, 0.3)',
                  '0 0 40px rgba(0, 229, 255, 0.6)',
                  '0 0 20px rgba(0, 229, 255, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-4xl mb-2">🏗️</div>
              <div className="text-xl font-bold text-white">LabDoctorM Core</div>
              <div className="text-sm text-neon-cyan">AI Agents Orchestration</div>
            </motion.div>
          </div>

          {/* Components Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {components.map((component, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-xl hover:border-accentCyan transition-all group"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
                }}
              >
                {/* Connection line animation */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-accentCyan transition-all"
                  animate={{
                    borderColor: ['rgba(0, 229, 255, 0)', 'rgba(0, 229, 255, 0.5)', 'rgba(0, 229, 255, 0)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{component.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {component.name}
                  </h4>
                  <p className="text-gray300 text-sm">{component.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tech Stack Preview */}
        <motion.div
          className="glassmorphism p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-base font-semibold text-white">Технологический стек</h3>
          <div className="flex flex-wrap gap-3 mt-4">
            {['Python', 'Node.js', 'Go', 'PostgreSQL', 'Docker', 'OpenClaw', 'ONNX', 'Redis', 'Nginx', 'TypeScript', 'React', 'FastAPI'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-sm text-mid-grey border border-dark-border px-3.5 py-1.5 rounded hover:border-neon-cyan hover:text-light-grey transition-all duration-200 cursor-default"
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
