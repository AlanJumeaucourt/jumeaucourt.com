import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const SEO = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language === 'fr' ? 'fr' : 'en';

    // Update meta tags dynamically
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update title and description based on language
    const titles = {
      en: 'Alan Jumeaucourt - DevOps Engineer & VOIP Expert | Infrastructure Automation Specialist',
      fr: 'Alan Jumeaucourt - Ingénieur DevOps & Expert VOIP | Spécialiste en Automatisation d\'Infrastructure'
    };

    const descriptions = {
      en: 'French DevOps Engineer & VOIP Expert based in Bucharest. Specializing in infrastructure automation, cloud solutions, telecommunications, and building scalable systems. Explore my projects, experience, and technical expertise.',
      fr: 'Ingénieur DevOps & Expert VOIP français basé à Bucarest. Spécialisé en automatisation d\'infrastructure, solutions cloud, télécommunications et construction de systèmes évolutifs. Découvrez mes projets, expérience et expertise technique.'
    };

    document.title = titles[language];
    updateMetaTag('title', titles[language]);
    updateMetaTag('description', descriptions[language]);
    updateMetaTag('og:title', titles[language], true);
    updateMetaTag('og:description', descriptions[language], true);
    updateMetaTag('og:locale', language === 'fr' ? 'fr_FR' : 'en_US', true);
    updateMetaTag('twitter:title', titles[language]);
    updateMetaTag('twitter:description', descriptions[language]);
    updateMetaTag('DC.title', titles[language]);
    updateMetaTag('DC.description', descriptions[language]);
    updateMetaTag('DC.language', language === 'fr' ? 'fr' : 'en');
  }, [language]);

  return null;
};

export default SEO;

