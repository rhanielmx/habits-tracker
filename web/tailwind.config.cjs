/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090A'
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0,1fr))'
      },
      keyframes: {
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0%)'},
        } 
      },
      animation: {
        slideDown: 'slideDown 0.15s linear forwards'
      }
    },
  },
  plugins: [],
}
