import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data = '' }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data);
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [loading, setLoading] = useState(false);

  // Debounce the input value to avoid unnecessary API calls or navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 500); // Delay for 500ms after the user stops typing

    return () => clearTimeout(timer); // Cleanup on input change
  }, [input]);

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (debouncedInput.trim()) {
      setLoading(true); // Show loader when search is triggered
      // Simulate navigation or API call delay
      setTimeout(() => {
        navigate(`/course-list/${debouncedInput}`);
        setLoading(false); // Hide loader after navigation
      }, 1000); // Simulate delay
    }
  };

  return (
    <form
      onSubmit={onSearchHandler}
      className='flex items-center w-full max-w-xl overflow-hidden bg-black border border-gray-700 rounded-full shadow-md'
    >
      <div className='flex items-center justify-center px-4 bg-black'>
        <img
          src={assets.search_icon}
          alt='search_icon'
          className='w-5 h-5 md:w-6 md:h-6'
        />
      </div>

      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search for courses...'
        className='flex-1 px-4 py-2 text-sm text-white placeholder-gray-400 bg-black focus:outline-none md:text-base'
        aria-label="Search for courses"
      />

      <button
        type='submit'
        className={`px-5 py-2 text-sm text-white transition duration-300 bg-blue-700 rounded-full hover:bg-blue-800 md:px-7 md:py-2 md:text-base ${!input && 'cursor-not-allowed opacity-50'}`}
        disabled={!input.trim()} // Disable if input is empty
      >
        {loading ? (
          <div className="w-4 h-4 border-4 border-t-4 border-white rounded-full animate-spin"></div>
        ) : (
          'Search'
        )}
      </button>
    </form>
  );
};

export default SearchBar;
