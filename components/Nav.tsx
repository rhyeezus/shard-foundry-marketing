"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface NavProps {
  theme?: "light" | "dark" | "amethyst" | "forest" | "forest-light";
}

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Digital Technologies", href: "#technologies" },
  { label: "Mission", href: "#mission" },
  { label: "Team", href: "#team" },
  { label: "For Schools", href: "#schools" },
];

export function Nav({ theme = "light" }: NavProps) {
  const isAmethyst = theme === "amethyst";
  const isForest = theme === "forest";
  const isForestLight = theme === "forest-light";
  // Narrative themes share the minimal homepage nav layout
  const isNarrative = isAmethyst || isForest || isForestLight;
  const isDark = theme === "dark" || isAmethyst || isForest;

  // Narrative nav starts fully transparent over the hero video, then solidifies
  // (blur + tinted fill + hairline) once the user scrolls past the first slice.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (!isNarrative) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isNarrative]);

  // Glass-on-scroll: the blur does the work, the tint is just a whisper of colour
  // so it reads as frosted glass — not a solid coloured bar. Light forest needs a
  // touch more fill to stay legible over the bright canvas.
  const narrativeBg = isAmethyst
    ? "rgba(20,10,42,0.32)"
    : isForestLight
    ? "rgba(252,244,246,0.62)"
    : "rgba(14,62,66,0.30)";

  // Light-forest nav: white text over the dark hero video, flipping to dark
  // emerald once scrolled onto the white canvas. Other narrative navs stay light.
  const narrativeTextDark = isForestLight && scrolled;
  // Light-forest ink is warm plum-brown (rose family), matching theme.ts text.heading.
  const onLightText = narrativeTextDark ? "#3a1f2c" : "#ffffff";

  return (
    <nav
      className={`nav-entrance z-50 h-16 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        isNarrative
          ? scrolled
            ? `fixed top-0 inset-x-0 backdrop-blur-md border-b ${isForestLight ? "border-black/5" : "border-white/10"}`
            : "fixed top-0 inset-x-0"
          : isDark
          ? "sticky top-0 bg-[#141312]/90 border-b border-white/10 backdrop-blur-md"
          : "sticky top-0 bg-white/80 border-b border-gray-100 backdrop-blur-md"
      }`}
      style={
        isNarrative
          ? { backgroundColor: scrolled ? narrativeBg : "transparent" }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className={isDark || (isForestLight && !scrolled) ? "bg-white/15 rounded-lg p-1" : ""}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Shard Learning" width={22} height={22} />
          </div>
          <span
            className={`font-semibold text-base transition-colors ${
              isForestLight ? "" : isDark ? "text-white" : "text-gray-900"
            }`}
            style={isForestLight ? { color: onLightText } : undefined}
          >
            Shard Learning
          </span>
        </Link>

        {/* Nav links — desktop (hidden on the minimal narrative homepage nav) */}
        {!isNarrative && (
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isDark
                    ? "text-white/70 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {/* CTAs */}
        <div className="flex items-center gap-3">
          {!isNarrative && (
            <Button
              size="sm"
              className="bg-brand-orange hover:bg-brand-orange-dark text-white rounded-lg"
            >
              Get in Touch
            </Button>
          )}
          <Button
            size="sm"
            className={`hidden sm:inline-flex text-white rounded-lg transition-colors hover:brightness-110 ${
              isNarrative ? "" : "bg-brand-purple hover:bg-brand-purple-dark"
            }`}
            // Narrative CTA matches the world's CTA colour: lava = orange, forest = rose.
            style={
              isForest || isForestLight
                ? { backgroundColor: "var(--color-rose-cta)" }
                : isAmethyst
                ? { backgroundColor: "#F97316" }
                : undefined
            }
          >
            Create an account
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={
              isForestLight
                ? "rounded-lg transition-colors"
                : isDark
                ? "border border-white/30 hover:border-white/60 text-white hover:bg-white/10 hover:text-white rounded-lg"
                : "rounded-lg"
            }
            // Light-forest Sign In flips white→emerald with scroll, like the logo.
            style={isForestLight ? { color: onLightText } : undefined}
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
