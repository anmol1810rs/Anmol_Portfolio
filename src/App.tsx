import React, { useState } from 'react';
import { Terminal, Brain, Code2, BookOpen } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Chatbot from './components/Chatbot';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Anmol Malhotra
            </h1>
            <div className="flex space-x-6">
              <NavButton icon={<Terminal size={20} />} label="Skills" onClick={() => setActiveSection('skills')} active={activeSection === 'skills'} />
              <NavButton icon={<Code2 size={20} />} label="Experience" onClick={() => setActiveSection('experience')} active={activeSection === 'experience'} />
              <NavButton icon={<Brain size={20} />} label="Projects" onClick={() => setActiveSection('projects')} active={activeSection === 'projects'} />
              <NavButton icon={<BookOpen size={20} />} label="Education" onClick={() => setActiveSection('education')} active={activeSection === 'education'} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {activeSection === 'hero' && <Hero />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'education' && <Education />}
      </main>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

const NavButton = ({ icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
      active ? 'bg-violet-600 text-white' : 'hover:bg-gray-800'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

export default App;