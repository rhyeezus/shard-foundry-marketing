import { WorldPage } from '@/components/world/WorldPage';
import { THEMES } from '@/components/world/theme';

/*
 * Lava world (`/variant-e`, also `/1`). The reference world — dark, dramatic,
 * lit by fire. Structure and content live in the shared WorldPage; only the
 * theme (palette + lighting) differs. See lava.md + DESIGN.md.
 */
export default function VariantE() {
  return <WorldPage t={THEMES.lava} />;
}
