'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Mail, Send, Github, Twitter, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';

export function Contacts() {
  const t = useTranslations('contacts');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0, 0)';
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'thedoctormes@gmail.com',
      href: 'mailto:thedoctormes@gmail.com',
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@DoctorMES',
      href: 'https://t.me/DoctorMES',
    },
    {
      icon: MessageCircle,
      label: 'Discord',
      value: 'DoctorMES#0001',
      href: '#',
    },
  ];

  const socials = [
    { Icon: Github, href: 'https://github.com/DoctorMES', label: 'GitHub' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-[80px]" id="contact" aria-labelledby="contacts-heading">
      {/* Section Divider */}
      <div className="section-divider mb-24" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="contacts-heading" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('title')}</span>
          </h2>
          <p className="text-lg text-gray300 max-w-2xl mx-auto">{t('subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10">
          {/* Contact Form — Glass style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className="glass-strong p-6 md:p-8 rounded-2xl space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="block font-mono text-xs font-medium uppercase tracking-wider text-violet-400 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  aria-label={t('form.name')}
                  aria-required="true"
                  placeholder="Ваше имя"
                  className={`w-full bg-deep-black/60 border rounded-xl px-4 py-3 text-white placeholder-mid-grey outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none ${
                    focusedField === 'name'
                      ? 'border-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.15)]'
                      : 'border-dark-border'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-mono text-xs font-medium uppercase tracking-wider text-violet-400 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  aria-label={t('form.email')}
                  aria-required="true"
                  placeholder="your@email.com"
                  className={`w-full bg-deep-black/60 border rounded-xl px-4 py-3 text-white placeholder-mid-grey outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none ${
                    focusedField === 'email'
                      ? 'border-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.15)]'
                      : 'border-dark-border'
                  }`}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs font-medium uppercase tracking-wider text-violet-400 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  aria-label={t('form.message')}
                  aria-required="true"
                  rows={5}
                  placeholder="Ваше сообщение..."
                  className={`w-full bg-deep-black/60 border rounded-xl px-4 py-3 text-white placeholder-mid-grey outline-none transition-all duration-300 resize-y min-h-[120px] focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none ${
                    focusedField === 'message'
                      ? 'border-violet-500 shadow-[0_0_20px_rgba(124,58,237,0.15)]'
                      : 'border-dark-border'
                  }`}
                />
              </div>

              {/* Magnetic CTA button */}
              <button
                ref={buttonRef}
                type="submit"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="magnetic-btn w-full relative z-10 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-sm tracking-[0.02em] px-7 py-4 rounded-xl shadow-glow-purple hover:shadow-[0_0_40px_rgba(124,58,237,0.4),0_0_80px_rgba(6,182,212,0.2)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>✓ Отправлено!</>
                ) : (
                  <>
                    {t('form.submit')}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass p-5 rounded-2xl flex items-center gap-4 group hover:border-violet-500/30 transition-all duration-300"
                aria-label={label}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 group-hover:border-violet-500/40 transition-all duration-300 shrink-0">
                  <Icon size={20} className="text-violet-400 group-hover:text-violet-300 transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[0.7rem] font-medium uppercase tracking-wider text-violet-400 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-white truncate group-hover:text-violet-300 transition-colors duration-300">
                    {value}
                  </p>
                </div>
                <ArrowRight size={14} className="text-mid-grey group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300 ml-auto shrink-0" />
              </a>
            ))}

            {/* Social links */}
            <div className="glass p-5 rounded-2xl">
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-wider text-violet-400 mb-3">
                Соцсети
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl border border-dark-border flex items-center justify-center text-mid-grey hover:border-violet-500/40 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none"
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
