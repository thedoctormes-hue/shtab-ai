'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Architecture() {
  const t = useTranslations('architecture');

  const components = [
    { name: 'AI Agents', icon: '🤖', description: '8 autonomous agents' },
    { name: 'Data Layer', icon: '📊', description: 'Real-time data processing' },
    { name: 'API Gateway', icon: '🚪', description: 'RESTful & GraphQL APIs' },
    { name: 'ML Pipeline', icon: '⚙️', description: 'Model training & inference' },
    { name: 'Security', icon: '🔐', description: 'End-to-end encryption' },
    { name: 'Storage', icon: '💾', description: 'Distributed cloud storage' },
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
          className="relative mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Central Hub */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="glassmorphism p-8 rounded-xl border-2 border-accentCyan"
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
              <div className="text-xl font-bold text-accentCyan">LabDoctorM Core</div>
              <div className="text-sm text-gray300">AI Agents Orchestration</div>
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
                  <h4 className="text-lg font-bold text-primaryText mb-2 group-hover:text-accentCyan transition-colors">
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
          <h3 className="text-2xl font-bold text-accentCyan mb-6">Technology Integration</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['TensorFlow', 'PyTorch', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'].map((tech) => (
              <motion.div
                key={tech}
                className="p-4 bg-gray100 rounded-lg text-center text-primaryText font-semibold hover:bg-accentCyan hover:text-background transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
