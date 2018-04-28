var merge = require("webpack-merge"),
	UglifyJSPlugin = require("uglifyjs-webpack-plugin"),
	config = require("./webpack.config.js");

module.exports = merge(config, {
	plugins: [
		new UglifyJSPlugin()
	]
});