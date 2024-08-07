/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        darkGray: "#1A1A1A",
        charcoal: "#333333",
        teal: "#00BFA6",
        cyan: "#0ABAB5",
        limeGreen: "#A3E635",
        lightGray: "#E5E5E5",
        gray: "#B3B3B3",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
