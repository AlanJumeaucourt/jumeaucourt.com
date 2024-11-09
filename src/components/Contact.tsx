import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { ref, isInView } = useInView();
  const { t } = useLanguage();

  return (
    <section id="contact" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-400">{t('contact.title')}</h2>
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="https://github.com/AlanJumeaucourt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
            <span>{t('contact.links.github')}</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/alan-jumeaucourt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
            <span>{t('contact.links.linkedin')}</span>
          </a>
          <a 
            href="mailto:contact@jumeaucourt.com"
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6" />
            <span>{t('contact.links.email')}</span>
          </a>
        </div>
        <div className="card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          <p className="text-xl text-gray-300 mb-8">
            {t('contact.description')}
          </p>
          <a 
            href="mailto:contact@jumeaucourt.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('contact.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;