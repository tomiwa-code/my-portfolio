/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      primary: "#4ECDC4",
      secondary: "#001829",
      lightGrey: "#CCCCCC",
      darkGrey: "#888888",
      white: "#f7f7f7",
      danger: '#CA3C25'
    },
    extend: {
      fontFamily: {
        stretch: "stretch",
      },
      boxShadow: {
        "3xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
