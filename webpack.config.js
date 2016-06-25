'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		'main': [
			path.join(__dirname, 'app/js/app.js')
		]
	},
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'bundle.js'
	},
	module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: "css-loader!sass-loader"
            }
        ]
    },
    plugins: [
    	new ExtractTextPlugin("dist/style/main.css")
 	]
};