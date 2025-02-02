import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube, Instagram, ExternalLink } from 'lucide-react';
import GradientBackground from './components/GradientBackground';
import ParticlesBackground from './components/ParticlesBackground';
import { ThemeToggle } from './components/ThemeToggle';
import TabbedContent from './components/TabbedContent';
import TextScramble from './components/TextScramble';

// Memoize contact section social links
const ContactSocialLinks = memo(() => (
  <div className="flex justify-center gap-6">
    <a href="mailto:amritavakole@gmail.com" className="text-gray-800 hover:text-black dark:text-orange-400 dark:hover:text-orange-500 transition-colors">
      <Mail className="w-6 h-6" />
    </a>
    <a href="https://www.youtube.com/@editsyoriichi" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-orange-400 dark:hover:text-orange-500 transition-colors">
      <Youtube className="w-6 h-6" />
    </a>
    <a href="https://www.instagram.com/oyi.zoro" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-orange-400 dark:hover:text-orange-500 transition-colors">
      <Instagram className="w-6 h-6" />
    </a>
    <a href="https://www.linkedin.com/in/amritava-kole-521bb0229/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-orange-400 dark:hover:text-orange-500 transition-colors">
      <Linkedin className="w-6 h-6" />
    </a>
    <a href="https://github.com/awmie" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-orange-400 dark:hover:text-orange-500 transition-colors">
      <Github className="w-6 h-6" />
    </a>
  </div>
));

ContactSocialLinks.displayName = 'ContactSocialLinks';

const App = memo(() => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <ParticlesBackground />
      <GradientBackground />
      <ThemeToggle />
      
      <main className="container mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-20">
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center pt-8 md:pt-16 relative z-10"
        >
          <div className="mb-6 md:mb-8">
            <img
              src="/assets/profile.jpg"
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-3 md:mb-4 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.2)] dark:shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-shadow duration-300"
              loading="eager"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <TextScramble text="Amritava Kole" />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Aspiring Researcher | AI Enthusiast
            </p>
          </div>

          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Exploring the intersection of artificial intelligence and human creativity
          </p>
        </motion.section>

        <section id="skills" className="relative z-10">
          <TabbedContent />
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center relative z-10"
        >
          <h2 className="text-2xl font-bold mb-4">Do Reach Out! 👋</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            You can contact me from below.
          </p>
          <ContactSocialLinks />
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-600">
            made by <span className="text-gray-900 dark:text-orange-500">@awmie</span>
            </p>
        </motion.section>
      </main>
    </div>
  );
});

App.displayName = 'App';
export default App;