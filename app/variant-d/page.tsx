'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Diamond = dynamic(() => import('@/components/DiamondGradient').then(m => m.Diamond), { ssr: false });

export default function Home() {
  const [isOverDark, setIsOverDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOverDark(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-xl" style={{background:'rgba(46,16,101,0.82)', boxShadow:'0 1px 0 rgba(255,255,255,0.06)'}}>
        <div className="max-w-[1100px] mx-auto px-6 py-2 grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Shard Learning" width={40} height={40} />
          </div>
          <div className="flex items-center justify-center">
            <span className="font-semibold text-white text-lg">Shard Learning</span>
          </div>
          <div className="flex items-center justify-end gap-4">
            <a href="#schools" className="px-4 py-1.5 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors">For Schools</a>
            <button className="px-4 py-1.5 text-sm text-white/80 border border-white/30 rounded hover:border-white/60 transition-colors">Sign In</button>
          </div>
        </div>
      </nav>

      {/* FAB — Get in Contact */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
        {/* Icon button */}
        <button className="w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
        {/* Callout card — clear glass on dark, subtle dark on light */}
        <div className={`backdrop-blur-md rounded-xl px-4 py-3 shadow-xl text-center border transition-all duration-500 ${
          isOverDark
            ? 'bg-white/10 border-white/15'
            : 'bg-gray-900/60 border-white/10'
        }`}>
          <p className="text-white text-sm font-medium leading-none">Get in contact</p>
          <p className="text-white/50 text-xs mt-1">We'd love to hear from you</p>
        </div>
      </div>

      {/* Hero */}
      <section className="mesh-gradient-light relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2" style={{zIndex: 10}}>
          {/* Top-left — heading */}
          <div className="border border-black/5 flex items-center px-12 pt-16 backdrop-blur-md" style={{background:'rgba(255,255,255,0.55)', boxShadow:'inset 0 2px 12px rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.08)'}}>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Every student, genuinely engaged.
            </h1>
          </div>
          {/* Top-right — diamond */}
          <div className="border border-black/5 relative overflow-hidden backdrop-blur-md" style={{background:'rgba(255,255,255,0.40)', boxShadow:'inset 0 2px 12px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.07)'}}>
            <Diamond />
          </div>
          {/* Bottom-left — subheading */}
          <div className="border border-black/5 flex items-start px-12 pt-10 backdrop-blur-md" style={{background:'rgba(255,255,255,0.50)', boxShadow:'inset 0 -2px 12px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.07)'}}>
            <p className="text-3xl text-gray-600 leading-relaxed">
              Curriculum-aligned experiences designed by teachers, for teachers.
            </p>
          </div>
          {/* Bottom-right — empty */}
          <div className="border border-black/5 backdrop-blur-md" style={{background:'rgba(255,255,255,0.35)', boxShadow:'inset 0 -2px 12px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)'}} />
        </div>
      </section>

      {/* The Platform */}
      <section id="platform" className="mesh-gradient-light relative py-20 px-6 overflow-hidden">
        <div className="surface-content max-w-[1100px] mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">The Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Curriculum-Aligned Content', description: 'Content matched to Australian Curriculum standards' },
              { title: 'Teacher Dashboards', description: 'Track student progress and manage classes' },
              { title: 'Interactive Learning Tools', description: 'Engaging, interactive lessons for students' },
              { title: 'Partner Content', description: 'Integrated content from educational partners' },
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg bg-white/70 backdrop-blur-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Technologies */}
      <section id="technologies" className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Digital Technologies</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Comprehensive digital literacy curriculum aligned with national standards
          </p>
          <button className="px-8 py-3 bg-orange-500 text-white rounded font-medium">Join the Pilot</button>
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We believe quality education should be accessible, interactive, and curriculum-aligned.
            Shard Foundry empowers teachers with tools to deliver engaging digital literacy education
            that meets national standards while respecting classroom realities.
          </p>
        </div>
      </section>

      {/* Founding Team & Partners */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Founding Team & Partners</h2>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { name: 'Team Member 1', role: 'Co-Founder' },
              { name: 'Team Member 2', role: 'Co-Founder' },
              { name: 'Team Member 3', role: 'Co-Founder' },
            ].map((member, i) => (
              <div key={i} className="p-8 border border-gray-200 rounded-lg bg-white text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">
                  Experienced educator and curriculum specialist
                </p>
              </div>
            ))}
          </div>

          {/* Partner Card */}
          <div className="max-w-md mx-auto p-8 border border-gray-200 rounded-lg bg-white text-center">
            <div className="w-32 h-12 bg-gray-300 rounded mx-auto mb-4"></div>
            <p className="text-gray-600 mb-4">
              Our strategic partner in educational innovation
            </p>
            <a href="#" className="text-teal-500 font-medium text-sm">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Get in Touch</h2>
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="px-4 py-3 border border-gray-300 rounded" />
              <input type="email" placeholder="Your Email" className="px-4 py-3 border border-gray-300 rounded" />
            </div>
            <input type="text" placeholder="School or Organisation" className="w-full px-4 py-3 border border-gray-300 rounded" />
            <textarea placeholder="Message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded"></textarea>
            <button className="w-full px-6 py-3 bg-orange-500 text-white rounded font-medium">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center text-sm">
          <p>&copy; 2026 Shard Learning. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
