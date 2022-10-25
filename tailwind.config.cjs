/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        'negro2':'rgba(0,0,0,.5)',
      },
      backgroundImage:{
        'fondoPrincipal':"url('/img/fondoprincipal.svg')",
        "gradientePrincipal":"linear-gradient(to right, rgb(202, 138, 4), rgb(220, 38, 38))",
        "gradienteSecundario":"linear-gradient(to left, rgb(202, 138, 4), rgb(220, 38, 38))",
      },
      fontFamily:{
        'Oswald': ['sans-serif'],
        'Roboto':['sans-serif']
      }
    },
  },
  plugins: [],
}
