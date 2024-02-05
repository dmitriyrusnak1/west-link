/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow_Condensed'],
        'barlow-semi-condensed': ['Barlow-Semi-Condensed'],
        cormorant_garamond: ['Cormorant_Garamond'],
      },
    },
  },
  plugins: [],
};
