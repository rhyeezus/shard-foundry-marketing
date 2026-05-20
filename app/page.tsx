import Image from 'next/image';
import { Diamond } from '@/components/Diamond';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Shard Learning" width={24} height={24} />
            <span className="font-semibold text-gray-900">Shard Learning</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-sm text-gray-600 hover:text-gray-900">Platform</a>
            <a href="#technologies" className="text-sm text-gray-600 hover:text-gray-900">Digital Technologies</a>
            <a href="#mission" className="text-sm text-gray-600 hover:text-gray-900">Mission</a>
            <a href="#team" className="text-sm text-gray-600 hover:text-gray-900">Team</a>
            <a href="#schools" className="text-sm text-gray-600 hover:text-gray-900">For Schools</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded">Sign In</button>
            <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded">Get in Touch</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full h-screen bg-white overflow-hidden">
        {/* 3D Diamond Canvas */}
        <div className="absolute inset-0 w-full h-full">
          <Diamond />
        </div>
      </section>

      {/* The Platform */}
      <section id="platform" className="py-20 px-6 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">The Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Curriculum-Aligned Content', description: 'Content matched to Australian Curriculum standards' },
              { title: 'Teacher Dashboards', description: 'Track student progress and manage classes' },
              { title: 'Interactive Learning Tools', description: 'Engaging, interactive lessons for students' },
              { title: 'Partner Content', description: 'Integrated content from educational partners' },
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-lg bg-white">
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
            <a href="#" className="text-[#6080ff] hover:text-[#7b96ff] transition-colors font-medium text-sm">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section id="schools" className="py-20 px-6 bg-white">
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
