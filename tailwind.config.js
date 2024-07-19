/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.hbs',
    './views/**/*.handlebars',
     ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1d3149',
      },
    },
  },
  plugins: [],
}

