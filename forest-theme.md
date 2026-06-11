# Shard Learning — Forest Theme Spec

> Companion to the existing lava/forge theme in `globals.css`.
> The forest theme is a full parallel to the narrative + forge-accents token groups.
> Gem palette (Fire Opal, Sapphire, Aquamarine, Amethyst) is shared — no changes needed.

---

## 1. CSS tokens to add to globals.css

Add these two blocks inside `:root {}`, directly beneath the existing forge accent tokens.

```css
/* ── Narrative — Forest World ── */
--color-forest-sky-deep:     #040d08;   /* Deepest sky, base canvas */
--color-forest-sky-mid:      #0a1f12;   /* Mid sky, canopy shadow */
--color-forest-sky-near:     #1a3d2b;   /* Near sky, tree silhouette layer */
--color-forest-floor:        #0d1a0d;   /* Ground surface, dark moss */
--color-forest-enchant:      #2d1566;   /* Enchantment purple — maps to Return Purple */
--color-forest-warm-moss:    #c8d9b0;   /* Lit surface highlight — maps to Warm Stone */

/* ── Canopy Accents — Forest World (replaces Forge Accents) ── */
--color-wisp-glow:           #00e5a0;   /* Primary bioluminescent light source */
--color-wisp-core:           #80ffcc;   /* Wisp hotspot / inner light */
--color-rose-bloom:          #e040a0;   /* Mushroom caps, flowers — forest-only accent */
--color-rose-bloom-light:    #f9a8d4;   /* Rose highlight variant */
/* Gem highlights carry across unchanged from forge theme */
```

---

## 2. @theme inline extensions for Tailwind v4

Add these inside the `@theme inline {}` block in `globals.css`, alongside the existing forge colour extensions.

```css
/* ── Forest World tokens — available as Tailwind utilities ── */
--color-forest-sky-deep:     #040d08;
--color-forest-sky-mid:      #0a1f12;
--color-forest-sky-near:     #1a3d2b;
--color-forest-floor:        #0d1a0d;
--color-forest-enchant:      #2d1566;
--color-forest-warm-moss:    #c8d9b0;
--color-wisp-glow:           #00e5a0;
--color-wisp-core:           #80ffcc;
--color-rose-bloom:          #e040a0;
--color-rose-bloom-light:    #f9a8d4;
```

---

## 3. Colour mapping — Lava → Forest

| Role | Lava Token | Lava Hex | Forest Token | Forest Hex |
|---|---|---|---|---|
| Deepest sky | `Narrative/Sky Deep` | `#0e0720` | `--color-forest-sky-deep` | `#040d08` |
| Mid sky | `Narrative/Sky Mid` | `#160a38` | `--color-forest-sky-mid` | `#0a1f12` |
| Near sky | `Narrative/Sky Near` | `#2a1566` | `--color-forest-sky-near` | `#1a3d2b` |
| Ground surface | `Narrative/Volcanic Floor` | `#1a0800` | `--color-forest-floor` | `#0d1a0d` |
| Atmosphere accent | `Narrative/Return Purple` | `#4a1a8c` | `--color-forest-enchant` | `#2d1566` |
| Lit surface | `Narrative/Warm Stone` | `#c8b89a` | `--color-forest-warm-moss` | `#c8d9b0` |
| Primary glow | `Forge/Lava Glow` | `#f97316` | `--color-wisp-glow` | `#00e5a0` |
| Glow core | `Forge/Lava Core` | `#ffb347` | `--color-wisp-core` | `#80ffcc` |
| World accent | _(none)_ | — | `--color-rose-bloom` | `#e040a0` |
| World accent light | _(none)_ | — | `--color-rose-bloom-light` | `#f9a8d4` |

Gem highlights (Fire Opal, Sapphire, Amethyst, Aquamarine) are **unchanged** — they carry across both worlds.

---

## 4. Design intent

**Light source swap** — the single most important difference.
Lava world = lit by fire (warm amber-orange).
Forest world = lit by bioluminescence (cool mint-teal).
Every atmospheric decision follows from this.

**Colour temperature** — lava is warm-dominated; forest is cool-dominated with a single warm accent (rose bloom on mushrooms/flowers). Neither is neutral — both feel like fully inhabited worlds.

**Rose bloom usage** — `--color-rose-bloom` (`#e040a0`) is the forest world's equivalent of Lava Glow in terms of visual hierarchy: it's the accent that draws the eye to important elements (gem glow halos, mushroom clusters, flower particles). Use sparingly — no more than 2–3 instances per scene.

**Enchant purple** (`#2d1566`) maps directly to Return Purple — it's the atmosphere colour for magical depth in shadows and mid-tones. Slightly cooler than the lava equivalent.

---

## 5. Claude Code implementation prompt

Paste this into Claude Code when you're ready to implement:

---

```
Read DESIGN.md and app/globals.css before writing any code.

I need a forest theme variant added to this project. The project already has a lava/forge world theme. The forest theme is a full parallel — same token structure, different colour values.

## Token additions

In `app/globals.css`, add the following inside the `:root {}` block, after the existing forge accent tokens:

```css
/* ── Narrative — Forest World ── */
--color-forest-sky-deep:     #040d08;
--color-forest-sky-mid:      #0a1f12;
--color-forest-sky-near:     #1a3d2b;
--color-forest-floor:        #0d1a0d;
--color-forest-enchant:      #2d1566;
--color-forest-warm-moss:    #c8d9b0;

/* ── Canopy Accents — Forest World ── */
--color-wisp-glow:           #00e5a0;
--color-wisp-core:           #80ffcc;
--color-rose-bloom:          #e040a0;
--color-rose-bloom-light:    #f9a8d4;
```

Also add all of the above inside the `@theme inline {}` block so they're available as Tailwind utility classes (e.g. `bg-wisp-glow`, `text-rose-bloom`).

## New route

Create `app/variant-f/page.tsx` — a forest world variant of the hero, parallel in structure to `app/variant-e/page.tsx`.

The structural layout of variant-f should mirror variant-e exactly:
- Same Nav component with `theme="amethyst"` 
- Same section order (hero, platform, curriculum authority, mission, team, contact, footer)
- Same component patterns (Container, Eyebrow, feature bento, stat cards, curriculum scope grid, team cards, contact form)
- Same copy (do not change any text content)

The ONLY differences are:
1. Hero background image: use `/assets/BG.png` as a placeholder — note in a comment that this should be swapped for the forest BG image when available
2. Background colour: replace `#1A0D38` (lava sky deep) with `var(--color-forest-sky-deep)` (`#040d08`)
3. Below-fold background: replace `#1A0D38` with `var(--color-forest-sky-mid)` (`#0a1f12`)
4. All orange/lava accent colours replaced with forest equivalents:
   - `#F97316` (lava glow / CTA orange) → keep as CTA orange — CTAs stay orange across both themes
   - `#FFB347` (lava core warm) → `var(--color-wisp-glow)` (`#00e5a0`) for decorative glow elements only
   - Radial gradient glows behind product images: replace orange with `var(--color-wisp-glow)`
   - Stat card top border accents: first stat keeps orange, second uses `var(--color-wisp-glow)`, third uses `var(--color-rose-bloom)`
   - Curriculum scope card left-edge gradient: replace orange gradient with `linear-gradient(180deg, var(--color-wisp-glow), var(--color-wisp-core))`
   - Feature bento card glow blobs: replace gem colours with `var(--color-wisp-glow)` and `var(--color-rose-bloom)`
5. Section eyebrow colours: replace `#FFB347` with `var(--color-wisp-glow)`, keep `#FF7A1F` for CTA eyebrows, replace `#2BC6B2` teal references with `var(--color-wisp-glow)`
6. Mission section radial glow: replace purple/amethyst glow with `rgba(0, 229, 160, 0.18)` (wisp tint)
7. Footer background: `#07060F` → `#020908` (forest void)

CTAs (Join the pilot button, Send message button) remain `#F97316` orange — the action colour is consistent across both world themes.

## Design system page update

In `app/design-system/page.tsx`, add a "World Themes" section after the existing "Shard" section showing:
- A swatch row for Narrative — Lava tokens (Sky Deep, Sky Mid, Sky Near, Volcanic Floor, Return Purple, Warm Stone)
- A swatch row for Narrative — Forest tokens (Forest Sky Deep, Forest Sky Mid, Forest Sky Near, Forest Floor, Forest Enchant, Forest Warm Moss)  
- A swatch row for Forge Accents (Lava Glow, Lava Core)
- A swatch row for Canopy Accents (Wisp Glow, Wisp Core, Rose Bloom, Rose Bloom Light)

## variants/page.tsx update

Add variant-f to the variants index page with:
- Tag: "Variant F"
- Title: "Forest World"
- Desc: "Enchanted forest skin. Bioluminescent mint-teal light source, rose bloom accents, same structure as Variant E."
- Background: `bg-[#040d08] hover:bg-[#0a1f12]`
- Title/desc colours: white/white-60

Do not modify any existing files beyond the specific additions described above.
```
