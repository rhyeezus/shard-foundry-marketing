# Motion Patterns — PARKED TASK (not yet implemented)

> **Status:** Approved, deferred for later implementation (parked 2026-06-13).
> This is a future task, not active work. When ready to build, follow the
> "Scope: what we ARE doing" section below. Lives at the repo root alongside
> `forest-theme.md` / `lava.md`.

## Context

A detailed implementation prompt ("Up Bank Motion Patterns") asked for scroll-reveal, stagger, a scroll-driven background colour morph, a nav slide-in, CTA arrow hover slides, footer-link arrows, and section connector lines — applied to both `variant-e` (lava) and `variant-f` (forest).

**The prompt was written against an OLDER version of this site** and conflicts with the current codebase in material ways (verified by exploration):

- It assumes a Three.js `Diamond` gem hero + mesh gradients + amethyst/green palette + `sticky` nav. The current site is a **video-hero `WorldPage`** (shared by both variants) with a `fixed` narrative nav and a **teal forest palette that was retuned and locked**.
- **A full scroll-reveal+stagger system already exists** in `components/world/WorldScene.tsx` via GSAP `ScrollTrigger.batch('.reveal', …)` (fade-up, 0.1s stagger, replays on scroll in/out). Every grid/card the prompt names (`team`, feature bento, curriculum scope, mission, checklist, platform copy) **already carries the `reveal` class**.
- The prompt's `ScrollColorMorph` would **remove `t.pageBackground`** from the wrapper and set flat per-section colours using **stale green values** (`#0a1f12`) — destroying the locked teal gradient + glow seams.
- The reduced-motion rule already exists globally in `globals.css` (lines 214–220, `*` selector collapsing all durations) — so any CSS we add is auto-covered.

**Decisions:**
1. **Skip** deliverables 3, 4, 7 (IntersectionObserver reveal + `RevealSection` + section wrapping) — intent already satisfied by GSAP; a parallel system would double-animate/fight.
2. **Skip** deliverable 5 (`ScrollColorMorph`) — protects the locked teal gradient.
3. **Implement all four** genuinely-new additive touches: CTA arrow slide, footer-link `→`, nav entrance (adapted to `fixed`), section connector line.

**Outcome:** add only the non-conflicting microinteractions, theme-agnostic, applied identically to both worlds via the shared `WorldPage`/`Nav`, honouring the existing reduced-motion rule and the no-new-dependencies constraint.

## Scope: what we ARE doing

Only the additive CSS microinteractions + the wiring to trigger them. No new hooks, no `RevealSection`, no `ScrollColorMorph`, no changes to `WorldScene`/GSAP, no palette changes.

### 1. CSS additions — `app/globals.css`

Append AFTER the existing `.glow-seam` block (do not touch anything above the reduced-motion rule). Add only the classes we actually use:

- `[data-arrow]` + `[data-arrow] .arrow-icon` + `[data-arrow]:hover .arrow-icon` → arrow slides `translateX(6px)` on hover (from prompt §1, verbatim).
- `.footer-link` + `.footer-link::after` (`content: " →"`) → animated arrow on hover (from prompt §1, verbatim).
- `.section-connector` + `::before` → vertical line that grows. **Adaptation:** the prompt drove `.is-visible` via its (skipped) IntersectionObserver. GSAP `.reveal` sets inline styles, not `.is-visible`, so it can't toggle this. Prefer a **self-contained CSS grow** (`@keyframes growLine` + a one-shot `animation` on the `::before`) so it needs no JS class toggle; the global reduced-motion rule covers it.
- `@keyframes slideDown` is NOT used as-is (assumes sticky). Add a gentle `@keyframes navFadeDown` (opacity 0→1, translateY(-8px)→0) for the adapted nav entrance.
- Do NOT add `revealUp`, `growDot`, `.reveal-ready`, `.reveal-stagger`, `.bg-morph` — unused.

### 2. Nav entrance — `components/Nav.tsx` (adapted)

The nav is `fixed` and transparent over the hero, transitioning to glass on scroll. A literal `translateY(-100%)` slide would fight that. **Adaptation:** add a one-shot `nav-fade-down` class (the new `navFadeDown` keyframe) to the `<nav>` className — a subtle opacity+small-offset entrance that does NOT disturb the transparent-over-hero state or the scroll-glass transition. Apply to all themes (theme-agnostic). CSS-only; Nav stays otherwise unchanged (already `"use client"`).

### 3. CTA arrows — `components/world/WorldPage.tsx`

Two CTAs render arrow icons:
- Hero "Join the pilot" — `<ChevronRight size={16} />`
- Curriculum "Join the pilot" — `<ArrowRight className="size-4" />`

For each: add `data-arrow` to the `<a>`, add `arrow-icon` to the icon's className. (Hero CTA is already inline-flex; `[data-arrow]` also sets inline-flex/gap — harmless duplicate.)

### 4. Footer links — `components/world/WorldPage.tsx`

Footer Privacy/Terms links: add `footer-link` to the className alongside existing `hover:text-white transition-colors`.

### 5. Section connector — `components/world/WorldPage.tsx` (sparingly)

Apply `.section-connector` to a few section eyebrow/heading wrappers as a decorative accent (e.g. the `max-w-2xl` heading blocks of the Authority band and Bento). Keep it sparing — not on every heading — to avoid visual noise. Self-contained CSS grow (no JS), reduced-motion-safe.

## Files touched

- `app/globals.css` — append microinteraction CSS after `.glow-seam`.
- `components/Nav.tsx` — add `nav-fade-down` to nav className.
- `components/world/WorldPage.tsx` — `data-arrow`/`arrow-icon` on 2 CTAs; `footer-link` on 2 footer links; `section-connector` on a couple of heading blocks.

Both variant pages (`app/variant-e/page.tsx`, `app/variant-f/page.tsx`) are UNCHANGED — they render the shared `WorldPage`, so all changes apply to both `/1` and `/2` automatically. No server→client conversion. No new files, no new deps.

## Explicitly NOT doing (with reason)

- `hooks/useScrollReveal.ts`, `components/RevealSection.tsx`, section wrapping (§3,4,7) — duplicate of existing GSAP `.reveal`.
- `components/ScrollColorMorph.tsx` + removing `t.pageBackground` (§5) — would destroy the locked teal gradient + glow seams; uses stale colours.
- Touching `Diamond`/Three.js — not on the current hero anyway; left untouched.
- Second reduced-motion media query — global one already covers new CSS.

## Verification

1. Dev server on `:3000`. Load `/1` (lava) and `/2` (forest).
2. **Nav entrance**: on hard reload, nav gently fades/eases in; transparent-over-hero look intact; scroll still transitions it to glass.
3. **CTA arrows**: hover both "Join the pilot" CTAs → arrow slides right ~6px, eases back on leave.
4. **Footer links**: hover Privacy/Terms → animated `→` appears.
5. **Section connector**: vertical accent line present beside chosen headings; not noisy.
6. **No regressions**: GSAP `.reveal` stagger, glow seams, teal palette, video hero, fixed-nav glass all unchanged.
7. **Reduced motion**: with `prefers-reduced-motion: reduce`, all new transitions/animations collapse (global rule) — verify CTAs/nav don't animate.
8. `curl -s -o /dev/null -w "%{http_code}"` both routes = 200; optionally `npm run build` for a clean TS/lint pass.
