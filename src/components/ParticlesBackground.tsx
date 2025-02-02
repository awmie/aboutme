import React, { useCallback, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    // Initial check
    setIsDark(document.documentElement.classList.contains('dark'));

    // Create observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          opacity: 0,
        },
        fpsLimit: 60,
        particles: {
            color: {
              value: isDark 
              ? ["#f97316", "#fb923c", "#fdba74", "#ff8c00", "#ffa500", "#ffb347"] 
              : ["#000000", "#1f2937", "#374151", "#4b5563", "#6b7280", "#9ca3af"],
            },
          move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
            bottom: "out",
            top: "out",
            left: "out",
            right: "out"
          },
          random: false,
          speed: 2,
          straight: false,
          bounce: false,
          },
          number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
          },
          opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
          },
          shape: {
          type: "star",
          },
          size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
          },
          twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
