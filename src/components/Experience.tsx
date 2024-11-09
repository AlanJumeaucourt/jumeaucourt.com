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
        'Proposed and implemented automation solutions to streamline deployment processes',
        'Led initiative to improve documentation practices and knowledge sharing',
        'Independently managed client projects from analysis to implementation',
        'Proactively identified and resolved system bottlenecks',
        'Developed innovative solutions for complex client requirements'
      ]
    },
    {
      company: 'EDF',
      position: 'Telecom Operations Manager',
      period: '2020 - 2022',
      description: [
        'Initiated and led infrastructure improvement projects',
        'Developed and implemented new monitoring solutions',
        'Autonomously managed critical telecommunications systems',
        'Proposed and executed system optimization strategies',
        'Created innovative solutions for operational challenges'
      ]
    },
    {
      company: 'Early Career Internships',
      position: 'IT & Telecom Intern',
      period: '2017 - 2019',
      description: [
        'Évreux Portes de Normandie - IT Systems Support (Nov 2019)',
        'EET Service - IP Telephony Systems (Apr-May 2019)',
        'CAF de l\'Eure - IT Infrastructure Support (Nov 2019)',
        'Centre Hospitalier de Bernay - IT Systems Management (Jun 2018)',
        'LBCDI - IT Support and Maintenance (Dec 2017)'
      ],
      subDescription: [
        'Gained hands-on experience in various IT environments',
        'Developed understanding of enterprise systems and networks',
        'Worked with diverse technologies and infrastructures',
        'Contributed to system maintenance and user support'
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
                  <li key={i} className={exp.company === 'Early Career Internships' ? 'font-medium' : ''}>
                    {item}
                  </li>
                ))}
                {exp.subDescription && (
                  <div className="mt-4 ml-4">
                    {exp.subDescription.map((item, i) => (
                      <li key={i} className="text-gray-400">
                        {item}
                      </li>
                    ))}
                  </div>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;