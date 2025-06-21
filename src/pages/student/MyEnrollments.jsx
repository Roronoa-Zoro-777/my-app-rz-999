import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useState } from 'react';
import {Line} from 'rc-progress'

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration ,navigate} = useContext(AppContext)

  const[progressArray, setProgressArray] = useState([
    {lectureCompleted: 2,totalLectures: 4},
    {lectureCompleted: 1,totalLectures: 4},
    {lectureCompleted: 1,totalLectures: 1},
    {lectureCompleted: 1,totalLectures: 3},
    {lectureCompleted: 3,totalLectures: 4},
    {lectureCompleted: 5,totalLectures: 6},
    {lectureCompleted: 2,totalLectures: 3},
    {lectureCompleted: 4,totalLectures: 2},
    {lectureCompleted: 6,totalLectures: 7},
    {lectureCompleted: 0,totalLectures: 2},
    {lectureCompleted: 3,totalLectures: 7},
    {lectureCompleted: 2,totalLectures: 6},
    {lectureCompleted: 1,totalLectures: 5},
    {lectureCompleted: 5,totalLectures: 6},
  ])

  return (
    <div className="min-h-screen px-4 py-10 text-white bg-gradient-to-br from-black via-gray-900 to-gray-950">
      <h1 className="mb-8 text-2xl font-bold text-center underline sm:text-3xl md:text-4xl decoration-blue-500">
        My Enrollments
      </h1>

      <div className="p-4 mx-auto overflow-x-auto shadow-xl max-w-7xl sm:p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/10">
        <table className="min-w-full text-xs table-auto sm:text-sm md:text-base">
          <thead className="text-gray-300 uppercase border-b border-gray-700">
            <tr>
              <th className="px-3 py-3 text-left">Course</th>
              <th className="px-3 py-3 text-left">Duration</th>
              <th className="px-3 py-3 text-left">Completed</th>
              <th className="px-3 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {enrolledCourses.map((course, index) => (
              <tr
                key={index}
                className="transition duration-300 hover:bg-white/10 hover:shadow-lg hover:scale-[1.01]"
              >
                <td className="px-3 py-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <img
                      src={course.courseThumbnail}
                      alt="thumbnail"
                      className="object-cover w-16 h-16 rounded-lg shadow-md sm:w-20 sm:h-20 md:w-24 md:h-24"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{course.courseTitle}</p>
                      <p className="text-xs text-gray-400">by {course.instructorName || 'Instructor'}</p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 text-gray-300">{calculateCourseDuration(course)}</td>
                <td className="px-3 py-4 text-gray-300">
                  {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`}
                  <span className="font-medium text-white">lectures</span>
                </td>
                <td className="px-3 py-4"><button className="inline-block px-4 py-1 text-xs font-semibold text-yellow-400 rounded-full shadow-sm sm:text-sm bg-yellow-800/50" onClick={()=> navigate('/player' + course._id)}>
                  {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures ===1 ? 'completed' : 'On Going'}
                  </button>
                </td>
              </tr>
            ))}

            {enrolledCourses.length === 0 && (
              <tr>
                <td colSpan="4" className="py-10 text-center text-gray-400">
                  You are not enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrollments;
