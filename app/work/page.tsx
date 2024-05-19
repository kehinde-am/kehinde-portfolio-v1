"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import WorkItem from '../components/WorkItem';
import { useInView } from 'react-intersection-observer';

const initialWorkData = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    image: '/images/Project1.png', // Make sure this path is correct
    width: 800,
    height: 600,
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    image: '/images/Project1.png', // Make sure this path is correct
    width: 800,
    height: 600,
  },
  // Add more projects here
];

const WorkPage = () => {
  const [workData, setWorkData] = useState(initialWorkData);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const loadingRef = useRef(false);

  const loadMoreWork = useCallback(() => {
    if (loadingRef.current) return;

    loadingRef.current = true;

    setTimeout(() => {
      const moreWorkData = [
        {
          title: 'Project Three',
          description: 'Description of project three.',
          image: '/images/Project1.png', //
          width: 800,
          height: 600,
        },
      ];

      setWorkData((prevWorkData) => [...prevWorkData, ...moreWorkData]);
      loadingRef.current = false;
    }, 1000); // Simulate network request delay
  }, []);

  useEffect(() => {
    if (inView) {
      loadMoreWork();
    }
  }, [inView, loadMoreWork]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workData.map((work, index) => (
          <WorkItem
            key={index}
            title={work.title}
            description={work.description}
            image={work.image}
            width={work.width}
            height={work.height}
          />
        ))}
      </div>
      <div ref={ref} className="mt-6">
        Loading more work...
      </div>
    </div>
  );
};

export default WorkPage;
