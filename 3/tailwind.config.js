/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        spineh : 'spineh 5s linear infinite',
        comeh : 'comeh 0.3s linear',
      },

      keyframes: {
        spineh: {
          'from': { transform: 'rotate(0deg)' },
          'to' : {transform : 'rotate(360deg)'}
        },
        comeh: {
          'from': { transform: 'translateX(-100%)' },
          'to' : {transform : 'translateX(0)'}
        },
      }
      
    },
  },
  plugins: [],
}

