const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/js/index',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Ripper',
      template: path.join(__dirname, 'app', 'templates', 'index.html'),
      hash: true,
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
