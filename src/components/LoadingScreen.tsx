/**
 * @file LoadingScreen
 * @description Full-screen loading overlay with logo shimmer, progress bar, and auto-dismiss.
 */
"use client";

import { useEffect, useState } from "react";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p * 100);
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);

    const hideTimer = setTimeout(() => setVisible(false), 2000);
    const removeTimer = setTimeout(() => setDisplay(false), 2300);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!display) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Загрузка приложения"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-deep-black transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Logo shimmer */}
      <h1 className="text-4xl font-bold tracking-tight">
        <span className="gradient-text bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]">
          DoctorM&amp;Ai
        </span>
      </h1>

      {/* Glass progress bar */}
      <div className="glass mt-8 h-3 w-56 overflow-hidden rounded-full">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Init text */}
      <p className="mt-4 animate-pulse font-mono text-xs tracking-wider text-mid-grey">
        Инициализация нейронных связей...
      </p>
    </div>
  );
}

export default LoadingScreen;
export { LoadingScreen };
