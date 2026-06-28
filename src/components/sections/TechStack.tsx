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
    name: 'Machine Learning',
    icon: '🧠',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'LightGBM', 'ONNX'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    technologies: ['Python', 'FastAPI', 'Django', 'Node.js', 'Go', 'Rust'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    name: 'Data & Storage',
    icon: '📊',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Apache Spark', 'Hadoop'],
  },
  {
    name: 'DevOps & Cloud',
    icon: '☁️',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Terraform'],
  },
  {
    name: 'Security',
    icon: '🔐',
    technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'HIPAA', 'GDPR', 'Encryption'],
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
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
                <h3 className="text-xl font-bold text-primaryText group-hover:text-accentCyan transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-accentCyan/10 text-accentCyan text-xs font-semibold rounded-full hover:bg-accentCyan hover:text-background transition-all cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
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
          <h3 className="text-2xl font-bold text-accentCyan mb-6">Why Our Stack?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Scalability', description: 'Built to handle millions of requests per second' },
              { title: 'Performance', description: 'Optimized for sub-100ms response times' },
              { title: 'Reliability', description: '99.99% uptime with automatic failover' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-4 border border-accentCyan/30 rounded-lg"
                whileHover={{ borderColor: '#00E5FF' }}
              >
                <h4 className="text-lg font-bold text-primaryText mb-2">{feature.title}</h4>
                <p className="text-gray300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
