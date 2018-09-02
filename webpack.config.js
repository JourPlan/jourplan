var path = require('path');

module.exports = {
	entry: {
		 'member/member' : __dirname + '/src/js/member/member.jsx'
		,'main/main' : __dirname + '/src/js/main/main.jsx'
	},  
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	module: {
		loaders: [{
			test: /\.(js|jsx)?$/,
			loader: 'babel',
			query:{
				cacheDirectory: true,
				presets: ['react','es2015']
			}
		},
		{
			test: /\.css$/,
			loaders: ['style', 'css']
		},
		{
			test: /\.(ico|png|jpg|jpeg|gif|svg|otf|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loaders: ['url']
		}
		]
	}
};