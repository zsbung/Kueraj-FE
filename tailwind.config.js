/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins,sans-serif"],
      },
      colors: {
        base: "#FFFF",
        base1: "#F7F2F2",
        primary: "#3aad90",
        secondary: "#409981",
        text: "#171717",
        abu: "#B7B7B7",
        cbtn: "#013D29",
        star: "#FFC400",
        // base: "#FFFF",
        // base1: "#F7F2F2",
        // primary: "#3A54AA",
        // secondary: "#071A84",
      },
    },
  },
  plugins: [],
};
