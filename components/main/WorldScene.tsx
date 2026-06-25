'use client';

import { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 * Client animation layer shared by both world variants.
 *
 * Pages stay Server Components; this wraps the interactive regions and
 * progressively enhances the already server-rendered DOM via GSAP. Nothing
 * touches `window` outside `useGSAP` (client-only), so there are no SSR issues
 * and the page degrades to fully-styled static content if JS/GSAP never runs.
 *
 * Enhancement targets are class-based so the page markup stays declarative:
 *   .reveal          → fade-up on scroll entry (batched, staggered)
 *   [data-parallax]  → scrubbed y-parallax, rate from the attribute value
 *   [data-count]     → number count-up on entry (final text = the data value)
 */

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function WorldScene({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ── Motion branch: only when the user hasn't asked for reduced motion ──
      mm.add(
        {
          motion: '(prefers-reduced-motion: no-preference)',
          desktop: '(min-width: 768px)',
        },
        (ctx) => {
          const { desktop } = ctx.conditions as { motion: boolean; desktop: boolean };

          // ── Cinematic reveals — fade + slide, batched + staggered.
          //    Elements animate IN once and stay visible — no exit animations.
          //    Animating out as users scroll causes the "clunky" feeling; leaving
          //    content visible after it's been read feels natural and smooth. ──
          const animateIn = (els: Element[]) =>
            gsap.to(els, {
              y: 0,
              opacity: 1,
              duration: 0.55,
              ease: 'power2.out',
              stagger: 0.06,
              overwrite: true,
            });
          ScrollTrigger.batch('.reveal', {
            start: 'top 88%',
            onEnter: animateIn,
            onEnterBack: animateIn,
          });

          // ── Hero headline — word-by-word rise ──
          // Store original text once so we can re-split correctly after Fast Refresh.
          // Without this, GSAP cleanup reverts word spans to opacity:0 and the
          // data-split guard prevents re-animation, leaving the headline invisible.
          const headline = root.current?.querySelector<HTMLElement>('[data-words]');
          if (headline) {
            if (!headline.dataset.original) {
              headline.dataset.original = (headline.textContent || '').trim();
            }
            headline.innerHTML = '';
            // Reveal h1 shell immediately — word spans provide the visual masking
            // via overflow:hidden + yPercent:115 start. The CSS [data-words]{opacity:0}
            // hides the h1 until JS runs; this sets it back to 1 before words animate in.
            gsap.set(headline, { opacity: 1 });
            const words = headline.dataset.original.split(/\s+/);
            words.forEach((w, i) => {
              const outer = document.createElement('span');
              outer.style.display = 'inline-block';
              outer.style.overflow = 'hidden';
              outer.style.verticalAlign = 'top';
              const inner = document.createElement('span');
              inner.style.display = 'inline-block';
              inner.textContent = w;
              outer.appendChild(inner);
              headline.appendChild(outer);
              if (i < words.length - 1) headline.appendChild(document.createTextNode(' '));
              gsap.fromTo(
                inner,
                { yPercent: 115, opacity: 0 },
                { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.15 + i * 0.07 }
              );
            });
          }

            // As the headline rises in, push the subhead down to make room.
            // The paragraph starts at paddingTop:0 (subhead visible immediately
            // at the top-left corner), then grows to match the headline's
            // rendered height so both elements sit cleanly once the animation lands.
            const heroParagraph = root.current?.querySelector<HTMLElement>('[data-hero-p]');
            if (heroParagraph) {
              const targetPad = headline.getBoundingClientRect().height + 16;
              gsap.fromTo(
                heroParagraph,
                { paddingTop: 0 },
                { paddingTop: targetPad, duration: 0.9, ease: 'power4.out', delay: 0.15 }
              );
            }

          // ── Scrubbed parallax depth layers (desktop) ──
          if (desktop) {
            gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
              const rate = parseFloat(el.dataset.parallax || '0');
              gsap.to(el, {
                yPercent: rate,
                ease: 'none',
                scrollTrigger: {
                  trigger: el.closest('section') || el,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.15,
                },
              });
            });

            // Hero content drifts up + fades as you leave (cinematic exit).
            const heroContent = root.current?.querySelector<HTMLElement>('[data-hero-content]');
            const heroSection = heroContent?.closest('section');
            if (heroContent && heroSection) {
              gsap.to(heroContent, {
                yPercent: -18,
                opacity: 0.2,
                ease: 'none',
                scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: 0.15 },
              });
            }
          }

          // Stat / number count-ups — re-count every time they scroll into view.
          gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
            const finalText = el.dataset.count || el.textContent || '';
            const num = parseFloat(finalText.replace(/[^0-9.]/g, ''));
            if (!isFinite(num)) return;
            const prefix = finalText.slice(0, finalText.search(/[0-9]/));
            const suffix = finalText.slice(finalText.search(/[0-9]/)).replace(/[0-9.,]/g, '');
            const obj = { v: 0 };
            const count = () => {
              obj.v = 0;
              gsap.to(obj, {
                v: num,
                duration: 1.2,
                ease: 'power1.out',
                overwrite: true,
                onUpdate: () => {
                  const rounded = Number.isInteger(num) ? Math.round(obj.v) : obj.v.toFixed(1);
                  el.textContent = `${prefix}${rounded}${suffix}`;
                },
              });
            };
            ScrollTrigger.create({
              trigger: el,
              start: 'top 85%',
              onEnter: count,
              onEnterBack: count,
            });
          });

          // Refresh once the hero video + fonts settle so triggers measure right.
          const refresh = () => ScrollTrigger.refresh();
          const video = root.current?.querySelector('video');
          if (video) video.addEventListener('loadeddata', refresh, { once: true });
          if (document.fonts?.ready) document.fonts.ready.then(refresh);

          // Failsafe: never leave content stuck hidden. If a `.reveal` is already
          // within (or above) the viewport on load — or measurement is off — show
          // it immediately so the page is never a hazy wall of half-hidden elements.
          const revealVisible = () => {
            gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
              const r = el.getBoundingClientRect();
              if (r.top < window.innerHeight * 0.95) {
                gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', overwrite: 'auto' });
              }
            });
          };
          revealVisible();
          const failsafe = window.setTimeout(revealVisible, 1200);

          return () => {
            if (video) video.removeEventListener('loadeddata', refresh);
            window.clearTimeout(failsafe);
          };
        }
      );

      // ── Reduced-motion branch: show everything instantly, no scrubbing ──
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.reveal', { opacity: 1, y: 0 });
      });
    },
    { scope: root }
  );

  return <div ref={root}>{children}</div>;
}
