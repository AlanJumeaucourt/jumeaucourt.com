import { ChevronLeft, ChevronRight, Code2, Cpu, ExternalLink, Github, Wrench } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useDeviceType } from '../hooks/useDeviceType';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  technicalHighlights?: string[];
  challenges?: string[];
  github: string;
  live?: string;
  image: {
    desktop: string;
    mobile: string;
  };
}

const Projects = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceType = useDeviceType();

  const translations = {
    en: {
      title: 'Stuff I\'ve Built',
      section: {
        technicalHighlights: 'Technical Highlights',
        challenges: 'Challenges Solved',
        technologies: 'Technologies'
      },
      links: {
        github: 'GitHub',
        liveDemo: 'Live Demo'
      },
      navigation: {
        prev: 'Previous project',
        next: 'Next project',
        projectList: 'Project navigation',
        goToProject: 'Go to project: '
      },
      projects: {
        wealth_manager: {
          title: 'Wealth Manager',
          description: 'A comprehensive personal finance management application built with React Native and Expo, featuring real-time wealth tracking, multi-account management, and smart analytics.',
          technical: [
            'Implemented real-time data synchronization using Plaid API',
            'Designed scalable SQLite database schema for financial data',
            'Built custom database with views and triggers'
          ],
          challenges: [
            'Managing financial data in a mobile environment',
            'Secure data handling for sensitive financial information'
          ]
        },
        hit_or_flop: {
          title: 'Hit or Flop',
          description: 'AI model using convolutional neural networks to predict if a song has the characteristics of a hit. Built with Python and Next.js, deployed with Docker.',
          technical: [
            'Developed custom CNN architecture for audio processing',
            'Analyzed audio features for hit/flop prediction',
            'Created containerized deployment pipeline',
            'Made a website to showcase the model'
          ],
          challenges: [
            'Processing audio datasets efficiently',
            'Optimizing model accuracy while maintaining performance'
          ]
        },
        sirlightboard: {
          title: 'SIR-Lightboard',
          description: 'Automation solution for recording and uploading educational content. Features OBS integration, file transfer automation, and custom Debian live CD for Lightboard teaching.',
          technical: [
            'Integrated OBS on linux',
            'Automated file transfer using Bash scripts',
            'Created custom Debian live CD for efficient teaching'
          ],
          challenges: [
            'Optimizing live CD performance and boot time',
            'Make everything work on a live CD (not so easy)',
            'Implementing state machine for the control commands'
          ]
        },
        nas_project: {
          title: 'NAS Project',
          description: 'Python-based automation tool for provisioning MPLS/VPN network infrastructure. Configures Cisco routers based on JSON configuration files.',
          technical: [
            'Automated provisioning of MPLS/VPN network infrastructure',
            'Configured Cisco routers using abstracted JSON configuration files'
          ],
          challenges: [
            'Assuring idempotent configuration management',
            'Handling network state consistency across devices'
          ]
        },
        this_website: {
          title: 'This Website',
          description: 'The very website you\'re looking at right now! Built with React, Tailwind CSS, and probably too much coffee.',
          technical: [
            'Built with React and TypeScript',
            'Styled using Tailwind CSS',
            'Implemented internationalization support'
          ],
          challenges: [
            'Creating a responsive and accessible design',
            'Managing state and translations efficiently'
          ]
        },
        pasta_tower: {
          title: 'The Great Pasta Tower',
          description: 'My masterpiece: a tower of pasta and scotch tape during a project management course. Engineering at its finest!',
          technical: [
            'Built a tower of pasta and scotch tape "WoW"',
            'It was taller than me (no)',
            'Make good initation and planning phase'
          ],
          challenges: [
            'Dont play with pasta while making the planning phase'
          ]
        }
      }
    },
    fr: {
      title: 'Ce Que J\'ai Créé',
      section: {
        technicalHighlights: 'Points Techniques',
        challenges: 'Défis Résolus',
        technologies: 'Technologies'
      },
      links: {
        github: 'GitHub',
        liveDemo: 'Démo en Direct'
      },
      navigation: {
        prev: 'Projet précédent',
        next: 'Projet suivant',
        projectList: 'Navigation des projets',
        goToProject: 'Aller au projet : '
      },
      projects: {
        wealth_manager: {
          title: 'Gestionnaire de Patrimoine',
          description: 'Une application complète de gestion des finances personnelles construite avec React Native et Expo, avec suivi en temps réel du patrimoine, gestion multi-comptes et analyses intelligentes.',
          technical: [
            'Implémentation de la synchronisation en temps réel avec l\'API Plaid',
            'Conception d\'un schéma de base de données SQLite évolutif pour les données financières',
            'Construction d\'une base de données personnalisée avec vues et déclencheurs'
          ],
          challenges: [
            'Gestion des données financières dans un environnement mobile',
            'Traitement sécurisé des informations financières sensibles'
          ]
        },
        hit_or_flop: {
          title: 'Hit or Flop',
          description: 'Modèle d\'IA utilisant des réseaux de neurones convolutifs pour prédire si une chanson a les caractéristiques d\'un hit. Construit avec Python et Next.js, déployé avec Docker.',
          technical: [
            'Développement d\'une architecture CNN personnalisée pour le traitement audio',
            'Analyse des caractéristiques audio pour la prédiction hit/flop',
            'Création d\'un pipeline de déploiement conteneurisé',
            'Création d\'un site web pour présenter le modèle'
          ],
          challenges: [
            'Traitement efficace des jeux de données audio',
            'Optimisation de la précision du modèle tout en maintenant les performances'
          ]
        },
        sirlightboard: {
          title: 'SIR-Lightboard',
          description: 'Solution d\'automatisation pour l\'enregistrement et le téléchargement de contenu éducatif. Intègre OBS, l\'automatisation du transfert de fichiers et un CD live Debian personnalisé pour l\'enseignement Lightboard.',
          technical: [
            'Intégration d\'OBS sur Linux',
            'Automatisation du transfert de fichiers avec des scripts Bash',
            'Création d\'un CD live Debian personnalisé pour l\'enseignement'
          ],
          challenges: [
            'Optimisation des performances et du temps de démarrage du CD live',
            'Faire fonctionner tout sur un CD live (pas si simple)',
            'Implémentation d\'une machine d\'état pour les commandes de contrôle'
          ]
        },
        nas_project: {
          title: 'Projet NAS',
          description: 'Outil d\'automatisation Python pour le provisionnement d\'infrastructure réseau MPLS/VPN. Configure les routeurs Cisco basés sur des fichiers de configuration JSON.',
          technical: [
            'Automatisation du provisionnement d\'infrastructure réseau MPLS/VPN',
            'Configuration des routeurs Cisco utilisant des fichiers JSON abstraits'
          ],
          challenges: [
            'Assurer une gestion de configuration idempotente',
            'Gérer la cohérence de l\'état du réseau entre les appareils'
          ]
        },
        this_website: {
          title: 'Ce Site Web',
          description: 'Ce site web est construit avec React, Tailwind CSS et Lucide Icons.',
          technical: [
            'Construit avec React et TypeScript',
            'Stylisé avec Tailwind CSS',
            'Implémentation du support multilingue'
          ],
          challenges: [
            'Création d\'un design responsive et accessible',
            'Gestion efficace de l\'état et des traductions'
          ]
        },
        pasta_tower: {
          title: 'Tour de Pâtes',
          description: 'Une tour de pâtes et de ruban adhésif pendant un cours de gestion de projet.',
          technical: [
            'Construction d\'une tour en pâtes et ruban adhésif',
            'Elle était plus grande que moi (non)',
            'Réalisation d\'une bonne phase d\'initiation et de planification'
          ],
          challenges: [
            'Ne pas jouer avec les pâtes pendant la phase de planification'
          ]
        }
      }
    }
  };

  const projects: Project[] = [
    {
      title: translations[language].projects.wealth_manager.title,
      description: translations[language].projects.wealth_manager.description,
      technologies: ['React Native', 'Expo', 'Flask', 'SQLite', 'TypeScript', 'Raw SQL query'],
      technicalHighlights: translations[language].projects.wealth_manager.technical,
      challenges: translations[language].projects.wealth_manager.challenges,
      github: 'https://github.com/AlanJumeaucourt/wealth_manager',
      image: {
        desktop: '/images/projects/wealth-manager/desktop.png',
        mobile: '/images/projects/wealth-manager/mobile.png'
      }
    },
    {
      title: translations[language].projects.hit_or_flop.title,
      description: translations[language].projects.hit_or_flop.description,
      technologies: ['Python', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'CNN', 'AI', 'TensorFlow'],
      technicalHighlights: translations[language].projects.hit_or_flop.technical,
      challenges: translations[language].projects.hit_or_flop.challenges,
      github: 'https://github.com/AlanJumeaucourt/hitorflop',
      live: 'https://hitorflop.myfunnycluster.dynamic-dns.net/',
      image: {
        desktop: '/images/projects/hit-or-flop/desktop.png',
        mobile: '/images/projects/hit-or-flop/mobile.png'
      }
    },
    {
      title: translations[language].projects.sirlightboard.title,
      description: translations[language].projects.sirlightboard.description,
      technologies: ['Python', 'Bash', 'OBS', 'Debian', 'SSH'],
      technicalHighlights: translations[language].projects.sirlightboard.technical,
      challenges: translations[language].projects.sirlightboard.challenges,
      github: 'https://github.com/AlanJumeaucourt/SIR-Lightboard',
      image: {
        desktop: '/images/projects/sir-lightboard/desktop.jpg',
        mobile: '/images/projects/sir-lightboard/mobile.jpg'
      }
    },
    {
      title: translations[language].projects.nas_project.title,
      description: translations[language].projects.nas_project.description,
      technologies: ['Python', 'Cisco', 'Networking', 'MPLS', 'BGP', 'VPN'],
      technicalHighlights: translations[language].projects.nas_project.technical,
      challenges: translations[language].projects.nas_project.challenges,
      github: 'https://github.com/AlanJumeaucourt/NasProject',
      image: {
        desktop: '/images/projects/nas-project/desktop.png',
        mobile: '/images/projects/nas-project/mobile.png'
      }
    },
    {
      title: translations[language].projects.this_website.title,
      description: translations[language].projects.this_website.description,
      technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'TypeScript', 'Vite'],
      technicalHighlights: translations[language].projects.this_website.technical,
      challenges: translations[language].projects.this_website.challenges,
      github: 'https://github.com/AlanJumeaucourt/portfolio',
      image: {
        desktop: '/images/projects/portfolio/desktop.png',
        mobile: '/images/projects/portfolio/mobile.png'
      }
    },
    {
      title: translations[language].projects.pasta_tower.title,
      description: translations[language].projects.pasta_tower.description,
      technologies: ['Pasta', 'Scotch tape'],
      technicalHighlights: translations[language].projects.pasta_tower.technical,
      challenges: translations[language].projects.pasta_tower.challenges,
      github: 'https://github.com/AlanJumeaucourt/pasta-tower',
      image: {
        desktop: '/images/projects/pasta-tower/desktop.png',
        mobile: '/images/projects/pasta-tower/mobile.png'
      }
    }
  ];

  const getImageForDevice = (project: Project) => {
    return deviceType === 'mobile' ? project.image.mobile : project.image.desktop;
  };

  const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  };

  useEffect(() => {
    const preloadAdjacentImages = async () => {
      const nextIndex = (currentIndex + 1) % projects.length;
      const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;

      const imagesToPreload = [
        projects[nextIndex].image.desktop,
        projects[nextIndex].image.mobile,
        projects[prevIndex].image.desktop,
        projects[prevIndex].image.mobile,
      ];

      await Promise.all(imagesToPreload.map(src => preloadImage(src)));
    };

    preloadAdjacentImages();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedNextSlide = debounce(nextSlide, 150);
  const debouncedPrevSlide = debounce(prevSlide, 150);

  return (
    <section
      id="projects"
      className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-16"
      role="region"
      aria-label={translations[language].title}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
        {translations[language].title}
      </h2>
      <div className="flex items-center justify-between">
        <button
          onClick={debouncedPrevSlide}
          className="p-1 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={translations[language].navigation.prev}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <div className="flex-1 mx-2 sm:mx-8">
          <div
            className="bg-gray-800 rounded-lg overflow-hidden border border-white/10"
            role="tabpanel"
            aria-label={currentProject.title}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[700px]">
              {/* Image Section */}
              <div className="relative h-48 sm:h-64 md:h-full w-full">
                <img
                  src={getImageForDevice(currentProject)}
                  alt={`Screenshot of ${currentProject.title} project`}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col h-full overflow-y-auto">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {currentProject.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {currentProject.description}
                </p>

                {/* Technical Details */}
                {currentProject.technicalHighlights && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <h4 className="font-semibold text-sm sm:text-base">
                        {translations[language].section.technicalHighlights}
                      </h4>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 ml-2">
                      {currentProject.technicalHighlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {currentProject.challenges && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <h4 className="font-semibold text-sm sm:text-base">
                        {translations[language].section.challenges}
                      </h4>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 ml-2">
                      {currentProject.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <h4 className="font-semibold text-sm sm:text-base">
                      {translations[language].section.technologies}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-700 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4 mt-auto">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    {translations[language].links.github}
                  </a>
                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 hover:text-blue-400 transition-colors text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      {translations[language].links.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={debouncedNextSlide}
          className="p-1 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={translations[language].navigation.next}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div
        className="flex justify-center mt-2 sm:mt-4 gap-1 sm:gap-2"
        role="tablist"
        aria-label={translations[language].navigation.projectList}
      >
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`${translations[language].navigation.goToProject}${project.title}`}
            title={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
