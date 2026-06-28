'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { AnimatedGradient } from '../animations/AnimatedGradient';
import { ParticleBackground } from '../animations/ParticleBackground';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [titleText, setTitleText] = useState(t('title'));

  // Stagger animation for headline characters
  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    const text = titleText;
    el.innerHTML = '';
    const chars = text.split('').map((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(30px)';
      el.appendChild(span);
      return span;
    });

    const timer = setTimeout(() => {
      chars.forEach((span, i) => {
        requestAnimationFrame(() => {
          span.style.transition = 'opacity 0.04s ease-out, transform 0.04s ease-out';
          span.style.transitionDelay = `${i * 0.03}s`;
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        });
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [titleText]);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden" id="hero">
      {/* Background animations */}
      <div aria-hidden="true">
        <ParticleBackground />
        <AnimatedGradient />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-[clamp(1rem,4vw,3rem)] text-center">
        <h1
          ref={headlineRef}
          id="hero-heading"
          className="font-display text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] tracking-[-0.02em] shimmer-text"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          className="mt-6 text-lg text-light-grey max-w-[600px] mx-auto"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
        >
          {[
            { label: t('stats.agents'), value: '8' },
            { label: t('stats.projects'), value: '23' },
            { label: t('stats.tests'), value: '600+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-electric-teal leading-none tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium uppercase tracking-[0.05em] text-light-grey">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleExploreClick}
            className="flex items-center gap-2 bg-neon-cyan text-deep-black font-semibold text-sm tracking-[0.02em] px-7 py-3.5 rounded-lg hover:bg-[#0891B2] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
          >
            {t('cta')}
            <ArrowDown size={16} />
          </button>
          <button
            onClick={handleContactClick}
            className="bg-transparent border border-neon-cyan text-neon-cyan font-semibold text-sm tracking-[0.02em] px-7 py-3.5 rounded-lg hover:bg-[rgba(6,182,212,0.1)] hover:shadow-[0_0_16px_rgba(6,182,212,0.15)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-40"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-[2px] h-8 bg-light-grey" />
      </motion.div>
    </section>
  );
}
