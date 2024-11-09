import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const { ref, isInView } = useInView();

  const projects = [
    {
      title: 'Smart Home Automation',
      description: 'A complete home automation system built with Raspberry Pi and custom IoT devices. Features include temperature control, lighting automation, and security monitoring.',
      technologies: ['Python', 'Node.js', 'MQTT', 'React'],
      github: 'https://github.com/AlanJumeaucourt/smart-home',
      live: 'https://smart-home.jumeaucourt.com',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'VOIP Analytics Dashboard',
      description: 'A real-time analytics dashboard for monitoring VOIP systems. Provides insights into call quality, network performance, and system health.',
      technologies: ['Vue.js', 'Express', 'WebSocket', 'D3.js'],
      github: 'https://github.com/AlanJumeaucourt/voip-analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <section id="projects" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 