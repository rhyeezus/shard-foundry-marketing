# Shard Learning — DESIGN.md

> The shared design system and source of truth. Theme-agnostic.
> AI coding agents and developers read this to generate UI that matches the brand across both world themes.
>
> **World theme docs:** `lava.md` (`/variant-e`) and `forest-theme.md` (`/variant-f`) own each world's
> palette and lighting. This doc owns everything they share: tokens, type, components, **page structure**,
> and **motion**.
> **Strategic context:** `Brand Audit & Inspiration.md`.

---

## One product, two worlds

Shard's marketing site ships as two world variants that share **one structure** and differ **only in
lighting and palette**:

- **Lava** (`/variant-e`) — a forge above the molten core. Dark, dramatic, lit by fire. Youth male 8–16.
- **Forest** (`/variant-f`) — an enchanted canopy at twilight. Magical, whimsical, lit by bioluminescence.
  Youth female 8–16.

These are not two recolours — they are **two worlds you descend through.** The scroll is the descent.

### Core principles

1. **Lit from within.** Each world has a single light source — lava = fire from below, forest =
   bioluminescence from within the foliage. Every atmospheric decision follows from the light source.
   A page that is merely "dark with accents" has failed this principle.
2. **Quiet at rest, alive in use.** Calm and organised when idle; filled with activity, data and energy
   during a live lesson. The marketing page must *show* the live experience, not describe it.
3. **Authority first.** The founders wrote the Australian Curriculum. That is the brand's single biggest
   differentiator and it leads the page — it is not buried in a late team section.
4. **One structure, two skins.** Section order and component shapes are identical across worlds. Only
   `lava.md` / `forest-theme.md` change.

---

## Brand Identity

**Product:** Shard Learning — interactive, pedagogy-first education for Australian schools.

**Two users:**
- **Teachers** — control, clarity, at-a-glance classroom data. A trusted professional instrument.
- **Students (Year 7–8+)** — focus, encouragement, a sense the lesson was designed *for* them.

**School-buyer audience** (principals, heads of department) must find it credible; students must find it
exciting. The structure below serves both.

**Brand tone:** Authoritative but warm. Technically credible. Australian-first. Never corporate, never childish.

---

## Colour System

The brand palette below is **shared and stable**. The world themes layer their own atmosphere on top —
see `lava.md` and `forest-theme.md` for per-world surfaces, accents, and light source.

### Brand Palette (shared)

| Name | Token | Hex | Role |
|---|---|---|---|
| **Orange** | `brand-orange` | `#FF7A1F` | Eyebrows, accents, brand warmth |
| **Glow Orange** | `glow-orange` | `#F97316` | Lava CTA, fire glow |
| **Orange Dark** | `brand-orange-dark` | `#e56b17` | Orange hover/pressed |
| **Teal** | `brand-teal` | `#2BC6B2` | Data, links, interactive |
| **Purple** | `brand-purple` | `#7B4BFF` | Depth, atmosphere (lava) |
| **Near Black** | `near-black` | `#141312` | Light-UI headings (product app) |

> Note: the **product app** (teacher dashboard, student view) uses a light UI on white — see the neutral
> palette below. The **marketing worlds** are dark/twilight and pull their surfaces from the theme docs.

### Neutral Palette (product UI)

| Name | Token | Hex | Role |
|---|---|---|---|
| Near Black | `near-black` | `#141312` | Headings, dark surfaces |
| Body Text | `body-text` | `#45423D` | Body copy |
| Off White | `off-white` | `#F8F7F5` | Alternating section backgrounds |
| Border Light | `border-light` | `#E8E6E1` | Borders, dividers |
| Footer Text | `footer-text` | `#A9A69F` | Placeholders |

### Semantic Palette

| Name | Hex | Role |
|---|---|---|
| Success | `#22c55e` | Correct answers, completion |
| Warning | `#fbbf24` | Needs attention |
| Error | `#ef4444` | Incorrect answers, errors |

### Eyebrow rule (both worlds)

Eyebrows drift across too many colours today. One rule:
- **Default eyebrow** = the world's **primary accent** (lava: amber `#FFB347` · forest: mint `#00e5a0`).
- **CTA-adjacent eyebrow** = the world's **CTA colour** (lava: orange `#FF7A1F` · forest: rose `#e85aa4`).
- No other eyebrow colours.

### Contrast rule (both worlds)

Body text on dark/twilight surfaces must clear WCAG AA:
- Body copy: **`white/72`** minimum (was `white/55` — failing). Forest uses a mint-tinted off-white.
- Stat sublabels / metadata: **`white/65`** minimum (was `white/45`).

### Theme system — `mode: light | dark`

Both worlds render through one shared component (`components/world/WorldPage.tsx`) driven by a
`WorldTheme` object (`components/world/theme.ts`). Each theme carries `mode: 'light' | 'dark'` plus
**tokenised colours** — there are no hardcoded `text-white` / `rgba(255,255,255,…)` in the page; all
text resolves through `t.text.{heading,body,bodyStrong,muted,faint,onAccent}`, surfaces through
`t.surface.*`, and the live dashboard through `t.dashboard.*`. This lets the same structure serve a
dark canvas (lava `/variant-e`, twilight forest `/variant-f`) and a light canvas (forest
`/variant-f-light`) by swapping tokens only.

One exception: the **hero always sits over the dark hero video**, so `t.heroText*` / `t.heroOutline*`
stay light on every variant regardless of `mode` — only the below-fold text inverts.

### CSS Variables

All tokens are defined in `globals.css` under `@theme inline` (Tailwind v4) and as raw `:root` vars.
Available as utilities (`bg-brand-orange`, `text-wisp-glow`) and raw vars (`--brand-orange`). World tokens
(`--color-forest-*`, `--color-wisp-*`, `--color-lava-core`, etc.) live alongside.

---

## Typography

### Fonts

| Font | CSS Variable | Tailwind | Usage |
|---|---|---|---|
| **Inter** | `--font-inter` → `--font-sans` | `font-sans` | All UI text |
| **Geist Mono** | `--font-geist-mono` → `--font-mono` | `font-mono` | Code, **curriculum codes** |

Loaded via `next/font`. Never set `font-family` directly — use `font-sans` / `font-mono`.

### Type Scale

| Name | Tailwind | Size | Weight | Usage |
|---|---|---|---|---|
| Display XL | hero `clamp(34px,3.38vw,56px)` `font-bold` | — | 700 | Marketing hero headline |
| Display L | `text-4xl md:text-5xl font-bold` | 36–48px | 700 | Section headlines |
| Display M | `text-3xl font-semibold` | 30px | 600 | Feature headings |
| Heading | `text-xl font-bold` | 20px | 700 | Card titles |
| Body L | `text-lg` | 18px | 400 | Section intro body |
| Body M | `text-sm` | 14px | 400 | Card body, metadata |
| Eyebrow | `text-xs font-semibold tracking-[0.18em] uppercase` | 12px | 600 | Section eyebrows |
| Code | `font-mono text-xs` | 12px | 400/500 | Curriculum codes |

**Rules:** headings `font-bold` (700), section headings `font-semibold` (600). Max prose width `max-w-2xl`/
`max-w-3xl`. Tight heading tracking (`-0.02em`), set in `globals.css`.

---

## Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| `Container` | `max-w-7xl mx-auto px-6 md:px-8` | **Single source of width** — every section uses it so edges align with the nav |
| `py-24` | — | Standard section vertical padding |
| `py-28` | — | Hero-intro and mission |
| `gap-5` / `gap-6` | — | Card grid gaps |
| Card radius | `rounded-3xl` (feature) · `rounded-2xl` (stat/scope/team) | |

Breakpoints: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280.

---

## Page Structure (revised — both worlds)

Leads with authority, makes the product feel alive, theme-agnostic. **This order replaces the old
Hero → Bento → Dashboard → Authority → Mission → Team → Contact.**

| # | Section | Purpose |
|---|---|---|
| 1 | **Hero** | Video + headline + CTA + **authority proof-strip** beneath the CTA ("Built by the author of the Australian Curriculum: Digital Technologies") + three founder mini-credentials as glass chips. The differentiator on screen one. Add headline light-bloom + foreground parallax layer + floating particles (embers/wisps). |
| 2 | **Authority band** | Bruce Fuda + 2016 award + the three founders, consolidated and **promoted** to position 2. The strongest signal for the school buyer, immediately. |
| 3 | **Live product showcase** | The centrepiece. Animated mock of the teacher dashboard — progress rings filling, students lighting up green, "module pushed live" toast. This is where "alive in use" lands. Same component, lit per world (forge panel / scrying table). |
| 4 | **Platform bento** | A **real** bento — one large hero tile + smaller supporting tiles, not a flat 2×2. Hierarchy = drama. |
| 5 | **Curriculum authority + scope** | The depth proof. **Adds `font-mono` AC code chips** (e.g. `ACTDIK023`) on each scope card. Keep checklist + scope grid. |
| 6 | **Mission** | Brief emotional close before the ask. |
| 7 | **Contact / Join the pilot** (+ partner) | Conversion. |

Only treatment (lighting/palette) changes per world — never this order.

---

## Components

### Buttons (CTA)

One primary CTA per section. `rounded-lg`, min 44×44px touch target.
- **Lava CTA:** `bg-[#F97316] hover:bg-[#EA580C]`.
- **Forest CTA:** `bg-[#e85aa4] hover:bg-[#d64493]`.

### Cards

Dark/twilight glass. Lava `bg-white/[0.03]`; forest `bg-white/[0.06]` (moonlit). Border `white/10` (lava)
/ mint hairline (forest), lifting on hover. Hover adds the world's inner glow (ember / mint) — not just a
border change.

### Curriculum Code Chip — first-class element

The single strongest "we actually know the curriculum" signal. Currently **missing** from both pages — add it.

```jsx
<span className="font-mono text-xs font-medium px-2 py-0.5 rounded border">
  ACTDIK023
</span>
```

Style per world: lava = etched into metal/stone (dark fill, inset shadow); forest = glowing in living wood
(soft mint inset glow).

### Stat blocks

`rounded-2xl` glass with a coloured **top border** in the stat's accent. Values count up on scroll entry.

### Eyebrow

```jsx
<p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color }}>…</p>
```

Colour per the eyebrow rule above.

### Section dividers — "strata"

Between major sections, a thin glowing horizon line / mist band in the world's primary accent — reinforces
"descending through a world." Avoid abrupt flat-colour section changes.

---

## Iconography

[Lucide Icons](https://lucide.dev) — 1.5px stroke. `size-4` in buttons, `size-6` in cards. Colour follows
the world accent. Do not mix icon libraries.

---

## Motion — GSAP + ScrollTrigger

Classroom-safe: responsive, never distracting. The scroll *is* the descent through the world.

### App Router integration

- All animation is client-only. One `"use client"` scene wrapper registers
  `gsap.registerPlugin(ScrollTrigger)` once and runs setup inside `useGSAP(() => {…}, { scope: rootRef })`
  (`@gsap/react`) — auto-reverts on unmount so triggers don't leak across client navigations.
- Page components stay Server Components; wrap only interactive sections. Pass `theme: 'lava' | 'forest'`
  as a prop so motion reads accent colours from CSS vars rather than hardcoding.
- `ScrollTrigger.refresh()` after the hero video `loadeddata` and after web-font load to fix trigger
  positions. `ScrollTrigger.config({ ignoreMobileResize: true })`.

### Scroll-entry reveals

**Rule: reveals replay every time an element scrolls into view — in both directions — not once on load.** Use `onEnter` + `onEnterBack` to animate in, and `onLeave` + `onLeaveBack` to reset back out. Never `once: true` for reveals, counters, or the live-dashboard sequence.

- Headings + eyebrows + cards: fade-up `y:48→0`, `opacity 0→1`, `scale 0.96→1`, 0.9s `power3.out`, batched with ~0.1s stagger. Reset out is faster (0.4s `power2.in`). No blur on reveals.
- Stat counters re-count from 0 on each entry.
- Live dashboard restarts its "coming alive" timeline on each entry.

### Parallax / depth

- **Hero video:** scrubbed `y:0→12%, scale 1→1.08` as you leave (small — the mask handles the seam).
- **Depth layers:** existing radial-glow divs + foreground SVG layers move at different rates
  (`yPercent -10…-30`, scrubbed). Lava = drifting ember glow + rock rim; forest = soft bloom/wisp layers +
  foliage.
- **Ambient particles:** non-scroll GSAP loops — lava rising embers, forest drifting wisps/spores.

### Section transitions

- **Pinned live dashboard** (§3): pin briefly, scrub the "coming alive" sequence (rings fill, student rows
  fade in, toast slides). The centrepiece scroll moment.
- Scrubbed background temperature shift between sections (lava: amethyst→ember-warm; forest:
  canopy→floor) — the felt descent.

### Micro-animations

- Stat counters count up on entry (`once:true`, ~1.2s) with the top border drawing in.
- Progress rings: `strokeDashoffset` tween.
- Card hover stays **CSS** (border + `y:-4` lift + glow) — cheaper than GSAP, matches transition language.
- Authority award badge: single gentle scale-pulse on entry.

### Performance & reduced motion

- Wrap all setup in `gsap.matchMedia()` keyed on `(prefers-reduced-motion: no-preference)`. The reduce
  branch sets final states instantly — no scrub, parallax, or loops. Page must be fully legible with zero
  motion. `globals.css` already kills CSS transitions under reduce; GSAP must mirror it.
- Animate only `transform` / `opacity`. Never scrub `top/left/width/height` or box-shadow.
- `will-change: transform` only on actively-parallaxing layers; remove after.
- Pause hero `<video>` and particle loops when off-screen / tab hidden (IntersectionObserver +
  `visibilitychange`).
- Disable pinning + parallax below `md` via `matchMedia` — keep only fade-up reveals. `scrub: 0.5` for the
  pinned sequence (smoothing).

---

## Tailwind Config

Tailwind v4 with `@theme inline` in `globals.css`. No `tailwind.config.ts`. All brand + world tokens are
CSS custom properties exposed as utilities automatically.

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Lead with team/curriculum authority (section 2) | Bury authority in a late team section |
| Light each world from a single source (fire / bioluminescence) | Ship "dark with accents" and call it a theme |
| `font-mono` curriculum code chips, first-class | Omit AC codes — they're the authority signal |
| Body text `white/72`+, sublabels `white/65`+ | `white/55` / `white/45` (fails AA) |
| Eyebrow = world accent; CTA-adjacent = CTA colour | 5 random eyebrow colours per page |
| Forest CTA rose `#e85aa4`, lava CTA orange `#F97316` | Orange CTA on forest (leftover from lava) |
| Real bento with one hero tile | Flat equal 2×2 grid |
| Show the live product (animated) | One static dashboard PNG |
| One `Container` for every section | Per-section custom widths |
| Keep one structure across both worlds | Diverge section order per theme |
