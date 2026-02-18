import { useState, useEffect } from 'react'

// --- Data ---
const SKILLS = ["React", "Node.js", "Tailwind CSS", "JavaScript", "TypeScript", "GitHub", "Netlify", "Cursor", "PostgreSQL", "Firebase", "Vite", "SEO"];

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
    longDescription: "Integrated a custom API for real-time scheduling. Built with a high-availability backend to support 500+ active members.",
    tags: ["React", "API Integration", "Node.js"]
  },
  {
    title: "Daugavpils Dine",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=500",
    description: "Mobile-first digital menu and reservation system for a bistro.",
    longDescription: "Replaced PDF menus with a dynamic web view. Included multi-language support (LV/RU/EN) to cater to the local demographic.",
    tags: ["Local SEO", "UX", "React"]
  }
];

const TESTIMONIALS = [
  {
    quote: "Kristians transformed our coffee shop's digital presence. Our mobile orders increased by 40% in the first month!",
    author: "Māris Bērziņš",
    role: "Owner, The Rustic Bean",
    image: "https://i.pravatar.cc/150?u=maris"
  },
  {
    quote: "The multi-language support was a game changer for our business in the Baltics. Professional, fast, and high-quality code.",
    author: "Elena Petrova",
    role: "Marketing Director, Dine Group",
    image: "https://i.pravatar.cc/150?u=viktors" 
  },
  {
    quote: "I've worked with many devs, but Kristians' focus on speed and SEO is what sets him apart. Our gym site now ranks #1 locally.",
    author: "Viktors Kalniņš",
    role: "Founder, Iron Vault",
    image: "https://i.pravatar.cc/150?u=elena" 
  }
];

// --- Components ---

function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer text-left" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative bg-slate-900 border border-slate-700 px-2 py-1 rounded-lg">
          <span className="text-blue-500 font-mono font-bold group-hover:text-white transition-colors">&lt;/&gt;</span>
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-500">
          KRISTIANS
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 mt-1">Solutions</span>
      </div>
    </div>
  );
}

function SkillsMarquee() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-10 overflow-hidden select-none">
      <div className="flex w-max animate-marquee hover:pause">
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <div key={i} className="mx-8 flex items-center gap-2">
            <span className="text-2xl font-bold text-slate-700 hover:text-blue-500 transition-colors uppercase tracking-widest">{skill}</span>
            <span className="text-blue-500/30 text-2xl">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <div onClick={() => onClick(project)} className="relative group cursor-pointer text-left">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-transparent transition-all duration-500">
        <div className="h-48 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500 opacity-60 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">{project.title}</h3>
          <p className="text-slate-400 mb-4 text-sm line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main App ---

export default function App() {
  const [likes, setLikes] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then((res) => {
        if (res.ok) setSubmitted(true);
        else throw new Error("Form submission failed");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl transition-all duration-300 transform ${showScroll ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800 sticky top-0 bg-slate-900/80 backdrop-blur-md z-40">
        <Logo />
        <div className="space-x-6 text-slate-400 font-medium hidden md:block">
          <a href="#projects" className="hover:text-white transition">Portfolio</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <header className="max-w-4xl mx-auto pt-24 pb-16 px-6 text-center">
          <h2 className="text-6xl font-extrabold mb-6 tracking-tight">Building Digital <span className="text-blue-500">Solutions</span> from Latvia.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Full Stack Developer specializing in high-performance React applications for local businesses.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setLikes(likes + 1)} className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition transform active:scale-95 shadow-lg shadow-blue-600/20">👍 High Five {likes}</button>
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-bold transition text-white">View My Work</button>
          </div>
        </header>

        <SkillsMarquee />

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-left uppercase tracking-widest text-white">Featured Work <div className="h-px bg-slate-800 flex-grow"></div></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} onClick={setSelectedProject} />)}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="max-w-6xl mx-auto py-20 px-6 border-t border-slate-800/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: "🚀", title: "High Performance", desc: "Sites that load in under 1 second. Speed is the #1 ranking factor." },
              { icon: "📱", title: "Mobile First", desc: "Pixel-perfect on every screen. Optimized for modern mobile users." },
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

        {/* Pricing with Subtle Outline Glow */}
        <section id="pricing" className="max-w-6xl mx-auto py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-slate-400">Simple plans for local businesses and startups.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left items-start">
            
            {/* Starter */}
            <div className="relative group cursor-default">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-10 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl transition duration-300 hover:border-transparent">
                <h3 className="text-xl font-bold mb-2">The Landing Page</h3>
                <div className="text-4xl font-bold mb-6 text-white">€499</div>
                <ul className="space-y-4 mb-8 text-sm text-slate-300 font-medium">
                  <li>✅ Single Page React Site</li>
                  <li>✅ Contact Form Integration</li>
                  <li>✅ Basic SEO Setup</li>
                </ul>
                <button onClick={() => {setIsFormOpen(true); document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-800 font-bold transition">Get Started</button>
              </div>
            </div>

            {/* Business (Most Popular) */}
            <div className="relative group transform md:-translate-y-4 scale-[1.02] cursor-default">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-800 border-2 border-blue-500/50 p-8 rounded-3xl shadow-2xl">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">Most Popular</div>
                <h3 className="text-xl font-bold mb-2 text-white">Business Growth</h3>
                <div className="text-4xl font-bold mb-6 text-white">€999</div>
                <ul className="space-y-4 mb-8 text-sm text-slate-200 font-medium">
                  <li>✅ Up to 5 Pages</li>
                  <li>✅ Custom Animations</li>
                  <li>✅ Multi-language (LV/RU/EN)</li>
                </ul>
                <button onClick={() => {setIsFormOpen(true); document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold transition shadow-lg text-white">Start Building</button>
              </div>
            </div>

            {/* Custom */}
            <div className="relative group cursor-default">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-3xl blur opacity-10 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-3xl transition duration-300 hover:border-transparent">
                <h3 className="text-xl font-bold mb-2">Custom App</h3>
                <div className="text-4xl font-bold mb-6 italic text-slate-500">Custom</div>
                <ul className="space-y-4 mb-8 text-sm text-slate-300 font-medium">
                  <li>✅ User Login/Portals</li>
                  <li>✅ Database Integration</li>
                  <li>✅ E-commerce Setup</li>
                </ul>
                <button onClick={() => {setIsFormOpen(true); document.getElementById('contact').scrollIntoView({behavior:'smooth'})}} className="w-full py-3 rounded-xl border border-slate-600 hover:bg-slate-800 font-bold transition">Contact Me</button>
              </div>
            </div>

          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-6xl mx-auto py-24 px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white uppercase tracking-widest">Client Feedback</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-800 p-8 rounded-3xl relative hover:border-slate-700 transition-all group">
                <div className="absolute -top-4 -left-2 text-6xl text-blue-500/20 group-hover:text-blue-500/40 transition-colors select-none font-serif">“</div>
                <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed font-medium">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.author}</h4>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-4xl mx-auto py-24 px-6 text-center">
          <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-500">
            {submitted ? (
              <div className="py-12 animate-in fade-in zoom-in">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold mb-2">Message Received!</h2>
                <p className="text-slate-400">Thank you! I'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setIsFormOpen(false); }} className="mt-8 text-blue-400 hover:underline">Send another message</button>
              </div>
            ) : (
              <>
                {!isFormOpen ? (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h2 className="text-4xl font-bold mb-4 text-white">Ready to upgrade your business?</h2>
                    <p className="text-slate-400 mb-10 text-lg">Accepting projects in Riga and remotely.</p>
                    <button onClick={() => setIsFormOpen(true)} className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-10 py-4 rounded-full transition transform hover:scale-105 shadow-xl shadow-emerald-500/20">
                      Start a Conversation
                    </button>
                  </div>
                ) : (
                  <div className="animate-in fade-in zoom-in duration-500">
                    <div className="flex justify-between items-center mb-8 text-left">
                      <h2 className="text-3xl font-bold text-white">Project Inquiry</h2>
                      <button onClick={() => setIsFormOpen(false)} className="text-slate-500 hover:text-white transition font-bold uppercase text-xs">✕ Close</button>
                    </div>
                    <form onSubmit={handleSubmit} name="portfolio-contact" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <input type="hidden" name="form-name" value="portfolio-contact" />
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-300">Full Name</label>
                        <input type="text" name="name" required placeholder="John Doe" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-slate-300">Email Address</label>
                        <input type="email" name="email" required placeholder="john@company.com" className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition" />
                      </div>
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <label className="text-sm font-semibold text-slate-300">Message</label>
                        <textarea name="message" required rows="4" placeholder="Tell me about your goals..." className="bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition"></textarea>
                      </div>
                      <button type="submit" className="md:col-span-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-4 rounded-xl transition shadow-xl shadow-emerald-500/20">Send Message</button>
                    </form>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-slideUp">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-slate-800 text-white p-2 rounded-full z-10 transition">✕</button>
            <img src={selectedProject.image} className="w-full h-64 object-cover" alt={selectedProject.title} />
            <div className="p-8 text-left">
              <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h2>
              <p className="text-slate-400 mb-6 leading-relaxed font-medium">{selectedProject.longDescription}</p>
              <div className="flex gap-4">
                <button className="flex-grow bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-500 transition">Live Demo</button>
                <button className="flex-grow border border-slate-700 py-3 rounded-xl font-bold hover:bg-slate-800 transition">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Logo />
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Building high-performance digital products for local businesses and global startups. Focused on React, speed, and conversion-driven design.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">
                Available for new projects
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400 text-left">
              <li><a href="#projects" className="hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Connect</h4>
            <ul className="space-y-4 text-sm text-slate-400 text-left">
              <li><a href="#" className="hover:text-blue-400 transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">GitHub</a></li>
              <li className="text-slate-500 pt-2 border-t border-slate-800 text-left">
                <span className="block text-white font-semibold mb-1">Based in:</span>
                Riga, Latvia
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} KRISTIANS Solutions. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <span className="hover:text-slate-400 cursor-help transition">Terms</span>
            <span className="hover:text-slate-400 cursor-help transition">Privacy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}