import Image from 'next/image';
import { motion } from 'framer-motion';

interface WorkItemProps {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, image, width, height }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg overflow-hidden mb-6"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={image} alt={title} width={width} height={height} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default WorkItem;
