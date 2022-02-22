const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "870px",
        // => @media (min-width: 768px) { ... }

        lg: "1240px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
