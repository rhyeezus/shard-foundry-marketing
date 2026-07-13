'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Library, ListChecks, Users, type LucideIcon } from 'lucide-react';
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
  cta?: { label: string; href: string };
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
    cta: { label: 'See how', href: '#pedagogy' },
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

        // Each beat is fully independent — ONE ScrollTrigger per beat, using the
        // beat's own position as it crosses the viewport as the single source of
        // truth. A single timeline handles fade-in → hold → fade-out entirely
        // within that one scrubbed range, so there is no cross-beat coordination
        // to drift out of sync — clean in, clean out, always tied 1:1 to scroll.
        beats.forEach((beat, i) => {
          const rule = rules[i];
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: beat,
              start: 'top 90%',   // beat begins entering the viewport
              end: 'bottom 15%',  // beat has fully cleared the viewport
              scrub: 0.3,
            },
          });
          tl.fromTo(beat, { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: 'none', duration: 0.3 }, 0)
            .fromTo(rule, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 0.3 }, 0.02)
            .to(rule, { scaleX: 0, ease: 'none', duration: 0.3 }, 0.68)
            .to(beat, { opacity: 0, y: -24, ease: 'none', duration: 0.3 }, 0.7);
        });
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('[data-beat]', { opacity: 1, y: 0 });
        gsap.set('[data-beat-rule]', { scaleX: 1 });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className={stack ? 'flex flex-col gap-40 sm:gap-56' : 'grid sm:grid-cols-3 gap-12'}>
      {BEATS.map((beat, i) => (
        <div key={i} data-beat className="flex flex-col" style={{ willChange: 'opacity, transform' }}>
          {/* Icon + animated accent rule — draws out as this beat becomes active. */}
          <div className="flex items-center gap-4 mb-5">
            <span
              data-character
              className="flex items-center justify-center rounded-xl shrink-0"
              style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: `${t.accent}1f`,
                border: `1px solid ${t.light}40`,
                boxShadow: `inset 0 0 12px ${t.light}22`,
              }}
            >
              <beat.Icon className="size-6" style={{ color: t.lightCore }} />
            </span>
            <span
              data-beat-rule
              aria-hidden
              className="h-px flex-1 rounded-full"
              style={{ background: `linear-gradient(90deg, ${t.light}, ${t.light}00)` }}
            />
          </div>

          {/* Title — large, the editorial hook. */}
          <h3 className="font-bold leading-[1.12] mb-3" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2rem)', color: t.heroText }}>
            {beat.title}
          </h3>

          {/* Supporting line. */}
          <p className="leading-relaxed max-w-lg" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: t.heroTextStrong }}>
            {beat.text}
          </p>

          {/* Proof tag + optional CTA. */}
          <div className="mt-5 flex items-center gap-5 flex-wrap">
            <span
              className="inline-flex items-center text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${t.light}14`, color: t.lightCore, border: `1px solid ${t.light}33` }}
            >
              {beat.tag}
            </span>
            {beat.cta && (
              <a
                href={beat.cta.href}
                data-arrow
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline"
                style={{ color: t.accent }}
              >
                {beat.cta.label} <ArrowRight className="size-3.5 arrow-icon" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
