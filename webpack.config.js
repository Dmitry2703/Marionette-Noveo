'use strict';

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['./app/index.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.jst$/,
        loader: 'underscore-template-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist'
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  resolve: {
    root: path.join(__dirname, './app')
  },
  resolveLoader: {
    root: path.join(__dirname, './node_modules')
  }
};
