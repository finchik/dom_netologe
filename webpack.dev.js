const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");


module.exports = merge(common, {
	mode: "development",
	devtool: 'source-map',

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		historyApiFallback: true,
		// open: true,
		// host: "localhost",
		port: 8080,
	},
	plugins: [
		// new webpack.LoaderOptionsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ESLintPlugin({
			files: path.resolve(__dirname, "./src/js"),
		}),

	],
});
// cross-env TS_NODE_PROJECT=\"tsconfig-for-webpack-config.json\"
