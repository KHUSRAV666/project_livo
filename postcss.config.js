// postcss.config.js
// module.exports = {
//   plugins: {
//     'postcss-import': {},
//     tailwindcss: {},
//     autoprefixer: {},
//   }
// }
module.exports = {
  plugins: ["tailwindcss", "postcss-nesting", "autoprefixer"],
};