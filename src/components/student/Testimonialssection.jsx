import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialsSection = () => {
  return (
    <section
      className="max-w-6xl px-4 py-10 mx-auto text-center text-gray-100 shadow-lg sm:px-6 md:px-12 rounded-2xl animate-fade-in"
      style={{
        backgroundImage: `url(${assets.kk8})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Optional: dark overlay for text readability
        position: 'relative',
      }}
    >
      

      <div className="relative z-10">
        {/* Heading Box - removed bg color, just padding */}
        <div className="inline-block px-6 py-3 mb-6 bg-transparent border border-blue-200 shadow-md rounded-xl">
          <h2 className="text-2xl font-extrabold sm:text-3xl md:text-4xl drop-shadow-md">
            Testimonials 👀👇
          </h2>
        </div>

        {/* Description Box - removed bg color */}
        <div className="max-w-3xl px-6 py-4 mx-auto mb-10 bg-transparent border border-gray-700 shadow-sm rounded-xl">
          <p className="text-sm leading-relaxed sm:text-base md:text-lg">
            Hear from our <span className="font-semibold text-red-400">learners</span> as they share their journeys of transformation,
            success, and how our <span className="font-semibold text-blue-400">platform</span> has made a difference in their lives.
          </p>
        </div>

        {/* Responsive Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white border border-gray-600 shadow-md rounded-xl hover:scale-105 bg-opacity-80"
            >
              {/* White Top: Image and Name */}
              <div className="flex items-center gap-4 px-6 py-4 text-black border-b border-gray-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover border-2 border-blue-400 rounded-full shadow-md w-14 h-14"
                />
                <div>
                  <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Black Bottom: Rating and Feedback */}
              <div className="px-6 py-4 text-left text-gray-800 bg-gray-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <img
                      className={`w-5 h-5 transition-all duration-300 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'opacity-30'}`}
                      key={i}
                      src={assets.star}
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
