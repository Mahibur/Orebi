/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'head': ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'head': '#262626',
        'body': '#767676',
        'third': '#6D6D6D',
      },
    },
  },
  plugins: [],
}

