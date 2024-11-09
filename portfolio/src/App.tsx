import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TravelMap from './components/TravelMap';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20 relative">
        <Hero />
        <Projects />
        <TravelMap />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Alan Jumeaucourt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;