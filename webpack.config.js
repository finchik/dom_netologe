// Generated using webpack-cli https://github.com/webpack/webpack-cli
process.traceDeprecation = true;
const path = require("path");
const TsconfigPathPlugin = require("tsconfig-paths-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // https://webpack.js.org/plugins/copy-webpack-plugin/
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("webpack-dev-server");

module.exports = {
	mode: 'none',
	target: 'web',
	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "dist"),
	},


	module: {
		rules: [
			{
				test: /\.ts$/i,
				exclude: /node_modules/,
				use: "ts-loader",
				include: [
					path.resolve(__dirname, 'src/js')
				],
			},
			{
				test: /\.js$/i,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						],
						plugins: [
							'@babel/plugin-proposal-class-properties',
						],
					}
				},],
			},
			{
				test: /\.(s?)[ac]ss$/i,
				include: [
					path.resolve(__dirname, './src')
				],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					}, {
						loader: 'postcss-loader'
					}
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},

			// Add your rules for custom modules here
			// Learn more about loaders from https://webpack.js.org/loaders/
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			minify: {
				collapseWhitespace: false,
			}
		}),

		new CopyPlugin({
			patterns: [
				{
					from: './src/pic',
					to: './pic'
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new TsconfigPathPlugin({
			configFile: "./tsconfig.json"
		}),
		// Add your plugins here
		// Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],

	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", "..."],

	},
};
