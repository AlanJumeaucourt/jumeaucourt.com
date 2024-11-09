import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Code2, Wrench, Cpu } from 'lucide-react';
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
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const deviceType = useDeviceType();
  
  const projects: Project[] = [
    {
      title: 'Wealth Manager',
      description: t('projects.wealth_manager.description'),
      technologies: ['React Native', 'Expo', 'Flask', 'SQLite', 'TypeScript', 'Raw SQL query'],
      technicalHighlights: [
        t('projects.wealth_manager.technical.1'),
        t('projects.wealth_manager.technical.2'),
        t('projects.wealth_manager.technical.3')
      ],
      challenges: [
        t('projects.wealth_manager.challenges.1'),
        t('projects.wealth_manager.challenges.2')
      ],
      github: 'https://github.com/AlanJumeaucourt/wealth_manager',
      image: {
        desktop: '/images/projects/wealth-manager/desktop.png',
        mobile: '/images/projects/wealth-manager/mobile.png'
      }
    },
    {
      title: 'Hit or Flop',
      description: t('projects.hit_or_flop.description'),
      technologies: ['Python', 'Next.js', 'Docker', 'CNN', 'AI'],
      technicalHighlights: [
        t('projects.hit_or_flop.technical.1'),
        t('projects.hit_or_flop.technical.2'),
        t('projects.hit_or_flop.technical.3'),
        t('projects.hit_or_flop.technical.4')
      ],
      challenges: [
        t('projects.hit_or_flop.challenges.1'),
        t('projects.hit_or_flop.challenges.2')
      ],
      github: 'https://github.com/AlanJumeaucourt/hitorflop',
      live: 'https://hitorflop.myfunnycluster.dynamic-dns.net/',
      image: {
        desktop: '/images/projects/hit-or-flop/desktop.png',
        mobile: '/images/projects/hit-or-flop/mobile.png'
      }
    },
    {
      title: 'SIR-Lightboard',
      description: t('projects.sirlightboard.description'),
      technologies: ['Python', 'Bash', 'OBS', 'Debian'],
      technicalHighlights: [
        t('projects.sirlightboard.technical.1'),
        t('projects.sirlightboard.technical.2'),
        t('projects.sirlightboard.technical.3')
      ],
      challenges: [
        t('projects.sirlightboard.challenges.1'),
        t('projects.sirlightboard.challenges.2'),
        t('projects.sirlightboard.challenges.3')
      ],
      github: 'https://github.com/AlanJumeaucourt/SIR-Lightboard',
      image: {
        desktop: '/images/projects/sir-lightboard/desktop.png',
        mobile: '/images/projects/sir-lightboard/mobile.png'
      }
    },
    {
      title: 'NAS Project',
      description: t('projects.nas_project.description'),
      technologies: ['Python', 'Cisco', 'Networking', 'MPLS', 'BGP'],
      technicalHighlights: [
        t('projects.nas_project.technical.1'),
        t('projects.nas_project.technical.2')
      ],
      challenges: [
        t('projects.nas_project.challenges.1'),
        t('projects.nas_project.challenges.2')
      ],
      github: 'https://github.com/AlanJumeaucourt/NasProject',
      image: {
        desktop: '/images/projects/nas-project/desktop.png',
        mobile: '/images/projects/nas-project/mobile.png'
      }
    },
    {
      title: 'This Website',
      description: t('projects.this_website.description'),
      technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'TypeScript'],
      technicalHighlights: [
        t('projects.this_website.technical.1'),
        t('projects.this_website.technical.2'),
        t('projects.this_website.technical.3')
      ],
      challenges: [
        t('projects.this_website.challenges.1'),
        t('projects.this_website.challenges.2')
      ],
      github: 'https://github.com/AlanJumeaucourt/portfolio',
      image: {
        desktop: '/images/projects/portfolio/desktop.png',
        mobile: '/images/projects/portfolio/mobile.png'
      }
    },
    {
      title: 'Pasta tower',
      description: t('projects.pasta_tower.description'),
      technologies: ['Pasta', 'Scotch tape'],
      technicalHighlights: [
        t('projects.pasta_tower.technical.1'),
        t('projects.pasta_tower.technical.2'),
        t('projects.pasta_tower.technical.3')
      ],
      challenges: [
        t('projects.pasta_tower.challenges.1')
      ],
      github: 'https://github.com/AlanJumeaucourt/pasta-tower',
      image: {
        desktop: '/images/projects/pasta-tower/desktop.png',
        mobile: '/images/projects/pasta-tower/mobile.png'
      }
    },
  ];

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

  const getTranslationKey = (title: string): string => {
    return title.toLowerCase().replace(/ /g, '_').replace(/[^a-z0-9_]/g, '');
  };

  const getProjectName = (project: Project): string => {
    return t(`projects.${getTranslationKey(project.title)}.title`);
  };

  const getImageForDevice = (project: Project) => {
    return deviceType === 'mobile' ? project.image.mobile : project.image.desktop;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-4 py-8 sm:py-16">
      <div className="flex items-center justify-between">
        <button 
          onClick={prevSlide}
          className="p-1 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label={t('projects.navigation.prev.aria')}
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <div className="flex-1 mx-2 sm:mx-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[700px]">
              {/* Image Section */}
              <div className="relative h-48 sm:h-64 md:h-full w-full">
                <img
                  src={getImageForDevice(currentProject)}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col h-full overflow-y-auto">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {t(`projects.${getTranslationKey(currentProject.title)}.title`)}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">
                  {t(`projects.${getTranslationKey(currentProject.title)}.description`)}
                </p>

                {/* Technical Details */}
                {currentProject.technicalHighlights && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <h4 className="font-semibold text-sm sm:text-base">{t('projects.section.technicalHighlights')}</h4>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 ml-2">
                      {currentProject.technicalHighlights.map((highlight, index) => (
                        <li key={index}>
                          {t(`projects.${getTranslationKey(currentProject.title)}.technical.${index + 1}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {currentProject.challenges && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <h4 className="font-semibold text-sm sm:text-base">{t('projects.section.challenges')}</h4>
                    </div>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 ml-2">
                      {currentProject.challenges.map((challenge, index) => (
                        <li key={index}>
                          {t(`projects.${getTranslationKey(currentProject.title)}.challenges.${index + 1}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                    <h4 className="font-semibold text-sm sm:text-base">{t('projects.section.technologies')}</h4>
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
                    {t('projects.links.github')}
                  </a>
                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 hover:text-blue-400 transition-colors text-sm sm:text-base"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      {t('projects.links.liveDemo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="p-1 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label={t('projects.navigation.next.aria')}
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-2 sm:mt-4 gap-1 sm:gap-2" role="tablist" aria-label={t('projects.navigation.projectList')}>
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`${t('projects.navigation.goToProject')} ${getProjectName(project)}`}
            title={getProjectName(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
