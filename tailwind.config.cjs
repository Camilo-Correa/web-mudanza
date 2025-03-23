/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27AE60", // verde menta
        secondary: {
          100: "#FFFFFF", //Blanco
          200: "#2C3E50", //gris oscuro
        },
      },
    },
  },
  plugins: [],
};
