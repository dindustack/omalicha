/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF44F",
        secondary: "#333333",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        playfair: ["Playfair Display"],
      },
    },
  },
  plugins: [],
};
