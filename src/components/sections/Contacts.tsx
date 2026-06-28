'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <section className="relative py-24 px-4 sm:px-6 lg:px-8" id="contact">
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

        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            className="glassmorphism p-8 rounded-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-primaryText mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray300 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray100 text-primaryText rounded-lg focus:outline-none focus:border-accentCyan border border-transparent transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray300 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray100 text-primaryText rounded-lg focus:outline-none focus:border-accentCyan border border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray300 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray100 text-primaryText rounded-lg focus:outline-none focus:border-accentCyan border border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accentCyan to-purple-600 text-background font-bold rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? '✓ Message Sent!' : t('form.submit')}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            {/* Email */}
            <motion.a
              href="mailto:thedoctormes@gmail.com"
              className="glassmorphism p-6 rounded-xl hover:border-accentCyan transition-all group"
              whileHover={{
                y: -8,
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
              }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">✉️</div>
                <div>
                  <h4 className="text-lg font-bold text-primaryText group-hover:text-accentCyan transition-colors">
                    {t('email')}
                  </h4>
                  <p className="text-gray300">thedoctormes@gmail.com</p>
                </div>
              </div>
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/DoctorMES"
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism p-6 rounded-xl hover:border-accentCyan transition-all group"
              whileHover={{
                y: -8,
                boxShadow: '0 0 30px rgba(0, 229, 255, 0.2)',
              }}
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">💬</div>
                <div>
                  <h4 className="text-lg font-bold text-primaryText group-hover:text-accentCyan transition-colors">
                    {t('telegram')}
                  </h4>
                  <p className="text-gray300">@DoctorMES</p>
                </div>
              </div>
            </motion.a>

            {/* Social Links */}
            <motion.div
              className="glassmorphism p-6 rounded-xl"
              variants={itemVariants}
            >
              <h4 className="text-lg font-bold text-primaryText mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: '🐙', label: 'GitHub', href: '#' },
                  { icon: '🐦', label: 'Twitter', href: '#' },
                  { icon: '💼', label: 'LinkedIn', href: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 flex items-center justify-center text-2xl bg-gray100 rounded-lg hover:bg-accentCyan hover:text-background transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
