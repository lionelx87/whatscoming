/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          400: '#7F7F98',
          600: '#1E1E29',
          800: '#373743',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

