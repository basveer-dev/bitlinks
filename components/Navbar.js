import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex items-center justify-between text-white px-3">
      <div className="logo font-bold text-lg">
        <Link href="/">Bitlinks</Link>
      </div>
      <ul className="flex items-center justify-center gap-4">
        <Link href="/">
          <li className="relative group cursor-pointer text-white transition-all duration-300 transform hover:scale-110">
            Home
            {/* Underline Animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full rounded-2xl"></span>
          </li>
        </Link>

        <Link href="/about">
          <li className="relative group cursor-pointer text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full rounded-2xl"></span>
          </li>
        </Link>

        <Link href="/shorten">
          <li className="relative group cursor-pointer text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110">
            Shorten
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full rounded-2xl"></span>
          </li>
        </Link>

        <Link href="/contact">
          <li className="relative group cursor-pointer text-white hover:text-gray-200 transition-all duration-300 transform hover:scale-110">
            Contact Us
            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white transition-all duration-300 group-hover:w-full rounded-2xl"></span>
          </li>
        </Link>
        <li className="flex gap-4">
          <Link href="/shorten">
            <button className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-4 rounded-full font-bold shadow-md shadow-[rgba(0,0,0,0.5)] cursor-pointer">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-800 hover:bg-purple-600 text-white py-2 px-4 rounded-full font-bold shadow-md shadow-[rgba(0,0,0,0.5)] cursor-pointer">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
