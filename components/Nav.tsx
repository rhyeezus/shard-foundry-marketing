import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavProps {
  theme?: "light" | "dark" | "amethyst" | "forest";
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
  // Narrative themes share the minimal homepage nav layout
  const isNarrative = isAmethyst || isForest;
  const isDark = theme === "dark" || isNarrative;

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        isNarrative
          ? "border-white/10"
          : isDark
          ? "bg-[#141312]/90 border-white/10"
          : "bg-white/80 border-gray-100"
      }`}
      // Narrative sky (amethyst #1A0D38 / forest #040d08), slightly translucent
      // so content blurs underneath on scroll.
      style={
        isAmethyst
          ? { backgroundColor: "rgba(26,13,56,0.92)" }
          : isForest
          ? { backgroundColor: "rgba(4,13,8,0.92)" }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className={isDark ? "bg-white/15 rounded-lg p-1" : ""}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Shard Learning" width={22} height={22} />
          </div>
          <span
            className={`font-semibold text-base ${
              isDark ? "text-white" : "text-gray-900"
            }`}
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
            className={`hidden sm:inline-flex text-white rounded-lg ${
              isNarrative
                ? "bg-brand-orange hover:bg-brand-orange-dark"
                : "bg-brand-purple hover:bg-brand-purple-dark"
            }`}
          >
            Create an account
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={
              isDark
                ? "border border-white/30 hover:border-white/60 text-white hover:bg-white/10 hover:text-white rounded-lg"
                : "rounded-lg"
            }
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
