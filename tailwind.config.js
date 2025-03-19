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
          DEFAULT: '#034638', // Dark Green
          light: '#045d4b',   // Light Green
          dark: '#023528',
        },
        secondary: {
          DEFAULT: '#4CAF50', // Light Green
          light: '#60c464',
          dark: '#45a049',
        },
        white: '#FFFFFF', // White
      },
      maxWidth: {
        '7xl': '80rem',
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
      },
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em', fontWeight: '700' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      borderRadius: {
        'lg': '0.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
