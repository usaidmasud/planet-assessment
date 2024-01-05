/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#233A6C",
          main: "#14213d",
          hover: "#111C35",
        },
        secondary: {
          light: "#FDB034",
          main: "#fca311",
          hover: "#E58E02",
        },
        light: {
          light: "#E9E9E9",
          main: "#e5e5e5",
          hover: "#C5C5C5",
        },
      },
    },
  },
  plugins: [],
};
