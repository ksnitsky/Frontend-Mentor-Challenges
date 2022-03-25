module.exports = {
  content: [
    "./main.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: 'hsl(25, 97%, 53%)',
        white: 'hsl(0, 0%, 100%)',
        'lightGrey': 'hsl(217, 12%, 63%)',
        'mediumGrey': 'hsl(216, 12%, 54%)',
        'darkGrey': 'hsl(216, 12%, 54%, 0.14)',
        'darkBlue': {
          900: 'hsl(213, 19%, 18%)',
          500: 'hsl(213, 19%, 18%, 0.5)',
        },
        'veryDarkBlue': 'hsl(216, 12%, 8%)',
      }
    },
  },
  plugins: [],
}
