'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function Header() {
  const t = useTranslations('navigation');
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const locale = pathname.split('/')[1] || 'en';

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const navItems = [
    { href: '#projects', label: t('projects') },
    { href: '#team', label: t('team') },
    { href: '#architecture', label: t('architecture') },
    { href: '#cases', label: t('cases') },
    { href: '#tech', label: t('tech') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glassmorphism backdrop-blur-md bg-background/80'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-accentCyan to-purple-600 flex items-center justify-center text-white font-bold"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            M
          </motion.div>
          <span className="font-bold text-lg text-primaryText group-hover:text-accentCyan transition-colors">
            DoctorM&Ai
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-primaryText hover:text-accentCyan transition-colors text-sm font-medium"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg text-primaryText hover:bg-gray100 transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {locale === 'en' ? 'РУ' : 'EN'}
          </motion.button>

          {/* Theme Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="px-3 py-2 rounded-lg text-primaryText hover:bg-gray100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
}
