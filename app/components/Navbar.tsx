"use client";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 font-poppins font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-white text-xl">Kehinde.</a>
        </Link>
        <div>
          <Link href="/work" legacyBehavior>
            <a className="text-gray-300 hover:text-white mx-2">Works</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
