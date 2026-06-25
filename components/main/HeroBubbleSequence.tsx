'use client';

import { ArrowRight } from 'lucide-react';
import type { WorldTheme } from './theme';

/**
 * Layer-B of the hero: the three-part offering hierarchy, surfaced as
 * speech-bubble + character beats that pop in on scroll (GSAP drives the
 * `[data-bubble]` elements — see WorldScene.tsx).
 *
 * Copy is LOCKED-FOR-BUILD but revisable after the team conversations.
 *
 * Character art is a PLACEHOLDER — temporary stand-ins from public/students/*.
 * Each character slot carries `data-character` so the final cast art swaps in
 * without touching layout or motion.
 */

type Beat = {
  text: string;
  character: string; // placeholder asset — swap for final cast art
  cta?: { label: string; href: string };
};

const BEATS: Beat[] = [
  {
    text: 'A complete teaching program — Year 5–6 and Year 7–8 Digital Technologies, fully curriculum-aligned.',
    character: '/students/student-1.png',
  },
  {
    text: 'Build your own learning sequence from curriculum-aligned resources — your pacing, your class.',
    character: '/students/student-2.png',
  },
  {
    text: 'Interactive, collaborative, pedagogy-first — whole-class teaching, not solo screen time.',
    character: '/students/teacher.png',
    cta: { label: 'See how', href: '#pedagogy' },
  },
];

export function HeroBubbleSequence({ t }: { t: WorldTheme }) {
  // Opaque fill + orange→violet gradient outline — matches the page card system.
  const bubbleStyle: React.CSSProperties = {
    border: '1px solid transparent',
    backgroundImage: `linear-gradient(${t.softCard.fill}, ${t.softCard.fill}), linear-gradient(135deg, ${t.softCard.edgeFrom}, ${t.softCard.edgeTo})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      {BEATS.map((beat, i) => {
        const flip = i % 2 === 1; // alternate sides for rhythm
        return (
          <div
            key={i}
            className={`flex items-center gap-5 sm:gap-7 ${flip ? 'sm:flex-row-reverse' : ''}`}
          >
            {/* PLACEHOLDER character slot — swap with final cast art */}
            <div
              data-character
              className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden"
              style={{ backgroundColor: `${t.accent}1f`, border: `1px solid ${t.surface.chipBorder}` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={beat.character} alt="" aria-hidden className="w-full h-full object-cover" />
            </div>

            {/* Speech bubble — pops in on scroll via [data-bubble] */}
            <div data-bubble className="relative rounded-2xl p-5 sm:p-6 max-w-xl" style={bubbleStyle}>
              <p
                className="font-medium leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: t.softCardHeading }}
              >
                {beat.text}
              </p>
              {beat.cta && (
                <a
                  href={beat.cta.href}
                  data-arrow
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
                  style={{ color: t.accent }}
                >
                  {beat.cta.label} <ArrowRight className="size-3.5 arrow-icon" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
