/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './build/*.html', 'build/js/*.js'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      },
      animation:{
        spin: "spin 5s linear infinite",
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      blur:{
        xs:'2px',
      }
    },
  },
  plugins: [],
}
