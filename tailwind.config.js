/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#242424',
        'secondary': '#f9f9f9',
        'linkBase': '#646cff',
        'linkHover': '#747bff',
      },
    },
  },
  plugins: [],
}