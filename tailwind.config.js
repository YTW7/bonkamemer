/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'navblue':'#1e264a',
      'navneon':'#bdf347',
      'bonk':'#ff8210',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', ],
      'serif': ['ui-serif', ],
      'mono': ['ui-monospace', ],
      'display': ['Abril Fatface',],
      'body': ['"Abril Fatface"',],
      'cursive':['Abril Fatface',],
    },
  },
  plugins: [],
}