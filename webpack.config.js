const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const precss = require("precss");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	"entry": {
		"app": `${__dirname}/vendor/app.js`
	},
	"output": {
		"path": `${__dirname}/public/javascripts`,
		"publicPath": '/public',
		"filename": "[name].bundle.js"
	},
	"plugins": [
		new webpack.optimize.CommonsChunkPlugin('commons.bundle.js'),
		new ExtractTextPlugin("../stylesheets/app.css")
	],
	"resolve":{
		"extensions": ['','.js','.json', '.vue'],
		"alias": {
			"lodash": "lodash/lodash.min.js",
			"whatwg-fetch": "whatwg-fetch"
		}
	},
	"module": {
		loaders: [
			{
				"test": /\.vue$/,
				"exclude": /node_moudles/,
				"loader": "vue"
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				"test": /\.less$/,
				"loader": ExtractTextPlugin.extract("style", "css!postcss!less")
			}
		]
	},
	postcss: function() {
		return [precss, autoprefixer];
	}
}