import React from 'react';
import { motion } from 'framer-motion';

interface ModalCloseButtonProps {
  onClose: () => void;
  ariaLabel?: string;
}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ 
  onClose, 
  ariaLabel = "Close modal" 
}) => {
  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClose();
      }}
      whileHover={{ 
        scale: 1.08, 
        boxShadow: "0 0 40px rgba(0, 255, 255, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -8, 0],
      }}
      transition={{ 
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="fixed top-6 right-6 z-[999999] px-6 py-3 rounded-full border-2 border-primary/50 flex items-center justify-center bg-black/85 backdrop-blur-xl hover:bg-primary/10 hover:border-primary text-primary font-display font-bold tracking-[0.25em] uppercase text-[10px] md:text-xs transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.7)]"
      aria-label={ariaLabel}
      style={{ pointerEvents: 'auto' }}
    >
      Tap Here to Close
    </motion.button>
  );
};
