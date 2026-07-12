'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Radio } from 'lucide-react';
import type { WorldTheme } from './theme';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The centrepiece "alive in use" moment: a mock teacher dashboard that comes to
 * life on scroll — progress rings fill, a class grid lights up green student by
 * student, and a "module pushed live" toast slides in. Same component, lit per
 * world (forge control panel / scrying table). Reduced-motion shows the final
 * state with no animation.
 */
const RINGS = [
  { label: 'Class 7B', target: 0.82 },
  { label: 'Class 8A', target: 0.64 },
  { label: 'Class 8C', target: 0.91 },
];

// 28 students — a realistic class. Most land "done", a few "thinking/stuck".
const STUDENTS = Array.from({ length: 28 }, (_, i) => ({
  state: i % 9 === 4 ? 'stuck' : i % 5 === 3 ? 'thinking' : 'done',
}));

export function LiveDashboard({ t }: { t: WorldTheme }) {
  const root = useRef<HTMLDivElement>(null);
  const C = 2 * Math.PI * 20; // ring circumference (r=20)

  useGSAP(
    () => {
      const stateColors = {
        done: '#22c55e',
        thinking: t.lightCore,
        stuck: t.cta,
      };

      const paint = (instant: boolean) => {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
        // Rings fill.
        RINGS.forEach((r, i) => {
          const circle = root.current?.querySelector<SVGCircleElement>(`[data-ring="${i}"]`);
          const pct = root.current?.querySelector<HTMLElement>(`[data-ring-pct="${i}"]`);
          if (circle) {
            tl.fromTo(circle, { strokeDashoffset: C }, { strokeDashoffset: C * (1 - r.target), duration: instant ? 0 : 1 }, i * 0.12);
          }
          if (pct) {
            const obj = { v: 0 };
            tl.to(obj, { v: r.target * 100, duration: instant ? 0 : 1, onUpdate: () => { pct.textContent = `${Math.round(obj.v)}%`; } }, i * 0.12);
          }
        });
        // Students light up.
        const tiles = gsap.utils.toArray<HTMLElement>('[data-student]');
        tiles.forEach((tile, i) => {
          const st = tile.dataset.student as keyof typeof stateColors;
          tl.fromTo(tile, { backgroundColor: t.dashboard.tileEmpty, scale: 0.85, opacity: 0.4 },
            { backgroundColor: stateColors[st], scale: 1, opacity: 1, duration: instant ? 0 : 0.3 }, instant ? 0 : 0.4 + i * 0.025);
        });
        // Toast slides in.
        const toast = root.current?.querySelector<HTMLElement>('[data-toast]');
        if (toast) tl.fromTo(toast, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: instant ? 0 : 0.5 }, instant ? 0 : 1.1);
        return tl;
      };

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ paused: true });
        tl.add(paint(false));
        // Replay the "coming alive" sequence every time it scrolls into view.
        const restart = () => tl.restart();
        ScrollTrigger.create({
          trigger: root.current,
          start: 'top 75%',
          onEnter: restart,
          onEnterBack: restart,
        });
      });
      mm.add('(prefers-reduced-motion: reduce)', () => { paint(true); });
    },
    { scope: root }
  );

  const stateColor = (s: string) => (s === 'done' ? '#22c55e' : s === 'thinking' ? t.lightCore : t.cta);
  const ringStroke = t.mode === 'light' ? t.lightCore : t.light; // mint dies on white → teal

  return (
    <div ref={root} className="relative z-10 rounded-2xl border shadow-2xl overflow-hidden"
      style={{ backgroundColor: t.dashboard.panel, borderColor: t.card.border, backdropFilter: 'blur(8px)' }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: t.card.border }}>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: t.lightCore, boxShadow: `0 0 8px ${t.lightCore}` }} />
          <span className="text-sm font-semibold" style={{ color: t.text.heading }}>Live lesson · Data &amp; Information</span>
        </div>
        <span className="font-mono text-[11px]" style={{ color: t.text.faint }}>AC9TDI8K01</span>
      </div>

      {/* Rings */}
      <div className="grid grid-cols-3 gap-3 px-5 py-5">
        {RINGS.map((r, i) => (
          <div key={r.label} className="flex flex-col items-center gap-2 rounded-xl border p-3" style={{ borderColor: t.card.border, backgroundColor: t.dashboard.tileEmpty }}>
            <div className="relative w-14 h-14">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="20" fill="none" stroke={t.dashboard.ringTrack} strokeWidth="4" />
                <circle data-ring={i} cx="24" cy="24" r="20" fill="none" stroke={ringStroke} strokeWidth="4" strokeLinecap="round"
                  strokeDasharray={C} strokeDashoffset={C} />
              </svg>
              <span data-ring-pct={i} className="absolute inset-0 flex items-center justify-center text-xs font-bold" style={{ color: t.text.heading }}>0%</span>
            </div>
            <span className="text-[11px]" style={{ color: t.text.muted }}>{r.label}</span>
          </div>
        ))}
      </div>

      {/* Class grid */}
      <div className="px-5 pb-3">
        <p className="text-[11px] uppercase tracking-wide mb-2" style={{ color: t.text.faint }}>Class 7B · 28 students</p>
        <div className="grid grid-cols-7 gap-1.5">
          {STUDENTS.map((s, i) => (
            <span key={i} data-student={s.state} className="aspect-square rounded-md"
              style={{ backgroundColor: stateColor(s.state) }} />
          ))}
        </div>
        <div className="flex gap-4 mt-3 text-[10px]" style={{ color: t.text.muted }}>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: '#22c55e' }} /> Done</span>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: t.lightCore }} /> Thinking</span>
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full" style={{ backgroundColor: t.cta }} /> Stuck</span>
        </div>
      </div>

      {/* Toast */}
      <div data-toast className="m-5 mt-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium"
        style={{ backgroundColor: `${t.lightCore}22`, border: `1px solid ${t.lightCore}40`, color: t.text.heading }}>
        <Radio className="size-4" style={{ color: t.lightCore }} />
        Module pushed live to Class 7B
      </div>
    </div>
  );
}
