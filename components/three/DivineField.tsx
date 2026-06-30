'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { BufferAttribute } from 'three';
import { hexToRgba } from '@/lib/color';

/** Build a soft round glow sprite for the particles. */
function makeSprite(THREE: typeof import('three')) {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255, 255, 255, 1)');
  g.addColorStop(0.25, 'rgba(255, 255, 255, 0.85)');
  g.addColorStop(0.55, 'rgba(255, 255, 255, 0.25)');
  g.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export interface DivineFieldProps {
  /** Accent color the motes are tinted toward. */
  accent?: string;
  /** 0.5–1.5 multiplier on particle count. */
  density?: number;
  className?: string;
}

/**
 * A calm, drifting field of luminous "divine motes" rendered in three.js.
 * Additive soft sprites rise slowly with gentle sway and a subtle pointer
 * parallax. Lazy-loads three.js, caps DPR, pauses when hidden, and is skipped
 * entirely under prefers-reduced-motion (the CSS AmbientLight is the fallback).
 */
export function DivineField({ accent = '#67E8F9', density = 1, className }: DivineFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf = 0;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      renderer.setPixelRatio(dpr);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 26;

      const isSmall = window.innerWidth < 640;
      const count = Math.round((isSmall ? 230 : 340) * Math.max(0.5, Math.min(1.5, density)));

      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const speeds = new Float32Array(count);
      const phases = new Float32Array(count);
      const scales = new Float32Array(count);

      const base = new THREE.Color(accent);
      const gold = new THREE.Color('#FDE68A');
      const white = new THREE.Color('#F0FDFA');
      const spanX = 56;
      const spanY = 60;

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spanX;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spanY;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
        // blend accent → gold → white for a warm, divine palette
        const t = Math.random();
        const col = t < 0.5 ? base.clone().lerp(white, t * 1.4) : gold.clone().lerp(white, (t - 0.5));
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
        speeds[i] = 0.6 + Math.random() * 1.4;
        phases[i] = Math.random() * Math.PI * 2;
        scales[i] = 0.5 + Math.random() * 1.6;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const sprite = makeSprite(THREE);
      const mat = new THREE.PointsMaterial({
        size: isSmall ? 1.5 : 1.25,
        map: sprite,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        opacity: 0.9,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // pointer / device parallax
      const target = { x: 0, y: 0 };
      const current = { x: 0, y: 0 };
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('pointermove', onPointer, { passive: true });

      const resize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize);

      const clock = new THREE.Clock();
      let paused = document.hidden;
      const onVisibility = () => {
        paused = document.hidden;
        if (!paused) {
          clock.start();
          loop();
        }
      };
      document.addEventListener('visibilitychange', onVisibility);

      const pos = geo.attributes.position as BufferAttribute;

      const loop = () => {
        if (disposed || paused) return;
        const dt = Math.min(clock.getDelta(), 0.05);
        const t = clock.elapsedTime;

        for (let i = 0; i < count; i++) {
          let y = pos.getY(i) + speeds[i] * dt * 1.4;
          const x = pos.getX(i) + Math.sin(t * 0.2 + phases[i]) * dt * 0.6;
          if (y > spanY / 2) {
            y = -spanY / 2;
          }
          pos.setX(i, x);
          pos.setY(i, y);
        }
        pos.needsUpdate = true;

        // ease camera toward pointer for gentle parallax
        current.x += (target.x - current.x) * 0.025;
        current.y += (target.y - current.y) * 0.025;
        camera.position.x = current.x * 3;
        camera.position.y = -current.y * 3 + Math.sin(t * 0.1) * 0.6;
        camera.lookAt(0, 0, 0);
        points.rotation.z = Math.sin(t * 0.03) * 0.05;

        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };
      loop();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('pointermove', onPointer);
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibility);
        geo.dispose();
        mat.dispose();
        sprite.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [reduce, accent, density]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-20 h-full w-full ${className ?? ''}`}
      style={{ filter: `drop-shadow(0 0 1px ${hexToRgba(accent, 0.3)})` }}
    />
  );
}
