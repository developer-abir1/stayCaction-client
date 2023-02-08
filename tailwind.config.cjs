/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#3252DF',
          secondary: '#FF498B',
          accent: '#152C5B',
          brand: '#1ABC9C',
          info: '#B0B0B0',
          'base-100': '#FFFFFF',
        },
      },
      'dark',
      'cupcake',
    ],
  },
};
