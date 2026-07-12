'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Presentation, UsersRound, Radar, Award, Trophy, type LucideIcon } from 'lucide-react';
import type { WorldTheme } from './theme';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The "See how →" payoff for the hero's third offering bubble — a sticky-left
 * / scroll-right scrollytelling section. Five beats scroll past on the right;
 * a pinned character stage on the left crossfades to match.
 *
 * Layout is CSS `position: sticky` (not GSAP `pin: true`) — sticky avoids the
 * layout-insertion quirks of GSAP pinning and composes cleanly with the
 * existing page flow. GSAP is used only to track scroll progress per beat and
 * drive the crossfade — one ScrollTrigger per beat (not `.batch`, which is for
 * independent repeated elements, not a single shared external stage).
 *
 * Mobile (<md) and prefers-reduced-motion both fall back to the same plain
 * stacked layout via CSS alone (`md:motion-safe:*` variants) — no JS branching
 * needed for structure; the crossfade listeners simply never attach.
 *
 * Copy is placeholder — not final. See top-level TODOs for asset gaps.
 */

type Beat = {
  title: string;
  copy: string; // placeholder — not final marketing copy
  Icon: LucideIcon;
  chipCode?: string;
};

const BEATS: Beat[] = [
  {
    title: 'Teacher-led launch',
    copy: 'Every lesson starts the way a good lesson always has — a teacher, a class, a plan.',
    Icon: Presentation,
  },
  {
    title: 'Whole-class, same moment',
    copy: '28 students. One activity. Happening at the same time — not 28 separate logins.',
    Icon: UsersRound,
  },
  {
    title: 'Live signals',
    // TODO: replace placeholder with LiveDashboard.tsx once it can take an
    // external progress prop — its own internal ScrollTrigger (top 75% of its
    // own root) never fires correctly inside this pinned/sticky stage, since
    // the stage doesn't scroll independently while pinned.
    copy: 'Three students stuck on question two. The teacher already knows.',
    Icon: Radar,
  },
  {
    title: 'Curriculum authority',
    copy: 'Written by the person who wrote the curriculum. Every activity maps back to it.',
    Icon: Award,
    chipCode: 'ACTDIK023',
  },
  {
    title: 'Outcome',
    copy: 'The lesson was designed for them. It shows.',
    Icon: Trophy,
  },
];

export function PedagogyExplainer({ t }: { t: WorldTheme }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 768px)' },
        (ctx) => {
          const { desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
          if (!desktop) return; // mobile: CSS-only stacked layout, no crossfade

          const stages = gsap.utils.toArray<HTMLElement>('[data-stage]');
          const setActive = (i: number) =>
            gsap.to(stages, {
              opacity: (idx) => (idx === i ? 1 : 0),
              scale: (idx) => (idx === i ? 1 : 0.94),
              duration: 0.45,
              ease: 'power2.out',
              overwrite: true,
            });

          gsap.utils.toArray<HTMLElement>('[data-beat]').forEach((beatEl, i) => {
            ScrollTrigger.create({
              trigger: beatEl,
              start: 'top center',
              end: 'bottom center',
              onEnter: () => setActive(i),
              onEnterBack: () => setActive(i),
            });
          });
        }
      );

      // Reduced-motion (any width) and mobile (<md): stage stays CSS-hidden via
      // motion-safe/md variants — nothing to animate, first stage is already
      // the default-visible one in markup.
    },
    { scope: root }
  );

  // Same opaque-fill + gradient-outline material used across the page.
  const stageFrameStyle: React.CSSProperties = {
    border: '1px solid transparent',
    backgroundImage: `linear-gradient(${t.softCard.fill}, ${t.softCard.fill}), linear-gradient(135deg, ${t.softCard.edgeFrom}, ${t.softCard.edgeTo})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  };

  return (
    <div ref={root}>
      {/* Section intro */}
      <div className="rounded-2xl p-8 mb-6" style={{ background: 'rgba(10,5,28,0.60)' }}>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal" style={{ color: t.eyebrow }}>
          Pedagogy-first
        </p>
        <h2 className="font-bold tracking-tight leading-[1.08] mb-5 reveal" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: t.text.heading }}>
          Built for the classroom, not the laptop.
        </h2>
        <p className="leading-relaxed reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: t.text.body }}>
          Plenty of tools claim to be interactive and collaborative. Shard is built that way from the
          ground up — whole-class teaching, paced by you, with collaboration designed into every lesson.
        </p>
      </div>

      <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-8 lg:gap-14">
        {/* Sticky stage — desktop + motion-safe only. TODO: swap placeholder
            icon circles for real character art/video per beat. */}
        <div
          className="hidden md:motion-safe:block sticky top-16 h-[calc(100vh-4rem)]"
          aria-hidden
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {BEATS.map((beat, i) => {
              const accent = i % 2 === 0 ? t.light : t.atmosphere;
              return (
                <div
                  key={beat.title}
                  data-stage
                  className="absolute rounded-3xl p-10 flex flex-col items-center justify-center gap-4"
                  style={{ ...stageFrameStyle, opacity: i === 0 ? 1 : 0, transform: i === 0 ? 'scale(1)' : 'scale(0.94)', width: 'min(80%, 340px)', aspectRatio: '1 / 1' }}
                >
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: '5.5rem', height: '5.5rem', backgroundColor: `${accent}26`, border: `1px solid ${accent}55` }}
                  >
                    <beat.Icon className="size-9" style={{ color: accent }} />
                  </span>
                  {beat.chipCode && (
                    <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded border"
                      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.78)' }}>
                      {beat.chipCode}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Beats — normal document flow, ~100vh each on desktop for pacing */}
        <div className="flex flex-col gap-16 md:gap-0">
          {BEATS.map((beat, i) => {
            const accent = i % 2 === 0 ? t.light : t.atmosphere;
            return (
              <div
                key={beat.title}
                data-beat
                className="md:min-h-screen flex flex-col justify-center py-6 md:py-0"
              >
                {/* Mobile / reduced-motion inline stage — CSS-only fallback,
                    no JS branching needed for layout. */}
                <div className="md:motion-safe:hidden flex items-center justify-center mb-6">
                  <span
                    className="flex items-center justify-center rounded-full"
                    style={{ width: '4.5rem', height: '4.5rem', backgroundColor: `${accent}26`, border: `1px solid ${accent}55` }}
                  >
                    <beat.Icon className="size-7" style={{ color: accent }} />
                  </span>
                </div>

                <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: accent }}>
                  {beat.title}
                </p>
                <p className="font-medium leading-relaxed max-w-md" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: t.softCardHeading }}>
                  {beat.copy}
                </p>
                {beat.chipCode && (
                  <span className="md:motion-safe:hidden mt-3 w-fit font-mono text-[11px] font-medium px-2 py-0.5 rounded border"
                    style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.78)' }}>
                    {beat.chipCode}
                  </span>
                )}
              </div>
            );
          })}

          <a
            href="#schools"
            data-arrow
            className="reveal inline-flex items-center gap-2 font-semibold rounded-lg transition-colors hover:brightness-110 px-7 py-3 w-fit"
            style={{ backgroundColor: t.cta, color: t.text.onAccent }}
          >
            Join the pilot <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
