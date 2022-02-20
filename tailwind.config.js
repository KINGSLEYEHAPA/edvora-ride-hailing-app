const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
      },
    },
  },
  plugins: [],
};
