# Shard Learning — DESIGN.md

> Drop this file into any Shard project root. AI coding agents and developers read it to generate UI that matches the brand consistently across the marketing site and product.
>
> **Companion doc:** `Brand Audit & Inspiration.md` — the strategic context behind these decisions.

---

## Brand Identity

**Product:** Shard Learning — interactive, pedagogy-first education for Australian schools.

**Two users, one product:**
- **Teachers** — need control, clarity, and at-a-glance classroom data. The UI should feel like a trusted professional instrument.
- **Students (Year 7–8+)** — need focus, encouragement, and a sense the lesson was designed *for* them.

**Brand tone:** Authoritative but warm. Technically credible. Australian-first. Never corporate, never childish.

**Core design principle:** Quiet at rest, alive in use. Calm and organised when idle — filled with activity, data, and energy during a live lesson.

---

## Colour System

### Brand Palette

| Name | Tailwind | Hex | Role |
|---|---|---|---|
| **Orange** | `orange-500` | `#f97316` | Primary CTAs, role text, active states, key accents |
| **Orange Dark** | `orange-600` | `#ea580c` | CTA hover / pressed |
| **Orange Tint** | `orange-100` | `#ffedd5` | Selected state fills, soft orange backgrounds |
| **Deep Navy** | — | `#162550` | Hero sections, footer, dark surfaces, teacher-mode accents |
| **Navy Mid** | — | `#1e3a6e` | Dark surface hover states, card backgrounds on navy |
| **Blue** | — | `#6080ff` | Interactive elements, links, data features, progress indicators |
| **Blue Hover** | — | `#7b96ff` | Blue hover state |
| **Blue Tint** | — | `rgba(96,128,255,0.1)` | Blue soft backgrounds (student badges, info fills) |

### Neutral Palette

| Name | Tailwind | Hex | Role |
|---|---|---|---|
| **Gray 900** | `gray-900` | `#111827` | Primary headings, footer background |
| **Gray 700** | `gray-700` | `#374151` | Body text |
| **Gray 600** | `gray-600` | `#4b5563` | Supporting / secondary body text |
| **Gray 400** | `gray-400` | `#9ca3af` | Placeholders, disabled states |
| **Gray 300** | `gray-300` | `#d1d5db` | Borders, dividers |
| **Gray 100** | `gray-100` | `#f3f4f6` | Subtle section backgrounds |
| **Gray 50** | `gray-50` | `#f9fafb` | Alternating section backgrounds |
| **White** | `white` | `#ffffff` | Primary background, card surfaces |

### Semantic Palette

| Name | Tailwind | Hex | Role |
|---|---|---|---|
| **Success** | `green-500` | `#22c55e` | Correct answers, completion, positive progress |
| **Success Tint** | `green-100` | `#dcfce7` | Success background fill |
| **Warning** | `amber-400` | `#fbbf24` | Student needs attention, incomplete |
| **Warning Tint** | `amber-100` | `#fef3c7` | Warning background fill |
| **Error** | `red-500` | `#ef4444` | Incorrect answers, errors |
| **Error Tint** | `red-100` | `#fee2e2` | Error background fill |

### CSS Variables

```css
/* globals.css */
:root {
  --background: #ffffff;
  --foreground: #111827;
  --brand-orange: #f97316;
  --brand-navy: #162550;
  --brand-blue: #6080ff;
  --border: #d1d5db;
  --muted: #9ca3af;
  --muted-bg: #f9fafb;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --border: #374151;
  --muted: #6b7280;
  --muted-bg: #111827;
}
```

### 3D Diamond (Diamond.tsx) — isolated palette

These values are used only for the hero diamond. Do not reuse in general UI.

| Role | Hex |
|---|---|
| Diamond body | `#162550` (same as brand navy) |
| Specular sheen | `#6080ff` (same as brand blue) |
| Key light | `#ffffff` |
| Fill light | `#2244aa` |
| Rim light | `#4466dd` |
| Ambient | `#0a1535` |

---

## Typography

### Fonts

| Font | CSS Variable | Tailwind Class | Usage |
|---|---|---|---|
| **Geist Sans** | `--font-geist-sans` → `--font-sans` | `font-sans` | All UI text — headings, body, labels, buttons |
| **Geist Mono** | `--font-geist-mono` → `--font-mono` | `font-mono` | Code blocks, terminal output, curriculum codes |

Both are loaded via `next/font/google`. Never set `font-family` directly in components — always use `font-sans` or `font-mono` Tailwind classes.

### Type Scale

| Name | Tailwind | Size | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| Display XL | `text-5xl font-bold` | 48px | 700 | 1.1 | Marketing hero headline |
| Display L | `text-4xl font-bold` | 36px | 700 | 1.15 | Section headlines |
| Display M | `text-3xl font-semibold` | 30px | 600 | 1.2 | Feature headings |
| Heading | `text-2xl font-semibold` | 24px | 600 | 1.3 | Card titles, panel headings |
| Subheading | `text-xl font-medium` | 20px | 500 | 1.4 | Sub-sections, form sections |
| Body L | `text-base` | 16px | 400 | 1.6 | Default body, lesson content |
| Body M | `text-sm` | 14px | 400 | 1.5 | Secondary body, metadata |
| Caption | `text-xs` | 12px | 400 | 1.4 | Labels, timestamps |
| Caption Bold | `text-xs font-semibold` | 12px | 600 | 1.4 | Role badges, status chips |
| Code | `font-mono text-sm` | 14px | 400 | 1.6 | Code, curriculum codes |

**Rules:**
- Body text minimum `text-sm` (14px) — classroom projection must remain readable.
- Max line length for prose: `max-w-prose` (~65 characters).
- Headings: `text-gray-900` on light, `text-white` on navy/dark.
- Body: `text-gray-700` default, `text-gray-600` for secondary/supporting.

---

## Spacing & Layout

### Key Landmarks

| Token | Value | Usage |
|---|---|---|
| `p-4` | 16px | Minimum card padding |
| `p-6` | 24px | Standard card/panel padding |
| `p-8` | 32px | Section inner padding (mobile) |
| `px-4 md:px-8` | — | Page-level horizontal padding |
| `py-16 md:py-24` | — | Standard section vertical padding |
| `gap-6` | 24px | Card grid gap |

### Grid & Width

- Max content width: `max-w-7xl mx-auto` (1280px)
- Prose/form content: `max-w-2xl` or `max-w-3xl`
- Breakpoints: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280

### Section Rhythm (Marketing)

Sections alternate backgrounds with consistent padding:

```
Hero       bg-[#162550]   py-24
Features   bg-white       py-16 md:py-24
Platform   bg-gray-50     py-16 md:py-24
Mission    bg-[#162550]   py-16 md:py-24
Team       bg-white       py-16 md:py-24
Contact    bg-gray-50     py-16 md:py-24
Footer     bg-gray-900
```

---

## Components

### Buttons

```jsx
{/* Primary CTA */}
<button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
  Join the Pilot
</button>

{/* Secondary */}
<button className="border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-150">
  Learn More
</button>

{/* Ghost — on navy/dark backgrounds */}
<button className="border border-white/30 hover:border-white/60 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-150">
  Sign In
</button>

{/* Link */}
<a className="text-[#6080ff] hover:text-[#7b96ff] underline-offset-2 hover:underline transition-colors duration-150 font-medium text-sm">
  Learn more →
</a>
```

Rules: one primary CTA per section · `rounded-lg` always · min 44×44px touch target.

### Cards

```jsx
{/* Standard */}
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  <div className="text-orange-500 mb-3">{/* Lucide icon, size-6 */}</div>
  <h3 className="text-lg font-semibold text-gray-900 mb-2">Title</h3>
  <p className="text-sm text-gray-600 leading-relaxed">Description.</p>
</div>

{/* On navy background */}
<div className="bg-white/10 border border-white/20 rounded-xl p-6">
  <h3 className="text-lg font-semibold text-white mb-2">Title</h3>
  <p className="text-sm text-white/70 leading-relaxed">Description.</p>
</div>
```

### Navigation

```jsx
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
    <a href="/" className="font-bold text-xl text-gray-900">Shard</a>
    <div className="hidden md:flex items-center gap-8">
      <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Platform</a>
      <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">For Schools</a>
    </div>
    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
      Get in Touch
    </button>
  </div>
</nav>
```

### Role Badges

```jsx
{/* Teacher */}
<span className="inline-flex items-center text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
  Teacher
</span>

{/* Student */}
<span className="inline-flex items-center text-xs font-semibold bg-[rgba(96,128,255,0.1)] text-[#6080ff] px-2.5 py-1 rounded-full">
  Student
</span>
```

### Curriculum Code Chip

First-class element — signals to teachers that the platform genuinely understands curriculum mapping.

```jsx
<span className="font-mono text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">
  ACTDIK023
</span>
```

### Hero Section

```jsx
<section className="bg-[#162550] py-24 px-4 md:px-8 text-white relative overflow-hidden">
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
      Australian Curriculum · Digital Technologies
    </p>
    <h1 className="text-5xl font-bold leading-tight mb-6">
      Quality education,<br />interactive and curriculum-aligned.
    </h1>
    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
      Made for teachers by teachers.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors">
        Join the Pilot
      </button>
      <button className="border border-white/30 hover:border-white/60 text-white font-medium px-8 py-3.5 rounded-lg transition-colors">
        See the Platform
      </button>
    </div>
  </div>
</section>
```

### Progress Ring (Product UI)

```jsx
<div className="relative w-12 h-12">
  <svg className="w-12 h-12 -rotate-90" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="none" stroke="#e5e7eb" strokeWidth="3" />
    <circle cx="24" cy="24" r="20" fill="none" stroke="#f97316" strokeWidth="3"
      strokeDasharray={`${progress * 1.257} 125.7`} strokeLinecap="round" />
  </svg>
  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-900">
    {progress}%
  </span>
</div>
```

---

## Iconography

- **Library:** [Lucide Icons](https://lucide.dev) — 1.5px stroke, 24px grid. Consistent with Geist's geometric character.
- **In buttons:** `size-4` (16px)
- **In feature cards:** `size-6` (24px)
- **Colour:** follows text — `text-orange-500` for accents, `text-gray-500` for neutral UI.
- Do not mix icon libraries.

---

## Motion

Classroom-safe animation — responsive but never distracting.

| Context | Rule |
|---|---|
| Button hover | `transition-colors duration-150` |
| Card hover | `transition-shadow duration-200` |
| Page transitions | Opacity fade, 200ms |
| Lesson activity reveal | `opacity + translateY`, 300ms ease-out |
| Completion / success | Scale pulse `scale-110 → scale-100`, 400ms |
| Dashboard live data | Smooth number/bar updates, `duration-500` |

Always include reduced-motion support:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Tailwind Config

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Courier New', 'monospace'],
      },
      colors: {
        navy: {
          DEFAULT: '#162550',
          mid: '#1e3a6e',
          ambient: '#0a1535',
        },
        brand: {
          blue: '#6080ff',
          'blue-hover': '#7b96ff',
        },
      },
    },
  },
}

export default config
```

---

## Bug Fixes

### 1 — Geist Sans not applied to body

`globals.css` line ~25 has `font-family: Arial, Helvetica, sans-serif` hardcoded on `body`, which overrides Geist Sans everywhere.

```css
/* ❌ Remove this */
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

### 2 — teal-500 single-use accent

`page.tsx` partner link uses `text-teal-500` — an undocumented colour outside the palette.

```jsx
/* ❌ Remove */
<a className="text-teal-500 ...">Learn more</a>

/* ✅ Replace with brand blue */
<a className="text-[#6080ff] hover:text-[#7b96ff] transition-colors font-medium">
  Learn more →
</a>
```

---

## Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| One `orange-500` CTA per section | Two orange CTAs side by side |
| `gray-700` for body text | `gray-900` for body (save it for headings) |
| `rounded-lg` on all interactive elements | Mix border-radius values |
| Show product screenshots early | Describe features in text only |
| Lead with team credentials | Bury authority in a late-page team section |
| `font-mono` for curriculum codes and code | Render AC codes in a proportional font |
| Lucide icons at consistent sizes | Mix icon libraries |
| Orange = action · Navy = depth · Blue = data/links | Add new colours without a semantic role |
