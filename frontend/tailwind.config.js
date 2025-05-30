/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0F9',
          100: '#CCE0F3',
          200: '#99C2E8',
          300: '#66A3DC',
          400: '#3385D1',
          500: '#0066C5', // Main primary color
          600: '#0052A3',
          700: '#003D7A',
          800: '#002952',
          900: '#001429',
        },
        secondary: {
          50: '#E6F9F7',
          100: '#CCF3EF',
          200: '#99E8DF',
          300: '#66DCCF',
          400: '#33D1BF',
          500: '#00C5AF', // Main secondary color
          600: '#00A38F',
          700: '#007A6B',
          800: '#005247',
          900: '#002924',
        },
        accent: {
          50: '#FEE8E7',
          100: '#FDD0CF',
          200: '#FBA1A0',
          300: '#F97370',
          400: '#F74441',
          500: '#F51612', // Main accent color
          600: '#C9110E',
          700: '#970D0B',
          800: '#640807',
          900: '#320404',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};