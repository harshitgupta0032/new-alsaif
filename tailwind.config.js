/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/component/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}', // if using app directory
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '300px',  // small mobile
        'mobileLg': '640px', // large mobile (landscape)
        'tablet': '768px', // tablet
        'tabletLg': '900px', // large tablet or small laptop 
        'laptop': '1024px', // regular laptop
        'desktop': '1280px', // medium desktop
        'desktopLg': '1440px', // large desktop
        '4k': '1920px' // ultra wide or 4k screens
      },
    },
  },
  plugins: [],
};
