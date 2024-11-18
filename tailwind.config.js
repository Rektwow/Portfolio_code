/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#39ff14",
        secondary: "#f59e0b",
        tertiary: "#8a2be2",
      },
    },
  },
  plugins: [],
};
