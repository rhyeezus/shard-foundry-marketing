"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Loader2,
} from "lucide-react";

/* ── Section nav ── */
const navItems = [
  { id: "colours", label: "Colours" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "buttons", label: "Buttons" },
  { id: "badges", label: "Badges" },
  { id: "cards", label: "Cards" },
  { id: "forms", label: "Forms" },
  { id: "navigation", label: "Navigation" },
  { id: "feedback", label: "Feedback" },
  { id: "shard", label: "Shard" },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16 border-b border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ── Colour swatch ── */
function Swatch({
  hex,
  name,
  small,
}: {
  hex: string;
  name: string;
  small?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={`rounded-lg border border-black/5 ${small ? "w-10 h-10" : "w-20 h-14"}`}
        style={{ backgroundColor: hex }}
      />
      {!small && (
        <>
          <p className="text-xs font-semibold text-gray-900">{name}</p>
          <p className="text-xs font-mono text-gray-400">{hex}</p>
        </>
      )}
      {small && (
        <p className="text-xs font-mono text-gray-400 text-center">{name}</p>
      )}
    </div>
  );
}

export default function DesignSystem() {
  const [active, setActive] = useState("colours");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.svg"
              alt="Shard Learning"
              width={18}
              height={18}
            />
            <span className="font-semibold text-sm text-gray-900">
              Shard Learning
            </span>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <span className="text-xs text-gray-400">Design System</span>
            <span className="font-mono text-xs bg-gray-100 border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded">
              v0.1
            </span>
          </div>
          <nav className="flex items-center gap-1 overflow-x-auto flex-1">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`shrink-0 px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-150 ${
                  active === id
                    ? "bg-orange-500 text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {/* ═══════════════════════════════════════════════
            COLOURS
        ═══════════════════════════════════════════════ */}
        <Section id="colours" title="Foundations: Colour">
          <Group title="Brand Palette">
            <div className="flex flex-wrap gap-5">
              {[
                { hex: "#f97316", name: "Orange 500" },
                { hex: "#ea580c", name: "Orange 600" },
                { hex: "#ffedd5", name: "Orange 100" },
                { hex: "#162550", name: "Navy" },
                { hex: "#1e3a6e", name: "Navy Mid" },
                { hex: "#0a1535", name: "Navy Ambient" },
                { hex: "#6080ff", name: "Blue" },
                { hex: "#7b96ff", name: "Blue Hover" },
              ].map((s) => (
                <Swatch key={s.hex} {...s} />
              ))}
            </div>
          </Group>

          <Group title="Neutral Palette">
            <div className="flex flex-wrap gap-5">
              {[
                { hex: "#111827", name: "Gray 900" },
                { hex: "#374151", name: "Gray 700" },
                { hex: "#4b5563", name: "Gray 600" },
                { hex: "#9ca3af", name: "Gray 400" },
                { hex: "#d1d5db", name: "Gray 300" },
                { hex: "#f3f4f6", name: "Gray 100" },
                { hex: "#f9fafb", name: "Gray 50" },
                { hex: "#ffffff", name: "White" },
              ].map((s) => (
                <Swatch key={s.hex} {...s} />
              ))}
            </div>
          </Group>

          <Group title="Semantic Palette">
            <div className="flex flex-wrap gap-5">
              {[
                { hex: "#22c55e", name: "Success" },
                { hex: "#dcfce7", name: "Success Tint" },
                { hex: "#fbbf24", name: "Warning" },
                { hex: "#fef3c7", name: "Warning Tint" },
                { hex: "#ef4444", name: "Error" },
                { hex: "#fee2e2", name: "Error Tint" },
              ].map((s) => (
                <Swatch key={s.hex} {...s} />
              ))}
            </div>
          </Group>

          <Group title="Orange Scale — 50 → 950">
            <div className="flex gap-1.5 flex-wrap">
              {[
                ["50", "#fff7ed"],
                ["100", "#ffedd5"],
                ["200", "#fed7aa"],
                ["300", "#fdba74"],
                ["400", "#fb923c"],
                ["500", "#f97316"],
                ["600", "#ea580c"],
                ["700", "#c2410c"],
                ["800", "#9a3412"],
                ["900", "#7c2d12"],
                ["950", "#431407"],
              ].map(([stop, hex]) => (
                <div key={stop} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-12 rounded border border-black/5"
                    style={{ backgroundColor: hex }}
                  />
                  <p className="text-xs font-mono text-gray-400">{stop}</p>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Navy Scale — 50 → 950">
            <div className="flex gap-1.5 flex-wrap">
              {[
                ["50", "#e8ecf4"],
                ["100", "#c8d2e5"],
                ["200", "#a3b3d3"],
                ["300", "#7590be"],
                ["400", "#4c6fa8"],
                ["500", "#1e3a6e"],
                ["600", "#162550"],
                ["700", "#112040"],
                ["800", "#0d1933"],
                ["900", "#0a1526"],
                ["950", "#0a1535"],
              ].map(([stop, hex]) => (
                <div key={stop} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-12 rounded border border-black/5"
                    style={{ backgroundColor: hex }}
                  />
                  <p className="text-xs font-mono text-gray-400">{stop}</p>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Surfaces — Light vs Dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-xl">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Light Mode
                </p>
                {[
                  ["#ffffff", "Background"],
                  ["#f9fafb", "Gray 50"],
                  ["#f3f4f6", "Gray 100"],
                ].map(([bg, label]) => (
                  <div
                    key={bg}
                    className="h-9 rounded border border-gray-200 flex items-center px-3 mb-2"
                    style={{ backgroundColor: bg }}
                  >
                    <span className="text-sm text-gray-700">
                      {label} {bg}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-[#162550] border border-white/10 rounded-xl">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
                  Dark Mode
                </p>
                {[
                  ["#162550", "Navy"],
                  ["#1e3a6e", "Navy Mid"],
                  ["#0a1535", "Ambient"],
                ].map(([bg, label]) => (
                  <div
                    key={bg}
                    className="h-9 rounded border border-white/15 flex items-center px-3 mb-2"
                    style={{ backgroundColor: bg }}
                  >
                    <span className="text-sm text-white/80">
                      {label} {bg}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            TYPOGRAPHY
        ═══════════════════════════════════════════════ */}
        <Section id="typography" title="Foundations: Typography">
          <Group title="Geist Sans — Type Scale">
            <div className="divide-y divide-gray-100">
              {[
                {
                  name: "Display XL",
                  cls: "text-5xl font-bold",
                  spec: "48px · 700 · lh 1.1",
                  sample: "Quality education for all.",
                },
                {
                  name: "Display L",
                  cls: "text-4xl font-bold",
                  spec: "36px · 700 · lh 1.15",
                  sample: "Quality education for all.",
                },
                {
                  name: "Display M",
                  cls: "text-3xl font-semibold",
                  spec: "30px · 600 · lh 1.2",
                  sample: "Quality education for all.",
                },
                {
                  name: "Heading",
                  cls: "text-2xl font-semibold",
                  spec: "24px · 600 · lh 1.3",
                  sample: "Quality education for all.",
                },
                {
                  name: "Subheading",
                  cls: "text-xl font-medium",
                  spec: "20px · 500 · lh 1.4",
                  sample: "Quality education for all.",
                },
                {
                  name: "Body L",
                  cls: "text-base",
                  spec: "16px · 400 · lh 1.6",
                  sample:
                    "Shard Learning is interactive, pedagogy-first education for Australian schools. Built by the author of the national curriculum.",
                },
                {
                  name: "Body M",
                  cls: "text-sm",
                  spec: "14px · 400 · lh 1.5",
                  sample:
                    "Shard Learning is interactive, pedagogy-first education for Australian schools. Built by the author of the national curriculum.",
                },
                {
                  name: "Caption",
                  cls: "text-xs",
                  spec: "12px · 400 · lh 1.4",
                  sample: "Last updated · 3 minutes ago · ACTDIK023",
                },
                {
                  name: "Caption Bold",
                  cls: "text-xs font-semibold",
                  spec: "12px · 600 · lh 1.4",
                  sample: "Teacher · Student · Curriculum",
                },
              ].map(({ name, cls, spec, sample }) => (
                <div
                  key={name}
                  className="grid grid-cols-[160px_1fr_160px] gap-4 items-start py-5"
                >
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      {name}
                    </p>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">
                      {spec}
                    </p>
                  </div>
                  <p className={`${cls} text-gray-900 leading-snug`}>
                    {sample}
                  </p>
                  <div />
                </div>
              ))}
            </div>
          </Group>

          <Group title="Geist Mono — Code &amp; Curriculum Codes">
            <div className="space-y-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <p className="font-mono text-sm text-gray-700">
                ACTDIK023 — analyse and visualise data to create information
              </p>
              <p className="font-mono text-sm text-gray-700">
                ACTDIP019 — define and decompose real-world problems
              </p>
              <p className="font-mono text-xs text-gray-600 border-t border-gray-200 pt-4 mt-4">
                const curriculum = &apos;Digital Technologies&apos;;
              </p>
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            SPACING
        ═══════════════════════════════════════════════ */}
        <Section id="spacing" title="Foundations: Spacing">
          <Group title="4px Grid — Key Landmarks">
            <div className="space-y-3">
              {[
                ["p-1 / space-1", "4px"],
                ["p-2 / space-2", "8px"],
                ["p-3 / space-3", "12px"],
                ["p-4 / space-4", "16px"],
                ["p-5 / space-5", "20px"],
                ["p-6 / space-6", "24px"],
                ["p-8 / space-8", "32px"],
                ["p-10 / space-10", "40px"],
                ["p-12 / space-12", "48px"],
                ["p-16 / space-16", "64px"],
                ["p-20 / space-20", "80px"],
                ["p-24 / space-24", "96px"],
              ].map(([token, px]) => (
                <div key={token} className="flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-400 w-36 shrink-0">
                    {token}
                  </span>
                  <div
                    className="bg-orange-400/70 h-4 rounded shrink-0"
                    style={{ width: px }}
                  />
                  <span className="text-xs text-gray-500">{px}</span>
                </div>
              ))}
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            BUTTONS
        ═══════════════════════════════════════════════ */}
        <Section id="buttons" title="Components: Buttons">
          <Group title="All Variants — on White">
            <div className="flex flex-wrap gap-3 p-6 bg-white border border-gray-200 rounded-xl">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </Group>

          <Group title="All Variants — on Navy">
            <div className="flex flex-wrap gap-3 p-6 bg-[#162550] rounded-xl">
              <Button>Primary (orange)</Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Ghost on dark
              </Button>
              <Button className="bg-white text-[#162550] hover:bg-gray-100 hover:text-[#162550]">
                White CTA
              </Button>
            </div>
          </Group>

          <Group title="Sizes">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </Group>

          <Group title="States">
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button className="bg-orange-600">Hover / Active</Button>
              <Button disabled>Disabled</Button>
              <Button>
                <Loader2 className="size-4 animate-spin" />
                Loading
              </Button>
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            BADGES
        ═══════════════════════════════════════════════ */}
        <Section id="badges" title="Components: Badges">
          <Group title="shadcn Variants">
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Group>

          <Group title="Shard-Specific">
            <div className="flex flex-wrap gap-3 items-center">
              {/* Teacher badge */}
              <span className="inline-flex items-center text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
                Teacher
              </span>
              {/* Student badge */}
              <span className="inline-flex items-center text-xs font-semibold bg-[rgba(96,128,255,0.1)] text-[#6080ff] px-2.5 py-1 rounded-full">
                Student
              </span>
              {/* Curriculum code chips */}
              {["ACTDIK023", "ACTDIP016", "ACTDIP019"].map((code) => (
                <span
                  key={code}
                  className="font-mono text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200"
                >
                  {code}
                </span>
              ))}
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            CARDS
        ═══════════════════════════════════════════════ */}
        <Section id="cards" title="Components: Cards">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-orange-500 mb-3">
                <BookOpen className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Standard Card
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                White bg · gray-200 border · shadow-sm · shadow-md on hover.
              </p>
            </div>

            {/* Feature card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="text-orange-500 mb-3">
                <GraduationCap className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Feature Card
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lucide icon orange-500 · semibold title gray-900 · body
                gray-600.
              </p>
            </div>

            {/* Navy surface card */}
            <div className="bg-[#162550] border border-white/20 rounded-xl p-6">
              <div className="text-orange-400 mb-3">
                <LayoutDashboard className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Navy Surface Card
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                bg white/10 · border white/20. Used on navy section
                backgrounds.
              </p>
            </div>

            {/* Team member card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarFallback className="bg-gray-100 text-gray-600 text-lg font-semibold">
                  JM
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-gray-900 mb-1">
                James Mitchell
              </h3>
              <span className="inline-flex text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full mb-3">
                Co-Founder
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Author of the Australian Curriculum: Digital Technologies.
              </p>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            FORMS
        ═══════════════════════════════════════════════ */}
        <Section id="forms" title="Components: Form Elements">
          <div className="max-w-lg space-y-6">
            <div className="space-y-2">
              <Label htmlFor="ds-name">Name (default)</Label>
              <Input id="ds-name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ds-email">Email (default)</Label>
              <Input
                id="ds-email"
                type="email"
                placeholder="you@school.edu.au"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ds-error">School (error state)</Label>
              <Input
                id="ds-error"
                placeholder="Your school"
                aria-invalid
                className="border-red-400 focus-visible:ring-red-400/30"
              />
              <p className="text-xs text-red-500">
                Please enter your school name.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ds-disabled">Disabled</Label>
              <Input id="ds-disabled" placeholder="Disabled field" disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ds-textarea">Message</Label>
              <Textarea
                id="ds-textarea"
                placeholder="Tell us about your school..."
                rows={4}
              />
            </div>
            <Separator />
            <div className="flex items-center gap-3">
              <Switch id="ds-switch" />
              <Label htmlFor="ds-switch">Receive curriculum updates</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="ds-check" />
              <Label htmlFor="ds-check">I agree to the terms</Label>
            </div>
            <RadioGroup defaultValue="teacher">
              <Label className="mb-3 block">I am a…</Label>
              <div className="flex flex-wrap gap-6">
                {["teacher", "admin", "student"].map((val) => (
                  <div key={val} className="flex items-center gap-2">
                    <RadioGroupItem value={val} id={`ds-radio-${val}`} />
                    <Label htmlFor={`ds-radio-${val}`} className="capitalize">
                      {val}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════
            NAVIGATION
        ═══════════════════════════════════════════════ */}
        <Section id="navigation" title="Components: Navigation">
          <Group title="Light Nav Bar">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="px-6 h-16 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.svg"
                      alt="Shard Learning"
                      width={20}
                      height={20}
                    />
                    <span className="font-semibold text-sm text-gray-900">
                      Shard Learning
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-6">
                    {["Platform", "For Schools", "Mission", "Team"].map(
                      (item) => (
                        <span
                          key={item}
                          className="text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="rounded-lg">
                      Sign In
                    </Button>
                    <Button size="sm" className="rounded-lg">
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </Group>

          <Group title="Dark Nav Bar">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <nav className="bg-[#162550]/95 border-b border-white/10">
                <div className="px-6 h-16 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.svg"
                      alt="Shard Learning"
                      width={20}
                      height={20}
                    />
                    <span className="font-semibold text-sm text-white">
                      Shard Learning
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-6">
                    {["Platform", "For Schools", "Mission", "Team"].map(
                      (item) => (
                        <span
                          key={item}
                          className="text-sm font-medium text-white/70 cursor-pointer hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="border border-white/30 text-white hover:bg-white/10 hover:text-white rounded-lg"
                    >
                      Sign In
                    </Button>
                    <Button size="sm" className="rounded-lg">
                      Get in Touch
                    </Button>
                  </div>
                </div>
              </nav>
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            FEEDBACK
        ═══════════════════════════════════════════════ */}
        <Section id="feedback" title="Components: Feedback">
          <Group title="Progress Bar">
            <div className="max-w-sm space-y-4">
              {[67, 40, 100].map((val) => (
                <div key={val} className="space-y-1.5">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>
                      {val === 67
                        ? "Course completion"
                        : val === 40
                          ? "Module 2 of 5"
                          : "All done!"}
                    </span>
                    <span>{val}%</span>
                  </div>
                  <Progress value={val} className="h-2" />
                </div>
              ))}
            </div>
          </Group>

          <Group title="Progress Ring (SVG)">
            <div className="flex gap-8 items-end">
              {[25, 67, 100].map((pct) => (
                <div key={pct} className="flex flex-col items-center gap-2">
                  <div className="relative w-16 h-16">
                    <svg
                      className="w-16 h-16 -rotate-90"
                      viewBox="0 0 48 48"
                    >
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeDasharray={`${pct * 1.257} 125.7`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-gray-900">
                      {pct}%
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{pct}%</span>
                </div>
              ))}
            </div>
          </Group>

          <Group title="Tabs">
            <Tabs defaultValue="overview" className="max-w-md">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="text-sm text-gray-600 pt-4">
                Overview of lesson content and learning objectives for this unit.
              </TabsContent>
              <TabsContent value="curriculum" className="text-sm text-gray-600 pt-4">
                Aligned with{" "}
                <span className="font-mono text-xs bg-gray-100 border border-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                  ACTDIK023
                </span>{" "}
                and{" "}
                <span className="font-mono text-xs bg-gray-100 border border-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                  ACTDIP016
                </span>
                .
              </TabsContent>
              <TabsContent value="progress" className="text-sm text-gray-600 pt-4">
                4 of 6 students have completed this module.
              </TabsContent>
            </Tabs>
          </Group>

          <Group title="Accordion">
            <Accordion type="single" collapsible className="max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is Digital Technologies?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed">
                  Digital Technologies is a learning area in the Australian
                  Curriculum that develops students&apos; knowledge and skills
                  in computational thinking, data, and digital systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Who is Shard Learning for?</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 leading-relaxed">
                  Designed for Year 7–10 students and their teachers. Tools for
                  classroom delivery, individual progress tracking, and teacher
                  reporting.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Group>

          <Group title="Tooltip &amp; Dialog">
            <div className="flex items-center gap-4 flex-wrap">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Hover me
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-mono text-xs">ACTDIK023</p>
                </TooltipContent>
              </Tooltip>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Open Dialog
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Join the Pilot Program</DialogTitle>
                  </DialogHeader>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    We&apos;re inviting a small cohort of Australian schools to
                    trial Shard Learning in 2027. Limited spots available for
                    Term 1.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Button className="flex-1 rounded-lg">Apply Now</Button>
                    <Button
                      variant="outline"
                      className="flex-1 rounded-lg"
                    >
                      Learn More
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </Group>
        </Section>

        {/* ═══════════════════════════════════════════════
            SHARD-SPECIFIC
        ═══════════════════════════════════════════════ */}
        <Section id="shard" title="Shard-Specific Components">
          <Group title="Curriculum Code Chip">
            <div className="flex flex-wrap gap-2">
              {["ACTDIK023", "ACTDIP016", "ACTDIP019", "ACTDIP028"].map(
                (code) => (
                  <span
                    key={code}
                    className="font-mono text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200"
                  >
                    {code}
                  </span>
                )
              )}
            </div>
          </Group>

          <Group title="Role Badges">
            <div className="flex gap-3 items-center">
              <span className="inline-flex items-center text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
                Teacher
              </span>
              <span className="inline-flex items-center text-xs font-semibold bg-[rgba(96,128,255,0.1)] text-[#6080ff] px-2.5 py-1 rounded-full">
                Student
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Teacher: orange-100 bg · orange-700 text (WCAG AA) · Student:
              blue-tint bg · #6080ff text
            </p>
          </Group>

          <Group title="Section Eyebrow">
            <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase">
              Australian Curriculum · Digital Technologies
            </p>
            <p className="text-xs text-gray-400 mt-2">
              text-xs · font-semibold · text-orange-400 · tracking-widest ·
              uppercase
            </p>
          </Group>

          <Group title="Hero Section Template">
            <div className="bg-[#162550] rounded-xl p-10 text-white">
              <p className="text-xs font-semibold text-orange-400 tracking-widest uppercase mb-4">
                Australian Curriculum · Digital Technologies
              </p>
              <h1 className="text-4xl font-bold leading-tight mb-4">
                Quality education,
                <br />
                interactive and curriculum-aligned.
              </h1>
              <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
                Made for teachers by teachers. Built on Australia&apos;s
                national curriculum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-lg">
                  Join the Pilot
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white rounded-lg"
                >
                  See the Platform
                </Button>
              </div>
            </div>
          </Group>

          <Group title="Team Member Card">
            <div className="max-w-sm">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-lg font-semibold">
                    JM
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-gray-900 mb-1">
                  James Mitchell
                </h3>
                <span className="inline-flex text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full mb-3">
                  Co-Founder &amp; Curriculum Lead
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Author of the Australian Curriculum: Digital Technologies. 15
                  years building national education standards.
                </p>
              </div>
            </div>
          </Group>
        </Section>
      </main>
    </div>
  );
}
