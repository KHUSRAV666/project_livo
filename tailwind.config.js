/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik", "sans-serif"]
      },
      colors: {
        navBackground: "#ffffff",
        background: "#E5E5E5",
        primary: "#4F5665",
        secondary: "#0B132A",
        tertiary: "#F53838",
        myBorder: "#DDDDDD"
      }
    },
  },
  plugins: [],
}
