module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          100: '#E8FFC2',
          200: '#00FFDD',
          300: '#2FA4FF',
          400: '#0E185F',
          500: '#070D31',
          600: '#030618'
        }
      },
      skew: {
        "n-8": "-8deg"
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem'
      },
      fontFamily: {
        caveat: ['Caveat']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
