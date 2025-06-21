import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-4 text-xs text-white bg-black">
      <div className="flex flex-col items-center justify-between gap-6 mx-auto max-w-7xl md:flex-row">

        {/* Left side: Logo and Text */}
        <div className="flex items-center space-x-3">
          <img
            src={assets.luffy}
            alt="logo"
            className="object-cover w-8 h-8 rounded-full animate-bounce"
          />
          <p className="max-w-xs leading-tight text-red-500">
            &copy; 2025 OnePiece. Monkey D. Luffy is the protagonist of the Japanese manga series, with rubber-like powers after eating a Devil Fruit.
          </p>
        </div>

        {/* Right side: Links + Email */}
        <div className="flex flex-col items-center gap-4 md:flex-row">

          {/* Links */}
          <ul className="flex space-x-4 text-white/80">
            <li>
              <a href="#" className="underline hover:text-red-500">Home</a>
            </li>
            <li>
              <a href="#" className="underline hover:text-red-500">About</a>
            </li>
            <li>
              <a href="#" className="underline hover:text-red-500">Contact</a>
            </li>
            <li>
              <a href="#" className="underline hover:text-red-500">Privacy</a>
            </li>
          </ul>

          {/* Email Subscribe */}
          <div className="flex items-center space-x-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-2 py-1 text-xs placeholder-gray-400 transition-all duration-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
            />
            <button className="px-3 py-1 text-xs transition-all duration-300 bg-red-600 rounded-md hover:bg-red-700">
              Subscribe
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
