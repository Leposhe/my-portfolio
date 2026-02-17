import { useState } from 'react' // We import the "Brain"
import './App.css'

function App() {
  // This is your "State". It remembers things.
  const [likes, setLikes] = useState(0)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="portfolio-container">
      
      <h1>Kristians' Portfolio</h1>
      <h3>React Developer | 2026</h3>
      
      <p>Building fast, interactive web apps from anywhere in the world.</p>

      {/* Interactive Button 1: The "Like" Counter */}
      <div className="card">
        <button onClick={() => setLikes(likes + 1)}>
           👍 Give me a Like ({likes})
        </button>
      </div>

      {/* Interactive Button 2: The "Contact" Toggle */}
      <div className="card">
        <button onClick={() => setContactOpen(!contactOpen)}>
           {contactOpen ? "Close Form" : "Hire Me"}
        </button>

        {/* This only shows if contactOpen is TRUE */}
        {contactOpen && (
          <div className="contact-form">
            <p>📧 Email me at: <a href="mailto:leposhe@gmail.com">leposhe@gmail.com</a></p>
          </div>
        )}
      </div>

    </div>
  )
}

export default App