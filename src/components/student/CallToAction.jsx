import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-between gap-4 px-6 py-6 text-white shadow-lg rounded-xl sm:flex-row"
      style={{
        backgroundImage: `url(${assets.kl4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-60 rounded-xl"></div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full gap-4 sm:flex-row">
        {/* Left: Text */}
        <div className="space-y-2 text-left max-sm:text-center">
          <h1 className="text-xl font-bold">!Learn Anything, Anytime, Anywhere 🕸️</h1>
          <p className="italic leading-relaxed text-gray-200">
            "Study not to just pass the test, but to understand and do your best.<br />
            Each small step you take today, will guide you all along the way."
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          {/* Get Started */}
          <button className="px-5 py-2 font-semibold text-white transition-all bg-indigo-600 shadow-md rounded-2xl hover:bg-indigo-700 hover:animate-breathing-dark-yellow">
            Get Started
          </button>

          {/* Learn More */}
          <button className="flex items-center gap-2 px-5 py-2 font-semibold text-black transition-all bg-white shadow-md rounded-2xl hover:scale-105 hover:animate-breathing-dark-yellow">
            Learn More
            <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
