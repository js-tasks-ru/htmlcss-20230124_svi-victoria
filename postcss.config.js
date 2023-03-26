module.exports = {
  syntax: 'postcss-scss',
  map: { inline: true },
  plugins: [
    require('postcss-import'),
    require('postcss-advanced-variables'),
    require('postcss-custom-media'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
