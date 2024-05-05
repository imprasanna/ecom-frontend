/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ysabeau: ["Ysabeau Infant", "sans-serif"],
      },
      screens: {
        xxs: "321px",
        xs: "376px",
        sm: "426px",
        md1: "540px",
        md01: "768px",
        md2: "820px",
        md3: "912px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
