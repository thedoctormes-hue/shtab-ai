/**
 * @file CustomCursor
 * @description Custom cursor with dot + ring. Ring enlarges on text/link hover.
 * Hidden on mobile.
 */
"use client";

import { useEffect, useRef } from "react";
import useIsMobile from "../hooks/useIsMobile";

function CustomCursor() {
  const isMobile = useIsMobile();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf: number;

    function animate() {
      const lerp = 0.15;
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * lerp;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * lerp;

      if (dot) dot.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      if (ring) {
        ring.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px) translate(-50%, -50%)`;
        const size = isHoveringRef.current ? 48 : 32;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
      }

      raf = requestAnimationFrame(animate);
    }

    function handleMouseMove(e: MouseEvent) {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    }

    function handleMouseEnter() {
      if (dot) dot.style.opacity = "1";
      if (ring) ring.style.opacity = "1";
    }

    function handleMouseLeave() {
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("p") ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3") ||
        target.closest("h4") ||
        target.closest("span")
      ) {
        isHoveringRef.current = true;
      }
    }

    function handleOut() {
      isHoveringRef.current = false;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-neon-cyan opacity-0"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-8 w-8 rounded-full border-2 border-neon-cyan/50 opacity-0 transition-[width,height] duration-200"
      />
    </>
  );
}

export default CustomCursor;
export { CustomCursor };
