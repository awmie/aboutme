import React, { memo } from 'react';
import { motion } from 'framer-motion';

const GradientBackground = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base color layer - static */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white dark:from-gray-950 dark:to-gray-900" />
      
      {/* Optimized noise texture with reduced animation complexity */}
      <motion.div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 2000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.35,
        }}
        initial={{ opacity: 0.25 }}
        animate={{
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1]
        }}
      />

      {/* Optimized gradient overlays - static */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,237,213,0.4)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(249,115,22,0.05)_100%)]" />
      
      {/* Optimized moving gradients with reduced complexity */}
      <motion.div
        className="absolute -inset-[100%] opacity-[0.15] dark:opacity-[0.08]"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(251,146,60,0.8), transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: ['-25%', '0%', '-25%'],
          y: ['-25%', '0%', '-25%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.5, 1]
        }}
      />
    </div>
  );
});

GradientBackground.displayName = 'GradientBackground';
export default GradientBackground;