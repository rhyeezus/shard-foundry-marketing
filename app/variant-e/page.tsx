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
    <div style={{ backgroundColor: '#09092A', minHeight: '100vh' }}>
      <Nav theme="dark" />

      {/* ━━ Hero Section ━━ */}
      <section
        className="relative overflow-hidden"
        style={{
          height: '100vh',
          background: 'linear-gradient(180deg, #080A22 0%, #0B0C2C 25%, #15103A 50%, #38180A 74%, #1A0800 100%)',
        }}
      >
        {/* ── Twinkle keyframe ── */}
        <style>{`
          @keyframes twinkle { 0%,100%{opacity:0.25} 50%{opacity:0.9} }
        `}</style>

        {/* ── Stars ── */}
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

        {/* ── Far terrain (mountain_layer_1) ── */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_layer_1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── Mid terrain (mountain_layer_3) ── */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.18}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_layer_3.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── Near terrain (mountain_5) ── */}
        <div
          className="absolute bottom-0 w-full pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.30}px)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_5.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── Small high cloud — top-left bg ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '8%', top: '4%', width: '22%',
            opacity: 0.55,
            transform: `translateY(${scrollY * 0.06}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── Small high cloud — top-right bg ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '22%', top: '2%', width: '18%',
            opacity: 0.45,
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── LEFT large purple cloud (behind text, mid-hero) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '-2%', top: '36%', width: '24%',
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── RIGHT large purple cloud (framing rocks) ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: '-2%', top: '18%', width: '26%',
            transform: `translateY(${scrollY * 0.10}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* ── Tall pointed dark monolith — LEFT of main formation ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '24%', height: '60vh',
            transform: `translateY(${scrollY * 0.22}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_layer_2.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Secondary lava cliff — RIGHT of main formation ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            right: '-1%', height: '62vh',
            transform: `translateY(${scrollY * 0.20}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_1_layer_5.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── MAIN lava cliff — centrepiece of the hero ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '28%', height: '84vh',
            transform: `translateY(${scrollY * 0.25}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Flat dark rock cluster — bottom-left foreground ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '1%', height: '18vh',
            transform: `translateY(${scrollY * 0.48}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Spiky lava rock cluster — centre-left foreground ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '14%', height: '22vh',
            transform: `translateY(${scrollY * 0.44}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Spiky lava rock cluster mirror — right foreground ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            right: '16%', height: '20vh',
            transform: `translateY(${scrollY * 0.44}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4-1.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Small lava rock — left edge ── */}
        <div
          className="absolute bottom-0 pointer-events-none"
          style={{
            left: '6%', height: '14vh',
            transform: `translateY(${scrollY * 0.50}px)`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_2_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ── Lava drip accent ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: '29%', bottom: '8vh', height: '12vh',
            transform: `translateY(${scrollY * 0.35}px)`,
            opacity: 0.9,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_1_layer_4.svg" alt="" aria-hidden="true" style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* ━━ Hero text — LEFT side ━━ */}
        <div
          className="absolute inset-0 flex flex-col justify-start z-10 pointer-events-none"
          style={{
            paddingLeft: 'max(5vw, 48px)',
            paddingRight: '50%',
            paddingTop: 'max(10vh, 88px)',
          }}
        >
          <div style={{ pointerEvents: 'auto' }}>
            <h1
              className="font-extrabold text-white leading-none mb-5"
              style={{
                fontSize: 'clamp(44px, 4.8vw, 82px)',
                letterSpacing: '-0.03em',
                lineHeight: 1.08,
              }}
            >
              Where great<br />
              learning is<br />
              forged
            </h1>

            <p
              className="mb-8 leading-relaxed"
              style={{
                fontSize: 'clamp(15px, 1.2vw, 19px)',
                color: 'rgba(255,255,255,0.68)',
                maxWidth: 420,
              }}
            >
              Curriculum-aligned experiences designed<br />
              by teachers, for teachers.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button
                className="inline-flex items-center gap-2 font-semibold rounded-lg transition-all text-white shadow-lg"
                style={{
                  padding: '14px 28px',
                  backgroundColor: '#F97316',
                  fontSize: 'clamp(14px, 1.1vw, 17px)',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#EA580C')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#F97316')}
              >
                Join the pilot <ChevronRight size={17} />
              </button>

              <button
                className="font-semibold rounded-lg transition-all text-white"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  border: '1.5px solid rgba(255,255,255,0.30)',
                  fontSize: 'clamp(14px, 1.1vw, 17px)',
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
      <section style={{ padding: '120px 80px', backgroundColor: '#1A1F3A' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>More sections coming soon…</p>
        </div>
      </section>
    </div>
  );
}
