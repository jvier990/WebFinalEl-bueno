/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#5c059b", secondary: "#1E293E", accent: "#CB5930" },
    },
  },
  plugins: [],
};
