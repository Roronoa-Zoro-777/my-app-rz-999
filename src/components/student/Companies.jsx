import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  return (
    <div
      className="relative w-full px-6 py-10 overflow-hidden text-center text-white md:px-10"
      style={{
        backgroundImage: `url(${assets.kl3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10">
        <p className="text-base font-semibold text-blue-100">Trusted By Learners From</p>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-5 md:mt-10">
          <img src={assets.microsoft_logo} alt="Microsoft" className="w-20 md:w-28" />
          <img src={assets.walmart_logo} alt="Walmart" className="w-20 md:w-28" />
          <img src={assets.accenture_logo} alt="Accenture" className="w-20 md:w-28" />
          <img src={assets.adobe_logo} alt="Adobe" className="w-20 md:w-28" />
          <img src={assets.paypal_logo} alt="PayPal" className="w-20 md:w-28" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
