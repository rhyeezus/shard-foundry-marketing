/**
 * PlatformBento.tsx
 *
 * Replaces the flat 2×2 features grid with a proper bento layout:
 * one dominant hero tile (the live classroom view — the actual product)
 * + four supporting feature tiles.
 *
 * Theme-aware: sits on a white section background, uses brand tokens only.
 * The hero tile uses the navy surface to create depth and draw the eye.
 *
 * Layout (desktop):
 *   ┌─────────────────────┬────────────┐
 *   │                     │  Feature 1 │
 *   │   HERO TILE         ├────────────┤
 *   │   Live classroom    │  Feature 2 │
 *   │                     ├────────────┤
 *   ├──────────┬──────────┤  Feature 3 │
 *   │Feature 4 │Feature 5 │            │
 *   └──────────┴──────────┴────────────┘
 *
 * Usage:
 *   <PlatformBento />
 */

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  Users,
  Zap,
} from "lucide-react";

// ─── Hero tile ────────────────────────────────────────────────────────────────

function HeroTile() {
  return (
    <div
      className="
        relative col-span-2 row-span-2
        bg-[#162550] rounded-2xl p-8
        overflow-hidden
        flex flex-col justify-between
        min-h-[320px]
      "
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "#6080ff" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-semibold text-white/80 font-mono tracking-wide">
            LIVE · 28 students
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white leading-snug mb-3 max-w-xs">
          The whole class, visible at once
        </h3>
        <p className="text-sm text-white/60 leading-relaxed max-w-sm">
          See every student's engagement state update in real time — who's active,
          who's thinking, who needs a nudge — without leaving the board.
        </p>
      </div>

      {/* Mock classroom grid */}
      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }).map((_, i) => {
            // Roughly replicate a realistic classroom state
            const state =
              i < 18
                ? "active"
                : i < 23
                ? "thinking"
                : i < 26
                ? "stuck"
                : "done";
            const colours = {
              active: "bg-green-400/80",
              thinking: "bg-amber-400/80",
              stuck: "bg-red-400/80",
              done: "bg-[#6080ff]/80",
            } as const;
            return (
              <div
                key={i}
                className={`
                  h-7 rounded-md ${colours[state]}
                  flex items-center justify-center
                `}
              >
                <span className="text-[9px] font-mono text-white/70 font-medium select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mt-3">
          {[
            { colour: "bg-green-400", label: "Active" },
            { colour: "bg-amber-400", label: "Thinking" },
            { colour: "bg-red-400", label: "Needs help" },
            { colour: "bg-[#6080ff]", label: "Done" },
          ].map(({ colour, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-sm ${colour}`} />
              <span className="text-xs text-white/40 font-mono">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
    </div>
  );
}

// ─── Feature tiles ─────────────────────────────────────────────────────────────

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
  accent?: "orange" | "blue";
}

const FEATURES: Feature[] = [
  {
    icon: BookOpen,
    title: "Curriculum-mapped lessons",
    body: "Every activity links to AC v9.0 achievement standards. No mapping required.",
    accent: "orange",
  },
  {
    icon: BarChart3,
    title: "Instant class analytics",
    body: "Completion rates, time-on-task, and stuck-student alerts — available the moment the lesson ends.",
    accent: "blue",
  },
  {
    icon: Users,
    title: "Built for whole-class teaching",
    body: "Not self-paced modules. Shard is designed for a teacher at the front with 28 students in the room.",
    accent: "orange",
  },
  {
    icon: Zap,
    title: "Ready in minutes",
    body: "Lesson plans, slides, and student activities in one place. Open the tab and teach.",
    accent: "blue",
  },
];

function FeatureTile({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  const isBlue = feature.accent === "blue";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3">
      <div
        className={`
          w-9 h-9 rounded-lg flex items-center justify-center
          ${isBlue ? "bg-[rgba(96,128,255,0.1)]" : "bg-orange-50"}
        `}
      >
        <Icon
          className={`size-5 ${isBlue ? "text-[#6080ff]" : "text-orange-500"}`}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-sm font-semibold text-gray-900 leading-snug">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{feature.body}</p>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function PlatformBento() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold font-mono tracking-widest uppercase text-orange-500 mb-3">
            The Platform
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            A classroom tool that works like one
          </h2>
        </div>

        {/*
          Bento grid
          Desktop: 3 cols, 3 rows
          - Hero tile: col 1–2, row 1–2
          - Features: col 3, rows 1–3 (stacked) + col 1–2, row 3 (2 side by side)
        */}
        <div
          className="
            grid gap-4
            grid-cols-1
            md:grid-cols-3
            md:grid-rows-[auto_auto_auto]
          "
        >
          {/* Hero — full width on mobile, 2/3 width on desktop */}
          <div className="md:col-span-2 md:row-span-2">
            <HeroTile />
          </div>

          {/* Features 1–3: right column on desktop */}
          {FEATURES.slice(0, 3).map((f) => (
            <div key={f.title}>
              <FeatureTile feature={f} />
            </div>
          ))}

          {/* Feature 4: bottom-left on desktop */}
          <div key={FEATURES[3].title}>
            <FeatureTile feature={FEATURES[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
