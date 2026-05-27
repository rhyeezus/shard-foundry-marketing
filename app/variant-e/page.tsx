'use client';

import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Nav } from '@/components/Nav';

/*
 * Positions from Figma node 18:15049 (frame "D", 1540 × 2022).
 * Hero viewport baseline: 1540 w × 900 h.
 *
 *   left  = x / 1540 × 100%   (relative to frame width)
 *   top   = y / 900  × 100%   (relative to hero height, section is height:100vh)
 *   width = w / 1540 × 100%
 *
 * DOM order = back → front (later element = higher z-index = closer to viewer).
 * Figma children array is front → back (index 0 = topmost).
 * So we REVERSE the Figma index order when laying out in JSX.
 *
 * Excluded: all [HIDDEN] layers (mountain_5, cloud_1_layer_6 #4,
 * cloud_1_layer_5 bottom, rock_2_layer_4, lava_1_layer_4, etc.)
 */

export default function VariantE() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#0D0620', minHeight: '100vh' }}>
      <Nav theme="dark" />

      <section
        className="relative overflow-hidden"
        style={{
          height: '100vh',
          background: 'linear-gradient(180deg, #0E0720 0%, #130B2A 40%, #1C1244 65%, #251008 87%, #1A0800 100%)',
        }}
      >
        <style>{`@keyframes twinkle { 0%,100%{opacity:0.3} 50%{opacity:1.0} }`}</style>

        {/* ── LAYER ORDER: back → front ────────────────────────────────────── */}

        {/* [36] mountain_layer_1 — deepest terrain (x=0 y=797 w=1540) */}
        <div className="absolute bottom-0 w-full pointer-events-none" style={{
          transform: `translateY(${scrollY * 0.04}px)`,
          opacity: 0.85,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_layer_1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [33] mountain_layer_1 — near terrain (x=0 y=762 w=1540) */}
        <div className="absolute bottom-0 w-full pointer-events-none" style={{
          transform: `translateY(${scrollY * 0.06}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mountain_layer_1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [10] cloud_1_layer_5 RIGHT — x=1213 y=392 w=650 — op=0.70 */}
        {/*      left=78.8%  top=43.6%  width=42.2% (overflows right)  */}
        <div className="absolute pointer-events-none" style={{
          left: '78.8%', top: '43.6%', width: '42.2%',
          opacity: 0.70,
          transform: `translateY(${scrollY * 0.10}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [9] cloud_1_layer_5 LEFT — x=98 y=304 w=707 — op=0.70 */}
        {/*     left=6.4%  top=33.8%  width=45.9%                   */}
        <div className="absolute pointer-events-none" style={{
          left: '6.4%', top: '33.8%', width: '45.9%',
          opacity: 0.70,
          transform: `translateY(${scrollY * 0.12}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_5.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [7] cloud_1_layer_6 centre — x=614 y=340 w=251 — op=0.70 */}
        {/*     left=39.9%  top=37.8%  width=16.3%                   */}
        <div className="absolute pointer-events-none" style={{
          left: '39.9%', top: '37.8%', width: '16.3%',
          opacity: 0.70,
          transform: `translateY(${scrollY * 0.08}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [6] cloud_1_layer_6 right — x=1245 y=293 w=340 — op=0.70 */}
        {/*     left=80.8%  top=32.6%  width=22.1%                   */}
        <div className="absolute pointer-events-none" style={{
          left: '80.8%', top: '32.6%', width: '22.1%',
          opacity: 0.70,
          transform: `translateY(${scrollY * 0.06}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6-1.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [5] cloud_1_layer_6 left — x=-35 y=431 w=403 — op=0.70 */}
        {/*     left=-2.3%  top=47.9%  width=26.2%                  */}
        <div className="absolute pointer-events-none" style={{
          left: '-2.3%', top: '47.9%', width: '26.2%',
          opacity: 0.70,
          transform: `translateY(${scrollY * 0.07}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/cloud_1_layer_6.svg" alt="" aria-hidden="true" style={{ display: 'block', width: '100%' }} />
        </div>

        {/* [15] lava_1_layer_5 GROUP — x=260 y=189 w=1246 h=641 */}
        {/*      Left+centre lava formation. left=16.9%  height=71vh */}
        <div className="absolute bottom-0 pointer-events-none" style={{
          left: '16.9%',
          height: '71vh',
          transform: `translateY(${scrollY * 0.16}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* Right lava formation — anchored to right edge */}
        <div className="absolute bottom-0 pointer-events-none" style={{
          right: '0',
          height: '60vh',
          transform: `translateY(${scrollY * 0.14}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_1_layer_5.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [32] Слой 4 — large left rock x=-40 y=604 w=276 h=241 */}
        {/*     left=-2.6%  top=67.1%  height=26.8vh               */}
        <div className="absolute pointer-events-none" style={{
          left: '-2.6%', top: '67.1%',
          height: '26.8vh',
          transform: `translateY(${scrollY * 0.36}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [30] Слой 5 — left cluster rock x=84 y=504 w=195 h=170 */}
        {/*     left=5.5%  top=56.0%  height=18.9vh                */}
        <div className="absolute pointer-events-none" style={{
          left: '5.5%', top: '56.0%',
          height: '18.9vh',
          transform: `translateY(${scrollY * 0.32}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4-1.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [28] Layer 2 — far right edge x=1458 y=629 w=93 h=140 */}
        {/*     right edge, height=20vh                            */}
        <div className="absolute bottom-0 pointer-events-none" style={{
          right: '-0.5%',
          height: '20vh',
          transform: `translateY(${scrollY * 0.24}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/Layer 2.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [27] Слой 2 — left-centre rock x=267 y=595 w=172 h=118 */}
        {/*     left=17.3%  top=66.2%  height=13.1vh               */}
        <div className="absolute pointer-events-none" style={{
          left: '17.3%', top: '66.2%',
          height: '13.1vh',
          transform: `translateY(${scrollY * 0.30}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [25] rock_3_layer_4 — far left overflow x=-73 y=586 w=200 h=173 */}
        {/*     left=-4.8%  bottom  height=19.2vh                           */}
        <div className="absolute bottom-0 pointer-events-none" style={{
          left: '-4.8%',
          height: '19.2vh',
          transform: `translateY(${scrollY * 0.38}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [22] Слой 2 — small far-left rock x=27 y=521 w=107 h=105 */}
        {/*     left=1.8%  top=57.9%  height=11.7vh                  */}
        <div className="absolute pointer-events-none" style={{
          left: '1.8%', top: '57.9%',
          height: '11.7vh',
          transform: `translateY(${scrollY * 0.28}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [18] lava_2_layer_4 — thin column x=742 y=547 w=60 h=139 */}
        {/*     left=48.2%  top=60.8%  height=15.4vh                 */}
        <div className="absolute pointer-events-none" style={{
          left: '48.2%', top: '60.8%',
          height: '15.4vh',
          transform: `translateY(${scrollY * 0.20}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/lava_2_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [39] rock_1_layer_4 LEFT — x=159 y=703 w=112 h=130 */}
        {/*     left=10.3%  top=78.1%  height=14.4vh            */}
        <div className="absolute pointer-events-none" style={{
          left: '10.3%', top: '78.1%',
          height: '14.4vh',
          transform: `translateY(${scrollY * 0.22}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [49] Layer 1 — centre-right rock x=714 y=729 w=202 h=138 */}
        {/*     left=46.4%  top=81.0%  height=15.3vh                */}
        <div className="absolute pointer-events-none" style={{
          left: '46.4%', top: '81.0%',
          height: '15.3vh',
          transform: `translateY(${scrollY * 0.20}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4-1.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [48] Слой 6 — right cluster x=1122 y=749 w=202 h=138 */}
        {/*     left=72.9%  top=83.2%  height=15.3vh             */}
        <div className="absolute pointer-events-none" style={{
          left: '72.9%', top: '83.2%',
          height: '15.3vh',
          transform: `translateY(${scrollY * 0.18}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4-1.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [47] Слой 3 — bottom-centre rock x=352 y=808 w=172 h=118 */}
        {/*     left=22.9%  top=89.8%  height=13.1vh                */}
        <div className="absolute pointer-events-none" style={{
          left: '22.9%', top: '89.8%',
          height: '13.1vh',
          transform: `translateY(${scrollY * 0.24}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [38] rock_1_layer_4 RIGHT — x=558 y=799 w=112 h=130 */}
        {/*     left=36.2%  top=88.8%  height=14.4vh             */}
        <div className="absolute pointer-events-none" style={{
          left: '36.2%', top: '88.8%',
          height: '14.4vh',
          transform: `translateY(${scrollY * 0.22}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [37] Layer 3 — far right accent x=1353 y=699 w=96 h=146 */}
        {/*     left=87.8%  top=77.7%  height=16.2vh               */}
        <div className="absolute pointer-events-none" style={{
          left: '87.8%', top: '77.7%',
          height: '16.2vh',
          transform: `translateY(${scrollY * 0.16}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4-1.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [35] Layer 4 — right-side rock x=1067 y=689 w=123 h=186 */}
        {/*     left=69.3%  top=76.6%  height=20.7vh               */}
        <div className="absolute pointer-events-none" style={{
          left: '69.3%', top: '76.6%',
          height: '20.7vh',
          transform: `translateY(${scrollY * 0.14}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_1_layer_4-1.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [34] Слой 2 right — x=962 y=738 w=107 h=105 */}
        {/*     left=62.5%  top=82.0%  height=11.7vh    */}
        <div className="absolute pointer-events-none" style={{
          left: '62.5%', top: '82.0%',
          height: '11.7vh',
          transform: `translateY(${scrollY * 0.12}px)`,
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/rock_3_layer_4.svg" alt="" aria-hidden="true"
            style={{ display: 'block', height: '100%', width: 'auto' }} />
        </div>

        {/* [1] stars — op=0.60, positioned above mountains but transparent background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.6, transform: `translateY(${scrollY * 0.03}px)`, mixBlendMode: 'screen' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/stars.svg" alt="" aria-hidden="true"
            style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>

        {/* ━━ [50] Frame 22 — Hero text x=152 y=132 w=488 ━━ */}
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
      <section style={{ padding: '120px 80px', backgroundColor: '#1A0800' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)' }}>More sections coming soon…</p>
        </div>
      </section>
    </div>
  );
}
