import { Github, Linkedin, Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const { ref, isInView } = useInView();
  const { language } = useLanguage();
  const [loading, setLoading] = useState<string | null>(null);

  const translations = {
    en: {
      title: 'Get in Touch',
      description: 'Looking for a DevOps expert or need help with VOIP solutions? Let\'s connect and discuss how I can help you achieve your goals.',
      cta: 'Send me an email',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      }
    },
    fr: {
      title: 'Me Contacter',
      description: 'Vous recherchez un expert DevOps ou avez besoin d\'aide avec des solutions VOIP ? Connectons-nous et discutons de la façon dont je peux vous aider à atteindre vos objectifs.',
      cta: 'M\'envoyer un email',
      links: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      }
    }
  };

  const handleLinkClick = async (type: string) => {
    setLoading(type);
    // Simulate loading for external links
    await new Promise(resolve => setTimeout(resolve, 500));
    setLoading(null);
  };

  const socialLinks = [
    {
      type: 'github',
      href: 'https://github.com/AlanJumeaucourt',
      icon: <Github className="w-6 h-6" />,
      label: translations[language].links.github
    },
    {
      type: 'linkedin',
      href: 'https://www.linkedin.com/in/alan-jumeaucourt',
      icon: <Linkedin className="w-6 h-6" />,
      label: translations[language].links.linkedin
    },
    {
      type: 'email',
      href: 'mailto:fromblog@mail.jumeaucourt.com',
      icon: <Mail className="w-6 h-6" />,
      label: translations[language].links.email
    }
  ];

  return (
    <section id="contact" ref={ref} className={`py-16 section-fade ${isInView ? 'in-view' : ''}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-blue-400">
          {translations[language].title}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {socialLinks.map(({ type, href, icon, label }) => (
            <a
              key={type}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(type)}
              className="group flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-4 py-2"
            >
              <span className="relative">
                {loading === type ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <span className="transform transition-transform duration-300 group-hover:rotate-12">
                    {icon}
                  </span>
                )}
              </span>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 group-hover:after:w-full">
                {label}
              </span>
            </a>
          ))}
        </div>
        <div className="card p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 bg-gradient-to-br from-gray-800 to-gray-900">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {translations[language].description}
          </p>
          <a
            href="mailto:fromblog@mail.jumeaucourt.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {translations[language].cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
