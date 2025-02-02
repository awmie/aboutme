import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Python Programming',
    level: 'Intermediate',
    icon: '🐍',
  },
  {
    title: 'Web Dev',
    level: 'Tailwind Framework',
    icon: '🌐',
  },
  {
    title: 'JavaScript',
    level: 'Average',
    icon: '💻',
  },
];

const CodingSkills: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Coding Knowledge 💻</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
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
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CodingSkills;