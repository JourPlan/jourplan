var path = require('path');

module.exports = {
	entry: {
		'plan/Hello' : __dirname + '/src/js/plan/Hello.js',
		'member/Login' : __dirname + '/src/js/member/Login.jsx',
		'main/App2' : __dirname + '/src/js/main/App2.js',
	},  
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	module: {
		loaders: [{
			// test: /\.jsx?$/,
			// loader: 'babel',
			// query:{
			// 	cacheDirectory: true,
			// 	presets: ['react','es2015']
			// }

			
			test: /\.(js|jsx)?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query:{
				cacheDirectory: true,
				presets: ['react','es2015'],
				plugins: ['react-hot-loader/babel']
			}

			// test: /\.(js|jsx)?$/,
            // loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
            //     cacheDirectory: true,
            //     presets: ['es2015', 'react']
            // })],
			// exclude: /node_modules/
		}]
	}
};