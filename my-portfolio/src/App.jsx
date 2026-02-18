import { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          KRISTIANS.DEV
        </h1>
        <div className="space-x-6 text-slate-400">
          <a href="#" className="hover:text-white transition">Projects</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto pt-20 px-6 text-center">
        <h2 className="text-6xl font-extrabold mb-6">
          Building Digital <span className="text-blue-500">Solutions</span> from Latvia.
        </h2>
        <p className="text-xl text-slate-400 mb-10">
          I'm a Full Stack Developer specializing in high-performance React applications.
        </p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setLikes(likes + 1)}
            className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-bold transition transform hover:scale-105"
          >
            👍 High Five {likes}
          </button>
          <button className="border border-slate-700 hover:bg-slate-800 px-8 py-3 rounded-full font-bold transition">
            View My Work
          </button>
        </div>
      </main>
    </div>
  )
}

export default App