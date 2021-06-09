const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.lightBlue[100],
          DEFAULT: colors.lightBlue[400],
          dark: colors.lightBlue[700],
        },
        accent: {
          light: colors.emerald[100],
          DEFAULT: colors.emerald[400],
          dark: colors.emerald[700],
        },
        warning: {
          light: colors.amber[100],
          DEFAULT: colors.amber[400],
          dark: colors.amber[700],
        },
        danger: {
          light: colors.rose[100],
          DEFAULT: colors.rose[400],
          dark: colors.rose[700],
        },
        success: {
          light: colors.lime[100],
          DEFAULT: colors.lime[400],
          dark: colors.lime[700],
        },
        light: {
          light: colors.coolGray[100],
          DEFAULT: colors.coolGray[200],
          dark: colors.coolGray[300],
        },
        dark: {
          light: colors.gray[600],
          DEFAULT: colors.gray[800],
          dark: colors.gray[900],
        },
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
    },
  },
  plugins: [],
};
