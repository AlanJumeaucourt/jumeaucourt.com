import React from 'react';
import { Server, Phone, Terminal, Cpu, Users } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const { ref, isInView } = useInView();
  
  const skillCategories = [
    {
      title: 'DevOps',
      icon: <Terminal className="w-8 h-8 text-blue-400" />,
      skills: ['CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Ansible']
    },
    {
      title: 'VOIP & Telecom',
      icon: <Phone className="w-8 h-8 text-blue-400" />,
      skills: ['XiVO', 'Asterisk', 'SIP', 'WebRTC', 'VoIP Architecture']
    },
    {
      title: 'Infrastructure',
      icon: <Server className="w-8 h-8 text-blue-400" />,
      skills: ['Linux', 'AWS', 'Network Administration', 'Security']
    },
    {
      title: 'Systems',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      skills: ['System Architecture', 'Monitoring', 'Troubleshooting', 'Performance Optimization']
    },
    {
      title: 'Leadership',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      skills: [
        'Project Initiative',
        'Autonomous Problem Solving',
        'Strategic Planning',
        'Innovation Leadership',
        'Process Optimization'
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-100">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i}
                    className="bg-gray-700/50 rounded-lg px-3 py-2 text-gray-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;