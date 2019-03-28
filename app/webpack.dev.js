const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommons = require('./webpack.config');

module.exports = merge(webpackCommons, {
  entry: ["@babel/polyfill", path.join(__dirname, 'src/index.js')],
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      '/api': 'http://localhost:3001',
    }
  }
});
