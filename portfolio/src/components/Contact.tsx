import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-400">Get in Touch</h2>
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://github.com/AlanJumeaucourt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/alan-jumeaucourt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:contact@jumeaucourt.com"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
        </div>
        <div className="card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          <p className="text-xl text-gray-300 mb-8">
            Looking for a DevOps expert or need help with VOIP solutions? Let's connect and discuss how I can help you achieve your goals.
          </p>
          <a 
            href="mailto:contact@jumeaucourt.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;