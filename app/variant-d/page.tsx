'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  LayoutDashboard,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Award,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curriculum-Aligned Content",
    desc: "Every unit mapped to Australian Curriculum: Digital Technologies content descriptions. Written by the curriculum's own author.",
  },
  {
    icon: LayoutDashboard,
    title: "Teacher Dashboards",
    desc: "Track class and individual progress at a glance. Intervene early. Spend less time on admin, more time teaching.",
  },
  {
    icon: Users,
    title: "Interactive Lessons",
    desc: "Structured activities that Year 7–8 students actually engage with. Designed for real Australian classroom conditions.",
  },
  {
    icon: Sparkles,
    title: "Assessment-Ready",
    desc: "Formative check-ins and summative tasks aligned to proficiency levels. Reporting made simple.",
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

export default function VariantD() {
  const [isOverDark, setIsOverDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOverDark(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F5]">
      {/* Navigation — floating purple pill */}
      <nav className="fixed top-0 w-full z-50 flex justify-center px-6 pt-4">
        <div className="w-full max-w-7xl rounded-2xl border border-white/10 backdrop-blur-xl px-6 py-2 grid grid-cols-3 items-center" style={{background:'rgba(123,75,255,0.88)', boxShadow:'0 8px 32px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.08)'}}>
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Shard Learning" width={36} height={36} />
          </div>
          <div className="flex items-center justify-center">
            <span className="font-semibold text-white text-lg">Shard Learning</span>
          </div>
          <div className="flex items-center justify-end gap-3">
            <a href="#schools" className="px-4 py-1.5 text-sm font-semibold bg-[#FF7A1F] hover:bg-[#e56b17] text-white rounded-lg transition-colors">For Schools</a>
            <button className="px-4 py-1.5 text-sm text-white/80 border border-white/30 rounded-lg hover:border-white/60 transition-colors">Sign In</button>
          </div>
        </div>
      </nav>

      {/* FAB — Get in Contact */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
        <button className="w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
        <div className={`backdrop-blur-md rounded-xl px-4 py-3 shadow-xl text-center border transition-all duration-500 ${
          isOverDark
            ? 'bg-white/10 border-white/15'
            : 'bg-gray-900/60 border-white/10'
        }`}>
          <p className="text-white text-sm font-medium leading-none">Get in contact</p>
          <p className="text-white/50 text-xs mt-1">We&apos;d love to hear from you</p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full" style={{height:'100vh', background:'radial-gradient(ellipse 120% 80% at 50% 0%, #ffffff 0%, #F0EEE9 100%)'}}>
        <div className="relative z-10 w-full h-full flex items-stretch justify-center px-6 pt-20 pb-6">
          <div className="w-full max-w-7xl grid gap-1.5" style={{gridTemplateColumns:'60% 40%', gridTemplateRows:'3fr 2fr'}}>

            {/* Left — full height, heading + tagline + CTAs */}
            <div className="row-span-2 flex flex-col justify-center p-10">
              <h1 className="text-7xl font-bold text-[#141312] leading-none mb-8">
                Every student,<br />genuinely engaged.
              </h1>
              <p className="text-xl text-[#FF7A1F] font-normal leading-relaxed mb-10 max-w-sm">
                Curriculum-aligned experiences designed by teachers, for teachers.
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-[#FF7A1F] hover:bg-[#e56b17] text-white font-semibold rounded-lg transition-colors duration-150">
                  Join the Pilot
                </button>
                <button className="px-6 py-3 border border-[#D1CFC9] hover:border-[#787671] text-[#45423D] rounded-lg transition-colors duration-150">
                  See the Platform
                </button>
              </div>
            </div>

            {/* Top-right — SVG diamonds behind each person */}
            <div className="rounded-2xl border border-black/[0.06] overflow-hidden bg-white" style={{position:'relative'}}>
              <div style={{position:'absolute', inset:0, display:'flex'}}>
                {[
                  { person:'/students/student-1.png', diamond:'/purple.svg' },
                  { person:'/students/teacher.png',   diamond:'/orange.svg' },
                  { person:'/students/student-4.png', diamond:'/teal.svg'   },
                ].map(({ person, diamond }, i) => (
                  <div key={i} style={{flex:1, position:'relative', overflow:'hidden'}}>
                    {/* Diamond SVG — upper body level */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={diamond} alt="" style={{position:'absolute', top:'5%', left:'50%', width:'90%', transform:'translateX(-50%)', zIndex:0}} />
                    {/* Person — full height, bottom anchored, on top */}
                    <Image src={person} alt="" fill className="object-contain object-bottom" style={{zIndex:1}} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom-right — credentials */}
            <div className="overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-end p-10" style={{background:'radial-gradient(ellipse 75% 65% at 80% 80%, #7B4BFF 0%, transparent 60%), radial-gradient(ellipse 65% 70% at 20% 20%, #3d1fa0 0%, transparent 65%), #5530cc'}}>
              <p className="text-xs font-semibold text-[#FF7A1F] tracking-widest uppercase mb-3">Built by</p>
              <p className="text-3xl font-bold text-white leading-tight mb-1">Bruce Fuda</p>
              <p className="text-sm text-white/55 mb-6">Author of the Australian Curriculum:<br />Digital Technologies</p>
              <div className="inline-flex items-center gap-3 bg-[#FF7A1F]/12 border border-[#FF7A1F]/25 rounded-xl px-4 py-2.5 mb-5 w-fit">
                <Award className="size-4 text-[#FF7A1F] shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-[#FF7A1F]">2016 ACCE/ACS Award</p>
                  <p className="text-xs text-white/45">ICT Educator of the Year</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-xs font-medium bg-white/8 text-white/40 px-2 py-0.5 rounded border border-white/12">ACTDIK023</span>
                <span className="font-mono text-xs font-medium bg-white/8 text-white/40 px-2 py-0.5 rounded border border-white/12">ACTDIP026</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Credentials band ── */}
      <section className="py-12 px-6 bg-white border-b border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Years building the national curriculum" },
              { value: "Y7–10", label: "Complete scope & sequence" },
              { value: "v9.0", label: "AC: Digital Technologies aligned" },
              { value: "2016", label: "ACCE/ACS ICT Educator of the Year" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold text-[#37352f] mb-1 tracking-tight">{value}</p>
                <p className="text-sm text-[#787671] leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform ── */}
      <section id="platform" className="py-24 px-6 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-12">
            The Platform
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">

            {/* Left — dashboard in browser frame */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e5e3df]">
              {/* Browser chrome */}
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
              <Image
                src="/dashboard.png"
                alt="Teacher Dashboard"
                width={700}
                height={500}
                className="w-full"
              />
            </div>

            {/* Right — purple card + stats + CTA */}
            <div className="flex flex-col gap-4">
              {/* Purple card */}
              <div className="rounded-2xl p-8" style={{background:'radial-gradient(ellipse 75% 65% at 80% 80%, #7B4BFF 0%, transparent 60%), radial-gradient(ellipse 65% 70% at 20% 20%, #3d1fa0 0%, transparent 65%), #5530cc'}}>
                <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                  Everything teachers need.
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Built around the realities of Australian classrooms.
                </p>
              </div>

              {/* Stat chips */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value:'15+',  label:'Years building the national curriculum' },
                  { value:'2016', label:'ACCE/ACS Educator of the year' },
                  { value:'v9.0', label:'AC-Digital Technologies aligned' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white border border-[#e5e3df] rounded-xl p-4">
                    <p className="text-2xl font-bold text-[#37352f] mb-1 tracking-tight">{value}</p>
                    <p className="text-xs text-[#787671] leading-snug">{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-end">
                <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-150 flex items-center gap-2">
                  Join the Pilot <span aria-hidden>✈️</span>
                </button>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-[#e5e3df] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-orange-500 mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-base font-semibold text-[#37352f] mb-2">{title}</h3>
                <p className="text-sm text-[#5d5b54] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Authority ── */}
      <section id="technologies" className="py-24 px-6 bg-[#F8F7F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — credential card + teacher photo */}
            <div className="relative">
              {/* Teacher photo — floats top-right of card */}
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
              {/* Courtney overlay */}
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

      {/* ── Mission ── */}
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

      {/* ── Team ── */}
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
                  <span className="text-lg font-semibold text-[#5d5b54]">
                    {initials}
                  </span>
                </div>
                <h3 className="font-semibold text-[#37352f] mb-1">{name}</h3>
                <span className="inline-flex text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full mb-4">
                  {role}
                </span>
                <p className="text-sm text-[#5d5b54] leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>

          {/* Partner */}
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

      {/* ── Contact ── */}
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

      {/* ── Footer ── */}
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
