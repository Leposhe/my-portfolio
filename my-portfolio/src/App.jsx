import { useState, useEffect } from 'react'

// --- Data ---

const SKILLS = [
  "React", "Node.js", "Tailwind CSS", "JavaScript", 
  "TypeScript", "GitHub", "Netlify", "Cursor", 
  "PostgreSQL", "Firebase", "Vite", "SEO"
];

const PROJECTS = [
  {
    title: "The Rustic Bean",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=500",
    description: "High-performance landing page for a specialty coffee shop.",
    longDescription: "Rebuilt a legacy WordPress site into a lightning-fast React application. Achieved a 100/100 Lighthouse score and improved mobile conversion by 40% using optimized images and modern CSS.",
    tags: ["React", "Tailwind", "UX Design"]
  },
  {
    title: "Iron Vault Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=500",
    description: "Membership portal with real-time class availability updates.",
    longDescription: "Integrated a custom API for real-time scheduling. Built with a high-availability backend to support 500+ active members with push notifications for class cancellations.",
    tags: ["React", "API Integration", "Node.js"]
  },
  {
    title: "Daugavpils Dine",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500",
    description: "Mobile-first digital menu and reservation system for a bistro.",
    longDescription: "Replaced PDF menus with a dynamic web view. Included multi-language support (LV/RU/EN) to cater to the local demographic and integrated a table booking widget.",
    tags: ["Local SEO", "UX", "React"]
  }
];

// --- Components ---

function SkillsMarquee() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-10 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:pause">
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div key={i} className="mx-8 flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-700 hover:text-blue-500 transition-colors uppercase tracking-widest">
              {skill}
            </span>
            <span className="text-blue-500/30 text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div onClick={() => onClick(project)} className="relative group cursor-pointer">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-transparent transition-all duration-500">
        <div className="h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-60 group-hover:opacity-100"
          />
        </div>
        <div className="p-6 text-left">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h3>
          <p className="text-slate-400 mb-4 text-sm line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Modal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-slideUp">
        <button onClick={onClose} className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-full z-10">✕</button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">{project.longDescription}</p>
          <div className="flex gap-4">
            <button className="flex-grow bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-bold transition">Live Demo</button>
            <button className="flex-grow border border-slate-700 hover:bg-slate-800 py-3 rounded-xl font-bold transition">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Main App ---

export default function App() {
  const [likes, setLikes] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error))
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800 sticky top-0 bg-slate-900/80 backdrop-blur-md z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">KRISTIANS.DEV</h1>
        <div className="space-x-6 text-slate-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 text-center">
          <h2 className="text-6xl font-extrabold mb-6 tracking-tight">Building Digital <span className="text-blue-500">Solutions</span> from Latvia.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Full Stack Developer specializing in high-performance React applications for local businesses.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setLikes(likes + 1)} className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition transform active:scale-95">👍 High Five {likes}</button>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-bold transition">View My Work</button>
          </div>
        </header>

        {/* Skills Marquee */}
        <SkillsMarquee />

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">Featured Work <div className="h-px bg-slate-800 flex-grow"></div></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} onClick={setSelectedProject} />)}
          </div>
        </section>

        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />

        {/* Services Section */}
        <section className="max-w-6xl mx-auto py-20 px-6 border-t border-slate-800/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: "🚀", title: "High Performance", desc: "Sites that load in under 1 second. Speed is the #1 ranking factor." },
              { icon: "📱", title: "Mobile First", desc: "Pixel-perfect on every screen. Optimized for the modern mobile user." },
              { icon: "📈", title: "SEO Optimized", desc: "Structured data and clean code to help you climb Google rankings." },
              { icon: "🌍", title: "Multi-language", desc: "Full LV/RU/EN support to capture the entire Baltic market." }
            ].map((s, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-800/20 border border-slate-800 hover:border-slate-700 transition-all group">
                <div className="text-4xl mb-6 transition-transform group-hover:scale-125 duration-300 inline-block">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-6xl mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-slate-400">Simple plans for local businesses and startups.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-start text-left">
            <div className="group bg-slate-800/40 border border-slate-700 p-8 rounded-3xl flex flex-col transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">The Landing Page</h3>
              <div className="text-4xl font-bold mb-6">€499</div>
              <ul className="space-y-4 mb-8 flex-grow text-sm text-slate-300">
                <li>✅ Single Page React Site</li>
                <li>✅ Contact Form Integration</li>
                <li>✅ Basic SEO Setup</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-600 group-hover:bg-blue-500/10 font-bold transition-all">Get Started</button>
            </div>
            <div className="relative bg-slate-800 border-2 border-blue-500 p-8 rounded-3xl flex flex-col transform md:-translate-y-4 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/40">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase animate-pulse">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">Business Growth</h3>
              <div className="text-4xl font-bold mb-6">€999</div>
              <ul className="space-y-4 mb-8 flex-grow text-sm text-slate-200">
                <li>✅ Up to 5 Pages</li>
                <li>✅ Custom Animations</li>
                <li>✅ Multi-language (LV/RU/EN)</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold transition-all">Start Building</button>
            </div>
            <div className="group bg-slate-800/40 border border-slate-700 p-8 rounded-3xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-500/5">
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">Custom App</h3>
              <div className="text-4xl font-bold mb-6 italic text-slate-500">Custom</div>
              <ul className="space-y-4 mb-8 flex-grow text-sm text-slate-300">
                <li>✅ User Login/Portals</li>
                <li>✅ Database Integration</li>
                <li>✅ E-commerce Setup</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-slate-600 group-hover:bg-purple-500/10 font-bold transition-all">Contact Me</button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-4xl mx-auto py-24 px-6 text-center">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl">
            {!submitted ? (
              <>
                <h2 className="text-4xl font-bold mb-4">Ready to upgrade?</h2>
                <p className="text-slate-400 mb-10 text-lg">Currently accepting new projects in Riga and Daugavpils.</p>
                <form onSubmit={handleSubmit} data-netlify="true" name="portfolio-contact" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <input type="hidden" name="form-name" value="portfolio-contact" />
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Name</label>
                    <input type="text" name="name" required placeholder="Jūsu vārds" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                    <input type="email" name="email" required placeholder="vards@pasts.lv" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" />
                  </div>
                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                    <textarea name="message" required rows="4" placeholder="How can I help your business?" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition"></textarea>
                  </div>
                  <button type="submit" className="md:col-span-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-xl transition transform hover:scale-[1.02] shadow-xl shadow-emerald-500/20">
                    Send Inquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold mb-2">Message Received!</h2>
                <p className="text-slate-400">Paldies! I'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-400 hover:underline transition">Send another message</button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-slate-500 border-t border-slate-800">
        <p>© 2026 Kristians. Built in Riga, Latvia.</p>
      </footer>
    </div>
  )
}