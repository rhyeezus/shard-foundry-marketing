# Shard Learning — Lava World Theme

> The reference world. Sibling to `forest-theme.md`.
> Shared system (tokens, type, components, structure, motion) lives in `DESIGN.md` — this doc owns
> **only** the lava world's palette and treatment.
>
> **Route:** `/variant-e` (also `/1`)
> **Hero video:** `/assets/Lava_waterfall_in_cartoon_style_202606101721.mp4` (non-negotiable)

---

## 1. World concept

**A forge seen from above the molten core.** Dark, high-contrast, deep-purple atmosphere lit by fire
from below. Powerful, dramatic, game-world immersive.

**Audience:** youth male, ages 8–16.
**Energy:** powerful, dramatic, immersive.
**Light source:** fire — warm amber-orange, rising from below. Everything hotter the lower you scroll.

This is the literal expression of `DESIGN.md`'s **lit from within** principle: the lava world is lit by
molten fire. See `DESIGN.md` → "One product, two worlds".

---

## 2. Palette — as shipped

These are the **actual values on `/variant-e`** — the source of truth. (Earlier docs listed `#0e0720` /
`#162550` navy for lava; those were never shipped. Ignore them.)

### Surfaces

| Role | Hex | Usage |
|---|---|---|
| Outer wrapper | `#0D0620` | Page `<div>` base — shows only on overscroll |
| Sky deep (hero + below-fold) | `#1A0D38` | The main canvas. Hero bg and below-fold merge on this |
| Ember-warm base (lower sections) | `#1E0F30` | Two-tone descent target — see §3 |
| Authority card gradient | `linear-gradient(160deg, #120d2e, #0a0a1f)` | Bruce Fuda card |
| Footer | `#07060F` | Deepest void |

### Accents

| Role | Token | Hex | Usage |
|---|---|---|---|
| Fire / CTA | `--color-glow-orange` | `#F97316` | Every CTA, primary action, lava glow |
| CTA hover | — | `#EA580C` | CTA pressed/hover |
| Lava core (warm highlight) | `--color-lava-core` | `#FFB347` | Decorative warm glow, scope edge gradients |
| Brand orange | `--color-brand-orange` | `#FF7A1F` | Eyebrows, stat accents |
| Teal (data/links) | `--color-brand-teal` | `#2BC6B2` | Secondary accent, partner link |
| Amethyst depth | `--color-brand-purple` | `#7B4BFF` | Atmosphere, mission glow |
| Amethyst light | — | `#A750FF` | Mission eyebrow |

### Card surfaces (on dark)

| Role | Value |
|---|---|
| Card fill | `bg-white/[0.03]` → hover lift to `white/[0.05]` |
| Card border | `border-white/10` → hover `border-white/20` |
| Card glow (hover) | faint warm inner ember glow — heat radiating, not just border lightening |

---

## 3. Treatment — amplifying the drama

**Two-tone molten depth.** Do not use one flat `#1A0D38` top-to-bottom. Introduce a subtle vertical
temperature shift: deep amethyst at the top → warmer, ember-tinged purple-black (`#1E0F30`) toward the
forge/curriculum sections. The page should feel **hotter the lower you scroll**.

**Foreground rock rim.** Use the existing unused SVG layers (`/assets/lava_layer_4.svg`,
`lava_1_layer_4.svg`, `lava_1_layer_5.svg`, `lava_2_layer_4.svg`) as a thin parallax silhouette at the
bottom of the hero — a jagged rock rim with ember glow that frames the video and sells depth.

**Rising embers.** 8–12 blurred warm dots, slow upward GSAP loop, very subtle. The hero's "alive" cue.
Forest's wisps are the cool-light equivalent.

**Headline bloom.** Soft warm radial bloom behind the H1 so the text sits in a pool of firelight, not
on flat colour.

**Ember glow on cards.** Card hover picks up a faint warm inner glow (heat radiating), in addition to the
border lightening.

**Glowing gems.** The `orangegem.svg` / `aqua_gem.svg` artifacts should read as molten — pulsing glow halo
behind each, subtle parallax drift on scroll. They are glowing artifacts, not flat decals.

**Curriculum code chips** (`font-mono`) styled **etched into metal/stone** — subtle inset shadow, dark
fill. This is the curriculum-authority detail; see `DESIGN.md` → Components.

---

## 4. Eyebrow rule (lava)

Per `DESIGN.md`'s shared eyebrow discipline:
- Default eyebrow = **lava-core amber `#FFB347`** (the world's primary accent).
- Eyebrows adjacent to a CTA = **brand-orange `#FF7A1F`** (the action colour).
- No other eyebrow colours. (Current page drifts across 5 — consolidate to these two.)

---

## 5. CTA

Lava CTA stays **molten orange `#F97316`** (hover `#EA580C`). It is the action colour and the fire of the
world simultaneously — it belongs. Forest's CTA is rose, not orange, so the two worlds stay distinct; see
`forest-theme.md` → CTA.

---

## 6. What carries from the shared system

Structure, type scale, component shapes, section order, motion/GSAP — all live in `DESIGN.md` and apply
identically to both worlds. Only the **lighting and palette** in this doc change per world.
