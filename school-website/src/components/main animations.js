import { motion } from 'framer-motion';
import React from 'react';

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const slideIn = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

export const FadeInView = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={fadeInUp}
  >
    {children}
  </motion.div>
);

export const SlideInView = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={slideIn}
  >
    {children}
  </motion.div>
);