/**
 * @file ParticleCanvas
 * @description Three.js animated particles with mouse repulsion and line connections.
 * 80 particles on desktop, 40 on mobile. Full-screen canvas overlay.
 */
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import useIsMobile from "../hooks/useIsMobile";

const CONNECTION_DISTANCE = 150;
const MOUSE_RADIUS = 200;

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
}

export default function ParticleCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = isMobile ? 40 : 80;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.CircleGeometry(2, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.6 });
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * width,
        (Math.random() - 0.5) * height,
        0
      );
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        0
      );
      scene.add(mesh);
      particles.push({ mesh, velocity });
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.15 });
    const linesGeometry = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lines);

    const mouse = new THREE.Vector2(-9999, -9999);

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX - width / 2;
      mouse.y = -(e.clientY - height / 2);
    }

    function handleResize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let raf: number;

    function animate() {
      const positions: number[] = [];

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.mesh.position.x - mouse.x;
        const dy = p.mesh.position.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
          p.velocity.x += (dx / dist) * force * 0.5;
          p.velocity.y += (dy / dist) * force * 0.5;
        }

        // Damping
        p.velocity.x *= 0.98;
        p.velocity.y *= 0.98;

        p.mesh.position.add(p.velocity);

        // Wrap
        const hw = width / 2;
        const hh = height / 2;
        if (p.mesh.position.x > hw) p.mesh.position.x = -hw;
        if (p.mesh.position.x < -hw) p.mesh.position.x = hw;
        if (p.mesh.position.y > hh) p.mesh.position.y = -hh;
        if (p.mesh.position.y < -hh) p.mesh.position.y = hh;
      }

      // Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const d = particles[i].mesh.position.distanceTo(particles[j].mesh.position);
          if (d < CONNECTION_DISTANCE) {
            positions.push(
              particles[i].mesh.position.x,
              particles[i].mesh.position.y,
              0,
              particles[j].mesh.position.x,
              particles[j].mesh.position.y,
              0
            );
          }
        }
      }

      linesGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineMaterial.dispose();
      linesGeometry.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
