# Shard Learning — Design System Principles

---

## Surface Pairing Pattern

Pages alternate between the two gradient surface variants to create natural rhythm and visual contrast. The canonical pairing:

| Section | Surface | Text |
|---|---|---|
| Hero | `.mesh-gradient-purple` | White |
| Content sections | `.mesh-gradient-light` | Dark (`gray-900`) |
| Feature sections | `.mesh-gradient-purple` | White |

> **Light mode / dark mode are not separate themes** — they're alternating surface layers within the same page, both sharing the same blob motion system.

### Glass Card Principle — contrast on any surface

Light glass (`bg-white/10`) dissolves on light surfaces. Use **dark glass** for components that float above both surface types (FABs, tooltips, popovers, modals):

```css
/* Universal glass card — holds contrast on light AND dark surfaces */
background: rgba(17, 17, 17, 0.75);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.10);
```

Light glass is only appropriate when the surface beneath it is guaranteed dark (e.g. an overlay inside a `.mesh-gradient-purple` section).

---

## Brand Palette

| Token | Hex | Usage |
|---|---|---|
| Orange 500 | `#FF7A1F` | Primary CTA, buttons, FAB |
| Orange 400 | `#FFBB00` | Gradient bottom (orange faces) |
| Teal 500 | `#2BC6B2` | Gradient top (teal faces) |
| Teal 400 | `#53E6EF` | Gradient bottom (teal faces) |
| Purple 600 | `#7B4BFF` | Gradient top (purple faces) |
| Purple 500 | `#A750FF` | Gradient bottom (purple faces) |
| Deep Purple | `#2e1065` | Hero background base |
| Violet 500 | `#8b5cf6` | Blob A highlight |
| Violet 700 | `#6d28d9` | Mid bloom |
| Indigo 900 | `#4c1d95` | Blob A shadow, stroke |

---

## Gradient Surface System

Two named surface variants sharing the same blob motion. Apply to any full-bleed section.

```css
.mesh-gradient-purple   /* deep violet — dark UI */
.mesh-gradient-light    /* white/grey — light UI  */
```

### Usage
```jsx
<section className="mesh-gradient-purple relative overflow-hidden">
  <div className="surface-content">
    {/* your content here */}
  </div>
</section>
```

---

## Z-Index Principle — Blobs are always background

**Rule:** Gradient blob pseudo-elements (`::before`, `::after`) are always `z-index: 0`. All foreground content must sit above them.

**How it's enforced:**
- Each gradient surface uses `isolation: isolate` to create a new stacking context
- Blob pseudo-elements are explicitly `z-index: 0; pointer-events: none`
- Wrap all foreground content in `.surface-content` (sets `position: relative; z-index: 1`)

**Never skip `.surface-content`.** Without it, text and interactive elements can be painted over by the animating blobs, losing contrast unpredictably.

---

## Motion

Blob animations are shared across both surface variants. Do not change timing independently — they must stay in sync.

| Token | Value | Purpose |
|---|---|---|
| `blob-a` | 16s ease-in-out infinite alternate | Primary blob — faster cycle |
| `blob-b` | 22s ease-in-out infinite alternate | Secondary blob — slower, drifts out of phase |

The 16s/22s ratio is intentional — they drift out of phase over ~176s before repeating, creating the appearance of continuous, non-repeating motion.

---

## Diamond (3D Hero Mark)

- Geometry: `OctahedronGeometry(1, 0)` scaled `(1, 1.2, 1)` — slightly elongated
- Colours: graph 3-colouring of octahedron faces, brand gradients per-vertex
- Edge stroke: single `Edges` layer, `lineWidth: 4`, `color: #4c1d95`, `opacity: 0.9`
- Canvas: transparent WebGL (`alpha: true`, `setClearColor(0,0,0,0)`)
- Rotation: `y += 0.005` per frame, slight x tilt `0.15 rad`

---

## Navigation

- Layout: 3-column grid — wordmark left, logo mark centre, actions right
- Background: `bg-white/5 backdrop-blur-xl` — glass effect over hero gradient
- Border: `border-b border-white/10` + subtle inset shadow
- Primary action: `For Schools` — solid orange `bg-orange-500`
- Secondary action: `Sign In` — ghost `border-white/30 text-white/80`

---

## FAB (Contact)

- Stacked: icon button on top, callout card below
- Icon button: `w-16 h-16` rounded-full, `bg-orange-500`
- Card: `bg-white/10 backdrop-blur-md border-white/15` glass card
- Position: `fixed bottom-6 right-6 z-50`
