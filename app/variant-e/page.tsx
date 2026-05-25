'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function VariantE() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0720] text-white overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">Shard Learning</div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Start Learning
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Stars Background */}
        <div
          className="absolute inset-0 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <style>{`
                @keyframes twinkle {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 1; }
                }
                .star { animation: twinkle 3s infinite; }
                .star:nth-child(2) { animation-delay: 0.5s; }
                .star:nth-child(3) { animation-delay: 1s; }
                .star:nth-child(4) { animation-delay: 1.5s; }
                .star:nth-child(5) { animation-delay: 2s; }
              `}</style>
            </defs>
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={Math.random() * 1000}
                cy={Math.random() * 1000}
                r="2"
                fill="white"
                className="star"
                opacity={Math.random() * 0.5 + 0.3}
              />
            ))}
          </svg>
        </div>

        {/* Mountain Layer 1 (Far) */}
        <div
          className="absolute bottom-0 w-full opacity-30"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <svg
            className="w-full h-64"
            viewBox="0 0 1400 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M 0 300 Q 175 150 350 300 T 700 300 T 1050 300 T 1400 300 L 1400 400 L 0 400 Z"
              fill="#6a4c8f"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Mountain Layer 2 (Mid) */}
        <div
          className="absolute bottom-0 w-full opacity-50"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <svg
            className="w-full h-80"
            viewBox="0 0 1400 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M 0 350 L 150 200 L 300 350 L 450 250 L 600 350 L 750 200 L 900 350 L 1050 240 L 1200 350 L 1400 250 L 1400 500 L 0 500 Z"
              fill="#5a3c7f"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Lava Floor with Crack Pattern */}
        <div
          className="absolute bottom-0 w-full h-48"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1400 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="lavaPattern" patternUnits="userSpaceOnUse" width="200" height="200">
                <rect width="200" height="200" fill="#1a0d08" />
                <path
                  d="M 20 40 Q 50 30 80 50 T 140 60"
                  stroke="#f97316"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                />
                <path
                  d="M 30 100 L 70 120 Q 100 110 130 130"
                  stroke="#fb923c"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="50" cy="150" r="3" fill="#fbbf24" opacity="0.5" />
                <circle cx="130" cy="80" r="2" fill="#fbbf24" opacity="0.5" />
              </pattern>
              <radialGradient id="lavaPulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1400" height="600" fill="url(#lavaPattern)" />
            <circle cx="700" cy="300" r="400" fill="url(#lavaPulse)" />
          </svg>
        </div>

        {/* Forge Vortex & Gems */}
        <div className="absolute inset-0 flex items-center justify-end pr-20 pointer-events-none">
          <div className="relative w-96 h-96">
            {/* Vortex */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <style>{`
                  @keyframes vortex1 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                  @keyframes vortex2 { 0% { transform: rotate(360deg); } 100% { transform: rotate(0deg); } }
                  .vortex-ring-1 { animation: vortex1 20s linear infinite; }
                  .vortex-ring-2 { animation: vortex2 25s linear infinite; }
                  .vortex-ring-3 { animation: vortex1 30s linear infinite; }
                `}</style>
              </defs>
              {/* Outer ring */}
              <circle
                cx="100"
                cy="100"
                r="95"
                fill="none"
                stroke="#6a4c8f"
                strokeWidth="1"
                opacity="0.4"
                className="vortex-ring-1"
              />
              {/* Mid ring */}
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                opacity="0.5"
                className="vortex-ring-2"
              />
              {/* Inner ring */}
              <circle
                cx="100"
                cy="100"
                r="45"
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
                opacity="0.6"
                className="vortex-ring-3"
              />
              {/* Core */}
              <circle cx="100" cy="100" r="20" fill="#fbbf24" opacity="0.3" />
            </svg>

            {/* Orbiting Gems */}
            <div className="absolute inset-0">
              <style>{`
                @keyframes gemFloat1 { 0% { transform: translate(0, 0); } 25% { transform: translate(8px, -8px); } 50% { transform: translate(0, 0); } 75% { transform: translate(-8px, 8px); } 100% { transform: translate(0, 0); } }
                @keyframes gemFloat2 { 0% { transform: translate(0, 0); } 25% { transform: translate(-8px, -8px); } 50% { transform: translate(0, 0); } 75% { transform: translate(8px, 8px); } 100% { transform: translate(0, 0); } }
                @keyframes gemFloat3 { 0% { transform: translate(0, 0); } 25% { transform: translate(8px, 8px); } 50% { transform: translate(0, 0); } 75% { transform: translate(-8px, -8px); } 100% { transform: translate(0, 0); } }
                @keyframes gemOrbit1 { 0% { transform: translate(140px, 0px) rotate(0deg); } 100% { transform: translate(140px, 0px) rotate(360deg); } }
                @keyframes gemOrbit2 { 0% { transform: translate(-140px, 0px) rotate(0deg); } 100% { transform: translate(-140px, 0px) rotate(360deg); } }
                @keyframes gemOrbit3 { 0% { transform: translate(0px, -120px) rotate(0deg); } 100% { transform: translate(0px, -120px) rotate(360deg); } }
                @keyframes gemOrbit4 { 0% { transform: translate(80px, -80px) rotate(0deg); } 100% { transform: translate(80px, -80px) rotate(360deg); } }
                @keyframes gemOrbit5 { 0% { transform: translate(-80px, -80px) rotate(0deg); } 100% { transform: translate(-80px, -80px) rotate(360deg); } }

                .gem { filter: drop-shadow(0 0 8px rgba(255, 193, 7, 0.3)); }
                .gem-1 { animation: gemOrbit1 12s linear infinite, gemFloat1 4s ease-in-out infinite; animation-delay: 0s, 0s; }
                .gem-2 { animation: gemOrbit2 14s linear infinite, gemFloat2 4s ease-in-out infinite; animation-delay: 0.5s, 0.5s; }
                .gem-3 { animation: gemOrbit3 16s linear infinite, gemFloat3 4s ease-in-out infinite; animation-delay: 1s, 1s; }
                .gem-4 { animation: gemOrbit4 18s linear infinite, gemFloat1 4s ease-in-out infinite; animation-delay: 1.5s, 1.5s; }
                .gem-5 { animation: gemOrbit5 20s linear infinite, gemFloat2 4s ease-in-out infinite; animation-delay: 2s, 2s; }
              `}</style>

              {/* Gem 1 - Sapphire (Top) */}
              <div className="gem gem-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="sapphire" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="12,2 18,8 18,16 12,20 6,16 6,8"
                    fill="url(#sapphire)"
                  />
                  <polygon
                    points="12,4 16,8 16,14 12,17 8,14 8,8"
                    fill="#bfdbfe"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Gem 2 - Amethyst (Left) */}
              <div className="gem gem-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="amethyst" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity="1" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6d28d9" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="12,2 18,8 18,16 12,20 6,16 6,8"
                    fill="url(#amethyst)"
                  />
                  <polygon
                    points="12,4 16,8 16,14 12,17 8,14 8,8"
                    fill="#ddd6fe"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Gem 3 - Fire Opal (Right) */}
              <div className="gem gem-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="fireOpal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                      <stop offset="50%" stopColor="#ea580c" stopOpacity="1" />
                      <stop offset="100%" stopColor="#c2410c" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="12,2 18,8 18,16 12,20 6,16 6,8"
                    fill="url(#fireOpal)"
                  />
                  <polygon
                    points="12,4 16,8 16,14 12,17 8,14 8,8"
                    fill="#fed7aa"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Gem 4 - Aquamarine (Lower Right) */}
              <div className="gem gem-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="aquamarine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0891b2" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="12,2 18,8 18,16 12,20 6,16 6,8"
                    fill="url(#aquamarine)"
                  />
                  <polygon
                    points="12,4 16,8 16,14 12,17 8,14 8,8"
                    fill="#cffafe"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Gem 5 - Small Amethyst (Lower Left) */}
              <div className="gem gem-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="amethyst2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#c4b5fd" stopOpacity="1" />
                      <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="12,2 18,8 18,16 12,20 6,16 6,8"
                    fill="url(#amethyst2)"
                  />
                  <polygon
                    points="12,4 16,8 16,14 12,17 8,14 8,8"
                    fill="#ede9fe"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-12 z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Forge Your <br />
              Learning Path
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Crafted for curious minds. Designed for meaningful growth. Every
              challenge is a shard in your journey.
            </p>
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
              Start Forging
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Transition - Mountain Silhouette */}
      <div className="relative h-64 bg-gradient-to-b from-[#1a0d08] to-[#2a1e38] overflow-hidden">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="mountainGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1a0d08" />
              <stop offset="100%" stopColor="#2a1e38" />
            </linearGradient>
          </defs>
          <path
            d="M 0 200 L 100 100 L 200 180 L 300 80 L 450 160 L 600 60 L 750 140 L 900 90 L 1050 170 L 1200 100 L 1400 200 L 1400 400 L 0 400 Z"
            fill="url(#mountainGradient)"
            opacity="0.8"
          />
          {/* Lava glow through peaks */}
          <circle cx="700" cy="180" r="200" fill="#f97316" opacity="0.15" />
        </svg>
      </div>

      {/* Features Section */}
      <section className="bg-[#2a1e38] py-20 px-12">
        <div className="max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Adaptive Learning',
                desc: 'Paths that grow with you, not against you.',
                gem: '#60a5fa',
              },
              {
                title: 'Real Projects',
                desc: 'Build things that matter, shareable and proud.',
                gem: '#f97316',
              },
              {
                title: 'Community Forged',
                desc: 'Learn together. Grow together. No one walks alone.',
                gem: '#22d3ee',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 border-t-2 rounded-lg bg-[#1a0d08]/40 backdrop-blur"
                style={{ borderColor: feature.gem }}
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-gradient-to-b from-[#2a1e38] to-[#fafaf9] py-20 px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0e0720] mb-6">
            Ready to start?
          </h2>
          <p className="text-lg text-[#5a5a5a] mb-8">
            Join students and educators forging their learning paths.
          </p>
          <button className="px-8 py-4 bg-[#0e0720] hover:bg-[#1a0d38] text-white font-semibold rounded-lg transition-colors">
            Begin Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}
