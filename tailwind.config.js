/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // ✅ Vite HTML entry
    "./src/**/*.{js,ts,jsx,tsx}",  // ✅ All source files
  ],
  theme: {
    extend: {
      fontSize: {
        'Course-details-headind-small': ['26px', '36px'],
        'Course-details-headind-large': ['36px', '44px'],
        'home-heading-small': ['28px', '34px'],
        'home-heading-large': ['48px', '54px'],
        'default': ['15px', '21px'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'spin-breath': 'spinBreath 4s ease-in-out infinite',
        'breathing-dark-yellow': 'breathingDarkYellow 2s ease-in-out infinite',
        moveRightToLeft: 'moveRightToLeft 10s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        spinBreath: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
            boxShadow: '0 0 10px 4px rgba(255, 0, 0, 0.6)',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.1)',
            boxShadow: '0 0 20px 8px rgba(0, 0, 255, 0.6)',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
            boxShadow: '0 0 10px 4px rgba(255, 0, 0, 0.6)',
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
          },
        },
        breathingDarkYellow: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(202, 138, 4, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 15px 5px rgba(202, 138, 4, 0.9)',
          },
        },
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
     spacing: {
      'section-height' : '500px',
     } ,
     maxWidth: {
      'course-card' : '424px'
     },
     boxShadow: {
      'custom-card' : '0px 4px 15px 2px rgba(0,0,0.1) ',
     }
    },
  },
  plugins: [],
}
