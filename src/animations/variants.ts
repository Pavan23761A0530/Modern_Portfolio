import { Variants } from 'framer-motion';

/**
 * Reusable Framer Motion variants for consistent portfolio animations.
 * Optimized for performance and respect reduced motion settings.
 */

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'linear' } },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const revealAnimation: Variants = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  animate: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

export const glassHover = {
  hover: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(0, 255, 255, 0.3)',
    boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
    transition: { duration: 0.3 },
  },
};
