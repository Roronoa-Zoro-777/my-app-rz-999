import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';
import { assets } from '../../assets/assets';
import luuf from '../../assets/luuf.gif';
import humanizeDuration from 'humanize-duration';
import Footer from '../../components/student/Footer';
import YouTube from 'react-youtube';

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [isAlreadyEnrolled, setisAlreadyEnrolled] = useState(false);
  const [playerData, setplayerData] = useState(null);

  const {
    allCourses,
    calculateRating,
    currency,
    calculateNoOfLectures,
    calculateCourseDuration,
    calculateChapterTime,
  } = useContext(AppContext);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const findCourse = allCourses.find((course) => course._id === id);
      setCourseData(findCourse);
    }
  }, [allCourses, id]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!courseData) return <Loading />;

  return (
    <div className="flex flex-col min-h-screen text-white bg-black">
      <div
        className="relative flex-grow px-4 pt-20 sm:px-6 md:px-16 lg:px-36 md:pt-24 animate-fadeIn"
        style={{
          backgroundImage: `url(${luuf})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-70" />

        <div className="relative z-10 flex flex-col-reverse items-start justify-between gap-10 md:flex-row">
          <div className="z-10 w-full md:max-w-2xl">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-5xl">
              {courseData.courseTitle}
            </h1>
            <p
              className="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base"
              dangerouslySetInnerHTML={{ __html: courseData.courseDescription?.slice(0, 200) }}
            />

            <div className="flex flex-wrap items-center pt-4 pb-2 text-xs text-gray-300 gap-x-4 sm:text-sm">
              <p>{calculateRating(courseData)}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
              <p className="text-blue-500">
                ({courseData.courseRatings.length} {courseData.courseRatings.length > 1 ? 'ratings' : 'rating'})
              </p>
              <p>
                {courseData.enrolledStudents.length} {courseData.enrolledStudents.length > 1 ? 'students' : 'student'}
              </p>
            </div>

            <p className="text-xs text-gray-400 sm:text-sm">
              Course by <span className="text-blue-500 underline">One Piece</span>
            </p>

            <div className="pt-8">
              <h2 className="text-lg font-semibold sm:text-xl">Course Structure</h2>
              <div className="pt-5 space-y-4">
                {courseData.courseContent.map((chapter, index) => (
                  <div
                    key={index}
                    className="transition-all duration-300 border border-gray-700 rounded-lg bg-gray-800/70 hover:shadow-lg hover:bg-gray-800/90"
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          className={`transform transition-transform ${openSections[index] ? 'rotate-180' : ''}`}
                          src={assets.down_arrow_icon}
                          alt="arrow"
                        />
                        <p className="text-sm font-medium md:text-base">{chapter.chapterTitle}</p>
                      </div>
                      <p className="text-xs text-gray-400 sm:text-sm">
                        {chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}
                      </p>
                    </div>
                    <div
                      className={`mt-2 space-y-3 overflow-hidden transition-all duration-300 ${
                        openSections[index] ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <ul className="space-y-3">
                        {chapter.chapterContent.map((lecture, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 p-3 transition-all duration-200 border border-gray-700 rounded-lg bg-gray-800/70 hover:bg-gray-800/90"
                          >
                            <img src={assets.play_icon} alt="play" className="flex-shrink-0 w-5 h-5 mt-1" />
                            <div className="flex flex-col gap-1 text-sm">
                              <p className="font-medium text-white">{lecture.lectureTitle}</p>
                              <div className="flex items-center gap-3 text-xs text-gray-400">
                                {lecture.isPreviewFree && (
                                  <button
                                    onClick={() =>
                                      setplayerData({
                                        videoId: lecture.lectureUrl.split('/').pop(),
                                      })
                                    }
                                    className="px-2 py-0.5 bg-green-600 text-white rounded-full text-xs font-semibold"
                                  >
                                    Preview
                                  </button>
                                )}
                                <p>
                                  {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                                    units: ['h', 'm'],
                                  })}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-10 text-sm md:text-base">
              <h3 className="text-lg font-semibold text-white sm:text-xl">Course Description</h3>
              <p
                className="pt-3 text-gray-300 rich-text"
                dangerouslySetInnerHTML={{ __html: courseData.courseDescription }}
              ></p>
            </div>
          </div>

          <div className="z-10 w-full max-w-lg overflow-hidden bg-white rounded-t shadow-custom-card md:rounded-none">
            {playerData ? (
              <YouTube
                videoId={playerData.videoId}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName="w-full aspect-video"
              />
            ) : (
              <img src={courseData.courseThumbnail} alt="course thumbnail" className="w-full" />
            )}

            <div className="p-5">
              <div className="flex items-center gap-2">
                <img className="w-3.5" src={assets.time_left_clock_icon} alt="time left" />
                <p className="text-red-500">
                  <span className="font-medium">5 days</span> left at the price
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <p className="text-2xl font-semibold text-gray-800 md:text-4xl">
                  {currency}
                  {(courseData.coursePrice - (courseData.discount * courseData.coursePrice) / 100).toFixed(2)}
                </p>
                <p className="text-gray-500 line-through md:text-lg">
                  {currency}
                  {courseData.coursePrice}
                </p>
                <p className="text-gray-500 md:text-lg">{courseData.discount}% off</p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-gray-500 md:text-base md:pt-4">
                <div className="flex items-center gap-1">
                  <img src={assets.star} alt="rating" />
                  <p>{calculateRating(courseData)}</p>
                </div>
                <div className="w-px h-4 bg-gray-500/40" />
                <div className="flex items-center gap-1">
                  <img src={assets.time_clock_icon} alt="duration" />
                  <p>{calculateCourseDuration(courseData)}</p>
                </div>
                <div className="w-px h-4 bg-gray-500/40" />
                <div className="flex items-center gap-1">
                  <img src={assets.lesson_icon} alt="lessons" />
                  <p>{calculateNoOfLectures(courseData)} lessons</p>
                </div>
              </div>
              <button className="w-full py-3 mt-4 font-medium text-white transition-all duration-300 bg-blue-600 rounded md:mt-6 hover:bg-blue-700 hover:scale-105">
                {isAlreadyEnrolled ? 'AlreadyEnrolled' : 'Enroll Now'}
              </button>
              <div className="p-6 mt-6 text-white bg-gray-800 shadow-lg rounded-xl">
                <p className="pb-2 mb-4 text-xl font-semibold border-b border-gray-600">
                  What's in the course
                </p>
                <ul className="space-y-2 text-sm text-gray-300 list-disc list-inside">
                  <li>Lifetime access with free updates.</li>
                  <li>Step-by-step, hands-on project guidance.</li>
                  <li>Downloadable resources and source code.</li>
                  <li>Quizzes to test your knowledge.</li>
                  <li>Certificate of completion.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetails;
