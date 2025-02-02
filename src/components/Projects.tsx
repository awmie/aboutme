import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Programming',
    subtitle: 'Python',
    items: [
      { icon: '🏆', text: 'Hackerrank: Silver level ⭐⭐⭐☆☆' },
      { icon: '📂', text: 'MyGitHub Portfolio' },
    ],
    description: 'These are some of my Programming Experience in Python.',
  },
  {
    title: 'Intermediate',
    subtitle: 'Artificial Intelligence',
    items: [
      { icon: '🎓', text: 'Certificate by Great Learning (Google)' },
      { icon: '🚀', text: '7-days BootCamp @devtown' },
    ],
    description: 'Achievements in AI.',
  },
  {
    title: 'Github',
    subtitle: 'Projects',
    items: [
      { icon: '🎮', text: 'Tic-Tac-Toe AI' },
      { icon: '🎵', text: 'Discord music bot with spotify integration' },
      { icon: '💻', text: 'Online python interpreter using Pyscript' },
      { icon: '🔍', text: 'Fraud Detection using different python models' },
    ],
    description: "Projects I've worked on.",
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Some of my works ✍️</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="p-6 rounded-[20px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                     border border-white/20 transition-all duration-200
                     shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.04)]
                     hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
          >
            <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">{project.title}</h3>
            <h4 className="text-xl font-bold mb-4">{project.subtitle}</h4>
            <ul className="space-y-2 mb-4">
              {project.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-start gap-2"
                  whileHover={{
                    x: 2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;