'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  ArrowRight,
  Award,
  ChevronRight,
  Zap,
  BarChart2,
  ClipboardList,
  Users,
} from "lucide-react";

/* ── Data ── */

const features = [
  {
    title: "Curriculum-Aligned Content",
    desc: "Interactive lessons mapped to the Australian Curriculum: Digital Technologies, covering data representation, algorithms, programming, and more.",
  },
  {
    title: "Teacher Dashboards",
    desc: "Real-time classroom management with live progress tracking, student activity monitoring, and assessment tools — everything a teacher needs in one place.",
  },
  {
    title: "Interactive Learning Tools",
    desc: "Students learn together and with their teacher through whole-classroom discussions, collaborative activities, and real-time shared exercises that keep every student engaged.",
  },
  {
    title: "Partner Content",
    desc: "A growing library of specialist content from education partners, including professional development for teachers and enrichment programs for gifted learners.",
  },
];

const team = [
  {
    initials: "JM",
    name: "James Mitchell",
    role: "Curriculum Lead",
    bio: "Author of the Australian Curriculum: Digital Technologies. 15 years building national education standards.",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Product",
    bio: "Secondary DT teacher turned product designer. Classroom-first, always.",
  },
  {
    initials: "AB",
    name: "Alex Brown",
    role: "Engineering",
    bio: "EdTech engineer with 500k+ student deployments to his name.",
  },
];

/* ── Dashboard Mockup ── */

function DashboardMockup() {
  const sideNavItems = [
    { label: 'Classes', hasChevron: true },
    { label: 'Observe', hasChevron: true },
    { label: 'Content Browser', hasChevron: false },
    { label: 'Students', hasChevron: false },
  ];

  const planningCards = [
    { title: 'Create New Class', desc: 'Set up a new class' },
    { title: 'Add Students to Class', desc: 'Invite by email, code, or URL' },
    { title: 'Add Modules to Class', desc: 'Assign learning modules' },
  ];

  const teachingCards = [
    { title: 'Impersonate Student', desc: 'View as student' },
    { title: 'Observe Student Progress', desc: 'View class and student analytics' },
  ];

  return (
    <div className="flex h-full bg-white" style={{ fontSize: '11px', fontFamily: 'inherit' }}>
      {/* Sidebar */}
      <div className="w-36 bg-white border-r border-[#e5e3df] flex-shrink-0 flex flex-col">
        {/* Header */}
        <div className="px-3 py-2.5 border-b border-[#e5e3df] flex items-center gap-1.5">
          <div
            className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7B4BFF, #5530cc)' }}
          />
          <span className="font-semibold text-[#37352f] leading-tight flex-1" style={{ fontSize: '8.5px' }}>
            Teacher Dashboard
          </span>
          <span
            className="flex-shrink-0 bg-orange-100 text-orange-600 font-semibold rounded px-1"
            style={{ fontSize: '7px' }}
          >
            Beta access
          </span>
        </div>
        {/* Quick Actions */}
        <div className="px-2 pt-2">
          <div className="flex items-center gap-1 px-1.5 py-1 text-orange-500 font-semibold" style={{ fontSize: '9px' }}>
            <Zap className="w-3 h-3 flex-shrink-0" />
            <span>Quick Actions</span>
          </div>
          {sideNavItems.map(({ label, hasChevron }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-1.5 py-1 text-[#5d5b54] rounded hover:bg-[#f6f5f4] cursor-pointer"
              style={{ fontSize: '9px' }}
            >
              <div className="w-3 h-3 rounded-sm bg-[#e5e3df] flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {hasChevron && <ChevronRight className="w-2.5 h-2.5 text-[#a4a097] flex-shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto p-3.5 bg-white">
        {/* Planning */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <ClipboardList className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span className="font-semibold text-[#37352f]" style={{ fontSize: '10px' }}>Planning</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {planningCards.map(card => (
              <div key={card.title} className="border border-orange-100 bg-orange-50/40 rounded-md p-2">
                <div className="w-4 h-4 border border-orange-200 bg-orange-50 rounded flex items-center justify-center mb-1.5">
                  <span className="text-orange-400 font-bold leading-none" style={{ fontSize: '9px' }}>+</span>
                </div>
                <p className="font-semibold text-orange-600 leading-tight mb-0.5" style={{ fontSize: '8px' }}>{card.title}</p>
                <p className="text-[#a4a097] leading-snug" style={{ fontSize: '7px' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching & Learning */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Users className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
            <span className="font-semibold text-[#37352f]" style={{ fontSize: '10px' }}>Teaching &amp; Learning</span>
          </div>
          <div className="flex gap-1.5">
            {teachingCards.map(card => (
              <div key={card.title} className="border border-orange-100 bg-orange-50/40 rounded-md p-2 flex-1">
                <div className="w-4 h-4 border border-orange-200 bg-orange-50 rounded flex items-center justify-center mb-1.5">
                  <Users className="w-2.5 h-2.5 text-orange-400" />
                </div>
                <p className="font-semibold text-orange-600 leading-tight mb-0.5 underline" style={{ fontSize: '8px' }}>{card.title}</p>
                <p className="text-[#a4a097] leading-snug" style={{ fontSize: '7px' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reporting */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <BarChart2 className="w-3.5 h-3.5 text-[#787671] flex-shrink-0" />
            <span className="font-semibold text-[#37352f]" style={{ fontSize: '10px' }}>Reporting</span>
          </div>
          <div style={{ width: '72px' }}>
            <div className="border border-[#e5e3df] rounded-md p-2">
              <div className="flex items-end gap-0.5 mb-1.5" style={{ height: '24px' }}>
                {[3, 5, 2, 4, 3].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#e5e3df] rounded-sm"
                    style={{ height: `${h * 4}px` }}
                  />
                ))}
              </div>
              <p className="font-semibold text-orange-600 leading-tight underline" style={{ fontSize: '8px' }}>View Reports</p>
              <p className="text-[#a4a097]" style={{ fontSize: '7px' }}>Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function VariantD() {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOverDark(window.scrollY < 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-off-white">

      {/* ── Navigation — full-width flat purple bar ── */}
      <nav className="fixed top-0 w-full z-50 bg-brand-purple" style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.12)' }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white/15 rounded-lg p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Shard Learning" width={28} height={28} />
            </div>
          </div>
          {/* Brand name — centred */}
          <div className="flex-1 flex items-center justify-center">
            <span className="font-bold text-white text-lg tracking-tight">Shard Learning</span>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#schools"
              className="px-4 py-1.5 text-sm font-semibold bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg transition-colors duration-150"
            >
              For Schools
            </a>
            <button className="hidden sm:block px-4 py-1.5 text-sm text-white/80 border border-white/30 rounded-lg hover:border-white/60 transition-colors duration-150">
              Sign in
            </button>
          </div>
        </div>
      </nav>

      {/* ── FAB — Get in Contact ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <button
          aria-label="Get in contact"
          className="w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <div className={`backdrop-blur-md rounded-xl px-4 py-3 shadow-xl text-center border transition-all duration-500 ${
          isOverDark ? 'opacity-100 bg-white/10 border-white/15' : 'opacity-0 pointer-events-none bg-gray-900/60 border-white/10'
        }`}>
          <p className="text-white text-sm font-medium leading-none">Get in contact</p>
          <p className="text-white/50 text-xs mt-1">We&apos;d love to hear from you</p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section className="w-full bg-white pt-14">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 items-center">

          {/* Left — heading + tagline + CTA */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl lg:text-[3.75rem] font-bold text-near-black leading-none mb-6">
              Every student,<br />genuinely engaged.
            </h1>
            <p className="text-xl text-brand-orange font-normal leading-relaxed mb-10 max-w-sm">
              Curriculum-aligned experiences<br />designed by teachers, for teachers.
            </p>
            <div>
              <button className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2">
                Join the Pilot
              </button>
            </div>
          </div>

          {/* Right — three students with diamond SVG backgrounds */}
          <div className="relative hidden lg:block" style={{ height: '400px' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'stretch' }}>
              {[
                { person: '/students/student-1.png', diamond: '/purple.svg', alt: 'Student' },
                { person: '/students/teacher.png',   diamond: '/orange.svg', alt: 'Teacher' },
                { person: '/students/student-4.png', diamond: '/teal.svg',   alt: 'Student' },
              ].map(({ person, diamond, alt }, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    position: 'relative',
                    // pull each subsequent column left so diamonds overlap
                    marginLeft: i > 0 ? '-32px' : 0,
                    // right-most on top, left-most behind
                    zIndex: i + 1,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={diamond}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: '12%',
                      left: '50%',
                      width: '100%',
                      transform: 'translateX(-50%)',
                      opacity: 0.8,
                      zIndex: 0,
                    }}
                  />
                  <Image
                    src={person}
                    alt={alt}
                    fill
                    sizes="(max-width: 1280px) 15vw, 200px"
                    className="object-contain object-bottom"
                    style={{ zIndex: 1 }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PLATFORM — 2-col + "The Platform" label + feature cards
      ══════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* 2-col grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">

            {/* Left — browser frame + decorative diamond shapes */}
            <div className="relative pt-12 pb-10">

              {/* Teal diamond — top-left decoration */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/teal.svg"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '12px',
                  width: '80px',
                  height: '80px',
                  transform: 'rotate(20deg)',
                  zIndex: 0,
                }}
              />

              {/* Browser chrome frame */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e5e3df] relative z-10">
                <div className="bg-[#f1f0ee] px-4 py-2.5 flex items-center gap-2 border-b border-[#e5e3df]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
                  </div>
                  <div className="flex-1 mx-3 bg-white rounded text-xs text-[#a4a097] text-center py-0.5 px-3">
                    app.shardlearning.com.au
                  </div>
                </div>
                {/* Inline dashboard mockup (replaces missing dashboard.png) */}
                <div style={{ height: '360px', overflow: 'hidden' }}>
                  <DashboardMockup />
                </div>
              </div>

              {/* Orange diamond — right-pointing (between columns) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/orange.svg"
                alt=""
                aria-hidden="true"
                className="hidden lg:block"
                style={{
                  position: 'absolute',
                  right: '-28px',
                  top: '55%',
                  transform: 'translateY(-50%) rotate(90deg)',
                  width: '48px',
                  height: '48px',
                  zIndex: 20,
                }}
              />

              {/* Orange diamond — pointing down (below browser) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/orange.svg"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '52px',
                  height: '52px',
                  zIndex: 10,
                }}
              />

            </div>

            {/* Right — purple card + stat chips + CTA */}
            <div className="flex flex-col gap-4">
              {/* Purple card */}
              <div
                className="rounded-2xl p-8"
                style={{ background: 'radial-gradient(ellipse 75% 65% at 80% 80%, #7B4BFF 0%, transparent 60%), radial-gradient(ellipse 65% 70% at 20% 20%, #3d1fa0 0%, transparent 65%), #5530cc' }}
              >
                <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                  Everything teachers need.
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Built around the realities of Australian classrooms.
                </p>
              </div>

              {/* Stat chips — each with a distinct brand-colour border */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '15+',  label: 'Years building the national curriculum', borderClass: 'border-brand-teal' },
                  { value: '2016', label: 'ACCE/ACS Educator of the year',           borderClass: 'border-brand-orange' },
                  { value: 'v9.0', label: 'AC-Digital Technologies aligned',         borderClass: 'border-brand-purple' },
                ].map(({ value, label, borderClass }) => (
                  <div key={label} className={`bg-white border-2 ${borderClass} rounded-xl p-4`}>
                    <p className="text-2xl font-bold text-[#37352f] mb-1 tracking-tight">{value}</p>
                    <p className="text-xs text-[#787671] leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <button className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold rounded-lg transition-colors duration-150 flex items-center gap-2">
                  Join the Pilot <span aria-hidden="true">✈️</span>
                </button>
              </div>
            </div>

          </div>

          {/* "The Platform" section label — intentionally below the 2-col grid */}
          <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-8">
            The Platform
          </p>

          {/* Feature cards — no icons, matches design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#e5e3df] rounded-2xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-base font-bold text-[#37352f] mb-3 leading-tight">{title}</h3>
                <p className="text-sm text-[#5d5b54] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          AUTHORITY  (unchanged)
      ══════════════════════════════════════════════════ */}
      <section id="technologies" className="py-24 px-6 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — credential card + teacher photo */}
            <div className="relative">
              <div className="absolute -top-8 -right-6 w-32 h-40 rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10 hidden lg:block">
                <Image src="/students/teacher.png" alt="Teacher" fill className="object-cover object-top" />
              </div>
              <div className="bg-[#141312] rounded-2xl p-10">
                <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-6">
                  Curriculum Authority
                </p>
                <h3 className="text-3xl font-bold text-white mb-1">Bruce Fuda</h3>
                <p className="text-white/60 text-sm mb-8">
                  Author, Australian Curriculum: Digital Technologies
                </p>
                <div className="inline-flex items-center gap-3 bg-orange-500/15 border border-orange-500/25 rounded-xl px-4 py-3 mb-8">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                    <Award className="size-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-orange-400">2016 ACCE/ACS Award</p>
                    <p className="text-xs text-white/60">ICT Educator of the Year</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["ACTDIK023", "ACTDIP026", "ACTDIK034", "ACTDIP036"].map((code) => (
                    <span key={code} className="font-mono text-xs font-medium bg-white/10 text-white/60 px-2 py-0.5 rounded border border-white/20">
                      {code}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -right-4 bg-white border border-[#e5e3df] rounded-xl px-5 py-4 shadow-lg">
                <p className="text-sm font-semibold text-[#37352f] mb-0.5">Courtney Weaver</p>
                <p className="text-xs text-[#787671]">Former Head of Education, Grok Academy</p>
                <p className="text-xs text-[#a4a097]">VP of ECAWA · ATAR Exam Writer</p>
              </div>
            </div>

            {/* Right — curriculum checklist */}
            <div>
              <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-4">
                Digital Technologies
              </p>
              <h2 className="text-4xl font-bold text-[#37352f] tracking-tight mb-6">
                The complete curriculum.<br />Built from the source.
              </h2>
              <p className="text-[#5d5b54] mb-8 leading-relaxed">
                Shard Learning isn&apos;t adapted from overseas materials or mapped to the curriculum after the fact. Every content description, every strand, every proficiency level — authored by the same team who wrote the national standard.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Aligned to AC: DT v9.0 content descriptions",
                  "Year 7–10 scope and sequence, complete",
                  "Formative assessment built into every lesson",
                  "Print-ready teacher guides included",
                  "Offline-capable student activities",
                  "School administration dashboard",
                ].map((check) => (
                  <div key={check} className="flex items-center gap-3">
                    <CheckCircle className="size-4 text-orange-500 shrink-0" />
                    <span className="text-sm text-[#37352f]">{check}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 transition-colors duration-150"
              >
                Join the Pilot
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MISSION  (unchanged)
      ══════════════════════════════════════════════════ */}
      <section id="mission" className="py-24 px-6 bg-[#F8F7F5]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-4">
            Mission
          </p>
          <h2 className="text-4xl font-bold text-[#37352f] tracking-tight mb-6">
            Quality education should be accessible, interactive, and
            curriculum-aligned.
          </h2>
          <p className="text-lg text-[#37352f] max-w-2xl mx-auto leading-relaxed">
            Shard Foundry empowers teachers with tools to deliver engaging
            digital literacy education that meets national standards while
            respecting classroom realities.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM  (unchanged)
      ══════════════════════════════════════════════════ */}
      <section id="team" className="py-24 px-6 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-3">
              Founding Team &amp; Partners
            </p>
            <h2 className="text-4xl font-bold text-[#37352f] tracking-tight">
              Built by educators.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {team.map(({ initials, name, role, bio }) => (
              <div
                key={name}
                className="bg-white border border-[#e5e3df] rounded-xl p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-[#f6f5f4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-semibold text-[#5d5b54]">{initials}</span>
                </div>
                <h3 className="font-semibold text-[#37352f] mb-1">{name}</h3>
                <span className="inline-flex text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full mb-4">
                  {role}
                </span>
                <p className="text-sm text-[#5d5b54] leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
          <div className="max-w-md mx-auto p-8 border border-[#e5e3df] rounded-xl bg-white text-center shadow-sm">
            <div className="w-32 h-10 bg-[#f6f5f4] rounded mx-auto mb-4" />
            <p className="text-[#5d5b54] text-sm mb-4">
              Strategic partner in Australian educational innovation.
            </p>
            <a
              href="#"
              className="text-[#2BC6B2] hover:text-[#22a899] font-medium text-sm transition-colors duration-150"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CONTACT  (unchanged)
      ══════════════════════════════════════════════════ */}
      <section id="schools" className="py-24 px-6 bg-white border-t border-[#E8E6E1]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-3">
              For Schools
            </p>
            <h2 className="text-4xl font-bold text-[#37352f] tracking-tight mb-4">
              Get in touch.
            </h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="d-name">Name</Label>
                <Input id="d-name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="d-email">Email</Label>
                <Input id="d-email" type="email" placeholder="you@school.edu.au" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="d-school">School or Organisation</Label>
              <Input id="d-school" placeholder="Your school" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="d-message">Message</Label>
              <Textarea id="d-message" placeholder="Tell us about your school..." rows={5} />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-150"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER  (unchanged)
      ══════════════════════════════════════════════════ */}
      <footer className="bg-[#141312] text-[#A9A69F] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Shard Learning" width={18} height={18} />
            <span>&copy; 2026 Shard Learning. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white transition-colors duration-150"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
