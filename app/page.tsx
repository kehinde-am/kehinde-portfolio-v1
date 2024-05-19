"use client";

import Link from 'next/link';
import About from './components/About';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import TrackElement from './components/TrackElement';
import Card from './components/Card';

const HomePage = () => {
  return (
    <>
      <ScrollProgress />
      <div className="container mx-auto p-6 font-poppins">
        <Card>
          <h1 className="text-3xl font-bold mb-6">Hi there 👋,</h1>
          <p className="text-lg mb-6">Welcome to my portfolio!</p>
          <Link href="/resume.pdf" legacyBehavior>
            <a download className="bg-blue-500 text-white px-4 py-2 rounded">Download Resume</a>
          </Link>
        </Card>
        <About />
        <TrackElement />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
