'use client';

import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const products = ['СнабЛаб', 'autoexpert', 'cheque-bot', 'mail-daemon'];
  const company = [
    { label: 'О нас', href: '#team' },
    { label: 'Кейсы', href: '#cases' },
    { label: 'Архитектура', href: '#architecture' },
    { label: 'Контакты', href: '#contact' },
  ];

  const socials = [
    { Icon: Github, href: 'https://github.com/DoctorMES', label: 'GitHub' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Send, href: 'https://t.me/DoctorMES', label: 'Telegram' },
  ];

  return (
    <footer role="contentinfo" className="relative bg-deep-black border-t border-dark-border">
      {/* Footer top glow */}
      <div className="section-divider mb-0" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-[clamp(1rem,4vw,3rem)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              className="font-display text-xl font-bold flex items-center gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="gradient-text font-mono text-2xl">M</span>
              <span className="gradient-text">DoctorM&amp;Ai</span>
            </motion.div>
            <p className="mt-4 text-sm text-mid-grey leading-relaxed">
              AI-лаборатория, которая работает 24/7, создавая интеллектуальные решения для здравоохранения, бизнеса и государства.
            </p>

            {/* Social links inline on brand */}
            <div className="flex items-center gap-2 mt-5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-dark-border flex items-center justify-center hover:border-violet-500/40 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Footer navigation — products">
            <h4 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-400 mb-4">
              Продукты
            </h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item}>
                  <Link
                    href="#projects"
                    className="nav-link text-sm text-mid-grey hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none rounded"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer navigation — company">
            <h4 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-400 mb-4">
              Компания
            </h4>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="nav-link text-sm text-mid-grey hover:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact CTA */}
          <div>
            <h4 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-violet-400 mb-4">
              Связаться
            </h4>
            <p className="text-sm text-mid-grey mb-4">
              Готовы к сотрудничеству? Напишите нам.
            </p>
            <Link
              href="#contact"
              className="nav-link inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none rounded group"
            >
              Написать
              <span className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-mid-grey">
            &copy; {currentYear} <span className="gradient-text">DoctorM&amp;Ai</span>. All rights reserved.
          </p>
          <p className="font-mono text-xs text-mid-grey flex items-center gap-2">
            Built by <span className="gradient-text">8 autonomous AI agents</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
