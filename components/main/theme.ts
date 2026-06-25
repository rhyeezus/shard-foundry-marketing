/**
 * World theme tokens for the two marketing variants.
 * Source of truth for palette is lava.md / forest-theme.md; this mirrors the
 * values that JS needs (particles, glows, accents) so motion code reads from
 * one place instead of hardcoding hexes inline.
 */

export type WorldName = 'lava' | 'forest';

export interface WorldTheme {
  name: WorldName;
  /** Light vs dark canvas. Drives text/surface/dashboard token resolution and the
   *  nav variant. Lava + twilight Forest are 'dark'; the light Forest prototype is 'light'. */
  mode: 'light' | 'dark';
  /** Text colours — tokenised so the shared WorldPage works on both light and dark
   *  canvases (no hardcoded text-white). */
  text: {
    heading: string;     // strong headings
    body: string;        // default body copy
    bodyStrong: string;  // emphasised body (checklist items)
    muted: string;       // secondary labels / metadata
    faint: string;       // tertiary labels (uppercase eyebrows on surfaces)
    onAccent: string;    // text sitting on a CTA / accent fill (white on both)
  };
  /** Surfaces used by the authority proof-strip, stat cards, form inputs, footer. */
  surface: {
    chipFill: string;    // small glass chip fill (proof-strip, role badge bg base)
    chipBorder: string;
    inputFill: string;   // form input background
    inputBorder: string;
  };
  /** Live-dashboard surfaces so it isn't hard-coded dark. */
  dashboard: {
    panel: string;       // panel background
    tileEmpty: string;   // unlit student tile / sub-panel fill
    ringTrack: string;   // unfilled progress-ring stroke
  };
  /** Hero text/outline colours. The hero ALWAYS sits over the dark hero video
   *  (even in light mode the video is dark imagery), so these stay light on every
   *  variant — independent of the below-fold `text` tokens. */
  heroText: string;       // hero heading + strong words (white)
  heroTextStrong: string; // proof-strip copy
  heroTextMuted: string;  // hero subheading
  heroOutline: string;    // ghost button / proof-strip border
  heroOutlineFill: string;// ghost button / proof-strip fill
  /** Hero video — non-negotiable per brief.
   *  Desktop (16:9) is required. Mobile (9:16) and ultrawide (21:9) are optional;
   *  when omitted the desktop source is used and object-cover crops gracefully.
   *  Use `useResponsiveVideo(t)` in WorldPage — never reference these directly. */
  heroVideo: string;
  /** 9:16 portrait crop for phones (< 768 px). Crop keeps the focal point centred
   *  vertically — the sky and ground edges will both be cut. */
  heroVideoMobile?: string;
  /** 21:9 crop for ultrawide monitors (≥ 2560 px wide). Prevents edge-cropping
   *  on 3440×1440 displays when the scene has important lateral detail. */
  heroVideoUltrawide?: string;
  /** Page descent gradient (top → floor). */
  pageBackground: string;
  /** Solid colour at the top of the descent — the hero masks the video into
   *  THIS so the hero→body transition is a seamless dissolve, no gradient seam. */
  heroBase: string;
  /** Footer / deepest surface. */
  footer: string;
  /** Primary light source (fire / bioluminescence). */
  light: string;
  /** Light core / hotspot. */
  lightCore: string;
  /** World eye-draw accent (brand-orange / rose-bloom). */
  accent: string;
  /** Atmosphere depth colour. */
  atmosphere: string;
  /** Primary CTA + hover. */
  cta: string;
  ctaHover: string;
  /** Default eyebrow colour (= primary light). */
  eyebrow: string;
  /** CTA-adjacent eyebrow colour (= CTA). */
  eyebrowCta: string;
  /** Card fill / border alpha treatment (Tailwind arbitrary values). */
  card: { fill: string; fillHover: string; border: string; borderHover: string };
  /** Soft-fill card treatment: interior fill + gradient outline (soft→harsh) + glow.
   *  Dark worlds = tinted fill with gradient outline; light Forest = solid white with
   *  a soft mint drop-shadow (`shadow`) and a near-invisible edge. */
  softCard: { fill: string; edgeFrom: string; edgeTo: string; glow: string; shadow: string };
  /** Body text colour to use ON the soft-card fill (high contrast vs the fill). */
  softCardText: string;
  softCardHeading: string;
  /** Authority card background. */
  authorityCard: string;
  /** Border colour for authority cards (1.5 px solid). */
  authorityCardBorder: string;
  /** Ambient particle motion: embers rise, wisps drift. */
  particle: 'rise' | 'drift';
  /** Stata divider line colour. */
  strata: string;
}

// Keyed by route variant: the two shipped dark worlds plus the light Forest prototype.
export const THEMES: Record<'lava' | 'forest' | 'forestLight', WorldTheme> = {
  lava: {
    name: 'lava',
    mode: 'dark',
    // Current dark whites — colour-neutral refactor (identical to shipped output).
    text: {
      heading: '#ffffff',
      body: 'rgba(255,255,255,0.72)',
      bodyStrong: 'rgba(255,255,255,0.85)',
      muted: 'rgba(255,255,255,0.65)',
      faint: 'rgba(255,255,255,0.5)',
      onAccent: '#ffffff',
    },
    surface: {
      chipFill: 'rgba(255,255,255,0.05)',
      chipBorder: 'rgba(255,255,255,0.12)',
      inputFill: 'rgba(255,255,255,0.04)',
      inputBorder: 'rgba(255,255,255,0.15)',
    },
    dashboard: {
      panel: 'rgba(12,8,24,0.72)',
      tileEmpty: 'rgba(255,255,255,0.06)',
      ringTrack: 'rgba(255,255,255,0.12)',
    },
    heroText: '#ffffff',
    heroTextStrong: 'rgba(255,255,255,0.82)',
    heroTextMuted: 'rgba(255,255,255,0.78)',
    heroOutline: 'rgba(255,255,255,0.30)',
    heroOutlineFill: 'rgba(255,255,255,0.08)',
    heroVideo: '/video/defee1f6-6cf8-4825-adaf-472ecd885ff2-2026-06-11.mp4',
    // Two-tone molten descent — deep amethyst → ember-warm toward the forge.
    pageBackground:
      'linear-gradient(180deg, #1A0D38 0%, #1A0D38 40%, #1E0F30 72%, #150a26 100%)',
    heroBase: '#1A0D38',
    footer: '#07060F',
    light: '#F97316',
    lightCore: '#FFB347',
    accent: '#FF7A1F',
    atmosphere: '#7B4BFF',
    cta: '#F97316',
    ctaHover: '#EA580C',
    eyebrow: '#FFB347',
    eyebrowCta: '#FF7A1F',
    card: {
      fill: 'rgba(255,255,255,0.03)',
      fillHover: 'rgba(255,255,255,0.05)',
      border: 'rgba(255,255,255,0.10)',
      borderHover: 'rgba(255,255,255,0.20)',
    },
    authorityCard: '#0e0820',
    authorityCardBorder: '#5a30a0',
    // Opaque deep amethyst fill — gradient border runs ember orange → atmosphere violet.
    softCard: {
      fill: '#150a2e',
      edgeFrom: 'rgba(249,115,22,0.65)',   // ember orange
      edgeTo: 'rgba(123,75,255,0.55)',     // atmosphere violet
      glow: 'rgba(249,115,22,0.15)',
      shadow: 'none',
    },
    softCardText: 'rgba(255,255,255,0.72)',
    softCardHeading: '#ffffff',
    particle: 'rise',
    strata: 'rgba(255,179,71,0.35)',
  },
  forest: {
    name: 'forest',
    mode: 'dark',
    text: {
      heading: '#ffffff',
      body: 'rgba(255,255,255,0.72)',
      bodyStrong: 'rgba(255,255,255,0.85)',
      muted: 'rgba(255,255,255,0.65)',
      faint: 'rgba(255,255,255,0.5)',
      onAccent: '#ffffff',
    },
    surface: {
      chipFill: 'rgba(255,255,255,0.05)',
      chipBorder: 'rgba(255,255,255,0.12)',
      inputFill: 'rgba(255,255,255,0.04)',
      inputBorder: 'rgba(255,255,255,0.15)',
    },
    dashboard: {
      panel: 'rgba(12,8,24,0.72)',
      tileEmpty: 'rgba(255,255,255,0.06)',
      ringTrack: 'rgba(255,255,255,0.12)',
    },
    heroText: '#ffffff',
    heroTextStrong: 'rgba(255,255,255,0.82)',
    heroTextMuted: 'rgba(255,255,255,0.78)',
    heroOutline: 'rgba(255,255,255,0.30)',
    heroOutlineFill: 'rgba(255,255,255,0.08)',
    heroVideo: '/video/forest-theme_prob4.mp4',
    // Teal descent — sampled from the hero footage (deep cyan-teal world lit by
    // bioluminescence). Cooler & lifted vs the old olive-green; never blacks out.
    // Samples: mist #00262a, mid #0e3e42, floor pool #075054, crystals #12b4b7.
    pageBackground:
      'linear-gradient(180deg, #0e3e42 0%, #0b3034 45%, #07262a 100%)',
    heroBase: '#0e3e42',
    footer: '#07262a',
    light: '#12b4b7',                        // bright cyan crystal glow (sampled)
    lightCore: '#7df0ef',                    // pale cyan hotspot
    accent: '#e040a0',
    atmosphere: '#2d1566',
    cta: '#e85aa4',
    ctaHover: '#d64493',
    eyebrow: '#19c4c4',                       // luminous teal eyebrow
    eyebrowCta: '#e85aa4',
    card: {
      // Moonlit — brighter than lava so cards read as lit, not shadowed.
      fill: 'rgba(255,255,255,0.06)',
      fillHover: 'rgba(255,255,255,0.10)',
      border: 'rgba(18,180,183,0.16)',
      borderHover: 'rgba(18,180,183,0.32)',
    },
    authorityCard: '#060f09',
    authorityCardBorder: '#2d5a3d',
    // Opaque deep forest fill with solid teal border — no glass, no blur.
    softCard: {
      fill: '#0a1f12',
      edgeFrom: '#1a3d2b',
      edgeTo: '#1a3d2b',
      glow: 'rgba(18,180,183,0.20)',
      shadow: 'none',
    },
    softCardText: 'rgba(220,250,250,0.82)',  // cyan-tinted off-white
    softCardHeading: '#eafdfd',              // bright cyan-white heading
    particle: 'drift',
    strata: 'rgba(18,180,183,0.35)',
  },

  // ── Light-mode Forest prototype (/variant-f-light) ──────────────────────────
  // Soft-rose light experience: blush canvas + warm white cards do the heavy
  // lifting; deep emerald is demoted to a TYPOGRAPHIC ACCENT (eyebrows, links,
  // emphasised words) where green-on-rose gives crisp contrast. Ink is a warm
  // plum-brown so body copy stays in the rose family, not cold emerald.
  // Shares forest's structure, video, particles, and rose CTA.
  forestLight: {
    name: 'forest',
    mode: 'light',
    // Hero sits over the dark forest video → hero text stays white even in light mode.
    heroText: '#ffffff',
    heroTextStrong: 'rgba(255,255,255,0.82)',
    heroTextMuted: 'rgba(255,255,255,0.78)',
    heroOutline: 'rgba(255,255,255,0.30)',
    heroOutlineFill: 'rgba(255,255,255,0.08)',
    heroVideo: '/assets/forest-theme.mp4',
    // Hero frames the video in canopy green, then descends fast into the soft-rose canvas.
    pageBackground:
      'linear-gradient(180deg, #123A2A 0%, #3a4f44 11%, #FBF1F4 24%, #FCF4F6 60%, #FBEEF2 100%)',
    heroBase: '#123A2A',
    footer: '#2E1622',                       // deep plum-rose grounds the foot
    light: '#10b981',                        // emerald — the accent (used as soft glow/edges)
    lightCore: '#047857',                    // deeper emerald for contrast UI on rose
    accent: '#10b981',                       // emerald eye-draw — green accents the rose world
    atmosphere: '#f0abc4',                   // soft rose magic (light-friendly)
    cta: '#e85aa4',
    ctaHover: '#d64493',
    eyebrow: '#047857',                      // deep emerald accent reads crisply on rose
    eyebrowCta: '#e85aa4',
    text: {
      heading: '#3a1f2c',                    // warm plum-brown ink (rose family, not emerald)
      body: 'rgba(58,31,44,0.82)',
      bodyStrong: 'rgba(58,31,44,0.92)',
      muted: 'rgba(58,31,44,0.6)',
      faint: 'rgba(58,31,44,0.45)',
      onAccent: '#ffffff',                   // white sits on rose/emerald fills
    },
    surface: {
      chipFill: 'rgba(16,185,129,0.08)',     // faint emerald-tinted glass
      chipBorder: 'rgba(16,185,129,0.24)',
      inputFill: '#ffffff',
      inputBorder: 'rgba(58,31,44,0.14)',
    },
    dashboard: {
      panel: 'rgba(255,255,255,0.94)',       // warm-white frosted card on the rose canvas
      tileEmpty: 'rgba(58,31,44,0.07)',
      ringTrack: 'rgba(58,31,44,0.1)',
    },
    card: {
      fill: '#ffffff',
      fillHover: '#ffffff',
      border: 'rgba(16,185,129,0.16)',       // emerald hairline — the accent again
      borderHover: 'rgba(16,185,129,0.32)',
    },
    authorityCard: 'linear-gradient(160deg, #ffffff, #fdf2f6)',
    authorityCardBorder: 'rgba(232,90,164,0.30)',
    // Warm-white card + soft sprawling rose shadow — the "enchanted" lift in light mode.
    softCard: {
      fill: '#ffffff',
      edgeFrom: 'rgba(232,90,164,0.16)',     // rose edge, with...
      edgeTo: 'rgba(16,185,129,0.10)',       // ...an emerald accent fade
      glow: 'rgba(232,90,164,0.16)',
      shadow: '0 12px 44px -12px rgba(214,68,147,0.20)',
    },
    softCardText: 'rgba(58,31,44,0.82)',
    softCardHeading: '#3a1f2c',
    particle: 'drift',
    strata: 'rgba(16,185,129,0.30)',         // emerald divider accent
  },
};
