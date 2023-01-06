/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      primary: "hsl(176, 68%, 64%)",
      secondary: "hsl(198, 60%, 50%)",
      alert: "hsl(0, 100%, 63%)",
      white: "hsl(0, 0%, 100%)",
      "blue-reviews": "hsl(219, 30%, 18%)",
      "blue-email": "hsl(217, 28%, 15%)",
      "blue-main": "hsl(218, 28%, 13%)",
      "blue-footer": "hsl(216, 53%, 9%)",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
  },
};
