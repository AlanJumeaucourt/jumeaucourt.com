import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['projects', 'travels', 'experience', 'skills', 'education', 'contact'];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[1px] ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-sm before:bg-gray-800/50' 
        : 'bg-transparent before:bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-400">
            <span className="inline-block overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out" 
                  style={{ 
                    width: isScrolled ? '5.5rem' : '2rem',
                    opacity: 1 
                  }}>
              {isScrolled ? 'Alan J' : 'AJ'}
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
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
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;