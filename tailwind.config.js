/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        light: '0px 4px 4px 0px rgba(0,0,0, 0.1);',
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed'],
        'barlow-semi-condensed': ['Barlow Semi Condensed'],
        'cormorant-garamond': ['Cormorant Garamond'],
      },
    },
  },
  plugins: [],
};
