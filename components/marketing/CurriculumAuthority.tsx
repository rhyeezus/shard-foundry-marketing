/**
 * CurriculumAuthority.tsx
 *
 * Curriculum strand-coverage section for the shared WorldPage. Shows the six
 * Digital Technologies strands with AC code chips — the visual proof that
 * Shard knows the curriculum at the spec level, not just in marketing copy.
 *
 * Theme-aware by design: takes the same `t: WorldTheme` the rest of WorldPage
 * uses and reuses the identical treatments (soft-card gradient-border fill,
 * font-mono chips, ember/cyan icon accent, `reveal` scroll-in) so it reads as
 * native on the dark lava surface (and stays correct on the shared forest
 * world). No light backgrounds, no white box-shadows.
 *
 * Usage (inside WorldPage):
 *   <CurriculumAuthority t={t} />
 */

import type { LucideIcon } from "lucide-react";
import { Cpu, Database, GitBranch, Network, Binary, Layers } from "lucide-react";
import type { WorldTheme } from "@/components/world/theme";

interface Strand {
  label: string;
  code: string;
  description: string;
  acCodes: string[];
  icon: LucideIcon;
}

const STRANDS: Strand[] = [
  {
    label: "Digital Systems",
    code: "DIKT",
    description:
      "Hardware, software, and networks. Students understand how the components of a system interact.",
    acCodes: ["AC9TDI8K01", "AC9TDI8K02"],
    icon: Cpu,
  },
  {
    label: "Data & Information",
    code: "DIKD",
    description:
      "Representation, collection, interpretation, and privacy of data in digital contexts.",
    acCodes: ["AC9TDI8K03", "AC9TDI8K04", "AC9TDI8K05"],
    icon: Database,
  },
  {
    label: "Algorithms & Programming",
    code: "DIAP",
    description:
      "Sequencing, selection, iteration, and modular design. Thinking before coding.",
    acCodes: ["AC9TDI8P01", "AC9TDI8P02", "AC9TDI8P03"],
    icon: GitBranch,
  },
  {
    label: "Interactions & Impact",
    code: "DIIN",
    description:
      "Human-centred design, user experience, and the social implications of technology.",
    acCodes: ["AC9TDI8I01", "AC9TDI8I02"],
    icon: Network,
  },
  {
    label: "Creating Solutions",
    code: "DICR",
    description:
      "Defining, designing, implementing, and evaluating digital solutions for real needs.",
    acCodes: ["AC9TDI8C01", "AC9TDI8C02", "AC9TDI8C03"],
    icon: Layers,
  },
  {
    label: "Binary & Encoding",
    code: "DIBI",
    description:
      "How numbers, text, images, and sound are represented in binary — the foundation of digital.",
    acCodes: ["AC9TDI8K06"],
    icon: Binary,
  },
];

export function CurriculumAuthority({ t }: { t: WorldTheme }) {
  // Soft-card treatment, mirrored from WorldPage so these cards are visually
  // identical to the platform / scope-and-sequence cards on the same surface.
  const softCardStyle = {
    ["--card-fill" as string]: t.softCard.fill,
    ["--card-edge-from" as string]: t.softCard.edgeFrom,
    ["--card-edge-to" as string]: t.softCard.edgeTo,
    ["--card-glow" as string]: t.softCard.glow,
    ["--card-shadow" as string]: t.softCard.shadow,
  } as React.CSSProperties;

  // font-mono AC chip — same per-world styling as WorldPage's <Chip />.
  const chipStyle: React.CSSProperties =
    t.name === "lava"
      ? {
          background: "rgba(255,255,255,0.05)",
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
          borderColor: "rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.78)",
        }
      : t.mode === "light"
      ? {
          background: "rgba(0,229,160,0.10)",
          borderColor: `${t.lightCore}40`,
          color: t.lightCore,
        }
      : {
          background: "rgba(0,229,160,0.08)",
          boxShadow: `inset 0 0 8px ${t.light}55`,
          borderColor: `${t.light}40`,
          color: t.lightCore,
        };

  return (
    <section className="relative py-[clamp(3rem,7vw,9rem)]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Section header — same 3/4 dark box + 1/4 square gem tile as the
            platform / founding-team headers. */}
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 mb-5">
          {/* Header copy — left, 3/4 width, dark translucent box. */}
          <div className="md:col-span-3 rounded-2xl p-8" style={{ background: 'rgba(10,5,28,0.60)' }}>
            <p
              className="text-xs font-semibold tracking-[0.18em] uppercase mb-4 reveal"
              style={{ color: t.eyebrowCta }}
            >
              Australian Curriculum v9.0 · Year 7–8
            </p>
            <h2
              className="font-bold tracking-tight leading-[1.08] mb-5 reveal"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: t.text.heading }}
            >
              Every strand. Every outcome.
            </h2>
            <p
              className="leading-relaxed reveal"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: t.text.body }}
            >
              Shard was built by the team that wrote the Digital Technologies curriculum.
              Every lesson maps to the exact achievement standard — not approximately, but
              to the code.
            </p>
          </div>
          {/* Purple gem — right, 1/4-width square (matches the other header tiles). */}
          <div className="reveal md:col-span-1 w-full aspect-square overflow-hidden rounded-2xl">
            <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
              <source src="/video/gems/purple-alpha.mp4" type="video/mp4; codecs=hvc1" />
              <source src="/video/gems/purple.webm" type="video/webm" />
            </video>
          </div>
        </div>

        {/* Strand grid — 3 cols desktop / 2 tablet / 1 mobile. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STRANDS.map((strand) => {
            const Icon = strand.icon;
            return (
              <div
                key={strand.code}
                className="reveal world-card world-card-soft relative rounded-2xl p-6 overflow-hidden"
                style={softCardStyle}
              >
                {/* Header row — icon accent + label + strand code */}
                <div className="relative flex items-start gap-3 mb-3">
                  <span
                    className="flex size-9 items-center justify-center rounded-lg shrink-0"
                    style={{ backgroundColor: `${t.light}1a` }}
                  >
                    <Icon className="size-5" style={{ color: t.light }} strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-bold leading-tight"
                      style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)", color: t.softCardHeading }}
                    >
                      {strand.label}
                    </h3>
                    <p className="text-[11px] font-mono mt-0.5" style={{ color: t.text.muted }}>
                      {strand.code}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="relative text-sm leading-relaxed mb-4"
                  style={{ color: t.softCardText }}
                >
                  {strand.description}
                </p>

                {/* AC code chips */}
                <div className="relative flex flex-wrap gap-2">
                  {strand.acCodes.map((code) => (
                    <span
                      key={code}
                      className="font-mono text-[11px] font-medium px-2 py-0.5 rounded border"
                      style={chipStyle}
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer authority note */}
        <div className="mt-[clamp(2rem,4vw,3rem)] flex items-center gap-3 reveal">
          <div className="h-px flex-1" style={{ backgroundColor: t.surface.chipBorder }} />
          <p className="text-xs font-medium shrink-0" style={{ color: t.text.faint }}>
            Curriculum codes reference <span className="font-mono">AC v9.0</span> · Digital
            Technologies F–10 Sequence
          </p>
          <div className="h-px flex-1" style={{ backgroundColor: t.surface.chipBorder }} />
        </div>
      </div>
    </section>
  );
}
