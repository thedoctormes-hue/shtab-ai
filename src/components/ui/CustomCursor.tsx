'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHoveringLink(true);
      } else if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'SPAN') {
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = () => {
      setIsHoveringLink(false);
      setIsHoveringText(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        className="custom-cursor dot"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ duration: 0 }}
      />
      {/* Outline cursor */}
      <motion.div
        className={`custom-cursor outline ${isHoveringLink ? 'link-hover' : isHoveringText ? 'text-hover' : ''}`}
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
