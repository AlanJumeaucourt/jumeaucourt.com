import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

const Education = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();
  const education = [
    {
      school: 'INSA Lyon',
      degree: t('education.degrees.insa'),
      period: '2022 - 2025',
      current: true
    },
    {
      school: 'Vilnius Tech',
      degree: t('education.degrees.vilnius'),
      period: '2024 - 2024'
    },
    {
      school: 'Université de Rouen Normandie',
      degree: t('education.degrees.rouen'),
      period: '2020 - 2022'
    },
    {
      school: 'Lycée Louis Modeste Leroy',
      degree: t('education.degrees.leroy'),
      period: '2017 - 2020'
    }
  ];

  return (
    <section id="education" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          {t('education.title')}
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-100">{edu.school}</h3>
                      <p className="text-lg text-blue-400">{edu.degree}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-400">{edu.period}</span>
                      {edu.current && (
                        <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                          {t('education.current')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;