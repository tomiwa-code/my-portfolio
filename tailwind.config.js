/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "#4ECDC4",
      secondary: "#001829",
      lightGrey: "#CCCCCC",
      darkGrey: "#888888",
      white: "#f7f7f7",
    },
    extend: {
      fontFamily: {
        stretch: "stretch",
      },
      backgroundImage: {
        pattern: "linear-gradient(to right, #000000, #000000 2px, #b2bec6 2px, #b2bec6 )",
      },
    },
  },
  plugins: [],
};
