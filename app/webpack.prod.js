const merge = require('webpack-merge');

const webpackCommons = require('./webpack.config');

module.exports = merge(webpackCommons, {
  mode: 'production',
  devtool: 'source-map'
});