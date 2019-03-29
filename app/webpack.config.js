const path = require('path');
const CleanCSSPlugin = require('less-plugin-clean-css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  {
    polyfill: 'babel-polyfill',
    app: path.join(__dirname, './src/index.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader', options: { // compiles Less to CSS
            plugins: [
              new CleanCSSPlugin({ advanced: true })
            ]
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
	],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  }
};
