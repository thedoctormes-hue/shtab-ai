/**
 * @file useScrollReveal
 * @description GSAP ScrollTrigger hook for reveal animations.
 * Supports child selector with stagger.
 */
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  scale?: number;
  ease?: string;
  start?: string;
  childSelector?: string;
}

export default function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    y = 60,
    x = 0,
    opacity = 0,
    duration = 1,
    stagger = 0,
    delay = 0,
    scale = 1,
    ease = "power2.out",
    start = "top 85%",
    childSelector,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = childSelector
      ? el.querySelectorAll(childSelector)
      : el;

    gsap.fromTo(
      targets,
      { y, x, opacity, scale },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        duration,
        stagger,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [y, x, opacity, duration, stagger, delay, scale, ease, start, childSelector]);

  return ref;
}
