import { Server, Terminal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const Hero = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'DevOps Engineer & VOIP Expert',
      description: 'I turn coffee into code and make servers do what they\'re told. French, currently in Bucharest, but my code runs everywhere.',
      cta: {
        contact: 'Let\'s Chat!',
        experience: 'See What I\'ve Done'
      }
    },
    fr: {
      title: 'Ingénieur DevOps & Expert VOIP',
      description: 'Je transforme le café en code et je fais faire aux serveurs ce qu\'on leur dit. Français, actuellement à Bucarest, mais mon code tourne partout.',
      cta: {
        contact: 'On Discute !',
        experience: 'Voir Ce Que J\'ai Fait'
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center -mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center space-x-4">
          <Server className="w-12 h-12 text-blue-400 animate-float" style={{ animationDelay: '0.2s' }} />
          <Terminal className="w-12 h-12 text-blue-400 animate-float" />
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Alan Jumeaucourt
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8">
          {translations[language].title}
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {calculateAge(new Date('2002-06-08'))} y.o. {translations[language].description}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {translations[language].cta.contact}
          </a>
          <a
            href="#experience"
            className="bg-gray-800 text-gray-300 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 border border-gray-700"
          >
            {translations[language].cta.experience}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
