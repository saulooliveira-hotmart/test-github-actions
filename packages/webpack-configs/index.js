'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const getClientEnvironment = require('./env');
const env = getClientEnvironment();

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', './build'),
    library: {
      name: '@hotmart/app-bank-secrecy',
      type: 'umd',
    },
    sourceMapFilename: '[file].map'
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
    usedExports: true,
    concatenateModules: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    })
  ]
};
