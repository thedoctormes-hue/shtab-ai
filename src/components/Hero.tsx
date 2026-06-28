"use client";

import { useI18n } from "../lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const inc = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-light-accent/[0.08] dark:fill-dark-accent/[0.15]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>
      {/* Animated scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-light-accent/20 dark:via-dark-accent/30 to-transparent animate-scan" />
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = [
    { value: 8, label: t("stats.agents"), suffix: "" },
    { value: 23, label: t("stats.projects"), suffix: "" },
    { value: 600, label: t("stats.tests"), suffix: "+" },
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <DotGrid />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-light-accent/[0.07] dark:bg-dark-accent/[0.12] blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/[0.04] dark:bg-purple-500/[0.08] blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "256px 256px" }} />

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-light-accent/20 dark:border-dark-accent/30 bg-light-accent/5 dark:bg-dark-accent/10 mb-8 backdrop-blur-sm"
          >
            <Sparkles size={14} className="text-light-accent dark:text-dark-accent animate-pulse" />
            <span className="text-sm font-medium text-light-accent dark:text-dark-accent">
              AI Laboratory
            </span>
          </motion.div>

          {/* Title with glow */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-light-text dark:text-dark-text">{t("title")}</span>
            <br />
            <span className="relative inline-block">
              {/* Glow behind accent text */}
              <span className="absolute inset-0 blur-2xl bg-light-accent/30 dark:bg-dark-accent/40 rounded-lg" aria-hidden="true" />
              <span className="relative bg-gradient-to-r from-light-accent to-blue-500 dark:from-dark-accent dark:to-purple-400 bg-clip-text text-transparent">
                {t("titleAccent")}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-light-muted dark:text-dark-muted mb-10">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#contacts"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden transition-all"
            >
              {/* Animated gradient bg */}
              <span className="absolute inset-0 bg-gradient-to-r from-light-accent to-blue-500 dark:from-dark-accent dark:to-purple-500 animate-gradient-shift bg-[length:200%_100%]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
              <span className="relative text-white flex items-center gap-2">
                {t("cta.primary")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text font-semibold text-lg hover:border-light-accent dark:hover:border-dark-accent hover:shadow-lg hover:shadow-light-accent/10 dark:hover:shadow-dark-accent/10 transition-all"
            >
              {t("cta.secondary")}
            </Link>
          </div>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-heading text-3xl sm:text-4xl font-bold text-light-accent dark:text-dark-accent">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-light-muted dark:text-dark-muted mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-light-bg dark:from-dark-bg to-transparent pointer-events-none" />
    </section>
  );
}
