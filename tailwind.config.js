/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'outline-text': '#F8F8FB', // Adjust stroke color if needed
      },
    },
  },
  plugins: [
    require('daisyui'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px #111a24', // Define stroke color and width
          'color': 'transparent', // Transparent fill for hollow text effect
        },
      });
    },
  ],
};
