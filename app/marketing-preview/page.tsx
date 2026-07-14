'use client';

/*
 * Standalone preview of the light drop-in marketing components, rendered exactly
 * as provided (no restyling). This route is isolated from the shared WorldPage.
 *
 * AuthorityStrip is built for a dark hero surface (it uses white/opacity text),
 * so it's placed on a dark navy band here purely so it's visible.
 *
 * Note: CurriculumAuthority is no longer previewed here — it was reworked into a
 * theme-aware dark section and now lives in the shared WorldPage (lava/forest),
 * where WorldScene drives its `reveal` scroll-in.
 */

import { AuthorityStrip } from '@/components/marketing/AuthorityStrip';
import { PlatformBento } from '@/components/marketing/PlatformBento';

export default function MarketingPreview() {
  return (
    <main>
      <section className="py-16" style={{ background: '#0A0E27' }}>
        <AuthorityStrip />
      </section>

      <PlatformBento />
    </main>
  );
}
