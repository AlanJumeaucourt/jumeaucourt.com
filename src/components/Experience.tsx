import React from 'react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();
  
  const experiences = [
    {
      company: 'Avencall / XiVO',
      position: t('experience.positions.xivo'),
      period: '2022 - Present',
      description: [
        t('experience.xivo.desc1'),
        t('experience.xivo.desc2'),
        t('experience.xivo.desc3'),
        t('experience.xivo.desc4'),
        t('experience.xivo.desc5')
      ]
    },
    {
      company: 'EDF',
      position: t('experience.positions.edf'),
      period: '2020 - 2022',
      description: [
        t('experience.edf.desc1'),
        t('experience.edf.desc2'),
        t('experience.edf.desc3'),
        t('experience.edf.desc4'),
        t('experience.edf.desc5')
      ]
    },
    {
      company: t('experience.internships.title'),
      position: t('experience.internships.position'),
      period: '2017 - 2019',
      description: [
        t('experience.internships.desc1'),
        t('experience.internships.desc2'),
        t('experience.internships.desc3'),
        t('experience.internships.desc4'),
        t('experience.internships.desc5')
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          {t('experience.title')}
        </h2>
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