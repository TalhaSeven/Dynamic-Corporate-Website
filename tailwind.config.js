/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontSize: {
        'xxs': '0.5rem', // Özel metin boyutunu ekleyin
        '2xs': '0.2rem', // Özel metin boyutunu ekleyin
        '3xs': '0.1rem', // Özel metin boyutunu ekleyin
        '4xs': '2px', // Özel metin boyutunu ekleyin
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}