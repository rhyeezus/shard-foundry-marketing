'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Library, ListChecks, Users, type LucideIcon } from 'lucide-react';
import type { WorldTheme } from './theme';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Layer-B of the hero: the three-part offering hierarchy as borderless editorial
 * BEATS (no card boxes), in normal document flow (each still occupies real
 * scroll height via the column `gap`) but crossfaded with a SCRUBBED animation
 * per beat rather than a fixed-duration tween fired on a scroll-trigger event.
 *
 * Scrubbing binds each beat's opacity directly to how far it has scrolled
 * through its own trigger zone — progress tracks the scrollbar 1:1, forward or
 * backward, at any scroll speed — which is why the rest of the page's motion
 * (parallax, the hero-exit, the section-cover panel) already uses scrub instead
 * of onEnter tweens. Event-fired tweens run on their own clock once triggered,
 * which is what read as laggy/clunky here.
 *
 * Each beat fades in as it enters its zone and fades out as it leaves — scrubbed
 * both ways — so only the beat currently inside its zone is visible. No nested
 * sticky/pin structure: this stays inside the hero's existing scrolling column.
 *
 * Desktop + motion-safe only; on mobile / reduced-motion every beat renders
 * fully visible, no scrubbing, via CSS alone.
 *
 * The icon carries `data-character` so final art can swap in later.
 * Copy is LOCKED-FOR-BUILD but revisable after the team conversations.
 */

type Beat = {
  title: string;
  text: string;
  Icon: LucideIcon;
  tag: string;
};

const BEATS: Beat[] = [
  {
    title: 'The full curriculum, covered',
    text: 'Two complete year-level programs — Year 5–6 and Year 7–8 — every strand and content description, ready to teach.',
    Icon: Library,
    tag: '2 year levels · every strand',
  },
  {
    title: 'Your sequence, your pacing',
    text: 'Build a learning sequence from curriculum-aligned resources and run it at the pace your class needs.',
    Icon: ListChecks,
    tag: 'Fully customisable',
  },
  {
    title: 'Taught live, together',
    text: 'Interactive and collaborative by design — whole-class teaching you lead, not solo screen time.',
    Icon: Users,
    tag: 'Pedagogy-first',
  },
];

export function HeroBubbleSequence({ t, layout = 'alternating' }: { t: WorldTheme; layout?: 'alternating' | 'stack' }) {
  const root = useRef<HTMLDivElement>(null);
  const stack = layout === 'stack';

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const beats = gsap.utils.toArray<HTMLElement>('[data-beat]');
        const rules = gsap.utils.toArray<HTMLElement>('[data-beat-rule]');
        if (!beats.length) return;

        gsap.set(beats, { opacity: 0, y: 24 });
        gsap.set(rules, { scaleX: 0, transformOrigin: 'left center' });
        gsap.set('[data-beat-icon]', { opacity: 0, scale: 0.6, y: 10, transformOrigin: 'left center' });

        // Each beat is fully independent — ONE ScrollTrigger per beat, using the
        // beat's own position as it crosses the viewport as the single source of
        // truth. A single timeline handles fade-in → hold → fade-out entirely
        // within that one scrubbed range, so there is no cross-beat coordination
        // to drift out of sync — clean in, clean out, always tied 1:1 to scroll.
        // Within each beat the icon pops first, then the divider draws under the
        // heading — a small staggered build so each beat "assembles" as it lands.
        beats.forEach((beat, i) => {
          const rule = rules[i];
          const icon = beat.querySelector<HTMLElement>('[data-beat-icon]');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: beat,
              start: 'top 90%',   // beat begins entering the viewport
              end: 'bottom 15%',  // beat has fully cleared the viewport
              scrub: 0.3,
            },
          });
          tl.fromTo(beat, { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: 'none', duration: 0.3 }, 0);
          if (icon) tl.fromTo(icon, { opacity: 0, scale: 0.6, y: 10 }, { opacity: 1, scale: 1, y: 0, ease: 'back.out(2)', duration: 0.3 }, 0.02);
          tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 0.3 }, 0.1)
            .to(rule, { scaleX: 0, ease: 'none', duration: 0.3 }, 0.68)
            .to(beat, { opacity: 0, y: -24, ease: 'none', duration: 0.3 }, 0.7);
        });
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-beat]', { opacity: 1, y: 0 });
        gsap.set('[data-beat-rule]', { scaleX: 1 });
        gsap.set('[data-beat-icon]', { opacity: 1, scale: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={stack ? 'flex flex-col gap-40 sm:gap-56' : 'grid sm:grid-cols-3 gap-12'}>
      {BEATS.map((beat, i) => (
        <div key={i} data-beat className="flex flex-col" style={{ willChange: 'opacity, transform' }}>
          {/* Bare icon — no chip or border; pops in per beat (see GSAP above).
              Keeps data-character so final art can swap in later. */}
          <beat.Icon
            data-beat-icon
            data-character
            className="size-8 mb-4 shrink-0"
            style={{ color: t.lightCore, filter: `drop-shadow(0 0 10px ${t.light}66)` }}
          />

          {/* Title — large, the editorial hook. */}
          <h3 className="font-bold leading-[1.1] mb-4" style={{ fontSize: 'clamp(1.45rem, 2.1vw, 1.95rem)', color: t.heroText }}>
            {beat.title}
          </h3>

          {/* Divider — animated accent rule, drawn beneath the heading. */}
          <span
            data-beat-rule
            aria-hidden
            className="block h-px w-full max-w-lg rounded-full mb-5"
            style={{ background: `linear-gradient(90deg, ${t.light}, ${t.light}00)` }}
          />

          {/* Supporting line — sized up so it carries the message on its own. */}
          <p className="font-medium leading-relaxed max-w-lg" style={{ fontSize: 'clamp(1.15rem, 1.65vw, 1.4rem)', color: t.heroText }}>
            {beat.text}
          </p>

          {/* Selling-point badge — a soft neutral chip (translucent fill +
              hairline border) with a leading amber accent bar. The chip
              separates it from the white body copy so it stands out, while
              staying quiet enough to read as supporting; the bar is the one
              spark of colour. */}
          <div className="mt-7">
            <span
              className="inline-flex items-center gap-3 rounded-lg py-2.5 pl-4 pr-5"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <span aria-hidden className="rounded-full shrink-0" style={{ width: '4px', height: '1.15em', backgroundColor: t.lightCore }} />
              <span className="text-[15px] font-semibold tracking-[0.06em] uppercase" style={{ color: t.heroText }}>
                {beat.tag}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
