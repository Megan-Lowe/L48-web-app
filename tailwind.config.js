/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        l48green: "rgb(116, 188, 68)",
        l48tan: "rgb(230, 230, 230)",
        l48grey: "rgb(128, 128, 128)",
      },
    },
  },
  plugins: [],
};
