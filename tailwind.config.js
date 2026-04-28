/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001F4D',
        secondary: '#17A2B8',
        accent: '#D4AF37',
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
