// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Graphik: ['Graphik', 'inter' , 'sans-serif']
      }
    },
  },
  plugins: [],
}