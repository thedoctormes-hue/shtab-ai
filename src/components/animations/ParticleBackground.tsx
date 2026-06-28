'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate particles
    const generateParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor(window.innerWidth / 50);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      return particles;
    };

    particlesRef.current = generateParticles();

    // Animation loop
    let animationFrameId: number;
    let startTime = Date.now();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const currentTime = (Date.now() - startTime) / 1000;

      // Draw particles
      particlesRef.current.forEach((particle) => {
        const progress = ((currentTime - particle.delay) % particle.duration) / particle.duration;

        if (progress >= 0) {
          const y = particle.y - progress * canvas.height;
          const opacity = particle.opacity * Math.sin(progress * Math.PI);

          ctx.fillStyle = `rgba(0, 229, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const progress1 = ((currentTime - p1.delay) % p1.duration) / p1.duration;
          const progress2 = ((currentTime - p2.delay) % p2.duration) / p2.duration;

          if (progress1 >= 0 && progress2 >= 0) {
            const y1 = p1.y - progress1 * canvas.height;
            const y2 = p2.y - progress2 * canvas.height;

            const distance = Math.sqrt(
              Math.pow(p1.x - p2.x, 2) + Math.pow(y1 - y2, 2)
            );

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(p1.x, y1);
              ctx.lineTo(p2.x, y2);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
