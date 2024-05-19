// components/Card.tsx

import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const Card = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 mb-6"
    >
      {children}
    </motion.div>
  );
};

export default Card;
