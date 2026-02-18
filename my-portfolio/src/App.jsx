import { useState } from 'react'

// Updated Component with Image Support
function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition group">
      <div className="h-48 overflow-hidden bg-slate-700">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100"
        />
      </div>
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">
              {tag}
            </span>
          ))}
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
          <a href="#" className="hover:text-white transition">Contact</a>
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

      {/* Simple Footer */}
      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Kristians. Built in Riga, Latvia.</p>
        {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center">
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-4">Ready to upgrade your business?</h2>
          <p className="text-slate-400 mb-8 text-lg">
            I'm currently accepting new projects in Daugavpils and remotely.
          </p>
          <a 
            href="mailto:leposhe@gmail.com?subject=Project Inquiry - [Your Name]"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-10 py-4 rounded-full transition transform hover:scale-105 shadow-xl shadow-emerald-500/20"
          >
            Start a Conversation
          </a>
        </div>
      </section>
      </footer>
    </div>
  )
}

export default App