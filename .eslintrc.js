module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true
	},
	extends: [
		'airbnb-base',
		"plugin:import/errors"

	],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-tabs': 0,
		'indent': 0,
		'no-unused-vars': 1,
		'class-methods-use-this': 1,
		'no-useless-constructor': 2,
		'import/no-unresolved': [2, { "commonjs": true }],
		'linebreak-style': ["error", "windows"],
		'import/no-extraneous-dependencies': [2,
			{ "devDependencies": true, "optionalDependencies": true, "peerDependencies": true }],
	},
	plugins: [
		'import',
	]
}
