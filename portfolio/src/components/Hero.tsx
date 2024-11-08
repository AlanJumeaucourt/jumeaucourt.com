import React from 'react';
import { Server, Terminal } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Hero = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className={`pt-32 pb-16 relative section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center space-x-4">
          <Server className="w-12 h-12 text-blue-400 animate-float" style={{ animationDelay: '0.2s' }} />
          <Terminal className="w-12 h-12 text-blue-400 animate-float" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          Alan Jumeaucourt
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8">
          DevOps Engineer & VOIP Expert
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate about building robust infrastructure and streamlining communications through innovative VOIP solutions. Based in Lyon, France.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="#contact" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a 
            href="#experience" 
            className="bg-gray-800 text-gray-300 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;