
import { useRef } from 'react';
import { useInView, useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';

const TrackElement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  if (isInView) {
    controls.start('visible');
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      transition={{ duration: 0.5 }}
    >
    </motion.div>
  );
};

export default TrackElement;
