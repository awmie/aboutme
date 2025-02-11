import { useState, memo, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Video, Code, Briefcase, GithubIcon, Globe, Plug2, Moon, Save, Lock, Music, YoutubeIcon, Sparkles, Shield, Gamepad2, Laptop2, Smartphone, Terminal, Zap, BookOpen } from 'lucide-react';
import PremierePro from '../assets/premiere-pro.svg';
import FinalCutPro from '../assets/finalcutpro.svg';
import AfterEffects from '../assets/aftereffects.svg';
import Canva from '../assets/canva.svg';

const tabs = [
  { id: 'video', label: 'Video Skills', icon: Video },
  { id: 'coding', label: 'Coding', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
];

type TabId = typeof tabs[number]['id'];

const videoSkills = [
  { title: 'Adobe Premiere Pro', description: '50+ video edits', icon: <img src={PremierePro} className="w-12 h-12" alt="Premiere Pro" /> },
  { title: 'Final Cut Pro', description: '30+ video edits', icon: <img src={FinalCutPro} className="w-12 h-12" alt="Final Cut Pro" /> },
  { title: 'Adobe After Effects', description: '40+ videos', icon: <img src={AfterEffects} className="w-12 h-12" alt="After Effects" /> },
  { title: 'Canva Editing', description: '30+ designs', icon: <img src={Canva} className="w-12 h-12 dark:invert" alt="Canva" /> },
];

const codingSkills = [
  { title: 'TensorFlow', category: 'Machine Learning', icon: '🧠' },
  { title: 'NumPy', category: 'Data Processing', icon: '📊' },
  { title: 'Pandas', category: 'Data Analysis', icon: '🐼' },
  { title: 'Matplotlib', category: 'Data Visualization', icon: '📈' },
  { title: 'Plotly', category: 'Interactive Plots', icon: '📉' },
  { title: 'Flask', category: 'Web Framework', icon: '🌶️' },
  { title: 'FastAPI', category: 'Modern API Framework', icon: '⚡' },
  { title: 'Django', category: 'Full Stack Framework', icon: '🎸' },
  { title: 'SQL', category: 'Database Management', icon: '💾' },
  { title: 'Tailwind', category: 'CSS Framework', icon: '🎨' },
  { title: 'React', category: 'UI Library', icon: '⚛️' },
  { title: 'Git', category: 'Version Control', icon: '📚' },
  { title: 'Docker', category: 'Containerization', icon: '🐳' },
  { title: 'Node.js', category: 'Runtime Environment', icon: '💚' },
  { title: 'Rust', category: 'Systems Programming', icon: '⚙️' },
  { title: 'GPT', category: 'AI', icon: '🤖' },
  { title: 'Prompt Engineering', category: 'AI', icon: '✨' },
];

const projects = [
  {
    title: 'GroqChat',
    subtitle: 'AI Chat Interface',
    description: "Modern chat interface powered by Groq's API, enabling seamless interaction with advanced language models through their API integration.",
    features: [
      { icon: <Plug2 className="w-6 h-6" />, text: 'Groq API Integration' },
      { icon: <Moon className="w-6 h-6" />, text: 'Dark/Light Mode Support' },
      { icon: <Save className="w-6 h-6" />, text: 'Persistent Chat History' },
      { icon: <Lock className="w-6 h-6" />, text: 'Secure API Key Management' }
    ],
    links: [
      { type: 'demo', url: 'https://chatgroq.vercel.app/', icon: <Globe className="w-6 h-6" /> },
      { type: 'github', url: 'https://github.com/awmie/GroqChat.git', icon: <GithubIcon className="w-6 h-6" /> }
    ],
    tech: ['React', 'Groq API', 'TypeScript', 'Tailwind']
  },
  {
    title: 'Tishmish',
    subtitle: 'Premium Discord Music Bot',
    description: 'Premium Discord music bot offering features like YouTube and Spotify playlist support, HD sound, and AI queue prediction.',
    features: [
      { icon: <YoutubeIcon className="w-6 h-6" />, text: 'YouTube & Spotify Integration' },
      { icon: <Music className="w-6 h-6" />, text: 'HD Sound Quality' },
      { icon: <Sparkles className="w-6 h-6" />, text: 'AI Queue Prediction' },
      { icon: <Shield className="w-6 h-6" />, text: 'Role-based Access Control' }
    ],
    links: [
      { type: 'github', url: 'https://github.com/awmie/tishmish.git', icon: <GithubIcon className="w-6 h-6" /> }
    ],
    tech: ['Discord.js', 'Node.js', 'Spotify API', 'YouTube API', 'AI']
  },
  {
    title: 'Arcadia Esports',
    subtitle: 'GBU Official Esports Platform',
    description: 'The official esports platform of Gautam Buddha University (GBU), featuring a sleek, minimalistic website for gaming enthusiasts.',
    features: [
      { icon: <Gamepad2 className="w-6 h-6" />, text: 'Popular Games Integration' },
      { icon: <Sparkles className="w-6 h-6" />, text: 'Interactive Elements' },
      { icon: <Laptop2 className="w-6 h-6" />, text: 'Desktop Optimized' },
      { icon: <Smartphone className="w-6 h-6" />, text: 'Mobile Responsive' }
    ],
    links: [
      { type: 'demo', url: 'https://arcadia-esports.vercel.app/', icon: <Globe className="w-6 h-6" /> },
      { type: 'github', url: 'https://github.com/awmie/ArcadiaEsports.git', icon: <GithubIcon className="w-6 h-6" /> }
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Particles.js']
  },
  {
    title: 'Run Python',
    subtitle: 'Python Web Editor',
    description: 'A modern, browser-based Python code editor with real-time syntax highlighting and execution capabilities.',
    features: [
      { icon: <Moon className="w-6 h-6" />, text: 'Dark/Light Theme Support' },
      { icon: <Terminal className="w-6 h-6" />, text: 'Live Code Execution' },
      { icon: <Zap className="w-6 h-6" />, text: 'Package Installation' },
      { icon: <BookOpen className="w-6 h-6" />, text: 'Multiple File Management' }
    ],
    links: [
      { type: 'demo', url: 'https://pythonline.vercel.app/', icon: <Globe className="w-6 h-6" /> },
      { type: 'github', url: 'https://github.com/awmie/RunPython.git', icon: <GithubIcon className="w-6 h-6" /> }
    ],
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Pyodide', 'CodeMirror']
  }
];

const TabButton = memo(({ id, label, icon: Icon, isActive, onClick }: { id: TabId; label: string; icon: typeof tabs[number]['icon']; isActive: boolean; onClick: () => void; }) => (
  <button 
    id={id} 
    onClick={onClick} 
    className={`
        flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
        ${isActive 
        ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white shadow-sm' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
        }
    `} 
    aria-selected={isActive} 
    role="tab"
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </button>
));

TabButton.displayName = 'TabButton';




const MinimalCodingSkills = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-8">
      {codingSkills.map((skill, i) => {
        const isSelected = selectedId === i;
        return (
          <motion.div
            key={i}
            className="relative"
            animate={isSelected ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            onTouchStart={() => setSelectedId(i)}
            onTouchEnd={() => setSelectedId(null)}
            onHoverStart={() => setSelectedId(i)}
            onHoverEnd={() => setSelectedId(null)}
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
              <span className="text-base md:text-lg">{skill.icon}</span>
            </div>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1.5 text-xs bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl shadow-sm whitespace-nowrap"
              >
                {skill.title}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};


const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState<TabId>('video');


  useEffect(() => {
    const updateThemeVariables = () => {
      const isDark = document.documentElement.classList.contains('dark');
      document.documentElement.style.setProperty(
        '--bg-gradient-from',
        isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
      );
      document.documentElement.style.setProperty(
        '--bg-gradient-mid',
        isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)'
      );
      document.documentElement.style.setProperty(
        '--card-bg',
        isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.8)'
      );
      document.documentElement.style.setProperty(
        '--card-border',
        isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'
      );
      document.documentElement.style.setProperty(
        '--card-border-hover',
        isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(96, 165, 250, 0.2)'
      );
    };

    updateThemeVariables();

    const observer = new MutationObserver(updateThemeVariables);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);




  const renderContent = () => {
    const projectCardClasses = "p-6 rounded-2xl bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300";
    const videoCardClasses = "p-6 rounded-2xl bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300";




    switch (activeTab) {
        case 'video':
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoSkills.map((skill, index) => (
              <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={videoCardClasses}


              >
              <div className="flex flex-col items-center text-center">
                {skill.icon}
                <h3 className="text-lg font-semibold mt-4 mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </div>
              </motion.div>
            ))}
            </div>


        );
        case 'projects':
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={projectCardClasses}


              >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                </div>
                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                  ))}
                </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm">
                  {tech}
                  </span>
                ))}
                </div>
              </div>
              </motion.div>
            ))}
            </div>

        );
      case 'coding':
        return (
            <MinimalCodingSkills />

        );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-2 md:px-4 relative z-10"
    >
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12" role="tablist">
        {tabs.map(({ id, label, icon }) => (
          <TabButton
            key={id}
            id={id}
            label={label}
            icon={icon}
            isActive={activeTab === id}
            onClick={() => setActiveTab(id)}
          />
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}

      >
        {renderContent()}
      </motion.div>


    </motion.section>
  );
};

export default TabbedContent;