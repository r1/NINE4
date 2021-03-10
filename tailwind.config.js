module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FBFBFB",
          200: "#f4f4f6",
          300: "#b8bcbf",
          400: "#999999",
          500: "#7F7F7F",
          600: "#666666",
          700: "#4C4C4C",
          800: "#121212",
          900: "#191919",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
