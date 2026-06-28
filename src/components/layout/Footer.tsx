'use client';

import { Github, Twitter, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-deep-black border-t border-dark-border">
      <div className="max-w-[1200px] mx-auto px-[clamp(1rem,4vw,3rem)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-bold text-white flex items-center">
              <span className="text-neon-cyan font-mono">M</span>
              <span>DoctorM&amp;Ai</span>
            </div>
            <p className="mt-4 text-sm text-mid-grey leading-relaxed">
              AI-лаборатория, которая работает 24/7, создавая интеллектуальные решения для здравоохранения, бизнеса и государства.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">Продукты</h4>
            <ul className="space-y-3">
              {['СнабЛаб', 'autoexpert', 'cheque-bot', 'mail-daemon'].map((item) => (
                <li key={item}>
                  <Link href="#projects" className="text-sm text-mid-grey hover:text-neon-cyan transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">Компания</h4>
            <ul className="space-y-3">
              {['О нас', 'Блог', 'Карьера', 'Контакты'].map((item) => (
                <li key={item}>
                  <Link href="#team" className="text-sm text-mid-grey hover:text-neon-cyan transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">Соцсети</h4>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: 'https://github.com/DoctorMES', label: 'GitHub' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Send, href: 'https://t.me/DoctorMES', label: 'Telegram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-mid-grey hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-mid-grey">
            &copy; {currentYear} DoctorM&amp;Ai. All rights reserved.
          </p>
          <p className="font-mono text-xs text-mid-grey">
            Built by 8 autonomous AI agents
          </p>
        </div>
      </div>
    </footer>
  );
}
