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
  Users,
  Sparkles,
  ArrowRight,
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

export default function VariantB() {
  return (
    <div className="min-h-screen bg-white">
      <Nav theme="light" />

      {/* ── Hero — white canvas, diamond right ── */}
      <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
        {/* Subtle gradient mesh behind diamond */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-bl from-[#7B4BFF]/8 via-[#141312]/5 to-transparent" />
        </div>

        {/* Diamond — right half */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <Diamond />
        </div>

        {/* Copy — left-aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full py-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-6">
              Australian Curriculum · Digital Technologies
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Teaching Digital
              <br />
              Technologies,
              <br />
              <span className="text-brand-orange">done right.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-md">
              Curriculum-aligned lessons, teacher dashboards, and assessment
              tools — built by the author of Australia&apos;s Digital
              Technologies curriculum.
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
                className="border-gray-300 text-gray-700 hover:border-gray-400 px-8 rounded-lg transition-colors duration-150"
              >
                See the Platform
                <ArrowRight className="size-4 ml-2" />
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Trusted by
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                {[
                  "Australian Schools",
                  "ACARA-Aligned",
                  "F-10 Curriculum",
                ].map((trust, i) => (
                  <span key={trust} className="flex items-center gap-2">
                    {i > 0 && <span className="text-gray-200">·</span>}
                    <span className="text-sm font-medium text-gray-500">
                      {trust}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Platform ── */}
      <section id="platform" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-3">
              The Platform
            </p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Everything teachers need.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built around the realities of Australian classrooms — not an
              imported American EdTech product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-brand-orange mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Technologies ── */}
      <section id="technologies" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-4">
            Digital Technologies
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
            The national curriculum, delivered.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital literacy curriculum aligned with the
            Australian Curriculum: Digital Technologies (AC: DT v9.0) — written
            by the people who authored the national standard.
          </p>
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg px-8 transition-colors duration-150"
          >
            Join the Pilot
          </Button>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-4">
            Mission
          </p>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-6">
            Quality education should be accessible, interactive, and
            curriculum-aligned.
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Shard Foundry empowers teachers with tools to deliver engaging
            digital literacy education that meets national standards while
            respecting classroom realities.
          </p>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-3">
              Founding Team &amp; Partners
            </p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
              Built by educators.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {team.map(({ initials, name, role, bio }) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-semibold text-gray-600">
                    {initials}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
                <span className="inline-flex text-xs font-semibold bg-orange-100 text-brand-orange-dark px-2.5 py-1 rounded-full mb-4">
                  {role}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>

          {/* Partner */}
          <div className="max-w-md mx-auto p-8 border border-gray-200 rounded-xl bg-white text-center shadow-sm">
            <div className="w-32 h-10 bg-gray-100 rounded mx-auto mb-4" />
            <p className="text-gray-600 text-sm mb-4">
              Strategic partner in Australian educational innovation.
            </p>
            <a
              href="#"
              className="text-[#7B4BFF] hover:text-[#9b6bff] font-medium text-sm transition-colors duration-150"
            >
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="schools" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-brand-orange tracking-widest uppercase mb-3">
              For Schools
            </p>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Get in touch.
            </h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="b-name">Name</Label>
                <Input id="b-name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="b-email">Email</Label>
                <Input
                  id="b-email"
                  type="email"
                  placeholder="you@school.edu.au"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="b-school">School or Organisation</Label>
              <Input id="b-school" placeholder="Your school" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="b-message">Message</Label>
              <Textarea
                id="b-message"
                placeholder="Tell us about your school..."
                rows={5}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg transition-colors duration-150"
            >
              Send Message
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
