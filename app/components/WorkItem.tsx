import React from 'react';
import Image from 'next/image';
import ThreeDCard from './ThreeDCard';

interface WorkItemProps {
  title: string;
  description: string;
  image: string;
  width: number;
  height: number;
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, image, width, height }) => {
  return (
    <ThreeDCard>
      <div className="bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-full flex flex-col">
        <div className="relative w-full h-64 flex-shrink-0">
          <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </div>
        <div className="p-4 bg-black text-white-800 flex-grow"> 
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </ThreeDCard>
  );
};

export default WorkItem;
