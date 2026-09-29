/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Simple government-style colours
        navy: "#1b3a6b",
        navydark: "#12294d",
        saffron: "#e8891d",
        paper: "#f4f6f9",
      },
    },
  },
  plugins: [],
};
