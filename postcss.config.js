var autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    autoprefixer,
    'cssnano': {},
  },
};
