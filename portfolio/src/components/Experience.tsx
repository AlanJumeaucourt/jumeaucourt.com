import React from 'react';
import { useInView } from '../hooks/useInView';

const Experience = () => {
  const { ref, isInView } = useInView();
  
  const experiences = [
    {
      company: 'Avencall / XiVO',
      position: 'Expert DevOps de solutions VOIP',
      period: '2022 - Present',
      description: [
        'Integration and deployment of XiVO solutions',
        'Client needs analysis and qualification',
        'Technical documentation and training',
        'Solution administration and updates'
      ]
    },
    {
      company: 'EDF',
      position: 'Telecom Operations Manager',
      period: '2020 - 2022',
      description: [
        'Voice Data Image systems management',
        'Telecommunication infrastructure administration',
        'Technical team coordination',
        'Project management and implementation'
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-100">{exp.company}</h3>
                  <p className="text-lg text-blue-400">{exp.position}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;