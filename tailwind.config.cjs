module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        databrains: {
          teal: '#23949C',
          aqua: '#66CAD2',
          paleCyan: '#BEFCFF',
          coral: '#FF4F5A',
          yellow: '#F1C40F',
          slate: '#31454E',
          lightGray: '#F4F4F4',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['"Exo 2"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
