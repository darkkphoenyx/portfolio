/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
      },
       fontSize: {
        '8xl': '6rem',  // 96px
        '9xl': '8rem',  // 128px
        '10xl': '10rem', // 160px
        '11xl': '12rem', // 192px
        '12xl': '14rem', // 224px
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
    },
  },
  plugins: [],
};
