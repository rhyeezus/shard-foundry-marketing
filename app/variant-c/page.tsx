import Image from "next/image";
import { Diamond } from "@/components/Diamond";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Nav } from "@/components/Nav";
import {
  BookOpen,
  LayoutDashboard,
  Globe,
  Award,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curriculum-Authored Content",
    desc: "Every lesson written by the author of the Australian Curriculum: Digital Technologies — not adapted from overseas materials. The real thing, made interactive.",
  },
  {
    icon: LayoutDashboard,
    title: "Teacher Visibility",
    desc: "Instant view of who's progressing, who needs help, and what to teach next. Designed around the teacher's daily workflow, not the platform's.",
  },
  {
    icon: Globe,
    title: "Australian Curriculum",
    desc: "Aligned to AC: DT v9.0 content descriptions. Year 7–10 scope and sequence, complete. Every strand, every proficiency level.",
  },
  {
    icon: Award,
    title: "Pedagogy-First Design",
    desc: "Lessons structured on proven pedagogical frameworks — not engagement tricks. Students learn deeply, teachers teach confidently.",
  },
  {
    icon: Users,
    title: "Classroom-Ready",
    desc: "Works on any device. Low-bandwidth tolerant. No student account creation. Live in 5 minutes. Built for Australian school ICT realities.",
  },
  {
    icon: Shield,
    title: "School-Safe & Compliant",
    desc: "Designed with student privacy and Australian school data governance requirements baked in from day one — not bolted on later.",
  },
];

const team = [
  {
    initials: "JM",
    name: "James Mitchell",
    role: "Co-Founder & Curriculum Lead",
    credential: "Author, AC: Digital Technologies",
    bio: "Lead author of the Australian Curriculum: Digital Technologies. Spent 15 years developing national educational standards and training teachers across Australia.",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Co-Founder & Product",
    credential: "Former Secondary DT Teacher",
    bio: "Taught Digital Technologies in secondary schools for 8 years before moving into product design. Built and shipped two EdTech tools used in Australian classrooms.",
  },
  {
    initials: "AB",
    name: "Alex Brown",
    role: "Co-Founder & Engineering",
    credential: "500k+ Student Deployments",
    bio: "Built EdTech platforms serving over 500,000 students. Specialises in accessible, school-safe, low-bandwidth web applications.",
  },
];

const curriculumStrands = [
  "Year 7 — Data & Information",
  "Year 7 — Digital Systems",
  "Year 8 — Creating Digital Solutions",
  "Year 8 — Processes & Production Skills",
  "Year 9 — Computational Thinking",
  "Year 10 — Advanced Digital Projects",
];

export default function VariantC() {
  return (
    <div className="min-h-screen bg-white">
      <Nav theme="light" />

      {/* ── Hero — atmospheric gradient mesh, diamond floating ── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Gradient mesh — upper two-thirds */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-br from-[#162550] via-[#1e3a6e] to-[#6080ff]/25" />
          <div className="absolute top-0 right-0 w-2/5 h-[65%] bg-gradient-to-bl from-[#6080ff]/35 to-transparent" />
          <div className="absolute top-0 left-0 w-2/5 h-[65%] bg-gradient-to-br from-[#162550]/80 to-transparent" />
        </div>

        {/* Diamond in the gradient */}
        <div className="absolute inset-0 w-full h-full">
          <Diamond />
        </div>

        {/* Hero copy — centred */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-36 max-w-5xl mx-auto w-full flex-1">
          <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-6">
            Australian Curriculum · Digital Technologies
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white leading-snug mb-6 max-w-3xl">
            Quality Digital Technologies education, finally made for Australian
            classrooms.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
            Built by the author of the national curriculum. Designed by teachers
            who&apos;ve been in the room. Ready for your school in 2027.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white px-8 rounded-lg transition-colors duration-150"
            >
              Apply for the Pilot
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 rounded-lg transition-colors duration-150"
            >
              See the Platform
            </Button>
          </div>
        </div>

        {/* Gradient fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </section>

      {/* ── Credentials band ── */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {[
              "Author of AC: Digital Technologies",
              "ACARA-Aligned",
              "Year 7–10 Complete",
              "Australian-Built",
              "Privacy-First Design",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <CheckCircle className="size-4 text-orange-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform — 2-column icons + prose ── */}
      <section id="platform" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-3">
              The Platform
            </p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Built for how teachers actually work.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Not a content dump. Not a quiz machine. A complete professional
              teaching platform — designed with Australian classroom realities
              at the centre.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Icon className="size-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Technologies ── */}
      <section id="technologies" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-4">
                Digital Technologies
              </p>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                The complete curriculum. Authoritatively delivered.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Shard Learning is built directly from the Australian Curriculum:
                Digital Technologies. Every content description, every strand,
                every proficiency level — authored by the people who wrote the
                national standard.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                No interpretation. No adaptation from foreign curricula. The
                real thing, made interactive.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 transition-colors duration-150"
              >
                Join the Pilot
              </Button>
            </div>
            <div className="bg-[#162550] rounded-2xl p-8">
              <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-6">
                Curriculum Coverage
              </p>
              <div className="space-y-3">
                {curriculumStrands.map((strand, i) => (
                  <div key={strand} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/15 border border-orange-500/25 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-xs font-mono text-orange-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-sm text-white/80">{strand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission — navy CTA band ── */}
      <section id="mission" className="py-24 px-6 bg-[#162550]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
            Our Mission
          </p>
          <h2 className="text-4xl font-semibold text-white leading-tight mb-6">
            Every Australian student is entitled to a quality Digital
            Technologies education.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
            The curriculum is mandated. Confident delivery is not. We&apos;re
            here to change that — by putting curriculum expertise in every
            teacher&apos;s hands, and genuine learning in every
            student&apos;s experience.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-8 transition-colors duration-150"
          >
            Apply for the Pilot
          </Button>
        </div>
      </section>

      {/* ── Team — credentials prominent ── */}
      <section id="team" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-3">
              Founding Team
            </p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Who&apos;s behind Shard Learning?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re not a startup that discovered EdTech. We&apos;re
              educators who built the curriculum, taught the classes, and
              decided to build the tools they wished existed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(({ initials, name, role, credential, bio }) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-base font-semibold text-gray-600">
                      {initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{name}</h3>
                    <span className="inline-flex text-xs font-semibold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                      {role}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 mb-4">
                  <CheckCircle className="size-3.5 text-orange-500 shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">
                    {credential}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>

          {/* Partner */}
          <div className="max-w-md mx-auto mt-12 p-8 bg-gradient-to-br from-[#162550]/5 to-[#6080ff]/8 border border-gray-200 rounded-xl text-center">
            <div className="w-32 h-10 bg-gray-200/60 rounded mx-auto mb-4" />
            <p className="text-sm text-gray-600 mb-4">
              Strategic partner in Australian educational innovation.
            </p>
            <a
              href="#"
              className="text-[#6080ff] hover:text-[#7b96ff] font-medium text-sm transition-colors duration-150"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="schools" className="py-24 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-3">
              For Schools
            </p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Bring Shard Learning to your school.
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We&apos;re running a focused pilot with Australian schools in
              early 2027. Tell us about your school and we&apos;ll be in touch.
            </p>
          </div>
          <form className="space-y-6 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="c-name">Name</Label>
                <Input id="c-name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-email">Email</Label>
                <Input
                  id="c-email"
                  type="email"
                  placeholder="you@school.edu.au"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="c-school">School or Organisation</Label>
              <Input id="c-school" placeholder="Your school" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="c-message">Message</Label>
              <Textarea
                id="c-message"
                placeholder="Tell us about your school and what you're looking for..."
                rows={5}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-150"
            >
              Apply for the Pilot
            </Button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
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
