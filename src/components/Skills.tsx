import { Cpu, Phone, Server, Terminal, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number; // 1-5
}

const Skills = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();
  const skillCategories = [
    {
      title: 'DevOps',
      icon: <Terminal className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: 'CI/CD', level: 5 },
        { name: 'Docker', level: 5 },
        { name: 'Kubernetes', level: 4 },
        { name: 'Jenkins', level: 4 },
        { name: 'Git', level: 5 },
        { name: 'Ansible', level: 4 }
      ]
    },
    {
      title: 'VOIP & Telecom',
      icon: <Phone className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: 'XiVO', level: 5 },
        { name: 'Asterisk', level: 4 },
        { name: 'SIP', level: 5 },
        { name: 'WebRTC', level: 4 },
        { name: 'VoIP Architecture', level: 5 }
      ]
    },
    {
      title: 'Infrastructure',
      icon: <Server className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: 'Linux', level: 5 },
        { name: 'AWS', level: 4 },
        { name: 'Network Administration', level: 5 },
        { name: 'Security', level: 4 }
      ]
    },
    {
      title: 'Systems',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: 'System Architecture', level: 5 },
        { name: 'Monitoring', level: 4 },
        { name: 'Troubleshooting', level: 5 },
        { name: 'Performance Optimization', level: 4 }
      ]
    },
    {
      title: 'Leadership',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: 'Project Initiative', level: 4 },
        { name: 'Autonomous Problem Solving', level: 5 },
        { name: 'Strategic Planning', level: 4 },
        { name: 'Innovation Leadership', level: 4 },
        { name: 'Process Optimization', level: 5 }
      ]
    }
  ];

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
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold ml-3 text-gray-100">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
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
