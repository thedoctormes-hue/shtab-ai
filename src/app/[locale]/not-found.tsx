"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-deep-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 404 Glass Card */}
          <div className="glass max-w-lg mx-auto px-8 py-12 sm:px-12 sm:py-16">
            <motion.h1
              className="gradient-text font-display text-[180px] sm:text-[240px] font-bold leading-none mb-6 select-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              404
            </motion.h1>

            {/* Divider */}
            <div className="section-divider max-w-xs mx-auto mb-8" />

            {/* Heading */}
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-3">
              {t("heading")}
            </h2>

            {/* Description */}
            <p className="text-gray300 mb-10 max-w-md mx-auto text-base">
              {t("description")}
            </p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/"
                className="magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neon-cyan text-deep-black font-semibold transition-all shadow-lg shadow-neon-cyan/25 hover:shadow-neon-cyan/40 hover:scale-105 active:scale-100"
              >
                <Home size={18} />
                {t("homeBtn")}
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-dark-border text-gray300 font-semibold hover:border-neon-cyan hover:text-neon-cyan transition-all hover:scale-105 active:scale-100"
              >
                <ArrowLeft size={18} />
                {t("backBtn")}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
