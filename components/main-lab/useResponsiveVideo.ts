'use client';

import { useEffect, useState } from 'react';
import type { WorldTheme } from './theme';

export interface ResponsiveVideo {
  /** The video src to render at this viewport size. */
  src: string;
  /** CSS aspect-ratio value matching the video's native ratio — drives section height
   *  so the full frame is always visible (no left/right crop). */
  aspectRatio: string;
}

/**
 * Returns the correct hero video src AND its native aspect ratio for the current viewport.
 *
 * Breakpoint map:
 *   < 768 px   → heroVideoMobile    (9:16  portrait)   → aspectRatio '9/16'
 *   768–2559px → heroVideo          (16:9  landscape)  → aspectRatio '16/9'
 *   ≥ 2560 px  → heroVideoUltrawide (21:9  ultrawide)  → aspectRatio '21/9'
 *
 * Falls back to the 16:9 desktop source + ratio when a breakpoint asset isn't supplied yet.
 *
 * The src / ratio only update when the breakpoint *category* changes — not on every
 * pixel resize — so the video element never reloads during normal window resizing.
 */
export function useResponsiveVideo(t: WorldTheme): ResponsiveVideo {
  const pick = (): ResponsiveVideo => {
    if (typeof window === 'undefined') return { src: t.heroVideo, aspectRatio: '16/9' };
    const w = window.innerWidth;
    if (w < 768 && t.heroVideoMobile)
      return { src: t.heroVideoMobile, aspectRatio: '9/16' };
    if (w >= 2560 && t.heroVideoUltrawide)
      return { src: t.heroVideoUltrawide, aspectRatio: '21/9' };
    return { src: t.heroVideo, aspectRatio: '16/9' };
  };

  const [state, setState] = useState<ResponsiveVideo>(pick);

  useEffect(() => {
    const mobileQ    = window.matchMedia('(max-width: 767px)');
    const ultrawideQ = window.matchMedia('(min-width: 2560px)');

    const update = () => setState(pick());

    mobileQ.addEventListener('change', update);
    ultrawideQ.addEventListener('change', update);
    return () => {
      mobileQ.removeEventListener('change', update);
      ultrawideQ.removeEventListener('change', update);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return state;
}
