/**
 * @file StatCounter
 * @description Animated counter that counts up from 0 when entering viewport.
 */
"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const start = performance.now();

          function tick(now: number) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            // power2.out ease: 1 - (1 - t)^2
            const eased = 1 - (1 - t) * (1 - t);
            setCount(Math.round(eased * value));
            if (t < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-neon-cyan md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-wider text-mid-grey">
        {label}
      </div>
    </div>
  );
}
