/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#061E29',
          navy: '#213448',
          sage: '#90AB8B',
          royal: '#1B3C53',
          parchment: '#FAF3E1',
          mist: '#EAEFEF',
          slate: '#BFC9D1',
          primary: '#0C2C55',
          midnight: '#061E29',
          ocean: '#213C51',
          charcoal: '#25343F',
          storm: '#30364F',
          black: '#000000',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
