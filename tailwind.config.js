/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{html,js,tsx, jsx}',
    './components/**/*.{html,js,tsx, jsx}',
  ],
  mode: 'jit',
  theme: {
    fontFamily: {
      heading: ['Petrona', ...defaultTheme.fontFamily.serif],
      alpha: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      maxWidth: {
        '8xl' : '1440px'
      },
      colors: {
        alpha: '#002B14',
        alphaLight: '#002C14',
        bravo: '#FFFDD4',
        gray: colors.neutral,
        body: '#E1E1E1',
      },
      lineHeight: {
        'heading': '1.4'
      }
    },
  },
  plugins: [],
};
