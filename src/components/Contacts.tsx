"use client";

import { useI18n } from "../lib/i18n";
import { motion } from "framer-motion";
import { Send, Mail, Globe } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contacts() {
  const { t } = useI18n();

  const items = [
    {
      key: "telegram",
      icon: Send,
      value: "@DoctorMES",
      href: "https://t.me/DoctorMES",
    },
    {
      key: "email",
      icon: Mail,
      value: "thedoctormes@gmail.com",
      href: "mailto:thedoctormes@gmail.com",
    },
    {
      key: "site",
      icon: Globe,
      value: "shtab-ai.ru",
      href: "https://shtab-ai.ru",
    },
  ];

  return (
    <section id="contacts" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-light-accent/[0.02] to-light-bg dark:from-dark-bg dark:via-dark-accent/[0.02] dark:to-dark-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-light-muted dark:text-dark-muted">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.key}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-light-accent dark:hover:border-dark-accent transition-all"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-light-accent/10 dark:bg-dark-accent/10">
                    <Icon size={24} className="text-light-accent dark:text-dark-accent" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted">
                    {t(`items.${item.key}`)}
                  </span>
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">
                    {item.value}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-light-accent/5 to-transparent dark:from-dark-accent/10 dark:to-transparent border border-light-border dark:border-dark-border mb-8"
          >
            <h3 className="font-heading text-2xl font-semibold text-light-text dark:text-dark-text mb-2 text-center">
              {t("cta.title")}
            </h3>
            <p className="text-light-muted dark:text-dark-muted mb-6 text-center">
              {t("cta.desc")}
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
