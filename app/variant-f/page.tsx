import { WorldPage } from '@/components/world/WorldPage';
import { THEMES } from '@/components/world/theme';

/*
 * Forest world (`/variant-f`, also `/2`). Enchanted canopy at twilight —
 * lifted greens, bioluminescent mint light, rose CTA. Structure and content
 * live in the shared WorldPage; only the theme differs. See forest-theme.md + DESIGN.md.
 */
export default function VariantF() {
  return <WorldPage t={THEMES.forest} />;
}
