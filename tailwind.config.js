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
      keyframes: {
        pokeballShake: {
          "0%": {
            transform: "translateX(0) rotate(0)",
          },
          "20%": {
            transform: "translateX(-10px) rotate(-20deg)",
          },
          "30%": {
            transform: "translateX(10px) rotate(20deg)",
          },
          "50%": {
            transform: "translateX(-10px) rotate(-10deg)",
          },
          "60%": {
            transform: "translateX(10px) rotate(10deg)",
          },
          "100%": {
            transform: "translateX(0) rotate(0)",
          },
        },
        pokeballFall: {
          "0%": {
            transform: "translateY(-200%)",
          },
          "60%": {
            transform: "translateY(0)",
          },
          "80%": {
            transform: "translateY(-10%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        pokeballCatch: {
          to: {
            filter: "saturate(0.8) brightness(0.8)",
          },
        },
      },
    },
  },
  plugins: [daisyui],
};
