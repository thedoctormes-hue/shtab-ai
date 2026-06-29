'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface TechCategory {
  name: string;
  technologies: string[];
  icon: string;
}

const techCategories: TechCategory[] = [
  {
    name: 'AI & ML',
    icon: '�',
    technologies: ['OpenClaw', 'ONNX Runtime', 'FAISS', 'EmbeddingGemma', 'Ollisper'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    technologies: ['Python', 'FastAPI', 'Node.js', 'Go', 'TypeScript', 'Telegram Bot API'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    name: 'Data & Storage',
    icon: '📊',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'FAISS', 'JSON Vault', 'WebDAV'],
  },
  {
    name: 'DevOps',
    icon: '�️',
    technologies: ['Docker', 'GitHub Actions', 'systemd', 'nginx', 'SSH', 'Bash'],
  },
  {
    name: 'Security',
    icon: '🔐',
    technologies: ['HashiCorp Vault', 'SSL/TLS', 'JWT', 'OAuth 2.0', 'API Keys', 'Encryption'],
  },
];

const highlights = [
  {
    title: 'Масштабируемость',
    desc: 'От 1 до 1000 агентов без переделки архитектуры',
    icon: '📐',
  },
  {
    title: 'Производительность',
    desc: 'ONNX inference <50ms, холодный старт <12с',
    icon: '�',
  },
  {
    title: 'Надёжность',
    desc: '24/7 мониторинг, автоперезапуск, watchdog',
    icon: '🛡️',
  },
];

export function TechStack() {
  const t = useTranslations('techstack');

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
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="tech" aria-labelledby="techstack-heading">
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
          <h2 id="techstack-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-lg text-gray300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          role="list"
          aria-label="Technology stack categories"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              role="listitem"
              aria-label={category.name}
              className="glass p-6 rounded-2xl group relative overflow-hidden"
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 0 40px rgba(124, 58, 237, 0.2), 0 0 80px rgba(6, 182, 212, 0.08)',
                borderColor: 'rgba(124, 58, 237, 0.35)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {category.name}
                  </h3>
                </div>

                {/* Technologies — tech-item style */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-item font-mono text-xs text-mid-grey border border-dark-border px-3 py-1.5 rounded-lg bg-deep-black/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Highlights */}
        <motion.div
          className="mt-16 glass-strong p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-400 mb-6 text-center">
            Почему наш стек?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {item.icon}
                </div>
                <h5 className="text-base font-semibold text-white group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h5>
                <p className="mt-1 text-sm text-gray300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
