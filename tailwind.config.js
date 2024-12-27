/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  content: [],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFF9F0',
          100: '#FFF4E2',
          200: '#FFECCA',
          300: '#FFDC9F',
          400: '#FFC869',
          500: '#FFAF26',
          600: '#ED9C11',
          700: '#C88208',
          800: '#A86E09',
          900: '#8F5F0C',
          950: '#503301w',
        },
        pink: {
          50: '#FFF0F4',
          100: '#FFE2EA',
          200: '#FFCADB',
          300: '#FF9FBD',
          400: '#FF699B',
          500: '#FF2674',
          600: '#ED116A',
          700: '#C8085B',
          800: '#A80953',
          900: '#8F0C4D',
          950: '#500126',
        },
      },
      fontFamily: {
        body: ['Poppins'],
      },
    },
  },
  plugins: [],
}

