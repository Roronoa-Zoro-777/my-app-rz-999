import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';
import { assets } from '../../assets/assets';

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);

  return (
    <div
      className="relative px-8 py-16 overflow-hidden md:px-40 rounded-2xl"
      style={{
        backgroundImage: `url(${assets.kk9})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Optional: Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-50 rounded-2xl"></div>

      <div className="relative z-10 text-center text-cyan-100">
        <h2 className="text-3xl font-semibold drop-shadow-md">Learn From The Best</h2>
        <p className="max-w-3xl mx-auto mt-3 text-sm md:text-base">
          Discover our top-rated courses across various categories. From coding and design to
          <br />
          business and wellness, our courses are crafted to deliver results.
        </p>

        <div className="grid gap-4 px-4 my-10 grid-cols-auto md:px-0 md:my-16">
          {allCourses.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <Link
          to="/course-list"
          onClick={() => scrollTo(0, 0)}
          className="inline-block px-8 py-2 mt-6 text-sm font-medium transition-all duration-300 bg-black border border-gray-700 rounded-full shadow-sm text-cyan-100 hover:shadow-lg hover:shadow-cyan-500 hover:bg-gray-900"
        >
          Show All Courses 🔻
        </Link>
      </div>
    </div>
  );
};

export default CoursesSection;
