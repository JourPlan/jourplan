var path = require('path');

module.exports = {
	entry: {
		'plan/App' : __dirname + '/src/js/plan/App.js',
		'main/App2' : __dirname + '/src/js/main/App2.js',
	},  
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			query:{
				cacheDirectory: true,
				presets: ['react','es2015']
			}
		}]
	}
};