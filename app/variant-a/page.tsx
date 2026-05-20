import Image from "next/image";
import { Diamond } from "@/components/Diamond";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import {
  BookOpen,
  LayoutDashboard,
  Users,
  Monitor,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curriculum-Authored Content",
    desc: "Every lesson written by the author of the Australian Curriculum: Digital Technologies. No third-party adaptations, no overseas content re-skinned.",
  },
  {
    icon: LayoutDashboard,
    title: "Teacher Command Centre",
    desc: "Real-time class progress, individual student data, and instant intervention signals — all in one purposefully designed view.",
  },
  {
    icon: Users,
    title: "Active Learning Loops",
    desc: "Structured activities that keep Year 7–10 students engaged through doing, not passive consumption.",
  },
  {
    icon: Monitor,
    title: "School-Ready Infrastructure",
    desc: "Works with existing login systems. No new student accounts. Deploys in minutes. Offline-capable activities.",
  },
];

const platformChecks = [
  "Aligned to AC: DT v9.0 content descriptions",
  "Year 7–10 scope and sequence, complete",
  "Formative assessment built into every lesson",
  "Print-ready teacher guides included",
  "Offline-capable student activities",
  "School administration dashboard",
];

const team = [
  {
    initials: "JM",
    name: "James Mitchell",
    role: "Co-Founder & Curriculum Lead",
    bio: "Lead author of the Australian Curriculum: Digital Technologies. 15 years developing national educational standards and training teachers across Australia.",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Co-Founder & Product",
    bio: "Former secondary Digital Technologies teacher. Product designer with a classroom-first philosophy — no feature ships that a busy teacher won't use.",
  },
  {
    initials: "AB",
    name: "Alex Brown",
    role: "Co-Founder & Engineering",
    bio: "Built EdTech platforms serving 500,000+ students. Specialist in school-safe, accessible, low-bandwidth web applications.",
  },
];

export default function VariantA() {
  return (
    <div className="min-h-screen bg-[#141312] text-white">
      <Nav theme="dark" />

      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-[#141312] overflow-hidden flex items-center">
        {/* Subtle purple glow behind diamond */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-brand-purple/20 via-transparent to-transparent" />
        </div>

        {/* Diamond — right half only */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Diamond />
        </div>

        {/* Copy — left-aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-6">
              Built by the author of the Australian Curriculum: Digital Technologies
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
              The curriculum platform
              <br />
              built from the source.
            </h1>
            <p className="text-xl text-white/60 max-w-md mb-10 leading-relaxed">
              Every lesson. Every standard. Every assessment marker. Written by
              the people who wrote the curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-dark active:bg-brand-orange-dark text-white px-8 rounded-lg transition-colors duration-150"
              >
                Join the Pilot
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:border-white/60 text-white hover:bg-white/10 hover:text-white px-8 rounded-lg transition-colors duration-150"
              >
                See the Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Platform ── */}
      <section id="platform" className="py-24 px-6 bg-[#141312]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
              The Platform
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Designed for the classroom.
              <br />
              Built for teachers.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              Not a content library. Not a quiz engine. A complete teaching
              platform — from curriculum map to class report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors duration-200"
              >
                <div className="text-brand-orange mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Technologies ── */}
      <section id="technologies" className="py-24 px-6 bg-[#2d1066]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
                Digital Technologies
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                The full curriculum.
                <br />
                Nothing added. Nothing missing.
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                Shard Learning covers the Australian Curriculum: Digital
                Technologies from Year 7 to Year 10 — every content
                description, every strand, every proficiency level.
              </p>
              <Button
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg transition-colors duration-150"
              >
                Join the Pilot
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-3">
              {platformChecks.map((check) => (
                <div
                  key={check}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  <CheckCircle className="size-4 text-brand-orange shrink-0" />
                  <span className="text-sm text-white/80">{check}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission" className="py-24 px-6 bg-[#141312]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
            Our Mission
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Every Australian student deserves a qualified Digital Technologies
            education.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            The Digital Technologies curriculum is mandatory. Quality delivery
            is not. Shard Foundry exists to close that gap — giving every
            teacher the tools to deliver the curriculum with confidence, and
            every student the education they&apos;re entitled to.
          </p>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 px-6 bg-[#2d1066]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
              Founding Team
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Built by educators, for educators.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(({ initials, name, role, bio }) => (
              <div
                key={name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">
                    {initials}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-1">{name}</h3>
                <span className="inline-flex text-xs font-semibold bg-orange-100 text-brand-orange-dark px-2.5 py-1 rounded-full mb-4">
                  {role}
                </span>
                <p className="text-sm text-white/60 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="schools" className="py-24 px-6 bg-[#141312]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
              For Schools
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Start the conversation.
            </h2>
            <p className="text-white/60">
              Pilot applications are now open. Limited cohort for Term 1, 2027.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="a-name"
                  className="text-sm font-medium text-white/80"
                >
                  Name
                </label>
                <input
                  id="a-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-150"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="a-email"
                  className="text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  id="a-email"
                  type="email"
                  placeholder="you@school.edu.au"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-150"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="a-school"
                className="text-sm font-medium text-white/80"
              >
                School or Organisation
              </label>
              <input
                id="a-school"
                type="text"
                placeholder="Your school"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-orange transition-colors duration-150"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="a-message"
                className="text-sm font-medium text-white/80"
              >
                Message
              </label>
              <textarea
                id="a-message"
                rows={5}
                placeholder="Tell us about your school and what you're looking for..."
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-orange resize-none transition-colors duration-150"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-brand-orange hover:bg-brand-orange-dark active:bg-brand-orange-dark text-white rounded-lg transition-colors duration-150"
            >
              Apply for the Pilot
            </Button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0d0b10] border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Shard Learning" width={18} height={18} />
            <span className="text-white/40">
              &copy; 2026 Shard Learning. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 hover:text-white transition-colors duration-150"
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
