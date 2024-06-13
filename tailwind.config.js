/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'gray-600': '#1E1E29',
      'gray-400': '#7F7F98',
    },
    extend: {},
  },
  plugins: [],
}

