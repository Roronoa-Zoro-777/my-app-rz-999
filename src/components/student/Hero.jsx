import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  const sentence1 = 'Empower your future with the courses Designed to';
  const sentence2 = ' fit your choice.';
  const typingSpeed = 100;

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let fullText = sentence1 + sentence2;
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(prev => {
        const nextChar = fullText.charAt(index);
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
        }
        return prev + nextChar;
      });
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const part1 = displayText.slice(0, sentence1.length);
  const part2 = displayText.slice(sentence1.length);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full pt-20 overflow-hidden text-center md:pt-36 px-7 md:px-0 space-y-7"
      style={{
        backgroundImage: `url(${assets.kl2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white">
        <h1 className="relative max-w-3xl mx-auto font-bold text-white md:text-home-heading-large text-home-heading-small drop-shadow-lg">
          {part1}
          <span className="text-blue-400"> {part2}</span>
          <img
            src={assets.sketch}
            alt="sketch"
            className="absolute right-0 hidden md:block -bottom-7"
          />
        </h1>

        {/* Desktop Paragraph */}
        <div className="hidden px-4 py-6 mt-4 shadow-lg bg-black/80 md:block rounded-xl">
          <p className="flex items-center max-w-2xl gap-3 mx-auto font-mono text-base leading-relaxed tracking-wide text-transparent md:text-lg bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse drop-shadow-md">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            We bring together the world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
          </p>
        </div>

        {/* Mobile Paragraph */}
        <p className="max-w-sm mx-auto mt-4 font-semibold text-red-200 md:hidden">
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
        </p>

        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
