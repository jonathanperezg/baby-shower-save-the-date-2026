/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#2C1A0E',
        roast: '#4A2C17',
        mocha: '#6B3F24',
        latte: '#C49A6C',
        cream: '#F5E6D3',
        oat: '#EDD9C0',
        foam: '#FAF3EB',
        steam: '#F9F5F0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Cormorant"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
