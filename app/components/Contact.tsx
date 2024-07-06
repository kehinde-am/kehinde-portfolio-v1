/* eslint-disable react/no-unescaped-entities */

import { Typewriter } from 'react-simple-typewriter';
import React from 'react';
import ThreeDCard from './ThreeDCard';

const Contact = () => {
  return (
    <ThreeDCard>
      <section id="contact" className="p-6 md:p-12 bg-black text-white rounded-md">
        <div className="md:flex md:space-x-6">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Let's discuss</h2>
            <h2 className="text-3xl font-bold mb-4">
              on something <span className="text-blue-800">cool</span> together
            </h2>
            <p className="text-lg mb-6">
              <span className="text-white-800">
                <Typewriter
                  words={['Software Development.', 'Machine Learning.', 'Mobile Application Development.', 'Artificial Intelligence.']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
          <div className="md:w-1/2">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-4 bg-purple-100 text-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-4 bg-purple-100 text-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-800"
              />
              <textarea
                placeholder="Your message"
                className="w-full p-4 bg-purple-100 text-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-800"
                rows={5}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition duration-200 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path d="M21.426 3.594l-9.008 9.008-3.585-.597 12.046-8.411-3.453 8.929.793 3.789 1.302-9.548-9.547 1.302 3.789.793 8.929-3.453-8.411 12.046-.597-3.585 9.008-9.008 3.594-3.594z"/>
                </svg>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </ThreeDCard>
  );
};

export default Contact;
