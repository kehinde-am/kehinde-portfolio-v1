import { useRef } from 'react';
import { motion } from 'framer-motion';

const ThreeDCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-full p-6 opacity-12 text-white cursor-grab backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      drag
      dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
      dragElastic={0.2}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default ThreeDCard;
