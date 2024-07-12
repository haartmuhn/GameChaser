const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#806B7E',
          secondary: '#80806B',
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
        },
      },
    },
  };

// This file is used to extend the default Tailwind CSS configuration.