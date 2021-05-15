const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.jsx", "./components/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "w-1": "#F0F6FC",
      "w-2": "#C9D1D9",
      "w-3": "#AFBAC5",
      "w-4": "#8B939E",
      "w-5": "#6E7681",
      "b-5": "#484F58",
      "b-4": "#30373D",
      red: "#FF0000",
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    extend: {
      spacing: {
        108: "54rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
