/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      linearBorderGradients:{
        directions:{
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors:{
          'yellow-red':['rgb(202, 138, 4)','rgb(220, 38, 38)'],
         
        },
        borders:{
          '1': '1px',
          '2': '2px',
          '4': '4px',
        },
       background:{
        'gray-900':'#111827',
       }
        
      },
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
  plugins: [
    require('tailwindcss-border-gradient-radius'),
  ],
}
