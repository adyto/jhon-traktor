/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-color-palette-1': '#FF7420',
        'text-color-palette-2': '#191A19',
        'text-color-palette-3': '#FFFFFF',
      },
      fontFamily: {
        Comforter: ['Comforter Brush', 'cursive'],
        Unlock: ['Unlock', 'cursive'],
      },
    },
  },
  plugins: [],
};
