/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        buttonColor: "#FF5700",
        textColor: "#000000",
        primary: "#AF0606",
        bgColor: "#ffffff",
      },
      backgroundImage: {
        headerBg: 'url("../src/assets/img/bg-test.png")',
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};


