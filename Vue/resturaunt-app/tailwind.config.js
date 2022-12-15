/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary':'#DEF5E5',
        'secondary':'#404258',
        'primary-alt':'#BCEAD5',
        'secondary-alt':'#474E68',
        'primary-light':'#9ED5C5',
        'secondary-light':'#8EC3B0',
        'primary-dark':'#50577A',
        'secondary-dark':'#6B728E',
        'primary-light-alt':'#A5F1E9',
        'secondary-light-alt':'#7FE9DE',
        'primary-dark-alt':'#6C4AB6',
        'secondary-dark-alt':'#8D72E1',
      },
    },
  },
  plugins: [],
}
