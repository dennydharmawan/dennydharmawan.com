/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    fontSize: false,
  },
  theme: {
    extend: {
      screens: {
        xs: '415px',
      },
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        solid: '6px 6px #101828',
      },
      colors: {
        abc: {
          DEFAULT: '#fff',
        },
        'primary-blurple': {
          DEFAULT: '#635bff',
          50: '#ecf0ff',
          100: '#dde3ff',
          200: '#c2cbff',
          300: '#9ca7ff',
          400: '#7578ff',
          500: '#635bff',
          600: '#4e36f5',
          700: '#432ad8',
          800: '#3725ae',
          900: '#302689',
        },
        'primary-downriver': {
          50: '#f1f7fe',
          100: '#e1eefd',
          200: '#bdddfa',
          300: '#83c2f6',
          400: '#41a3ef',
          500: '#1887df',
          600: '#0b69be',
          700: '#0a549a',
          800: '#0d487f',
          900: '#0a2540',
        },
        'primary-pacific': {
          50: '#ebffff',
          100: '#cdfdff',
          200: '#a1f8ff',
          300: '#60f1ff',
          400: '#18e0f8',
          500: '#00c3de',
          600: '#00a2c3',
          700: '#087b96',
          800: '#10637a',
          900: '#125267',
        },
      },
    },
  },
  plugins: [require('tailwindcss-fluid-type')],
};
