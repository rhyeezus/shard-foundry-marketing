/**
 * AuthorityStrip.tsx
 *
 * Sits immediately below the hero CTA row.
 * Theme-aware — works on both lava/forge (dark navy surface) and
 * forest (dark green surface) because it uses opacity-based colours
 * rather than hard-coded hex values.
 *
 * Usage:
 *   <AuthorityStrip />
 *
 * No props required. Add / remove credential chips in the CREDENTIALS array.
 */

const CREDENTIALS = [
  {
    id: "bruce",
    avatar: "/team/bruce-fuda.jpg", // swap for real asset path
    name: "Bruce Fuda",
    credential: "Author · Australian Curriculum: Digital Technologies",
    award: "2016 ACCE/ACS ICT Educator of the Year",
  },
  {
    id: "courtney",
    avatar: "/team/courtney-weaver.jpg",
    name: "Courtney Weaver",
    credential: "Former Head of Education · Grok Academy",
    award: "ATAR Exam Writer · VP of ECAWA",
  },
  {
    id: "matthew",
    avatar: "/team/matthew-kameron.jpg",
    name: "Matthew Kameron",
    credential: "Executive EdTech SaaS Leader",
    award: "Former School Leader",
  },
] as const;

export function AuthorityStrip() {
  return (
    <div className="w-full mt-10 mb-0">
      {/* Divider rule */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="h-px bg-white/10 mb-8" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold font-mono tracking-widest uppercase text-white/40 mb-6">
          Built by the people who wrote the curriculum
        </p>

        {/* Credential chips */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {CREDENTIALS.map((person) => (
            <div
              key={person.id}
              className="
                flex items-center gap-3
                bg-white/[0.06] hover:bg-white/[0.09]
                border border-white/10
                rounded-xl px-4 py-3
                transition-colors duration-200
                w-full sm:w-auto
              "
            >
              {/* Avatar */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback monogram if image missing
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="w-full h-full flex items-center justify-center text-xs font-semibold text-white/60">${person.name.charAt(0)}</span>`;
                    }
                  }}
                />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white leading-tight truncate">
                  {person.name}
                </p>
                <p className="text-xs text-white/50 leading-tight truncate">
                  {person.credential}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
