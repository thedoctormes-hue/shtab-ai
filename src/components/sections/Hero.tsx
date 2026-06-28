'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AnimatedGradient } from '../animations/AnimatedGradient';
import { ParticleBackground } from '../animations/ParticleBackground';

export function Hero() {
  const t = useTranslations('hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">
      {/* Background animations */}
      <ParticleBackground />
      <AnimatedGradient />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primaryText leading-tight"
            variants={itemVariants}
          >
            {t('title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('subtitle')}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 py-8"
            variants={itemVariants}
          >
            {[
              { label: t('stats.agents'), value: '8' },
              { label: t('stats.projects'), value: '23' },
              { label: t('stats.tests'), value: '600+' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-accentCyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-accentCyan to-purple-600 text-background font-bold rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('cta')}
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-accentCyan text-accentCyan font-bold rounded-lg hover:bg-accentCyan hover:text-background transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accentCyan rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-accentCyan rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
