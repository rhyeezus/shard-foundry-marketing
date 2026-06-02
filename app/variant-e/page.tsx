import { ChevronRight, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { Nav } from '@/components/Nav';

/*
 * Hero = the Figma art exported as a single PNG (art only, no text), used as a
 * background image. Real HTML headline + CTAs are overlaid on top so they stay
 * crisp, clickable and accessible.
 */
const HERO_BG = '/assets/BG.png';

/* Single source of truth for page width — matches the nav (max-w-7xl + gutters)
 * so every section's left/right edges line up. */
function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>;
}

/* ── Content (best-of, drawn from variants A–D) ── */

const features = [
  {
    title: 'Curriculum-aligned content',
    desc: 'Interactive lessons mapped to the Australian Curriculum: Digital Technologies — data representation, algorithms, programming and more.',
    gem: '#FF7A1F',
    diamond: '/assets/orangegem.svg',
  },
  {
    title: 'Teacher dashboards',
    desc: 'Real-time classroom management with live progress tracking, activity monitoring and assessment tools — everything in one place.',
    gem: '#2BC6B2',
    diamond: '/assets/aqua_gem.svg',
  },
  {
    title: 'Interactive learning tools',
    desc: 'Whole-classroom discussions, collaborative activities and real-time shared exercises that keep every student engaged.',
    gem: '#2BC6B2',
    diamond: '/assets/aqua_gem.svg',
  },
  {
    title: 'Partner content',
    desc: 'A growing library of specialist content — professional development for teachers and enrichment programs for gifted learners.',
    gem: '#FF7A1F',
    diamond: '/assets/orangegem.svg',
  },
];

const stats = [
  { value: '15+', label: 'Years building the national curriculum', accent: '#2BC6B2' },
  { value: '2016', label: 'ACCE/ACS ICT Educator of the Year', accent: '#FF7A1F' },
  { value: 'v9.0', label: 'AC: Digital Technologies aligned', accent: '#7B4BFF' },
];

const curriculum = [
  { year: 'Year 7', title: 'Data & Information', desc: 'Representation, integrity and the meaning behind the bits.' },
  { year: 'Year 7', title: 'Digital Systems', desc: 'How hardware, software and networks fit together.' },
  { year: 'Year 8', title: 'Creating Digital Solutions', desc: 'From brief to build — designing for real users.' },
  { year: 'Year 8', title: 'Processes & Production', desc: 'Iterate, test and refine like a working developer.' },
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
    bio: 'Author of the Australian Curriculum: Digital Technologies. 2016 ACCE/ACS ICT Educator of the Year. Former Chief Education Officer at Grok Academy. School leader and teacher.',
  },
  {
    photo: '/teachers/matthew-kameron.webp',
    name: 'Matthew Kameron',
    role: 'Chief Executive Officer',
    bio: 'Executive leader in EdTech SaaS companies. Technical and product leadership. Former school leader and teacher. Master of Educational Leadership.',
  },
  {
    photo: '/teachers/courtney-weaver.webp',
    name: 'Courtney Weaver',
    role: 'Head of Education',
    bio: 'Digital Technology school leader. Former Head of Education at Grok Academy. Vice President of the Educational Computing Association of WA (ECAWA). ATAR Examination writer for Computer Science.',
  },
];

function Eyebrow({ children, color = '#FF7A1F' }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color }}>
      {children}
    </p>
  );
}

export default function VariantE() {
  return (
    <div className="overflow-x-clip" style={{ backgroundColor: '#0D0620', minHeight: '100vh' }}>
      <Nav theme="amethyst" />

      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: '100svh',
          backgroundColor: '#09041A',
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Readability scrim — diagonal from the top-left (where the type always
            sits) fading to clear at the bottom-right, so the headline stays legible
            at every viewport while the lava and characters on the right stay bright. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(152deg, rgba(9,4,26,0.95) 0%, rgba(9,4,26,0.82) 26%, rgba(9,4,26,0.42) 48%, rgba(9,4,26,0) 68%)',
          }}
        />
        {/* Bottom fade — dissolves the art into the below-fold colour (#241655)
            so there's no hard seam between the hero and the next section. */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: '40%',
            background:
              'linear-gradient(180deg, rgba(36,22,85,0) 0%, rgba(36,22,85,0.55) 58%, #241655 100%)',
          }}
        />
        <div className="relative z-10" style={{ paddingTop: 'max(96px, 13vh)' }}>
          <Container>
            <div style={{ width: '100%', maxWidth: '488px' }}>
              <h1
                className="font-bold text-white mb-4"
                style={{ fontSize: 'clamp(34px, 3.38vw, 56px)', letterSpacing: '-0.02em', lineHeight: 1.07 }}
              >
                Where great learning is forged
              </h1>
              <p className="mb-8" style={{ fontSize: 'clamp(18px, 1.82vw, 30px)', lineHeight: 1.43, color: 'rgba(255,255,255,0.72)' }}>
                Curriculum-aligned experiences designed by teachers, for teachers.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#schools"
                  className="inline-flex items-center gap-2 font-bold rounded-lg text-white shadow-lg bg-[#F97316] hover:bg-[#EA580C] transition-colors"
                  style={{ padding: '12px 24px', fontSize: 'clamp(13px, 1.04vw, 16px)' }}
                >
                  Join the pilot <ChevronRight size={16} />
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center font-semibold rounded-lg text-white border border-white/30 bg-white/[0.08] hover:bg-white/[0.14] hover:border-white/55 transition-colors"
                  style={{ padding: '12px 24px', fontSize: 'clamp(13px, 1.04vw, 16px)' }}
                >
                  See the platform
                </a>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══ BELOW-FOLD — one continuous gradient so sections bleed seamlessly ══ */}
      <div
        className="relative"
        style={{
          background:
            'linear-gradient(180deg, #241655 0%, #1B1340 9%, #14112F 22%, #0E0C24 40%, #0A0E27 60%, #0A0C20 80%, #08060F 100%)',
        }}
      >
        {/* ── Intro + feature bento ── */}
        <section className="relative pt-28 pb-24">
          <div
            className="absolute inset-x-0 top-0 h-96 pointer-events-none"
            style={{ background: 'radial-gradient(60% 100% at 50% 0%, rgba(123,75,255,0.22), transparent 70%)' }}
          />
          <Container className="relative">
            <div className="max-w-2xl mb-14">
              <Eyebrow color="#FFB347">The platform</Eyebrow>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.08] mb-5">
                Everything teachers need, in one forge.
              </h2>
              <p className="text-lg text-white/55 leading-relaxed">
                Built around the realities of Australian classrooms. Not a content library, not a quiz
                engine — a complete teaching platform.
              </p>
            </div>

            {/* Bento: 2 × 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/20"
                >
                  <div
                    className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-2xl opacity-30 transition-opacity group-hover:opacity-50 pointer-events-none"
                    style={{ background: f.gem }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.diamond}
                    alt=""
                    aria-hidden
                    className="relative mb-4 h-14 w-auto"
                  />
                  <h3 className="relative text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="relative text-sm text-white/55 leading-relaxed max-w-md">{f.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Platform showcase: dashboard + stats ── */}
        <section id="platform" className="relative py-24">
          <Container className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Product shot with gems perched on the bottom corners */}
            <div className="relative pb-10">
              <div
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-40 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 60% 60%, #F97316, transparent 70%)' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/productimg1.png"
                alt="Shard Learning teacher dashboard"
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/orangegem.svg"
                alt=""
                aria-hidden
                className="absolute z-20 left-0 bottom-0 w-[34%] -translate-x-1/3 translate-y-[18%] pointer-events-none"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aqua_gem.svg"
                alt=""
                aria-hidden
                className="absolute z-20 right-0 bottom-0 w-[34%] translate-x-1/3 translate-y-[18%] pointer-events-none"
              />
            </div>

            {/* Copy + stats */}
            <div>
              <Eyebrow color="#2BC6B2">Teacher command centre</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 leading-tight">
                Plan, teach and observe — without leaving the room.
              </h2>
              <p className="text-white/55 leading-relaxed mb-10">
                Set up classes in seconds, drop students in by code, push modules live, and watch
                progress update in real time. The whole workflow a teacher actually runs, in one screen.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    style={{ borderTopColor: s.accent, borderTopWidth: 2 }}
                  >
                    <p className="text-2xl font-bold text-white mb-1 tracking-tight">{s.value}</p>
                    <p className="text-xs text-white/45 leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Curriculum authority + scope ── */}
        <section id="technologies" className="relative py-24">
          <div
            className="absolute inset-x-0 top-1/3 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(50% 100% at 70% 50%, rgba(249,115,22,0.16), transparent 70%)' }}
          />
          <Container className="relative">
            <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
              {/* Authority card */}
              <div className="relative rounded-3xl border border-white/10 p-10" style={{ background: 'linear-gradient(160deg, #120d2e, #0a0a1f)' }}>
                <Eyebrow color="#FF7A1F">Curriculum authority</Eyebrow>
                <h3 className="text-3xl font-bold text-white mb-1">Bruce Fuda</h3>
                <p className="text-white/55 text-sm mb-8">Author, Australian Curriculum: Digital Technologies</p>
                <div className="inline-flex items-center gap-3 bg-orange-500/15 border border-orange-500/25 rounded-xl px-4 py-3 mb-8">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                    <Award className="size-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-orange-300">2016 ACCE/ACS Award</p>
                    <p className="text-xs text-white/50">ICT Educator of the Year</p>
                  </div>
                </div>
                <p className="text-sm text-white/55 leading-relaxed">
                  Former Chief Education Officer at Grok Academy. The curriculum isn&apos;t adapted
                  after the fact — it&apos;s authored by the person who wrote the national standard.
                </p>
              </div>

              {/* Checklist */}
              <div>
                <Eyebrow color="#FF7A1F">Digital Technologies</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5 leading-tight">
                  The complete curriculum.<br />Built from the source.
                </h2>
                <p className="text-white/55 leading-relaxed mb-8">
                  Not adapted from overseas materials or mapped after the fact. Every content
                  description, every strand, every proficiency level — authored by the same team who
                  wrote the national standard.
                </p>
                <div className="space-y-3 mb-9">
                  {checklist.map((c) => (
                    <div key={c} className="flex items-center gap-3">
                      <CheckCircle className="size-4 text-orange-400 shrink-0" />
                      <span className="text-sm text-white/80">{c}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#schools"
                  className="inline-flex items-center gap-2 font-semibold rounded-lg text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors px-7 py-3"
                >
                  Join the pilot <ArrowRight className="size-4" />
                </a>
              </div>
            </div>

            {/* Scope grid */}
            <div>
              <h3 className="text-center text-sm font-semibold tracking-[0.18em] uppercase text-white/40 mb-8">
                Year 7 &amp; 8 scope &amp; sequence
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {curriculum.map((m) => (
                  <div key={m.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden hover:border-white/20 transition-colors">
                    <div className="absolute left-0 top-0 h-full w-1" style={{ background: 'linear-gradient(180deg,#FFB347,#F97316)' }} />
                    <span className="inline-block text-[11px] font-semibold tracking-wide uppercase text-orange-300/90 mb-2">{m.year}</span>
                    <h4 className="text-lg font-bold text-white mb-1.5">{m.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Mission ── */}
        <section id="mission" className="relative py-28">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(50% 70% at 50% 50%, rgba(123,75,255,0.18), transparent 70%)' }}
          />
          <Container className="relative">
            <div className="max-w-3xl mx-auto text-center">
              <Eyebrow color="#A750FF">Mission</Eyebrow>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-white tracking-tight leading-[1.12] mb-6">
                Quality education should be accessible, interactive, and curriculum-aligned.
              </h2>
              <p className="text-lg text-white/55 leading-relaxed">
                Shard Learning empowers teachers with tools to deliver engaging digital literacy
                education that meets national standards while respecting classroom realities.
              </p>
            </div>
          </Container>
        </section>

        {/* ── Team ── */}
        <section id="team" className="relative py-24">
          <Container>
            <div className="text-center mb-14">
              <Eyebrow color="#2BC6B2">Founding team &amp; partners</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built by educators.</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4 p-[2px]"
                    style={{ background: 'linear-gradient(135deg, rgba(255,122,31,0.6), rgba(123,75,255,0.6))' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-white mb-1">{m.name}</h3>
                  <span className="inline-flex text-xs font-semibold bg-orange-500/15 text-orange-300 px-2.5 py-1 rounded-full mb-4">{m.role}</span>
                  <p className="text-sm text-white/50 leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>

            {/* Partners */}
            <div className="mt-16 text-center">
              <Eyebrow color="#7B4BFF">Partners</Eyebrow>
              <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <p className="text-2xl font-bold mb-3" style={{ color: '#2BC6B2' }}>Growing Up Greatness</p>
                <p className="text-sm text-white/55 leading-relaxed mb-4">
                  Growing Up Greatness works with schools, educators and school leaders to implement
                  high-quality pedagogy for diverse classrooms through consultancy, coaching, and
                  teacher professional learning.
                </p>
                <a
                  href="https://growingupgreatness.com"
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#7B4BFF' }}
                >
                  growingupgreatness.com
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Contact ── */}
        <section id="schools" className="relative py-24 scroll-mt-20">
          <Container>
            <div>
              <div className="text-center mb-12">
                <Eyebrow color="#FF7A1F">For schools</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Get in touch.</h2>
                <p className="text-white/50">Join the pilot and help shape what great learning looks like.</p>
              </div>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" id="e-name" placeholder="Your name" />
                  <Field label="Email" id="e-email" type="email" placeholder="you@school.edu.au" />
                </div>
                <Field label="School or organisation" id="e-school" placeholder="Your school" />
                <div>
                  <label htmlFor="e-msg" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    id="e-msg"
                    rows={5}
                    placeholder="Tell us about your school…"
                    className="w-full rounded-lg bg-white/[0.04] border border-white/15 px-4 py-3 text-white placeholder-white/30 focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-semibold rounded-lg text-white bg-[#F97316] hover:bg-[#EA580C] transition-colors py-3.5"
                >
                  Send message
                </button>
              </form>
            </div>
          </Container>
        </section>
      </div>

      {/* ══ FOOTER ══ */}
      <footer className="bg-[#07060F] text-white/45 py-10 border-t border-white/10">
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

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/70 mb-2">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/[0.04] border border-white/15 px-4 py-3 text-white placeholder-white/30 focus:border-[#F97316] focus:outline-none focus:ring-1 focus:ring-[#F97316] transition-colors"
      />
    </div>
  );
}
