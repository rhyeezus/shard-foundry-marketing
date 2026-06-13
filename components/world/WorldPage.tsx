import { ChevronRight, ArrowRight, CheckCircle, Award, Sparkles, Radio } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { WorldScene } from './WorldScene';
import { Particles } from './Particles';
import { LiveDashboard } from './LiveDashboard';
import type { WorldTheme } from './theme';

/* ── Single source of width — matches the nav so every section's edges align. ── */
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>;
}

/* ── Shared content (identical across both worlds — only the theme changes). ── */

const features = [
  {
    title: 'Curriculum-aligned content',
    desc: 'Interactive lessons mapped to the Australian Curriculum: Digital Technologies — data representation, algorithms, programming and more.',
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
    desc: 'A growing library of specialist content — professional development for teachers and enrichment programs for gifted learners.',
    codes: ['ACTDIK028'],
  },
];

const stats = [
  { value: '15+', label: 'Years building the national curriculum' },
  { value: '2016', label: 'ACCE/ACS ICT Educator of the Year' },
  { value: 'v9.0', label: 'AC: Digital Technologies aligned' },
];

const curriculum = [
  { year: 'Year 7', code: 'AC9TDI8K01', title: 'Data & Information', desc: 'Representation, integrity and the meaning behind the bits.' },
  { year: 'Year 7', code: 'AC9TDI8K02', title: 'Digital Systems', desc: 'How hardware, software and networks fit together.' },
  { year: 'Year 8', code: 'AC9TDI8P09', title: 'Creating Digital Solutions', desc: 'From brief to build — designing for real users.' },
  { year: 'Year 8', code: 'AC9TDI8P10', title: 'Processes & Production', desc: 'Iterate, test and refine like a working developer.' },
];

const checklist = [
  'Aligned to AC: DT v9.0 content descriptions',
  'Full Year 7 & 8 scope and sequence, complete',
  'Formative assessment built into every lesson',
  'Print-ready teacher guides included',
  'Offline-capable student activities',
  'School administration dashboard',
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

  const cardBase: React.CSSProperties = {
    backgroundColor: t.card.fill,
    borderColor: t.card.border,
  };

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
        {/* Painted with the gradient's top stop so the masked video dissolves into
            a matching flat colour — seamless hero→body transition, no seam. */}
        <section className="relative overflow-hidden" style={{ minHeight: '100svh', backgroundColor: t.heroBase }}>
          {/* Hero video — full-bleed (object-cover), filling the hero exactly.
              Anchored to the bottom so any crop is taken off the TOP; the full
              bottom edge stays in frame. No parallax drift on the video itself —
              drift would slide it down and expose the heroBase colour at the top
              (under the nav). The dissolve is concentrated in the final ~48px so
              the seam softens without the fade eating into the video. */}
          <video
            className="absolute inset-0 pointer-events-none w-full h-full object-cover"
            style={{
              objectPosition: 'center bottom',
              WebkitMaskImage: 'linear-gradient(180deg, #000 calc(100% - 48px), transparent 100%)',
              maskImage: 'linear-gradient(180deg, #000 calc(100% - 48px), transparent 100%)',
            }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={t.heroVideo} type="video/mp4" />
          </video>

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

          <div className="relative z-10" data-hero-content style={{ paddingTop: 'max(48px, 7vh)' }}>
            <Container>
              <div style={{ width: '100%', maxWidth: '560px' }}>
                <h1 data-words className="font-bold mb-3" style={{ fontSize: 'clamp(34px, 3.38vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.07, color: t.heroText }}>
                  Where great learning is forged
                </h1>
                <p className="mb-6 reveal" style={{ fontSize: 'clamp(18px, 1.82vw, 30px)', lineHeight: 1.43, color: t.heroTextMuted }}>
                  Curriculum-aligned experiences designed by teachers, for teachers.
                </p>
                <div className="flex gap-4 flex-wrap reveal">
                  <a href="#schools" className="inline-flex items-center gap-2 font-bold rounded-lg shadow-lg transition-colors hover:brightness-110"
                    style={{ padding: '12px 24px', fontSize: 'clamp(13px, 1.04vw, 16px)', backgroundColor: t.cta, color: t.text.onAccent }}>
                    Join the pilot <ChevronRight size={16} />
                  </a>
                  <a href="#platform" className="inline-flex items-center font-semibold rounded-lg border transition-colors hover:brightness-110"
                    style={{ padding: '12px 24px', fontSize: 'clamp(13px, 1.04vw, 16px)', color: t.heroText, borderColor: t.heroOutline, backgroundColor: t.heroOutlineFill }}>
                    See the platform
                  </a>
                </div>

                {/* Authority proof-strip — the differentiator on screen one. */}
                <div className="mt-9 reveal flex items-center gap-3 rounded-xl border px-4 py-3 w-fit"
                  style={{ backgroundColor: t.heroOutlineFill, borderColor: t.heroOutline }}>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full shrink-0" style={{ backgroundColor: t.accent }}>
                    <Award className="size-4" style={{ color: '#fff' }} />
                  </span>
                  <p className="text-sm leading-snug" style={{ color: t.heroTextStrong }}>
                    Built by the author of the <span className="font-semibold" style={{ color: t.heroText }}>Australian Curriculum: Digital Technologies</span>
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* ══ 2 · AUTHORITY BAND — promoted to lead ══ */}
        <section id="team" className="relative py-28 md:py-40">
          <Container>
            <div className="max-w-2xl mb-14">
              <Eyebrow color={t.eyebrow}>The founding team</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-5 reveal" style={{ color: t.text.heading }}>
                The people who wrote the curriculum, building the tool to teach it.
              </h2>
              <p className="text-lg leading-relaxed reveal" style={{ color: t.text.body }}>
                Not a typical EdTech founding team. Shard is built by the authors and leaders behind
                Australia&apos;s national Digital Technologies curriculum.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.name} className="reveal world-card world-card-soft rounded-2xl p-8" style={softCardStyle}>
                  <div className="w-20 h-20 rounded-full mb-5 p-[2px] world-glow"
                    style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.light})` }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.photo} alt={m.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: softHeading }}>{m.name}</h3>
                  <span className="inline-flex text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${t.accent}26`, color: t.lightCore }}>{m.role}</span>
                  <p className="text-sm font-medium mb-3" style={{ color: t.light }}>{m.cred}</p>
                  <p className="text-sm leading-relaxed" style={{ color: softText }}>{m.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <div className="glow-seam" style={{ ['--seam-color' as string]: t.light }} aria-hidden />

        {/* ══ 3 · LIVE PRODUCT SHOWCASE — "alive in use" ══ */}
        <section id="platform" className="relative py-24 md:py-36">
          <div className="absolute inset-x-0 top-1/4 h-96 pointer-events-none" data-parallax="-25"
            style={{ background: `radial-gradient(50% 100% at 60% 50%, ${t.light}22, transparent 70%)` }} />
          <Container className="relative grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Eyebrow color={t.eyebrow}>Teacher command centre</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight reveal" style={{ color: t.text.heading }}>
                Plan, teach and observe — without leaving the room.
              </h2>
              <p className="leading-relaxed mb-10 reveal" style={{ color: t.text.body }}>
                Set up classes in seconds, drop students in by code, push modules live, and watch progress
                update in real time. The whole workflow a teacher actually runs, in one screen.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => {
                  const accent = [t.accent, t.light, t.atmosphere][i];
                  return (
                    <div key={s.label} className="reveal rounded-2xl border p-5"
                      style={{ ...cardBase, borderTopColor: accent, borderTopWidth: 2 }}>
                      <p className="text-2xl font-bold mb-1 tracking-tight" style={{ color: t.text.heading }} data-count={s.value}>{s.value}</p>
                      <p className="text-xs leading-snug" style={{ color: t.text.muted }}>{s.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* The live, animated dashboard mock — drifts up gently as it enters. */}
            <div className="relative pb-6" data-parallax="-8">
              <div className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40 pointer-events-none world-glow"
                style={{ background: `radial-gradient(ellipse at 55% 55%, ${t.light}, transparent 70%)` }} />
              <LiveDashboard t={t} />
            </div>
          </Container>
        </section>

        {/* ══ 4 · PLATFORM BENTO — real hierarchy ══ */}
        <section className="relative py-24 md:py-36">
          <Container>
            <div className="max-w-2xl mb-14">
              <Eyebrow color={t.eyebrow}>The platform</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-5 reveal" style={{ color: t.text.heading }}>
                Everything teachers need, in one forge.
              </h2>
              <p className="text-lg leading-relaxed reveal" style={{ color: t.text.body }}>
                Built around the realities of Australian classrooms. Not a content library, not a quiz
                engine — a complete teaching platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map((f) => (
                <div key={f.title}
                  className={`reveal world-card world-card-soft group relative overflow-hidden rounded-3xl p-8 ${f.span ? 'md:col-span-2 md:row-span-1' : ''}`}
                  style={softCardStyle}>
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-2xl opacity-30 transition-opacity group-hover:opacity-60 pointer-events-none world-glow"
                    style={{ background: f.span ? t.light : t.accent }} />
                  <div className="relative flex items-center gap-2 mb-4">
                    <Sparkles className="size-5" style={{ color: t.light }} />
                  </div>
                  <h3 className="relative text-xl font-bold mb-2" style={{ color: softHeading }}>{f.title}</h3>
                  <p className="relative text-sm leading-relaxed max-w-md mb-4" style={{ color: softText }}>{f.desc}</p>
                  <div className="relative flex flex-wrap gap-2">
                    {f.codes.map((c) => <Chip key={c} code={c} />)}
                  </div>
                </div>
              ))}
              {/* Fourth tile fills the bento's bottom-right — teacher dashboards highlight. */}
              <div className="reveal world-card world-card-soft group relative overflow-hidden rounded-3xl p-8" style={softCardStyle}>
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-2xl opacity-30 group-hover:opacity-60 pointer-events-none world-glow" style={{ background: t.atmosphere }} />
                <div className="relative flex items-center gap-2 mb-4"><Radio className="size-5" style={{ color: t.light }} /></div>
                <h3 className="relative text-xl font-bold mb-2" style={{ color: softHeading }}>Teacher dashboards</h3>
                <p className="relative text-sm leading-relaxed" style={{ color: softText }}>
                  Real-time classroom management with live progress tracking and assessment — everything in one place.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <div className="glow-seam" style={{ ['--seam-color' as string]: t.light }} aria-hidden />

        {/* ══ 5 · CURRICULUM AUTHORITY + SCOPE ══ */}
        <section id="technologies" className="relative py-24 md:py-36">
          <div className="absolute inset-x-0 top-1/3 h-80 pointer-events-none"
            style={{ background: `radial-gradient(50% 100% at 70% 50%, ${t.light}1f, transparent 70%)` }} />
          <Container className="relative">
            <div className="grid lg:grid-cols-2 gap-14 items-stretch mb-20">
              {/* Authority card */}
              <div className="reveal relative flex flex-col justify-center rounded-3xl border p-10" style={{ background: t.authorityCard, borderColor: t.card.border }}>
                <Eyebrow color={t.eyebrowCta}>Curriculum authority</Eyebrow>
                <h3 className="text-3xl font-bold mb-1" style={{ color: t.text.heading }}>Bruce Fuda</h3>
                <p className="text-sm mb-8" style={{ color: t.text.body }}>Author, Australian Curriculum: Digital Technologies</p>
                <div className="inline-flex items-center gap-3 rounded-xl px-4 py-3 mb-8 w-fit"
                  style={{ backgroundColor: `${t.cta}26`, border: `1px solid ${t.cta}40` }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: t.cta }}>
                    <Award className="size-4" style={{ color: '#fff' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold" style={{ color: t.lightCore }}>2016 ACCE/ACS Award</p>
                    <p className="text-xs" style={{ color: t.text.muted }}>ICT Educator of the Year</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: t.text.muted }}>
                  Former Chief Education Officer at Grok Academy. The curriculum isn&apos;t adapted after the
                  fact — it&apos;s authored by the person who wrote the national standard.
                </p>
              </div>

              {/* Checklist */}
              <div>
                <Eyebrow color={t.eyebrowCta}>Digital Technologies</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight reveal" style={{ color: t.text.heading }}>
                  The complete curriculum.<br />Built from the source.
                </h2>
                <p className="leading-relaxed mb-8 reveal" style={{ color: t.text.body }}>
                  Not adapted from overseas materials or mapped after the fact. Every content description,
                  every strand, every proficiency level — authored by the same team who wrote the national standard.
                </p>
                <div className="space-y-3 mb-9">
                  {checklist.map((c) => (
                    <div key={c} className="flex items-center gap-3 reveal">
                      <CheckCircle className="size-4 shrink-0" style={{ color: t.lightCore }} />
                      <span className="text-sm" style={{ color: t.text.bodyStrong }}>{c}</span>
                    </div>
                  ))}
                </div>
                <a href="#schools" className="reveal inline-flex items-center gap-2 font-semibold rounded-lg transition-colors hover:brightness-110 px-7 py-3" style={{ backgroundColor: t.cta, color: t.text.onAccent }}>
                  Join the pilot <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Scope grid — now with AC code chips */}
            <div>
              <h3 className="text-center text-sm font-semibold tracking-[0.18em] uppercase mb-8 reveal" style={{ color: t.text.faint }}>
                Year 7 &amp; 8 scope &amp; sequence
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {curriculum.map((m) => (
                  <div key={m.title} className="reveal world-card world-card-soft relative rounded-2xl p-6 overflow-hidden" style={softCardStyle}>
                    <div className="absolute left-0 top-0 h-full w-1" style={{ background: `linear-gradient(180deg, ${t.light}, ${t.lightCore})` }} />
                    <span className="inline-block text-[11px] font-semibold tracking-wide uppercase mb-2" style={{ color: t.lightCore }}>{m.year}</span>
                    <h4 className="text-lg font-bold mb-1.5" style={{ color: softHeading }}>{m.title}</h4>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: softText }}>{m.desc}</p>
                    <Chip code={m.code} />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ══ 6 · MISSION — the signature breath ══
            Full-bleed atmospheric moment: the page opens up here. A pool of the
            world's light rises from below (cyan on forest, ember on lava), framed
            top and bottom by glow seams so it reads as its own chapter, not just
            another text block. Deliberately the most vertical space on the page. */}
        <section id="mission" className="relative overflow-hidden py-44 md:py-60">
          {/* Glow seam framing the top of the moment. */}
          <div className="glow-seam absolute inset-x-0 top-0" style={{ ['--seam-color' as string]: t.light }} aria-hidden />

          {/* Light pool rising from below — the emotional centre's bloom. */}
          <div className="absolute inset-x-0 bottom-0 h-[80%] pointer-events-none world-glow"
            style={{ background: `radial-gradient(60% 100% at 50% 100%, ${t.light}22, transparent 72%)` }} />
          {/* Wider accent wash so the whole band feels lit, not spot-lit. */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(70% 60% at 50% 55%, ${t.accent}1f, transparent 70%)` }} />

          <Container className="relative">
            <div className="max-w-4xl mx-auto text-center">
              <Eyebrow color={t.eyebrowCta}>Mission</Eyebrow>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8 reveal" style={{ color: t.text.heading }}>
                Quality education should be accessible, interactive, and curriculum-aligned.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto reveal" style={{ color: t.text.body }}>
                Shard Learning empowers teachers with tools to deliver engaging digital literacy education
                that meets national standards while respecting classroom realities.
              </p>
            </div>
          </Container>

          {/* Glow seam framing the bottom of the moment. */}
          <div className="glow-seam absolute inset-x-0 bottom-0" style={{ ['--seam-color' as string]: t.light }} aria-hidden />
        </section>

        {/* ══ 7 · CONTACT ══ */}
        <section id="schools" className="relative py-24 md:py-36 scroll-mt-20">
          <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            <div className="flex flex-col">
              <Eyebrow color={t.eyebrow}>Partners</Eyebrow>
              <div className="reveal world-card world-card-soft flex-1 flex flex-col justify-center rounded-2xl p-8" style={softCardStyle}>
                <p className="text-2xl font-bold mb-3" style={{ color: t.light }}>Growing Up Greatness</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: softText }}>
                  Growing Up Greatness works with schools, educators and school leaders to implement
                  high-quality pedagogy for diverse classrooms through consultancy, coaching, and teacher
                  professional learning.
                </p>
                <a href="https://growingupgreatness.com" className="text-sm font-medium transition-colors hover:underline" style={{ color: t.accent }}>
                  growingupgreatness.com
                </a>
              </div>
            </div>

            <div>
              <Eyebrow color={t.eyebrowCta}>For schools</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 reveal" style={{ color: t.text.heading }}>Get in touch.</h2>
              <p className="leading-relaxed mb-8 reveal" style={{ color: t.text.body }}>
                Join the pilot and help shape what great learning looks like.
              </p>
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
              <a key={i} href="#" className="hover:text-white transition-colors">{i}</a>
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
