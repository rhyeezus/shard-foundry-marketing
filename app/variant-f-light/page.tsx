import { WorldPage } from '@/components/world/WorldPage';
import { THEMES } from '@/components/world/theme';

/*
 * Light-mode Forest prototype (`/variant-f-light`, also `/3`). Genuine light experience —
 * mint-white canvas, deep-emerald ink, solid white cards with soft mint shadows,
 * rose CTA. Same shared WorldPage + structure as the twilight `/variant-f`; only
 * the theme tokens differ (mode: 'light'). Built for side-by-side comparison.
 * See forest-theme.md → "Light-mode (prototype)".
 */
export default function VariantFLight() {
  return <WorldPage t={THEMES.forestLight} />;
}
