# Shard Learning — Project Brief & Design Reference

> Working summary of all decisions made to date. Companion to `DESIGN.md` and `Brand Audit & Inspiration.md`.
> Last updated: May 2026

---

## 1. Project Overview

**Product:** Shard Learning — interactive, curriculum-aligned Digital Technologies platform for Australian secondary schools (Year 7–8, expanding).

**Differentiator:** Whole-classroom, synchronous learning. Students and teacher do activities together in real time. It's a lesson-delivery system and curriculum-content system in one.

**Founding team (the brand's most underused asset):**
- **Bruce Fuda** — wrote the Australian Curriculum: Digital Technologies. 2016 ACCE/ACS ICT Educator of the Year. Former Chief Education Officer at Grok Academy.
- **Matthew Kameron** — executive EdTech SaaS leader, former school leader.
- **Courtney Weaver** — Digital Technology school leader, former Head of Education at Grok Academy, VP of ECAWA, ATAR exam writer.

**Current phase:** Phase 1 — marketing page rebuild in React.
**Next phase:** Phase 2 — full React design system for product.

---

## 2. Tech Stack

| Decision | Choice | Reason |
|---|---|---|
| Framework | Next.js | SEO, marketing site conventions, Geist font free via next/font |
| Version | Next.js 16, React 19 | Current repo |
| Styling | Tailwind v4 | Already in repo |
| Components | shadcn/ui | Headless + Radix, composable, won't lock into opinionated look |
| Icons | Lucide | 1.5px stroke, geometric, consistent with Geist |
| Font | Geist Sans + Geist Mono | Loaded but not applied — fix required (see §7 bugs) |

**Repo note:** Existing variants A–D in `app/variants/page.tsx`. Variant E (forge hero) added at `app/variant-e/page.tsx`.

---

## 3. Visual Direction — Locked

**Direction:** Game-adjacent, credible. Forge/gem aesthetic prominent in hero, quieter through the rest of the page.

**References:**
- Riot Games — angular cards, dark surfaces
- Final Fantasy XIV — bold CTAs, cinematic depth
- Unicorn Overlord — ornate framing stripped to thin rules

**Not:** full dark product UI. The forge aesthetic is the hero moment. Lower page is warm stone / light neutral.

---

## 4. Colour System

### Brand Gem Palette

| Gem | Role | Hex | Usage |
|---|---|---|---|
| **Fire Opal** | Action / CTA only | `#f97316` | Every primary button, active state, lava glow |
| **Sapphire** | Intelligence / interactive | `#0ea5e9` | Links, data, progress indicators, interactive states |
| **Aquamarine** | Growth / success | `#2dd4bf` | Correct answers, completion, positive progress |
| **Amethyst** | Atmosphere / depth | `#8b6fff` | Hero sections, depth accents, dark surface atmosphere |

### Forge Scene Colours (hero only)

| Name | Hex | Role |
|---|---|---|
| Sky deep | `#0e0720` | Top of hero — night sky above forge |
| Volcanic floor | `#1a0d08` | Bottom of hero — lava rock ground |
| Return purple | `#2a1e38` | Platform section dark background |
| Lava core | `#ffb347` | Molten centre of vortex |
| Lava glow | `#f97316` | Same as Fire Opal — vortex arms |

### Gem Tonal Variants

| Gem | Light (specular) | Mid | Dark (shadow) |
|---|---|---|---|
| Fire Opal | `#fed7aa` | `#f97316` | `#7c2d12` |
| Sapphire | `#7dd3fc` | `#0ea5e9` | `#003d6b` |
| Amethyst | `#c4b5fd` | `#8b6fff` | `#3f22a8` |
| Aquamarine | `#a7f3d0` | `#2dd4bf` | `#0a6e62` |

### Typography on Dark Surfaces

| Token | Value |
|---|---|
| White primary | `#ffffff` |
| White secondary | `rgba(255,255,255,0.60)` |
| White tertiary | `rgba(255,255,255,0.35)` |

### Typography on Light Surfaces

| Token | Value |
|---|---|
| Stone 900 (headings) | `#1c1917` |
| Stone 500 (body) | `#78716c` |
| Stone 400 (secondary) | `#a8a29e` |
| Stone 300 (borders) | `#d6d3d1` |

### Tailwind v4 CSS Variables (add to `globals.css :root`)

```css
:root {
  --color-sky-deep: #0e0720;
  --color-volcanic-floor: #1a0d08;
  --color-return-purple: #2a1e38;
  --color-gem-opal: #f97316;
  --color-gem-sapphire: #0ea5e9;
  --color-gem-amethyst: #8b6fff;
  --color-gem-aqua: #2dd4bf;
}
```

---

## 5. Page Colour Narrative (section by section)

| Section | Background | Surface feel |
|---|---|---|
| Navigation | transparent → `#0e0720` on scroll | Frosted / backdrop-blur |
| Hero | `#0e0720` top → `#1a0d08` bottom | Night sky to volcanic floor |
| Features / Platform | `#2a1e38` | Deep purple — return to authority |
| Social proof / CTA | `#fafaf9` warm stone | Light, readable, trustworthy |
| Contact | `#f3f4f6` soft slate | Clean form surface |
| Footer | `#0e0720` | Returns to forge darkness |

**The transition between hero sky and volcanic floor:** jagged layered SVG mountain silhouette. Purple cloud layers on horizon. No hard cut. Lava glow bleeds through mountain peaks.

---

## 6. Hero Composition — Forge Vortex

The forge vortex is the narrative anchor of the scene. Without it, the gems are decorative. With it, everything has a reason to exist.

### Anatomy

```
hot white core (blown out centre)
  ↓
radial gradient: white → amber → orange → transparent
  ↓
5 spiral arms (curved pen strokes, rotating outward from centre)
  ↓
stone basin ring (dark donut, rough inner edge)
  ↓
outer glow halo (large blurred ellipse, orange 35–40% opacity)
  ↓
ground warmth (blurred orange ellipse, large, behind everything)
```

### Why it matters

- Becomes the **motivated light source** for the entire scene
- Gems catch warm orange light on their undersides from vortex bounce
- Rock formations get orange rim lights on inner edges
- Ground immediately around it is lighter than surrounding floor
- Gives the eye a **destination** — everything in the composition relates to it

### Figma build order (approx 2 hours)

1. Radial gradient circle — white core → amber → orange → transparent. ~240px diameter.
2. Spiral arms — 5 curved strokes from pen tool. Thin, bright amber/orange, stagger rotation ~30–40° apart. Taper outward.
3. Stone basin — dark ellipse ring. Simple dark donut. Rough inner stroke optional.
4. Outer halo — large blurred ellipse, orange at 35–40% opacity. Sits underneath everything.
5. Gems — marquise/navette shape (elongated diamond, pointed at both ends — NOT hexagonal). Each gem needs a warm orange glint on lower face = vortex bounce light.
6. Group all, place at scene centre. It lights everything around it.

### Gem shape — marquise / navette

The correct gem shape from the reference image is a **marquise cut** (elongated pointed oval / navette). Polygon approximation:

```
top point → right wide → bottom point → left wide
```

Not hexagonal. Search terms: "marquise crystal vector", "RPG gem icon set", "navette gem shape".

### Gem positions (relative to vortex centre)

| Gem | Position | Orbit |
|---|---|---|
| Sapphire | Top, close in | Inner orbit |
| Amethyst (large) | Upper left, far | Outer orbit |
| Fire Opal | Right, mid | Mid orbit |
| Aquamarine | Lower left, far | Outer orbit |
| Amethyst (small) | Upper right, far | Outer orbit |

---

## 7. Known Bugs to Fix

### Bug 1 — Geist Sans not applied

`globals.css` has `font-family: Arial, Helvetica, sans-serif` hardcoded on `body`, overriding Geist everywhere.

```css
/* ❌ Remove */
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* ✅ Replace with */
body {
  font-family: var(--font-sans), system-ui, -apple-system, sans-serif;
  color: var(--foreground);
  background: var(--background);
}
```

### Bug 2 — undocumented teal accent

`page.tsx` partner link uses `text-teal-500` — outside the palette.

```jsx
/* ❌ Remove */
<a className="text-teal-500 ...">Learn more</a>

/* ✅ Replace */
<a className="text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
  Learn more →
</a>
```

### Bug 3 — brand name inconsistency

Page `<title>` reads "Shard Learning" while hero displays "Shard Foundry". Resolve before launch — pick one and apply everywhere.

---

## 8. Technical Constraints (non-negotiable)

| Constraint | Reason |
|---|---|
| SVG/CSS only — no canvas, no WebGL, no video | Performance, accessibility, no runtime dependencies |
| Parallax via CSS `transform` only | Compositor layer — smooth on low-end school hardware |
| Gem animation via CSS `@keyframes` only | Same reason |
| `prefers-reduced-motion` on all animations | Accessibility |
| All components as isolated React components | Reusable in product later |

---

## 9. Hero Parallax Layers (variant-e)

Five layers, each a separate `div` with `position: absolute` and CSS transform on scroll:

| Layer | Speed | Content |
|---|---|---|
| Stars | `0.1x` | Small white dots, scattered |
| Far mountains | `0.3x` | Pale blue-purple silhouette, distant |
| Mid mountains + tree silhouettes | `0.5x` | Jagged dark purple, sparse trees |
| Lava floor | `1.0x` | Volcanic brown, static |
| Forge vortex + gems | `0.8x` | The hero asset |

---

## 10. Figma Workflow

**Current approach:** Design in Figma first → code handoff.

**Colour setup in Figma:** Create Local Variables collection `Shard / Forge` with three groups:
- `Narrative/` — 6 section backgrounds
- `Gem/` — 5 gems + tonal variants (light/mid/dark per gem)
- `Text/` — dark and light surface copy colours

**Note on Figma MCP:** The Claude Figma MCP plugin works Figma → code (reads design, writes code). It cannot create Figma variables automatically — manual colour setup in Figma is still required (~5 min). Once variables are set, MCP can read them back.

---

## 11. What Shard Can Own (vs. market)

| Territory | Detail |
|---|---|
| **Live class view** | Nobody has a well-designed real-time whole-classroom dashboard. 28 students, live engagement states, teacher sees it all at a glance. Design this first and most carefully. |
| **Curriculum authority as UI** | AC strand codes (`ACTDIK023`) as first-class UI elements on lesson cards, dashboard, teacher resources. Signals genuine curriculum depth. |
| **Australian identity** | Not US product with AU curriculum bolted on. Visually and culturally Australian from the start. |

---

## 12. Pending Decisions

- [ ] Hero headline real copy — should lead with Bruce Fuda / curriculum authority angle (not product name)
- [ ] Shard wordmark / logo finalised
- [ ] Feature card copy — 3 hero callouts
- [ ] Display typeface — current Inter fine for now, revisit when brand is more locked
- [ ] Update gem SVG shape in variant-e from hexagonal → marquise/navette
- [ ] Add forge vortex to Figma mockup
- [ ] Social proof copy — school count, pilot partner logos

---

## 13. Asset Research Notes

For sourcing forge scene assets:

| Element | Search terms |
|---|---|
| Forge / cauldron | "arcane forge", "magic cauldron top view", "ritual circle stone platform" |
| Lava vortex | "magic vortex swirl vector", "portal swirl orange glow", "molten lava spiral top view" |
| Gem shape | "marquise crystal vector", "RPG gem icon set", "Hearthstone gem style", "navette gem shape" |
| Light rays | "god rays", "volumetric light shafts vector" |
| Props | "blacksmith anvil silhouette vector", "foundry crucible vector" |

**Best sources:** SVGRepo, Flaticon, Noun Project, Freepik, CraftPix.net

---

*Shard Learning Pty Ltd · Project brief compiled May 2026*
*Companion docs: `DESIGN.md`, `Brand Audit & Inspiration.md`*
