"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "en" ? "en" : "ru";

  const content = {
    ru: {
      title: "404",
      heading: "Страница не найдена",
      description: "Страница, которую вы ищете, не существует или была перемещена.",
      homeBtn: "На главную",
      backBtn: "Назад",
    },
    en: {
      title: "404",
      heading: "Page Not Found",
      description: "The page you're looking for doesn't exist or has been moved.",
      homeBtn: "Go Home",
      backBtn: "Go Back",
    },
  };

  const c = locale === "en" ? content.en : content.ru;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-8xl sm:text-9xl font-bold text-light-accent dark:text-dark-accent mb-4">
            {c.title}
          </h1>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text mb-3">
            {c.heading}
          </h2>
          <p className="text-light-muted dark:text-dark-muted mb-10 max-w-md mx-auto">
            {c.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-light-accent dark:bg-dark-accent text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-light-accent/20 dark:shadow-dark-accent/20"
            >
              <Home size={18} />
              {c.homeBtn}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-semibold hover:border-light-accent dark:hover:border-dark-accent transition-colors"
            >
              <ArrowLeft size={18} />
              {c.backBtn}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
