module.exports = {
  darkMode: 'class',
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
        },
        calc: {
          dark: {
            100: "#22252D",
            200: "#272B33",
            300: "#292D36"
          },
          light: {
            100: "#F7F7F7",
            200: "#F4F4F4"
          }
        },
        stone: {
          150: '#E7E7E8'
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
      },
      maxWidth: {
        "2xs": "18rem",
        "3xs": "16rem"
      }, 
      screens: {
        xs: "400px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
