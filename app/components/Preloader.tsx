
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ setLoading }: { setLoading: (loading: boolean) => void }) => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['🌟 Welcome to My Portfolio 🌟', '⏳ Loading...', '😊 Please Wait...'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [setLoading, texts.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-blue-800 text-white z-50"
    >
      <h1 className="text-2xl">{texts[textIndex]}</h1>
    </motion.div>
  );
};

export default Preloader;
