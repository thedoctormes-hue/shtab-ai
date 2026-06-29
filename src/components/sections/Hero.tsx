'use client';

import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

/* ─── Variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const floatSphere = (delay: number) => ({
  animate: {
    y: [0, -30, 0],
    x: [0, 15, 0],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 8 + delay * 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  },
});

/* ─── Stat counter (inline) ─── */
function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <motion.div
      className="glass px-6 py-5 flex flex-col items-center min-w-[120px]"
      variants={itemVariants}
      whileHover={{ scale: 1.05, borderColor: 'rgba(124, 58, 237, 0.4)' }}
    >
      <span className="text-3xl md:text-4xl font-bold gradient-text font-display">
        {value}
        {suffix}
      </span>
      <span className="mt-1 text-xs font-mono uppercase tracking-wider text-mid-grey">
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Blur spheres */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-neon-purple/30 blur-[120px]"
          {...floatSphere(0)}
        />
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-96 h-96 rounded-full bg-neon-cyan/30 blur-[120px]"
          {...floatSphere(2)}
        />

        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black/80" />
      </div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 max-w-[900px] mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono uppercase tracking-wider text-light-grey">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {t('status')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.08] tracking-tight text-primaryText"
        >
          <span>{t('titlePrefix')}{' '}</span>
          <span className="gradient-text">{t('titleGradient')}</span>
          <br />
          <span>{t('titleSuffix')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-light-grey/80 max-w-[640px] mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <StatItem value={8} label={t('stats.agents')} />
          <StatItem value={23} label={t('stats.projects')} />
          <StatItem value={600} suffix="+" label={t('stats.tests')} />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            aria-label={t('cta')}
            className="magnetic-btn group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold text-sm tracking-wide shadow-glow-purple hover:shadow-[0_0_60px_rgba(124,58,237,0.4)] transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-neon-purple focus-visible:outline-none"
          >
            <Sparkles size={16} className="opacity-80" />
            {t('cta')}
            <ArrowDown
              size={16}
              className="translate-y-0.5 group-hover:translate-y-1 transition-transform"
            />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            aria-label={t('ctaSecondary')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-dark-border text-light-grey font-semibold text-sm tracking-wide hover:border-neon-purple/50 hover:text-white hover:shadow-glow-purple transition-all duration-300 focus-visible:ring-2 focus-visible:ring-neon-purple focus-visible:outline-none"
          >
            {t('ctaSecondary')}
          </button>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-mid-grey">
            {locale === 'ru' ? 'Прокрутите' : 'Scroll'}
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-mid-grey/50 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
