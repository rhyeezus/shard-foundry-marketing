# Shard Learning — Forest World Theme

> Sibling to `lava.md`. Shared system (tokens, type, components, structure, motion) lives in `DESIGN.md`
> — this doc owns **only** the forest world's palette and treatment.
>
> **Route:** `/variant-f` (also `/2`)
> **Hero video:** `/assets/forest-theme.mp4` (non-negotiable)

---

## 1. World concept

**An enchanted canopy at twilight.** Not dark mode — a lifted, glowing, magical twilight lit from within
the foliage by bioluminescence. Whimsical and dreamlike, never childish, never pink-only.

**Audience:** youth female, ages 8–16.
**Energy:** whimsical, magical, enchanted.
**Light source:** bioluminescence — cool mint-teal, leaking from within the foliage. Where lava is lit by
fire from below, forest is lit by glow from within.

This is the cool-light counterpart to the lava world. See `DESIGN.md` → "One product, two worlds" and the
**lit from within** principle.

---

## 2. Direction — twilight, not near-black

The previous forest build was a dark recolour of lava — near-black greens (`#020908` footer) that read as
a "dark green dungeon." The corrected direction is **mid-tone twilight**: greens stay rich but breathe,
and never bottom out to black.

| Decision | Old (retired) | New (twilight) |
|---|---|---|
| Base never fully blacks out | `#020908` footer | `#0a2018` deepest |
| Cards | `white/[0.03]` (shadowed) | `white/[0.06]`→`0.10` (moonlit) |
| Body text | `white/55` (failing AA) | mint-tinted off-white, brighter |
| Bioluminescence | restrained | generous — the hero device |
| CTA | molten orange (leftover) | **rose bloom** (in-world) |

---

## 3. Palette — twilight forest

### Surfaces — page descent

A lifted teal-twilight gradient that never reaches black:

```
background: linear-gradient(180deg,
  #123a2a 0%,    /* canopy top — lifted, breathing green */
  #0e2a20 45%,   /* mid canopy */
  #0a2018 100%); /* forest floor — deepest, still green, never black */
```

| Role | Token | Hex | Usage |
|---|---|---|---|
| Canopy top | `--color-forest-canopy` | `#123a2a` | Top of page descent |
| Mid canopy | `--color-forest-sky-near` | `#1a3d2b` | Mid sections |
| Forest floor | `--color-forest-floor-lift` | `#0a2018` | Footer / deepest — **not** `#020908` |
| Enchant purple | `--color-forest-enchant` | `#2d1566` | Magical depth in shadows/mid-tones |
| Authority card | — | `linear-gradient(160deg, #163d2b, #0e2a20)` | Bruce Fuda card (lifted) |

### Accents — canopy

| Role | Token | Hex | Usage |
|---|---|---|---|
| Bioluminescent mint (primary light) | `--color-wisp-glow` | `#00e5a0` | The world's light. Glow leaks, scope edges, data, eyebrows |
| Wisp core (hotspot) | `--color-wisp-core` | `#80ffcc` | Inner light of glows, gem hotspots |
| Rose bloom (eye-draw accent) | `--color-rose-bloom` | `#e040a0` | The magic spark — 2–3 per scene max |
| Rose bloom light | `--color-rose-bloom-light` | `#f9a8d4` | Rose highlight variant |
| **Rose CTA** | — | `#e85aa4` (hover `#d64493`) | Primary CTA — see §6 |
| Petal/sun warm | — | `#f4b942` | Warmth without "fire" — sparingly |

### Card surfaces (moonlit, over twilight)

| Role | Value |
|---|---|
| Card fill | `bg-white/[0.06]` → hover `white/[0.10]` (brighter than lava — moonlit, not shadowed) |
| Card border | `border-wisp-glow/15` mint hairline → hover `wisp-glow/30` |
| Card glow (hover) | soft mint inner glow — foliage lit from within |

---

## 4. Treatment — twilight enchantment

**Bioluminescence is the hero device.** Mint `#00e5a0` glow leaks from behind cards, along curriculum
scope edges, behind the gems — as if the foliage itself is lit. Generous where lava's fire is
restrained-warm.

**Headline bloom.** Soft mint radial bloom behind the H1 — text sits in a pool of bioluminescent light.

**Drifting wisps + floating spores** throughout the page (not just hero). Soft, slow, dreamlike blurred
mint dots on a GSAP loop. This is where "whimsical" is earned — forest's equivalent of lava's rising embers.

**Foreground foliage.** Thin parallax layer of soft-focus ferns/fronds at the bottom of the hero, framing
the video — the cool-light counterpart to lava's rock rim.

**Rose bloom as the magic spark.** `#e040a0` is the world's designated eye-draw accent — use it on no more
than **2–3 elements per scene**: the mission section, one gem halo, the CTA. The "flower in the dark wood."

**Glowing gems.** Same gem SVGs, lit by mint instead of fire — mint glow halo behind each, subtle parallax
drift.

**Curriculum code chips** (`font-mono`) styled **glowing/etched into living wood** — soft mint inset glow.

---

## 5. Eyebrow rule (forest)

Per `DESIGN.md`'s shared eyebrow discipline:
- Default eyebrow = **wisp-glow mint `#00e5a0`** (the world's primary accent).
- Eyebrows adjacent to a CTA = **rose `#e85aa4`** (the action colour).
- No other eyebrow colours.

---

## 6. CTA — rose, not orange

Forest's primary CTA is **rose bloom `#e85aa4`** (hover `#d64493`), **not** molten orange.

Rationale:
- Mint is the *ambient light* of the entire world — a mint CTA would dissolve into the atmosphere.
- The CTA must **contrast** the world to say "act here." Rose against cool mint-lit twilight pops exactly
  the way molten orange pops against lava's purple — it is the *structural sibling* of lava's CTA, not a copy.
- Rose is already the world's designated eye-draw accent (§4), so it reads as native.

This supersedes the earlier "CTAs stay orange across both themes" rule — the two worlds are deliberately
distinct, and a shared orange undercut the forest identity.

---

## 7. CSS tokens

Defined in `globals.css` under `:root {}` and mirrored in `@theme inline {}` so they're available as
Tailwind utilities (`bg-wisp-glow`, `text-rose-bloom`, etc.). The existing forest tokens stay; add the
twilight-lift surface values from §3 (`forest-canopy`, `forest-floor-lift`) and the rose CTA value.

```css
/* ── Forest World — twilight surfaces (lifted) ── */
--color-forest-canopy:      #123a2a;
--color-forest-floor-lift:  #0a2018;

/* ── Canopy accents ── */
--color-wisp-glow:          #00e5a0;
--color-wisp-core:          #80ffcc;
--color-rose-bloom:         #e040a0;
--color-rose-bloom-light:   #f9a8d4;
--color-rose-cta:           #e85aa4;
--color-rose-cta-hover:     #d64493;
```

---

## 8. Lava → Forest mapping (corrected)

The lava column here matches **what is actually shipped** (`/variant-e`). Earlier versions of this table
listed `#0e0720` / `#162550` navy for lava — those were never shipped; corrected below.

| Role | Lava (shipped) | Forest (twilight) |
|---|---|---|
| Canopy / sky top | `#1A0D38` | `#123a2a` |
| Mid | `#1A0D38` | `#1a3d2b` |
| Floor / footer | `#07060F` | `#0a2018` |
| Atmosphere accent | `#7B4BFF` amethyst | `#2d1566` enchant |
| Primary light source | `#F97316` fire | `#00e5a0` bioluminescence |
| Light core | `#FFB347` lava core | `#80ffcc` wisp core |
| World eye-draw accent | `#FF7A1F` | `#e040a0` rose bloom |
| CTA | `#F97316` orange | `#e85aa4` rose |
| Card fill | `white/[0.03]` | `white/[0.06]` (lifted) |

---

## 8b. Light-mode (prototype) — `/variant-f-light`

The twilight Forest above is the current default. A **genuine light-mode** Forest is prototyped on a
separate route, `/variant-f-light`, for side-by-side comparison. It targets the original
"light/whimsical, not dark mode" brief: as you scroll past the hero, the page descends into a
sun-dappled mint-white canvas rather than staying dark.

Built via the theme system's `mode: 'light' | 'dark'` flag (see DESIGN.md) — same shared `WorldPage`,
same structure, only tokens differ.

| Role | Value |
|---|---|
| Hero base (frames the dark video) | `#123A2A` canopy — fades fast into the canvas |
| Below-fold canvas | `#F4FBF7` soft mint-white (primary surface) |
| Body ink | `rgba(10,46,32,.82)` over emerald base `#0A2E20` (clears WCAG AA) |
| Heading ink | `#0A2E20` deep emerald |
| Card surface | solid `#FFFFFF` + soft mint drop-shadow `0 10px 40px -10px rgba(0,229,160,.18)` |
| Contrast UI / data accent | `#059669` deeper teal — **mint `#00e5a0` loses its glow on white**, so teal carries eyebrows, ring strokes, icons |
| Ambient mint | used as soft-focus glow/shadow, never as a fill |
| CTA | rose `#e85aa4` (hover `#d64493`) — unchanged, the eye-draw against the light canvas |
| Footer | `#0A2E20` deep emerald — grounds the foot |
| Nav | white text/logo over the dark hero video, flips to emerald text + white/blur bar once scrolled onto the canvas |

Hero text stays **white** on all variants (it always sits over the dark hero video). Only the
below-fold text inverts to emerald ink in light mode.

The twilight version remains the default until the light prototype is chosen.

## 9. What carries from the shared system

Structure, type scale, component shapes, section order, motion/GSAP — all in `DESIGN.md`, identical across
both worlds. Only the **lighting and palette** here change per world.
