import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  "Front-End Developer",
  "Machine Learning Enthusiast", 
  "AI Learner",
  "Cybersecurity Explorer",
  "Web Developer",
  "Dashboard Designer"
];

const RotatingTitles: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
          className="text-2xl md:text-3xl lg:text-4xl font-display font-bold gradient-text"
        >
          {titles[currentIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTitles;