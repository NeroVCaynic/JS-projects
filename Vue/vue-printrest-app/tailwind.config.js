/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#353941",
        "dark-secondary": "#26282B",
        "dark-alt-primary": "#5F85DB",
        "dark-alt-secondary": "#90B8F8",
        "light-primary": "#EFFFFD",
        "light-secondary": "#B8FFF9",
        "light-alt-primary": "#85F4FF",
        "light-alt-secondary": "#42C2FF",        
      },
      screens: {
        'ss': '522px'
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"]
    },
  },
  plugins: [],
}
