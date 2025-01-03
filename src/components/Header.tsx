import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      projects: 'Projects',
      travels: 'Travels',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact'
    },
    fr: {
      projects: 'Projets',
      travels: 'Voyages',
      experience: 'Expérience',
      skills: 'Compétences',
      education: 'Éducation',
      contact: 'Contact'
    }
  };

  const menuItems = ['projects', 'travels', 'experience', 'skills', 'education', 'contact'] as const;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[1px] ${
      isScrolled
        ? 'bg-gray-900/80 backdrop-blur-sm before:bg-gray-800/50'
        : 'bg-transparent before:bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-400">
          <span className="inline-block overflow-hidden whitespace-nowrap transition-all duration-1000 ease-in-out"
                  style={{
                    width: isScrolled ? '11rem' : '2rem',
                    opacity: 1
                  }}>
              {isScrolled ? 'Alan Jumeaucourt' : 'AJ'}
            </span>
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {translations[language][item]}
              </a>
            ))}

            <div className="flex space-x-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded ${
                  language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 rounded ${
                  language === 'fr' ? 'bg-blue-500 text-white' : 'text-gray-300'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
            <div className="flex flex-col space-y-4 p-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translations[language][item]}
                </a>
              ))}
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 rounded ${
                    language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-300'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-2 py-1 rounded ${
                    language === 'fr' ? 'bg-blue-500 text-white' : 'text-gray-300'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
