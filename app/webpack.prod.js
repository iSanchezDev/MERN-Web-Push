const merge = require('webpack-merge');
const webpackCommons = require('./webpack.config');

module.exports = merge(webpackCommons, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
});
