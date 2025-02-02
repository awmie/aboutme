import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { Home, Code, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'coding', label: 'Coding', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
] as const;

const Navigation = memo(() => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="relative p-3 rounded-[20px] backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 shadow-lg">
        <div className="absolute left-1/2 top-[10%] h-[80%] w-[1px] bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />
        
        <ul className="relative space-y-6">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="group relative flex items-center"
                aria-label={label}
              >
                <div className={`
                  relative z-10 w-3 h-3 rounded-full transition-all duration-300 ease-out
                  ${activeSection === id 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-orange-400'
                  }
                `} />

                <div className={`
                  absolute left-5 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap
                  transition-all duration-300 ease-out opacity-0 -translate-x-2 pointer-events-none
                  group-hover:opacity-100 group-hover:translate-x-1
                  ${activeSection === id
                    ? 'text-orange-500 dark:text-orange-400'
                    : 'text-gray-600 dark:text-gray-400'
                  }
                `}>
                  {label}
                </div>

                <div className={`
                  absolute left-8 opacity-0 transition-all duration-300 ease-out -translate-x-2
                  group-hover:opacity-100 group-hover:translate-x-1
                `}>
                  <Icon className={`w-4 h-4 ${
                    activeSection === id
                      ? 'text-orange-500 dark:text-orange-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`} />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation - Optimized */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
        <ul className="flex justify-around p-3">
          {navItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  activeSection === id
                    ? 'text-orange-500 bg-orange-50/50 dark:bg-orange-500/10'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;