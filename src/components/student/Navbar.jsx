import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../../context/AppContext';

const Navbar = () => {
  const location = useLocation();
  const { navigate, isEducator } = useContext(AppContext);
  const isCourseListPage = location.pathname.includes('/course-list');
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`relative flex items-center justify-between px-4 sm:px-14 lg:px-36 border-b border-gray-500 h-24 ${
        isCourseListPage ? 'bg-black' : 'bg-black'
      }`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <img
    src={assets.helloGif}
    alt="Hello"
    className="absolute top-0 h-full opacity-100 animate-moveRightToLeft"
    style={{ width: 'auto', minWidth: '150px' }}
  />
</div>


      {/* Logo */}
      <div className="relative z-10 flex items-center gap-4">
        <img
          onClick={() => navigate('/')}
          src={assets.luffy}
          alt="Logo"
          className="w-24 h-24 rounded-full cursor-pointer animate-spin-breath"
        />
      </div>

      {/* Desktop Nav */}
      <div className="relative z-10 flex items-center hidden gap-5 text-white md:flex">
        {user && (
          <>
            <button
              onClick={() => navigate('/educator')}
              className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 hover:shadow-[0_0_15px_4px_rgba(34,197,94,0.8)]"
            >
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <button
              onClick={() => navigate('/my-enrollments')}
              className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 hover:shadow-[0_0_15px_4px_rgba(239,68,68,0.8)]"
            >
              My Enrollments
            </button>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="px-5 py-2 text-white transition-all bg-blue-700 rounded-full hover:bg-blue-800"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="relative z-10 flex items-center gap-2 text-white md:hidden sm:gap-5">
        {user && (
          <>
            <button
              onClick={() => navigate('/educator')}
              className="px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 hover:shadow-[0_0_12px_3px_rgba(34,197,94,0.8)]"
            >
              {isEducator ? 'Educator Dashboard' : 'Become Educator'}
            </button>
            <button
              onClick={() => navigate('/my-enrollments')}
              className="px-3 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full transition-all hover:bg-indigo-700 hover:shadow-[0_0_12px_3px_rgba(239,68,68,0.8)]"
            >
              My Enrollments
            </button>
          </>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="p-2 transition-all bg-white rounded-full hover:scale-105"
          >
            <img src={assets.user_icon} alt="User Icon" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
