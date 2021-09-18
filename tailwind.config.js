module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'gluten': ['Gluten', 'cursive']
      },
      width: {
        '100': '60rem'
      },
      colors: {
        primary: "#E1FDF9",
        secondary: "#6CE1D9",
        dark: "#01497B"
      }
    },
  },
  variants: {
    cursor: ( { after } ) => after( ['disabled'] ),
    opacity: ( { after } ) => after( ['disabled'] ),
    extend: {
      backgroundColor: ['active'],

    },
  },
  plugins: [],
}
