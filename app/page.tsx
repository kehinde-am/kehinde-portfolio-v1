"use client";

import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import TrackElement from './components/TrackElement';
import Card from './components/Card';
import Preloader from './components/Preloader';
import { Typewriter } from 'react-simple-typewriter';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader setLoading={setLoading} />;
  }

  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto p-6 font-poppins">
        <Card>
          <h1 className="text-3xl font-bold mb-6">Hi there 👋,</h1>
          <p className="text-lg mb-6">
            <Typewriter
              words={['Software Development','Machine Learning', 'Mobile Application Development', 'Artificial Intelligence']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </Card>
        <About />
        <TrackElement />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;