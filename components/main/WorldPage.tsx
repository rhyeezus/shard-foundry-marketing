'use client';

import { ChevronRight, ArrowRight, Award, Sparkles, Radio } from 'lucide-react';
import { Nav } from './Nav';
import { WorldScene } from './WorldScene';
import { useResponsiveVideo } from './useResponsiveVideo';
import { Particles } from './Particles';
import { TrustBar } from './TrustBar';
import { HeroBubbleSequence } from './HeroBubbleSequence';
import type { WorldTheme } from './theme';

/* ── Single source of width — matches the nav so every section's edges align. ── */
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>;
}

/* ── Shared content (identical across both worlds — only the theme changes). ── */

const features = [
  {
    title: 'Curriculum-aligned content',
    desc: 'Interactive lessons mapped to the Australian Curriculum: Digital Technologies across data representation, algorithms, programming and more.',
    codes: ['ACTDIK023', 'ACTDIP030'],
    span: true, // hero tile of the bento
  },
  {
    title: 'Interactive learning tools',
    desc: 'Whole-classroom discussions, collaborative activities and real-time shared exercises that keep every student engaged.',
    codes: ['ACTDIP031'],
  },
  {
    title: 'Partner content',
    desc: 'A growing library of specialist content: professional development for teachers and enrichment programs for gifted learners.',
    codes: ['ACTDIK028'],
  },
];


const curriculum = [
  { year: 'Year 7', code: 'AC9TDI8K01', title: 'Data & Information', desc: 'Representation, integrity and the meaning behind the bits.' },
  { year: 'Year 7', code: 'AC9TDI8K02', title: 'Digital Systems', desc: 'How hardware, software and networks fit together.' },
  { year: 'Year 8', code: 'AC9TDI8P09', title: 'Creating Digital Solutions', desc: 'From brief to build. Designing for real users.' },
  { year: 'Year 8', code: 'AC9TDI8P10', title: 'Processes & Production', desc: 'Iterate, test and refine like a working developer.' },
];

const team = [
  {
    photo: '/teachers/bruce-fuda.webp',
    name: 'Bruce Fuda',
    role: 'Chief Operations Officer',
    cred: 'Author, Australian Curriculum: Digital Technologies',
    bio: 'Author of the Australian Curriculum: Digital Technologies. 2016 ACCE/ACS ICT Educator of the Year. Former Chief Education Officer at Grok Academy.',
  },
  {
    photo: '/teachers/matthew-kameron.webp',
    name: 'Matthew Kameron',
    role: 'Chief Executive Officer',
    cred: 'Master of Educational Leadership',
    bio: 'Executive leader in EdTech SaaS companies. Technical and product leadership. Former school leader and teacher.',
  },
  {
    photo: '/teachers/courtney-weaver.webp',
    name: 'Courtney Weaver',
    role: 'Head of Education',
    cred: 'VP, ECAWA · ATAR examination writer',
    bio: 'Digital Technology school leader. Former Head of Education at Grok Academy. ATAR Examination writer for Computer Science.',
  },
];

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal" style={{ color }}>
      {children}
    </p>
  );
}

export function WorldPage({ t }: { t: WorldTheme }) {
  const { src: heroVideoSrc, aspectRatio: heroAspectRatio } = useResponsiveVideo(t);

  // Per-world chip styling: lava = etched metal; forest dark = glowing in wood;
  // forest light = a soft mint-tinted chip with deeper-teal text on white.
  const chipStyle: React.CSSProperties =
    t.name === 'lava'
      ? { background: 'rgba(255,255,255,0.05)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.78)' }
      : t.mode === 'light'
      ? { background: 'rgba(0,229,160,0.10)', borderColor: `${t.lightCore}40`, color: t.lightCore }
      : { background: 'rgba(0,229,160,0.08)', boxShadow: `inset 0 0 8px ${t.light}55`, borderColor: `${t.light}40`, color: t.lightCore };

  const Chip = ({ code }: { code: string }) => (
    <span className="font-mono text-[11px] font-medium px-2 py-0.5 rounded border" style={chipStyle}>
      {code}
    </span>
  );

  // Soft-fill content card — dark: tinted fill + gradient outline; light: solid
  // white + soft mint drop-shadow (via --card-shadow). Applied to bento / scope /
  // team / partner containers so text stands out.
  const softCardStyle = {
    ['--card-fill' as string]: t.softCard.fill,
    ['--card-edge-from' as string]: t.softCard.edgeFrom,
    ['--card-edge-to' as string]: t.softCard.edgeTo,
    ['--card-glow' as string]: t.softCard.glow,
    ['--card-shadow' as string]: t.softCard.shadow,
  } as React.CSSProperties;
  const softText = t.softCardText;
  const softHeading = t.softCardHeading;

  // Nav variant: lava → amethyst; dark forest → forest; light forest → forest-light.
  const navTheme = t.name === 'lava' ? 'amethyst' : t.mode === 'light' ? 'forest-light' : 'forest';

  return (
    <div className="overflow-x-clip" style={{ background: t.pageBackground, minHeight: '100vh' }}>
      <Nav theme={navTheme} />

      <WorldScene>
        {/* ══ 1 · HERO — a threshold into the world ══ */}
        {/* Section height is driven by the video's native aspect ratio so the full
            frame is always visible — no left/right cropping at any viewport width.
            The ratio switches automatically when a breakpoint-specific video is
            loaded (9:16 mobile → 16:9 desktop → 21:9 ultrawide). The heroBase fill
            sits behind the video so the mask-dissolve at the bottom edge blends
            into a matching flat colour — seamless hero→body transition, no seam. */}
        <section
          className="relative overflow-hidden w-full"
          style={{ aspectRatio: heroAspectRatio, backgroundColor: t.heroBase }}
        >
          {/* Video fills the section exactly — no object-cover crop needed because
              the container already matches the video's native aspect ratio. The
              bottom-fade mask softens the cut into the page body below. */}
          <video
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              objectFit: 'fill',
              WebkitMaskImage: 'linear-gradient(180deg, #000 50%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.15) 93%, transparent 100%)',
              maskImage: 'linear-gradient(180deg, #000 50%, rgba(0,0,0,0.85) 68%, rgba(0,0,0,0.5) 82%, rgba(0,0,0,0.15) 93%, transparent 100%)',
            }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>

          {/* Colour bridge — fades from transparent to the exact body background
              colour so the dissolve lands on a matching surface with no tonal jump. */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none z-[1]"
            style={{
              height: '35%',
              background: `linear-gradient(to bottom, transparent, ${t.heroBase})`,
            }}
          />

          {/* Ambient particles — embers (lava) / wisps (forest). */}
          <Particles count={28} color={t.light} mode={t.particle} />

          {/* Headline light-bloom — text sits in a pool of the world's light. */}
          <div
            className="absolute pointer-events-none world-glow"
            data-parallax="-20"
            style={{
              left: '-10%', top: '18%', width: '60%', height: '50%',
              background: `radial-gradient(ellipse at 40% 50%, ${t.light}33, transparent 70%)`,
              filter: 'blur(40px)',
            }}
          />

          {/* Absolutely pinned to the top of the section so the invisible h1
              (GSAP holds it at opacity:0 until it animates in) doesn't push
              the visible subhead down into the middle of the hero. The 64px
              top offset matches the fixed nav height exactly. */}
          <div className="absolute inset-x-0 z-10" data-hero-content style={{ top: '96px' }}>
            <Container>
              {/* Text block: 42vw keeps content in the left dark zone of the video
                  (stars/sky area). Both font clamps start from a small minimum
                  so they scale continuously — no fixed floor that stops the
                  shrink at mid-size viewports. The subhead is bold and large
                  (~31px at 1109px) but smaller than the h1 so it doesn't
                  overwhelm the hero or wrap past 3 lines in the 42vw column. */}
              {/* position:relative so the absolutely-positioned h1 is contained here */}
              <div style={{ position: 'relative', width: '100%', maxWidth: 'clamp(260px, 50vw, 640px)' }}>
                {/* h1 is position:absolute so it takes ZERO layout space.
                    The invisible GSAP state (opacity:0) no longer pushes the
                    subhead down — the subhead anchors to the true top corner.
                    padding-top on the p reserves visual room for the h1 once
                    it animates in (~h1 height + gap, scales with 5.5vw font). */}
                <p data-words className="absolute inset-x-0 font-medium" style={{ top: 0, fontSize: 'clamp(0.85rem, 1.3vw, 1rem)', letterSpacing: '0.01em', lineHeight: 1.4, color: t.heroTextMuted }}>
                  Built by the authors of the national curriculum
                </p>
                <h1 data-hero-p className="font-bold mb-7" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)', lineHeight: 1.15, color: t.heroText }}>
                  Digital Technologies, taught the way it was written.
                </h1>
                <TrustBar t={t} />
                <div className="flex gap-4 flex-wrap reveal">
                  <a href="#schools" data-arrow className="inline-flex items-center gap-2 font-bold rounded-lg shadow-lg transition-colors hover:brightness-110"
                    style={{ padding: 'clamp(10px,1vw,14px) clamp(18px,1.8vw,28px)', fontSize: 'clamp(13px, 1.04vw, 16px)', backgroundColor: t.cta, color: t.text.onAccent }}>
                    Join the pilot <ChevronRight size={16} className="arrow-icon" />
                  </a>
                  <a href="#platform" className="inline-flex items-center font-semibold rounded-lg border transition-colors hover:brightness-110"
                    style={{ padding: 'clamp(10px,1vw,14px) clamp(18px,1.8vw,28px)', fontSize: 'clamp(13px, 1.04vw, 16px)', color: t.heroText, borderColor: t.heroOutline, backgroundColor: t.heroOutlineFill }}>
                    See the platform
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* ══ 1.5 · OFFERING — scroll-revealed selling points (Layer B) ══ */}
        <section id="offering" className="relative py-[clamp(2.5rem,6vw,7rem)]">
          <Container>
            <HeroBubbleSequence t={t} />
          </Container>
        </section>

        {/* Anchor target for the hero's "See how →" link.
            The full PedagogyExplainer section ships in the next pass. */}
        <div id="pedagogy" className="scroll-mt-24" aria-hidden />

        {/* ══ 2 · THE PLATFORM — feature showcase ══ */}
        <section id="platform" className="relative py-[clamp(3rem,7vw,9rem)]">
          <Container>
            <div className="rounded-2xl p-8 mb-5" style={{ background: 'rgba(10,5,28,0.60)' }}>
              <Eyebrow color={t.eyebrow}>The platform</Eyebrow>
              <h2 className="font-bold tracking-tight leading-[1.08] mb-5 reveal" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: t.text.heading }}>
                Everything teachers need, in one forge.
              </h2>
              <p className="leading-relaxed reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: t.text.body }}>
                Built around the realities of Australian classrooms. Not a content library, not a quiz engine. A complete teaching platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title}
                  className={`reveal world-card world-card-soft group relative overflow-hidden rounded-3xl p-8 ${f.span ? 'md:col-span-2 md:row-span-1' : ''}`}
                  style={softCardStyle}>
                  <div className="relative flex items-center gap-2 mb-4">
                    <Sparkles className="size-5" style={{ color: t.light }} />
                  </div>
                  <h3 className="relative font-bold mb-2" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', color: softHeading }}>{f.title}</h3>
                  <p className="relative text-sm leading-relaxed max-w-md mb-4" style={{ color: softText }}>{f.desc}</p>
                  <div className="relative flex flex-wrap gap-2">
                    {f.codes.map((c) => <Chip key={c} code={c} />)}
                  </div>
                </div>
              ))}
              <div className="reveal world-card world-card-soft group relative overflow-hidden rounded-3xl p-8 md:col-span-2" style={softCardStyle}>
                <div className="relative flex flex-col md:flex-row gap-8 md:items-center">
                  {/* Left — copy */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-4"><Radio className="size-5" style={{ color: t.light }} /></div>
                    <h3 className="font-bold mb-2" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)', color: softHeading }}>Teacher dashboards</h3>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: softText }}>
                      See every student&apos;s progress the moment it happens. Push a module live, monitor
                      completion in real time, and intervene before anyone falls behind.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Live class view', 'Module control', 'Completion tracking'].map((label) => (
                        <span key={label} className="text-xs font-medium px-3 py-1 rounded-full border"
                          style={{ borderColor: `${t.light}40`, color: t.lightCore, backgroundColor: `${t.light}12` }}>
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Right — mini class snapshot */}
                  <div className="shrink-0 rounded-2xl p-5 w-full md:w-56"
                    style={{ backgroundColor: `${t.light}10`, border: `1px solid ${t.light}20` }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold" style={{ color: softHeading }}>Period 3 · Live</span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: t.lightCore }}>
                        <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: t.lightCore }} />
                        24 students
                      </span>
                    </div>
                    {/* Student status grid */}
                    <div className="grid grid-cols-6 gap-1.5 mb-4">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-md"
                          style={{
                            backgroundColor: i < 19
                              ? `${t.lightCore}cc`
                              : i < 22
                              ? `${t.accent}99`
                              : `${t.light}30`,
                          }} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs" style={{ color: softText }}>
                      <span>19 on track</span>
                      <span style={{ color: t.accent }}>3 need help</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product shot — framed centerpiece */}
            <div className="reveal mt-8 mx-auto max-w-2xl rounded-2xl p-3 sm:p-4"
              style={{
                border: '1px solid transparent',
                backgroundImage: `linear-gradient(${t.authorityCard}, ${t.authorityCard}), linear-gradient(135deg, ${t.softCard.edgeFrom}, ${t.softCard.edgeTo})`,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/productimg1.png" alt="The Shard teacher dashboard — plan, teach and observe in one place" className="w-full" />
            </div>
          </Container>
        </section>

        <div className="glow-seam" style={{ '--seam-color': 'rgba(80,40,160,0.45)' } as React.CSSProperties} />

        {/* ══ 3 · CURRICULUM AUTHORITY — the single trust beat ══ */}
        <section id="technologies" className="relative py-[clamp(3rem,7vw,9rem)]">
          <Container>
            {/* Intro — bold centered typography */}
            <div className="text-center mb-[clamp(2rem,4vw,3rem)]">
              <Eyebrow color={t.eyebrowCta}>Curriculum authority</Eyebrow>
              <h2 className="font-bold tracking-tight leading-[1.08] mb-5 reveal" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: t.text.heading }}>
                The complete curriculum.<br />
                <span style={{ color: t.lightCore }}>Built from the source.</span>
              </h2>
              <p className="leading-relaxed mx-auto max-w-3xl reveal" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)', color: t.text.body }}>
                Not adapted from overseas materials or mapped after the fact. Every content description,
                every strand, every proficiency level authored by the same team who wrote the national standard.
              </p>
            </div>
            {/* Authority bar — centered */}
            <div className="flex items-center gap-4 rounded-xl px-6 py-5 mb-[clamp(2.5rem,5vw,4rem)] max-w-2xl mx-auto reveal"
              style={{
                border: '1.5px solid transparent',
                backgroundImage: `linear-gradient(${t.authorityCard}, ${t.authorityCard}), linear-gradient(135deg, rgba(180,130,255,0.70), rgba(80,30,160,0.85))`,
                backgroundOrigin: 'padding-box, border-box',
                backgroundClip: 'padding-box, border-box',
              }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: t.accent }}>
                <Award className="size-5" style={{ color: '#fff' }} />
              </span>
              <div>
                <p className="font-semibold leading-snug" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)', color: t.text.heading }}>
                  Built by the author of the Australian Curriculum: Digital Technologies
                </p>
                <p className="text-sm mt-0.5" style={{ color: t.text.muted }}>
                  2016 ACCE/ACS ICT Educator of the Year · Former Chief Education Officer, Grok Academy
                </p>
              </div>
            </div>

            {/* Year 7 & 8 scope & sequence */}
            <h3 className="text-sm font-semibold tracking-[0.18em] uppercase mb-6 text-center reveal" style={{ color: t.text.faint }}>
              Year 7 &amp; 8 scope &amp; sequence
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {curriculum.map((m) => (
                <div key={m.title} className="reveal world-card world-card-soft relative rounded-2xl p-6 overflow-hidden" style={softCardStyle}>
                  <span className="inline-block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: t.lightCore }}>{m.year}</span>
                  <h4 className="font-bold mb-1.5" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.125rem)', color: softHeading }}>{m.title}</h4>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: softText }}>{m.desc}</p>
                  <Chip code={m.code} />
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className="glow-seam" style={{ '--seam-color': 'rgba(80,40,160,0.45)' } as React.CSSProperties} />

        {/* ══ 4 · FOUNDING TEAM ══ */}
        <section id="team" className="relative py-[clamp(3.5rem,8vw,10rem)]">
          <Container>
            <div className="rounded-2xl p-8 mb-6" style={{ background: 'rgba(10,5,28,0.60)' }}>
              <Eyebrow color={t.eyebrow}>The founding team</Eyebrow>
              <h2 className="font-bold tracking-tight leading-[1.08] mb-[clamp(1rem,2vw,1.5rem)] reveal" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: t.text.heading }}>
                The people who wrote the curriculum, building the tool to teach it.
              </h2>
              <p className="leading-relaxed reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: t.text.body }}>
                Not a typical EdTech founding team. Shard is built by the authors and leaders behind
                Australia&apos;s national Digital Technologies curriculum.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Bruce Fuda — lead author, kept in the dark authority styling */}
              <div className="reveal world-card relative overflow-hidden flex flex-col rounded-2xl p-6" style={{ background: t.authorityCard, border: `1.5px solid ${t.authorityCardBorder}` }}>
                {/* Row 1 — identity */}
                <div className="flex items-center gap-4 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/teachers/bruce-fuda.webp" alt="Bruce Fuda" className="w-16 h-16 rounded-full shrink-0 object-cover" />
                  <div className="min-w-0">
                    <h3 className="font-semibold leading-tight mb-1.5" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', color: t.text.heading }}>Bruce Fuda</h3>
                    <span className="inline-flex text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: `${t.accent}26`, color: t.lightCore }}>Chief Operations Officer</span>
                  </div>
                </div>
                {/* Row 2 — supporting */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: t.text.muted }}>
                  Author of the Australian Curriculum: Digital Technologies. Former Chief Education Officer at Grok Academy.
                </p>
                {/* Award — anchored to the bottom */}
                <div className="mt-auto flex items-center gap-2.5 rounded-lg px-3 py-2.5 w-fit"
                  style={{ backgroundColor: `${t.cta}26`, border: `1px solid ${t.cta}40` }}>
                  <span className="flex w-8 h-8 rounded-full items-center justify-center shrink-0" style={{ backgroundColor: t.cta }}>
                    <Award className="size-4" style={{ color: '#fff' }} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-tight" style={{ color: t.lightCore }}>2016 ACCE/ACS Award</p>
                    <p className="text-[11px] leading-tight" style={{ color: t.text.muted }}>ICT Educator of the Year</p>
                  </div>
                </div>
              </div>
              {/* Partnership card — emphasised: keeps the gradient outline the profiles drop */}
              <div className="reveal world-card world-card-soft relative overflow-hidden rounded-2xl p-6 flex flex-col" style={softCardStyle}>
                {/* Row 1 — identity */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex w-16 h-16 rounded-full shrink-0 items-center justify-center" style={{ backgroundColor: `${t.accent}26` }}>
                    <Sparkles className="size-7" style={{ color: t.lightCore }} />
                  </span>
                  <div className="min-w-0">
                    <span className="inline-flex text-[11px] font-semibold tracking-[0.18em] uppercase px-2.5 py-0.5 rounded-full mb-1.5"
                      style={{ backgroundColor: `${t.accent}26`, color: t.lightCore }}>In partnership with</span>
                    <h3 className="font-bold leading-tight" style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)', color: softHeading }}>Growing Up Greatness</h3>
                  </div>
                </div>
                {/* Row 2 — supporting */}
                <p className="text-sm leading-relaxed mb-4" style={{ color: softText }}>
                  Works with schools, educators and leaders to implement high-quality pedagogy for diverse
                  classrooms — through consultancy, coaching, and teacher professional learning.
                </p>
                <a href="https://growingupgreatness.com" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:underline" style={{ color: t.accent }}>
                  growingupgreatness.com <ArrowRight className="size-3.5" />
                </a>
              </div>
              {team.filter((m) => m.name !== 'Bruce Fuda').map((m) => (
                <div key={m.name} className="reveal world-card world-card-soft relative overflow-hidden rounded-2xl p-6" style={{ ...softCardStyle, border: 'none' }}>
                  {/* Row 1 — identity */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.photo} alt={m.name} className="w-16 h-16 rounded-full shrink-0 object-cover" />
                    <div className="min-w-0">
                      <h3 className="font-semibold leading-tight mb-1.5" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)', color: softHeading }}>{m.name}</h3>
                      <span className="inline-flex text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1.5"
                        style={{ backgroundColor: `${t.accent}26`, color: t.lightCore }}>{m.role}</span>
                      <p className="text-xs font-medium leading-snug" style={{ color: t.light }}>{m.cred}</p>
                    </div>
                  </div>
                  {/* Row 2 — supporting */}
                  <p className="text-sm leading-relaxed" style={{ color: softText }}>{m.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className="glow-seam" style={{ '--seam-color': 'rgba(80,40,160,0.45)' } as React.CSSProperties} />

        {/* ══ 5 · MISSION ══ */}
        <section id="mission" className="relative py-[clamp(5rem,11vw,13rem)]">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Eyebrow color={t.eyebrowCta}>Mission</Eyebrow>
              <h2 className="font-bold tracking-tight leading-[1.08] mb-7 reveal" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', color: t.text.heading }}>
                Quality education should be{' '}
                <span style={{ color: t.lightCore }}>accessible</span>,{' '}
                <span style={{ color: t.lightCore }}>interactive</span>, and{' '}
                <span style={{ color: t.lightCore }}>curriculum-aligned</span>.
              </h2>
              <p className="leading-relaxed mx-auto max-w-2xl reveal" style={{ fontSize: 'clamp(1.125rem, 1.7vw, 1.35rem)', color: t.text.body }}>
                Shard Learning empowers teachers with tools to deliver engaging digital literacy education
                that meets national standards while respecting classroom realities.
              </p>
            </div>
          </Container>
        </section>

        <div className="glow-seam" style={{ '--seam-color': 'rgba(80,40,160,0.45)' } as React.CSSProperties} />

        {/* ══ 6 · CONTACT ══ */}
        <section id="schools" className="relative py-[clamp(3rem,7vw,9rem)] scroll-mt-20">
          <Container>
            <Eyebrow color={t.eyebrowCta}>For schools</Eyebrow>
            <h2 className="font-bold tracking-tight mb-3 reveal" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: t.text.heading }}>Get in touch.</h2>
            <p className="leading-relaxed mb-10 reveal" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: t.text.body }}>
              Join the pilot and help shape what great learning looks like.
            </p>
            <div className="max-w-2xl">
              <form className="space-y-5 reveal">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" id="w-name" placeholder="Your name" t={t} />
                  <Field label="Email" id="w-email" type="email" placeholder="you@school.edu.au" t={t} />
                </div>
                <Field label="School or organisation" id="w-school" placeholder="Your school" t={t} />
                <div>
                  <label htmlFor="w-msg" className="block text-sm font-medium mb-2" style={{ color: t.text.bodyStrong }}>Message</label>
                  <textarea id="w-msg" rows={5} placeholder="Tell us about your school…"
                    className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-1 transition-colors"
                    style={{ ['--tw-ring-color' as string]: t.cta, backgroundColor: t.surface.inputFill, borderColor: t.surface.inputBorder, color: t.text.heading }} />
                </div>
                <button type="submit" className="w-full font-semibold rounded-lg transition-colors hover:brightness-110 py-3.5" style={{ backgroundColor: t.cta, color: t.text.onAccent }}>
                  Send message
                </button>
              </form>
            </div>
          </Container>
        </section>
      </WorldScene>

      {/* ══ FOOTER ══ */}
      <footer className="text-white/45 py-10 border-t border-white/10" style={{ backgroundColor: t.footer }}>
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Shard Learning" width={18} height={18} />
            <span>© 2026 Shard Learning Pty Ltd. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use'].map((i) => (
              <a key={i} href="#" className="footer-link hover:text-white transition-colors">{i}</a>
            ))}
          </div>
        </Container>
      </footer>
    </div>
  );
}

function Field({ label, id, type = 'text', placeholder, t }: { label: string; id: string; type?: string; placeholder?: string; t: WorldTheme }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2" style={{ color: t.text.bodyStrong }}>{label}</label>
      <input id={id} type={type} placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-1 transition-colors"
        style={{ ['--tw-ring-color' as string]: t.cta, backgroundColor: t.surface.inputFill, borderColor: t.surface.inputBorder, color: t.text.heading }} />
    </div>
  );
}
