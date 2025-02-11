import { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube, Instagram } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import TabbedContent from './components/TabbedContent';
import TextScramble from './components/TextScramble';

const ContactSocialLinks = memo(() => (
  <div className="flex justify-center gap-6">
    <a href="mailto:amritavakole@gmail.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
      <Mail className="w-6 h-6" />
    </a>
    <a href="https://www.youtube.com/@editsyoriichi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
      <Youtube className="w-6 h-6" />
    </a>
    <a href="https://www.instagram.com/oyi.zoro" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
      <Instagram className="w-6 h-6" />
    </a>
    <a href="https://www.linkedin.com/in/amritava-kole-521bb0229/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
      <Linkedin className="w-6 h-6" />
    </a>
    <a href="https://github.com/awmie" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
      <Github className="w-6 h-6" />
    </a>
  </div>
));

ContactSocialLinks.displayName = 'ContactSocialLinks';

const App = memo(() => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8f7f4] via-[#f5f4f1] to-[#f1f0ed] dark:from-dark-start dark:via-dark-start dark:to-dark-end text-gray-900 dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 z-0 bg-sand-light dark:bg-sand-dark opacity-[0.8] dark:opacity-50 mix-blend-soft-light" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-transparent via-[#f8f7f4]/30 to-[#f8f7f4]/80 dark:via-transparent dark:to-transparent opacity-50 mix-blend-overlay" />
      <ThemeToggle />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="mb-8">
            <div className="p-1 rounded-[2rem] bg-gradient-to-br from-white/80 to-white/20 dark:from-gray-800/80 dark:to-gray-800/20 backdrop-blur-sm inline-block mx-auto mb-6">
              <img
              src="https://avatars.githubusercontent.com/u/95137415?s=400&v=4"
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-[1.8rem] object-cover"
              loading="eager"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              <TextScramble text="Amritava Kole" />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Aspiring Researcher | AI Enthusiast
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            Exploring the intersection of artificial intelligence and human creativity
          </p>
        </motion.section>

        <section id="skills" className="mb-16">
          <TabbedContent />
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Do Reach Out! 👋</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            You can contact me from below.
          </p>
          <ContactSocialLinks />
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            made by <span className="font-medium text-gray-900 dark:text-white">@awmie</span>
          </p>
        </motion.section>
      </main>
    </div>
  );
});


App.displayName = 'App';
export default App;