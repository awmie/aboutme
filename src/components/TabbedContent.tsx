import { useState, memo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Video, Code, Briefcase, GithubIcon, Globe, Plug2, Moon, Save, Lock, Music, YoutubeIcon, Sparkles, Shield, Gamepad2, Laptop2, Smartphone, Terminal, Play, Zap, BookOpen } from 'lucide-react';
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
    title: 'Python Online',
    subtitle: 'Interactive Python Code Runner',
    description: 'This project allows users to run Python code directly in their browser using PyScript, providing a seamless, interactive environment for learning and experimentation.',
    features: [
      { icon: <Terminal className="w-6 h-6" />, text: 'Browser-based Code Execution' },
      { icon: <Play className="w-6 h-6" />, text: 'Real-time Code Running' },
      { icon: <Zap className="w-6 h-6" />, text: 'No Installation Required' },
      { icon: <BookOpen className="w-6 h-6" />, text: 'Perfect for Learning' }
    ],
    links: [
      { type: 'demo', url: 'https://awmie.github.io/PythonOnline/', icon: <Globe className="w-6 h-6" /> },
      { type: 'github', url: 'https://github.com/awmie/PythonOnline.git', icon: <GithubIcon className="w-6 h-6" /> }
    ],
    tech: ['PyScript', 'Python', 'HTML', 'CSS', 'JavaScript']
  }
];

const TabButton = memo(({ id, label, icon: Icon, isActive, onClick }: { id: TabId; label: string; icon: typeof tabs[number]['icon']; isActive: boolean; onClick: () => void; }) => (
  <button id={id} onClick={onClick} className={`
      flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
      ${isActive ? 'text-black dark:text-blue-400 bg-zinc-100/80 dark:bg-zinc-800/50 shadow-lg dark:shadow-blue-500/20 shadow-black/10 scale-105' : 'text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-blue-400'}
    `} aria-selected={isActive} role="tab">
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </button>
));

TabButton.displayName = 'TabButton';

const tooltipVariant = {
  rest: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};
const dotVariant = {
  rest: {},
  hover: { scale: 1.5 },
};

const MinimalCodingSkills = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const randomValues = useRef(codingSkills.map(() => ({
    x: (Math.random() - 0.5) * 10,
    y: (Math.random() - 0.5) * 10,
    r: (Math.random() - 0.5) * 20
  }))).current;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-4 px-2 md:px-4">
      {codingSkills.map((skill, i) => {
        const isSelected = selectedId === i;
        const { x, y, r } = randomValues[i];
        return (
          <motion.div
            key={i}
            className="relative"
            initial="rest"
            animate={isSelected ? { scale: 1.1, transition: { duration: 0.2 } } : { x: [0, x, 0], y: [0, y, 0], rotate: [0, r, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            onTouchStart={() => setSelectedId(i)}
            onTouchEnd={() => setSelectedId(null)}
            onHoverStart={() => setSelectedId(i)}
            onHoverEnd={() => setSelectedId(null)}
          >
            <motion.div variants={dotVariant} className="bg-white/5 dark:bg-black/10 backdrop-blur-md rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-black/5 dark:border-white/5 hover:border-blue-400/10 dark:hover:border-blue-500/10 hover:backdrop-blur-xl hover:bg-zinc-100/80 dark:hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-lg dark:hover:shadow-blue-500/20">
              <span className="text-base md:text-lg">{skill.icon}</span>
            </motion.div>
            <motion.div variants={tooltipVariant} initial="rest" animate={isSelected ? "hover" : "rest"} className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs p-1 bg-black text-white rounded pointer-events-none whitespace-nowrap">
              {skill.title}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

type HoveredCardData = {
	type: 'video' | 'projects';
	data: any;
	rect: DOMRect;
};

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState<TabId>('video');
  const [hoveredCard, setHoveredCard] = useState<HoveredCardData | null>(null);

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

  const handleCardHoverStart = (
    event: React.PointerEvent<HTMLDivElement>,
    cardData: any,
    type: 'video' | 'projects'
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredCard({ data: cardData, rect, type });
  };

  const handleCardHoverEnd = () => {
    setHoveredCard(null);
  };

  const renderHoveredCardPortal = () => {
    if (!hoveredCard) return null;
    const { rect, data, type } = hoveredCard;

    return createPortal(
      <div
        style={{
          position: 'fixed',
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          zIndex: 50,
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
        }}
        className="backdrop-blur-none"
      >
        <div className="w-full h-full bg-white/20 dark:bg-black/30 backdrop-blur-xl rounded-[20px] border border-black/10 dark:border-white/10 p-6 shadow-lg transition-all duration-300">
          {type === 'video' ? (
            <>
              {typeof data.icon === 'string' ? (
                <div className="text-4xl mb-4">{data.icon}</div>
              ) : (
                data.icon
              )}
              <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{data.description}</p>
            </>
          ) : (
            // Project content
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-base md:text-lg font-semibold">{data.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
              </div>
              <div className="flex gap-3">
                {data.links.map((link: any, i: number) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="w-6 h-6">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>,
      document.body
    );
  };

  const renderContent = () => {
    const cardStyles = {
      background: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    };

    const commonCardClasses = `
      p-6 rounded-[20px]
      backdrop-blur-md
      bg-white/10 dark:bg-black/20
      border border-black/5 dark:border-white/10
      transition-all duration-300
      hover:scale-[1.01]
      relative
      z-20
      ${hoveredCard ? 'opacity-30' : 'opacity-100'}
    `;

    switch (activeTab) {
      case 'video':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
            {videoSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={commonCardClasses}
                style={cardStyles}
                onPointerEnter={(e) => handleCardHoverStart(e, skill, 'video')}
                onPointerLeave={handleCardHoverEnd}
              >
                {typeof skill.icon === 'string' ? (
                  <div className="text-4xl mb-4">{skill.icon}</div>
                ) : (
                  skill.icon
                )}
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        );
      case 'projects':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 relative z-20 p-2 md:p-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={commonCardClasses}
                style={cardStyles}
                onPointerEnter={(e) => handleCardHoverStart(e, project, 'projects')}
                onPointerLeave={handleCardHoverEnd}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">{project.title}</h3>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-6 h-6">{link.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );
      case 'coding':
        return (
          <div className="min-h-[50px]">
            <MinimalCodingSkills />
          </div>
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
        className={hoveredCard ? 'blur-sm' : ''}
      >
        {renderContent()}
      </motion.div>

      {renderHoveredCardPortal()}
    </motion.section>
  );
};

export default TabbedContent;