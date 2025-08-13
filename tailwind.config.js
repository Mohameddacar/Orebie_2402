/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#767676',
      secondary: '#262626',
    },
  fontFamily: {
    jost: ['Jost', 'sans-serif'],     
    voll: ['Vollkorn', 'serif'],   
    dm: ['DM Sans', 'sans-serif'], 
  },
    maxWidth: {
        'container': '1170px',
      },backgroundImage:{
        'banner': "url('./public/daacr.png')"
      }

  },
  plugins: [],
}
}