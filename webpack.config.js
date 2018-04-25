var path = require('path'),
	webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './index.js',
	mode: 'development',
	output: {
		filename: 'style-guide.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			use: "url-loader"
		},
		{
			test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
			use: 'file-loader'
		}]
	}
};