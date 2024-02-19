/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violets : 'rgb(250, 89, 89)',
        blueHover : 'rgb(82, 103, 223)',
        activeGrey : 'rgb(247, 247, 247)',
        footerBg : 'rgb(36, 42, 69)'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/Rectangle.png')",
      },
    },
  },
  plugins: [],
};