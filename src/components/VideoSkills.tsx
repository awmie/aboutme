import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Adobe Premiere Pro',
    description: '50+ video edits',
    icon: '🎬',
  },
  {
    title: 'Final Cut Pro',
    description: '30+ video edits',
    icon: '🎥',
  },
  {
    title: 'Adobe After Effects',
    description: '40+ videos',
    icon: '✨',
  },
  {
    title: 'Canva Editing',
    description: '30+ designs',
    icon: '🎨',
  },
];

const VideoSkills: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Video Editing Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="p-6 rounded-[20px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                     border border-white/20 transition-all duration-200
                     shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.04)]
                     hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default VideoSkills;