import Image from "next/image";
import Link from "next/link";

const variants = [
  {
    href: "/variant-a",
    tag: "Variant A",
    tagColor: "text-orange-400",
    title: "Authority Dark",
    desc: "Linear-inspired. Full navy, dense type hierarchy, dark surface cards. Premium SaaS craft adapted for education.",
    bg: "bg-[#162550] hover:bg-[#1e3a6e]",
    titleColor: "text-white",
    descColor: "text-white/60",
    arrowColor: "text-white/40 group-hover:text-white/80",
    border: "",
  },
  {
    href: "/variant-b",
    tag: "Variant B",
    tagColor: "text-orange-500",
    title: "Clean Authority",
    desc: "Vercel-inspired. White canvas, sharp typography, orange CTAs pop. Modern developer-platform energy for education.",
    bg: "bg-white hover:shadow-md",
    titleColor: "text-gray-900",
    descColor: "text-gray-600",
    arrowColor: "text-gray-300 group-hover:text-gray-600",
    border: "border border-gray-200",
  },
  {
    href: "/variant-c",
    tag: "Variant C",
    tagColor: "text-[#6080ff]",
    title: "Warm Institutional",
    desc: "Stripe-inspired. Atmospheric gradient hero, editorial type, credentials-forward. Trusted institution energy.",
    bg: "bg-gradient-to-br from-[#162550]/5 to-[#6080ff]/10 hover:border-[#6080ff]/30",
    titleColor: "text-gray-900",
    descColor: "text-gray-600",
    arrowColor: "text-gray-300 group-hover:text-[#6080ff]",
    border: "border border-gray-200",
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
          Three landing page directions. One design system catalogue. Pick one
          to review or open the design system for component reference.
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
