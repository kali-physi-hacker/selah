'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { Material } from 'three';
import { hexToRgba } from '@/lib/color';

const PERIOD = 10; // seconds for a full breath (≈ inhale 5 / exhale 5)

/**
 * A three.js "breathing" orb that gently expands and contracts to pace the
 * breath, with a caption that syncs to the phase. A calm, embodied moment for
 * the Reflect section. Lazy-loads three; under reduced-motion it shows a still
 * glowing orb with a gentle invitation instead.
 */
export function BreathOrb({ accent = '#67E8F9' }: { accent?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'in' | 'out'>('in');
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

      const size = 260;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(size, size, false);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.z = 3.4;

      const group = new THREE.Group();
      scene.add(group);

      const accentColor = new THREE.Color(accent);

      // luminous core
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.82, 4),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color('#FDE68A'),
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending,
        }),
      );
      group.add(core);

      const coreInner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.5, 3),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color('#FFFFFF'),
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
        }),
      );
      group.add(coreInner);

      // wireframe shell
      const shell = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.04, 1),
        new THREE.MeshBasicMaterial({
          color: accentColor,
          wireframe: true,
          transparent: true,
          opacity: 0.45,
        }),
      );
      group.add(shell);

      // orbiting points halo
      const haloCount = 120;
      const hp = new Float32Array(haloCount * 3);
      for (let i = 0; i < haloCount; i++) {
        const r = 1.25 + Math.random() * 0.35;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        hp[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        hp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        hp[i * 3 + 2] = r * Math.cos(phi);
      }
      const haloGeo = new THREE.BufferGeometry();
      haloGeo.setAttribute('position', new THREE.BufferAttribute(hp, 3));
      const halo = new THREE.Points(
        haloGeo,
        new THREE.PointsMaterial({
          color: new THREE.Color('#FDE68A'),
          size: 0.04,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      );
      group.add(halo);

      const clock = new THREE.Clock();
      let lastPhase: 'in' | 'out' = 'in';
      let paused = document.hidden;
      const onVis = () => {
        paused = document.hidden;
        if (!paused) {
          clock.start();
          loop();
        }
      };
      document.addEventListener('visibilitychange', onVis);

      const loop = () => {
        if (disposed || paused) return;
        const t = clock.elapsedTime;
        // 0..1 breath, easing in and out
        const raw = (Math.sin((t / PERIOD) * Math.PI * 2 - Math.PI / 2) + 1) / 2;
        const scale = 0.82 + raw * 0.5;
        group.scale.setScalar(scale);
        group.rotation.y = t * 0.12;
        group.rotation.x = Math.sin(t * 0.1) * 0.2;
        halo.rotation.z = t * 0.05;

        const dir: 'in' | 'out' = Math.cos((t / PERIOD) * Math.PI * 2 - Math.PI / 2) >= 0 ? 'in' : 'out';
        if (dir !== lastPhase) {
          lastPhase = dir;
          setPhase(dir);
        }

        renderer.render(scene, camera);
        raf = requestAnimationFrame(loop);
      };
      loop();

      cleanup = () => {
        cancelAnimationFrame(raf);
        document.removeEventListener('visibilitychange', onVis);
        core.geometry.dispose();
        coreInner.geometry.dispose();
        shell.geometry.dispose();
        haloGeo.dispose();
        (core.material as Material).dispose();
        (coreInner.material as Material).dispose();
        (shell.material as Material).dispose();
        (halo.material as Material).dispose();
        renderer.dispose();
      };
    })();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [reduce, accent]);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="relative h-[260px] w-[260px]">
        {reduce ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-40 w-40 animate-breathe rounded-full"
              style={{
                background: `radial-gradient(circle at 50% 45%, ${hexToRgba('#FFFFFF', 0.85)}, ${hexToRgba(
                  '#FDE68A',
                  0.5,
                )} 40%, ${hexToRgba(accent, 0.2)} 65%, transparent 75%)`,
              }}
            />
          </div>
        ) : (
          <canvas ref={canvasRef} width={260} height={260} aria-hidden className="h-full w-full" />
        )}
      </div>
      <p
        key={phase}
        className="scripture mt-1 animate-fade-in text-base text-ink-muted"
        aria-live="polite"
      >
        {reduce ? 'Breathe slowly, and be still.' : phase === 'in' ? 'Breathe in…' : 'Breathe out…'}
      </p>
    </div>
  );
}
