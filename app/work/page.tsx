"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import WorkItem from '../components/WorkItem';
import Tools from '../components/Tools';
import ThreeDCard from '../components/ThreeDCard';
import { useInView } from 'react-intersection-observer';

const initialWorkData = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    image: '/images/Project1.png',
    width: 800,
    height: 600,
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    image: '/images/Project1.png',
    width: 800,
    height: 600,
  },
  // Additional projects can be added here
];

const WorkPage = () => {
  const [workData, setWorkData] = useState(initialWorkData);
  const [hasMore, setHasMore] = useState(true); // State to manage if more work can be loaded
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const loadingRef = useRef(false);

  const loadMoreWork = useCallback(() => {
    if (loadingRef.current || !hasMore) return; // Prevent multiple triggers

    loadingRef.current = true;

    setTimeout(() => {
      const moreWorkData = [
        {
          title: 'Project Three',
          description: 'Description of project three.',
          image: '/images/Project1.png',
          width: 800,
          height: 600,
        },
      ];

      if (workData.length < 3) { 
        setWorkData(prevWorkData => [...prevWorkData, ...moreWorkData]);
        loadingRef.current = false;
      } else {
        setHasMore(false); // No more projects to load
      }
    }, 1000);
  }, [hasMore, workData.length]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMoreWork();
    }
  }, [inView, loadMoreWork, hasMore]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Projects.</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
        {workData.map((work, index) => (
          <WorkItem
            key={index}
            title={work.title}
            description={work.description}
            image={work.image}
            width={800} 
            height={600}
          />
        ))}
      </div>
      <div ref={ref} className="mt-6 text-white">
        {hasMore ? "Loading more work...🤌🏽" : "All works loaded. 😎"}
      </div>
      <ThreeDCard>
        <Tools />
      </ThreeDCard>
    </div>
  );
};

export default WorkPage;
