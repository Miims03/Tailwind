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
        backeh : 'backeh 0.3s linear',
        fadein : 'fadeIn 1.5s linear',
        fadeinn : 'fadeInn 1.5s linear',
        fadeinnn : 'fadeInnn 1.5s linear',
      },

      keyframes: {
        spineh: {
          'from': {transform: 'rotate(0deg)' },
          'to' : {transform : 'rotate(360deg)'}
        },
        comeh: {
          'from': {transform: 'translateX(100%)' },
          'to' : {transform : 'translateX(0)'}
        },
        backeh: {
          'from': {transform: 'translateX(0)' },
          'to' : {transform : 'translateX(100%)'}
        },
        fadeIn: {
          '0%': {opacity: '0' },
          '100%' : {opacity : '1'}
        },
        fadeInn: {
          '0%': {opacity: '0' },
          '33%' : {opacity: '0' },
          '100%' : {opacity : '1'}
        },
        fadeInnn: {
          '0%': {opacity: '0' },
          '66%' : {opacity: '0' },
          '100%' : {opacity : '1'}
        },
      },
      zIndex: {
        '100': '100',
      }
      
    },
  },
  plugins: [],
}

