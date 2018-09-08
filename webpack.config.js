var path = require('path');

module.exports = {
	entry: {
		 'member' : __dirname + '/src/js/member/member.jsx'
		,'main' : __dirname + '/src/js/main/main.jsx'
		,'setting' : __dirname + '/src/js/setting/setting.jsx'
		,'plan' : __dirname + '/src/js/plan/plan.jsx'
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