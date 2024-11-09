import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Header
    'nav.projects': 'Projects',
    'nav.travels': 'Travels',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'DevOps Engineer & VOIP Expert',
    'hero.description': 'passionate about building robust infrastructure and streamlining communications through innovative VOIP solutions. Based in Lyon, France.',
    'hero.cta.contact': 'Get in Touch',
    'hero.cta.experience': 'View Experience',

    // Experience
    'experience.title': 'Experience',
    'experience.current': 'Current',
    'experience.positions.xivo': 'DevOps & VOIP Solutions Expert',
    'experience.positions.edf': 'Telecom Operations Manager',
    'experience.xivo.desc1': 'Proposed and implemented automation solutions to streamline deployment processes',
    'experience.xivo.desc2': 'Led initiative to improve documentation practices and knowledge sharing',
    'experience.xivo.desc3': 'Independently managed client projects from analysis to implementation',
    'experience.xivo.desc4': 'Proactively identified and resolved system bottlenecks',
    'experience.xivo.desc5': 'Developed innovative solutions for complex client requirements',
    'experience.edf.desc1': 'Initiated and led infrastructure improvement projects',
    'experience.edf.desc2': 'Developed and implemented new monitoring solutions',
    'experience.edf.desc3': 'Autonomously managed critical telecommunications systems',
    'experience.edf.desc4': 'Proposed and executed system optimization strategies',
    'experience.edf.desc5': 'Created innovative solutions for operational challenges',
    'experience.internships.title': 'Early Career Internships',
    'experience.internships.position': 'IT & Telecom Intern',
    'experience.internships.desc1': 'Évreux Portes de Normandie - IT Systems Support (Nov 2019)',
    'experience.internships.desc2': 'EET Service - IP Telephony Systems (Apr-May 2019)',
    'experience.internships.desc3': 'CAF de l\'Eure - IT Infrastructure Support (Nov 2019)',
    'experience.internships.desc4': 'Centre Hospitalier de Bernay - IT Systems Management (Jun 2018)',
    'experience.internships.desc5': 'LBCDI - IT Support and Maintenance (Dec 2017)',

    // Education
    'education.title': 'Education',
    'education.current': 'Current',
    'education.degrees.insa': 'Engineering Degree in Telecommunications',
    'education.degrees.vilnius': 'Exchange Student for 1 semester',
    'education.degrees.rouen': 'DUT Networks and Telecommunications',
    'education.degrees.leroy': 'Bac Pro Digital Systems',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.categories.devops': 'DevOps',
    'skills.categories.voip': 'VOIP & Telecom',
    'skills.categories.infrastructure': 'Infrastructure',
    'skills.categories.systems': 'Systems',
    'skills.categories.leadership': 'Leadership',

    // Projects
    'projects.title': 'My Projects',
    'projects.technologies': 'Technologies',
    'projects.challenges': 'Challenges Solved',
    'projects.technical': 'Technical Highlights',
    'projects.github': 'GitHub',
    'projects.live': 'Live Demo',
    'projects.wealth_manager.title': 'Wealth Manager',
    'projects.wealth_manager.description': 'A comprehensive personal finance management application built with React Native and Expo, featuring real-time wealth tracking, multi-account management, and smart analytics.',
    'projects.hit_or_flop.title': 'Hit or Flop',
    'projects.hit_or_flop.description': 'AI model using convolutional neural networks to predict if a song has the characteristics of a hit. Built with Python and Next.js, deployed with Docker.',
    'projects.sirlightboard.title': 'SIR-Lightboard',
    'projects.sirlightboard.description': 'Automation solution for recording and uploading educational content. Features OBS integration, file transfer automation, and custom Debian live CD for Lightboard teaching.',
    'projects.nas.title': 'NAS Project',
    'projects.nas.description': 'Python-based automation tool for provisioning MPLS/VPN network infrastructure. Configures Cisco routers based on JSON configuration files.',
    'projects.website.title': 'This Website',
    'projects.website.description': 'This website is built with React, Tailwind CSS, and Lucide Icons.',
    'projects.pastaTower.title': 'Pasta tower',
    'projects.pastaTower.description': 'A tower of pasta and scotch tape during a project management course.',

    // Travel
    'travel.title': 'My Journey Around the Globe',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'Looking for a DevOps expert or need help with VOIP solutions? Let\'s connect and discuss how I can help you achieve your goals.',
    'contact.cta': 'Send me an email',
    'contact.links.github': 'GitHub',
    'contact.links.linkedin': 'LinkedIn',
    'contact.links.email': 'Email',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Add technical highlights translations
    'projects.wealth_manager.technical.1': 'Implemented real-time data synchronization using Plaid API',
    'projects.wealth_manager.technical.2': 'Designed scalable SQLite database schema for financial data',
    'projects.wealth_manager.technical.3': 'Built custom database with views and triggers',
    'projects.wealth_manager.challenges.1': 'Managing financial data in a mobile environment',
    'projects.wealth_manager.challenges.2': 'Secure data handling for sensitive financial information',

    'projects.hit_or_flop.technical.1': 'Developed custom CNN architecture for audio processing',
    'projects.hit_or_flop.technical.2': 'Analyzed audio features for hit/flop prediction',
    'projects.hit_or_flop.technical.3': 'Created containerized deployment pipeline',
    'projects.hit_or_flop.technical.4': 'Made a website to showcase the model',
    'projects.hit_or_flop.challenges.1': 'Processing audio datasets efficiently',
    'projects.hit_or_flop.challenges.2': 'Optimizing model accuracy while maintaining performance',

    'projects.sirlightboard.technical.1': 'Integrated OBS on linux',
    'projects.sirlightboard.technical.2': 'Automated file transfer using Bash scripts',
    'projects.sirlightboard.technical.3': 'Created custom Debian live CD for efficient teaching',
    'projects.sirlightboard.challenges.1': 'Optimizing live CD performance and boot time',
    'projects.sirlightboard.challenges.2': 'Make everything work on a live CD (not so easy)',
    'projects.sirlightboard.challenges.3': 'Implementing state machine for the control commands',

    // Projects component translations
    'projects.navigation.prev': 'Previous project',
    'projects.navigation.next': 'Next project',
    'projects.section.technicalHighlights': 'Technical Highlights',
    'projects.section.challenges': 'Challenges Solved',
    'projects.section.technologies': 'Technologies',
    'projects.links.github': 'GitHub',
    'projects.links.liveDemo': 'Live Demo',

    // Add missing project translations
    'projects.pasta_tower.title': 'Pasta Tower',
    'projects.pasta_tower.description': 'A tower of pasta and scotch tape during a project management course.',
    'projects.pasta_tower.technical.1': 'Built a tower of pasta and scotch tape',
    'projects.pasta_tower.technical.2': 'It was taller than me (no)',
    'projects.pasta_tower.technical.3': 'Make good initation and planning phase',
    'projects.pasta_tower.challenges.1': 'Dont play with pasta while making the planning phase',

    // Add translations for NAS project
    'projects.nas_project.title': 'NAS Project',
    'projects.nas_project.description': 'Python-based automation tool for provisioning MPLS/VPN network infrastructure. Configures Cisco routers based on JSON configuration files.',
    'projects.nas_project.technical.1': 'Automated provisioning of MPLS/VPN network infrastructure',
    'projects.nas_project.technical.2': 'Configured Cisco routers using abstracted JSON configuration files',
    'projects.nas_project.challenges.1': 'Ensuring idempotent configuration management',
    'projects.nas_project.challenges.2': 'Handling network state consistency across devices',

    // Add translations for website project
    'projects.this_website.title': 'This Website',
    'projects.this_website.description': 'This website is built with React, Tailwind CSS, and Lucide Icons.',
    'projects.this_website.technical.1': 'Built with React and TypeScript',
    'projects.this_website.technical.2': 'Styled using Tailwind CSS',
    'projects.this_website.technical.3': 'Implemented internationalization support',
    'projects.this_website.challenges.1': 'Creating a responsive and accessible design',
    'projects.this_website.challenges.2': 'Managing state and translations efficiently',

    // Add aria labels for navigation buttons
    'projects.navigation.prev.aria': 'View previous project',
    'projects.navigation.next.aria': 'View next project',

    // Add project navigation translations
    'projects.navigation.projectList': 'Project navigation',
    'projects.navigation.goToProject': 'Go to project: {project}',
  },
  fr: {
    // Header
    'nav.projects': 'Projets',
    'nav.travels': 'Voyages',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.education': 'Éducation',
    'nav.contact': 'Contact',

    // Hero
    'hero.title': 'Ingénieur DevOps & Expert VOIP',
    'hero.description': 'Passionné par la création d\'infrastructures robustes et l\'optimisation des communications via des solutions VOIP innovantes. Basé à Lyon, France.',
    'hero.cta.contact': 'Me Contacter',
    'hero.cta.experience': 'Voir l\'Expérience',

    // Experience
    'experience.title': 'Expérience',
    'experience.current': 'Actuel',
    'experience.positions.xivo': 'Expert DevOps & Solutions VOIP',
    'experience.positions.edf': 'Responsable des Opérations Télécom',
    'experience.xivo.desc1': 'Proposé et mis en œuvre des solutions d\'automatisation pour optimiser les processus de déploiement',
    'experience.xivo.desc2': 'Dirigé l\'initiative d\'amélioration des pratiques de documentation et de partage des connaissances',
    'experience.xivo.desc3': 'Géré de manière autonome les projets clients de l\'analyse à l\'implémentation',
    'experience.xivo.desc4': 'Identifié et résolu de manière proactive les goulots d\'étranglement système',
    'experience.xivo.desc5': 'Développé des solutions innovantes pour des exigences clients complexes',
    'experience.edf.desc1': 'Initié et dirigé des projets d\'amélioration d\'infrastructure',
    'experience.edf.desc2': 'Développé et mis en œuvre de nouvelles solutions de monitoring',
    'experience.edf.desc3': 'Géré de manière autonome les systèmes de télécommunications critiques',
    'experience.edf.desc4': 'Proposé et exécuté des stratégies d\'optimisation système',
    'experience.edf.desc5': 'Créé des solutions innovantes pour les défis opérationnels',
    'experience.internships.title': 'Stages de Début de Carrière',
    'experience.internships.position': 'Stagiaire IT & Télécom',
    'experience.internships.desc1': 'Évreux Portes de Normandie - Support Systèmes IT (Nov 2019)',
    'experience.internships.desc2': 'EET Service - Systèmes de Téléphonie IP (Avr-Mai 2019)',
    'experience.internships.desc3': 'CAF de l\'Eure - Support Infrastructure IT (Nov 2019)',
    'experience.internships.desc4': 'Centre Hospitalier de Bernay - Gestion des Systèmes IT (Juin 2018)',
    'experience.internships.desc5': 'LBCDI - Support et Maintenance IT (Déc 2017)',

    // Education
    'education.title': 'Éducation',
    'education.current': 'En cours',
    'education.degrees.insa': 'Diplôme d\'Ingénieur en Télécommunications',
    'education.degrees.vilnius': 'Étudiant en échange pour 1 semestre',
    'education.degrees.rouen': 'DUT Réseaux et Télécommunications',
    'education.degrees.leroy': 'Bac Pro Systèmes Numériques',

    // Skills
    'skills.title': 'Compétences Techniques',
    'skills.categories.devops': 'DevOps',
    'skills.categories.voip': 'VOIP & Télécom',
    'skills.categories.infrastructure': 'Infrastructure',
    'skills.categories.systems': 'Systèmes',
    'skills.categories.leadership': 'Leadership',

    // Projects
    'projects.title': 'Mes projets',
    'projects.technologies': 'Technologies',
    'projects.challenges': 'Défis Résolus',
    'projects.technical': 'Points Techniques Clés',
    'projects.github': 'GitHub',
    'projects.live': 'Démo en Direct',
    'projects.wealth_manager.title': 'Gestionnaire de Patrimoine',
    'projects.wealth_manager.description': 'Une application complète de gestion des finances personnelles construite avec React Native et Expo, avec suivi en temps réel du patrimoine, gestion multi-comptes et analyses intelligentes.',
    'projects.hit_or_flop.title': 'Hit or Flop',
    'projects.hit_or_flop.description': 'Modèle d\'IA utilisant des réseaux de neurones convolutifs pour prédire si une chanson a les caractéristiques d\'un hit. Construit avec Python et Next.js, déployé avec Docker.',
    'projects.sirlightboard.title': 'SIR-Lightboard',
    'projects.sirlightboard.description': 'Solution d\'automatisation pour l\'enregistrement et le téléchargement de contenu éducatif. Intègre OBS, l\'automatisation du transfert de fichiers et un CD live Debian personnalisé pour l\'enseignement Lightboard.',
    'projects.nas.title': 'Projet NAS',
    'projects.nas.description': 'Outil d\'automatisation Python pour le provisionnement d\'infrastructure réseau MPLS/VPN. Configure les routeurs Cisco basés sur des fichiers de configuration JSON.',
    'projects.website.title': 'Ce Site Web',
    'projects.website.description': 'Ce site web est construit avec React, Tailwind CSS et Lucide Icons.',
    'projects.pastaTower.title': 'Tour de Pâtes',
    'projects.pastaTower.description': 'Une tour de pâtes et de ruban adhésif pendant un cours de gestion de projet.',

    // Travel
    'travel.title': 'Mon Voyage Autour du Globe',

    // Contact
    'contact.title': 'Me Contacter',
    'contact.description': 'Vous recherchez un expert DevOps ou avez besoin d\'aide avec des solutions VOIP ? Connectons-nous et discutons de la façon dont je peux vous aider à atteindre vos objectifs.',
    'contact.cta': 'M\'envoyer un email',
    'contact.links.github': 'GitHub',
    'contact.links.linkedin': 'LinkedIn',
    'contact.links.email': 'Email',

    // Footer
    'footer.rights': 'Tous droits réservés.',

    // Add French translations for technical highlights
    'projects.wealth_manager.technical.1': 'Implémentation de la synchronisation en temps réel avec l\'API Plaid',
    'projects.wealth_manager.technical.2': 'Conception d\'un schéma de base de données SQLite évolutif pour les données financières',
    'projects.wealth_manager.technical.3': 'Construction d\'une base de données personnalisée avec vues et déclencheurs',
    'projects.wealth_manager.challenges.1': 'Gestion des données financières dans un environnement mobile',
    'projects.wealth_manager.challenges.2': 'Traitement sécurisé des informations financières sensibles',

    'projects.hit_or_flop.technical.1': 'Développement d\'une architecture CNN personnalisée pour le traitement audio',
    'projects.hit_or_flop.technical.2': 'Analyse des caractéristiques audio pour la prédiction hit/flop',
    'projects.hit_or_flop.technical.3': 'Création d\'un pipeline de déploiement conteneurisé',
    'projects.hit_or_flop.technical.4': 'Création d\'un site web pour présenter le modèle',
    'projects.hit_or_flop.challenges.1': 'Traitement efficace des jeux de données audio',
    'projects.hit_or_flop.challenges.2': 'Optimisation de la précision du modèle tout en maintenant les performances',

    'projects.sirlightboard.technical.1': 'Intégration d\'OBS sur Linux',
    'projects.sirlightboard.technical.2': 'Automatisation du transfert de fichiers avec des scripts Bash',
    'projects.sirlightboard.technical.3': 'Création d\'un CD live Debian personnalisé pour l\'enseignement',
    'projects.sirlightboard.challenges.1': 'Optimisation des performances et du temps de démarrage du CD live',
    'projects.sirlightboard.challenges.2': 'Faire fonctionner tout sur un CD live (pas si simple)',
    'projects.sirlightboard.challenges.3': 'Implémentation d\'une machine d\'état pour les commandes de contrôle',

    // Projects component translations
    'projects.navigation.prev': 'Projet précédent',
    'projects.navigation.next': 'Projet suivant',
    'projects.section.technicalHighlights': 'Points Techniques',
    'projects.section.challenges': 'Défis Résolus',
    'projects.section.technologies': 'Technologies',
    'projects.links.github': 'GitHub',
    'projects.links.liveDemo': 'Démo en Direct',

    // Add missing project translations
    'projects.pasta_tower.title': 'Tour de Pâtes',
    'projects.pasta_tower.description': 'Une tour de pâtes et de ruban adhésif pendant un cours de gestion de projet.',
    'projects.pasta_tower.technical.1': 'Construction d\'une tour en pâtes et ruban adhésif',
    'projects.pasta_tower.technical.2': 'Elle était plus grande que moi (non)',
    'projects.pasta_tower.technical.3': 'Réalisation d\'une bonne phase d\'initiation et de planification',
    'projects.pasta_tower.challenges.1': 'Ne pas jouer avec les pâtes pendant la phase de planification',

    // Add translations for NAS project
    'projects.nas_project.title': 'Projet NAS',
    'projects.nas_project.description': 'Outil d\'automatisation Python pour le provisionnement d\'infrastructure réseau MPLS/VPN. Configure les routeurs Cisco basés sur des fichiers de configuration JSON.',
    'projects.nas_project.technical.1': 'Automatisation du provisionnement d\'infrastructure réseau MPLS/VPN',
    'projects.nas_project.technical.2': 'Configuration des routeurs Cisco utilisant des fichiers JSON abstraits',
    'projects.nas_project.challenges.1': 'Assurer une gestion de configuration idempotente',
    'projects.nas_project.challenges.2': 'Gérer la cohérence de l\'état du réseau entre les appareils',

    // Add translations for website project
    'projects.this_website.title': 'Ce Site Web',
    'projects.this_website.description': 'Ce site web est construit avec React, Tailwind CSS et Lucide Icons.',
    'projects.this_website.technical.1': 'Construit avec React et TypeScript',
    'projects.this_website.technical.2': 'Stylisé avec Tailwind CSS',
    'projects.this_website.technical.3': 'Implémentation du support multilingue',
    'projects.this_website.challenges.1': 'Création d\'un design responsive et accessible',
    'projects.this_website.challenges.2': 'Gestion efficace de l\'état et des traductions',

    // Add aria labels for navigation buttons
    'projects.navigation.prev.aria': 'Voir le projet précédent',
    'projects.navigation.next.aria': 'Voir le projet suivant',

    // Add project navigation translations
    'projects.navigation.projectList': 'Navigation des projets',
    'projects.navigation.goToProject': 'Aller au projet : {project}',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get browser language and set default to 'en' if not French
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('fr') ? 'fr' : 'en';
  };

  //   const [language, setLanguage] = useState<Language>(getBrowserLanguage());
  // default to english till translation is not perfect
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 