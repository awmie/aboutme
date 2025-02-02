import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.15), transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.15), transparent 50%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
    </div>
  );
};

export default AnimatedBackground;