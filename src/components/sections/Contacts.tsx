'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send, Github, Twitter, Linkedin } from 'lucide-react';

export function Contacts() {
  const t = useTranslations('contacts');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-lg text-light-grey max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 mt-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-base font-semibold text-white mb-6">Напишите нам</h4>
            <form onSubmit={handleSubmit} aria-label="Contact form" className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-light-grey mb-1">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-label="Имя"
                  aria-required="true"
                  className="w-full bg-deep-black border border-dark-border rounded-lg px-4 py-3 text-white placeholder-mid-grey focus:border-neon-cyan focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] outline-none transition-all duration-200"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-light-grey mb-1">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-label="Email"
                  aria-required="true"
                  className="w-full bg-deep-black border border-dark-border rounded-lg px-4 py-3 text-white placeholder-mid-grey focus:border-neon-cyan focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] outline-none transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-light-grey mb-1">
                  {t('form.message')}
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-label="Сообщение"
                  aria-required="true"
                  rows={5}
                  className="w-full bg-deep-black border border-dark-border rounded-lg px-4 py-3 text-white placeholder-mid-grey focus:border-neon-cyan focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] outline-none transition-all duration-200 resize-y min-h-[120px]"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neon-cyan text-deep-black font-semibold text-sm tracking-[0.02em] px-7 py-3.5 rounded-lg hover:bg-[#0891B2] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
              >
                {submitted ? '✓ Отправлено!' : t('form.submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-[rgba(6,182,212,0.08)] border border-neon-cyan/20 flex items-center justify-center">
                <Mail size={20} className="text-neon-cyan" />
              </div>
              <p className="mt-3 text-sm font-medium text-light-grey">Email</p>
              <a
                href="mailto:thedoctormes@gmail.com"
                className="text-base text-white hover:text-neon-cyan transition-colors"
              >
                thedoctormes@gmail.com
              </a>
            </div>

            {/* Telegram */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-[rgba(6,182,212,0.08)] border border-neon-cyan/20 flex items-center justify-center">
                <Send size={20} className="text-neon-cyan" />
              </div>
              <p className="mt-3 text-sm font-medium text-light-grey">Telegram</p>
              <a
                href="https://t.me/DoctorMES"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:text-neon-cyan transition-colors"
              >
                @DoctorMES
              </a>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">Соцсети</p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Github, href: '#', label: 'GitHub' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center text-mid-grey hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:outline-none"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
