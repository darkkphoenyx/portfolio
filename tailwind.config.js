/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: ["Water Brush"],
        tertiary: ["Oswald"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
      },
      fontSize: {
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
        "10xl": "10rem", // 160px
        "11xl": "12rem", // 192px
        "12xl": "14rem", // 224px
        "13xl": "16rem",
        "14xl": "18rem",
        "15xl": "20rem",
      },
      height: {
        108: "27rem", // 432px
        120: "30rem", // 480px
        132: "33rem", // 528px
        144: "36rem", // 576px
        156: "39rem", // 624px
        168: "42rem", // 672px
        180: "45rem", // 720px
      },
      keyframes: {
        move: {
          "0%, 100%": {
            transform: "translateY(-2%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        move: "move 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
