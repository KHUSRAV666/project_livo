/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik", "sans-serif"]
      },
      screens: {
        'sm0': '440px',
        // => @media (min-width: 640px) { ... }
  
        'md0': '568px',
        // => @media (min-width: 768px) { ... }
  
        'lg0': '924px',
        // => @media (min-width: 1024px) { ... }
        }
    },
  },
  plugins: [],
}
