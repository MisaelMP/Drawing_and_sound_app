module.exports = {
	plugins: [
		require('postcss-import')({
			path: ['node_modules'], // Add node_modules to import search path
		}),
		require('postcss-nested'),
		require('autoprefixer'),
	],
};
