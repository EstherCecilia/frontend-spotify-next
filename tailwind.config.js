/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          gray: "#101010",
          lg: "#151515",
          lgHover: "#282828",
          green: "#1DB954",
        },
        side: {
          whitege: "#D1D5DB",
          bub: "#0e0e0e",
        },
      },
    },
  },
  plugins: [],
};
