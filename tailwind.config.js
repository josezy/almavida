/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#002D43",
        darkGreen: "#00483C",
        flowerRed: "#F04842",
        flowerWhite: "#FFFFFF",
        flowerYellow: "#E6AD58",
        brown: "#9E6548",
        cream: "#EBE1D6",
      },
    },
  },
  plugins: [],
}

