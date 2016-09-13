var webpack = require('webpack');
module.exports = {
  //target: 'node', 
	//Entry or main component of the project
	entry: [,
    	'./src/index.js'
  	],
  	//Output or where the final bundle.js file should be created
  	output:{
		  path:__dirname,
      publicPath: '/',
		  filename:"bundle.js"
	  },
  	module: {
  		//loaders are used to transform jsx/es6 to plain javascript
    	loaders: [{
      		exclude: /node_modules/,
      		loader: 'babel',
      		query: {
        		presets: ['react', 'es2015', 'stage-2']
      		}
    	}]
  	},
  	//files with these extensions will be used to resolve the modules
  	resolve: {
    	extensions: ['', '.js']
  	},  
  	//to configure the behavior of webpack-dev-server
  	devServer: {
    	historyApiFallback: true,
    	contentBase: './'
  	}
}
