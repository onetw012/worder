'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var distDir = path.join(__dirname, '/dist');
var buildDir = path.join(__dirname, '/build');

var appDir = path.join(__dirname, '/app');
var typeBuild = process.env.NODE_ENV || "development";
var outputDir = (typeBuild === "development") ? buildDir : distDir;

var pluginsList = [
  new CopyWebpackPlugin([{
    from: appDir + "/manifest.json",
    to: outputDir + '/manifest.json'
  }, {
    from: appDir + "/*.html",
    to: outputDir + '/*.html'
  }, {
    from: appDir + "/*.png",
    to: outputDir + "/*.png"
  }]),
  new ExtractTextPlugin("style/main.css"),
];

if (typeBuild === "production") {
  pluginsList.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    mangle: false
  }));
}


module.exports = {
  entry: {
    'main': [
      path.join(__dirname, 'app/js/app.js')
    ]
  },
  output: {
    path: outputDir,
    filename: 'bundle.js'
  },
  context: appDir,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!sass')
    }]
  },
  plugins: pluginsList,
  devtool: (typeBuild == "development") ? "source-map" : null,
};
