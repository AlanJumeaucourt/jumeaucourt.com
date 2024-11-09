import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Code2, Wrench, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  technicalHighlights?: string[];
  challenges?: string[];
  github: string;
  live?: string;
  image: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects: Project[] = [
    {
      title: 'Wealth Manager',
      description: 'A comprehensive personal finance management application built with React Native and Expo, featuring real-time wealth tracking, multi-account management, and smart analytics.',
      technologies: ['React Native', 'Expo', 'Flask', 'SQLite', 'TypeScript', 'Raw SQL query'],
      technicalHighlights: [
        'Implemented real-time data synchronization using Plaid API',
        'Designed scalable SQLite database schema for financial data',
        'Built custom database with views and triggers'
      ],
      challenges: [
        'Managing financial data in a mobile environment',
        'Secure data handling for sensitive financial information'
      ],
      github: 'https://github.com/AlanJumeaucourt/wealth_manager',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Hit or Flop',
      description: 'AI model using convolutional neural networks to predict if a song has the characteristics of a hit. Built with Python and Next.js, deployed with Docker.',
      technologies: ['Python', 'Next.js', 'Docker', 'CNN', 'AI'],
      technicalHighlights: [
        'Developed custom CNN architecture for audio processing',
        'Analyzed audio features for hit/flop prediction',
        'Created containerized deployment pipeline',
        'Made a website to showcase the model'
      ],
      challenges: [
        'Processing audio datasets efficiently',
        'Optimizing model accuracy while maintaining performance'
      ],
      github: 'https://github.com/AlanJumeaucourt/hitorflop',
      live: 'https://hitorflop.myfunnycluster.dynamic-dns.net/',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'SIR-Lightboard',
      description: 'Automation solution for recording and uploading educational content. Features OBS integration, file transfer automation, and custom Debian live CD for Lightboard teaching.',
      technologies: ['Python', 'Bash', 'OBS', 'Debian'],
      technicalHighlights: [
        'Integrated OBS on linux ',
        'Automated file transfer using Bash scripts',
        'Created custom Debian live CD for efficient teaching'
      ],
      challenges: [
        'Optimizing live CD performance and boot time',
        'Make everything work on a live CD (not so easy)',
        'Implementing state machine for the control commands'
      ],
      github: 'https://github.com/AlanJumeaucourt/SIR-Lightboard',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'NAS Project',
      description: 'Python-based automation tool for provisioning MPLS/VPN network infrastructure. Configures Cisco routers based on JSON configuration files.',
      technologies: ['Python', 'Cisco', 'Networking', 'MPLS'],
      technicalHighlights: [
        'Automated provisioning of MPLS/VPN network infrastructure',
        'Configured Cisco routers using abstracted JSON configuration files'
      ],
      challenges: [
        'Ensuring idempotent configuration management',
        'Handling network state consistency across devices'
      ],
      github: 'https://github.com/AlanJumeaucourt/NasProject',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'This Website',
      description: 'This website is built with React, Tailwind CSS, and Lucide Icons.',
      technologies: ['React', 'Tailwind CSS', 'Lucide Icons', 'TypeScript'],
      technicalHighlights: [
        'Built with React and TypeScript',
        'Styled using Tailwind CSS',
        'Implemented internationalization support'
      ],
      challenges: [
        'Creating a responsive and accessible design',
        'Managing state and translations efficiently'
      ],
      github: 'https://github.com/AlanJumeaucourt/portfolio',
      image: 'https://images.unsplash.com/photo-1517604931440-a19a4bc5a37c?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Pasta tower',
      description: 'A tower of pasta and scotch tape during a project management course.',
      technologies: ['Pasta', 'Scotch tape'],
      technicalHighlights: [
        'Built a tower of pasta and scotch tape',
        'It was taller than me (no)',
        'Make good initation and planning phase'
      ],
      challenges: ['Dont play with pasta while making the planning phase'],
      github: 'https://github.com/AlanJumeaucourt/pasta-tower',
      image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'XiVO Automation Framework',
      description: 'Independently conceived and developed an automation framework to streamline XiVO deployment processes, significantly reducing deployment time and human error.',
      technologies: ['Python', 'Ansible', 'Docker', 'CI/CD'],
      technicalHighlights: [
        'Proactively identified deployment bottlenecks',
        'Designed and implemented automated testing suite',
        'Created comprehensive documentation system',
        'Reduced deployment time by 60%'
      ],
      challenges: [
        'Autonomously architected solution from ground up',
        'Proposed and implemented innovative testing approaches',
        'Led adoption across development team'
      ],
      github: 'https://github.com/YourUsername/xivo-automation',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1000&q=80'
    }
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
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:h-[600px]">
              {/* Image Section */}
              <div className="relative h-48 sm:h-64 md:h-full">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
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
            aria-label={t('projects.navigation.goToProject', { project: getProjectName(project) })}
            title={getProjectName(project)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
