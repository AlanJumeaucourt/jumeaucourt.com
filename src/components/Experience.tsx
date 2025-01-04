import { Briefcase, Globe, GraduationCap, School } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

// Define the Translation interface
interface Translation {
  title: string;
  experience: string;
  education: string;
  internship: string;
  apprenticeship: string
  current: string;
}

// Define the TimelineItem interface
interface TimelineItem {
  type: 'experience' | 'education' | 'internship' | 'apprenticeship';
  year: string;
  title: string;
  organization: string;
  details: string[];
  icon: React.ComponentType<any>;
  color: string;
  current: boolean;
}

// Define the TimelineData interface
interface TimelineData {
  en: TimelineItem[];
  fr: TimelineItem[];
}

const Timeline = () => {
  const { language } = useLanguage();
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const translations: { [key: string]: Translation } = {
    en: {
      title: 'Experience',
      experience: 'Experience',
      education: 'Education',
      internship: 'Internship',
      apprenticeship: 'Apprenticeship',
      current: 'Current'
    },
    fr: {
      title: 'Mon Parcours',
      experience: 'Expérience',
      education: 'Formation',
      internship: 'Stage',
      apprenticeship: 'Apprentissage',
      current: 'Actuel'
    }
  };

  const timelineData: TimelineData = {
    en: [
      {
        type: 'apprenticeship',
        year: '2022 - Now (sept 2025)',
        title: 'DevOps & VOIP Solutions Expert',
        organization: 'XiVO - Avencall',
        details: [
          'Proposed and implemented automation solutions to streamline deployment processes',
          'Led initiative to improve documentation practices and knowledge sharing',
          'Independently managed client projects from analysis to implementation',
          'Proactively identified and resolved system bottlenecks',
          'Developed innovative solutions for complex client requirements'
        ],
        icon: Briefcase,
        color: 'green',
        current: true
      },
      {
        type: 'education',
        year: '2022 - Now (sept 2025)',
        title: 'Engineering Degree in Telecommunications',
        organization: 'INSA Lyon',
        details: [
          "Advanced telecommunications",
          "Network infrastructure",
          "Systems engineering",
          "Project management"
        ],
        icon: GraduationCap,
        color: 'blue',
        current: true
      },
      {
        type: 'education',
        year: '2024 (Fall Semester)',
        title: 'Erasmus Exchange Semester',
        organization: 'Vilnius Tech, Lithuania',
        details: [
          'Courses on IoT (Internet of Things)',
          'Cloud Computing',
          'Databases',
          'Software Engineering',
          'Project Management'
        ],
        icon: School,
        color: 'purple',
        current: false
      },
      {
        type: 'education',
        year: '2020 - 2022',
        title: 'DUT Networks and Telecommunications',
        organization: 'Université de Rouen Normandie',
        details: [
          "Network fundamentals",
          "Telecommunications basics",
          "Technical foundation"
        ],
        icon: School,
        color: 'purple',
        current: false
      },
      {
        type: 'apprenticeship',
        year: '2020 - 2022',
        title: 'Telecom Operations Manager',
        organization: 'EDF - UNITEP',
        details: [
          'Initiated and led infrastructure improvement projects',
          'Developed and implemented new monitoring solutions',
          'Autonomously managed critical telecommunications systems',
          'Proposed and executed system optimization strategies',
          'Created innovative solutions for operational challenges'
        ],
        icon: Briefcase,
        color: 'green',
        current: false
      },
      {
        type: 'education',
        year: '2017 - 2020',
        title: 'Bac Pro Digital Systems',
        organization: 'Lycée Louis Modeste Leroy',
        details: [
          "Digital systems",
          "Electronics",
          "Technical training"
        ],
        icon: School,
        color: 'orange',
        current: false
      },
      {
        type: 'internship',
        year: '2017 - 2020',
        title: 'IT & Telecom Intern',
        organization: 'Various Organizations',
        details: [
          'Évreux Portes de Normandie - IT Systems Support (Nov 2019)',
          'EET Service - IP Telephony Systems (Apr-May 2019)',
          'CAF de l\'Eure - IT Infrastructure Support (Nov 2019)',
          'Centre Hospitalier de Bernay - IT Systems Management (Jun 2018)',
          'LBCDI - IT Support and Maintenance (Dec 2017)'
        ],
        icon: Briefcase,
        color: 'green',
        current: false
      }
    ],
    fr: [
      {
        type: 'education',
        year: '2022 - Aujourd\'hui (sept 2025)',
        title: 'Diplôme d\'Ingénieur en Télécommunications',
        organization: 'INSA Lyon',
        details: [
          "Télécommunications avancées",
          "Infrastructure réseau",
          "Ingénierie des systèmes",
          "Gestion de projets"
        ],
        icon: GraduationCap,
        color: 'blue',
        current: true
      },
      {
        type: 'apprenticeship',
        year: '2022 - Aujourd\'hui (sept 2025)',
        title: 'Expert en DevOps et Solutions VOIP',
        organization: 'XiVO - Avencall',
        details: [
          'Proposition et mise en œuvre de solutions d\'automatisation pour simplifier les processus de déploiement',
          'Initié une initiative pour améliorer les pratiques de documentation et la mise en commun des connaissances',
          'Gestion autonome de projets clients, de l\'analyse à la mise en œuvre',
          'Identification proactive et résolution des bouteilles necks systémiques',
          'Développement de solutions innovantes pour les exigences complexes des clients'
        ],
        icon: Briefcase,
        color: 'green',
        current: false
      },
      {
        type: 'education',
        year: '2023 (Semestre d\'automne)',
        title: 'Semestre d\'échange Erasmus',
        organization: 'Vilnius Tech, Lituanie',
        details: [
          'Cours sur le IoT (Internet des Objets)',
          'Cloud Computing',
          'Bases de données',
          'Ingénierie logicielle',
          'Gestion de projets'
        ],
        icon: School,
        color: 'purple',
        current: false
      },
      {
        type: 'apprenticeship',
        year: '2020 - 2022',
        title: 'Responsable des Opérations Télécom',
        organization: 'EDF - UNITEP',
        details: [
          'Initié et dirigé des projets d\'amélioration de l\'infrastructure',
          'Développé et mis en œuvre de nouvelles solutions de surveillance',
          'Gestion autonome des systèmes télécoms critiques',
          'Proposition et exécution de stratégies d\'optimisation des systèmes',
          'Création de solutions innovantes pour les défis opérationnels'
        ],
        icon: Briefcase,
        color: 'green',
        current: false
      },
      {
        type: 'education',
        year: '2020 - 2022',
        title: 'DUT Réseaux et Télécommunications',
        organization: 'Université de Rouen Normandie',
        details: [
          "Fondamentaux des réseaux",
          "Bases des télécommunications",
          "Formation technique"
        ],
        icon: School,
        color: 'purple',
        current: false
      },
      {
        type: 'internship',
        year: '2017 - 2020',
        title: 'Stagiaire en IT et Télécom',
        organization: 'Diverses Organisations',
        details: [
          'Évreux Portes de Normandie - Support des Systèmes IT (Nov 2019)',
          'EET Service - Systèmes de Téléphonie IP (Avr-Mai 2019)',
          'CAF de l\'Eure - Support de l\'Infrastructures IT (Nov 2019)',
          'Centre Hospitalier de Bernay - Gestion des Systèmes IT (Juin 2018)',
          'LBCDI - Support et Maintenance IT (Déc 2017)'
        ],
        icon: Briefcase,
        color: 'green',
        current: false
      },
      {
        type: 'education',
        year: '2017 - 2020',
        title: 'Bac Pro Systèmes Numériques',
        organization: 'Lycée Louis Modeste Leroy',
        details: [
          "Systèmes numériques",
          "Électronique",
          "Formation technique"
        ],
        icon: School,
        color: 'orange',
        current: false
      },
    ]
  };

  return (
    <section
      id="timeline"
      ref={ref}
      className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">
          {translations[language].title}
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="max-md:hidden absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400/30" />

          <div className="space-y-8">
            {timelineData[language].map((item, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="max-md:hidden absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 z-10">
                  <div className="absolute w-8 h-8 rounded-full bg-blue-400/20 -left-2 -top-2 animate-ping-slow" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="card p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-100">{item.organization}</h3>
                        <p className="text-lg text-blue-400">{item.title}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-gray-400">
                          <span>{item.year}</span>
                          {item.current && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-400/10 text-blue-400">
                              {translations[language].current}
                            </span>
                          )}
                          {item.type === 'internship' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-400/20 text-green-400">
                              {translations[language].internship}
                            </span>
                          )}
                          {item.type === 'apprenticeship' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-600/20 text-green-600">
                              {translations[language].apprenticeship}
                            </span>
                          )}
                        </div>
                        <div className="mt-4 text-sm text-gray-300">
                          <ul className="list-disc list-inside">
                            {item.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-1">
                        {item.type === 'experience' ? (
                          <Briefcase className="w-6 h-6 text-blue-400" />
                        ) : item.type === 'internship' ? (
                          <Briefcase className="w-6 h-6 text-green-400" />
                        ) : item.type === 'education' ? (
                          <GraduationCap className="w-6 h-6 text-blue-400" />
                        ) : item.type === 'apprenticeship' ? (
                          <Briefcase className="w-6 h-6 text-green-600" />
                        ) : (
                          <Globe className="w-6 h-6 text-blue-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
