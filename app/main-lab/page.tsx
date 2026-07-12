import { WorldPage } from '@/components/main-lab/WorldPage';
import { THEMES } from '@/components/main-lab/theme';

/*
 * Experimentation copy of the /main lava landing (the "lab").
 * Self-contained duplicate of the component tree in `components/main-lab/` so
 * trying new ideas here never touches /main (or variant-e / forest).
 */
export default function MainLab() {
  return <WorldPage t={THEMES.lava} />;
}
