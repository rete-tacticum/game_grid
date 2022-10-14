module.exports = {
  syntax: "postcss-scss",
  inline: true,
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-minify')
  ]
}