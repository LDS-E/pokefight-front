import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      main: ["Pokemon Solid", "sans-serif"],
      secondary: ["Orbitron", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "320px",
      },
      backgroundSize: {
        "100p": "100% 100%",
      },
    },
  },
  plugins: [daisyui],
};
