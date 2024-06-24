/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      wm: "120px",
      wt: "600px",
      wd: "1000px",
    },
  },
  plugins: [],
};
