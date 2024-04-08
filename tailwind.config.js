/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['home.html', 'gallery.html', 'photos.html'],
  theme: {
    extend: {
      colors: {
        BlackText: '#212529',
        mygreen: '#70AF46',
        bgbutton: '#7ABA4A',
        borderImg: '#191b1f',
        cardBg: '#1E2126',
      },
      lineHeight: {
        customLeading: '1.12'
      }
    },
  },
  plugins: [],
}

