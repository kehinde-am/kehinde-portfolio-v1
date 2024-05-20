"use client";

import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import TrackElement from './components/TrackElement';
// import Card from './components/Card';
import Preloader from './components/Preloader';
import ThreeDCard from './components/ThreeDCard';
import ConnectWithMe from './components/ConnectWithMe';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }

  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto p-6 font-poppins">
      <ThreeDCard>
        {/* <Card> */}
          <h1 className="text-3xl font-bold mb-6">Hi there 👋,</h1>
        
        {/* </Card> */}
        </ThreeDCard>
        <About />
        <TrackElement />
        <Contact />
        <ConnectWithMe />
      </div>
    </>
  );
};

export default HomePage;