import { Cpu, Phone, Server, Terminal, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number; // 1-5
}

const Skills = () => {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'What I\'m Good At',
      categories: {
        devops: {
          title: 'DevOps',
          skills: [
            { name: 'CI/CD', level: 5 },
            { name: 'Docker', level: 5 },
            { name: 'Kubernetes', level: 4 },
            { name: 'Jenkins', level: 4 },
            { name: 'Git', level: 5 },
            { name: 'Ansible', level: 4 }
          ]
        },
        voip: {
          title: 'VOIP & Telecom',
          skills: [
            { name: 'XiVO', level: 5 },
            { name: 'Asterisk', level: 4 },
            { name: 'SIP', level: 5 },
            { name: 'WebRTC', level: 4 },
            { name: 'VoIP Architecture', level: 5 }
          ]
        },
        infrastructure: {
          title: 'Infrastructure',
          skills: [
            { name: 'Linux', level: 5 },
            { name: 'AWS', level: 4 },
            { name: 'Network Administration', level: 5 },
            { name: 'Security', level: 4 }
          ]
        },
        systems: {
          title: 'Systems',
          skills: [
            { name: 'System Architecture', level: 5 },
            { name: 'Monitoring', level: 4 },
            { name: 'Troubleshooting', level: 5 },
            { name: 'Performance Optimization', level: 4 }
          ]
        },
        leadership: {
          title: 'Leadership',
          skills: [
            { name: 'Project Initiative', level: 4 },
            { name: 'Autonomous Problem Solving', level: 5 },
            { name: 'Strategic Planning', level: 4 },
            { name: 'Innovation Leadership', level: 4 },
            { name: 'Process Optimization', level: 5 }
          ]
        }
      }
    },
    fr: {
      title: 'Ce Que Je Sais Faire',
      categories: {
        devops: {
          title: 'DevOps',
          skills: [
            { name: 'CI/CD', level: 5 },
            { name: 'Docker', level: 5 },
            { name: 'Kubernetes', level: 4 },
            { name: 'Jenkins', level: 4 },
            { name: 'Git', level: 5 },
            { name: 'Ansible', level: 4 }
          ]
        },
        voip: {
          title: 'VOIP & Télécom',
          skills: [
            { name: 'XiVO', level: 5 },
            { name: 'Asterisk', level: 4 },
            { name: 'SIP', level: 5 },
            { name: 'WebRTC', level: 4 },
            { name: 'Architecture VoIP', level: 5 }
          ]
        },
        infrastructure: {
          title: 'Infrastructure',
          skills: [
            { name: 'Linux', level: 5 },
            { name: 'AWS', level: 4 },
            { name: 'Administration Réseau', level: 5 },
            { name: 'Sécurité', level: 4 }
          ]
        },
        systems: {
          title: 'Systèmes',
          skills: [
            { name: 'Architecture Système', level: 5 },
            { name: 'Monitoring', level: 4 },
            { name: 'Résolution de Problèmes', level: 5 },
            { name: 'Optimisation des Performances', level: 4 }
          ]
        },
        leadership: {
          title: 'Leadership',
          skills: [
            { name: 'Initiative de Projet', level: 4 },
            { name: 'Résolution Autonome de Problèmes', level: 5 },
            { name: 'Planification Stratégique', level: 4 },
            { name: 'Leadership en Innovation', level: 4 },
            { name: 'Optimisation des Processus', level: 5 }
          ]
        }
      }
    }
  };

  const skillCategories = [
    {
      key: 'devops',
      icon: <Terminal className="w-8 h-8 text-blue-400" />
    },
    {
      key: 'voip',
      icon: <Phone className="w-8 h-8 text-blue-400" />
    },
    {
      key: 'infrastructure',
      icon: <Server className="w-8 h-8 text-blue-400" />
    },
    {
      key: 'systems',
      icon: <Cpu className="w-8 h-8 text-blue-400" />
    },
    {
      key: 'leadership',
      icon: <Users className="w-8 h-8 text-blue-400" />
    }
  ] as const;

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={`h-1.5 w-3 rounded-full ${
              value <= level ? 'bg-blue-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          {translations[language].title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-100">
                  {translations[language].categories[category.key].title}
                </h3>
              </div>
              <div className="space-y-4">
                {translations[language].categories[category.key].skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group hover:bg-gray-700/70 rounded-lg px-3 py-2 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      {renderSkillLevel(skill.level)}
                    </div>
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
