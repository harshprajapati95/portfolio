import { useState } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <NavBar />
        <Hero />
        
        {/* About Me Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-6 py-24">
          <div className="max-w-6xl w-full">
            <AboutMe />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24">
          <div className="max-w-6xl w-full">
            <Skills />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-24">
          <div className="max-w-6xl w-full">
            <Projects />
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24">
          <div className="max-w-6xl w-full">
            <Education />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 px-6 py-24">
          <div className="max-w-6xl w-full">
            <Contact />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
