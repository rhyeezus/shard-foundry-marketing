'use client';

/**
 * GPU-accelerated plasma atmosphere layer.
 * Sits fixed behind all page content (mix-blend-mode: screen so dark areas
 * are invisible — only the glowing waves add colour). Lava gets ember orange
 * bleeding into deep violet; forest gets bioluminescent teal.
 *
 * Loaded with ssr:false (WebGL needs the browser) and lazy so it never
 * blocks the initial paint.
 */

import { Shader, Plasma } from 'shaders/react';
import type { WorldTheme } from './theme';

interface Props {
  t: WorldTheme;
}

export default function AtmosphereShader({ t }: Props) {
  const isLava = t.name === 'lava';

  return (
    <Shader
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        opacity: isLava ? 0.18 : 0.12,
        mixBlendMode: 'screen',
      }}
    >
      <Plasma
        colorA={isLava ? '#FF8C2A' : '#12b4b7'}   // ember orange / cyan — the glow colour
        colorB={isLava ? '#050005' : '#010a0a'}   // near-black — invisible via screen blend
        density={isLava ? 1.6 : 1.8}
        speed={isLava ? 0.40 : 0.30}
        intensity={isLava ? 1.2 : 1.0}
        warp={isLava ? 0.55 : 0.45}
        balance={isLava ? 50 : 48}
      />
    </Shader>
  );
}
