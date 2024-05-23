/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import About from './components/About';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import ThreeDCard from './components/ThreeDCard';
import ConnectWithMe from './components/ConnectWithMe';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }

  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        <ThreeDCard>
          <h1 className="text-3xl font-bold mb-4 text-center">Hi there,
            <span className="inline-block ml-2">
              <Image src="/waving-hand.png" alt="Waving Hand" width={40} height={40} unoptimized />
            </span>
          </h1>
          <p className="text-lg text-center mb-6">I'm available and open to learning on the job</p>
        </ThreeDCard>
        <About />
        <Contact />
        <ConnectWithMe />
      </div>
    </>
  );
};

export default HomePage;
