var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template:__dirname + '/app/index.html',
	filename: "index.html",
	inject:"body"
})


module.exports ={
	//Step1
	entry:['./app/index.js'
	],
	//Step3
	output:{
		path:__dirname + '/dist',
		filename:"index_bundle.js"
	},
	//Step2
	module:{
		loaders:[
		{
			test: /\.js$/, exclude:/node_modules/, loader:"babel-loader"
		}]
	},
	//Step4
	plugins:[HtmlWebpackPluginConfig]
}