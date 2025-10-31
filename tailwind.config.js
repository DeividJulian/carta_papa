module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}', // opcional si tienes pages
  ],
  theme: {
    extend: {
      colors: {
        soccerGreen: '#0b6b3e',
        stadiumGray: '#1f2937',
        goalYellow: '#ffd166',
        fanBlue: '#0ea5e9'
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
