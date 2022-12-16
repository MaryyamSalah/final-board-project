/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#E0DFE7",
      },
      maxWidth: {
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};
