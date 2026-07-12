'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * Ambient world particles — rising embers (lava) or drifting wisps (forest).
 * Built and animated entirely client-side in useGSAP so there is no hydration
 * mismatch and no motion under reduced-motion / SSR.
 */
export function Particles({
  count = 14,
  color,
  mode,
  className = '',
}: {
  count?: number;
  color: string;
  mode: 'rise' | 'drift';
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const layer = root.current;
        if (!layer) return;

        const dots: HTMLSpanElement[] = [];
        for (let i = 0; i < count; i++) {
          const dot = document.createElement('span');
          const size = gsap.utils.random(3, 8);
          Object.assign(dot.style, {
            position: 'absolute',
            left: `${gsap.utils.random(0, 100)}%`,
            top: `${gsap.utils.random(0, 100)}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '9999px',
            background: color,
            filter: 'blur(2px)',
            boxShadow: `0 0 ${size * 2}px ${color}`,
            pointerEvents: 'none',
            opacity: '0',
            willChange: 'transform, opacity',
          });
          layer.appendChild(dot);
          dots.push(dot);
        }

        const tweens = dots.map((dot) => {
          const dur = gsap.utils.random(6, 12);
          const delay = gsap.utils.random(0, 6);
          if (mode === 'rise') {
            return gsap.fromTo(
              dot,
              { y: 0, x: 0, opacity: 0 },
              {
                y: gsap.utils.random(-90, -160),
                x: gsap.utils.random(-10, 24),
                opacity: gsap.utils.random(0.5, 0.95),
                duration: dur,
                delay,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: false,
                repeatRefresh: true,
              }
            );
          }
          return gsap.fromTo(
            dot,
            { x: 0, y: 0, opacity: 0.3 },
            {
              x: gsap.utils.random(-24, 24),
              y: gsap.utils.random(-30, 18),
              opacity: gsap.utils.random(0.4, 0.9),
              duration: dur,
              delay,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              repeatRefresh: true,
            }
          );
        });

        // Pause when the tab is hidden to save battery.
        const onVis = () =>
          tweens.forEach((t) => (document.hidden ? t.pause() : t.resume()));
        document.addEventListener('visibilitychange', onVis);

        return () => {
          document.removeEventListener('visibilitychange', onVis);
          dots.forEach((d) => d.remove());
        };
      });
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    />
  );
}
