'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Nav } from '@/components/Nav';

// Fixed star positions — avoids SSR Math.random() hydration mismatch
const STARS = [
  { cx: 52,  cy: 68,  r: 1.1, d: 0   }, { cx: 138, cy: 24,  r: 0.8, d: 0.4 },
  { cx: 295, cy: 98,  r: 1.4, d: 0.8 }, { cx: 428, cy: 48,  r: 0.7, d: 1.2 },
  { cx: 545, cy: 132, r: 1.0, d: 0.2 }, { cx: 690, cy: 32,  r: 1.2, d: 1.6 },
  { cx: 768, cy: 84,  r: 0.7, d: 0.6 }, { cx: 876, cy: 16,  r: 0.9, d: 2.0 },
  { cx: 958, cy: 108, r: 1.3, d: 0.1 }, { cx: 84,  cy: 174, r: 0.7, d: 1.4 },
  { cx: 218, cy: 192, r: 1.0, d: 0.9 }, { cx: 372, cy: 152, r: 0.8, d: 0.3 },
  { cx: 494, cy: 224, r: 1.2, d: 1.7 }, { cx: 624, cy: 188, r: 0.6, d: 0.7 },
  { cx: 748, cy: 244, r: 1.1, d: 2.1 }, { cx: 834, cy: 164, r: 0.9, d: 0.5 },
  { cx: 924, cy: 254, r: 0.7, d: 1.3 }, { cx: 164, cy: 304, r: 1.3, d: 1.9 },
  { cx: 338, cy: 272, r: 0.8, d: 0.8 }, { cx: 466, cy: 336, r: 1.0, d: 0.4 },
  { cx: 572, cy: 288, r: 0.7, d: 1.5 }, { cx: 36,  cy: 312, r: 0.9, d: 0.2 },
  { cx: 804, cy: 316, r: 0.9, d: 1.0 }, { cx: 244, cy: 412, r: 1.1, d: 1.8 },
  { cx: 448, cy: 402, r: 0.8, d: 0.6 }, { cx: 886, cy: 372, r: 0.7, d: 2.2 },
  { cx: 988, cy: 422, r: 1.0, d: 1.2 }, { cx: 112, cy: 492, r: 0.6, d: 0.9 },
  { cx: 640, cy: 432, r: 1.2, d: 0.3 }, { cx: 726, cy: 364, r: 0.8, d: 1.6 },
];

export default function VariantE() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#0E0720', minHeight: '100vh' }}>
      <Nav theme="dark" />

      {/* ━━ Hero Section ━━ */}
      {/*
        All positions derived from Figma node 18:15049 (frame "D", 1540×2022px).
        Viewport baseline: 1540w × 900h.
        x% = figma_x / 1540 × 100
        y% = figma_y / 900 × 100
      */}
      <section
        className="relative overflow-hidden"
        style={{
          height: '100vh',
          // Dark purple sky stays dominant; warm volcanic glow only creeps in near the horizon
          background: 'linear-gradient(180deg, #0E0720 0%, #130B2A 45%, #1C1244 68%, #2A1008 88%, #1A0800 100%)',
        }}
      >
        {/* ── Twinkle keyframe ── */}
        <style>{`
          @keyframes twinkle { 0%,100%{opacity:0.25} 50%{opacity:0.9} }
        `}</style>

        {/* ── Stars — Figma "stars" group: x=-8,y=120 spans full width ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <svg className="w-full h-full" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice">
            {STARS.map((s, i) => (
              <circle
                key={i} cx={s.cx} cy={s.cy} r={s.r}
                fill="white" opacity={0.55 + (i % 5) * 0.08}
                style={{ animation: `twinkle ${2.4 + (i % 6) * 0.4}s ease-in-out infinite`, animationDelay: `${s.d}s` }}
              />
            ))}
          </svg>
        </div>

        {/* ── Far terrain — mountain_layer_1: x=0,y=771,w=1540 (84% down) ── */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_layer_1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── Near terrain — mountain_5: x=4,y=764,w=1540 (85% down) ── */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_5.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_6 #1 — x=-35,y=431: left=-2.3%,top=47.9%,w=26.2% ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '-2.3%', top: '47.9%', width: '26.2%',
            opacity: 0.7,
            transform: `translateY(${scrollY * 0.07}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_6 #2 — x=1245,y=293: left=80.8%,top=32.6%,w=22.1% ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '80.8%', top: '32.6%', width: '22.1%',
            opacity: 0.6,
            transform: `translateY(${scrollY * 0.06}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_6 #3 — x=614,y=340: left=39.9%,top=37.8%,w=16.3% ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '39.9%', top: '37.8%', width: '16.3%',
            opacity: 0.5,
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_6 #4 — x=1243,y=573: left=80.7%,top=63.7%,w=20.5% ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '80.7%', top: '63.7%', width: '20.5%',
            opacity: 0.55,
            transform: `translateY(${scrollY * 0.09}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_5 LEFT — x=98,y=304: left=6.4%,top=33.8%,w=45.9% ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '6.4%', top: '33.8%', width: '45.9%',
            opacity: 0.55,
            filter: 'blur(1px)',
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_5 RIGHT — x=1213,y=392: left=78.8%,top=43.6%,w=42.2% (intentionally overflows right) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '78.8%', top: '43.6%', width: '42.2%',
            opacity: 0.5,
            filter: 'blur(1px)',
            transform: `translateY(${scrollY * 0.10}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── cloud_1_layer_5 BOTTOM — x=861,y=587: left=55.9%,top=65.2%,w=38.1% ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '55.9%', top: '65.2%', width: '38.1%',
            opacity: 0.45,
            filter: 'blur(1px)',
            transform: `translateY(${scrollY * 0.11}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── lava_1_layer_5 (main formation group): x=260,y=189,w=1246,h=641 ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '16.9%', height: '71.2vh',
            transform: `translateY(${scrollY * 0.20}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Secondary lava cliff right edge — Layer 2: x=1458,y=629,w=93,h=140 ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            right: '-1%', height: '50vh',
            transform: `translateY(${scrollY * 0.18}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_1_layer_5.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── rock_3_layer_4 left: x=-73,y=586,w=200,h=173 → left=-4.7%,bottom ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '-4.7%', height: '19.2vh',
            transform: `translateY(${scrollY * 0.42}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── rock_1_layer_4: x=159,y=703,w=112,h=130 → left=10.3% ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '10.3%', height: '14.4vh',
            transform: `translateY(${scrollY * 0.38}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── rock_2_layer_4: x=465,y=616,w=117,h=141 → left=30.2% ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '30.2%', height: '15.7vh',
            transform: `translateY(${scrollY * 0.44}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_2_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── lava_1_layer_4 accent: x=597,y=654,w=140,h=154 → left=38.8% ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '38.8%', height: '17.1vh',
            transform: `translateY(${scrollY * 0.32}px)`,
            opacity: 0.9,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_1_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ━━ Hero text — Figma Frame 22: x=152,y=132,w=488 ━━ */}
        {/*
          paddingLeft  = 152/1540 = 9.87%
          paddingTop   = 132/900  = 14.67%
          paddingRight = (1540-640)/1540 = 58.4%  (text ends at x=640 = 41.6% from left)
          fontSize     = 52px at 1540px = 3.38vw, weight=700
          subtitle     = 28px at 1540px = 1.82vw, weight=400
        */}
        <div
          className="absolute inset-0 flex flex-col justify-start z-10 pointer-events-none"
          style={{
            paddingLeft: 'max(9.87vw, 80px)',
            paddingRight: '58.4%',
            paddingTop: 'max(14.7vh, 116px)',
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <h1
              className="font-bold text-white mb-4"
              style={{
                fontSize: 'clamp(34px, 3.38vw, 56px)',
                letterSpacing: '-0.02em',
                lineHeight: '56px',
              }}
            >
              Where great learning is forged
            </h1>

            <p
              className="mb-8"
              style={{
                fontSize: 'clamp(18px, 1.82vw, 30px)',
                lineHeight: 1.43,
                color: 'rgba(255,255,255,0.72)',
              }}
            >
              Curriculum-aligned experiences designed by teachers, for teachers.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="inline-flex items-center gap-2 font-bold rounded-lg transition-all text-white shadow-lg"
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#F97316',
                  fontSize: 'clamp(13px, 1.04vw, 16px)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EA580C')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F97316')}
              >
                Join the pilot <ChevronRight size={16} />
              </button>

              <button
                className="font-semibold rounded-lg transition-all text-white"
                style={{
                  padding: '12px 24px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.30)',
                  fontSize: 'clamp(13px, 1.04vw, 16px)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.14)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.55)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.30)';
                }}
              >
                See the platform
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Below-fold placeholder ━━ */}
      <section style={{ padding: '120px 80px', backgroundColor: '#1A0800', marginTop: 0 }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>More sections coming soon…</p>
        </div>
      </section>
    </div>
  );
}
