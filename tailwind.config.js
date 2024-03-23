/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'secondary': '#18181C',
        'textColor': '#f9f9f9',
        'linkBase': '#646cff',
        'linkHover': '#747bff',
      },
    },
  },
  plugins: [],
}