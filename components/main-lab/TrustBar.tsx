import { ShieldCheck } from 'lucide-react';
import type { WorldTheme } from './theme';

/**
 * Hero Layer-A trust signal (always visible, above the fold).
 *
 * Soft phrasing on purpose — does NOT name ST4S yet (compliance status to be
 * confirmed with the team). When the assessment is confirmed this can become a
 * named "Safer Technologies 4 Schools" badge.
 */
export function TrustBar({ t }: { t: WorldTheme }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-6"
      style={{ background: t.surface.chipFill, border: `1px solid ${t.surface.chipBorder}` }}
    >
      <ShieldCheck className="size-3.5 shrink-0" style={{ color: t.lightCore }} />
      <span className="text-xs font-medium" style={{ color: t.heroTextStrong }}>
        Safe anonymous student access — no student data required
      </span>
    </div>
  );
}
