/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poke: ["Pokemon Solid", "sans-serif"],
    },
  },
  plugins: [daisyui, require("@tailwindcss/typography")],
};
