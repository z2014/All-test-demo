var webpack = require('webpack')
var webpackConfig = require('./webpack.config.js')
webpack(webpackConfig).run(function (error, status) {
	// console.log('error', error)
	// console.log('status', status)
})