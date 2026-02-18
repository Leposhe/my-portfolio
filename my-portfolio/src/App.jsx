import { useState } from 'react'

// Updated Component with Image Support
function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="relative group">
      {/* The "Glow" behind the card on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-transparent transition-all duration-500">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-60 group-hover:opacity-100"
          />
        </div>
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{title}</h3>
          <p className="text-slate-400 mb-4 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700 group-hover:border-blue-500/50 transition">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800 sticky top-0 bg-slate-900/80 backdrop-blur-md z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          KRISTIANS.DEV
        </h1>
        <div className="space-x-6 text-slate-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 text-center">
          <h2 className="text-6xl font-extrabold mb-6 tracking-tight">
            Building Digital <span className="text-blue-500">Solutions</span> from Latvia.
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            I'm a Full Stack Developer specializing in high-performance React applications for local businesses.
          </p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setLikes(likes + 1)}
              className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition transform active:scale-95"
            >
              👍 High Five {likes}
            </button>
            <button className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-bold transition">
              View My Work
            </button>
          </div>
        </header>

        {/* Projects Grid Section */}
        <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            Featured Work
            <div className="h-px bg-slate-800 flex-grow"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="The Rustic Bean"
              image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=500"
              description="High-performance landing page for a specialty coffee shop. Optimized for mobile ordering."
              tags={["React", "Tailwind", "UX Design"]}
            />
            <ProjectCard 
              title="Iron Vault Gym"
              image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500"
              description="Membership portal with scheduling and real-time class availability updates."
              tags={["React", "API Integration"]}
            />
            <ProjectCard 
              title="Daugavpils Dine"
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500"
              description="Redesigned the digital presence for a local bistro. Replaced PDF menus with mobile-first web views."
              tags={["Local SEO", "UX", "React"]}
            />
          </div>
        </section>
      </main>
      <section className="max-w-6xl mx-auto py-20 px-6">
  <div className="grid md:grid-cols-3 gap-12 text-left">
    <div>
      <div className="text-blue-500 text-3xl mb-4">🚀</div>
      <h3 className="text-xl font-bold mb-2">High Performance</h3>
      <p className="text-slate-400 text-sm">Sites that load in under 1 second. Fast sites rank better on Google and keep customers happy.</p>
    </div>
    <div>
      <div className="text-emerald-500 text-3xl mb-4">📱</div>
      <h3 className="text-xl font-bold mb-2">Mobile First</h3>
      <p className="text-slate-400 text-sm">Most customers in Latvia browse on their phones. I build for small screens first, then desktops.</p>
    </div>
    <div>
      <div className="text-purple-500 text-3xl mb-4">📈</div>
      <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
      <p className="text-slate-400 text-sm">Clean code that search engines love, helping local businesses get found by local customers.</p>
    </div>
    <div>
  <div className="text-orange-500 text-3xl mb-4">🌍</div>
  <h3 className="text-xl font-bold mb-2">Multi-language</h3>
  <p className="text-slate-400 text-sm">Full support for LV/RU/EN integrations, ensuring your business reaches everyone in the Baltic market.</p>
</div>
  </div>
</section>
{/* Pricing Section */}
<section id="pricing" className="max-w-6xl mx-auto py-20 px-6">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
    <p className="text-slate-400">Simple plans for local businesses and startups.</p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Plan 1: The "Starter" */}
    <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col">
      <h3 className="text-xl font-bold mb-2">The Landing Page</h3>
      <p className="text-slate-400 text-sm mb-6">Perfect for new businesses needing a professional presence.</p>
      <div className="text-4xl font-bold mb-6">€499<span className="text-lg text-slate-500 font-normal">/project</span></div>
      <ul className="space-y-4 mb-8 flex-grow">
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ Single Page React Site</li>
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ Mobile Responsive</li>
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ Contact Form Integration</li>
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ Basic SEO Setup</li>
      </ul>
      <button className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-700 transition font-bold">Get Started</button>
    </div>

    {/* Plan 2: The "Business" (Highlighted) */}
    <div className="relative bg-slate-800 border-2 border-blue-500 p-8 rounded-3xl flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-500/10">
      <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</div>
      <h3 className="text-xl font-bold mb-2">Business Growth</h3>
      <p className="text-slate-400 text-sm mb-6">For established businesses looking to dominate local search.</p>
      <div className="text-4xl font-bold mb-6">€999<span className="text-lg text-slate-500 font-normal">/project</span></div>
      <ul className="space-y-4 mb-8 flex-grow">
        <li className="flex items-center gap-2 text-sm text-slate-200 font-medium">✅ Up to 5 Pages</li>
        <li className="flex items-center gap-2 text-sm text-slate-200 font-medium">✅ Custom Animations</li>
        <li className="flex items-center gap-2 text-sm text-slate-200 font-medium">✅ Advanced Local SEO</li>
        <li className="flex items-center gap-2 text-sm text-slate-200 font-medium">✅ Google Maps Integration</li>
        <li className="flex items-center gap-2 text-sm text-slate-200 font-medium">✅ Multi-language (LV/RU/EN)</li>
      </ul>
      <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-bold shadow-lg shadow-blue-600/20">Start Building</button>
    </div>

    {/* Plan 3: The "Custom" */}
    <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col">
      <h3 className="text-xl font-bold mb-2">Custom App</h3>
      <p className="text-slate-400 text-sm mb-6">Complex solutions with databases and user authentication.</p>
      <div className="text-4xl font-bold mb-6 italic text-slate-400 text-2xl">Custom</div>
      <ul className="space-y-4 mb-8 flex-grow">
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ User Login/Portals</li>
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ Database Integration</li>
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ E-commerce Functionality</li>
        <li className="flex items-center gap-2 text-sm text-slate-300">✅ 3 Months Support</li>
      </ul>
      <button className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-700 transition font-bold">Contact for Quote</button>
    </div>
  </div>
</section>
      <section id="contact" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4">Ready to upgrade your business?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            I'm currently accepting new projects in Riga and remotely.
          </p>
          <a 
            href="mailto:leposhe@gmail.com?subject=Project Inquiry - [Your Name]"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-10 py-4 rounded-full transition transform hover:scale-105 shadow-xl shadow-emerald-500/20"
          >
            Start a Conversation
          </a>
        </div>
      </section>
      
      {/* Simple Footer */}
      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Kristians. Built in Riga, Latvia.</p>
        
      </footer>
    </div>
  )
}

export default App