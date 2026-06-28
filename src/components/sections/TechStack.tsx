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
    icon: '🧠',
    technologies: ['OpenClaw', 'ONNX Runtime', 'FAISS', 'EmbeddingGemma', 'Ollama', 'Whisper'],
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
    icon: '☁️',
    technologies: ['Docker', 'GitHub Actions', 'systemd', 'nginx', 'SSH', 'Bash'],
  },
  {
    name: 'Security',
    icon: '🔐',
    technologies: ['HashiCorp Vault', 'SSL/TLS', 'JWT', 'OAuth 2.0', 'API Keys', 'Encryption'],
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="tech">
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
              className="glassmorphism p-6 rounded-xl hover:border-accentCyan transition-all group"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl group-hover:scale-110 transition-transform">{category.icon}</div>
                <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="font-mono text-xs text-mid-grey border border-dark-border px-2.5 py-1 rounded group-hover:border-neon-cyan/50 group-hover:text-light-grey transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Highlights */}
        <motion.div
          className="mt-16 glassmorphism p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-base font-semibold text-white">Почему наш стек?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-6">
            {[
              { title: 'Масштабируемость', desc: 'От 1 до 1000 агентов без переделки архитектуры' },
              { title: 'Производительность', desc: 'ONNX inference <50ms, холодный старт <12с' },
              { title: 'Надёжность', desc: '24/7 мониторинг, автоперезапуск, watchdog' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center max-w-[200px]">
                <h5 className="mt-3 text-base font-semibold text-white">{item.title}</h5>
                <p className="mt-1 text-sm text-light-grey text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
