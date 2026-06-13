import Image from "next/image";
import Link from "next/link";

const variants = [
  {
    href: "/variant-e",
    tag: "Variant E",
    tagColor: "text-orange-400",
    title: "Forge Rebrand",
    desc: "Game-inspired. Amethyst sky → volcanic lava floor, CSS parallax mountains, orbiting SVG gems, forge vortex. Zero canvas, zero WebGL.",
    bg: "bg-[#0e0720] hover:bg-[#1a0d38]",
    titleColor: "text-white",
    descColor: "text-white/60",
    arrowColor: "text-white/40 group-hover:text-white/80",
    border: "",
  },
  {
    href: "/variant-f",
    tag: "Variant F",
    tagColor: "text-[#00e5a0]",
    title: "Forest World — Twilight",
    desc: "Enchanted forest skin. Bioluminescent mint-teal light source, rose bloom accents, same structure as Variant E.",
    bg: "bg-[#040d08] hover:bg-[#0a1f12]",
    titleColor: "text-white",
    descColor: "text-white/60",
    arrowColor: "text-white/40 group-hover:text-white/80",
    border: "",
  },
  {
    href: "/variant-f-light",
    tag: "Variant F — Light (prototype)",
    tagColor: "text-[#059669]",
    title: "Forest World — Light",
    desc: "Light-mode Forest. Mint-white canvas, deep-emerald ink, solid white cards with soft mint shadows, rose CTA. Same structure — compare against the twilight version.",
    bg: "bg-[#F4FBF7] hover:bg-[#eafaf3]",
    titleColor: "text-[#0A2E20]",
    descColor: "text-[#0A2E20]/70",
    arrowColor: "text-[#0A2E20]/40 group-hover:text-[#0A2E20]/80",
    border: "border border-[#059669]/20",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <Image src="/logo.svg" alt="Shard Learning" width={28} height={28} />
          <span className="font-semibold text-lg text-gray-900">
            Shard Learning
          </span>
        </div>

        <p className="text-xs font-semibold text-orange-500 tracking-widest uppercase mb-3">
          Marketing Site — Internal Navigation
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Choose a variant.
        </h1>
        <p className="text-gray-600 text-base mb-10 leading-relaxed">
          Two landing page themes. One design system catalogue. Pick one to
          review or open the design system for component reference.
        </p>

        {/* Variant cards */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          {variants.map(
            ({
              href,
              tag,
              tagColor,
              title,
              desc,
              bg,
              titleColor,
              descColor,
              arrowColor,
              border,
            }) => (
              <Link
                key={href}
                href={href}
                className={`group flex items-start gap-4 p-6 rounded-xl transition-all duration-200 ${bg} ${border}`}
              >
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-semibold tracking-widest uppercase mb-1 ${tagColor}`}
                  >
                    {tag}
                  </p>
                  <p className={`text-lg font-bold mb-1.5 ${titleColor}`}>
                    {title}
                  </p>
                  <p className={`text-sm leading-relaxed ${descColor}`}>
                    {desc}
                  </p>
                </div>
                <span
                  className={`text-xl transition-colors duration-150 mt-1 shrink-0 ${arrowColor}`}
                >
                  →
                </span>
              </Link>
            )
          )}
        </div>

        {/* Design system link */}
        <Link
          href="/design-system"
          className="flex items-center justify-between p-5 border border-dashed border-gray-300 rounded-xl hover:border-orange-400 hover:bg-orange-50/40 transition-all duration-150 group"
        >
          <div>
            <p className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">
              Dev Reference
            </p>
            <p className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-150">
              Design System →
            </p>
          </div>
          <span className="font-mono text-xs bg-gray-100 border border-gray-200 text-gray-500 px-2 py-1 rounded">
            ACTDIK023
          </span>
        </Link>
      </div>
    </div>
  );
}
