import { WorldPage } from '@/components/main/WorldPage';
import { THEMES } from '@/components/main/theme';

/*
 * Snapshot of the lava landing page (the "main" working copy).
 * Self-contained: renders the duplicated component tree in `components/main/`
 * so iteration here never touches the live `variant-e` / forest worlds.
 */
export default function MainLanding() {
  return <WorldPage t={THEMES.lava} />;
}
